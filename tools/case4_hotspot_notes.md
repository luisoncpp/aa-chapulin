# Case 4 hotspot notes (stage percentages)

Boxes below are **percentages of the 960×540 investigation stage** after CSS `background-size: cover` + center on the 1536×1024 (3:2) plates. Cover is width-fitted: ~80px (~7.8125% of plate height) cropped equally from top and bottom. X matches plate X. Convert plate-Y with `stageY = (plateY - 7.8125) / 84.375 * 100`. Do not place a box only in the cropped bands.

Spanish and English copies use **identical** `id, x, y, w, h`. Examine-plate Present & Point bounds are percent of the 960×540 `examine_*.webp` (already 16:9).

## `bg_hotel_lobby.webp` (`hotel_lobby`, `hotel_lobby_d3`)

Committed:

- `hotspot_recepcion`: `46, 40, 44, 42` — marble desk + lower pigeonholes (desk starts ~43% X)
- `hotspot_candelabro`: `42, 8, 16, 20` — hanging crystal bowl (mount sits on the top crop edge; y:8 keeps the box in the visible band)

Landmarks on the cover crop: key cubbies ~52–90% X, 18–50% Y; hallway arch ~24–44% X; red runner ~4–42% X, 48–92% Y.

## `bg_hotel_suite.webp` (Suite 304)

Committed:

- `hotspot_puerta`: `2, 6, 24, 68` — Suite 304 door, plaque, chain, splintered jamb (far left)
- `hotspot_radiador`: `34, 42, 16, 36` — cast-iron radiator **left of the fireplace** (~34–50% X)
- `hotspot_cuerpo`: `28, 72, 36, 26` — chalk outline on the rug, center-left in front of radiator/fireplace
- `hotspot_cesto`: `86, 52, 14, 32` — wicker hamper **far right** (~86–100% X)

Landmarks: fireplace ~51–84% X, 28–76% Y; ice bucket on the foreground table ~67–81% X, 70–94% Y (the melted-water fact lives on `examine_foto.webp`).

## `bg_hotel_bar.webp` (`hotel_terraza`, `hotel_terraza_d2`)

Committed:

- `hotspot_barra`: `2, 36, 60, 40` — wood counter, stools, and back-bar bottles (counter runs ~0–65% X)

Landmarks: umbrella tables ~64–98% X, 48–70% Y; hanging glasses ~2–49% X, 2–22% Y.

## `bg_hotel_sotano.webp`

Committed:

- `hotspot_caldera`: `54, 32, 38, 52` — boiler body, fire door, and coal at the base (right half)

Landmarks: gauge panel ~2–18% X, 32–69% Y; horizontal steam pipe ~0–50% X, 46–62% Y; “SALA DE CALDERAS” sign ~4–22% X, 8–25% Y.

## `bg_hotel_suite204.webp`

Committed:

- `hotspot_armario`: `6, 8, 52, 78` — valet tailcoat, oak wardrobe (open door), briefcase at the base
- `hotspot_radiador204`: `62, 46, 26, 48` — radiator **right of the wardrobe** (~62–88% X), including the brass purge valve (~78% X, 65–76% Y)

## `bg_hotel_cava.webp`

Committed:

- `hotspot_estanteria`: `8, 16, 90, 72` — back-wall racks, barrels, locked bins, and the “MARQUÉS DE ALTAMIRA” nameplate chest

## `bg_hotel_azotea.webp`

Committed:

- `hotspot_baul`: `38, 52, 22, 34` — English travel trunk in the motor-housing recess (~39–57% X, 53–85% Y)

Landmarks: motor housing ~31–66% X, 12–94% Y; roof sign ~0–19% X, 0–20% Y (top clips).

## Reused plates

- `bg_detention.webp` (`detention`, `detention_d3`): kept Case 3 geometry — `botija_spot` `32, 10, 36, 58`; `phone_spot` `86, 16, 12, 40` (wall phone on the visitor side). Plate is ~16:9 (1376×768); cover crops ~5px from the sides.
- `bg_delegacion.webp` (`delegacion`): kept `hotspot_archivo` `8, 16, 18, 50` on the left filing cabinets.

## Examine plates (`examine_*.webp`) — Present & Point

Spec percentages written before the plates exist miss the painted objects. Overlay boxes on the generated 960×540 WebPs.

| File | Target | Box `[minX, minY, maxX, maxY]` |
|------|--------|--------------------------------------|
| `examine_foto.webp` | Full galvanized bucket including melted water | `[50, 14, 88, 82]` |
| `examine_plano.webp` | Vertical steam pipe 204↔304 (not boiler firebox) | `[40, 18, 62, 74]` |
| `examine_botella.webp` | Red wax seal dome, drips, and needle puncture | `[42, 2, 58, 30]` |
