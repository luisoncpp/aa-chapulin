"""Shared pieces for the Case 5 gallery plates (see court-character-compose skill).

Every plate starts from a copy of the clean `bg_gallery.webp`. The defense
columns are copied pixel for pixel from the approved `bg_gallery_characters`
plate; prosecution figures are sized from the desk; the witness stands inside
the podium's open U, on the camera side of its closed front, facing the judge.
"""

import shutil
from pathlib import Path

import numpy as np
from PIL import Image

from tools.compose_gallery_characters import (
    BASE, DEFENSE, DESK_TOP_M, PROSECUTION, back_edge,
)


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
MASTERS = ROOT / "tools/masters"
APPROVED = ASSETS / "bg_gallery_characters.webp"
DATE = "20260927"

SAM = "bg_gallery_characters_supersam_standing.png"   # approved cutout, "$" bag
SAM_WITNESS = "bg_gallery_sam_witness.png"
BERRONDO = "bg_gallery_berrondo_standing.png"          # faces screen left
BERRONDO_WITNESS = "bg_gallery_berrondo_witness.png"   # back three-quarter
SECRETARY = "bg_gallery_secretary_standing.png"
FULL_BAG = "bg_gallery_sam_bag_on_table.png"           # cotton-stuffed, "$"

# Podium: closed front meets the inner floor at y=680, where the floor scale
# (fitted on the two desks) is 163 px/m. The witness stands inside the U.
WITNESS_FEET_Y = 696
WITNESS_X = 700


def floor_ppm(feet_y: float) -> float:
    """Pixels per metre on the floor, fitted on both desk corners."""
    return 107 + (feet_y - 530) * 32 / 85.5


def load(name: str) -> Image.Image:
    image = Image.open(MASTERS / name).convert("RGBA")
    # Generated cutouts carry a faint alpha haze far outside the figure.
    alpha = image.getchannel("A").point(lambda v: 0 if v <= 32 else v)
    image.putalpha(alpha)
    return image.crop(alpha.getbbox())


def paste(canvas: Image.Image, image: Image.Image, center_x: int, bottom: int,
          height: int) -> None:
    width = round(image.width * height / image.height)
    image = image.resize((width, height), Image.Resampling.LANCZOS)
    canvas.alpha_composite(image, (center_x - width // 2, bottom - height))


def start() -> tuple[Image.Image, Image.Image]:
    """Clean room plus the approved defense columns."""
    clean = Image.open(BASE).convert("RGBA")
    canvas = clean.copy()
    box = (DEFENSE.x_min, 0, DEFENSE.x_max + 1, clean.height)
    canvas.paste(Image.open(APPROVED).convert("RGBA").crop(box), box[:2])
    return canvas, clean


def prosecution(canvas: Image.Image, clean: Image.Image,
                *figures: tuple[str, int, float]) -> None:
    """Place (cutout, center_x, height_m) farthest first, then restore the desk."""
    for name, x, height_m in sorted(figures, key=lambda f: f[1]):
        desk_px = PROSECUTION.height(x)
        feet_y = round(PROSECUTION.rim_y(x) + desk_px)
        paste(canvas, load(name), x, feet_y, round(height_m * desk_px / DESK_TOP_M))
    pixels = np.asarray(clean.convert("RGB")).astype(int)
    line = back_edge(pixels, PROSECUTION)[None, :]
    rows = np.arange(clean.height, dtype=np.float32)[:, None]
    alpha = np.round(np.clip(rows - line + 0.5, 0, 1) * 255).astype(np.uint8)
    box = (PROSECUTION.x_min, 0, PROSECUTION.x_max + 1, clean.height)
    canvas.paste(clean.crop(box), box[:2], Image.fromarray(alpha))


def table_bag(canvas: Image.Image) -> None:
    """Sam's full bag standing on the prosecution desk top."""
    paste(canvas, load(FULL_BAG), center_x=1072, bottom=474, height=46)


def witness(canvas: Image.Image, clean: Image.Image, name: str,
            height_m: float) -> None:
    height = round(height_m * floor_ppm(WITNESS_FEET_Y))
    paste(canvas, load(name), WITNESS_X, WITNESS_FEET_Y, height)
    # Side rails and balusters are nearer the camera than the witness's arms.
    for box in ((556, 500, 612, 768), (768, 500, 822, 768)):
        canvas.paste(clean.crop(box), box[:2])


def save(canvas: Image.Image, name: str, reason: str) -> None:
    target = ASSETS / f"{name}.webp"
    if target.exists():
        backup = MASTERS / f"{name}_before_{reason}_{DATE}.webp"
        if not backup.exists():
            shutil.copy2(target, backup)
        print("backup", backup)
    # Write beside the target and swap: an open viewer can block truncation.
    temp = target.with_suffix(".tmp.webp")
    canvas.convert("RGB").save(temp, "WEBP", lossless=True, method=6)
    temp.replace(target)
    print(target)
