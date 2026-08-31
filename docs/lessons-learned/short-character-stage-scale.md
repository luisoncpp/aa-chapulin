# Short Characters Need a Height Multiplier, Not a New Frame

## Context
Every waist-up bust is a 512×512 PNG fitted into the same stage box (`characterHeight: 0.62`). `anchor_standing_bust` floors the hem, so a character drawn large in the cell still fills that box.

## What Was Learned

Doctor Chapatín is specified as short (`bajito`). His angry/bag poses still fill ~95% of the canvas width. On the witness podium that reads as a giant: shoulders against the rails, head in the judge-bench carvings, the gold mic tiny on his chest.

That is not a furniture bug and not a missing fifth frame. The podium baseline and furniture box are correct. The character is simply the same size as Tripaseca.

Do not invent `podium-short`. Keep the frame; multiply `--char-height` by a pose-prefix scale (`chapatin_*` → 0.85). Baseline stays put so the hem still meets the dialogue box / podium contact line. Square `aspect-ratio` shrinks width with height.

Pick the multiplier against the *ink*, not against intuition. Chapatín's opaque pixels fill 94% of his 512 canvas — the same share as Aniceto (97%) — so the multiplier is the entire size difference between them. A first pass used 0.70, which made him 30% shorter than the whole cast and read as a child rather than a short adult. 0.85 (≈285px on a 540px stage vs 335px for everyone else) is short without being small.

## The Downscale Itself Was the Bigger Problem

Shrinking a bust in CSS is free, but only if the sprite is filtered smoothly. The stage inherited `image-rendering: pixelated` from the rest of the pixel-art UI, and the busts are not pixel art — they are 512px paintings staged at non-integer ratios. Nearest-neighbour at 512→285 discards more than half the rows and columns: glasses wire breaks into dashes, hair strands drop out, lapel edges stair-step. The smaller the character is staged, the worse it gets, so a short character surfaces a bug the full-height cast was hiding.

`image-rendering: auto` on `#character-sprite` fixes it for the entire cast at zero cost. A pipeline bake (Lanczos, with or without unsharp) is visually indistinguishable at these sizes and costs a resample on disk plus a rerun on every sheet regeneration — not worth it. Guarded by `tests/engine/CharacterSpriteScaling.test.ts`.
