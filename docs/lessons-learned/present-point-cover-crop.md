# Present & Point Bounds Follow the Generated Plate

**What to remember:** `pointTarget.zones[].bounds` are percentages of the 640×360 `#present-point-stage`. Case 4 examine plates are already 960×540 (same 16:9 as the stage), so `object-fit: contain` does **not** letterbox them. The miss is almost always “the spec box was guessed before the WebP existed.”

The D1-T1 ice-bucket spec `[56, 46, 76, 70]` landed on a patch of galvanized sidewall. Players clicking the water, rim, or handle (the melted-ice clue) were penalized even though the spec named the bucket as the solution. Overlay the three zones on `assets/examine_{foto,plano,botella}.webp` before shipping.

**Before shipping a Present & Point zone:**

1. Draw `[minX, minY, maxX, maxY]` on the actual `examine_*.webp`, not on a written room layout.
2. Cover the whole painted object a player would click (bucket + water, steam stack, wax dome), not a decorative sub-patch.
3. Keep Spanish and English geometry identical (EN spreads the ES `PointTargetContradiction`).
4. Regression: [[tests/case/Case4PresentPointZones.test.ts]].

Related: [[docs/lessons-learned/investigation-hotspot-cover-crop.md]], [[docs/flows/present-point-flow.md]].
