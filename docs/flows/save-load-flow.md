# Save and Load Game Flow

Operational guide for player save game persistence and restoration flows using browser storage.

## 1. Triggers
- **In-Game Save**: Player clicks "💾" (`#btn-save-game`) on the top HUD bar. That opens the slot list (`#save-slot-modal`).
- **In-Game Load**: Player clicks "📂" (`#btn-load-game`) on the top HUD bar. Same list, in load mode.
- **Title / Splash Continue**: Player clicks "📂 CONTINUAR PARTIDA" (`#btn-continue-game`) on the start splash screen. This does not open the list.

## 2. Entry Points
- `openSavePicker()` in [[src/engine/Private/EnginePersistence.ts]]
- `gameEngine.saveGame()` writes slot 0 directly (tests and other programmatic callers)
- `gameEngine.loadGame()` loads the slot with the latest `timestamp`

## 3. Step-by-Step Sequence

### Save Game Sequence
1. The HUD save button opens the eight-slot list. Occupied rows show the case short name, the place (investigation scene title, or courtroom plus trial day), and the local time. Empty rows read "Vacío" / "Empty".
2. An empty row writes immediately. An occupied row asks Sí / No and writes only on Sí.
3. On confirm, if `gameState.mode === 'TRIAL'`, `persistTrialSnapshot()` collects `{ phase, testimonyKey, statementIdx }`.
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
1. Player clicks `#btn-continue-game`.
2. `SaveManager.loadNewest()` returns the valid slot with the greatest `timestamp`.
3. The button is hidden when no slot is valid. On boot, `hasSave` also adopts a legacy single save (see below) so an older Continue still appears.

### Restore
1. Splash overlay is dismissed and Web Audio API synthesizer is initialized (if not yet started).
2. `gameState.restoreState(data)` restores health, inventory, flags, location, unlocked locations, and mode.
3. `gameEngine.setLanguage(data.language)` synchronizes runtime dictionaries and UI strings.
4. `ModalManager.updateHealthUI()` renders health points on `#health-bar`.
5. Dialogue queue and message history are cleared.
6. **Investigation Mode**: `investigation.startInvestigation(data.currentLocation)` initializes the crime scene.
7. **Trial Mode**: `trial.restoreTrialSnapshot(data.trial)` jumps into the saved testimony statement or climax stage.
8. `#game-notification` displays `i18n.t.notifGameLoaded`.

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
