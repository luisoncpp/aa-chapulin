# @Architecture(descriptionShort="Recolors red key halo on sprite contours from interior pixels", type="pipeline", icon="wrench")
"""Remove the red rim a pink-red chroma field leaves on sprite contours.

Some raw sheets are keyed from (239, 5, 130) rather than pure magenta. The
standard despill subtracts min(r-g, b-g), which only cancels the blue share of
that key: the red share survives as a dark-red outline on suits and gray hair.
Each red-cast contour pixel takes the hue of the nearest interior pixel at its
own luminance, so skin edges stay skin and ink lines stay dark.
"""

import numpy as np
from PIL import Image
from scipy import ndimage

LUMA = np.array([0.299, 0.587, 0.114], dtype=np.float32)


def recolor_key_fringe(img: Image.Image, depth: int = 5) -> Image.Image:
    arr = np.array(img.convert("RGBA"), dtype=np.float32)
    opaque = arr[:, :, 3] > 8
    dist = ndimage.distance_transform_edt(opaque)
    interior = dist > depth + 0.5
    if not interior.any():
        return img
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    fringe = (arr[:, :, 3] > 0) & ~interior & (r > g + 20) & (r > b + 10)
    _, (iy, ix) = ndimage.distance_transform_edt(~interior, return_indices=True)
    source = arr[iy, ix, :3]
    source_luma = np.maximum(source @ LUMA, 1.0)
    target_luma = np.minimum(arr[:, :, :3] @ LUMA, source_luma * 1.15)
    recolored = source * (target_luma / source_luma)[:, :, None]
    arr[fringe, :3] = recolored[fringe]
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), mode="RGBA")


def drop_key_shadow(img: Image.Image, floor_fraction: float = 0.85) -> Image.Image:
    """Clear the darker pink cast shadow the generator paints on the key under leaning hands."""
    arr = np.array(img.convert("RGBA"))
    r, g, b = (arr[:, :, i].astype(np.int16) for i in range(3))
    shadow = (arr[:, :, 3] > 0) & (r > g + 35) & (b > g + 15) & (r > b)
    shadow[: int(arr.shape[0] * floor_fraction)] = False
    arr[shadow] = 0
    return Image.fromarray(arr, mode="RGBA")


def drop_cell_seams(img: Image.Image, band: int = 16, coverage: float = 0.95) -> Image.Image:
    """Clear sheet separator lines: rows/columns near the cell border that are opaque edge to edge."""
    arr = np.array(img.convert("RGBA"))
    opaque = arr[:, :, 3] > 8
    h, w = opaque.shape
    rows = [y for y in [*range(band), *range(h - band, h)] if opaque[y].mean() > coverage]
    cols = [x for x in [*range(band), *range(w - band, w)] if opaque[:, x].mean() > coverage]
    arr[rows, :, 3] = 0
    arr[:, cols, 3] = 0
    return Image.fromarray(arr, mode="RGBA")
