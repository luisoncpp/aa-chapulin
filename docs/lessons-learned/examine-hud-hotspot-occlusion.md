# Full-width HUD docks steal hotspot hits

`#controls-bar` is a 960px-wide strip. Flex puts the buttons on the right. Empty pixels on the left still receive pointer events, and the bar sits above `#hotspots-container` (`z-index: 25` vs `10`).

Shrinking `#dialogue-box.examine-mode` does not move that strip. `bottom: 138px` was chosen for the 120px investigation box. After the examine plate became 48px, the bar stayed at the old height — a dead band across the stage at the former "MODO EXAMINAR" top edge. Floor clues (Cabina B cart tracks) look hoverable and are not.

## The rule

Give the dock `pointer-events: none` and restore `pointer-events: auto` on `.menu-btn`. When a HUD child shrinks, move the dock (`#game-screen.examine-mode #controls-bar`) with it. Overlay hotspot percentages on a cover crop *and* subtract every full-width sibling that still captures input.

Regression: [[tests/engine/ExamineHudLayout.test.ts]].
