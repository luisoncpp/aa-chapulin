// @Architecture(descriptionShort="Serializes and persists game progress in browser storage", type="service", icon="database")
/**
 * Browser Storage Persistence & Save Manager
 * Facade over [[./SaveSlots.ts]] for [[./GameStateManager.ts]].
 */

import { isValidSaveData, type SaveData } from './SaveSchema.js';
import {
  clearSlots, deleteSlot as removeSlot, loadSlot as readSlot, newestSlot, readSlotList,
  saveToSlot as writeSlot
} from './SaveSlots.js';

export {
  CURRENT_SAVE_VERSION,
  type SaveData,
  type TrialStateSnapshot
} from './SaveSchema.js';

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

  public static save(data: SaveData, customStorage?: Storage): boolean {
    return SaveManager.saveToSlot(/*index=*/ 0, data, customStorage);
  }

  public static saveToSlot(index: number, data: SaveData, customStorage?: Storage): boolean {
    const storage = SaveManager.getStorage(customStorage);
    if (!storage) return false;
    return writeSlot(index, data, storage);
  }

  public static load(customStorage?: Storage): SaveData | null {
    return SaveManager.loadNewest(customStorage);
  }

  public static loadNewest(customStorage?: Storage): SaveData | null {
    const slots = SaveManager.listSlots(customStorage);
    if (!slots) return null;
    return newestSlot(slots);
  }

  public static loadSlot(index: number, customStorage?: Storage): SaveData | null {
    const storage = SaveManager.getStorage(customStorage);
    if (!storage) return null;
    return readSlot(index, storage);
  }

  public static listSlots(customStorage?: Storage): (SaveData | null)[] | null {
    const storage = SaveManager.getStorage(customStorage);
    if (!storage) return null;
    return readSlotList(storage);
  }

  public static deleteSlot(index: number, customStorage?: Storage): boolean {
    const storage = SaveManager.getStorage(customStorage);
    if (!storage) return false;
    return removeSlot(index, storage);
  }

  public static hasSave(customStorage?: Storage): boolean {
    const slots = SaveManager.listSlots(customStorage);
    return !!slots?.some((slot) => slot !== null);
  }

  public static clear(customStorage?: Storage): void {
    const storage = SaveManager.getStorage(customStorage);
    if (!storage) return;
    clearSlots(storage);
  }

  public static isValidSave(data: unknown): data is SaveData {
    return isValidSaveData(data);
  }
}
