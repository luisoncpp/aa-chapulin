// @Architecture(descriptionShort="Integration tests for GameEngine save and load game feature", type="test", icon="layout")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { CASE_SCRIPT } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { GameEngine } from '../../src/engine/index.js';
import { GameStateManager, SaveManager } from '../../src/state/index.js';
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

describe('GameEngine Save and Load Feature', () => {
  let dom: DomElements;
  let state: GameStateManager;
  let soundEngineInstance: SoundEngine;
  let midiComposerInstance: MidiMusicComposer;
  let engine: GameEngine;
  let storage: MemoryStorage;

  beforeEach(() => {
    vi.useFakeTimers();
    dom = setupDomHarness();
    state = new GameStateManager();
    storage = new MemoryStorage();
    const fakeCtx = new FakeAudioContext();
    soundEngineInstance = new SoundEngine();
    soundEngineInstance.init(fakeCtx as unknown as AudioContext);
    midiComposerInstance = new MidiMusicComposer(soundEngineInstance);

    engine = new GameEngine({
      dom,
      state,
      script: CASE_SCRIPT,
      soundEngine: soundEngineInstance,
      midiComposer: midiComposerInstance,
      storage
    });
    engine.init();
  });

  it('saves game progress in investigation mode and shows notification', () => {
    engine.startGame();
    vi.advanceTimersByTime(400);

    state.addEvidence('chipote_chillon');
    state.flags.examined_pedestal = true;
    state.health = 4;

    const saved = engine.saveGame();
    expect(saved).toBe(true);
    expect(dom.gameNotificationEl.textContent).toContain('guardada');
    expect(SaveManager.hasSave(storage)).toBe(true);
  });

  it('loads game from in-game HUD load button and restores evidence and flags', () => {
    engine.startGame();
    vi.advanceTimersByTime(400);

    state.addEvidence('chipote_chillon');
    state.flags.talked_florinda_crime = true;
    state.currentLocation = 'detention';
    engine.saveGame();

    // Reset state to simulate fresh or altered session
    state.inventory = ['insignia_abogado'];
    state.flags.talked_florinda_crime = false;
    state.currentLocation = 'museum';

    // Click in-game Load button
    dom.btnLoadGame?.click();

    expect(state.hasEvidence('chipote_chillon')).toBe(true);
    expect(state.flags.talked_florinda_crime).toBe(true);
    expect(state.currentLocation).toBe('detention');
    expect(dom.gameNotificationEl.textContent).toContain('cargada');
  });

  it('displays continue button on splash screen when save exists and resumes game on click', () => {
    state.addEvidence('pastillas_chiquitolina');
    state.currentLocation = 'detention';
    engine.saveGame();

    // Verify continue button is visible
    expect(dom.btnContinueGame?.classList.contains('hidden')).toBe(false);

    // Click continue on splash card
    dom.btnContinueGame?.click();
    vi.advanceTimersByTime(400);

    expect(dom.startSplashOverlayEl.classList.contains('hidden')).toBe(true);
    expect(state.hasEvidence('pastillas_chiquitolina')).toBe(true);
    expect(state.currentLocation).toBe('detention');
  });

  it('saves and restores cross-examination state in trial mode', () => {
    engine.startTrialDebug();
    vi.advanceTimersByTime(400);

    // Advance through trial intro dialogue to reach testimony
    for (let i = 0; i < CASE_SCRIPT.trial.intro.length; i++) {
      engine.handleAdvance();
      engine.handleAdvance();
    }

    // Move to statement 2 in testimony 1
    dom.btnNextStatement.click();
    dom.btnNextStatement.click();

    // Save game during trial
    dom.btnSaveGame?.click();
    expect(SaveManager.hasSave(storage)).toBe(true);

    // Simulate new session loading save in trial
    const freshState = new GameStateManager();
    const freshEngine = new GameEngine({
      dom,
      state: freshState,
      script: CASE_SCRIPT,
      soundEngine: soundEngineInstance,
      midiComposer: midiComposerInstance,
      storage
    });
    freshEngine.init();

    const loaded = freshEngine.loadGame();
    expect(loaded).toBe(true);
    expect(freshState.mode).toBe('TRIAL');
    expect(freshState.hasEvidence('chipote_chillon')).toBe(true);
  });

  it('shows notification when loading with no save file present', () => {
    SaveManager.clear(storage);
    const loaded = engine.loadGame();
    expect(loaded).toBe(false);
    expect(dom.gameNotificationEl.textContent).toContain('No se encontró');
  });

  it('persists and restores unlocked locations across save and load cycles', () => {
    engine.startGame();
    vi.advanceTimersByTime(400);

    // Initial save: only museum is unlocked
    expect(state.unlockedLocations).toEqual(['museum']);
    engine.saveGame();

    // Modify state
    state.unlockLocation('detention');
    expect(state.unlockedLocations).toEqual(['museum', 'detention']);

    // Load restores initial state where only museum was unlocked
    engine.loadGame();
    expect(state.unlockedLocations).toEqual(['museum']);

    // Unlock detention and save again
    state.unlockLocation('detention');
    engine.saveGame();

    // Reset state
    state.unlockedLocations = ['museum'];

    // Load restores both unlocked locations
    engine.loadGame();
    expect(state.unlockedLocations).toEqual(['museum', 'detention']);
  });

  it('loads legacy save files without unlockedLocations safely', () => {
    const legacySave = {
      version: 1,
      timestamp: Date.now(),
      mode: 'INVESTIGATION',
      currentLocation: 'detention',
      language: 'es',
      health: 5,
      gameOver: false,
      inventory: ['insignia_abogado'],
      flags: { ready_for_trial: false }
    };
    storage.setItem('ace_attorney_save_data', JSON.stringify(legacySave));

    const loaded = engine.loadGame();
    expect(loaded).toBe(true);
    expect(state.unlockedLocations).toContain('museum');
    expect(state.unlockedLocations).toContain('detention');
  });
});
