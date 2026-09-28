# Chapulín's wings are not a cape

**Context:** the gallery cutout of El Chapulín (2026-09-24) was generated from a prompt that asked for "yellow cape panels", and eight courtroom plates shipped with a cape. The costume has two yellow insect wings on the upper back (`assets/chapulin_panic.webp` shows them best). At bust scale the sprites' wings look like a capelet, and the art-direction line "yellow wings/capelet" allowed either reading.

## What to know before touching Chapulín art

- **Name the wings in every prompt:** "two small yellow insect wings on the upper back, pointed tips, no cape". A generator told "cape", "capelet" or "cape panels" paints cloth draped from the neck.
- **Side profile hides one wing.** Wings pointing low enough to look like wings (about 60° below horizontal) put the far wing behind the torso and arm. A second wing that shows only as a tip under the elbow reads as a stray spike, so hide it completely.
- **Fix a wrong prop by code, not by regenerating.** `tools/paint_chapulin_wings.py` erases the cape and paints the wing behind the body, so identity, pose and scale stay pixel-exact. The rule that erases around the cape must keep only large colour regions (the suit, skin, belt) and the ink within 6 px of them. Small anti-aliased strands along the old contour otherwise protect cape ink as specks.
- **Detect ink by brightest channel, not RGB sum.** The suit's shade red `(193, 22, 30)` sums to 245 and falls under a `sum < 250` "dark" test, which trims the arm's shading as if it were outline. `max(r, g, b) < 110` separates real ink.
- **Keep the cutout's alpha bbox.** `place_figure` crops by `getbbox()` and centres on the bbox width, so an edit that changes the bbox moves the figure. The script refuses to save if it changes.
- **Case 5 plates inherit the defense side.** `tools/compose_gallery_case5_common.start()` copies the defense columns from `assets/bg_gallery_characters.webp`, so recompose that plate before the Case 5 plates.
- **Windows file locks:** an asset open in another program makes both a direct write (`Errno 22`) and `os.replace` (`WinError 5`) fail. Write `<name>.tmp.webp` beside it and swap it in once the file is closed. Closing the image viewer may not be enough: an `npx serve` static server serving the repo can hold an image open after a browser request stalls. Ask Windows Restart Manager (`RmGetList` in `rstrtmgr.dll`) which process holds the file instead of guessing.
