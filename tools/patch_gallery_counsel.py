"""Paste only regenerated counsel desks into the clean gallery plates."""

import argparse
import json
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

from tools.compose_gallery_characters import (
    DEFENSE, FIGURES, PROSECUTION, back_edge, legacy_back_edge, place_figure,
)
from tools.compose_gallery_case5_common import (
    BERRONDO, SAM, SECRETARY, load, paste, table_bag,
)
from tools.compose_gallery_sam_no_bag import SAM_NO_BAG

ROOT = Path(__file__).resolve().parents[1]
MASTERS = ROOT / "tools/masters"
STAMP = "20260930"
DONOR = MASTERS / f"bg_gallery_counsel_generated_{STAMP}.png"
BASE = MASTERS / f"bg_gallery_before_counsel_fix_{STAMP}.webp"
CAST = {
    "sam_berrondo": ((SAM, 1072, 1.88), (BERRONDO, 1142, 1.83)),
    "sam_berrondo_secretary": ((SECRETARY, 1026, 1.76), (SAM, 1100, 1.88),
                             (BERRONDO, 1151, 1.83)),
    "berrondo_witness_sam": ((SAM, 1108, 1.88),),
    "sam_witness_berrondo": ((BERRONDO, 1050, 1.83), (SECRETARY, 1120, 1.76)),
    "secretary_berrondo_witness": ((SECRETARY, 1120, 1.76),),
    "secretary_berrondo_accused": ((BERRONDO, 1060, 1.83), (SECRETARY, 1136, 1.76)),
    "empty_bag": (),
}
BAGS = {"sam_witness_berrondo", "secretary_berrondo_witness", "empty_bag"}


def patch_mask(size):
    mask = Image.new("L", size)
    draw = ImageDraw.Draw(mask)
    # Cover both old and new outlines; blend only the surrounding wall/floor.
    draw.polygon([(184, 478), (342, 420), (435, 420), (435, 526),
                  (313, 631), (184, 631)], fill=255)
    draw.polygon([(939, 420), (1035, 420), (1192, 478), (1192, 631),
                  (1062, 631), (939, 526)], fill=255)
    soft = np.array(mask.filter(ImageFilter.GaussianBlur(1.2)), dtype=float)
    soft[soft < 1] = 0
    return soft / 255


def hide_behind_desks(canvas, clean, measured=False):
    alpha = np.array(canvas.getchannel("A"), dtype=float)
    rows = np.arange(clean.height)[:, None]
    pixels = np.array(clean).astype(int)
    for desk in (DEFENSE, PROSECUTION):
        locate = back_edge if measured else legacy_back_edge
        line = locate(pixels, desk)[None, :]
        coverage = np.clip(rows - line + 0.5, 0, 1)
        alpha[:, desk.x_min:desk.x_max + 1] *= 1 - coverage
    canvas.putalpha(Image.fromarray(np.rint(alpha).astype(np.uint8)))


def foreground_canvas(stem, size):
    canvas = Image.new("RGBA", size)
    suffix = stem.removeprefix("bg_gallery_case5_")
    if stem != "bg_gallery" and suffix != "empty_bag":
        for figure in FIGURES[:2]:
            place_figure(canvas, figure)
    if stem.startswith("bg_gallery_characters"):
        sam = SAM_NO_BAG if stem.endswith("no_bag") else FIGURES[2]
        place_figure(canvas, sam)
    for name, x, height_m in CAST.get(suffix, ()):
        desk_px = PROSECUTION.height(x)
        feet_y = round(PROSECUTION.rim_y(x) + desk_px)
        paste(canvas, load(name), center_x=x, bottom=feet_y,
              height=round(height_m * desk_px / 0.95))
    return canvas


def foreground_alpha(stem, clean):
    canvas = foreground_canvas(stem, clean.size)
    hide_behind_desks(canvas, clean)
    suffix = stem.removeprefix("bg_gallery_case5_")
    if suffix in BAGS:
        table_bag(canvas)
    return np.array(canvas.getchannel("A"), dtype=float) / 255


def repair_contact(stem, backgrounds):
    old, new = backgrounds
    canvas = foreground_canvas(stem, old.size)
    hide_behind_desks(canvas, new, measured=True)
    if stem.removeprefix("bg_gallery_case5_") in BAGS:
        table_bag(canvas)
    composited = Image.alpha_composite(new.convert("RGBA"), canvas)
    band = np.zeros((old.height, old.width), dtype=bool)
    rows = np.arange(old.height)[:, None]
    for desk in (DEFENSE, PROSECUTION):
        old_line = legacy_back_edge(np.array(old).astype(int), desk)[None, :]
        new_line = back_edge(np.array(new).astype(int), desk)[None, :]
        contact = ((rows >= np.minimum(old_line, new_line) - 2) &
                   (rows <= np.maximum(old_line, new_line) + 3))
        band[:, desk.x_min:desk.x_max + 1] = contact
    return np.array(composited.convert("RGB")), band


def persist_result(result, path, install):
    directory = ROOT / "assets" if install else MASTERS / "counsel_preview"
    directory.mkdir(exist_ok=True)
    output = directory / path.name
    temporary = output.with_suffix(".counsel.tmp.webp")
    Image.fromarray(result).save(temporary, "WEBP", lossless=True, method=6)
    temporary.replace(output)
    reopened = np.array(Image.open(output).convert("RGB"))
    assert np.array_equal(reopened, result), "Lossless export changed pixels"
    return reopened


def verify_contact_fix(path, result, band):
    rejected = MASTERS / f"{path.stem}_before_counsel_contact_fix_{STAMP}.webp"
    previous = np.array(Image.open(rejected).convert("RGB"))
    changed = np.any(result != previous, axis=2)
    assert not np.any(changed & ~band), "Changed pixels outside the contact band"
    return int(changed.sum())


def compose_plate(path, context):
    clean, donor, mask, install = context
    backup = MASTERS / f"{path.stem}_before_counsel_fix_{STAMP}.webp"
    if not backup.exists():
        backup.write_bytes(path.read_bytes())
    original = np.array(Image.open(backup).convert("RGB"))
    foreground = foreground_alpha(path.stem, clean)
    active = mask * (1 - foreground)
    delta = donor.astype(float) - np.array(clean).astype(float)
    result = np.clip(np.rint(original + delta * active[:, :, None]), 0, 255)
    result = result.astype(np.uint8)
    new_base = np.rint(np.array(clean) + delta * mask[:, :, None]).astype(np.uint8)
    contact, band = repair_contact(path.stem, (clean, Image.fromarray(new_base)))
    band &= mask > 0
    result[band] = contact[band]
    reopened = persist_result(result, path, install)
    changed = np.any(reopened != original, axis=2)
    assert not np.any(changed & (active == 0) & ~band), "Changed protected pixels"
    return {"file": path.name, "changed_pixels": int(changed.sum()),
            "outside_changes": int((changed & (mask == 0)).sum()),
            "foreground_changes_outside_contact": int(
                (changed & (foreground == 1) & ~band).sum()),
            "contact_fix_changed_pixels": verify_contact_fix(path, reopened, band),
            "outside_contact_fix_changes": 0,
            "contact_pixels_recomposed": int(band.sum())}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--install", action="store_true")
    args = parser.parse_args()
    clean = Image.open(BASE).convert("RGB")
    donor = np.array(Image.open(DONOR).convert("RGB").resize(
        clean.size, Image.Resampling.LANCZOS))
    mask = patch_mask(clean.size)
    context = (clean, donor, mask, args.install)
    paths = sorted((ROOT / "assets").glob("bg_gallery*.webp"))
    results = [compose_plate(path, context) for path in paths]
    report = {"size": clean.size, "installed": args.install, "results": results}
    (MASTERS / f"bg_gallery_counsel_fix_{STAMP}.verification.json").write_text(
        json.dumps(report, indent=2), encoding="utf-8")
    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()
