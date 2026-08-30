# Dialogue Box Top Edge Alignment for Free-Standing Sprite Staging

## Context
In visual novel scenes without foreground furniture (e.g. investigation locations like the museum, visitor booth at detention, or free-standing character dialogue), character sprites are rendered waist-up against the scene background.

## What Was Learned

### 1. Semi-Transparent Dialogue Boxes Expose Baseline Offsets
Ace Attorney dialogue boxes use semi-transparent backdrops (`rgba(10, 20, 45, 0.92)`). If a free-standing character baseline is set too low (e.g. `0.13` = 70px above stage bottom), the sprite's flat bottom cut falls inside the dialogue box text area:
- The character's waist is visibly cut off and floating behind the semi-transparent text box.
- The character appears sunken down in the scene, leaving excessive empty headroom.

### 2. Dialogue Box Top Edge Defines the Natural Waist Line
The dialogue box geometry (`height: 120px` + `padding-bottom: 15px` = 135px on a 540px stage) puts its top edge at exactly **25.00%** of the stage height:
- Setting `characterBaseline: 0.25` in the `plain` frame ensures that the bottom edge of waist-up sprites aligns exactly with the upper golden border of the dialogue box.
- The character bust emerges cleanly from behind the dialogue box, matching classic Capcom visual novel composition.
- With `characterHeight: 0.62`, the top of the sprite reaches ~87% of stage height, providing ample clearance below the 50px top HUD banner.

### 3. Canvas Floor Is the Hem, Not Empty Magenta
`plain` aligns the **512×512 canvas** bottom to the dialogue box. Idle/point already put opaque pixels 5px above that floor. A 2x2 generation cell that keeps the bust in the central safe area leaves 20px+ of transparency under the jacket. After chroma-key, that padding is still there, so the bust floats above the gold line. Extra standing poses must be translated onto the canvas floor (`anchor_standing_bust`) before they ship.
