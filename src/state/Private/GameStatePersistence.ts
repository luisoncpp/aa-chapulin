// @Architecture(descriptionShort="Save/load serialization for GameStateManager", type="util", icon="database")
/**
 * Persistence helpers for [[./GameStateManager.ts]].
 */

import type { SaveData, TrialStateSnapshot } from './SaveManager.js';
import { CURRENT_SAVE_VERSION } from './SaveManager.js';
import type { GameStateManager } from './GameStateManager.js';

export function exportGameState(state: GameStateManager, trialSnapshot?: TrialStateSnapshot): SaveData {
  return {
    version: CURRENT_SAVE_VERSION,
    timestamp: Date.now(),
    mode: state.mode,
    currentLocation: state.currentLocation,
    unlockedLocations: [...state.unlockedLocations],
    language: state.language,
    health: state.health,
    gameOver: state.gameOver,
    inventory: [...state.inventory],
    flags: { ...state.flags },
    evidenceUpdateStage: { ...state.evidenceUpdateStage },
    trial: trialSnapshot,
    caseId: state.caseId,
    trialDay: state.trialDay
  };
}

export function restoreGameState(state: GameStateManager, data: SaveData): void {
  state.caseId = data.caseId ?? 'case1';
  state.trialDay = data.trialDay ?? 1;
  state.mode = data.mode;
  state.currentLocation = data.currentLocation;
  state.unlockedLocations = data.unlockedLocations ? [...data.unlockedLocations] : ['museum', 'detention'];
  state.health = data.health;
  state.gameOver = data.gameOver;
  state.inventory = [...data.inventory];
  state.flags = { ...data.flags };
  state.evidenceUpdateStage = data.evidenceUpdateStage ? { ...data.evidenceUpdateStage } : {};
  state.setLanguage(data.language);
}
