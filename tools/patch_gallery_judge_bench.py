"""Paste the generated bench onto untouched gallery plates, then verify pixels."""

import argparse
import io
import json
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
MASTERS = ROOT / "tools/masters"
STAMP = "20260929"
BASE_BACKUP = MASTERS / f"bg_gallery_before_bench_fix_{STAMP}.webp"
DONOR = MASTERS / "bg_gallery_bench_selected_20260930.png"


def bench_mask(size):
    # Blend only the surrounding wall/floor strip. The whole bench is opaque.
    # Keep the judge untouched above his original desk contact line.
    xs, ys = np.meshgrid(np.arange(size[0]), np.arange(size[1]))
    edges = np.minimum.reduce([xs - 510, 864 - xs, ys - 326, 489 - ys])
    return np.clip(edges / 5.0, 0.0, 1.0)


def make_patch(clean):
    donor = Image.open(DONOR).convert("RGB")
    # Register the ENTIRE user-selected generated section to its input crop.
    # Never crop the furniture to the old outline: that leaves doubled rims.
    patch = donor.resize((355, 175), Image.Resampling.LANCZOS)
    canvas = clean.copy()
    canvas.paste(patch, (510, 315))
    return np.array(canvas)


def foreground_alpha(path, size):
    from tools.compose_gallery_case5_common import (
        BERRONDO_WITNESS, SAM_WITNESS, WITNESS_FEET_Y, WITNESS_X,
        floor_ppm, load, paste,
    )
    figures = {
        "bg_gallery_case5_berrondo_witness_sam": (BERRONDO_WITNESS, 1.83),
        "bg_gallery_case5_secretary_berrondo_witness": (BERRONDO_WITNESS, 1.83),
        "bg_gallery_case5_sam_witness_berrondo": (SAM_WITNESS, 1.88),
    }
    canvas = Image.new("RGBA", size)
    if path.stem in figures:
        name, height_m = figures[path.stem]
        paste(canvas, load(name), WITNESS_X, WITNESS_FEET_Y,
              round(height_m * floor_ppm(WITNESS_FEET_Y)))
    return np.array(canvas.getchannel("A"), dtype=float) / 255.0


def save_lossless(result, output):
    buffer = io.BytesIO()
    Image.fromarray(result).save(buffer, "WEBP", lossless=True, method=6)
    temporary = output.with_suffix(".bench.tmp.webp")
    temporary.write_bytes(buffer.getvalue())
    temporary.replace(output)
    return np.array(Image.open(output).convert("RGB"))


def compose_plate(path, context):
    base, patch, allowed, install = context
    backup = MASTERS / f"{path.stem}_before_bench_fix_{STAMP}.webp"
    if install and not backup.exists():
        backup.write_bytes(path.read_bytes())
    original = np.array(Image.open(backup).convert("RGB"))
    foreground = foreground_alpha(path, (base.shape[1], base.shape[0]))
    active = allowed * (1.0 - foreground)
    # Replace only the old background contribution at semitransparent edges.
    result = np.clip(np.rint(original.astype(float) +
        (patch.astype(float) - base) * active[:, :, None]), 0, 255).astype(np.uint8)
    output_dir = ROOT / "assets" if install else MASTERS / "bench_fix_preview"
    output_dir.mkdir(exist_ok=True)
    output = output_dir / path.name
    reopened = save_lossless(result, output)
    outside = int(np.count_nonzero(np.any(reopened != original, axis=2) & (active == 0)))
    assert outside == 0, f"Unexpected changes outside bench: {path}"
    assert np.array_equal(reopened, result), "Lossless export changed pixels"
    return {"file": path.name, "outside_changes": outside,
            "changed_pixels": int(np.count_nonzero(np.any(result != original, axis=2))),
            "protected_foreground": int(np.count_nonzero((allowed > 0) & (foreground == 1)))}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--install", action="store_true")
    args = parser.parse_args()
    clean = Image.open(BASE_BACKUP).convert("RGB")
    base = np.array(clean)
    allowed = bench_mask(clean.size)
    patch = make_patch(clean)
    context = (base, patch, allowed, args.install)
    paths = sorted((ROOT / "assets").glob("bg_gallery*.webp"))
    results = [compose_plate(path, context) for path in paths]
    report = {"size": clean.size, "installed": args.install, "results": results}
    if args.install:
        (MASTERS / "bg_gallery_bench_seam_fix_20260930.verification.json").write_text(
            json.dumps(report, indent=2), encoding="utf-8")
        Image.open(ROOT / "assets/bg_gallery.webp").save(
            MASTERS / "bg_gallery_bench_seam_fixed_20260930.png")
    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()
