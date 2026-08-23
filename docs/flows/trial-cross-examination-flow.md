# Trial & Cross-Examination Flow

Operational guide for courtroom litigation, cross-examinations, evidence presentations, penalties, and verdict climax.

## 1. Trigger
- Player initiates the trial from investigation mode, navigates testimony statements, clicks "Presionar", presents evidence from the Court Record, or triggers the final climax.

## 2. Entry Point
- [`gameEngine.startTrial()`](file:///c:/Proyectos/ace-attorney-gemini/js/engine.js#L550)
- [`gameEngine.nextStatement()`](file:///c:/Proyectos/ace-attorney-gemini/js/engine.js#L583) / [`gameEngine.prevStatement()`](file:///c:/Proyectos/ace-attorney-gemini/js/engine.js#L589)
- [`gameEngine.handlePressStatement()`](file:///c:/Proyectos/ace-attorney-gemini/js/engine.js#L595)
- [`gameEngine.handlePresentEvidence(evidenceId)`](file:///c:/Proyectos/ace-attorney-gemini/js/engine.js#L605)
- [`gameEngine.startClimax()`](file:///c:/Proyectos/ace-attorney-gemini/js/engine.js#L646)

## 3. Step-by-Step Sequence

### Courtroom Initialization
1. `gameState.mode` switches to `'TRIAL'`.
2. HUD switches to show trial controls (`#trial-controls`) and hides investigation buttons.
3. `queueDialogue(script.trial.intro)` plays opening judicial banter (Judge, Super Sam, Defense).
4. On intro complete, `startTestimony('testimony1')` is invoked.

### Testimony Looping & Pressing
1. `startTestimony(testimonyKey)` sets `currentTestimony`, resets `currentStatementIdx = 0`, starts BGM (`cross_exam_moderato` or `cross_exam_allegro`), and renders statement 0.
2. Player clicks "◀ Anterior" or "Siguiente ▶": updates `currentStatementIdx` (with wrap-around) and renders statement.
3. Player clicks "💥 Presionar" (`#btn-press`):
   - Retrieves `stmt.pressText`.
   - Queues press dialogue (displays `¡UN MOMENTO!` cut-in, whoosh SFX, and witness reaction).
   - Once press dialogue concludes, restores the current testimony statement.

### Presenting Evidence & Contradiction Evaluation
1. Player clicks "📜 Presentar" (`#btn-trial-present`) on the HUD or inside the Court Record modal.
2. Player selects an item and clicks "¡Presentar Prueba!".
3. Modal closes; `handlePresentEvidence(selectedEvidenceId)` checks `stmt.contradiction`:
   - **Correct Evidence**:
     1. Queues `stmt.contradiction.successDialogue` (displays `¡PROTESTO!` or `¡TOMA ESO!`, desk slams, realization sound, BGM switches to `objection` or `pursuit`).
     2. On finish callback:
        - If finishing Testimony 1 -> launches `testimony2`.
        - If finishing Testimony 2 -> launches `startClimax()`.
   - **Incorrect Evidence**:
     1. Calls `gameState.takePenalty()`.
     2. Calls `updateHealthUI()` (one green `!` turns dark gray).
     3. Plays `damage` SFX and shakes screen.
     4. Queues judge/prosecutor penalty dialogue.
     5. If `gameState.gameOver` (health == 0): triggers Game Over modal, resets health, and restarts trial intro.
     6. If health > 0: restores the current statement after dialogue finishes.

### Final Climax & Verdict
1. `startClimax()` transitions BGM to `'suspense'` and queues the dilemma dialogue.
2. Court Record opens in presentation mode.
3. Player presents `antenitas_vinil` or `bolsa_dolares`:
   - Queues `script.trial.climax.verdict`.
   - Plays `chicharra` sound effect.
   - Tripaseca & Super Sam breakdown animations trigger.
   - Displays `¡INOCENTE!` cut-in.
   - BGM switches to `'victory'`.
   - `triggerConfetti()` fires celebratory confetti.

## 4. Reads
- `CASE_SCRIPT.trial`
- `gameState.inventory`
- `gameState.health`
- `gameEngine.currentStatementIdx`

## 5. Writes
- `gameState.health` (decremented on penalty)
- `gameState.gameOver`
- `gameEngine.currentStatementIdx`
- `gameEngine.currentTestimony`

## 6. Side Effects
- Screen shakes, white screen flashes, and cut-in zoom animations.
- Audio synthesis (BGM track switches, gavel strikes, desk slams, damage impacts).
- Health penalty DOM update.
- Confetti particle generation.

## 7. Files to Inspect
- [`js/engine.js`](file:///c:/Proyectos/ace-attorney-gemini/js/engine.js) (lines 550–690)
- [`js/game_state.js`](file:///c:/Proyectos/ace-attorney-gemini/js/game_state.js) (lines 101–115)
- [`js/case_script.js`](file:///c:/Proyectos/ace-attorney-gemini/js/case_script.js) (lines 152–300)

## 8. Common Failure Modes
- **Wrong Evidence Penalty**: Presenting evidence that does not match `stmt.contradiction.evidence`.
- **Game Over on 5 Penalties**: Life bar depletion resets health and restarts the trial phase.
