# Case 1 Character/Profile Asset Audit

Date: 2026-09-13

Scope requested: Alma Negra poses (`inconsciente`, `vendado`, `shock`, `sweat`), all seven Case 1 profile cards, and other Case 1 character assets revealed by scripts. No source, catalog, hotspot, generated `assets/`, or pipeline edits.

## Sources Checked

- Required startup docs: `docs/live/glossary.md`, `docs/GUIDELINES.md`, `docs/WORKFLOW.md`, `docs/architecture/README.md`, `docs/lessons-learned/README.md`, `docs/flows/README.md`, `docs/UPDATE.md`.
- Case 1 docs: `docs/specs/case-1-turnabout-red-grasshopper.md`, `docs/specs/case-1-asset-manifest.md`, `docs/specs/artistic-direction.md`.
- Flow/architecture docs: `docs/flows/character-record-flow.md`, `docs/architecture/asset-pipeline.md`, `docs/architecture/case-scripting.md`.
- Runtime refs: `src/case/case1/**`, `src/state/Private/ProfileCatalogCase1Es.ts`, `src/state/Private/ProfileCatalogCase1En.ts`, `src/case/case1/Private/progress.ts`.
- Inventory: `tools/raw/case1`, `assets/`, `verify_assets.py`.

## Findings

### Runtime assets still missing

`python verify_assets.py` still fails because generated runtime WebPs are absent from `assets/`. Character/profile-relevant missing entries:

- `assets/almanegra_vendado.webp`
- `assets/almanegra_shock.webp`
- `assets/almanegra_sweat.webp`
- `assets/almanegra_inconsciente.webp`
- `assets/profile_perfil_chapulin.webp`
- `assets/profile_perfil_donramon.webp`
- `assets/profile_perfil_supersam.webp`
- `assets/profile_perfil_tripaseca.webp`
- `assets/profile_perfil_florinda.webp`
- `assets/profile_perfil_jirafales.webp`
- `assets/profile_perfil_almanegra.webp`

This is expected until the Case 1 asset processor is extended/run. I did not run any asset pipeline and did not create WebPs under `assets/`.

### Raw inputs now covered for requested character/profile scope

Before this audit, `tools/raw/case1` had six profile raw PNGs:

- `profile_perfil_chapulin_raw.png`
- `profile_perfil_donramon_raw.png`
- `profile_perfil_supersam_raw.png`
- `profile_perfil_tripaseca_raw.png`
- `profile_perfil_florinda_raw.png`
- `profile_perfil_jirafales_raw.png`

Visual spot-check: these six keep the expected identity markers and Ace Attorney bust style. Super Sam is navy/flag-cape, not yellow/green; Tripaseca has fedora/pinstripe/cigar; Florinda has curlers/fan; Don Ramon has navy suit/blue hat; Chapulin has red suit/yellow heart; Jirafales has lecturer identity.

Missing raw inputs were generated for Alma Negra:

- `tools/raw/case1/almanegra_sprites_raw.png` - 1254 x 1254, 2x2 magenta sheet. Contains vendado, shock, sweat, and a neutral vendado alternate. Identity markers present: very broad injured watchman, white bandage, left eyepatch, right gold hoop, navy brass-button coat, striped shirt, beard with red-tied chin braid, wheelchair handles.
- `tools/raw/case1/almanegra_inconsciente_raw.png` - 1254 x 1254, magenta 1x1 hospital-bed pose. Wider-than-tall composition, bandaged/eyepatched unconscious Alma Negra in bed.
- `tools/raw/case1/profile_perfil_almanegra_raw.png` - 1254 x 1254, derived from the vendado identity cell so the seventh profile raw exists.

Note: the profile raw follows the existing six raw files by retaining magenta at raw stage. The final `assets/profile_perfil_*.webp` outputs still need the profile-icon pipeline behavior promised by the manifest: 256 x 256, flat non-magenta background, no text/frame.

## Usage Audit

### Alma Negra poses

- `almanegra_inconsciente`: used in day-1 clinic ES/EN (`clinica.ts`, `clinica_en.ts`) as the location idle pose and narration pose.
- `almanegra_vendado`: used in day-2 clinic, day-2 testimony, witness call, and epilogue ES/EN.
- `almanegra_shock`: used in day-2 clinic, witness call, testimony reactions, climax, and epilogue-adjacent trial beats ES/EN.
- `almanegra_sweat`: used in the day-2 testimony contradiction success when the notebook-on-a-nail point lands, ES/EN.

The generated raw sheet covers all three bust poses plus the unconscious raw covers the separate full-body hospital requirement.

### Profiles

Both ES and EN catalogs define the same seven profile ids and reference the same icon paths:

- `perfil_chapulin` -> `assets/profile_perfil_chapulin.webp`
- `perfil_donramon` -> `assets/profile_perfil_donramon.webp`
- `perfil_supersam` -> `assets/profile_perfil_supersam.webp`
- `perfil_tripaseca` -> `assets/profile_perfil_tripaseca.webp`
- `perfil_florinda` -> `assets/profile_perfil_florinda.webp`
- `perfil_jirafales` -> `assets/profile_perfil_jirafales.webp`
- `perfil_almanegra` -> `assets/profile_perfil_almanegra.webp`

`CASE1_DEBUG_PROFILES` contains the same seven ids, including `perfil_almanegra`, so direct trial debug has the correct profile set once WebP assets exist.

### Profile opening and climax requirements

- Day 2 `openingPresent` is profile-based in ES and EN and targets `perfil_almanegra`.
- Climax stage 1 is profile-based in ES and EN and targets `perfil_tripaseca`.
- This matches the spec and the character-record flow: ordinary cross-examination profile cards are readable only; person presentation is reserved for court-asked profile prompts.

## ES/EN Consistency

- Alma Negra pose usage is mirrored in Spanish and English day-2 clinic/testimony/witness-call/epilogue files.
- The day-2 opening profile target is `perfil_almanegra` in both languages.
- The climax stage-1 profile target is `perfil_tripaseca` in both languages.
- Profile catalog ids and icon paths match between `ProfileCatalogCase1Es.ts` and `ProfileCatalogCase1En.ts`; text differs appropriately by language.

## Geometry Notes

No character/profile geometry requires hotspot or point-zone edits. The exact plate geometry issues reported by `verify_assets.py` belong to missing non-character Case 1 backgrounds/examine plates and should be handled only when those WebPs are generated and measured.

## Raw Files Changed

- Added `tools/raw/case1/almanegra_sprites_raw.png`
- Added `tools/raw/case1/almanegra_inconsciente_raw.png`
- Added `tools/raw/case1/profile_perfil_almanegra_raw.png`

NO SOURCE CODE MODIFIED BY THIS AUDIT.
NO TESTS MODIFIED BY THIS AUDIT.
NO DOCS/CATALOGS/HOTSPOTS MODIFIED BY THIS AUDIT OUTSIDE THIS SCRATCH REPORT.
NO GENERATED ASSETS UNDER `assets/` MODIFIED BY THIS AUDIT.
NO ASSET PIPELINE CALLED.
