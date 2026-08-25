# Decoupling Character Sprites from Environmental Furniture Overlays

## Context
In visual novels like Ace Attorney, characters change environmental contexts throughout the story (e.g. from the crime scene, to the detention center visitor booth, to the defense bench, or to the witness stand).

## What Was Learned

### 1. Baking Foreground Props into Character Sprites Causes Cross-Scene Context Breakage
When generating character sprites with AI or sprite sheets, generating furniture (such as a witness podium or defense desk) directly in the character pose restricts that character to one single physical location. Rendering that character in non-courtroom locations (like a prison cell or crime scene) immediately introduces jarring visual bugs.

### 2. Standalone Foreground Furniture Layering Pattern
Decoupling characters and foreground furniture into separate rendering planes:
- **Background Layer (z-index: 1)**: Scene background (`bg_detention.jpg`, `bg_witness.jpg`, `bg_courtroom.jpg`).
- **Character Layer (z-index: 2)**: Clean waist-up / 3/4 poses with zero furniture.
- **Foreground Furniture Layer (z-index: 3)**: Standalone props (`court_podium.png`, `court_bench.png`) positioned in the foreground.
- **Slam exception (z-index: 4)**: Desk-slam poses must stack *above* the bench. If the bench stays in front, the palms are covered by the counter and read as clipped. Idle/point/panic keep the default order so the desk still occludes the waist.

### 3. Dynamic Scene-Aware Furniture Resolution
Instead of requiring manual annotations on every single dialogue line, the engine dynamically infers the appropriate foreground furniture:
- Investigation scenes (detention, museum) suppress furniture.
- Witness stand scenes (`bg_witness.jpg`) project the witness podium.
- Defense speech with active poses projects the defense table.
- Dialogue lines can explicitly override furniture via { furniture: 'podium' | 'bench' | 'none' }.

### 4. Do Not Stretch Furniture to a Short Full-Bleed Bar
`court_bench.png` is a 1353×550 desk. Forcing it into `width: 100%; height: 160px; object-fit: fill` squashes it against the Chapulín bust, so the counter no longer matches his hands. Use `object-fit: cover` with `object-position: 50% 0%` in a box whose own aspect stays near the source's, which preserves the source pixels and anchors the counter's top surface to the box's top edge.

Corollary worth knowing before reaching for CSS: a furniture PNG drawn as a *complete free-standing desk* (2.46:1, with most of its height below the counter) cannot become a thin foreground band at correct aspect. Full stage width would make it 390px tall on a 540px stage. Either the box keeps a tall aspect and lets the bottom run behind the dialogue box, or the asset itself must be re-cropped. Do not resolve that tension by stretching.

### 5. Stage Geometry Belongs in a Ratio Table, Not in Pose CSS Classes
The first pass expressed staging as per-pose pixel offsets (`.slam-pose { bottom: 200px }`) against a fixed `480px` sprite box. Two failures followed, and both were invisible in code review and obvious in a screenshot:

- A 480px box at `bottom: 200px` on a 540px stage puts the container top at **y = −140**, cropping 140px of head. Pixel offsets give no signal when they overflow the stage.
- Character scale and furniture scale drifted independently, because nothing tied them together. The pose class knew the sprite; the furniture class knew the desk; neither knew the contact line.

[[src/engine/Private/StageLayout.ts]] replaces both with one table of frames whose every metric is a fraction of the stage box. This matters for reuse: a second trial adds a scene by naming a frame, not by hand-tuning pixels, and the contact geometry is then testable in plain arithmetic ([[tests/engine/StageLayout.test.ts]]) without a browser.

### 6. Verify Staging in a Browser at the Stage's Native Size
`#game-screen` is a fixed 960×540 flex item, so a narrower viewport silently **shrinks it horizontally** (measured 611px wide in a 611px-wide pane) while the height holds. Every ratio then resolves against a distorted box, and screenshots taken that way are worthless for judging composition. Size the viewport to at least 968×548 before measuring or screenshotting.

### 7. A Foreground Furniture Asset Must Be Cropped Exactly At Its Contact Line
The most expensive bug in this subsystem was not CSS. `court_bench.png` was extracted with `crop_box=(12, 210, ...)`, which included **22 rows above the desk's far-edge outline** — a flat, featureless dark-brown band left over from the source art.

Behind a background layer those rows are harmless. In a *foreground* layer whose top edge is the hand-contact line, they render as a solid horizontal strip painted across the full width of the frame, in front of the character, directly under his waist. It reads as a gap between the character and the desk, which sends you hunting for a positioning bug that does not exist. No character baseline or furniture baseline value can fix it: the strip moves with the desk.

Rules that follow:
- Crop a foreground prop so that **row 0 is the contact line** (here, the desk's far-edge outline). Then `object-fit: cover` + `object-position: 50% 0%` makes "container top edge" and "contact line" the same line by construction, and the staging ratios mean what they say.
- Fix it in [[process_assets.py]], not in CSS. A CSS `object-position` nudge leaves the next regeneration of the asset broken.
- When a character looks detached from furniture, **check the asset's top rows before touching the geometry.** Dumping a column of source pixels (`centre_rgb` per row) finds it in seconds; measuring sprite bounding boxes does not, because the sprite is not the problem.

### 8. Idle Animations and Surface Contact Are Mutually Exclusive
`characterBreathe` floats the sprite by 3px. On a free-standing pose that reads as breathing; on a hands-planted pose it detaches the palms from the counter and reopens a gap under the waist twice per cycle. It is the reason a contact frame that measures correct in a still screenshot can still look wrong in motion.

Any frame declaring surface contact must cancel the float. Drive it off the frame (`data-stage-contact`), not off the pose name, so a future contact pose inherits the rule instead of reintroducing the bug.

### 9. Sprite Art Sets a Floor on Furniture Scale
`chapulin_slam.png` fixes two features 37px apart on stage: the row where the see-through notch between the forearms opens, and the row where the palms end. Staging must fit BOTH between the counter's far edge and its gold trim — the notch above, the palms below.

That makes the bench's on-screen scale a hard constraint rather than a composition preference. At `furnitureWidth: 0.667` the rendered wood surface is only 38px deep, so **no character baseline exists that satisfies both**: raise the character and the waist gaps, lower it and the palms slide onto the trim. It needs ≥0.9 width; the frames use 1.0 for margin.

The lesson generalises: before tuning a contact pose's position, compute the *depth* of the surface it has to land on and compare it against the distance between the sprite's own contact features. If the surface is too shallow, the position search is unsatisfiable and no amount of nudging will find it. A solver over a few candidate furniture widths finds this in one pass — worth doing before iterating visually.

### 10. Solve Contact Geometry, Do Not Eyeball It
Three separate attempts at this one contact pose were wrong, and each error was ~2–12px — below what a screenshot downscaled to fit a review pane can resolve. Describing what a render "looks like" produced confident wrong answers twice: a gap was reported as absent when it was 1.9px open, and a flat strip painted by the furniture asset was misread as a sprite positioning problem.

What worked, every time, was arithmetic on measured constants:

1. Extract the sprite's contact features as source rows (`waistNotchTop`, `palmsBottom`) by scanning the alpha channel for interior transparent runs — not by looking at the image.
2. Extract the furniture's features the same way (first opaque row, wood start, trim start) by dumping a column of source pixels.
3. Project both into stage coordinates through the frame ratios and solve for the baseline window. If the window is empty, the frame is unsatisfiable and no nudging will find it — change the furniture scale instead (see lesson 9).
4. Verify against the live DOM with `getBoundingClientRect`, not against a screenshot.

The resulting invariants belong in a test, because they are numeric and cheap to check. Steps 1–3 take one script; iterating visually took several rounds and still landed wrong.
