# AI Sprite Extraction via Magenta Chroma-Keying & Slicing

## Context
When generating 2D pixel art character poses with AI image generation models, models often render semi-transparent artifacts or white halos when prompted directly for transparent PNG backgrounds. Furthermore, generating individual sprite images one by one leads to character inconsistency across emotional poses.

## What Was Learned

### 1. 2x2 Grid Prompting Preserves Character Consistency
Prompting the model to generate a **2x2 grid of four emotional poses** for a single character (e.g. idle, slam, point, panic) in a single image generation pass keeps clothing, facial features, proportions, and color palette perfectly consistent across all 4 poses.

### 2. Solid Magenta Background (`#FF00FF`) & Interior Cavity Keying
Using bright magenta/pink (`#FF00FF`) as the background color isolates character bodies. However, poses with closed loops (holding head in panic, folded arms, wings) create interior cavities disconnected from outer canvas edges:
- **Rule**: Include all magenta candidates ($(\text{dist} < 160) \lor (R > 140 \land B > 140 \land G < 125 \land |R - B| < 65)$) in the background mask so both outer canvas and interior loops are transparent.

### 3. Fair Skin Tone Protection ($G < 125$ & Neutral Margin Constraint)
Fair/light skin tones ($RGB: 250, 215, 195$) have high blue and green brightness. To prevent flood-fill or grid-line detection from eating the inside of arms or faces:
- Confine white/gray grid detection strictly to the outer $10\text{px}$ perimeter with a neutral balance constraint ($|R - B| < 40$).
- Enforce $G < 125$ on magenta candidate detection so warm skin ($G \ge 140, R > B$) is never keyed out.

### 4. Mathematical Contour Despill Formula
AI models antialias dark character outlines ($RGB: \sim 20, 20, 20$) against magenta backgrounds, yielding dark purple perimeter pixels ($RGB: 40..105, 0..20, 40..105$).
In the silhouette fringe zone (within 4px of any background):
$$\text{excess} = \max(0, \min(R - G, B - G))$$
$$R_{\text{clean}} = R - \text{excess}, \quad B_{\text{clean}} = B - \text{excess}$$
Subtracting excess magenta neutralizes purple fringe into crisp neutral dark outlines ($RGB: 0..30, 0..30, 0..30$).

### 5. Extended Gesture Extraction Bounds & Neighbor Bleed Management
Dramatic gestures (pointing fingers, outstretched arms, long weapons) can extend $50..100\text{px}$ across the $512\text{px}$ grid divider into adjacent cells:
- **Solution**: Use custom crop windows (e.g. $x: 0..576$) for outstretched poses to capture the entire finger/extremity with margin.
- **Neighbor Cleanup**: Use targeted drop boxes on the adjacent cell to drop the cross-boundary limb bleed.

### 6. Accurate Speech Bubble & Artifact Drop Boxes
When removing AI-generated speech bubbles or text labels, measure the exact vertical bounding box (e.g. $y: 0..138$) and stop at least $5\text{px}$ before character extremities begin to prevent flat horizontal slicing across knuckles, hair, or hats.

### 7. Automated Verification Pre-Commit Gates
Always validate extracted sprites using pixel-level static checks:
- 0 unkeyed solid magenta pixels
- 0 purple perimeter fringe pixels (cast to int to avoid uint8 overflow)
- 0 outer margin line noise
- 0 hollowed skin areas
- For `plain`-frame waist-up busts: opaque hem within 8px of the 512 canvas floor (see [[docs/lessons-learned/dialogue-box-sprite-baseline-alignment.md]])

### 8. Waist-up cells are not full-body safe-area cells
A generic 2x2 prompt that parks the body in the central 60% of each cell leaves a magenta strip under the waist. After keying, that strip is still in the PNG, and `plain` staging shows room background between the torso and the dialogue box. Prompt the waist cut onto the cell floor; keep containment padding on top and sides only.
