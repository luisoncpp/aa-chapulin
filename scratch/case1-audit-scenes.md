# Case 1 Scene and Detailed-View Plate Audit

Date: 2026-09-13

Scope audited:

- Scene plates: `bg_museo_sala2`, `bg_patio_carga`, `bg_pasillo_espejo`.
- Evidence/icon plates: `vitrina_rota`, `rejilla_ducto`, `ficha_museo`, `bolsa_dolares`, `foto_crimen`.
- Detailed-view plates: `examine_vitrina_rota`, `examine_rejilla_ducto`, `examine_ficha_museo`, `examine_bolsa_dolares`, `examine_foto_crimen`.
- Case 1 investigation hotspots in ES/EN.
- Trial Present & Point zones involving `examine_vitrina_rota.webp` and `examine_foto_crimen.webp`.

Coordinate systems:

- Investigation hotspots: `{ x, y, w, h }`, percent of the 960x540 stage cover crop.
- Trial Present & Point zones: `bounds: [minX, minY, maxX, maxY]`, percent of the 640x360 overlay.
- Detailed examine clickable zones: `{ x, y, width, height }`, percent of the 960x540 plate.

## Summary

The Case 1 script and catalog reference final WebP assets that mostly do not exist in `assets/`. Presently missing:

- `assets/bg_museo_sala2.webp`
- `assets/bg_patio_carga.webp`
- `assets/bg_pasillo_espejo.webp`
- `assets/vitrina_rota.webp`
- `assets/rejilla_ducto.webp`
- `assets/ficha_museo.webp`
- `assets/examine_vitrina_rota.webp`
- `assets/examine_rejilla_ducto.webp`
- `assets/examine_ficha_museo.webp`
- `assets/examine_ficha_museo_en.webp`
- `assets/examine_bolsa_dolares.webp`
- `assets/examine_foto_crimen.webp`

Existing in scope:

- `assets/bolsa_dolares.webp` icon, 128x128.
- `assets/foto_crimen.webp` icon, 128x128.
- Raw inputs: `tools/raw/case1/bg_museo_sala2_raw.png`, `tools/raw/case1/bg_patio_carga_raw.png`, `tools/raw/case1/ficha_museo_raw.png`.

No asset pipeline was run. No generated assets under `assets/` were modified.

Generation follow-up completed:

- Replaced `tools/raw/case1/bg_museo_sala2_raw.png` with an edited raw where the broken display case is empty.
- Added `tools/raw/case1/bg_pasillo_espejo_raw.png`.
- Added `tools/raw/case1/examine_vitrina_rota_raw.png`.
- Added `tools/raw/case1/vitrina_rota_raw.png` from the same successful raw plate for now.
- Added `tools/raw/case1/examine_rejilla_ducto_raw.png`.
- Added `tools/raw/case1/rejilla_ducto_raw.png` from the same successful raw plate for now.
- Added `tools/raw/case1/examine_bolsa_dolares_raw.png`.
- Added `tools/raw/case1/examine_foto_crimen_raw.png`.
- Replaced `tools/raw/case1/ficha_museo_raw.png` with an exact-text deterministic raw card after the image-generation text edit corrupted words.
- Added `tools/raw/case1/ficha_museo_en_raw.png` as the English exact-text variant.

`tools/raw/case1/bolsa_dolares_raw.png` was already present and was not replaced.

The highest-risk geometry bug is in the two trial `pointTarget` definitions: both Case 1 modules store `bounds` as if they were `[x, y, width, height]`, but the engine reads them as `[minX, minY, maxX, maxY]`. Several current zones are therefore impossible to click because `maxY < minY` or `maxX < minX`.

## Raw Input Audit

| Raw file | Current status | Recommendation |
|---|---|---|
| `tools/raw/case1/bg_museo_sala2_raw.png` | Exists. Strong style match and composition. Contains broken vitrine, outward glass, grate, card, and parrot cage. Problem: the golden relic still appears inside the shattered vitrine, contradicting the stolen/empty-pedestal beat. | Keep style and composition, but remove the golden relic from the case/pedestal before pipeline generation. |
| `tools/raw/case1/bg_patio_carga_raw.png` | Exists. Strong style match. Contains loading door, truck, no rear plate, bag, wall gap, and exterior wall vent. | Keep. Hotspot geometry should be adjusted to the painted wall vent and bag position. |
| `tools/raw/case1/ficha_museo_raw.png` | Exists. Readable Spanish card on magenta. Problem: mandatory dropped-`s` typewriter defect is not visible. It is also square/magenta raw, not a full 16:9 examine plate, and there is no EN raw variant. | Replace or supplement with 16:9 ES and EN raw detailed plates. Preserve exact text and add the dropped-`s` defect in every line. |
| `tools/raw/case1/bg_pasillo_espejo_raw.*` | Missing. | Generate raw input before any pipeline run. Required elements: mirror, camera box aimed at mirror, roll log sheet, envelope/table, open loading door with truck silhouette. |
| Raw inputs for `vitrina_rota`, `rejilla_ducto`, `examine_vitrina_rota`, `examine_rejilla_ducto`, `examine_bolsa_dolares`, `examine_foto_crimen` | Missing. | Generate raw inputs before any pipeline run. The detailed plates must be the calibration source for both detailed examine zones and trial point zones. |

Post-generation status:

| Raw file | Current status |
|---|---|
| `tools/raw/case1/bg_museo_sala2_raw.png` | Replaced; the visible stolen relic was removed from the shattered case. |
| `tools/raw/case1/bg_pasillo_espejo_raw.png` | Added; contains camera, roll sheet, envelope/table, mirror, open loading door, and truck silhouette/reflection. |
| `tools/raw/case1/examine_vitrina_rota_raw.png` | Added; contains empty case, outward glass, parrot cage, wall grate, and ruler. |
| `tools/raw/case1/vitrina_rota_raw.png` | Added from the same generated vitrine close-up as a temporary raw source. |
| `tools/raw/case1/examine_rejilla_ducto_raw.png` | Added; contains four screws, mesh, bent lower corner, thread, and measuring tape. Dust-strip visibility should be checked before final pipeline use. |
| `tools/raw/case1/rejilla_ducto_raw.png` | Added from the same generated grate close-up as a temporary raw source. |
| `tools/raw/case1/examine_bolsa_dolares_raw.png` | Added; contains empty bag, green seal, soot, burst seam, coin, and ruler. |
| `tools/raw/case1/examine_foto_crimen_raw.png` | Added; second generated attempt was used because it better preserves Chapulin identity. Contains mirror frame, `HC`, open hands, truck, floor tiles, and timestamp. |
| `tools/raw/case1/ficha_museo_raw.png` | Replaced with exact Spanish text and visible dropped-`s` defect. |
| `tools/raw/case1/ficha_museo_en_raw.png` | Added with exact English text and visible dropped-`s` defect. |

## Investigation Hotspots

Spanish/English parity: PASS. Every Case 1 investigation hotspot has identical geometry in ES and EN.

Bounds containment: PASS. Every current box stays inside the 960x540 stage.

Automated coverage: partial. `tests/case/Case1Hotspots.test.ts` pins only `museo_sala2` exact boxes, then checks containment and ES/EN parity for all Case 1 scenes.

### `detention` on `assets/bg_detention.webp`

Current and recommended:

| Hotspot | Current | Recommended | Notes |
|---|---:|---:|---|
| `hotspot_chapulin` | `{ x: 22, y: 12, w: 56, h: 66 }` | keep | Shared existing plate; broad character target is intentional. |
| `hotspot_cristal` | `{ x: 86, y: 16, w: 12, h: 44 }` | keep | Shared existing plate; right-side glass target remains contained. |

### `museo_sala2` on `bg_museo_sala2`

Measured against `tools/raw/case1/bg_museo_sala2_raw.png` as a 16:9 plate.

| Hotspot | Current | Recommended | Reason |
|---|---:|---:|---|
| `hotspot_vitrina` | `{ x: 44, y: 30, w: 26, h: 40 }` | `{ x: 42, y: 28, w: 29, h: 43 }` | Current is usable, but slightly tight on the top/right frame and glass spread. |
| `hotspot_rejilla` | `{ x: 72, y: 62, w: 16, h: 18 }` | `{ x: 72, y: 55, w: 11, h: 17 }` | Current catches the grate but extends low/right into floor and display case. |
| `hotspot_cedula` | `{ x: 36, y: 46, w: 12, h: 16 }` | `{ x: 38, y: 47, w: 12, h: 13 }` | Current is acceptable; tighter box better tracks the painted label. |
| `hotspot_jaula` | `{ x: 6, y: 62, w: 20, h: 26 }` | `{ x: 0, y: 58, w: 28, h: 31 }` | Current misses the left side of the visible cage. |
| `hotspot_ventana` | `{ x: 8, y: 12, w: 16, h: 20 }` | `{ x: 8, y: 0, w: 18, h: 20 }` | Current is too low; the painted window is near the top edge. |

Art note: the museum raw should remove the visible golden object from the broken display. Otherwise the `vitrina_rota` evidence, later theft logic, and `antenitas_vinil` climax beat fight the picture.

### `clinica` on `assets/bg_clinica.webp`

Current and recommended:

| Hotspot | Current | Recommended | Notes |
|---|---:|---:|---|
| `hotspot_expediente` | `{ x: 62, y: 58, w: 22, h: 24 }` | keep | Existing shared plate; no scoped raw change. |
| `hotspot_vendaje` | `{ x: 30, y: 30, w: 22, h: 22 }` | keep | Existing shared plate; no scoped raw change. |
| `hotspot_silla` | `{ x: 8, y: 54, w: 18, h: 30 }` | keep | Existing shared plate; no scoped raw change. |

### `patio_carga` on `bg_patio_carga`

Measured against `tools/raw/case1/bg_patio_carga_raw.png` as a 16:9 plate.

| Hotspot | Current | Recommended | Reason |
|---|---:|---:|---|
| `hotspot_camioneta` | `{ x: 58, y: 30, w: 34, h: 42 }` | `{ x: 52, y: 27, w: 42, h: 48 }` | Current misses much of the cab and upper tarp. |
| `hotspot_guantera` | `{ x: 62, y: 46, w: 14, h: 14 }` | `{ x: 52, y: 38, w: 12, h: 25 }` | Current sits on the truck bed, not the cab/glovebox area. |
| `hotspot_bolsa` | `{ x: 78, y: 66, w: 18, h: 20 }` | `{ x: 83, y: 58, w: 15, h: 20 }` | Current catches the bag but is low/left-heavy. |
| `hotspot_puerta` | `{ x: 8, y: 30, w: 20, h: 44 }` | `{ x: 0, y: 13, w: 29, h: 57 }` | Current misses the top and left leaf of the door. |
| `hotspot_rejilla_exterior` | `{ x: 30, y: 74, w: 14, h: 14 }` | `{ x: 7, y: 54, w: 12, h: 10 }` | Current appears to target the floor drain. The scripted object is the wall grate by the loading door. |
| `hotspot_barda` | `{ x: 30, y: 12, w: 26, h: 18 }` | `{ x: 42, y: 13, w: 21, h: 20 }` | Current covers the left part of the missing-glass span; recommended centers the wall gap. |

### `cuarto_camaras` on `bg_pasillo_espejo`

`assets/bg_pasillo_espejo.webp` and raw input are both missing, so exact art-based calibration cannot be verified. Current ES/EN geometry is internally consistent. Treat the following as provisional until the final plate exists:

| Hotspot | Current | Recommended now | Required final verification |
|---|---:|---:|---|
| `hotspot_camara` | `{ x: 8, y: 8, w: 16, h: 18 }` | keep provisional | Must cover the camera box and avoid only hitting blank wall. |
| `hotspot_foto` | `{ x: 30, y: 60, w: 16, h: 16 }` | keep provisional | Must cover the developing envelope/table. |
| `hotspot_bitacora_rollo` | `{ x: 14, y: 30, w: 14, h: 16 }` | keep provisional | Must cover the wall sheet next to the camera. |
| `hotspot_espejo` | `{ x: 54, y: 24, w: 36, h: 48 }` | keep provisional | Must cover the Venetian mirror, not the open doorway. |

### `clinica_d2` on `assets/bg_clinica.webp`

Current and recommended:

| Hotspot | Current | Recommended | Notes |
|---|---:|---:|---|
| `hotspot_silla_ruedas` | `{ x: 34, y: 46, w: 30, h: 34 }` | keep | Existing shared plate with different resident sprite; no scoped raw change. |
| `hotspot_buro` | `{ x: 70, y: 52, w: 18, h: 22 }` | keep | Existing shared plate; no scoped raw change. |

## Trial Present & Point

The engine uses `[minX, minY, maxX, maxY]`. Current Case 1 data uses width/height in slots 3 and 4.

### `vitrina_rota` / `assets/examine_vitrina_rota.webp`

Current ES and EN are identical.

| Zone | Current `bounds` | Effective status | Recommended `bounds` |
|---|---:|---|---:|
| `cristal_afuera` | `[2, 62, 48, 36]` | Unclickable: `maxY < minY`. | `[2, 62, 48, 98]` |
| `pedestal` | `[46, 44, 20, 40]` | Unclickable: `maxX < minX`, `maxY < minY`. | `[46, 44, 66, 84]` |
| `rejilla` | `[74, 60, 16, 18]` | Unclickable: `maxX < minX`, `maxY < minY`. | `[74, 60, 90, 78]` |
| `jaula_perico` | `[4, 22, 18, 26]` | Clickable but tiny: only `x=4..18`, `y=22..26`. | `[4, 22, 22, 48]` |
| `regla_testigo` | `[24, 86, 22, 10]` | Unclickable: `maxX < minX`, `maxY < minY`. | `[24, 86, 46, 96]` |
| `vitrina_resto` | `[0, 0, 100, 100]` | Catch-all works. | keep |

The recommended values above are the minimum conversion from current intended `{ x, y, w, h }` semantics into `[minX, minY, maxX, maxY]`. They still need final measurement on the generated `examine_vitrina_rota.webp`, because that asset is missing.

### `foto_crimen` / `assets/examine_foto_crimen.webp`

Current ES and EN are identical.

| Zone | Current `bounds` | Effective status | Recommended `bounds` |
|---|---:|---|---:|
| `emblema_pecho` | `[38, 28, 20, 20]` | Unclickable: `maxX < minX`, `maxY < minY`. | `[38, 28, 58, 48]` |
| `manos` | `[30, 50, 34, 16]` | Unclickable: `maxY < minY`; tiny x span. | `[30, 50, 64, 66]` |
| `puerta_fondo` | `[72, 24, 24, 34]` | Unclickable: `maxX < minX`. | `[72, 24, 96, 58]` |
| `marco_espejo` | `[0, 0, 100, 10]` | Works. | keep |
| `piso_pasillo` | `[0, 68, 100, 32]` | Unclickable: `maxY < minY`. | `[0, 68, 100, 100]` |
| `foto_resto` | `[0, 0, 100, 100]` | Catch-all works. | keep |

The recommended values above are the minimum conversion from current intended `{ x, y, w, h }` semantics into `[minX, minY, maxX, maxY]`. They still need final measurement on the generated `examine_foto_crimen.webp`, because that asset is missing.

## Detailed Examine Clickable Zones

Current catalog status: no Case 1 `detailedView` defines `clickableZones`. This is consistent in ES/EN, but it means the detailed examine modal only shows an image and caption.

If clickable detailed zones are desired, use `{ x, y, width, height }` on the final 960x540 detailed plate. Do not reuse trial `bounds` directly; convert from `[minX,minY,maxX,maxY]` to `{ x: minX, y: minY, width: maxX - minX, height: maxY - minY }`.

Recommended provisional detailed zones:

| Plate | Current | Recommended provisional zones |
|---|---|---|
| `examine_vitrina_rota.webp` | none | `cristal_afuera { x: 2, y: 62, width: 46, height: 36 }`; `pedestal { x: 46, y: 44, width: 20, height: 40 }`; `rejilla { x: 74, y: 60, width: 16, height: 18 }`; `jaula_perico { x: 4, y: 22, width: 18, height: 26 }`; `regla_testigo { x: 24, y: 86, width: 22, height: 10 }`. |
| `examine_foto_crimen.webp` | none | `emblema_pecho { x: 38, y: 28, width: 20, height: 20 }`; `manos { x: 30, y: 50, width: 34, height: 16 }`; `puerta_fondo { x: 72, y: 24, width: 24, height: 34 }`; `marco_espejo { x: 0, y: 0, width: 100, height: 10 }`; `piso_pasillo { x: 0, y: 68, width: 100, height: 32 }`. |
| `examine_rejilla_ducto.webp` | none | Cannot give exact final zones without the missing plate. Required objects: four intact screws, bent lower corner, two clean dust strips on inner lip, cream pinstriped thread, tape measure. |
| `examine_ficha_museo.webp` / `_en.webp` | none | Cannot give exact final zones without the missing 16:9 plate. Required objects: six typed lines, dropped-`s` defect, reverse letterhead. |
| `examine_bolsa_dolares.webp` | none | Cannot give exact final zones without the missing plate. Required objects: green prosecutor stamp, soot, burst seam, silver coin, scale rule. |

## Spanish/English Parity

Pass:

- Investigation geometry is identical across ES/EN for every Case 1 scene.
- `vitrina_rota` point target geometry is identical across ES/EN.
- `foto_crimen` point target geometry is identical across ES/EN.
- Catalog detailed-view asset parity is correct in concept: only `ficha_museo` points to an English-specific image (`assets/examine_ficha_museo_en.webp`); all other detailed plates are shared.

Risks:

- `assets/examine_ficha_museo_en.webp` is referenced but missing, and there is no EN raw input.
- The existing Spanish raw card uses Spanish text only and lacks the mandatory dropped-`s` defect.

## Identity and Style

The two existing scene raws match the game's painterly 1970s Mexican courtroom-adventure style well. They avoid modern anime, 3D render, photorealism, watermarks, and English text.

Required art fixes before shipping:

1. Remove the golden relic from `bg_museo_sala2_raw.png`; the vitrine/pedestal must read as robbed.
2. Generate `bg_pasillo_espejo_raw` in the same style before measuring `cuarto_camaras` boxes.
3. Generate the missing detailed raw plates and final WebPs before locking final point/detailed bounds.
4. Rebuild `ficha_museo` raw as ES and EN 16:9 detailed plates with the dropped-`s` defect.

## Recommended Regression Coverage

- Extend the Case 1 hotspot test to pin exact patio and camera-room geometry after the final raw/final WebP plates exist.
- Add a Case 1 Present & Point geometry test that rejects any `bounds` where `maxX <= minX` or `maxY <= minY`.
- Add an asset integrity test expectation for every referenced Case 1 scene/detailed/icon WebP once generated.

## Raw Files Changed

Changed/added under `tools/raw/case1` only:

- `bg_museo_sala2_raw.png`
- `bg_pasillo_espejo_raw.png`
- `examine_vitrina_rota_raw.png`
- `vitrina_rota_raw.png`
- `examine_rejilla_ducto_raw.png`
- `rejilla_ducto_raw.png`
- `examine_bolsa_dolares_raw.png`
- `examine_foto_crimen_raw.png`
- `ficha_museo_raw.png`
- `ficha_museo_en_raw.png`

Rejected generated output:

- A built-in image-generation edit for `ficha_museo_raw.png` visibly corrupted words while trying to lower the `s` characters, so it was not saved. The saved ES/EN card raws were generated deterministically to preserve exact text.

NO SOURCE CODE / NO PIPELINE.
