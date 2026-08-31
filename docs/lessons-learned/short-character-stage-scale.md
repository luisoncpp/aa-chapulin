# Short Characters Need a Height Multiplier, Not a New Frame

## Context
Every waist-up bust is a 512×512 PNG fitted into the same stage box (`characterHeight: 0.62`). `anchor_standing_bust` floors the hem, so a character drawn large in the cell still fills that box.

## What Was Learned

Doctor Chapatín is specified as short (`bajito`). His angry/bag poses still fill ~95% of the canvas width. On the witness podium that reads as a giant: shoulders against the rails, head in the judge-bench carvings, the gold mic tiny on his chest.

That is not a furniture bug and not a missing fifth frame. The podium baseline and furniture box are correct. The character is simply the same size as Tripaseca.

Do not invent `podium-short`. Keep the frame; multiply `--char-height` by a pose-prefix scale (`chapatin_*` → 0.70). Baseline stays put so the hem still meets the dialogue box / podium contact line. Square `aspect-ratio` shrinks width with height.

Shrinking in the PNG pipeline also works, but it resamples art and is undone the next time the sheet is processed unless the scale is baked into the floored bust. The stage multiplier survives regeneration and is testable as CSS (`--char-height` under 52% for Chapatín, 62% for everyone else).
