---
name: court-character-compose
description: Compose characters (lawyers, prosecutor, witnesses, spectators) onto an approved courtroom background such as bg_gallery.webp without repainting it. Generate isolated RGBA cutouts, scale them from the geometry of the furniture that hides them, paste them onto a copy of the clean background, and restore that furniture pixel for pixel. Use when the user asks to add, move or change characters on a courtroom plate, or to make a "with characters" variant of a background.
---

# Composing characters in the courtroom

This recipe comes from `assets/bg_gallery_characters.webp`, which puts Don Ramón and El Chapulín behind the defense desk and Super Sam behind the prosecution desk. It took six iterations, and each rule below fixes a defect the user had to point out. The reference script is `tools/compose_gallery_characters.py`, and the log lives in `docs/specs/common/bg_gallery.md` (§ Variante con personajes).

## Hard rules

1. **Never repaint the background.** Every generator edit degrades the whole image. The generator only makes **isolated RGBA cutouts**, and only code touches the background.
2. **Output = copy of the clean background + figures + furniture restored from the clean copy.** Not a single pixel may change outside the furniture columns. Save as **lossless** WebP (`lossless=True, method=6`).
3. **Never overwrite** without a backup: the previous file goes to `tools/masters/<name>_<reason>_<date>.webp`.
4. Record every recomposition in the background's fact sheet (`docs/specs/common/<background>.md`).

## 1. Cutouts

- **Full body, standing.** A waist-up cutout ends in a flat cut that eventually shows above the desk edge. With a full-body cutout the furniture hides the legs, so there is no edge to hide.
- **Ace Attorney pose:** side profile, facing the opposite desk across the aisle. The defense (left) faces right and the prosecution (right) faces left. Never facing the camera, and never turned away toward the judge.
- Take identity from `assets/<character>_idle.webp`, plus the previously approved cutout if one exists. The background must be transparent; check with `getchannel('A').getbbox()` and confirm the corners have alpha 0.
- **Check the facing direction before flipping.** A cutout that already faces the right way needs no flip, and flipping mirrors letters and symbols (Super Sam's `$`).
- Approved cutouts already exist in `tools/masters/bg_gallery_characters_{donramon,chapulin,supersam}_standing.png`. Reuse them before generating new ones.

## 2. Scale and position come from the furniture, not by eye

A desk or railing top is **0.95 m** high (an adult's hip). At the column `x` where the character stands:

```
ppm    = furniture_height_px(x) / 0.95       # pixels per metre at that depth
feet_y = back_edge_y(x) + furniture_height_px(x)
height = height_m * ppm                      # the cutout's bbox, antennae included
```

This puts the hip at the desk top, matches the size of the spectators, and stops characters from looking seated. Heights used: Don Ramón 1.78, El Chapulín 1.78 including antennae, Super Sam 1.88.

Furniture height is interpolated linearly between the back corner nearest the camera and the far one. For the gallery: defense desk corner at (193, 483.5) with height 132 px, far corner at (347, 428) with height 102 px; prosecution mirrored, (1183, 487) → (1029, 429). For new furniture (judge bench, podium, railing), measure those four values (see §5) and create another `Desk`.

- **Draw order:** farthest first. At the defense desk, closer to the camera means smaller `x`.
- **The whole cutout must stay inside the furniture columns** (`x_min..x_max`). Otherwise the legs show beside the furniture.

## 3. Furniture mask: a fitted, anti-aliased straight line

Everything below the **top of the ink line** on the back edge is restored from the clean copy. What failed:

| Attempt | Symptom |
|---|---|
| Hand-traced polygon "just outside the edge" | Strip of wall between the figure and the edge |
| Fixed darkness threshold per column | The wall above the edge is also dark (brown or burgundy, RGB sum 70–110), so up to 4 px of wall got restored: the same gap |
| Darkest pixel per column | 1-px spikes wherever the ink is thicker |

What works (`back_edge` in the script): for each column, find the darkest pixel next to the gold and climb only while the RGB sum stays within 30 of that minimum. Then fit **one straight line** with `np.polyfit`, drop residuals above 1 px, and fit again. The mask is `clip(y - line(x) + 0.5, 0, 1)`, so the row the line crosses gets blended.

## 4. Required checks

- Count changed pixels outside the furniture columns: the result must be **0**.
- Zoom ×8 with `Image.NEAREST` on every edge that has a figure, e.g. `crop((205,420,345,490))`. Look for wall strips, spikes, cloth passing through the edge, or a cape sticking out at a corner.
- Look at the full image: heads should match the spectators' heads in size, and waists should sit at the desk top.
- `python verify_assets.py`.
- If the variant will ship in the game, run the `asset-audit` skill afterwards.

## 5. Measuring new furniture

The back edge usually has a gold rim. Detect its first row per column, then inspect the pixels above it:

```python
gold = (r > 170) & (g > 120) & (b < 110) & (r - b > 90)
for x in range(x0, x1, 15):
    ys = [y for y in range(y_lo, y_hi) if gold[y, x]]
```

Limit `x` and `y` to the furniture: curtain tassels, the gallery railing and the sconces are gold too. Where detection jumps (the short far edge is thin), follow the line through the good points. Furniture height at each corner runs from the edge row down to the visible base of that vertical corner.
