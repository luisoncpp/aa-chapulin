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
6. `queueDialogue(scene.intro)` presents opening narrative dialogue. After a trial adjournment the intro waits until `fadeThroughBlack` has revealed the new plate; the postal background, plain stage frame, and hidden courtroom sprite are already applied while covered.

### Examination & Hotspot Click
1. Player clicks "🔍 Examinar" (`#btn-inv-examine`).
2. `#hotspots-container` receives class `.visible-hotspots` (enabling pointer events on hotspots).
3. Active character sprite is hidden (`hideCharacter()`) so the background is clear.
4. Player moves cursor over a hotspot: `#examine-tooltip` updates position and text label.
5. Player clicks hotspot:
   - SFX `'realization'` plays.
   - `exitExamineMode()` disables hotspot hover layer.
   - If first-time inspection (`!gameState.isHotspotExamined(h.id)`):
     - Investigation controls (`#investigation-controls`) remain hidden to prevent switching to talk/examine during active dialogue.
     - Hotspot dialogue array is queued via `queueDialogue()`.
     - Any `line.addEvidence` adds the item and shows `#game-notification` (`notifEvidenceAdded`) with realization SFX, same pattern as a new location.
     - Any `line.updateEvidence` applies catalog `updatedDesc`. If the item was already owned, `#game-notification` shows `notifEvidenceUpdated`; if it was new, the add toast is used instead.
     - On completion callback, `gameState.markHotspotExamined(h.id)` records completion, `#investigation-controls` is revealed, and `checkInvestigationProgress()` runs.
   - If repeated inspection (`gameState.isHotspotExamined(h.id)`):
     - Investigation controls (`#investigation-controls`) remain visible, allowing player to switch to talk or examine something else immediately.
     - Hotspot dialogue array is queued via `queueDialogue()`.


### Location Selection & Move Modal
1. Player clicks "🏃 Moverse" (`#btn-inv-move`).
2. `investigation.openMoveMenu()` queries `gameState.unlockedLocations` and scenes on the active script (`getCaseScript` → `investigation`).
3. `#move-locations-modal` opens via `ModalManager.openMoveModal()` with destination buttons:
   - Current location is styled with `disabled` and badge `(Actual)` / `(Current)`.
   - Other unlocked locations are clickable.
4. Player clicks an unlocked destination: modal closes and `startInvestigation(locId)` executes scene transition.

### Talk Option Click & Dynamic Location Unlock
1. Player clicks "💬 Hablar" (`#btn-inv-talk`).
2. `#talk-options-modal` opens via `ModalManager.openTalkModal()` with buttons for each topic defined in `scene.talkOptions`.
3. Player clicks a topic: modal closes, topic dialogue queues, and evidence grants, description updates, or location unlocks are granted if scripted.
4. When dialogue line contains `line.unlockLocation`:
   - `gameState.unlockLocation(locId)` registers the location.
   - If newly unlocked, SFX `realization` plays and `#game-notification` displays `notifLocationUnlocked`.
5. On completion callback, `checkInvestigationProgress()` runs.

### Unlocking & Launching Trial
1. `gameState.checkTrialReadiness()` in [[src/state/Private/GameStateManager.ts#Investigation Readiness]] checks `script.requiredEvidence` (day 1) or `adjournment.requiredEvidence` after Case 2 day-1 adjournment.
2. If ready, `#btn-inv-trial` loses `.disabled`, sets `disabled = false`, gains `.pulse-glow`, and displays a ready notification.
3. While disabled (due to `disabled` property and `.disabled` class), clicking `#btn-inv-trial` is ignored.
4. When enabled, player clicks "⚖️ Ir a Juicio": `trial.startTrial()` fades through black, then queues the courtroom intro.

## 4. Reads
- Active `script.investigation[location]` ([[src/case/Private/case1_investigation.ts]] or Case 2 scenes via [[src/case/Private/case2_script.ts]])
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
- [[src/case/Private/case1_investigation.ts]] / [[src/case/Private/case2_script.ts]]

## 8. Common Failure Modes
- **Trial button remains disabled**: Missing an ID from the current `requiredEvidence` list (Case 1 five clues; Case 2 six day-1 or six day-2 items after adjournment). After Case 2 day-1 adjournment, [[src/engine/Private/AdjournmentHandler.ts]] calls `resetTrialLaunchButton()` so the button stays off until day-2 evidence is complete.
- **Hotspots unclickable**: `isExamineActive` is false; user must click "🔍 Examinar" button first. If examine is on and a horizontal band still ignores hover, a full-width HUD sibling (usually `#controls-bar`) is sitting above the hotspot layer — see [[docs/lessons-learned/examine-hud-hotspot-occlusion.md]].
