"""Compose the trial gallery with Super Sam's empty-handed cutout."""

from pathlib import Path

from PIL import Image

from tools.compose_gallery_characters import (
    BASE,
    FIGURES,
    PROSECUTION,
    Figure,
    place_figure,
    restore_desks,
)


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets/bg_gallery_characters_sam_no_bag.webp"
SAM_NO_BAG = Figure(
    source="bg_gallery_characters_supersam_standing_no_bag.png",
    desk=PROSECUTION,
    center_x=1108,
    height_m=1.88,
    feet_offset_m=0.0,
)


def main() -> None:
    if OUT.exists():
        raise FileExistsError(f"Back up the existing variant before recomposing: {OUT}")
    clean = Image.open(BASE).convert("RGBA")
    if clean.size != (1376, 768):
        raise ValueError(f"Unexpected gallery dimensions: {clean.size}")
    canvas = clean.copy()
    for figure in (*FIGURES[:2], SAM_NO_BAG):
        place_figure(canvas, figure)
    restore_desks(canvas, clean)
    canvas.convert("RGB").save(OUT, "WEBP", lossless=True, method=6)
    print(OUT)


if __name__ == "__main__":
    main()
