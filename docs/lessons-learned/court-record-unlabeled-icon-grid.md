# Image-Only Court Record Sheets Need Different Cropping

## What Was Learned

The Case 4 evidence sheet contains artwork only; it has no printed label band. The shared labeled-sheet extractor drops the bottom 20% and vertically clips objects whose artwork reaches the cell floor. Use the unlabeled-grid path, which removes only full-width or full-height separators before fitting the icon to 128×128.
