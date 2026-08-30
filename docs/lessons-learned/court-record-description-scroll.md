# Court Record Descriptions Must Scroll, Not Grow the Pane

## Context

`.modal-body` is a fixed leftover of the 440px Court Record window and uses `overflow: hidden`. The right pane (`#evidence-details`) is a flex column: icon, title, description, then "¡Presentar Prueba!".

## What Was Learned

A flex child defaults to `min-height: auto`. Long `updatedDesc` copy makes `#evidence-details` as tall as the text. The body then clips the bottom, so Presentar looks cut in half even though it is still in the DOM.

`flex: 1` on the description does not create a scrollport by itself. The description also needs `min-height: 0` and `overflow-y: auto`. Cap the visible block with `max-height` in `em` tied to `line-height` (six lines here). `line-clamp` would hide the rest with an ellipsis and block scrolling.

Do not put `overflow-y: auto` on the whole details card. That would scroll the button away with the text. Scroll only `#evidence-description`; keep `#btn-modal-present` at `flex-shrink: 0`.

Measured in [[tests/engine/CourtRecordLayout.test.ts]] against [[style.css]].
