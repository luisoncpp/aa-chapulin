// @Architecture(descriptionShort="Continue opens the slot list without importing every saved case", type="test", icon="database")
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import * as CaseLoader from '../../src/case/loadCaseScript.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { GameEngine } from '../../src/engine/index.js';
import { CURRENT_SAVE_VERSION, SaveManager, type SaveData } from '../../src/state/index.js';
import type { CaseId } from '../../src/types/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

class MemoryStorage implements Storage {
  private store = new Map<string, string>();
  public get length(): number { return this.store.size; }
  public clear(): void { this.store.clear(); }
  public getItem(key: string): string | null { return this.store.get(key) ?? null; }
  public setItem(key: string, value: string): void { this.store.set(key, value); }
  public removeItem(key: string): void { this.store.delete(key); }
  public key(index: number): string | null { return Array.from(this.store.keys())[index] ?? null; }
}

function investigationSave(caseId: CaseId, timestamp: number): SaveData {
  return {
    version: CURRENT_SAVE_VERSION,
    timestamp,
    mode: 'INVESTIGATION',
    currentLocation: 'detention',
    language: 'es',
    health: 5,
    gameOver: false,
    inventory: ['insignia_abogado'],
    flags: { ready_for_trial: false },
    caseId
  };
}

describe('Continue loads one case', () => {
  let dom: DomElements;
  let storage: MemoryStorage;
  let ensure: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    dom = setupDomHarness();
    storage = new MemoryStorage();
    SaveManager.saveToSlot(0, investigationSave('case2', 1), storage);
    SaveManager.saveToSlot(2, investigationSave('case3', 2), storage);
    const soundEngine = new SoundEngine();
    soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
    const engine = new GameEngine({
      dom,
      soundEngine,
      midiComposer: new MidiMusicComposer(soundEngine),
      storage
    });
    engine.init();
    ensure = vi.spyOn(CaseLoader, 'ensureCasePair');
  });

  afterEach(() => {
    ensure.mockRestore();
  });

  it('imports only the case in the slot the player picks', async () => {
    expect(dom.btnContinueGame?.classList.contains('hidden')).toBe(false);
    dom.btnContinueGame?.click();
    expect(dom.saveSlotModalEl?.classList.contains('hidden')).toBe(false);
    expect(ensure).not.toHaveBeenCalled();

    const rows = dom.saveSlotListEl?.querySelectorAll<HTMLButtonElement>('.save-slot-main');
    rows?.[2]?.click();
    await vi.waitFor(() => {
      expect(ensure).toHaveBeenCalledTimes(1);
    });
    expect(ensure).toHaveBeenCalledWith('case3');
  });
});
