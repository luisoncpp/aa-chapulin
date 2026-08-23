# AI Sprite Extraction via Magenta Chroma-Keying & Slicing

## Context
When generating 2D pixel art character poses with AI image generation models, models often render semi-transparent artifacts or white halos when prompted directly for transparent PNG backgrounds. Furthermore, generating individual sprite images one by one leads to character inconsistency across emotional poses.

## What Was Learned

### 1. 2x2 Grid Prompting Preserves Character Consistency
Prompting the model to generate a **2x2 grid of four emotional poses** for a single character (e.g. idle, slam, point, panic) in a single image generation pass keeps clothing, facial features, proportions, and color palette perfectly consistent across all 4 poses.

### 2. Solid Magenta Background (`#FF00FF`) Avoids Color Bleed
Using bright magenta/pink as the background color works exceptionally well because natural character colors (skin tones, red suits, brown hair, yellow antennas, gray suits) rarely contain high concentrations of pure saturated magenta.

### 3. Automated NumPy Chroma-Key Masking
A vectorized Python script using NumPy and Pillow processes images in milliseconds:

```python
# Magenta mask: High Red & Blue, Low Green, Balanced Red-Blue
is_pink = (r > 160) & (g < 110) & (b > 160) & (np.abs(r.astype(int) - b.astype(int)) < 75)
data[:, :, 3] = np.where(is_pink, 0, 255)
```

This clean threshold completely removes the background without fringing or antialiasing blur on pixel art borders.

### 4. Deterministic Slicing
Dividing image dimensions by rows and columns (`w // cols`, `h // rows`) yields crisp individual sprite files with identical alignment that can be swapped in CSS/DOM without sprite jitter.
