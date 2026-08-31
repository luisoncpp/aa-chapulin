# Full-Pose Raws Must Scale Onto 512, Not Paste-Crop

## Context
`anchor_standing_bust` pastes an opaque crop onto a 512 canvas so the hem meets the dialogue box. 2x2 sheet cells are already ~512. Extra poses such as `aniceto_breakdown` are generated as a full 1x1 sheet, often 1024+.

## What Was Learned

Pasting that crop when it is taller or wider than 512 does not shrink it. `oy` clamps to 0 and PIL clips the overflow. The result is a zoomed chest-and-head crop: the witness looks giant on the podium, elbows are sheared, and a handheld prop (a second gold mic) sits on top of `court_podium.png`.

Scale the crop down when either side exceeds 512, then floor the hem. Keep side inset (`STANDING_SIDE_MARGIN`) so the scaled silhouette does not kiss the canvas edge.

Do not invent a shorter stage frame for a tall character. The oversized look was a processor crop, not `characterHeight`.

Generate the raw with magenta on the top and sides, waist on the cell floor, and limbs inside the square. Scaling cannot restore pixels the generator already clipped.
