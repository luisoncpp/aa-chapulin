# Current Status

Live status of **El Chapulín Colorado: Ace Attorney — Turnabout Red Grasshopper**.

## Implemented

### Core Systems
- **TypeScript Architecture & Modularization ([[src/types/types.group.md|types]])**: Full TypeScript migration with strict type definitions in [[src/types/index.ts]] and deep module architecture conforming to [[docs/GUIDELINES.md]] (every file < 200 lines, functions < 30 lines, <= 3 parameters, named parameter comments).
- **Presentation Engine ([[src/engine/engine.group.md|engine]])**: Complete DS-style UI with dialogue queue, character sprite stage, typewriter text animation with pitch-varied audio chirps, animated cut-in overlays (`¡PROTESTO!`, `¡UN MOMENTO!`, `¡TOMA ESO!`, `¡INOCENTE!`), screen shaking, screen flash, and confetti victory effects ([[src/engine/index.ts]]).
- **State Management ([[src/state/state.group.md|state]])**: Unified `GameStateManager` tracking investigation vs trial modes, location transitions, health/penalties (5-point life bar), evidence inventory, and progress flags ([[src/state/index.ts]]).
- **Procedural Audio Synthesis ([[src/audio/audio.group.md|audio]])**: Zero-asset sound engine generating real-time SFX (gavel, desk slam, typewriter chirp, objection whoosh, realization chime, damage impact, chipote squeak, chicharra buzz) in [[src/audio/Private/SoundEngine.ts]].
- **Procedural Chiptune Sequencer ([[src/audio/audio.group.md|audio]])**: Real-time 4-channel MIDI tracker (Lead, Bass, Chords, Drums) composing 8 full retro tracks (Trial, Moderato, Allegro, Objection, Pursuit, Investigation, Suspense, Victory) in [[src/audio/Private/MidiMusicComposer.ts]].
- **Asset Pipeline ([[pipeline.group.md|asset_pipeline]])**: Automated magenta chroma-keying (`#FF00FF`) and 2x2 sprite-sheet slicing script for AI-generated visual assets ([[process_assets.py]], [[verify_assets.py]]).
- **Save / Load persistence** in `localStorage` ([[src/state/Private/SaveManager.ts]]). Save payload now also stores optional `caseId` and `trialDay` (old saves without those fields still load as Case 1 / day 1).
- **Automated tests** via Vitest for state, trial contradictions, investigation, engine, i18n, and case scripts.

### Playable Content: Case 1 ("El Juicio del Escuadrón Colorado")
- **Investigation Phase**: 2 fully interactive scenes (Museum Crime Scene & Detention Center) with 7 examine hotspots, 4 talk branches, and 5 collectable evidence items defined in [[src/case/Private/case1_investigation.ts]].
- **Courtroom Trial Phase**: Complete trial intro, 2 cross-examination testimonies (Assault weapon contradiction & Escape route/Mirror photo contradiction), pressing mechanics, dynamic penalty damage, final climax evidence presentation, and Not Guilty verdict sequence defined in [[src/case/Private/case1_trial.ts]] and [[src/case/Private/case1_climax.ts]].
- Default `CASE_SCRIPT` / `getCaseScript(lang)` is still Case 1. Splash **Caso 1** button and debug trial (without `?case=2`) still launch Case 1.

---

## In progress: Case 2 ("El Juicio del Chómpiras — El Asalto de las Dos Caras")

**Branch:** `cursor/case-2-chompiras-a348`  
**Spec:** [[docs/specs/case-2-el-juicio-del-chompiras.md]]  
**Handoff:** implementation is largely coded and unit-tested; architecture/flow docs, `npx fallow audit`, coverage threshold, dedicated art, browser playtest, and PR polish were **not finished** when this status was written.

### What already works in code

- **Case selection**
  - `getCaseScript(lang, caseId)` with `caseId: 'case1' | 'case2'` in [[src/case/index.ts]].
  - Splash: `#btn-start-game` = Case 1, `#btn-start-case2` = Case 2 ([[index.html]]).
  - URL: `?case=2` (and `?case=2&trial` for day-1 trial debug) in [[src/engine/Private/GameEngine.ts]].
- **Two-day loop**
  - `CaseScript` now has `id`, `startLocation`, `requiredEvidence`, `debugEvidence`, `debugUnlockLocations`, optional `adjournment` ([[src/types/Private/script.ts]]).
  - After Case 2 testimony 2 (day 1), success dialogue adjourns 24h and `TrialDayRouter` / `TrialController` return to investigation at `oficina_postal` instead of climax ([[src/engine/Private/TrialDayRouter.ts]], [[src/engine/Private/TrialController.ts]]).
  - Day 2 trial uses `adjournment.trial` (postal alibi + dumbwaiter). Climax still lives on `script.trial.climax` (`lata_grasa` or `antenitas_vinil`).
- **State**
  - `GameStateManager.beginNewCase`, `applyProgressionRules`, `beginTrialDay2`, case-aware `checkTrialReadiness` / `populateTrialEvidence` ([[src/state/Private/GameStateManager.ts]]).
  - Day 1 required evidence: `palanca_rota`, `informe_boveda`, `reloj_pendulo`, `aroma_dulce`, `plano_hacienda`, `caja_generador`.
  - Day 2 required evidence: `multa_transito`, `registro_postal`, `lata_grasa`, `antenitas_vinil`, `frasco_valeriana`, `molde_cera`.
- **Scripts (ES + EN)**, assembled in [[src/case/Private/case2_script.ts]]:
  - Day 1 inv: detention → `boveda` → `restaurante` (`case2_detention.ts`, `case2_boveda.ts`, `case2_restaurante.ts` + `_en`).
  - Day 1 trial: Florinda time contradiction (`reloj_pendulo` / `caja_generador`); Peterete crowbar contradiction (`informe_boveda` / `palanca_rota`).
  - Day 2 inv: `oficina_postal` → `casa_clotilde`.
  - Day 2 trial: postal alibi (`multa_transito` / `registro_postal`); impossible exit (`plano_hacienda`); climax + epilogue in `case2_climax.ts`.
- **Evidence** merged from [[src/state/Private/EvidenceCatalogCase2.ts]] into [[src/state/Private/EvidenceCatalog.ts]]. New IDs reuse existing PNG icons (no new art yet).
- **Sprites:** new poses exist as keys; [[src/engine/Private/PoseAliases.ts]] maps them onto Case 1 sheets (Peterete→Tripaseca, Chómpiras→Chapulín, Clotilde→Florinda, Jaimito→Don Ramón, Jirafales→Judge). Backgrounds reuse `bg_detention.jpg` / `bg_museum.jpg`.
- **Tests added:** [[tests/case/Case2Scripts.test.ts]], [[tests/engine/TrialDayRouter.test.ts]], [[tests/engine/PoseAliases.test.ts]], plus Case 2 cases in GameEngine / TrialController / GameState / EngineEventBinder.

### How to play the WIP

- Splash **Caso 2**, or `?case=2`.
- Debug day-1 courtroom: `?case=2&trial`.
- Case 1 remains the default.

### What the next agent should finish

1. **Commit / push / PR** if not already on remote (this handoff was written to survive a new conversation).
2. **Docs still stale vs code:** [[docs/architecture/case-scripting.md]], [[docs/architecture/game-state.md]], [[docs/architecture/i18n-system.md]], [[docs/flows/investigation-flow.md]], [[docs/flows/trial-cross-examination-flow.md]], [[docs/live/glossary.md]], [[docs/plans/future-roadmap.md]]. Case 2 should not stay listed as unimplemented in those files.
3. **`npx fallow audit`** — last attempt needed `coverage/coverage-final.json`. `npm run test:coverage` failed **branches 87.72% < 90%** (Vitest global threshold). New uncovered spots include `GameEngine.handleAdjournment` and `InvestigationController.resetTrialLaunchButton`.
4. **Guideline file length:** [[src/engine/Private/GameEngine.ts]] is ~310 lines (already over 200 before this work). [[src/engine/Private/TrialController.ts]] was trimmed via `TrialDayRouter` but should be re-checked.
5. **`package-lock.json`** may have changed from `npm install` in the cloud VM; do not treat that as a product change unless lockfile policy requires it.
6. **Browser playtest** of Case 2: detention → vault → restaurant → trial day 1 → postal → Clotilde → trial day 2 → climax. Confirm trial button disables after adjournment and re-enables with day-2 evidence.
7. **Art debt:** unique sprites, location BGs, and evidence icons. `supersam_sweat` is aliased to `supersam_slam`.
8. **Env:** [[tests/assets/SlamSpriteContact.test.ts]] needs `python` + Pillow; unrelated to Case 2. Exclude it if generating coverage on a machine without PIL.

### Key APIs / types for the next session

| Piece | Where |
|-------|--------|
| `CaseId`, `TrialDay` | [[src/types/Private/state.ts]] |
| `AdjournmentDefinition`, extended `CaseScript` | [[src/types/Private/script.ts]] |
| `getCaseScript(lang, caseId)` | [[src/case/index.ts]] |
| Case 2 assembly | [[src/case/Private/case2_script.ts]] |
| Day routing | [[src/engine/Private/TrialDayRouter.ts]] |

## Planned Next Steps

- Finish Case 2 polish (docs, fallow, coverage, art, playtest) as listed above.
- Gamepad & keyboard accessibility (roadmap).
