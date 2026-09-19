# Asset Sanitization & Quality Protocol

This document defines mandatory sanitization rules and procedures for extracting, despilling, and validating 2D sprite sheets generated with AI models (such as solid-magenta `#FF00FF` character grids).

---

## The 5 Pitfalls of AI Sprite Post-Processing

### 1. Purple / Magenta Outline Fringe (Halos)
- **Problem**: When characters with dark charcoal/black outlines ($RGB: \sim 20, 20, 20$) are rendered on a magenta background ($RGB: 255, 0, 255$), subpixel antialiasing and JPEG compression blend the black outline with magenta, creating dark purple perimeter pixels ($RGB: 40..105, 0..20, 40..105$).
- **Sanitization Rule**: In the silhouette fringe zone (within 4px of background), apply the mathematical contour despill formula:
  $$\text{excess} = \max(0, \min(R - G, B - G))$$
  $$R_{\text{clean}} = R - \text{excess}, \quad B_{\text{clean}} = B - \text{excess}$$
  This neutralizes purple contamination into crisp neutral outlines ($RGB: 0..30, 0..30, 0..30$) and natural skin tones.

### 2. Unkeyed Interior Cavities (Enclosed Loops)
- **Problem**: When characters place hands on their head, cross their arms, or extend wings, enclosed background cavities are created. If flood-fill only selects regions connected to the 4 outer image borders, these interior pockets remain solid opaque magenta.
- **Sanitization Rule**: Ensure all magenta candidate pixels are included in the background mask:
  $$\text{is\_magenta} = (\text{dist} < 160.0) \lor (R > 140 \land B > 140 \land G < 125 \land |R - B| < 65)$$
  Both outer background and interior cavity loops are keyed out and despilled.

### 3. Accidental Transparency / Skin Tone Deletion
- **Problem**: Fair skin tones ($RGB: 250, 215, 195$) have high blue ($B = 195$) and green ($G = 215$). If white/gray grid-line removal lacks chromatic constraints, flood fill can mistake fair skin for background and erase interior arms or faces.
- **Sanitization Rule**:
  1. Enforce $G < 125$ for magenta detection so warm skin ($G \ge 140, R > B$) is never matched.
  2. Confine white/gray grid-line detection strictly to the outer $10\text{px}$ margin and require neutral chromatic balance ($|R - B| < 40$).

### 4. Clipped Appendages & Outstretched Limbs
- **Problem**: Dramatic gestures (such as pointing fingers, outstretched arms, long weapons, or wide capes) can cross the $512\text{px}$ quadrant boundary into the adjacent cell. Cropping at fixed $512\times 512$ quadrants slices off the gesture.
- **Sanitization Rule**:
  1. Measure the character foreground bounding box. If an appendage crosses $x = 512$ or $y = 512$, use a custom expanded crop window (e.g. $x: 0..576$).
  2. Use a targeted drop-box on the neighbor cell to remove overlapping bleed without clipping the main subject.

### 5. Over-Cropping from Speech Bubble / Artifact Drop Boxes
- **Problem**: AI models occasionally generate floating text or speech bubbles. Using an oversized drop box (e.g. $y: 0..160$ when the bubble ends at $y = 135$) slices off the top of hands, hair, or hats.
- **Sanitization Rule**: Measure the exact bounding box of the unwanted artifact. Stop the drop box at least $5\text{px}$ before the character body begins. Disconnected remnants are automatically removed by connected-component area filtering.

---

## Python Reference Sanitization Pipeline

```python
import numpy as np
from PIL import Image
from scipy import ndimage

def remove_bg_magenta_vectorized(
    img: Image.Image,
    threshold: float = 160.0,
    despill_depth: int = 4
) -> Image.Image:
    """Vectorized chroma keying handling outer background, grid lines, and interior cavities."""
    img = img.convert("RGBA")
    arr = np.array(img, dtype=np.float32)
    h, w = arr.shape[:2]
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]

    # Euclidean distance to pure magenta (255, 0, 255)
    dist = np.sqrt((r - 255.0) ** 2 + g ** 2 + (b - 255.0) ** 2)

    # 1. Pure and edge magenta (outer background + interior cavities)
    is_magenta = (dist < threshold) | ((r > 140) & (b > 140) & (g < 125) & (np.abs(r - b) < 65))

    # 2. Border-connected neutral grid lines (strictly on outer 10px perimeter)
    edge_zone = np.zeros((h, w), dtype=bool)
    edge_zone[:10, :], edge_zone[-10:, :] = True, True
    edge_zone[:, :10], edge_zone[:, -10:] = True, True
    is_grid = edge_zone & (r > 180) & (b > 180) & (np.abs(r - b) < 40)

    # Combined background mask
    bg_mask = is_magenta | is_grid

    # 1-pixel subpixel dilation to catch fringe
    dilated_bg = ndimage.binary_dilation(bg_mask, structure=np.ones((3, 3), dtype=bool), iterations=1)
    heavy_fringe = dilated_bg & ~bg_mask & ((r > 120) & (b > 120) & (g < 120))
    bg_mask = bg_mask | heavy_fringe

    # Despill zone for fringe (within despill_depth of any background)
    dilated_bg_despill = ndimage.binary_dilation(bg_mask, structure=np.ones((3, 3), dtype=bool), iterations=despill_depth)
    despill_zone = dilated_bg_despill & ~bg_mask

    excess = np.maximum(0.0, np.minimum(r - g, b - g))
    r_despilled = np.where(despill_zone & (excess > 0), np.maximum(0.0, r - excess), r)
    b_despilled = np.where(despill_zone & (excess > 0), np.maximum(0.0, b - excess), b)

    arr[:, :, 0] = r_despilled
    arr[:, :, 2] = b_despilled
    arr[bg_mask, 3] = 0

    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), mode="RGBA")
```

---

## Automated Acceptance Quality Gates

Before accepting any new asset, verify:
1. **Zero Unkeyed Solid Magenta**: No foreground pixel satisfies $(dist < 100) \lor (R > 200 \land B > 200 \land G < 60)$.
2. **Zero Purple Perimeter Fringe**: No silhouette perimeter pixel satisfies $(R > G + 15) \land (B > G + 15) \land (R > 35) \land (B > 35)$ when cast to integer.
3. **Zero Unintended Border Clipping**: Non-zero alpha along non-anchor edges (top, left, right) must be 0 unless intentionally extending to the frame.
4. **Intact Anatomy**: Verify that fair skin areas, knuckles, hair, hats, and finger tips are fully opaque and not hollowed out.
