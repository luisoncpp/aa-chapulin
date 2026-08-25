# Trial & Cross-Examination Flow

Operational guide for courtroom litigation, cross-examinations, evidence presentations, penalties, and verdict climax.

## 1. Trigger
- Player initiates the trial from investigation mode, starts debug trial directly from the splash screen / URL parameter / console, navigates testimony statements, clicks "Presionar", presents evidence from the Court Record, or triggers the final climax.

## 2. Entry Point
- Normal launch: `trial.startTrial()` in [[src/engine/Private/TrialController.ts#Trial Launch & Intro]] via `#btn-inv-trial`.
- Debug launch: `engine.startTrialDebug()` in [[src/engine/Private/GameEngine.ts#Initialization & Bootstrapping]] via `#btn-start-trial-debug`, `?mode=trial` query string, `#trial` hash, or `window.gameEngine.startTrialDebug()`.
- `trial.nextStatement()` / `trial.prevStatement()` in [[src/engine/Private/TrialController.ts#Testimony Navigation]]
- `trial.handlePressStatement()` in [[src/engine/Private/TrialController.ts#Statement Pressing & Contradictions]]
- `trial.handlePresentEvidence(evidenceId)` in [[src/engine/Private/TrialController.ts#Statement Pressing & Contradictions]]
- `trial.startClimax()` in [[src/engine/Private/TrialController.ts#Climax & Verdict Confrontation]]

## 3. Step-by-Step Sequence

### Courtroom Initialization
1. `gameState.mode` switches to `'TRIAL'`.
2. HUD switches to trial mode by hiding investigation/examine controls and keeping trial controls (`#trial-controls`) hidden during the opening sequence.
3. `queueDialogue(script.trial.intro)` plays opening judicial banter (Judge, Super Sam, Defense) from [[src/case/Private/case1_trial.ts#Courtroom Intro Dialogue]].
4. On intro complete, `startTestimony('testimony1')` is invoked.

### Testimony Looping & Pressing
1. `startTestimony(testimonyKey)` sets `currentTestimony`, resets `currentStatementIdx = 0`, starts BGM (`cross_exam_moderato` or `cross_exam_allegro`), and renders statement 0.
2. `renderCurrentStatement()` reveals trial controls (`#trial-controls`: "◀ Anterior", "💥 Presionar", "📜 Presentar", "Siguiente ▶") for active cross-examination statement navigation.
3. Player clicks "◀ Anterior" or "Siguiente ▶": updates `currentStatementIdx` (with wrap-around) and renders statement.
4. Player clicks "💥 Presionar" (`#btn-press`):
   - Retrieves `stmt.pressText`.
   - Hides trial controls (`#trial-controls`).
   - Queues press dialogue (displays `¡UN MOMENTO!` cut-in, whoosh SFX, and witness reaction).
   - Once press dialogue concludes, restores the current testimony statement and re-reveals trial controls.

### Presenting Evidence & Contradiction Evaluation
1. Player clicks "📜 Presentar" (`#btn-trial-present`) on HUD or inside Court Record modal.
2. Player selects an item and clicks "¡Presentar Prueba!".
3. Modal closes; `handlePresentEvidence(selectedEvidenceId)` hides trial controls and checks `stmt.contradiction`:
   - **Correct Evidence**:
     1. Queues `stmt.contradiction.successDialogue` (displays `¡PROTESTO!` or `¡TOMA ESO!`, desk slams, realization sound, BGM switches to `objection` or `pursuit`).
     2. On finish callback:
        - If finishing Testimony 1 -> launches `testimony2` (re-reveals trial controls upon statement render).
        - If finishing Testimony 2 -> launches `startClimax()` (controls remain hidden).
   - **Incorrect Evidence**:
     1. Calls `gameState.takePenalty()` in [[src/state/Private/GameStateManager.ts#Penalty & Health]].
     2. Calls `ModalManager.updateHealthUI()` (one green `!` turns dark gray).
     3. Plays `damage` SFX and shakes screen.
     4. Queues judge/prosecutor penalty dialogue.
     5. If `gameState.gameOver` (health == 0): queues Game Over dialogue, resets health, and restarts trial.
     6. If health > 0: restores current statement and re-reveals trial controls after dialogue finishes.

### Final Climax & Verdict
1. `startClimax()` keeps trial controls hidden, transitions BGM to `'suspense'`, and queues dilemma dialogue from [[src/case/Private/case1_climax.ts#Climax Confrontation & Dilemma]].
2. Court Record opens in presentation mode.
3. Player presents `antenitas_vinil` or `bolsa_dolares`:
   - Queues `script.trial.climax.verdict` from [[src/case/Private/case1_climax.ts#Guilty Confession & Not Guilty Verdict]].
   - Plays `chicharra` sound effect.
   - Tripaseca & Super Sam breakdown animations trigger.
   - Displays `¡INOCENTE!` cut-in.
   - BGM switches to `'victory'`.
   - `triggerConfetti()` fires celebratory confetti.

## 4. Reads
- `CASE_SCRIPT.trial` in [[src/case/Private/case1_trial.ts]] and [[src/case/Private/case1_climax.ts]]
- `gameState.inventory` in [[src/state/Private/GameStateManager.ts]]
- `gameState.health` in [[src/state/Private/GameStateManager.ts]]
- `trial.currentStatementIdx` in [[src/engine/Private/TrialController.ts]]

## 5. Writes
- `gameState.health` (decremented on penalty)
- `gameState.gameOver`
- `trial.currentStatementIdx`
- `trial.currentTestimony`

## 6. Side Effects
- Screen shakes, white screen flashes, and cut-in zoom animations.
- Audio synthesis (BGM track switches, gavel strikes, desk slams, damage impacts).
- Health penalty DOM update.
- Confetti particle generation.

## 7. Files to Inspect
- [[src/engine/Private/TrialController.ts]]
- [[src/engine/Private/ModalManager.ts]]
- [[src/state/Private/GameStateManager.ts]]
- [[src/case/Private/case1_trial.ts]]
- [[src/case/Private/case1_climax.ts]]

## 8. Common Failure Modes
- **Wrong Evidence Penalty**: Presenting evidence that does not match `stmt.contradiction.evidence`.
- **Game Over on 5 Penalties**: Life bar depletion resets health and restarts the trial phase.
