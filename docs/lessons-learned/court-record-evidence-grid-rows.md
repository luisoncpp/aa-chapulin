# Court Record Icon Clipping Is Usually a Wrong Grid Row Count

## Context
Case 3 evidence lives on labeled magenta card sheets. The extractor crops each cell, chroma-keys, drops the label band, and bbox-fits the remainder onto a 128×128 court-record icon.

## What Was Learned

### Count painted rows, not unused evidence IDs
Sheet A has 12 cards (4 columns × 3 rows) even though Case 3 catalogs 16 items. Two cells are skipped; the rest come from a second sheet. Passing `rows=4` because "we have more than 12 IDs" slices **through** each card: the PNG is a strip of the real icon plus a white divider line. In the Acta that looks like the tile is clipping the art (and can map the wrong object to a name — the window wedge showed the paper-bag syringe).

### The card divider is in the PNG, not in CSS
`.evidence-card` overflow and the label rule do not paint that mid-tile white line. If a court-record icon shows a horizontal rule through the drawing, re-check `w // cols` and `h // rows` against the raw sheet before changing layout CSS.

### A 1×1 dedicated raw is not a labeled card
`icon_drop_boxes` always throws away the bottom 20% (the printed name). That is correct on a 4×3 / 3×2 sheet and destructive on a lone icon. Skip drop boxes when `cols * rows == 1`.
