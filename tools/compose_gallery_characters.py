"""Place generated character cutouts on the clean gallery without repainting it.

Figures are sized from the desks: a desk top is 0.95 m, so each figure's
pixels-per-metre comes from the desk height at the column where it stands,
its feet sit on the floor behind the desk and its hip meets the desk top.
Every pixel from the desk's back outline downwards is restored from the clean
image, so the desk edge stays pixel-identical and touches the figure.
"""

from dataclasses import dataclass
from pathlib import Path

import numpy as np
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
BASE = ROOT / "assets/bg_gallery.webp"
OUT = ROOT / "assets/bg_gallery_characters.webp"
MASTERS = ROOT / "tools/masters"
DESK_TOP_M = 0.95


@dataclass(frozen=True)
class Desk:
    x_min: int
    x_max: int
    corner_x: int      # back corner nearest the camera (gold top at corner_y)
    corner_y: float
    far_x: int         # back corner nearest the judge
    far_y: float
    near_height: float  # desk height in px at corner_x
    far_height: float   # desk height in px at far_x

    def rim_y(self, x: float) -> float:
        t = (x - self.corner_x) / (self.far_x - self.corner_x)
        return self.corner_y + min(max(t, 0.0), 1.0) * (self.far_y - self.corner_y)

    def height(self, x: float) -> float:
        t = (x - self.corner_x) / (self.far_x - self.corner_x)
        return self.near_height + t * (self.far_height - self.near_height)


DEFENSE = Desk(x_min=191, x_max=429, corner_x=193, corner_y=483.5,
               far_x=347, far_y=428, near_height=132, far_height=102)
PROSECUTION = Desk(x_min=945, x_max=1186, corner_x=1183, corner_y=487,
                   far_x=1029, far_y=429, near_height=132, far_height=102)


@dataclass(frozen=True)
class Figure:
    source: str
    desk: Desk
    center_x: int
    height_m: float        # real height the cutout's bounding box spans
    feet_offset_m: float   # how far below the bbox bottom the feet would be


FIGURES = (
    # Farther figure first; Don Ramón stands nearer the camera and covers him.
    Figure(source="bg_gallery_characters_chapulin_standing.png", desk=DEFENSE,
           center_x=318, height_m=1.78, feet_offset_m=0.0),
    Figure(source="bg_gallery_characters_donramon_standing.png", desk=DEFENSE,
           center_x=240, height_m=1.78, feet_offset_m=0.0),
    # Full-body cutout, already facing left.
    Figure(source="bg_gallery_characters_supersam_standing.png", desk=PROSECUTION,
           center_x=1108, height_m=1.88, feet_offset_m=0.0),
)


def place_figure(canvas: Image.Image, figure: Figure) -> None:
    source = Image.open(MASTERS / figure.source).convert("RGBA")
    source = source.crop(source.getchannel("A").getbbox())
    desk = figure.desk
    ppm = desk.height(figure.center_x) / DESK_TOP_M
    feet_y = desk.rim_y(figure.center_x) + desk.height(figure.center_x)
    height = round(figure.height_m * ppm)
    width = round(source.width * height / source.height)
    source = source.resize((width, height), Image.Resampling.LANCZOS)
    bottom = round(feet_y - figure.feet_offset_m * ppm)
    canvas.alpha_composite(source, (figure.center_x - width // 2, bottom - height))


def outline_top(clean: np.ndarray, x: int, rim: float) -> int:
    """Topmost dark line-art pixel just above the gold back rim."""
    # The wall right above the rim is dark too, so a fixed threshold would
    # restore wall over the figure; walk up only through near-darkest pixels.
    y0 = round(rim)
    sums = {y: int(clean[y, x].sum()) for y in range(y0 - 5, y0 + 2)}
    darkest = min(sums, key=sums.get)
    top = darkest
    while top - 1 in sums and sums[top - 1] < sums[darkest] + 30:
        top -= 1
    return top


def back_edge(pixels: np.ndarray, desk: Desk) -> np.ndarray:
    """Straight line through the ink top of the back rim, one y per column."""
    lo, hi = sorted((desk.corner_x, desk.far_x))
    xs = np.arange(lo + 5, hi - 4)
    tops = np.array([outline_top(pixels, x, desk.rim_y(x)) for x in xs])
    slope, offset = np.polyfit(xs, tops, 1)
    keep = np.abs(tops - (slope * xs + offset)) <= 1.0  # drop thick-ink spikes
    slope, offset = np.polyfit(xs[keep], tops[keep], 1)
    columns = np.arange(desk.x_min, desk.x_max + 1)
    clamped = np.clip(columns, lo, hi)
    far_top = slope * desk.far_x + offset
    line = np.where(clamped == columns, slope * columns + offset, far_top)
    near = columns < lo if desk.corner_x == lo else columns > hi
    line[near] = slope * clamped[near] + offset
    return line


def restore_desks(canvas: Image.Image, clean: Image.Image) -> None:
    pixels = np.asarray(clean.convert("RGB")).astype(int)
    mask = np.zeros(pixels.shape[:2], dtype=np.float32)
    rows = np.arange(pixels.shape[0], dtype=np.float32)[:, None]
    for desk in (DEFENSE, PROSECUTION):
        line = back_edge(pixels, desk)[None, :]
        # Anti-aliased: the pixel the line crosses is partly figure, partly desk.
        coverage = np.clip(rows - line + 0.5, 0.0, 1.0)
        mask[:, desk.x_min:desk.x_max + 1] = coverage
    alpha = Image.fromarray(np.round(mask * 255).astype(np.uint8))
    canvas.paste(clean, (0, 0), alpha)


def main(out: Path = OUT) -> None:
    clean = Image.open(BASE).convert("RGBA")
    if clean.size != (1376, 768):
        raise ValueError(f"Unexpected gallery dimensions: {clean.size}")
    canvas = clean.copy()
    for figure in FIGURES:
        place_figure(canvas, figure)
    restore_desks(canvas, clean)
    canvas.convert("RGB").save(out, "WEBP", lossless=True, method=6)
    print(out)


if __name__ == "__main__":
    import sys

    main(Path(sys.argv[1]) if len(sys.argv) > 1 else OUT)
