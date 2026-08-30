# Court Record grid min-content vs equal tracks

Grid and flex items default to `min-width: auto`. A Court Record card whose label is `white-space: nowrap` therefore refuses to shrink below the longest name. Two-line wrap (`line-clamp: 2`) is safe because the track still has `minmax(0, 1fr)` and the card `min-width: 0`. `grid-template-columns: repeat(4, 1fr)` still produces **unequal** tracks, the grid grows wider than `#modal-body`, and CSS treats the missing `overflow-x` as `auto` whenever `overflow-y` is not `visible` — so both scrollbars appear.

Fix that must be preserved:

- Tracks: `repeat(N, minmax(0, 1fr))`
- Flex child and cards: `min-width: 0`
- Overflow: `overflow-x: clip` and `overflow-y: auto` (never a single `overflow: auto`). `hidden` still creates a scroll container; Windows often paints a disabled horizontal track next to a vertical bar.
- WebKit: set `::-webkit-scrollbar { height: 0 }` so a leftover X track cannot show.

Regression: [[tests/engine/CourtRecordLayout.test.ts]].
