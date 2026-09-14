// @Architecture(descriptionShort="Save schema v1 to v2 migration for the character record", type="test", icon="database")
/**
 * Spec §6.3: bumping `CURRENT_SAVE_VERSION` must not erase the saves of the
 * cases that shipped before the Acta de Personajes existed.
 */
import { describe, expect, it } from 'vitest';
import { CURRENT_SAVE_VERSION, GameStateManager, SaveManager, type SaveData } from '../../src/state/index.js';

function memoryStorage(): Storage {
  const map = new Map<string, string>();
  return {
    get length() { return map.size; },
    clear: () => map.clear(),
    getItem: (k: string) => map.get(k) ?? null,
    key: (i: number) => [...map.keys()][i] ?? null,
    removeItem: (k: string) => { map.delete(k); },
    setItem: (k: string, v: string) => { map.set(k, v); }
  } as Storage;
}

/** A literal v1 payload, exactly as the shipped cases wrote it. */
const V1_PAYLOAD = {
  version: 1,
  timestamp: 1_700_000_000_000,
  mode: 'INVESTIGATION',
  currentLocation: 'hotel_lobby',
  unlockedLocations: ['detention', 'hotel_lobby'],
  language: 'es',
  health: 4,
  gameOver: false,
  inventory: ['insignia_abogado', 'plano_hotel'],
  flags: { ready_for_trial: false },
  evidenceUpdateStage: { plano_hotel: 1 },
  caseId: 'case4',
  trialDay: 1
};

describe('SaveManager v1 → v2 migration', () => {
  it('loads a v1 payload and fills in the empty character record', () => {
    const storage = memoryStorage();
    storage.setItem('ace_attorney_save_data', JSON.stringify(V1_PAYLOAD));

    const loaded = SaveManager.load(storage);
    expect(loaded).not.toBeNull();
    expect(loaded!.version).toBe(CURRENT_SAVE_VERSION);
    expect(loaded!.profiles).toEqual([]);
    expect(loaded!.profileUpdateStage).toEqual({});
    // Nothing else about the old save changes.
    expect(loaded!.inventory).toEqual(['insignia_abogado', 'plano_hotel']);
    expect(loaded!.unlockedLocations).toEqual(['detention', 'hotel_lobby']);
  });

  it('rehydrates a v1 save into a state with no profiles', () => {
    const state = new GameStateManager();
    state.restoreState(SaveManager.load(storageWith(V1_PAYLOAD))!);
    expect(state.profiles.owned).toEqual([]);
    expect(state.currentLocation).toBe('hotel_lobby');
    expect(state.health).toBe(4);
  });

  it('round-trips profiles at the current version', () => {
    const storage = memoryStorage();
    const state = new GameStateManager();
    state.caseId = 'case1';
    state.setLanguage('es');
    state.addProfile('perfil_tripaseca');
    state.updateProfile('perfil_tripaseca');
    SaveManager.save(state.exportState(), storage);

    const restored = new GameStateManager();
    restored.caseId = 'case1';
    restored.restoreState(SaveManager.load(storage)!);
    expect(restored.profiles.owned).toEqual(['perfil_tripaseca']);
    expect(restored.profiles.getStage('perfil_tripaseca')).toBe(1);
  });

  it('rejects a payload from a future schema version', () => {
    const storage = storageWith({ ...V1_PAYLOAD, version: CURRENT_SAVE_VERSION + 1 });
    expect(SaveManager.load(storage)).toBeNull();
  });
});

function storageWith(payload: unknown): Storage {
  const storage = memoryStorage();
  storage.setItem('ace_attorney_save_data', JSON.stringify(payload as SaveData));
  return storage;
}
