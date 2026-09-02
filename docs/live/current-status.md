# Current Status

Live status of **El Chapulín Colorado: Ace Attorney — Turnabout Red Grasshopper**.

## Implemented

### Core Systems
- **TypeScript Architecture & Modularization ([[src/types/types.group.md|types]])**: Full TypeScript migration with strict type definitions in [[src/types/index.ts]] and deep module architecture conforming to [[docs/GUIDELINES.md]] (every file < 200 lines, functions < 30 lines, <= 3 parameters, named parameter comments).
- **Presentation Engine ([[src/engine/engine.group.md|engine]])**: Complete DS-style UI with dialogue queue, character sprite stage, typewriter text animation with pitch-varied audio chirps, animated cut-in overlays (`¡PROTESTO!`, `¡UN MOMENTO!`, `¡TOMA ESO!`, `¡INOCENTE!`), screen shaking, screen flash, and confetti victory effects ([[src/engine/index.ts]]).
- **State Management ([[src/state/state.group.md|state]])**: Unified `GameStateManager` tracking investigation vs trial modes, location transitions, health/penalties (5-point life bar), evidence inventory, and progress flags ([[src/state/index.ts]]).
- **Procedural Audio Synthesis ([[src/audio/audio.group.md|audio]])**: Zero-asset sound engine generating real-time SFX (gavel, desk slam, typewriter chirp, objection whoosh, realization chime, damage impact, chipote squeak, chicharra buzz) in [[src/audio/Private/SoundEngine.ts]].
- **Procedural Chiptune Sequencer ([[src/audio/audio.group.md|audio]])**: Real-time 4-channel MIDI tracker (Lead, Bass, Chords, Drums) composing 8 full retro tracks (Trial, Moderato, Allegro, Objection, Pursuit, Investigation, Suspense, Victory) in [[src/audio/Private/MidiMusicComposer.ts]].
- **Asset Pipeline ([[pipeline.group.md|asset_pipeline]])**: Magenta chroma-keying and grid slicing for Case 1 ([[process_assets.py]]) and dedicated Case 2 poses, BGs, and evidence icons ([[process_case2_assets.py]], [[verify_assets.py]]).
- **Save / Load persistence** in `localStorage` ([[src/state/Private/SaveManager.ts]]). Save payload now also stores optional `caseId` and `trialDay` (old saves without those fields still load as Case 1 / day 1).
- **Automated tests** via Vitest for state, trial contradictions, investigation, engine, i18n, and case scripts.

### Playable Content: Case 1 ("El Juicio del Escuadrón Colorado")
- **Investigation Phase**: 2 fully interactive scenes (Museum Crime Scene & Detention Center) with 7 examine hotspots, 4 talk branches, and 5 collectable evidence items defined in [[src/case/Private/case1_investigation.ts]].
- **Courtroom Trial Phase**: Complete trial intro, 2 cross-examination testimonies (Assault weapon contradiction & Escape route/Mirror photo contradiction), pressing mechanics, dynamic penalty damage, final climax evidence presentation, and Not Guilty verdict sequence defined in [[src/case/Private/case1_trial.ts]] and [[src/case/Private/case1_climax.ts]].
- Default `CASE_SCRIPT` / `getCaseScript(lang)` is still Case 1. Splash **Caso 1** and debug trial without `?case=2` still launch Case 1.

### Playable Content: Case 2 ("El Juicio del Chómpiras — El Asalto de las Dos Caras")
Implemented (scripts + dedicated art). Spec: [[docs/specs/case-2-el-juicio-del-chompiras.md]]. Launch: splash **Caso 2**, `?case=2`, or `?case=2&trial` (day-1 courtroom).

- **Selection:** `getCaseScript(lang, caseId)` (`'case1' | 'case2' | 'case3'`) in [[src/case/index.ts]]; `#btn-start-case2` / `#btn-start-case3` in [[index.html]].
- **Two-day loop:** `CaseScript.id` / `startLocation` / `requiredEvidence` / optional `adjournment`. After Case 2 testimony 2 on day 1, [[src/engine/Private/TrialDayRouter.ts]] returns to `oficina_postal` instead of climax. Day 2 uses `adjournment.trial`; climax stays on `script.trial.climax` and walks three presents (gold tin, valerian, wax mold) then two multiple-choice verdict questions.
- **State:** `beginNewCase`, `trialDay`, `beginTrialDay2`, case-aware `checkTrialReadiness` / `populateTrialEvidence`. Day-1 required: `palanca_rota`, `informe_boveda`, `reloj_pendulo`, `aroma_dulce`, `plano_hacienda`, `caja_generador`. Day-2: `multa_transito`, `registro_postal`, `lata_grasa`, `antenitas_vinil`, `frasco_valeriana`, `molde_cera`.
- **Scripts (ES + EN)** assembled in [[src/case/Private/case2_script.ts]]: detention → `boveda` → `restaurante` → trial day 1 → `oficina_postal` → `casa_clotilde` → trial day 2 → climax.
- **Art done:** dedicated poses (Chómpiras, Peterete, Jirafales, Jaimito, Clotilde, Super Sam sweat), location BGs (`bg_boveda`, `bg_restaurante`, `bg_postal`, `bg_clotilde`), evidence icons including `chanfle_oro`. [[src/engine/Private/PoseAliases.ts]] is identity (no Case-1 sheet aliases). Pipeline: [[process_case2_assets.py]].
- **Tests:** [[tests/case/Case2Scripts.test.ts]], [[tests/engine/TrialDayRouter.test.ts]], plus Case 2 coverage in GameEngine / TrialController / GameState.

### Playable Content: Case 3 ("El Juicio del Doctor Chapatín — La Noche del Grito")
Implemented in [[src/case/case3/index.ts]] (nested deep module). Spec: [[docs/specs/case-3-la-noche-del-grito.md]]. Launch: splash **Caso 3**, `?case=3`, `?case=3&trial`, `?case=3&trial=2`, `?case=3&trial=3`.

- **Three-day loop:** `adjournment.next`, `trialDay` 1\|2\|3, `beginNextTrialDay`. Press-gated statements (`unlockedBy`) and multi-stage evidence (`updates[]`, climax `requiredUpdateStage` on `microfono_oro`).
- **Locations:** `detention` → `cabina_radio` → `plaza_kermes` → trial → `despacho_barriga` → `clinica_chapatin` → `delegacion` → trial → `bodega_radio` → `detention_d3` → `delegacion_d3` → trial → climax. Each day ends on a location that hands over a required clue.
- **Art:** [[process_case3_assets.py]]; BGM `kermes` and `cross_exam_presto`. All Case 3 `plain` busts (including Ñoño) floor-anchor onto the dialogue box; Case 3 owns `informe_barriga.png` (not Case 1's `informe_medico.png`).
- **Tests:** [[tests/case/Case3Scripts.test.ts]], [[tests/engine/StatementUnlock.test.ts]], [[tests/state/EvidenceUpdateStages.test.ts]].

---

## Release zip (Netlify)

`.\build.ps1` compiles TypeScript and writes `ace-attorney-chapulin.zip` (`index.html`, `style.css`, `dist/`, `assets/` at the archive root). Same command: `npm run package`. Drop the zip on Netlify Sites → Deploy manually.

## Remaining polish (not unimplemented content)

1. Coverage 90% branches (`npm run test:coverage`). Engine files are under 200 lines. [[tests/assets/SlamSpriteContact.test.ts]] needs Python + Pillow.
2. `npx fallow audit` (needs `coverage/coverage-final.json`).
3. Browser playtest: detention → vault → restaurant → trial day 1 → postal → Clotilde → trial day 2 → climax (trial button off after adjournment, on again with day-2 evidence).

## Planned Next Steps

- Remaining polish above.
- Gamepad & keyboard accessibility (roadmap).
