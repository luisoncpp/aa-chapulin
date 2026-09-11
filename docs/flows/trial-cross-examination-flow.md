# Trial & Cross-Examination Flow

Operational guide for courtroom litigation, cross-examinations, evidence presentations, penalties, and verdict climax.

## 1. Trigger
- Player initiates the trial from investigation mode, starts debug trial directly from the splash screen / URL parameter / console, navigates testimony statements, clicks "Presionar", presents evidence from the Court Record, or triggers the final climax.

## 2. Entry Point

Case 0 is the courtroom-only entry: its splash/debug launch seeds the opening Court Record and starts the trial without investigation. After a contradiction, the controller advances through `activeTrial.testimonies[index + 1]` until the array is exhausted; legacy save `testimonyKey` values normalize to indexes `0` and `1`.
- Normal launch: `trial.startTrial()` in [[src/engine/Private/TrialController.ts#Trial Launch & Intro]] via `#btn-inv-trial`.
- Debug launch: `engine.startTrialDebug(day?)` via URL flags parsed by [[src/engine/Private/EngineDebugBootstrap.ts]] (`?trial`, `?case=2&trial`, `?case=3&trial=2`, `?case=3&trial=3`).
- `trial.nextStatement()` / `trial.prevStatement()` in [[src/engine/Private/TrialController.ts#Testimony Navigation]]
- `trial.handlePressStatement()` in [[src/engine/Private/TrialController.ts#Statement Pressing & Contradictions]]
- `trial.handlePresentEvidence(evidenceId)` in [[src/engine/Private/TrialController.ts#Statement Pressing & Contradictions]]
- `trial.startClimax()` in [[src/engine/Private/TrialController.ts#Climax & Verdict Confrontation]]

## 3. Step-by-Step Sequence

### Courtroom Initialization
1. `fadeThroughBlack` covers the investigation plate.
2. While covered, `gameState.mode` switches to `'TRIAL'`, HUD hides investigation controls, and the first intro shot (`bg`, pose, furniture) is painted. Every trial day begins on `assets/bg_waiting_room.webp` with no courtroom furniture, so the reveal establishes the date, time, and High Court waiting-room location. If its images are still decoding, the shared fade waits for that atomic stage commit before revealing.
3. After the reveal, `queueDialogue` plays the active day's intro (`getActiveTrial(script, trialDay).intro` via [[src/engine/Private/TrialDayRouter.ts]]). Most cases switch to the judge on the next line. Case 0 stays in the waiting room for its pre-trial dialogue, then its judge line moves the shot into the courtroom.
4. On intro complete: if `getActiveTrial(...).openingPresent` is set ([[src/engine/Private/TrialPresent.ts]]), open the Court Record in presentation mode. If `openingPresent.prompt` is defined, the question is displayed on `#climax-present-prompt` and `#court-record-present-prompt` while awaiting evidence. Correct evidence plays `successDialogue` then `startTestimony(0)`; in Case 0 that success dialogue also contains the tutorial and the judge/witness introduction. Wrong evidence is a penalty and the Acta reopens. Otherwise `startTestimony(0)` runs immediately.

### Testimony Looping & Pressing
1. `startTestimony(testimonyKey)` sets `currentTestimony`, resets `currentStatementIdx = 0`, starts BGM (`cross_exam_moderato` or `cross_exam_allegro`), and renders statement 0.
2. `renderCurrentStatement()` reveals trial controls (`#trial-controls`: "◀ Anterior", "💥 Presionar", "📜 Presentar", "Siguiente ▶") for active cross-examination statement navigation.
3. Player clicks "◀ Anterior" or "Siguiente ▶": updates `currentStatementIdx` (with wrap-around) and renders statement.
4. Player clicks "💥 Presionar" (`#btn-press`):
   - Retrieves visible statement `pressText` (navigation uses [[src/engine/Private/StatementUnlock.ts]]). Case 0 gives every statement a press response, so pressing always produces an intentional dialogue beat.
   - Hides trial controls.
   - Queues press dialogue. The response begins with the defense's localized `¡UN MOMENTO!` / `HOLD IT!` line using the `objection_un_momento` cut-in and `whoosh` SFX, then continues with the witness's added detail.
   - Records the statement id. If another statement has `unlockedBy` matching it, a toast ("El testigo ha añadido una declaración") plays, and the cursor jumps to the new line.
   - After two failed presents on a testimony that still has hidden lines, Chapulín gives a one-line press hint (no extra penalty for pressing).

### Presenting Evidence & Contradiction Evaluation
1. Player clicks "📜 Presentar" (`#btn-trial-present`) on HUD or inside Court Record modal.
2. Player selects an item and clicks "¡Presentar Prueba!".
3. Modal closes; `handlePresentEvidence(selectedEvidenceId)` hides trial controls and checks opening present, pending `followUp`, then `stmt.contradiction`:
   - **Correct Evidence**:
     1. If the matched rule has `pointTarget`, open `#present-point-overlay` first ([[docs/flows/present-point-flow.md]]). Parent `successDialogue` waits for a correct click.
     2. If the matched rule has `requiresExamine` and that evidence has not been opened with `EXAMINE DETAIL`, queue the localized instruction and reopen the Acta without applying a penalty.
     3. Queues `successDialogue` (displays `¡PROTESTO!` or `¡TOMA ESO!`, desk slams, realization sound, BGM switches to `objection` or `pursuit`).
     4. If `followUp` is set, reopen the Acta for `followUp.evidence` (wrong = penalty; correct may also `pointTarget` then `followUp.successDialogue`). If `followUp.prompt` is set, that question is shown on the HUD and inside the Court Record window.
   5. On finish callback, launches the next testimony while `index + 1` remains in the active array; after the array is exhausted it either enters adjournment or starts the climax. Case 0 testimony 2 keeps its recess lobby scene and the courtroom delivery of the briefcase and encyclopedia card inside that success dialogue, so both items enter the Acta before testimony 3 begins.
   - Case 0 testimony 2 accepts `foto_patio` from either `c0_t2_2` or `c0_t2_3`; both claims use the same examine-detail and Present & Point flow.
   - **Point tutorial timing**: Any instruction that teaches the Present & Point click belongs in the active `pointTarget.promptQuestion`, because the rule's `successDialogue` is queued only after the player has already clicked the correct zone.
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
   - Case 0 is two climax stages with one choice between them; Case 1 is one stage (`antenitas_vinil` or `bolsa_dolares`); Case 2 is three presents then two choices.
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
