# Trial & Cross-Examination Flow

Operational guide for courtroom litigation, cross-examinations, evidence presentations, penalties, and verdict climax.

## 1. Trigger
- Player initiates the trial from investigation mode, starts debug trial directly from the splash screen / URL parameter / console, navigates testimony statements, clicks "Presionar", presents evidence from the Court Record, or triggers the final climax.

## 2. Entry Point
- Normal launch: `trial.startTrial()` in [[src/engine/Private/TrialController.ts#Trial Launch & Intro]] via `#btn-inv-trial`.
- Debug launch: `engine.startTrialDebug(day?)` via URL flags parsed by [[src/engine/Private/EngineDebugBootstrap.ts]] (`?trial`, `?case=2&trial`, `?case=3&trial=2`, `?case=3&trial=3`).
- `trial.nextStatement()` / `trial.prevStatement()` in [[src/engine/Private/TrialController.ts#Testimony Navigation]]
- `trial.handlePressStatement()` in [[src/engine/Private/TrialController.ts#Statement Pressing & Contradictions]]
- `trial.handlePresentEvidence(evidenceId)` in [[src/engine/Private/TrialController.ts#Statement Pressing & Contradictions]]
- `trial.startClimax()` in [[src/engine/Private/TrialController.ts#Climax & Verdict Confrontation]]

## 3. Step-by-Step Sequence

### Courtroom Initialization
1. `fadeThroughBlack` covers the investigation plate.
2. While covered, `gameState.mode` switches to `'TRIAL'`, HUD hides investigation controls, and the first intro shot (`bg`, pose, furniture) is painted so the reveal is already the courtroom.
3. After the reveal, `queueDialogue` of the active day's intro (`getActiveTrial(script, trialDay).intro` via [[src/engine/Private/TrialDayRouter.ts]]).
4. On intro complete: if `getActiveTrial(...).openingPresent` is set ([[src/engine/Private/TrialPresent.ts]]), open the Court Record in presentation mode. Correct evidence plays `successDialogue` then `startTestimony('testimony1')`; wrong evidence is a penalty and the Acta reopens. Otherwise `startTestimony('testimony1')` runs immediately.

### Testimony Looping & Pressing
1. `startTestimony(testimonyKey)` sets `currentTestimony`, resets `currentStatementIdx = 0`, starts BGM (`cross_exam_moderato` or `cross_exam_allegro`), and renders statement 0.
2. `renderCurrentStatement()` reveals trial controls (`#trial-controls`: "◀ Anterior", "💥 Presionar", "📜 Presentar", "Siguiente ▶") for active cross-examination statement navigation.
3. Player clicks "◀ Anterior" or "Siguiente ▶": updates `currentStatementIdx` (with wrap-around) and renders statement.
4. Player clicks "💥 Presionar" (`#btn-press`):
   - Retrieves visible statement `pressText` (navigation uses [[src/engine/Private/StatementUnlock.ts]]).
   - Hides trial controls.
   - Queues press dialogue.
   - Records the statement id. If another statement has `unlockedBy` matching it, a toast ("El testigo ha añadido una declaración") plays, and the cursor jumps to the new line.
   - After two failed presents on a testimony that still has hidden lines, Chapulín gives a one-line press hint (no extra penalty for pressing).

### Presenting Evidence & Contradiction Evaluation
1. Player clicks "📜 Presentar" (`#btn-trial-present`) on HUD or inside Court Record modal.
2. Player selects an item and clicks "¡Presentar Prueba!".
3. Modal closes; `handlePresentEvidence(selectedEvidenceId)` hides trial controls and checks opening present, pending `followUp`, then `stmt.contradiction`:
   - **Correct Evidence**:
     1. If the matched rule has `pointTarget`, open `#present-point-overlay` first ([[docs/flows/present-point-flow.md]]). Parent `successDialogue` waits for a correct click.
     2. Queues `successDialogue` (displays `¡PROTESTO!` or `¡TOMA ESO!`, desk slams, realization sound, BGM switches to `objection` or `pursuit`).
     3. If `followUp` is set, reopen the Acta for `followUp.evidence` (wrong = penalty; correct may also `pointTarget` then `followUp.successDialogue`).
     4. On finish callback:
        - If finishing Testimony 1 -> launches `testimony2` (re-reveals trial controls upon statement render).
        - If finishing Testimony 2: no pending `adjournment` for this day → `startClimax()`. Otherwise fade back to investigation (`adjournment.nextLocation`; Case 3 day 2 goes to the office, day 3 to the storeroom).
   - **Incorrect Evidence**:
     1. Calls `gameState.takePenalty()` in [[src/state/Private/GameStateManager.ts#Penalty & Health]].
     2. Calls `ModalManager.updateHealthUI()` (one green `!` turns dark gray).
     3. Plays `damage` SFX and shakes screen.
     4. Queues judge/prosecutor penalty dialogue.
     5. If `gameState.gameOver` (health == 0): queues Game Over dialogue, resets health, and restarts trial.
     6. If health > 0: restores current statement and re-reveals trial controls after dialogue finishes.

### Final Climax & Verdict
1. `startClimax()` keeps trial controls hidden, transitions BGM to `'suspense'`, and queues dilemma dialogue from the case climax (`case1_climax` or `case2_climax`).
2. Court Record opens in presentation mode (`isTrialPresent: true`). If closed by the player, advancing dialogue (Click / Space / Enter) or clicking the top HUD Court Record button (`#btn-court-record`) reopens the Court Record in presentation mode (`isTrialPresent: true`) **only while a present is still required**. After the last correct present (no `choices`) or the last correct choice, `isAwaitingEvidence()` is false: idle clicks during confetti or the lobby fade must not reopen the Acta. If the current `ClimaxStage` has `prompt`, that question stays on `#climax-present-prompt` even after the Acta is closed, and inside `#court-record-present-prompt` when it is open.
3. Player presents a `presentTarget` for the current climax stage (`climax.stages` when set; otherwise `climax.presentTarget`):
   - Wrong item: penalty and incorrect-clue toast; Court Record stays open on the same stage. If that penalty sets health to 0, queue the guilty (`CULPABLE`) game-over lines and restart the trial instead of reopening the Court Record.
   - Correct item on a non-final stage: if the stage has `pointTarget`, Present & Point first; then queues that stage's `successDialogue`, then opens the Court Record again.
   - Correct item on the final stage without `choices`: queues `stage.successDialogue`, then `climax.verdict` with confetti and optional epilogue. Case 1 has no `stages` array, so this is `verdict` only.
   - Correct item on the final stage with `choices` (Case 2): queues that stage's `successDialogue` (wax mold + judge question), then opens `#choice-prompt-modal`. Wrong choice: penalty + `failDialogue`, same prompt reopens. A wrong choice that exhausts health queues the guilty game-over lines and restarts the trial. Correct choice: `successDialogue`, then next prompt or verdict on the last one.
   - Case 1 is one stage (`antenitas_vinil` or `bolsa_dolares`). Case 2 is three presents then two choices.
4. After the Not Guilty line (from `verdict` or last choice `successDialogue`):
   - `triggerConfetti()` fires as soon as the verdict queue finishes, while the judge camera is still up.
   - If `climax.epilogue` exists (Case 2), [[src/engine/Private/TrialClimax.ts]] holds that courtroom shot, fades `#screen-flash` to black, swaps to `bg_waiting_room.jpg` (clears confetti, hides bench/sprites), fades in, then queues stamped epilogue lines (`furniture: 'none'`). Case 1 has no epilogue.
   - After the last Case 1 verdict click (following confetti) or the last Case 2 epilogue line, `fadeToBlack` stays covered and `#case-complete-overlay` reports that the case is finished.

## 4. Reads
- Active trial day from `getActiveTrial(script, trialDay)` ([[src/engine/Private/TrialDayRouter.ts]]); walks `adjournment` / `adjournment.next` for days 2–3. Climax always `script.trial.climax`.
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
- [[src/engine/Private/TrialClimax.ts]]
- [[src/engine/Private/TrialChoice.ts]]
- [[src/engine/Private/SceneFade.ts]]
- [[src/engine/Private/CaseComplete.ts]]
- [[src/engine/Private/ModalManager.ts]]
- [[src/state/Private/GameStateManager.ts]]
- [[src/engine/Private/TrialDayRouter.ts]]
- [[src/case/case1/Private/trial.ts]] / [[src/case/case2/index.ts]]
- [[src/case/case1/Private/climax.ts]] / [[src/case/case2/Private/climax.ts]]

## 8. Common Failure Modes
- **Wrong Evidence Penalty**: Presenting evidence that does not match `stmt.contradiction.evidence`.
- **Game Over on 5 Penalties**: Life bar depletion resets health and restarts the trial phase.
