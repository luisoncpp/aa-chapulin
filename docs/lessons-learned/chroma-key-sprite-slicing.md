# AI Sprite Extraction via Magenta Chroma-Keying & Slicing

## Context
When generating 2D pixel art character poses with AI image generation models, models often render semi-transparent artifacts or white halos when prompted directly for transparent PNG backgrounds. Furthermore, generating individual sprite images one by one leads to character inconsistency across emotional poses.

## What Was Learned

### 1. 2x2 Grid Prompting Preserves Character Consistency
Prompting the model to generate a **2x2 grid of four emotional poses** for a single character (e.g. idle, slam, point, panic) in a single image generation pass keeps clothing, facial features, proportions, and color palette perfectly consistent across all 4 poses.

### 2. Solid Magenta Background (`#FF00FF`) Avoids Color Bleed
Using bright magenta/pink as the background color works exceptionally well because natural character colors (skin tones, red suits, brown hair, yellow antennas, gray suits) rarely contain high concentrations of pure saturated magenta.

### 3. Boundary-Connected Chroma Masking & Mathematical Despill
AI models antialias dark character outlines (`RGB: ~20, 20, 20`) against magenta backgrounds, yielding dark purple perimeter pixels (`RGB: 40..105, 0..20, 40..105`). Furthermore, white/gray grid divider lines can survive naive thresholding.

To eliminate purple halos and grid lines while preserving internal character pinks (such as apron floral patterns and hair curlers):

1. **Boundary Flood Mask**: Flood-fill from image borders including white/gray grid lines (`(r > 185) & (g > 165) & (b > 185)`) to isolate outer background.
2. **Subpixel Dilation**: Dilate the background mask by 1px to clear outer boundary bleed.
3. **Contour Despill Formula**: In the outer silhouette fringe zone (within 4px of background):
   $$\text{excess} = \max(0, \min(R - G, B - G))$$
   $$R_{\text{clean}} = R - \text{excess}, \quad B_{\text{clean}} = B - \text{excess}$$
   Subtracting excess magenta restores crisp neutral dark outlines (`RGB: 0..30, 0..30, 0..30`) and natural skin tones.

### 4. Deterministic Slicing & Edge Margin Clearing
Dividing image dimensions by rows and columns (`w // cols`, `h // rows`) yields crisp individual sprite files. Zeroing a 4px outer edge margin eliminates cell dividing lines and prevents line artifacts.
