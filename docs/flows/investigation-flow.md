# Investigation Flow

Operational guide for player actions during the crime scene investigation phase.

## 1. Trigger
- Player starts the game, moves to a scene (`#btn-inv-move`), clicks examine mode (`#btn-inv-examine`), or selects a talk topic (`#btn-inv-talk`).

## 2. Entry Point
- `investigation.startInvestigation(location)` in [[src/engine/Private/InvestigationController.ts#Investigation Scene Transition]]
- `investigation.startExamineMode()` in [[src/engine/Private/InvestigationController.ts#Examine Mode & Tooltips]]
- `investigation.openTalkMenu()` in [[src/engine/Private/InvestigationController.ts#Talk Dialog & Readiness]]

## 3. Step-by-Step Sequence

### Scene Transition
1. `gameState.currentLocation` is updated to the target location (Case 1: `'museum'` / `'detention'`; Case 2: `'detention'`, `'boveda'`, `'restaurante'`, and after adjournment `'oficina_postal'` / `'casa_clotilde'`).
2. `locationBannerEl` text updates to current scene title.
3. `bgEl` background style switches to the scene image from the active script (`bg_museum.jpg`, `bg_detention.jpg`, or Case 2 `bg_boveda.jpg` / `bg_restaurante.jpg` / `bg_postal.jpg` / `bg_clotilde.jpg`).
4. `midiComposer.playTrack(scene.bgm)` transitions background music (`'investigation'` or `'suspense'`).
5. `renderHotspots()` injects percentage-based clickable regions into `#hotspots-container` (`x,y,w,h` are of the 960×540 stage after `background-size: cover`, not of the raw background file).
6. `resolveSceneIntro(scene, gameState)` checks whether an opening dialogue should play:
   - On first visit (or when a conditional `SceneIntro` matches unplayed event flags), `gameState.markIntroPlayed(intro.id)` records completion, investigation navigation (`#investigation-controls`) is hidden with `.hidden`, `isFirstTimeDialogue = true` blocks menu/hotspot interactions, and `queueDialogue(intro.dialogue)` presents opening dialogue. On dialogue completion, `.hidden` is removed from `#investigation-controls`, `isFirstTimeDialogue = false`, and `restoreSceneIdlePose()` restores the resident character pose. After trial adjournment, intro waits until `fadeThroughBlack` reveals the new plate before `queueCurrentIntro()` queues the dialogue.
   - On re-visits where no new event intro matches, opening dialogue is bypassed as in Ace Attorney games; the speaker tag and dialogue box are cleared, the resident character pose is restored from the scene's resolved `idlePose` (or hidden if `null`), and investigation navigation is immediately ready. Dialogue completions (intro, hotspot examination, and talk topics) similarly restore the resident character's `idlePose`.

### Examination & Hotspot Click
1. Player clicks "🔍 Examinar" (`#btn-inv-examine`).
2. `#hotspots-container` receives class `.visible-hotspots` (enabling pointer events on hotspots).
3. `#dialogue-box` and `#game-screen` receive class `.examine-mode` (shrunk 48px prompt plate, lowered controls dock).
4. Investigation navigation (`#investigation-controls`) is hidden, and examine navigation (`#examine-nav` with "Volver" / Back button) is shown.
5. Active character sprite is hidden (`hideCharacter()`) so the crime scene background is clear.
6. The examine prompt is rendered immediately (without the dialogue typewriter or text-blip SFX) because it is a persistent interaction hint, not spoken dialogue.
7. Player moves the pointer during examine mode: `InvestigationController` compares the pointer coordinates with the 48px `#dialogue-box` rect and adds `examine-hud-hidden` while the pointer is over that frame. The plate remains click-through, so a hotspot underneath can still receive clicks. `#examine-tooltip` updates for the hotspot independently. Typewriter text blips stop while the plate is hidden.
8. Player clicks hotspot:
   - SFX `'click'` plays.
   - `#examine-tooltip` is hidden.
   - `#hotspots-container` temporarily removes `.visible-hotspots` to prevent mid-dialogue re-triggers.
   - `#dialogue-box` and `#game-screen` temporarily remove `.examine-mode` to display dialogue at full height (120px) with speaker tag and typewriter effects.
   - `#examine-nav` and `#investigation-controls` are both hidden during dialogue playback.
   - Hotspot dialogue array is queued via `queueDialogue()`.
   - Any `line.addEvidence` adds the item and shows `#game-notification` (`notifEvidenceAdded`) with realization SFX.
   - Any `line.updateEvidence` applies catalog `updatedDesc` and shows `#game-notification`.
   - On dialogue completion callback:
     - `gameState.markHotspotExamined(h.id)` records completion.
     - `notifyNewlyUnlocked()` checks for newly unlocked talk topics.
     - `checkInvestigationProgress()` updates trial button readiness.
     - `startExamineMode()` is called to return/stay in examine mode (re-enabling hotspots, restoring examine-mode CSS, showing `#examine-nav`, and resetting the examine prompt).
9. Player exits examine mode:
   - Player clicks "Volver" (`#btn-examine-back`).
   - `exitExamineMode()` deactivates examine mode, hides `#examine-nav`, reveals `#investigation-controls`, clears the examine prompt from the dialogue box, and restores the scene's resident character idle pose.


### Location Selection & Move Modal
1. Player clicks "🏃 Moverse" (`#btn-inv-move`).
2. `investigation.openMoveMenu()` queries `gameState.unlockedLocations` and scenes on the active script (`getCaseScript` → `investigation`).
3. `#move-locations-modal` opens via `ModalManager.openMoveModal()` with destination buttons:
   - Current location is styled with `disabled` and badge `(Actual)` / `(Current)`.
   - Other unlocked locations are clickable.
4. Player clicks an unlocked destination: modal closes and `startInvestigation(locId)` executes scene transition.

### Talk Option Click, Progressive Unlocking & Dynamic Location Unlock
1. Player clicks "💬 Hablar" (`#btn-inv-talk`).
2. `visibleTalkOptions(scene.talkOptions, gameState)` filters options, hiding any topics gated by `unlockedByTalk`, `unlockedByHotspot`, or `condition` whose requirements have not yet been satisfied.
3. `#talk-options-modal` opens via `ModalManager.openTalkModal()` with buttons for each currently unlocked topic.
4. Player clicks a topic: modal closes while dialogue plays, `#investigation-controls` is hidden and `isFirstTimeDialogue` is set (side buttons stay off-screen and Examinar/Hablar/Moverse stay blocked until the topic's `onComplete` runs), topic dialogue queues, `gameState.markTalkCompleted(opt.id)` records completion, and evidence grants, description updates, or location unlocks are granted if scripted.
5. When dialogue line contains `line.unlockLocation`:
   - `gameState.unlockLocation(locId)` registers the location.
   - If newly unlocked, SFX `realization` plays and `#game-notification` displays `notifLocationUnlocked`.
6. On dialogue completion callback (or hotspot examination completion), `notifyNewlyUnlocked()` checks if any previously locked topic in the scene became unlocked. If so, `realization` SFX plays, `#game-notification` displays `notifDialogueUnlocked(opt.label)`, and `checkInvestigationProgress()` runs.
7. **Talk Modal Persistence**: If still in investigation mode and examine mode is not active, `openTalkMenu()` is automatically called upon dialogue completion to reopen `#talk-options-modal` with updated topics, allowing fluid sequential conversations. The player can dismiss the modal at any time using the close button (`X`) or switch to Court Record / other actions.

### Unlocking & Launching Trial
1. `gameState.checkTrialReadiness()` in [[src/state/Private/GameStateManager.ts#Investigation Readiness]] checks `script.requiredEvidence` (day 1) or `adjournment.requiredEvidence` after Case 2 day-1 adjournment.
2. If ready, `#btn-inv-trial` loses `.disabled`, sets `disabled = false`, gains `.pulse-glow`, and displays a ready notification.
3. While disabled (due to `disabled` property and `.disabled` class), clicking `#btn-inv-trial` is ignored.
4. When enabled, player clicks "⚖️ Ir a Juicio": `trial.startTrial()` fades through black, then queues the courtroom intro.

## 4. Reads
- Active `script.investigation[location]` ([[src/case/case1/Private/investigation.ts]] or Case 2 scenes via [[src/case/case2/index.ts]])
- `gameState.inventory` in [[src/state/Private/GameStateManager.ts]]
- `gameState.unlockedLocations` in [[src/state/Private/GameStateManager.ts]]
- `gameState.flags` in [[src/state/Private/GameStateManager.ts]]

## 5. Writes
- `gameState.currentLocation`
- `gameState.unlockedLocations` (via `unlockLocation`)
- `gameState.inventory` (via `addEvidence`)
- `gameState.flags.ready_for_trial`

## 6. Side Effects
- DOM HUD visibility toggle (investigation vs examine vs trial controls).
- Audio synthesizer track change and sound effects.
- Notification banner sliding animations.

## 7. Files to Inspect
- [[src/engine/Private/InvestigationController.ts]]
- [[src/engine/Private/ModalManager.ts]]
- [[src/state/Private/GameStateManager.ts]]
- [[src/case/case1/Private/investigation.ts]] / [[src/case/case2/index.ts]]

## 8. Common Failure Modes
- **Trial button remains disabled**: Missing an ID from the current `requiredEvidence` list (Case 1 five clues; Case 2 six day-1 or six day-2 items after adjournment). After Case 2 day-1 adjournment, [[src/engine/Private/AdjournmentHandler.ts]] calls `resetTrialLaunchButton()` so the button stays off until day-2 evidence is complete.
- **Hotspots unclickable**: `isExamineActive` is false; user must click "🔍 Examinar" button first. If examine is on and a horizontal band still ignores hover, a full-width HUD sibling (usually `#controls-bar`) is sitting above the hotspot layer — see [[docs/lessons-learned/examine-hud-hotspot-occlusion.md]].
