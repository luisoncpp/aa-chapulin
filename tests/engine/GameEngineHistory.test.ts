// @Architecture(descriptionShort="Integration tests for the message history HUD button", type="test", icon="layout")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { CASE_SCRIPT } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { GameEngine } from '../../src/engine/index.js';
import { GameStateManager } from '../../src/state/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('GameEngine message history', () => {
  let dom: DomElements;
  let engine: GameEngine;

  beforeEach(() => {
    vi.useFakeTimers();
    dom = setupDomHarness();
    const soundEngine = new SoundEngine();
    soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
    engine = new GameEngine({
      dom,
      state: new GameStateManager(),
      script: CASE_SCRIPT,
      soundEngine,
      midiComposer: new MidiMusicComposer(soundEngine)
    });
    engine.init();
  });

  function historyTexts(): string[] {
    return Array.from(dom.historyListEl!.querySelectorAll('.history-text')).map((el) => el.textContent ?? '');
  }

  it('logs queued lines and opens the backlog from the HUD button', () => {
    // The engine must already be running: a first advance would boot the case.
    engine.startGame('case1');
    vi.advanceTimersByTime(2000);
    engine.queueDialogue([
      { speaker: 'DEFENSA', text: 'Uno.' },
      { speaker: 'DEFENSA', text: 'Dos.' }
    ]);
    vi.advanceTimersByTime(2000);
    engine.handleAdvance();
    vi.advanceTimersByTime(2000);

    dom.btnHistory!.click();
    expect(dom.historyModalEl!.classList.contains('hidden')).toBe(false);
    expect(historyTexts().slice(-2)).toEqual(['Uno.', 'Dos.']);
  });

  it('logs cross-examination statements rendered outside the queue', () => {
    engine.renderDialogueLine({ speaker: 'PETERETE', text: 'Yo repartía cartas.' });
    vi.advanceTimersByTime(2000);

    dom.btnHistory!.click();
    expect(historyTexts()).toEqual(['Yo repartía cartas.']);
  });

  it('starts a fresh backlog when a new case begins', () => {
    engine.renderDialogueLine({ speaker: 'DEFENSA', text: 'Caso viejo.' });
    vi.advanceTimersByTime(2000);
    engine.startGame('case1');
    vi.advanceTimersByTime(2000);

    dom.btnHistory!.click();
    expect(historyTexts()).not.toContain('Caso viejo.');
  });
});
