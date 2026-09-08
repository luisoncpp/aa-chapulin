# Court-Record Polaroids Must Lock to the Examine Plate

**What to remember:** a 1×1 `*_icon_raw.png` polaroid is a second generation pass. If you only say “crime photo of Suite 304,” the model paints a generic death-in-bed still. The Acta thumbnail then disagrees with `Examinar detalle`.

Case 4 `foto_crimen` copy lists body, pierced pillow, torn suit, glass, bottle, and key. `examine_foto.webp` already had that still (same layout family as `bg_hotel_suite`). The rewrite icon did not.

**Before shipping a polaroid rewrite:**

1. Use the finished `examine_*.webp` / raw JPEG as the identity lock.
2. Keep magenta only outside the Polaroid frame, or build the frame deterministically from the finished plate.
3. Do not invent a closer bedroom crop unless the examine plate is that crop. Case 4 now cover-crops `examine_foto_v3.png` into a compact `foto_suite304.webp` polaroid.

`foto_crimen` is presented whole on D1-T2 follow-up. It has no `pointTarget` and no examine `clickableZones`. Regenerating the icon does not move Present & Point boxes.

Related: [[docs/lessons-learned/shared-evidence-id-filenames.md]], [[docs/flows/evidence-examine-flow.md]].
