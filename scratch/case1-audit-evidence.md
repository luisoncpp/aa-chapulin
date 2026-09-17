# Case 1 Evidence Asset + Hotspot Audit

Date: 2026-09-13

Scope honored: no source code, tests, docs, catalogs, hotspot definitions, generated `assets/`, or pipeline calls were modified. Only this scratch report and missing raw inputs under `tools/raw/case1/` were written.

## Coordinate Systems

- Trial Present & Point zones use percentages of the 640x360 presentation stage.
- Evidence detailed-view zones, if present, use percentages of the 960x540 detailed plate.
- Investigation scene hotspots use percentages of the 960x540 cover-cropped scene background.
- Case 1 detailed views currently define no `clickableZones`; their examine plates are display-only.

## Asset Inventory Findings

| Evidence / asset | Current catalog/script target | Existing generated output | Existing raw input | Audit result |
|---|---|---:|---:|---|
| `parte_detencion` Case 1 icon | `assets/parte_detencion_c1.webp` | Missing | `tools/raw/case1/parte_detencion_c1_raw.png` present | Raw is visually correct: Case 1 arrest report, Sala 2, 21:07, inventory, Chicharra not found. Needs pipeline output only. Do not fall back to `assets/parte_detencion.webp`; that is the generic/Case 0 folder icon. |
| `ficha_museo` icon | `assets/ficha_museo.webp` | Missing | `tools/raw/case1/ficha_museo_raw.png` present | Raw is visually correct for ES detailed/card identity: six lines, museum facts, letterhead, "bodega de proa / bodega de popa". Needs generated icon + ES examine plate. |
| `examine_ficha_museo` ES | `assets/examine_ficha_museo.webp` | Missing | `tools/raw/case1/ficha_museo_raw.png` present | Needs generated 960x540/1280x720-derived examine plate. No point/click zones. |
| `examine_ficha_museo_en` EN | `assets/examine_ficha_museo_en.webp` | Missing | Missing EN raw | Missing source art. Must be generated or otherwise produced separately with translated six lines and same visual defect: every `s` falls half a line below baseline. |
| `bitacora_ronda` icon | `assets/bitacora_ronda.webp` | Missing | `tools/raw/case1/bitacora_ronda_raw.png` added | Raw source generated: coffee-stained nautical round notebook hanging from a nail. Needs pipeline output later. |
| `vitrina_rota` icon | `assets/vitrina_rota.webp` | Missing | `tools/raw/case1/vitrina_rota_raw.png` added | Raw source generated: shattered display case on wooden pedestal with outward break identity. Needs pipeline output later. |
| `examine_vitrina_rota` | `assets/examine_vitrina_rota.webp` | Missing | Not generated | Detailed point plate left for a dedicated 16:9 plate/scene lane. Blocks final measurement of Pointing 1; current bounds are provisional code estimates. |
| `rejilla_ducto` icon | `assets/rejilla_ducto.webp` | Missing | `tools/raw/case1/rejilla_ducto_raw.png` added | Raw source generated: diamond-mesh grate with intact screws, bent lower corner, dust marks, and tiny thread. Needs pipeline output later. |
| `examine_rejilla_ducto` | `assets/examine_rejilla_ducto.webp` | Missing | Not generated | Detailed plate left for a dedicated 16:9 plate/scene lane. No point/click zones, but identity matters for climax stage 3. |
| `foto_crimen` icon | `assets/foto_crimen.webp` | Present | No Case 1 raw in `tools/raw/case1` | Existing icon is a 128x128 Chapulín Polaroid and is distinct from Case 4 `foto_suite304.webp`. Identity is broadly correct for Case 1 icon, but it does not replace the missing `examine_foto_crimen.webp`. |
| `examine_foto_crimen` | `assets/examine_foto_crimen.webp` | Missing | Missing raw | Missing source art. Blocks final measurement of Pointing 2. Must show Case 1 mirror photo, not Case 4 suite body photo. |
| `bolsa_dolares` icon | `assets/bolsa_dolares.webp` | Present | `tools/raw/case1/bolsa_dolares_raw.png` added | Existing 128x128 icon is usable but generic; new raw source locks rewritten Case 1 identity: empty prosecutor canvas bag, official seal, soot, burst seam, one silver coin. |
| `examine_bolsa_dolares` | `assets/examine_bolsa_dolares.webp` | Missing | Not generated | Detailed plate left for a dedicated 16:9 plate/scene lane. No point/click zones, but identity must show empty prosecutor canvas bag, seal, waxed-tarp soot, burst seam, one silver coin. |

## Presentation Slots Audited

### Opening Presents

| Flow | ES target | EN target | Asset / zone note |
|---|---|---|---|
| Day 1 opening | `insignia_abogado` | `insignia_abogado` | No zone. Existing shared badge asset. |
| Day 2 opening | `perfil_almanegra` | `perfil_almanegra` | Profile target, not evidence. No evidence asset zone. |

### Cross-Examination Presents and Follow-Ups

| Flow | Statement | First target | Follow-up target | Point zones |
|---|---|---|---|---|
| D1-T1 Florinda | `c1_d1t1_4` | `parte_detencion` | `chipote_chillon` | None. |
| D1-T2 Tripaseca | `c1_d1t2_5` | `informe_medico` | None | None. |
| D2-T1 Alma Negra | `c1_d2t1_1` | `bitacora_ronda` | `chicharra_oro` | None. |
| D2-T2 Tripaseca | `c1_d2t2_3` | `vitrina_rota` | `pastillas_chiquitolina` | Pointing 1 on `assets/examine_vitrina_rota.webp`. |
| D2-T3 Tripaseca | `c1_d2t3_3` | `foto_crimen` | `bolsa_dolares` | Pointing 2 on `assets/examine_foto_crimen.webp`; follow-up has no zone. |

### Climax Stages

| Stage | ES target | EN target | Asset / zone note |
|---|---|---|---|
| 1 | `perfil_tripaseca` | `perfil_tripaseca` | Profile target, not evidence. No zone. |
| 2 | `antenitas_vinil` | `antenitas_vinil` | No zone. |
| 3 | `rejilla_ducto` | `rejilla_ducto` | No zone. Needs identity match between icon and detailed plate because the stage relies on the inner-side thread/marks. |
| 4 | `ficha_museo` | `ficha_museo` | No click zone. ES displays `assets/examine_ficha_museo.webp`; EN displays `assets/examine_ficha_museo_en.webp`. |

## Recommended Trial Point Bounds

These are the exact current ES/EN geometry values and should remain the provisional recommendation until the missing plates exist. Once the actual WebPs are generated, remeasure on the final 640x360 presentation image.

### Pointing 1: `vitrina_rota`

Question: "what proves nobody struck this case from outside?"

Coordinate system: percent of 640x360 trial stage.

| Zone id | Bounds `[x,y,w,h]` | Correct? | Recommendation |
|---|---:|---:|---|
| `cristal_afuera` | `[2, 62, 48, 36]` | Yes | Keep as the correct zone if the glass fan lands across the lower-left/lower-center floor. It must cover only the outward glass fan, not the bent frame. |
| `pedestal` | `[46, 44, 20, 40]` | No | Acceptable wrong zone. |
| `rejilla` | `[74, 60, 16, 18]` | No | Acceptable wrong zone. |
| `jaula_perico` | `[4, 22, 18, 26]` | No | Acceptable wrong zone. |
| `regla_testigo` | `[24, 86, 22, 10]` | No | Acceptable wrong zone if the scale ruler is drawn there. |
| `vitrina_resto` | `[0, 0, 100, 100]` | No | Catch-all fallback. Ensure more specific zones are evaluated before it. |

Important art constraint: the bent-outward frame must be visible but not clickable, because it also proves the same conclusion and would violate the spec invariant if marked wrong.

### Pointing 2: `foto_crimen`

Question: "what is strange about that man's chest?"

Coordinate system: percent of 640x360 trial stage.

| Zone id | Bounds `[x,y,w,h]` | Correct? | Recommendation |
|---|---:|---:|---|
| `emblema_pecho` | `[38, 28, 20, 20]` | Yes | Keep as the correct zone if the reversed `HC` chest emblem lands around center-left upper torso. |
| `manos` | `[30, 50, 34, 16]` | No | Legitimate wrong zone: important later, but not the asked chest detail. |
| `puerta_fondo` | `[72, 24, 24, 34]` | No | Legitimate wrong zone: important later, but not the asked chest detail. |
| `marco_espejo` | `[0, 0, 100, 10]` | No | Wrong zone. |
| `piso_pasillo` | `[0, 68, 100, 32]` | No | Wrong zone. |
| `foto_resto` | `[0, 0, 100, 100]` | No | Catch-all fallback. Ensure more specific zones are evaluated before it. |

Important art constraint: the figure must be three-quarters toward camera with chest emblem and both empty hands readable. Do not use `assets/foto_suite304.webp`; Case 4's `foto_crimen` intentionally maps to a separate `assets/foto_suite304.webp` icon and has no detailed view.

## Detailed-View Zones

Coordinate system if added later: percent of 960x540 detailed plate.

Current Case 1 detailed views:

- `vitrina_rota`: no `clickableZones`.
- `rejilla_ducto`: no `clickableZones`.
- `bolsa_dolares`: no `clickableZones`.
- `ficha_museo`: no `clickableZones`.
- `foto_crimen`: no `clickableZones`.

No detailed-view clickable-zone bounds are recommended right now because the rewritten Case 1 catalog does not define any. The two interactive evidence-image interactions are trial Present & Point overlays, not Acta detailed-view clicks.

## ES/EN Geometry Parity

Parity is currently correct for all audited interactive point geometry:

- `VITRINA_POINT_TARGET` and `VITRINA_POINT_TARGET_EN` share the same zone ids and bounds.
- `FOTO_POINT_TARGET` and `FOTO_POINT_TARGET_EN` share the same zone ids and bounds.
- EN/ES presentation target IDs match for opening presents, cross-examination contradictions, follow-ups, and all climax stages.
- The only intentional EN asset divergence is `ficha_museo`: ES uses `assets/examine_ficha_museo.webp`; EN uses `assets/examine_ficha_museo_en.webp`.

## Generation Decisions

Built-in image generation was used for missing raw evidence icon/source inputs only. All four generated files are 1254x1254 RGB PNGs with solid chroma-key magenta backgrounds, matching the existing Case 1 raw source dimensions.

Files added:

- `tools/raw/case1/bitacora_ronda_raw.png`
- `tools/raw/case1/vitrina_rota_raw.png`
- `tools/raw/case1/rejilla_ducto_raw.png`
- `tools/raw/case1/bolsa_dolares_raw.png`

Files intentionally not generated in this pass:

- `tools/raw/case1/examine_vitrina_rota_raw.png`: detailed/point plate should be handled by the 16:9 evidence plate lane, then zones remeasured.
- `tools/raw/case1/examine_rejilla_ducto_raw.png`: detailed plate should be handled by the 16:9 evidence plate lane.
- `tools/raw/case1/examine_foto_crimen_raw.png`: detailed/point plate should be handled by the 16:9 evidence plate lane because composition must show the mirror-photo argument precisely.
- `tools/raw/case1/examine_bolsa_dolares_raw.png`: detailed plate should be handled by the 16:9 evidence plate lane.
- `tools/raw/case1/examine_ficha_museo_en_raw.png`: text-localized plate should be handled separately because it needs exact readable EN text and the same typewriter defect.

## Raw Files Changed

Added four raw files:

- `tools/raw/case1/bitacora_ronda_raw.png`
- `tools/raw/case1/vitrina_rota_raw.png`
- `tools/raw/case1/rejilla_ducto_raw.png`
- `tools/raw/case1/bolsa_dolares_raw.png`

## Source / Pipeline Confirmation

NO SOURCE CODE modified. NO PIPELINE called. No generated files under `assets/` modified.
