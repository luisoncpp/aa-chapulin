# Save and Load Game Flow

Operational guide for player save game persistence and restoration flows using browser storage.

## 1. Triggers
- **In-Game Save**: Player clicks "💾" (`#btn-save-game`) on the top HUD bar. That opens the slot list (`#save-slot-modal`).
- **In-Game Load**: Player clicks "📂" (`#btn-load-game`) on the top HUD bar. Same list, in load mode.
- **Title / Splash Continue**: Player clicks "📂 CONTINUAR PARTIDA" (`#btn-continue-game`) on the start splash screen. That opens the same list in load mode, above the splash.

## 2. Entry Points
- `openSavePicker()` in [[src/engine/Private/EnginePersistence.ts]]
- `gameEngine.saveGame()` writes slot 0 directly (tests and other programmatic callers)
- `gameEngine.loadGame()` loads the slot with the latest `timestamp`

## 3. Step-by-Step Sequence

### Save Game Sequence
1. The HUD save button opens the eight-slot list. Occupied rows show the case short name, the place (investigation scene title, or courtroom plus trial day), and the local time. Empty rows read "Vacío" / "Empty".
2. An empty row writes immediately. An occupied row asks Sí / No and writes only on Sí.
3. On confirm, `persistTrialSnapshot()` collects trial progression, pressed statements, pending opening/follow-up questions and the active point overlay. `DialogueFlow.snapshot()` captures the displayed line, remaining lines, record notices and a serializable completion action. Final Deduction keeps its own snapshot instead of saving its internal dialogue queue twice.
4. `gameState.exportState(trialSnapshot)` in [[src/state/Private/GameStateManager.ts#State Persistence]] captures the payload (`version`, `timestamp`, mode, location, inventory, flags, trial, and the rest of the current schema).
5. `SaveManager.saveToSlot(index, data)` stores it in the envelope at `window.localStorage['ace_attorney_save_slots']`.
6. On success:
   - Sound effect `realization` plays.
   - `#game-notification` displays `i18n.t.notifGameSaved`.
   - The list closes.
   - Splash card continue button `#btn-continue-game` is revealed when any slot is occupied.

### Delete
1. Borrar on an occupied row asks Sí / No.
2. Sí clears that slot only. Continue hides again when every slot is empty.

### Load Game Sequence
1. Player clicks `#btn-load-game`. Empty rows are not selectable.
2. Choosing an occupied row calls `SaveManager.loadSlot(index)`.
3. If that slot is missing or invalid, `#game-notification` shows `i18n.t.notifNoSaveFound` and runtime state is left alone.

### Continue Sequence
1. Player clicks `#btn-continue-game`. The button is hidden when no slot is valid. On boot, `GameEngine.init` checks `hasSave` after the engine, audio, and UI bind — not after every case script. A legacy single save is still adopted so an older Continue still appears.
2. The click opens the load list (`#save-slot-modal`, above the splash) without loading case scripts. Occupied rows show the i18n case name, the localized investigation place from the lightweight location-name catalog, and the local time; trial rows use courtroom plus day. Empty rows are not selectable.
3. Choosing an occupied row fetches that slot's case module only, then follows the Load Game sequence. `loadGame()` still returns the newest slot for callers that do not go through the button.

### Restore
1. Splash overlay is dismissed and Web Audio API synthesizer is initialized (if not yet started).
2. `gameState.restoreState(data)` restores health, inventory, flags, location, unlocked locations, and mode.
3. `loadCase` applies the cached script for `data.caseId`; `gameEngine.setLanguage(data.language)` synchronizes runtime dictionaries and UI strings.
4. `ModalManager.updateHealthUI()` renders health points on `#health-bar`.
5. Dialogue queue and message history are cleared.
6. **Investigation Mode**: `investigation.startInvestigation(data.currentLocation)` initializes the crime scene.
7. **Trial Mode**: `trial.restoreTrialSnapshot(data.trial)` restores progression. Saved dialogue and point overlays then supply presentation; pending opening and follow-up questions reopen with their answer routing intact.
8. **Active dialogue**: `DialogueFlow.restore()` displays the saved line without repeating evidence/profile updates, restores its notices, and queues only the remaining lines. Finishing runs the saved completion action through [[src/engine/Private/DialogueResume.ts]]. The Case 0 save tutorial resumes the recess and continues to testimony 3. Investigation dialogue finishes its original intro, talk or hotspot action instead of being skipped by an already-set flag.
9. **Scene work**: loading invalidates delayed fades, gallery holds and celebration callbacks from the old session. Examine mode and the case-complete plate are restored when saved.
10. `#game-notification` displays `i18n.t.notifGameLoaded`.

### Legacy single save
On the first read, if the envelope key is missing and `ace_attorney_save_data` holds a valid payload, that payload is copied into slot 0 (shown as slot 1). The old key is removed only after the envelope write succeeds.

## 4. Reads
- `window.localStorage['ace_attorney_save_slots']`
- `window.localStorage['ace_attorney_save_data']` only while adopting a pre-slot save
- `gameState` fields in [[src/state/Private/GameStateManager.ts]]
- `trial` snapshot fields in [[src/engine/Private/TrialController.ts]]

## 5. Writes
- `window.localStorage['ace_attorney_save_slots']`
- `gameState` attributes restored from the chosen slot
- `trial` attributes restored from that slot's snapshot

## 6. Side Effects
- HUD buttons, location banner, and health bar re-render to match restored state.
- Splash screen dismissal and AudioContext unlocking.
- Notification banner sliding animations.
- An open slot list is redrawn when the player toggles language.

## 7. Files to Inspect
- [[src/state/Private/SaveSlots.ts]]
- [[src/state/Private/SaveManager.ts]]
- [[src/engine/Private/SaveSlotModal.ts]]
- [[src/engine/Private/EnginePersistence.ts]]
- [[src/state/Private/GameStateManager.ts]]
- [[src/engine/Private/TrialController.ts]]

## 8. Common Failure Modes
- **LocalStorage disabled or quota exceeded**: slot writes return `false`. A failed envelope write during adoption leaves the legacy key in place.
- **One corrupt slot**: that row is treated as empty. The other seven still load.
- **Corrupted envelope JSON**: the list is empty. A sibling legacy key is not resurrected once the envelope key exists.

Older saves without dialogue checkpoints remain loadable and use the saved testimony/climax position. Their original dialogue position cannot be recovered because it was never recorded.
