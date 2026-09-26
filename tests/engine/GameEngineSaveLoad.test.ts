// @Architecture(descriptionShort="Integration tests for GameEngine save and load game feature", type="test", icon="layout")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { CASE_SCRIPT } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { GameEngine } from '../../src/engine/index.js';
import { SCENE_FADE_MS } from '../../src/engine/Private/SceneFade.js';
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

  function clickSlot(index: number): void {
    const buttons = dom.saveSlotListEl?.querySelectorAll<HTMLButtonElement>('.save-slot-main');
    buttons?.[index]?.click();
  }

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
    state.currentLocation = 'detention';

    // Click in-game Load button, then the occupied slot
    dom.btnLoadGame?.click();
    clickSlot(0);

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
    vi.advanceTimersByTime(SCENE_FADE_MS * 2);

    // Advance through trial intro dialogue to reach testimony
    for (let i = 0; i < CASE_SCRIPT.trial.intro.length; i++) {
      engine.handleAdvance();
      engine.handleAdvance();
    }

    // Move to statement 2 in testimony 1
    dom.btnNextStatement.click();
    dom.btnNextStatement.click();

    // Save game during trial into the first empty slot
    dom.btnSaveGame?.click();
    clickSlot(0);
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

  it('drops the message history on load so the backlog matches the restored scene', () => {
    engine.startGame();
    vi.advanceTimersByTime(400);
    engine.renderDialogueLine({ speaker: 'DEFENSA', text: 'Línea de la sesión previa.' });
    engine.saveGame();

    dom.btnLoadGame?.click();
    clickSlot(0);
    vi.advanceTimersByTime(400);

    dom.btnHistory?.click();
    const texts = Array.from(dom.historyListEl!.querySelectorAll('.history-text')).map((el) => el.textContent);
    expect(texts).not.toContain('Línea de la sesión previa.');
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

    // Initial save: only the detention centre is unlocked
    expect(state.unlockedLocations).toEqual(['detention']);
    engine.saveGame();

    // Modify state
    state.unlockLocation('museo_sala2');
    expect(state.unlockedLocations).toEqual(['detention', 'museo_sala2']);

    // Load restores initial state where only the detention centre was unlocked
    engine.loadGame();
    expect(state.unlockedLocations).toEqual(['detention']);

    // Unlock the museum and save again
    state.unlockLocation('museo_sala2');
    engine.saveGame();

    // Reset state
    state.unlockedLocations = ['detention'];

    // Load restores both unlocked locations
    engine.loadGame();
    expect(state.unlockedLocations).toEqual(['detention', 'museo_sala2']);
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
    expect(state.unlockedLocations).toContain('detention');
    expect(state.unlockedLocations).toContain('detention');
  });

  it('saves through the slot list into an empty row and closes it', () => {
    engine.startGame();
    vi.advanceTimersByTime(400);
    state.addEvidence('chipote_chillon');

    dom.btnSaveGame?.click();
    clickSlot(1);

    expect(SaveManager.loadSlot(1, storage)?.inventory).toContain('chipote_chillon');
    expect(SaveManager.loadSlot(0, storage)).toBeNull();
    expect(dom.saveSlotModalEl?.classList.contains('hidden')).toBe(true);
  });

  it('keeps the occupied slot until overwrite is confirmed', () => {
    engine.startGame();
    vi.advanceTimersByTime(400);
    state.addEvidence('chipote_chillon');
    engine.saveGame();
    state.addEvidence('antenitas_vinil');

    dom.btnSaveGame?.click();
    clickSlot(0);
    expect(SaveManager.loadSlot(0, storage)?.inventory).not.toContain('antenitas_vinil');

    dom.saveSlotListEl?.querySelector<HTMLButtonElement>('.save-slot-yes')?.click();
    expect(SaveManager.loadSlot(0, storage)?.inventory).toContain('antenitas_vinil');
  });

  it('deletes a slot and hides Continue when none remain', () => {
    state.addEvidence('chipote_chillon');
    engine.saveGame();
    expect(dom.btnContinueGame?.classList.contains('hidden')).toBe(false);

    dom.btnLoadGame?.click();
    dom.saveSlotListEl?.querySelector<HTMLButtonElement>('.save-slot-delete')?.click();
    dom.saveSlotListEl?.querySelector<HTMLButtonElement>('.save-slot-yes')?.click();

    expect(SaveManager.hasSave(storage)).toBe(false);
    expect(dom.btnContinueGame?.classList.contains('hidden')).toBe(true);
  });

  it('continues from the newest slot when an earlier slot is older', () => {
    engine.startGame();
    vi.advanceTimersByTime(400);
    const older = state.exportState();
    older.timestamp = 1;
    older.inventory = ['insignia_abogado'];
    SaveManager.saveToSlot(0, older, storage);

    state.addEvidence('pastillas_chiquitolina');
    const newer = state.exportState();
    newer.timestamp = older.timestamp + 1;
    SaveManager.saveToSlot(2, newer, storage);
    state.inventory = ['insignia_abogado'];
    engine.updateContinueButton();

    dom.btnContinueGame?.click();
    vi.advanceTimersByTime(400);

    expect(state.hasEvidence('pastillas_chiquitolina')).toBe(true);
  });

  it('redraws the open slot list in the new language', () => {
    engine.startGame();
    vi.advanceTimersByTime(400);
    engine.saveGame();
    dom.btnSaveGame?.click();

    expect(dom.saveSlotTitleEl?.textContent).toContain('GUARDAR');
    expect(dom.saveSlotListEl?.textContent).toContain('Centro de Detención');

    engine.setLanguage('en');
    expect(dom.saveSlotTitleEl?.textContent).toContain('SAVE');
    expect(dom.saveSlotListEl?.textContent).toContain('Detention Centre');
  });
});
