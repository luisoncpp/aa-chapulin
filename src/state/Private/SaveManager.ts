// @Architecture(descriptionShort="Serializes and persists game progress in browser storage", type="service", icon="database")
/**
 * Browser Storage Persistence & Save Manager
 * Handles serialization, schema validation, and storage errors for [[./GameStateManager.ts]].
 */

import type { CaseId, EvidenceId, GameFlags, GameMode, Language, LocationId, TrialDay } from '../../types/index.js';

export interface TrialStateSnapshot {
  phase: 'IDLE' | 'TESTIMONY' | 'CLIMAX';
  testimonyKey?: 'testimony1' | 'testimony2' | null;
  statementIdx: number;
  trialDay?: TrialDay;
  climaxStageIdx?: number;
  climaxChoiceIdx?: number;
  pressedStatementIds?: string[];
}

export interface SaveData {
  version: number;
  timestamp: number;
  mode: GameMode;
  currentLocation: LocationId;
  unlockedLocations?: LocationId[];
  language: Language;
  health: number;
  gameOver: boolean;
  inventory: EvidenceId[];
  flags: GameFlags;
  evidenceUpdateStage?: Record<string, number>;
  trial?: TrialStateSnapshot;
  caseId?: CaseId;
  trialDay?: TrialDay;
}

// fallow-ignore-next-line unused-export
export const SAVE_STORAGE_KEY = 'ace_attorney_save_data';
export const CURRENT_SAVE_VERSION = 1;

export class SaveManager {
  // fallow-ignore-next-line complexity
  private static getStorage(customStorage?: Storage): Storage | null {
    if (customStorage) return customStorage;
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return window.localStorage;
      }
    } catch {
      return null;
    }
    return null;
  }

  // @Section(Save Operations)
  public static save(data: SaveData, customStorage?: Storage): boolean {
    const storage = SaveManager.getStorage(customStorage);
    if (!storage) return false;
    try {
      const payload = JSON.stringify(data);
      storage.setItem(SAVE_STORAGE_KEY, payload);
      return true;
    } catch {
      return false;
    }
  }

  // @Section(Load Operations)
  // fallow-ignore-next-line complexity
  public static load(customStorage?: Storage): SaveData | null {
    const storage = SaveManager.getStorage(customStorage);
    if (!storage) return null;
    try {
      const raw = storage.getItem(SAVE_STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!SaveManager.isValidSave(parsed)) return null;
      return parsed;
    } catch {
      return null;
    }
  }

  public static hasSave(customStorage?: Storage): boolean {
    return SaveManager.load(customStorage) !== null;
  }

  public static clear(customStorage?: Storage): void {
    const storage = SaveManager.getStorage(customStorage);
    if (!storage) return;
    try {
      storage.removeItem(SAVE_STORAGE_KEY);
    } catch {
      // Ignored
    }
  }

  // @Section(Schema Validation)
  // fallow-ignore-next-line complexity
  public static isValidSave(data: unknown): data is SaveData {
    if (!data || typeof data !== 'object') return false;
    const d = data as Partial<SaveData>;
    if (d.version !== CURRENT_SAVE_VERSION) return false;
    if (typeof d.timestamp !== 'number') return false;
    if (d.mode !== 'INVESTIGATION' && d.mode !== 'TRIAL') return false;
    if (typeof d.health !== 'number' || d.health < 0) return false;
    if (!Array.isArray(d.inventory)) return false;
    if (!d.flags || typeof d.flags !== 'object') return false;
    if (d.unlockedLocations !== undefined && !Array.isArray(d.unlockedLocations)) return false;
    if (d.language !== 'es' && d.language !== 'en') return false;
    return true;
  }
}
