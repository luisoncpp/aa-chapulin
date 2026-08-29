// @Architecture(descriptionShort="Unit tests for browser storage save manager and serializer", type="test", icon="database")
import { describe, expect, it, beforeEach } from 'vitest';
import {
  CURRENT_SAVE_VERSION,
  SAVE_STORAGE_KEY,
  SaveManager,
  type SaveData
} from '../../src/state/index.js';

class MockStorage implements Storage {
  private store = new Map<string, string>();

  public get length(): number {
    return this.store.size;
  }

  public clear(): void {
    this.store.clear();
  }

  public getItem(key: string): string | null {
    return this.store.get(key) ?? null;
  }

  public setItem(key: string, value: string): void {
    this.store.set(key, value);
  }

  public removeItem(key: string): void {
    this.store.delete(key);
  }

  public key(index: number): string | null {
    return Array.from(this.store.keys())[index] ?? null;
  }
}

describe('SaveManager', () => {
  let mockStorage: MockStorage;

  const validSaveData: SaveData = {
    version: CURRENT_SAVE_VERSION,
    timestamp: Date.now(),
    mode: 'INVESTIGATION',
    currentLocation: 'museum',
    language: 'es',
    health: 5,
    gameOver: false,
    inventory: ['insignia_abogado', 'chipote_chillon'],
    flags: {
      examined_pedestal: true,
      examined_armor: false,
      examined_vent: false,
      talked_florinda_crime: true,
      talked_florinda_suspect: false,
      presented_chiquitolina_florinda: false,
      visited_detention: false,
      talked_chapulin_reason: false,
      talked_chapulin_antenitas: false,
      ready_for_trial: false
    }
  };

  beforeEach(() => {
    mockStorage = new MockStorage();
  });

  it('saves and loads valid game data', () => {
    const saved = SaveManager.save(validSaveData, mockStorage);
    expect(saved).toBe(true);
    expect(SaveManager.hasSave(mockStorage)).toBe(true);

    const loaded = SaveManager.load(mockStorage);
    expect(loaded).not.toBeNull();
    expect(loaded?.mode).toBe('INVESTIGATION');
    expect(loaded?.currentLocation).toBe('museum');
    expect(loaded?.inventory).toEqual(['insignia_abogado', 'chipote_chillon']);
    expect(loaded?.flags.examined_pedestal).toBe(true);
  });

  it('clears existing save data', () => {
    SaveManager.save(validSaveData, mockStorage);
    expect(SaveManager.hasSave(mockStorage)).toBe(true);

    SaveManager.clear(mockStorage);
    expect(SaveManager.hasSave(mockStorage)).toBe(false);
    expect(SaveManager.load(mockStorage)).toBeNull();
  });

  it('returns null when loading corrupted JSON', () => {
    mockStorage.setItem(SAVE_STORAGE_KEY, '{ invalid JSON }');
    expect(SaveManager.load(mockStorage)).toBeNull();
    expect(SaveManager.hasSave(mockStorage)).toBe(false);
  });

  it('rejects save data with mismatched version or invalid fields', () => {
    const invalidVersion = { ...validSaveData, version: 999 };
    mockStorage.setItem(SAVE_STORAGE_KEY, JSON.stringify(invalidVersion));
    expect(SaveManager.load(mockStorage)).toBeNull();

    const invalidMode = { ...validSaveData, mode: 'INVALID_MODE' };
    mockStorage.setItem(SAVE_STORAGE_KEY, JSON.stringify(invalidMode));
    expect(SaveManager.load(mockStorage)).toBeNull();

    const invalidHealth = { ...validSaveData, health: -1 };
    mockStorage.setItem(SAVE_STORAGE_KEY, JSON.stringify(invalidHealth));
    expect(SaveManager.load(mockStorage)).toBeNull();

    const invalidLang = { ...validSaveData, language: 'fr' };
    mockStorage.setItem(SAVE_STORAGE_KEY, JSON.stringify(invalidLang));
    expect(SaveManager.load(mockStorage)).toBeNull();
  });

  it('handles storage throw gracefully on save or load', () => {
    const throwingStorage = {
      getItem: () => { throw new Error('SecurityError'); },
      setItem: () => { throw new Error('QuotaExceededError'); },
      removeItem: () => { throw new Error('SecurityError'); },
      clear: () => {},
      key: () => null,
      length: 0
    } as Storage;

    expect(SaveManager.save(validSaveData, throwingStorage)).toBe(false);
    expect(SaveManager.load(throwingStorage)).toBeNull();
    expect(() => SaveManager.clear(throwingStorage)).not.toThrow();
  });

  it('uses window.localStorage when no custom storage is passed', () => {
    window.localStorage.clear();
    expect(SaveManager.save({ ...validSaveData, language: 'en' })).toBe(true);
    const loaded = SaveManager.load();
    expect(loaded?.language).toBe('en');
    expect(SaveManager.hasSave()).toBe(true);
    SaveManager.clear();
    expect(SaveManager.hasSave()).toBe(false);
  });

  it('returns false when localStorage is missing or throws on access', () => {
    const original = window.localStorage;
    Object.defineProperty(window, 'localStorage', {
      configurable: true,
      get: () => { throw new Error('denied'); }
    });
    expect(SaveManager.save(validSaveData)).toBe(false);
    expect(SaveManager.load()).toBeNull();
    expect(() => SaveManager.clear()).not.toThrow();
    Object.defineProperty(window, 'localStorage', { configurable: true, value: undefined });
    expect(SaveManager.save(validSaveData)).toBe(false);
    Object.defineProperty(window, 'localStorage', { configurable: true, value: original });
  });

  it('rejects payloads that fail schema checks', () => {
    expect(SaveManager.isValidSave(null)).toBe(false);
    expect(SaveManager.isValidSave('nope')).toBe(false);
    expect(SaveManager.isValidSave({ ...validSaveData, timestamp: 'now' })).toBe(false);
    expect(SaveManager.isValidSave({ ...validSaveData, inventory: {} })).toBe(false);
    expect(SaveManager.isValidSave({ ...validSaveData, flags: null })).toBe(false);
    expect(SaveManager.isValidSave({ ...validSaveData, unlockedLocations: 'museum' })).toBe(false);
    expect(SaveManager.isValidSave({ ...validSaveData, language: 'en', unlockedLocations: ['museum'] })).toBe(true);
    mockStorage.setItem(SAVE_STORAGE_KEY, '');
    expect(SaveManager.load(mockStorage)).toBeNull();
  });
});
