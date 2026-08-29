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


## Phase 2: Automated Testing Suite

Implement comprehensive automated testing via Vitest:

- **State Unit Tests**:
  - `addEvidence()` idempotency and inventory array mutations.
  - `takePenalty()` deduction and game over boundary conditions.
  - `checkTrialReadiness()` flag validation.
- **Trial Contradiction Tests**:
  - Verify every statement with a contradiction accepts only designated evidence items.
  - Verify invalid evidence triggers penalties.
- **Audio Synthesis Smoke Tests**:
  - Mock `AudioContext` and verify waveform node creation and cleanup.

## Phase 3: Episode 2 & Gameplay Extensions

1. **Case 2: "El Juicio del Chómpiras — El Asalto de las Dos Caras" (Turnabout of the Two-Faced Thief)**:
   - Spec: [`case-2-el-juicio-del-chompiras.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/specs/case-2-el-juicio-del-chompiras.md)
   - Scope: 2 Investigation Days and 2 Trial Days (~1 hour of gameplay).
   - Defense Team: Don Ramón (Lic. Monchito) & El Chapulín Colorado.
   - Prosecutor: Super Sam.
   - Defendant: El Chómpiras (Aquiles Esquivel Madrazo).
   - Star Witness & True Culprit: El Peterete (Lic. Severiano Baldomero).
   - Supporting Cast: El Profesor Jirafales, Doña Florinda, Don Jaimito el Cartero, Doña Clotilde.

2. **Save / Load Persistence**:
    - `localStorage` serialization of `gameState` allowing players to save and resume progress mid-investigation or mid-trial.

3. **Gamepad & Keyboard Accessibility**:
    - Full keyboard shortcuts (`Z`/`Enter` to advance, `X`/`Esc` to back, `C` to Court Record, `P` to Present).

> **Nota:** El nombre canónico del Caso 2 es "El Juicio del Chómpiras — El Asalto de las Dos Caras" (ver `docs/specs/case-2-el-juicio-del-chompiras.md`). Referencias previas a "Rascabuches" quedan obsoletas.
