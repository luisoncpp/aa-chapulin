# Investigation Hotspot Targets Must Be on the Background

Examine mode hides character sprites to clear the crime scene, so any object the player must click needs to remain visible on the background plate itself. If a hotspot describes a patient, body, wheelchair, carried prop, or bandage that only exists in `idlePose`, the target disappears exactly when the player enters Examinar.

For Case 1's day-1 clinic, Alma Negra and the visible bandage are baked into `bg_clinica_cuarto6.webp`, and the scene uses `idlePose: null`. The old `almanegra_inconsciente` sprite can still exist as support art, but it is not the clickable source of truth.
