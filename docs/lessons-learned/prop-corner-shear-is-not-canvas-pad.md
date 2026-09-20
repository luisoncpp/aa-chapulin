# A Sheared Prop Is a Bounding-Box Edge, Not a Missing Canvas Pad

## Context
`plain` staging lines the 512 canvas to the dialogue box. After chroma-key, `anchor_standing_bust` crops to the opaque bbox and centers it, so a sprite can have 20px+ of canvas margin and still look clipped.

## What Was Learned

Nicanor's sweat broom was painted into the bottom-left corner of a 2×2 cell. The sheet edge cut the brush in half. Chroma-key then treated that straight cut as the left of the opaque bbox, and the floor-and-center step gave the WebP a comfortable side pad. Canvas-edge tests (`left >= 8`) passed. The player still saw a sheared broom.

A missing canvas pad and a sheared silhouette are different defects:

- Pad tests look at the 512 frame. They catch a bust that kisses the PNG border.
- A cell-edge shear survives as a long consecutive run of opaque pixels on the **bbox** left or right column (the clipped broom was 78px; a sleeve bump is ~20px).

Extended crop windows only recover pixels that bled into a neighbor cell. When the missing bristles were never painted because the prop hit the **sheet** edge, regeneration is the only fix. Point long handheld props (brooms, poles, bags) inside the bust envelope — on the shoulder, across the torso — or generate that pose as a 1×1. Do not aim them at a 2×2 corner.

Guarded by [[tests/assets/Case5NicanorBroom.test.ts]].
