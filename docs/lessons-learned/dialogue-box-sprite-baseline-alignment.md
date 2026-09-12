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

### 4. Floor every plain bust, and do not prompt a floating torso
`anchor_standing_bust` is not optional per character. Case 3 floored Chapatín and Pazguato and skipped Ñoño; the other sheets happened to already paint to the cell floor, so only Ñoño showed a 50px gap above the gold trim. A new sheet that follows the generic "keep the subject in the central 60–70% of the cell" rule will reproduce it.

When generating a waist-up pose:
- The shirt hem / waist cut sits on the **bottom of the cell**, with about 5px of magenta below it.
- Magenta padding belongs above the hair and beside the hands, not under the torso.
- After chroma-key, run `anchor_standing_bust` on the whole sheet's pose list, not an allowlist of names.
- Anchor from the visible alpha bound (`alpha > 32`) and alpha-composite onto the canvas. Faint edge pixels otherwise leave a visible gap after WebP encoding.
- Slam / desk-contact poses are the exception: they keep the waist notch and palms, not this floor-hem.

### 5. The Idle Breathing Float Must Hang Below Contact, Not Above It
Baseline alignment only fixes the *rest* pose; `characterBreathe` then animates around it. Anchoring the cycle at rest (`0% → 0`, `50% → -3px`) means the sprite is at the gold line for one instant per cycle and lifted off it for the rest — the gap reads as the bust bobbing away from the box.

Anchor the cycle at its **peak** instead: `50%` holds the contact offset and `0%/100%` sinks the hem *into* the plate. Two constraints bound this:
- The peak, not the rest pose, must equal the contact offset.
- Total travel (peak to trough) must not exceed the dialogue box's **3px solid border** (`#dialogue-box`), or the dip carries the hem into the translucent interior where it shows through the text area.

The contact offset is **2px**, not 0: `characterBaseline: 0.25` rounds short of the gold trim on the rendered plate, so the cycle runs `2px → 5px`. Derive it from a zoomed screenshot of the hem, not from the percentage — the residual gap is a single pixel at a time and takes several passes to close by eye. Any change to the border width has to be mirrored in the keyframe amplitude. Desk-contact poses are unaffected — `[data-stage-contact="true"]` already kills the animation.
