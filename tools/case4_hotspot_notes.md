# Case 4 hotspot notes (stage percentages)

Boxes below are **percentages of the 960×540 investigation stage** after CSS `background-size: cover` + center. Legacy Case 4 plates are 1536×1024 (3:2) and use the cover conversion below. Suite 304 is the approved 1536×864 (16:9) plate, so its coordinates map directly to the full rendered image.

Spanish and English copies use **identical** `id, x, y, w, h`. Examine-plate Present & Point bounds are percent of the 960×540 `examine_*.webp`.

Measured 2026-09-05 on rewritten plates.

## `bg_hotel_lobby.webp` (`hotel_lobby`, `hotel_lobby_d3`)

- `hotspot_libro` / `hotspot_libro_d3`: `52, 58, 15, 16` — SERVICE LEDGER
- `hotspot_plano` / `hotspot_plano_d3`: `64, 58, 27, 24` — FLOOR PLAN sheet
- `hotspot_programa`: `47, 53, 8, 15` — GALA PROGRAM card (not the hallway)

## `bg_hotel_suite.webp` (Suite 304, 16:9)

- `hotspot_cuerpo`: `54, 56, 35, 38` — body outline and side-table evidence (key, bottle, shards)
- `hotspot_almohada`: `68, 64, 15, 17` — pierced pillow; rendered after the body/table region
- `hotspot_recibidor`: `10, 4, 29, 64` — hall and bathroom through the open doors on the left
- `hotspot_cierre`: `2, 28, 9, 21` — door hole and damaged latch on the left door leaf
- `hotspot_radiador`: `72, 27, 14, 26`
- `hotspot_cesto`: `84, 43, 15, 29`
- `hotspot_cubeta`: `89, 77, 11, 22`

## `bg_hotel_bar.webp` (`hotel_terraza`, `hotel_terraza_d2`)

- `hotspot_barra`: `0, 43, 67, 36` — full bar counter
- `hotspot_lamina`: `14, 49, 24, 18` — REGISTRO DE CARGA clipboard (day 2)
- `hotspot_sombrillas` / `hotspot_sombrillas2`: `58, 12, 42, 35`

## `bg_hotel_sotano.webp`

- `hotspot_conducto`: `38, 0, 17, 60`
- `hotspot_inventario`: `5, 23, 30, 32` — sound-effect inventory
- `hotspot_banco`: `6, 59, 41, 31` — workbench
- `hotspot_cenizas`: `50, 71, 50, 29`

## `bg_hotel_suite204.webp`

- `hotspot_radiador204`: `64, 47, 24, 53`
- `hotspot_mesa`: `5, 67, 30, 33`
- `hotspot_armario`: `16, 0, 46, 67`
- `hotspot_recibo`: `15, 72, 9, 9` — B-17 paper (listed after mesa)

## `bg_hotel_cava.webp`

- `hotspot_libro`: `0, 63, 28, 20` — cellar ledger on crates
- `hotspot_botella`: `40, 47, 12, 42`
- `hotspot_cierre`: `50, 83, 8, 8` — cork
- `hotspot_lacre`: `41, 45, 11, 12` — neck wax
- `hotspot_estanteria`: `70, 0, 30, 65`

## `bg_hotel_azotea.webp` / `bg_hotel_azotea_day.webp`

- `hotspot_etiqueta`: `41, 63, 8, 11`
- `hotspot_faja`: `44, 54, 8, 43`
- `hotspot_forro`: `38, 86, 20, 12`
- `hotspot_compartimiento`: `38, 54, 18, 9`
- `hotspot_motor`: `32, 8, 43, 45`

## Reused plates

- `bg_detention.webp`: `botija_spot` `20, 10, 60, 65`; `phone_spot` `88, 15, 10, 45`
- `bg_delegacion.webp`: `hotspot_expediente` `10, 24, 18, 32` (papers on left cabinets); `hotspot_maletin` `73, 17, 11, 9` (briefcase on evidence lockers)

## Examine plates — Present & Point `[minX, minY, maxX, maxY]`

| File | Target | Box |
|------|--------|-----|
| `examine_cadena.webp` | Corridor-reachable loop (EMPAREJADA) | `[49, 40, 63, 68]` |
| `examine_plano.webp` | RAMAL 204–304 in the centered vertical cutaway | `[42, 14, 50, 88]` |
| `examine_registro.webp` | Boxed B-17 rows | `[18, 38, 86, 54]` |
| `examine_orden.webp` | Handwritten GORDON BOTIJA | `[18, 58, 80, 82]` |
| `examine_nota.webp` | Signed RECIBÍ | `[10, 64, 94, 86]` |
| `examine_botella.webp` | Fine needle channel | `[34, 48, 70, 79]` |
| `examine_sello.webp` | Truncated tip / fracture | `[50, 37, 80, 88]` |
