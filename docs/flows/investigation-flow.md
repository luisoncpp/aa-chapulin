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
1. `gameState.currentLocation` is updated to the target location (`'museum'` or `'detention'`).
2. `locationBannerEl` text updates to current scene title.
3. `bgEl` background style switches to scene image (`bg_museum.jpg` or `bg_detention.jpg`).
4. `midiComposer.playTrack(scene.bgm)` transitions background music (`'investigation'` or `'suspense'`).
5. `renderHotspots()` injects percentage-based clickable regions into `#hotspots-container`.
6. `queueDialogue(scene.intro)` presents opening narrative dialogue.

### Examination & Hotspot Click
1. Player clicks "🔍 Examinar" (`#btn-inv-examine`).
2. `#hotspots-container` receives class `.visible-hotspots` (enabling pointer events on hotspots).
3. Active character sprite is hidden (`hideCharacter()`) so the background is clear.
4. Player moves cursor over a hotspot: `#examine-tooltip` updates position and text label.
5. Player clicks hotspot:
   - SFX `'realization'` plays.
   - `exitExamineMode()` disables hotspot hover layer.
   - Hotspot dialogue array is queued via `queueDialogue()`.
   - Any `line.addEvidence` adds item to `gameState.inventory` and shows `#game-notification`.
   - On completion callback, `checkInvestigationProgress()` verifies if trial is unlocked.

### Location Selection & Move Modal
1. Player clicks "🏃 Moverse" (`#btn-inv-move`).
2. `investigation.openMoveMenu()` queries `gameState.unlockedLocations` and case scenes in `CASE_SCRIPT.investigation`.
3. `#move-locations-modal` opens via `ModalManager.openMoveModal()` with destination buttons:
   - Current location is styled with `disabled` and badge `(Actual)` / `(Current)`.
   - Other unlocked locations are clickable.
4. Player clicks an unlocked destination: modal closes and `startInvestigation(locId)` executes scene transition.

### Talk Option Click & Dynamic Location Unlock
1. Player clicks "💬 Hablar" (`#btn-inv-talk`).
2. `#talk-options-modal` opens via `ModalManager.openTalkModal()` with buttons for each topic defined in `scene.talkOptions`.
3. Player clicks a topic: modal closes, topic dialogue queues, and evidence or location unlocks are granted if scripted.
4. When dialogue line contains `line.unlockLocation`:
   - `gameState.unlockLocation(locId)` registers the location.
   - If newly unlocked, SFX `realization` plays and `#game-notification` displays `notifLocationUnlocked`.
5. On completion callback, `checkInvestigationProgress()` runs.

### Unlocking & Launching Trial
1. `gameState.checkTrialReadiness()` in [[src/state/Private/GameStateManager.ts#Investigation Readiness]] verifies the 5 mandatory clues are collected.
2. If ready, `#btn-inv-trial` loses `.disabled`, gains `.pulse-glow`, and displays a ready notification.
3. Player clicks "⚖️ Ir a Juicio": `trial.startTrial()` is invoked.

## 4. Reads
- `CASE_SCRIPT.investigation[location]` in [[src/case/Private/case1_investigation.ts]]
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
- [[src/case/Private/case1_investigation.ts]]

## 8. Common Failure Modes
- **Trial button remains disabled**: Player missed one of the 5 required clues (`chipote_chillon`, `pastillas_chiquitolina`, `antenitas_vinil`, `informe_medico`, `foto_crimen`).
- **Hotspots unclickable**: `isExamineActive` is false; user must click "🔍 Examinar" button first.
