# Save and Load Game Flow

Operational guide for player save game persistence and restoration flows using browser storage.

## 1. Triggers
- **In-Game Save**: Player clicks "💾" (`#btn-save-game`) on the top HUD bar.
- **In-Game Load**: Player clicks "📂" (`#btn-load-game`) on the top HUD bar.
- **Title / Splash Continue**: Player clicks "📂 CONTINUAR PARTIDA" (`#btn-continue-game`) on the start splash screen.

## 2. Entry Points
- `gameEngine.saveGame()` in [[src/engine/Private/GameEngine.ts#Save & Load Management]]
- `gameEngine.loadGame()` in [[src/engine/Private/GameEngine.ts#Save & Load Management]]

## 3. Step-by-Step Sequence

### Save Game Sequence
1. `gameEngine.saveGame()` is invoked from the HUD save button click or programmatically.
2. If `gameState.mode === 'TRIAL'`, `trial.getTrialSnapshot()` collects `{ phase, testimonyKey, statementIdx }`.
3. `gameState.exportState(trialSnapshot)` in [[src/state/Private/GameStateManager.ts#State Persistence]] captures:
   - `version: 1`
   - `timestamp: Date.now()`
   - `mode`, `currentLocation`, `unlockedLocations`, `language`, `health`, `gameOver`, `inventory`, `flags`, and `trial`.
4. `SaveManager.save(data)` serializes the payload to JSON and writes to `window.localStorage['ace_attorney_save_data']`.
5. On success:
   - Sound effect `realization` plays.
   - `#game-notification` displays `i18n.t.notifGameSaved`.
   - Splash card continue button `#btn-continue-game` is revealed.

### Load Game & Continue Sequence
1. Player clicks `#btn-load-game` in HUD or `#btn-continue-game` on Splash card.
2. `SaveManager.load()` reads and parses JSON from `localStorage`, validating schema version and structure.
3. If no save exists or schema is invalid:
   - `#game-notification` shows `i18n.t.notifNoSaveFound`.
   - Flow terminates cleanly without corrupting runtime state.
4. If valid save exists:
   - Splash overlay is dismissed and Web Audio API synthesizer is initialized (if not yet started).
   - `gameState.restoreState(data)` restores health, inventory, flags, location, unlocked locations, and mode.
   - `gameEngine.setLanguage(data.language)` synchronizes runtime dictionaries and UI strings.
   - `ModalManager.updateHealthUI()` renders health points on `#health-bar`.
   - Dialogue queue is cleared to prevent cross-scene dialogue spill.
   - **Investigation Mode**: `investigation.startInvestigation(data.currentLocation)` initializes crime scene, hotspots, and evaluates readiness.
   - **Trial Mode**: `trial.restoreTrialSnapshot(data.trial)` jumps directly into the saved testimony statement or climax phase.
   - `#game-notification` displays `i18n.t.notifGameLoaded`.

## 4. Reads
- `window.localStorage['ace_attorney_save_data']`
- `gameState.mode`, `gameState.health`, `gameState.inventory`, `gameState.flags` in [[src/state/Private/GameStateManager.ts]]
- `trial.phase`, `trial.currentTestimony`, `trial.currentStatementIdx` in [[src/engine/Private/TrialController.ts]]

## 5. Writes
- `window.localStorage['ace_attorney_save_data']`
- `gameState` attributes (`mode`, `currentLocation`, `health`, `inventory`, `flags`, `language`)
- `trial` attributes (`phase`, `currentTestimony`, `currentStatementIdx`)

## 6. Side Effects
- HUD buttons, location banner, and health bar re-render to match restored state.
- Splash screen dismissal and AudioContext unlocking.
- Notification banner sliding animations.

## 7. Files to Inspect
- [[src/state/Private/SaveManager.ts]]
- [[src/state/Private/GameStateManager.ts]]
- [[src/engine/Private/GameEngine.ts]]
- [[src/engine/Private/TrialController.ts]]

## 8. Common Failure Modes
- **LocalStorage disabled or quota exceeded**: `SaveManager` catches exceptions safely and returns `false`.
- **Corrupted save data**: `SaveManager.isValidSave()` rejects corrupted JSON/malformed shapes and falls back cleanly.
