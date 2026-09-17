# Case 1 — Asset Manifest (generator input)

The implemented Case 1 asset set is processed by [[process_case1_assets.py]] from `tools/raw/case1/`. Art direction, canvas sizes and the mandatory style block are in [[docs/specs/case-1-turnabout-red-grasshopper.md]] §18 and [[docs/specs/artistic-direction.md]] — repeat §18.0 verbatim in every generation prompt; it is not inherited from context.

Everything reused (`bg_detention`, `bg_clinica`, `bg_waiting_room`, `bg_courtroom`, `bg_defense`, `bg_judge`, `bg_witness`, the Don Ramón / Chapulín / Super Sam / Judge / Florinda / Jirafales / Tripaseca sprite families, the five cut-ins and the eight inherited evidence icons) is already on disk and verified present, including `florinda_shock`, `jirafales_angry` and `tripaseca_breakdown`.

## 1. Backgrounds — 4 files, raw plate → 960 × 540 cover crop

| File | Scene | Referenced by |
|---|---|---|
| `assets/bg_museo_sala2.webp` | Museum gallery 2, crime scene (§18.1) | [[src/case/case1/Private/museo.ts]], [[src/case/case1/Private/museo_en.ts]] |
| `assets/bg_patio_carga.webp` | Loading yard, unplated truck (§18.1) | [[src/case/case1/Private/patio.ts]], [[src/case/case1/Private/patio_en.ts]] |
| `assets/bg_pasillo_espejo.webp` | Mirror corridor and camera room (§18.1) | [[src/case/case1/Private/camaras.ts]], [[src/case/case1/Private/camaras_en.ts]] |
| `assets/bg_clinica_cuarto6.webp` | Municipal clinic room 6, day 1 coma visit (§18.1) | [[src/case/case1/Private/clinica.ts]], [[src/case/case1/Private/clinica_en.ts]] |

Hotspot boxes are percentages of each 960 × 540 cover crop, not of the raw canvas ([[docs/lessons-learned/investigation-hotspot-cover-crop.md]]). The Case 1 hotspot test pins the accepted geometry.

## 2. Sprites — 4 files, the Alma Negra family

Identity lock is `almanegra_vendado`, not a healthy pose: he is never seen healthy in the episode (§18.2, [[docs/lessons-learned/barriga-injured-pose-lock.md]]). Repeat the full identity paragraph in all four prompts.

| File | Use | Canvas | Referenced by |
|---|---|---|---|
| `assets/almanegra_vendado.webp` | Stand (day 2), clinic, epilogue | 512 × 512 bust, waist cut at the cell floor | [[src/case/case1/Private/clinica_d2.ts]], [[src/case/case1/Private/trial_day2.ts]], [[src/case/case1/Private/witness_calls.ts]], [[src/case/case1/Private/epilogue.ts]] (+ `_en` twins) |
| `assets/almanegra_shock.webp` | Reactions on the stand | same | [[src/case/case1/Private/trial_day2.ts]], [[src/case/case1/Private/trial_day2_t3.ts]], [[src/case/case1/Private/climax.ts]], [[src/case/case1/Private/clinica_d2.ts]] (+ `_en`) |
| `assets/almanegra_sweat.webp` | Uncomfortable press (the notebook on its nail) | same | [[src/case/case1/Private/trial_day2.ts]], [[src/case/case1/Private/trial_day2_en.ts]] |
| `assets/almanegra_inconsciente.webp` | Legacy support sprite | **separate 1 × 1 full-body sheet**, wider than tall: scale into the 512 canvas, never crop ([[docs/lessons-learned/oversized-full-pose-anchor.md]]). Day-1 clinic examination uses `bg_clinica_cuarto6.webp` instead so the patient and bandage remain visible when Examine hides sprites. | Layout regression coverage only |

## 3. Examine plates — 7 files from 6 bases, 960 × 540

| File | Evidence | Also serves as | Referenced by |
|---|---|---|---|
| `assets/examine_vitrina_rota.webp` | `vitrina_rota` | **Pointing 1 board** | [[src/state/Private/EvidenceCatalogCase1Es.ts]], [[src/case/case1/Private/trial_day2_t2.ts]] (+ `_en`) |
| `assets/examine_rejilla_ducto.webp` | `rejilla_ducto` | — | [[src/state/Private/EvidenceCatalogCase1Es.ts]] (+ `…En.ts`) |
| `assets/examine_foto_crimen.webp` | `foto_crimen` | **Pointing 2 board** | [[src/state/Private/EvidenceCatalogCase1Es.ts]], [[src/case/case1/Private/trial_day2_t3.ts]] (+ `_en`) |
| `assets/examine_plano_pasillo.webp` | `plano_pasillo` | Consult-only corridor plan | [[src/state/Private/EvidenceCatalogCase1Es.ts]] (+ `…En.ts`) |
| `assets/examine_bolsa_dolares.webp` | `bolsa_dolares` | — | [[src/state/Private/EvidenceCatalogCase1Es.ts]] (+ `…En.ts`) |
| `assets/examine_ficha_museo.webp` | `ficha_museo` (ES) | Full-screen plate, climax stage 4 | [[src/state/Private/EvidenceCatalogCase1Es.ts]], [[src/case/case1/Private/climax.ts]] |
| `assets/examine_ficha_museo_en.webp` | `ficha_museo` (EN) | Same plate, six lines translated | [[src/state/Private/EvidenceCatalogCase1En.ts]], [[src/case/case1/Private/climax_en.ts]] |

> **Pointing plates.** Zone boxes in [[src/case/case1/Private/trial_day2_t2.ts]] and [[src/case/case1/Private/trial_day2_t3.ts]] (and their `_en` twins) are measured on the generated 960 × 540 WebPs ([[docs/lessons-learned/present-point-cover-crop.md]]). Invariant I4 of spec §23.D applies: no wrong zone may be a valid answer to the question being asked, and the bent-outward frame of the display case is drawn but deliberately **not** clickable.
>
> `examine_foto_crimen.webp` must show the figure three-quarters **towards** the camera — the chest emblem and the two open, empty hands are the argument, and the Chipote hangs from the belt (invariant I7).

## 4. Evidence icons — 6 files

| File | Contents | Referenced by |
|---|---|---|
| `assets/vitrina_rota.webp` | Shattered display case on its pedestal | [[src/state/Private/EvidenceCatalogCase1Es.ts]] (+ `…En.ts`) |
| `assets/rejilla_ducto.webp` | Diamond-mesh grate, lower corner bent | idem |
| `assets/ficha_museo.webp` | Typewritten index card, folded corner | idem |
| `assets/bitacora_ronda.webp` | Coffee-stained pocket notebook on a nail | idem |
| `assets/parte_detencion_c1.webp` | Police folder with a mallet photo. **The `_c1` suffix is mandatory:** `parte_detencion` is also a Case 0 id and would collide at `assets/parte_detencion.webp` ([[docs/lessons-learned/shared-evidence-id-filenames.md]]) | idem (both catalogues override `icon`) |
| `assets/plano_pasillo.webp` | Top-down service-corridor plan. Door, camera, mirror, galleries. No guilt arrows. | idem |

## 5. Profile icons — 7 files, 256 × 256

Bust crop of the matching `*_idle`, on a flat non-magenta background, no text, no frame. All seven are referenced from [[src/state/Private/ProfileCatalogCase1Es.ts]] and [[src/state/Private/ProfileCatalogCase1En.ts]].

| File | Cropped from |
|---|---|
| `assets/profile_perfil_chapulin.webp` | `chapulin_idle` |
| `assets/profile_perfil_donramon.webp` | `donramon_idle` |
| `assets/profile_perfil_supersam.webp` | `supersam_idle` |
| `assets/profile_perfil_tripaseca.webp` | `tripaseca_smug` |
| `assets/profile_perfil_florinda.webp` | `florinda_idle` |
| `assets/profile_perfil_jirafales.webp` | `jirafales_idle` |
| `assets/profile_perfil_almanegra.webp` | `almanegra_vendado` — his only identity in this case, so this one waits on §2 |

## Pipeline

Run `python process_case1_assets.py` to key the Alma Negra sheets, flatten profile icons, extract evidence icons, normalize the seven 960 × 540 examine plates, draw `plano_pasillo`, and export the four backgrounds. Then run [[verify_assets.py]]. Audio needs nothing: spec §19 is zero new tracks and zero new SFX.
