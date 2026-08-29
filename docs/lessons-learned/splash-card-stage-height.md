# Title splash must fit the 540px stage, not the art

## Context

`#game-screen` is a fixed 960×540 box with `overflow: hidden`. The start splash is a flex-centered card inside that box. Case 2, Continue, and language made five buttons plus 140px art and 12px gaps. The stack was taller than 540px.

## What was learned

Flex `align-items: center` on an overflowing child clips the top and the bottom together. The red title disappeared above the frame and the last button disappeared below it, which looks like "empty space at the top" if you only notice the gold subtitle.

`max-height: 100%` on the card does not help unless the flex item also has `min-height: 0`. The default `min-height: auto` keeps the card as tall as its content, so the stage still crops it.

New splash actions belong in the 540px budget. Shrink type, art, and gap first. `overflow-y: auto` is the backstop, not the layout.

Measured in [[tests/engine/SplashLayout.test.ts]] against [[style.css]].
