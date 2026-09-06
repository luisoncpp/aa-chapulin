# Examine Zones Are Native Buttons

`buildExamineZone` creates a real `<button>` for each `clickableZones` entry. A `<button>` with no
text still paints the browser's default chrome: opaque background and border. If `.examine-zone`
only styles `:hover`, the zones show up as **solid white rectangles** over the artwork that appear
to "turn transparent" on hover — the hover rule is simply the only rule that repaints them.

Any absolutely-positioned overlay hitbox built from `<button>` (or `<input>`) must explicitly reset
`appearance`, `background`, `border`, `padding`, `margin` and `font`. `position: absolute` and a
width/height do not clear native widget painting.

Corollary: give invisible hitboxes a *deliberate* resting affordance (a faint dashed outline here).
A zone that is genuinely invisible until hovered is indistinguishable from the bug, so the player
cannot tell a styling regression from intended design.

## Measuring the boxes

`#evidence-examine-stage` is 640×360 and the plates are 960×540 — same 16:9, so `object-fit:
contain` produces no letterbox and zone percentages map 1:1 onto the WebP. Measure coordinates
against the generated image (same discipline as
[[docs/lessons-learned/present-point-cover-crop.md]]); spec-guessed percentages drift off the
painted element. Coordinates live in **both** `EvidenceCatalogCase4Es.ts` and
`EvidenceCatalogCase4En.ts` and must be retuned in both.
