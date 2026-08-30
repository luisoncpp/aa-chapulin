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

## Phase 4: Episode 3 (DESIGNED, NOT IMPLEMENTED)

**Case 3: "El Juicio del Doctor Chapatín — La Noche del Grito"** — full narrative + technical design in [[docs/specs/case-3-la-noche-del-grito.md]]. ~2 hours across 3 investigation days and 3 trial days, with two turnabouts. Nothing is coded yet.

Engine work the spec depends on (details in its §6 and §19):

1. **Press-gated statements** (`Statement.unlockedBy`): part of a testimony only appears after pressing another statement; `TrialController` navigates a *visible* statement list and stores `pressedStatementIds` in its snapshot.
2. **Multi-stage evidence descriptions** (`EvidenceItem.updates[]`): today's single `updatedDesc` is not enough — `microfono_oro` revises twice, and the last climax present only accepts it fully revised.
3. **Third trial day**: `AdjournmentDefinition.next` chaining, `trialDay: 1 | 2 | 3`, `beginNextTrialDay()`.
4. New art: 6 backgrounds, 6 character sheets (Doctor Chapatín, El Sargento / Sargento Pazguato, Aniceto Rebollar, Señor Barriga, Ñoño, La Chimoltrufia), 17 evidence icons, 2 new BGM tracks.
