// @Architecture(descriptionShort="Unit tests for the eight-slot save envelope", type="test", icon="database")
import { describe, expect, it } from 'vitest';
import {
  CURRENT_SAVE_VERSION,
  SAVE_SLOTS_KEY,
  SAVE_STORAGE_KEY,
  SaveManager,
  type SaveData
} from '../../src/state/index.js';

function memoryStorage(): Storage {
  const map = new Map<string, string>();
  return {
    get length() { return map.size; },
    clear: () => map.clear(),
    getItem: (key: string) => map.get(key) ?? null,
    key: (index: number) => [...map.keys()][index] ?? null,
    removeItem: (key: string) => { map.delete(key); },
    setItem: (key: string, value: string) => { map.set(key, value); }
  } as Storage;
}

function sample(timestamp: number, marker: string): SaveData {
  return {
    version: CURRENT_SAVE_VERSION,
    timestamp,
    mode: 'INVESTIGATION',
    currentLocation: 'detention',
    language: 'es',
    health: 5,
    gameOver: false,
    inventory: [marker as SaveData['inventory'][number]],
    flags: { ready_for_trial: false }
  } as SaveData;
}

describe('Save slots', () => {
  it('keeps eight independent slots and rejects an index outside that list', () => {
    const storage = memoryStorage();
    const slots = SaveManager.listSlots(storage);
    expect(slots).toHaveLength(8);
    expect(SaveManager.saveToSlot(7, sample(7, 'chipote_chillon'), storage)).toBe(true);
    expect(SaveManager.saveToSlot(8, sample(8, 'antenitas_vinil'), storage)).toBe(false);
    expect(SaveManager.saveToSlot(-1, sample(1, 'antenitas_vinil'), storage)).toBe(false);
    expect(SaveManager.loadSlot(7, storage)?.inventory).toEqual(['chipote_chillon']);
    expect(SaveManager.loadSlot(0, storage)).toBeNull();
    expect(SaveManager.deleteSlot(9, storage)).toBe(false);
  });

  it('adopts a legacy single save as the first slot and drops the old key', () => {
    const storage = memoryStorage();
    const legacy = sample(4, 'pastillas_chiquitolina');
    storage.setItem(SAVE_STORAGE_KEY, JSON.stringify(legacy));

    const loaded = SaveManager.loadSlot(0, storage);
    expect(loaded?.inventory).toEqual(['pastillas_chiquitolina']);
    expect(storage.getItem(SAVE_STORAGE_KEY)).toBeNull();
    expect(storage.getItem(SAVE_SLOTS_KEY)).not.toBeNull();
    expect(SaveManager.loadNewest(storage)?.timestamp).toBe(4);
  });

  it('leaves the legacy key in place when the slot envelope cannot be written', () => {
    const legacy = JSON.stringify(sample(3, 'insignia_abogado'));
    const storage = {
      getItem: (key: string) => key === SAVE_STORAGE_KEY ? legacy : null,
      setItem: () => { throw new Error('quota'); },
      removeItem: () => { throw new Error('should not remove'); },
      clear: () => {},
      key: () => null,
      length: 0
    } as Storage;

    expect(SaveManager.load(storage)?.inventory).toEqual(['insignia_abogado']);
    expect(storage.getItem(SAVE_STORAGE_KEY)).toBe(legacy);
  });

  it('keeps the other slots when one entry is corrupt', () => {
    const storage = memoryStorage();
    const older = sample(1, 'chipote_chillon');
    const newer = sample(9, 'antenitas_vinil');
    storage.setItem(SAVE_SLOTS_KEY, JSON.stringify({
      slots: [older, { version: 'bad' }, newer]
    }));

    const slots = SaveManager.listSlots(storage);
    expect(slots?.[0]?.inventory).toEqual(['chipote_chillon']);
    expect(slots?.[1]).toBeNull();
    expect(slots?.[2]?.inventory).toEqual(['antenitas_vinil']);
    expect(SaveManager.loadNewest(storage)?.inventory).toEqual(['antenitas_vinil']);
  });

  it('loads the later timestamp when an earlier slot is older', () => {
    const storage = memoryStorage();
    SaveManager.saveToSlot(0, sample(1, 'chipote_chillon'), storage);
    SaveManager.saveToSlot(2, sample(5, 'pastillas_chiquitolina'), storage);
    expect(SaveManager.load(storage)?.inventory).toEqual(['pastillas_chiquitolina']);
  });

  it('deletes one slot without clearing the rest', () => {
    const storage = memoryStorage();
    SaveManager.saveToSlot(0, sample(1, 'chipote_chillon'), storage);
    SaveManager.saveToSlot(3, sample(2, 'antenitas_vinil'), storage);
    expect(SaveManager.deleteSlot(0, storage)).toBe(true);
    expect(SaveManager.loadSlot(0, storage)).toBeNull();
    expect(SaveManager.hasSave(storage)).toBe(true);
    expect(SaveManager.loadSlot(3, storage)?.inventory).toEqual(['antenitas_vinil']);
  });
});
