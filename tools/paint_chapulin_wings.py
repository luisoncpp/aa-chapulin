"""Replace the cape painted on the standing Chapulín cutout with his insect wing.

The generated cutout drew a yellow cape; the costume has two yellow insect
wings on the upper back (see assets/chapulin_panic.webp). The cape, its ink
contour and its glow are erased, the suit keeps its own outline, and one
cel-shaded wing is painted behind the body, hanging down and back past the
elbow. In this profile the other wing sits behind the torso and arm.

Usage: python -m tools.paint_chapulin_wings
"""

from dataclasses import dataclass
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage as ndi


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "tools/masters/bg_gallery_characters_chapulin_standing.png"
OUT = ROOT / "tools/masters/bg_gallery_characters_chapulin_standing_wings.png"
SUPERSAMPLE = 4
EDGE_SAMPLES = 80

INK = (6, 4, 2, 253)
BASE = (253, 222, 13, 253)   # the cape's light yellow, sampled from the source
SHADE = (222, 185, 10, 253)  # the cape's shade yellow

# Seed pixels (x, y) inside the cape: the drape behind the back and the
# sliver between the bent arm and the torso.
CAPE_SEEDS = ((330, 600), (465, 610))
OUTLINE_PX = 6      # the suit's ink line is ~5 px wide
MIN_BODY_AREA = 400  # smaller colour islands are anti-aliasing along the cape


@dataclass(frozen=True)
class Wing:
    root: tuple[float, float]  # hidden behind the shoulder
    tip: tuple[float, float]
    width: float
    bow: float  # sideways bend of the axis toward the underside


WING = Wing(root=(428, 432), tip=(288, 680), width=96, bow=3)


def remove_cape(pixels: np.ndarray) -> np.ndarray:
    r, g, b, a = (pixels[:, :, i] for i in range(4))
    yellow = (r > 170) & (g > 130) & (b < 90) & (a > 128)
    labels, _ = ndi.label(yellow)
    cape = np.isin(labels, [labels[y, x] for x, y in CAPE_SEEDS])
    ink = np.maximum(np.maximum(r, g), b) < 110  # shade red is ~(193, 22, 30)
    colour = (a > 128) & ~ink & ~cape
    islands, count = ndi.label(colour)
    areas = ndi.sum(colour, islands, range(1, count + 1))
    body = np.isin(islands, np.nonzero(areas > MIN_BODY_AREA)[0] + 1)
    near_body = ndi.distance_transform_edt(~body) <= OUTLINE_PX
    near_cape = ndi.binary_dilation(cape, iterations=14)
    # Around the cape keep only the suit and the ink line that outlines it.
    drop = near_cape & ~body & ~(ink & near_body)
    cleaned = pixels.copy()
    cleaned[drop] = 0
    return cleaned


def wing_edges(wing: Wing) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    """Leading edge, trailing edge and axis, root to tip."""
    root = np.array(wing.root, float)
    axis = np.array(wing.tip, float) - root
    along = axis / np.linalg.norm(axis)
    across = np.array([along[1], -along[0]])  # toward the body / underside
    t = np.linspace(0, 1, EDGE_SAMPLES)
    half = t ** 0.45 * (1 - t) ** 0.85  # rounded root, pointed tip
    half = half / half.max() * wing.width / 2
    centre = root + np.outer(t, axis) + np.outer(wing.bow * np.sin(np.pi * t), across)
    lead = centre - np.outer(half * 0.7, across)   # nearly straight upper edge
    trail = centre + np.outer(half * 1.3, across)  # fuller lower edge
    return lead, trail, centre


def paint_wing(size: tuple[int, int], wing: Wing) -> Image.Image:
    layer = Image.new("RGBA", (size[0] * SUPERSAMPLE, size[1] * SUPERSAMPLE))
    draw = ImageDraw.Draw(layer)
    lead, trail, centre = (edge * SUPERSAMPLE for edge in wing_edges(wing))
    outline = [tuple(p) for p in np.vstack([lead, trail[::-1]])]
    draw.polygon(outline, fill=BASE)
    draw.polygon([tuple(p) for p in np.vstack([centre, trail[::-1]])], fill=SHADE)
    draw.polygon(outline, outline=INK, width=5 * SUPERSAMPLE)
    return layer.resize(size, Image.Resampling.LANCZOS)


def main() -> None:
    source = Image.open(SOURCE).convert("RGBA")
    body = Image.fromarray(remove_cape(np.asarray(source).astype(np.int32)).astype(np.uint8))
    result = paint_wing(source.size, WING)
    result.alpha_composite(body)  # the arm and torso cover the wing root
    # compose_gallery_characters crops by alpha bbox: keep it, or the figure shifts.
    if result.getchannel("A").getbbox() != source.getchannel("A").getbbox():
        raise ValueError("The wing changed the cutout's alpha bbox")
    result.save(OUT)
    print(OUT)


if __name__ == "__main__":
    main()
