# Future Development Roadmap & Architecture Plan

Strategic engineering and content roadmap for **El Chapulín Colorado: Ace Attorney**.

## Phase 1: Deep Module Modularization & TypeScript Migration (COMPLETED)

Successfully refactored monolithic JavaScript files into type-safe deep modules according to [`GUIDELINES.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/GUIDELINES.md):

1. **Strict File & Function Constraints**:
   - Every file strictly < 200 lines (all files < 180 lines).
   - Every function strictly <= 30 lines.
   - Max 3 parameters per function.
   - Simulated named parameter comments for hardcoded arguments (`/*isTrialPresent=*/true`) and callbacks (`setTimeout(/*hideSplash*/ () => {}, /*delayInMs=*/400)`).
   - Return-early control flow patterns across all modules.

2. **Deep Module Subsystems**:
   - `src/types/`: Domain contracts (`DialogueLine`, `Hotspot`, `Statement`, `ContradictionRule`, `EvidenceItem`, `TrackDefinition`).
   - `src/audio/`: Encapsulated Web Audio API synthesizer (`SoundEngine`, `CourtSfx`, `NoveltySfx`, `MidiMusicComposer`, `TrackCatalog`).
   - `src/state/`: `GameStateManager` and `EvidenceCatalog`.
   - `src/case/`: Declarative case data (`case1_investigation`, `case1_trial`, `case1_climax`).
   - `src/engine/`: `GameEngine` coordinator, `Typewriter`, `VisualEffects`, `ModalManager`, `InvestigationController`, `TrialController`, `EngineEventBinder`, `DomElements`.
   - `src/main.ts`: Application entrypoint.


## Phase 2: Automated Testing Suite (IN PROGRESS)

Vitest covers state, contradictions, investigation, engine, i18n, and Case 1/2 scripts. Remaining: raise branch coverage to 90%, `npx fallow audit`, browser playtest of Case 2.

## Phase 3: Episode 2 & Gameplay Extensions

1. **Case 2: "El Juicio del Chómpiras — El Asalto de las Dos Caras"** — **content implemented** (bilingual scripts in [[src/case/Private/case2_script.ts]], dedicated poses/BGs/icons via [[process_case2_assets.py]]). Spec: [[docs/specs/case-2-el-juicio-del-chompiras.md]]. Remaining polish: split [[src/engine/Private/GameEngine.ts]] / [[src/engine/Private/TrialController.ts]] under 200 lines, coverage/fallow, playtest. Unique Case 2 art is **not** a TODO.

2. **Save / Load Persistence** — implemented (`localStorage`, including `caseId` / `trialDay`).

3. **Gamepad & Keyboard Accessibility** — still planned:
    - Full keyboard shortcuts (`Z`/`Enter` to advance, `X`/`Esc` to back, `C` to Court Record, `P` to Present).

> Canonical Case 2 title: "El Juicio del Chómpiras — El Asalto de las Dos Caras". Older "Rascabuches" name is obsolete.

## Phase 4: Episode 3 (IMPLEMENTED)

**Case 3: "El Juicio del Doctor Chapatín — La Noche del Grito"** — scripts, engine hooks, and art pipeline in [[src/case/case3/index.ts]], spec [[docs/specs/case-3-la-noche-del-grito.md]]. Press-gated statements, multi-stage evidence descriptions, third trial day via `adjournment.next`, splash `#btn-start-case3`, debug `?case=3&trial=2|3`.

## Phase 5: Episode 4 (IMPLEMENTED — catalog & platform hooks)

**Case 4: "Crimen en el Gran Hotel — El Caso del Hotel Buena Vista"** — spec [[docs/specs/case-4-el-caso-del-hotel-buena-vista.md]]. **Implemented in this phase:** isolated evidence catalog ([[src/state/Private/EvidenceCatalogCase4.ts]]), `detailedView` / `pointTarget` types, Present & Point and Acta examine DOM/CSS, splash `#btn-start-case4`, i18n `btnStartCase4`, debug `?case=4`. **Pending:** bilingual scripts in [[src/case/case4/index.ts]], trial/investigation content, asset pipeline for hotel cast and examine plates.
