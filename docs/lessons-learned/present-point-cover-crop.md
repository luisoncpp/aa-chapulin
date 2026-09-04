# Present & Point Zone Bounds Match the Contained Plate

**What to remember:** `pointTarget.zones[].bounds` are percentages of the evidence image **as displayed** inside `#present-point-stage` / `#evidence-examine-stage`, not of the raw WebP pixel grid.

The stage uses the same `object-fit: contain` layout as the Acta examine modal. A wide crime-scene plate letterboxes vertically; a tall telegram form letterboxes horizontally. Painting zone rectangles on the full JPEG in an art tool without accounting for letterboxing will miss in-game.

**Before shipping Case 4 Present & Point:**

1. Place bounds on the visible plate in the overlay (or match the examine modal at 960×540 scale).
2. Keep Spanish and English plates identical geometry so one bounds table works for both languages.
3. Regression: cross-check the three instances in [[docs/specs/case-4-el-caso-del-hotel-buena-vista.md#Especificación Técnica de las 3 Instancias de Present & Point]] against an in-engine screenshot.

Related: [[docs/lessons-learned/investigation-hotspot-cover-crop.md]], [[docs/flows/present-point-flow.md]].
