# Future Development Roadmap & Architecture Plan

Strategic engineering and content roadmap for **El Chapulín Colorado: Ace Attorney**.

## Phase 1: Deep Module Modularization & TypeScript Migration

Refactor monolithic JavaScript files into type-safe deep modules according to [`GUIDELINES.md`](file:///c:/Proyectos/ace-attorney-gemini/docs/GUIDELINES.md):

1. **File Length Constraints**:
   - Decompose `js/engine.js` (>600 lines) into deep module components under 200 lines each:
     - `src/engine/Typewriter.ts`
     - `src/engine/StagePresenter.ts`
     - `src/engine/ModalManager.ts`
     - `src/engine/CutinAnimator.ts`
     - `src/engine/index.ts` (Thin public interface)

2. **TypeScript Type Safety**:
   - Define strict interfaces for `DialogueLine`, `Hotspot`, `TalkOption`, `Statement`, `Contradiction`, `EvidenceItem`, and `TrackDefinition`.
   - Prevent runtime typos in asset names, audio SFX IDs, or evidence keys.

3. **Coding Standards Compliance**:
   - Enforce max 3 parameters per function.
   - Enforce return-early patterns.
   - Enforce named parameter comments: e.g. `setTimeout(/*callback*/ () => {}, /*delayInMs=*/ 500)`.

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

1. **Case 2: "El Juicio del Rascabuches" (Turnabout in the Wild West)**:
   - Setting: Old Western Cantina & Sheriff's Jailhouse.
   - Defendant: Don Ramón (The harmless cowboy mistaken for the dreaded outlaw).
   - Culprit: El Rascabuches.
   - Mechanic: Antenitas de Vinil directional detection minigame.

2. **Save / Load Persistence**:
   - `localStorage` serialization of `gameState` allowing players to save and resume progress mid-investigation or mid-trial.

3. **Gamepad & Keyboard Accessibility**:
   - Full keyboard shortcuts (`Z`/`Enter` to advance, `X`/`Esc` to back, `C` to Court Record, `P` to Present).
