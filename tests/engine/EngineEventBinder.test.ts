// @Architecture(descriptionShort="Unit tests for DOM event listeners and keyboard shortcuts", type="test", icon="plug")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { CASE_SCRIPT } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { EngineEventBinder } from '../../src/engine/Private/EngineEventBinder.js';
import { InvestigationController } from '../../src/engine/Private/InvestigationController.js';
import { TrialController } from '../../src/engine/Private/TrialController.js';
import { GameStateManager } from '../../src/state/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('EngineEventBinder', () => {
  let dom: DomElements;
  let state: GameStateManager;
  let soundEngineInstance: SoundEngine;
  let midiComposerInstance: MidiMusicComposer;
  let investigation: InvestigationController;
  let trial: TrialController;

  let startedGame = false;
  let advanced = false;
  let courtRecordOpened = false;
  let presentedFromModal = false;

  beforeEach(() => {
    dom = setupDomHarness();
    state = new GameStateManager();
    const fakeCtx = new FakeAudioContext();
    soundEngineInstance = new SoundEngine();
    soundEngineInstance.init(fakeCtx as unknown as AudioContext);
    midiComposerInstance = new MidiMusicComposer(soundEngineInstance);

    startedGame = false;
    advanced = false;
    courtRecordOpened = false;
    presentedFromModal = false;

    investigation = new InvestigationController(
      dom, state, CASE_SCRIPT, soundEngineInstance, midiComposerInstance,
      () => {}
    );

    trial = new TrialController(
      dom, state, CASE_SCRIPT, soundEngineInstance, midiComposerInstance,
      () => {}, () => {}, () => {}
    );

    EngineEventBinder.bind({
      dom,
      investigation,
      trial,
      onStartGame: () => { startedGame = true; },
      onAdvance: () => { advanced = true; },
      onOpenCourtRecord: () => { courtRecordOpened = true; },
      onPresentFromModal: () => { presentedFromModal = true; }
    });
  });

  it('dispatches start game and audio mute toggle events', () => {
    document.getElementById('btn-start-game')?.click();
    expect(startedGame).toBe(true);

    dom.btnAudioToggleEl.click();
    expect(dom.btnAudioToggleEl.textContent).toBe('🔇');

    dom.btnAudioToggleEl.click();
    expect(dom.btnAudioToggleEl.textContent).toBe('🔊');
  });

  it('dispatches advance on dialogue box click and keyboard press', () => {
    dom.dialogueBoxEl.click();
    expect(advanced).toBe(true);

    advanced = false;
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space' }));
    expect(advanced).toBe(true);

    advanced = false;
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Enter' }));
    expect(advanced).toBe(true);

    advanced = false;
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyA' }));
    expect(advanced).toBe(false);
  });

  it('dispatches court record open, close, and present events', () => {
    document.getElementById('btn-court-record')?.click();
    expect(courtRecordOpened).toBe(true);

    dom.presentBtnEl.click();
    expect(presentedFromModal).toBe(true);

    document.getElementById('btn-close-record')?.click();
    expect(dom.courtRecordModalEl.classList.contains('hidden')).toBe(true);
  });

  it('dispatches investigation actions: examine, talk, move', () => {
    const startExamineSpy = vi.spyOn(investigation, 'startExamineMode');
    document.getElementById('btn-inv-examine')?.click();
    expect(startExamineSpy).toHaveBeenCalled();

    const exitExamineSpy = vi.spyOn(investigation, 'exitExamineMode');
    document.getElementById('btn-examine-back')?.click();
    expect(exitExamineSpy).toHaveBeenCalled();

    const openTalkSpy = vi.spyOn(investigation, 'openTalkMenu');
    document.getElementById('btn-inv-talk')?.click();
    expect(openTalkSpy).toHaveBeenCalled();

    const toggleLocationSpy = vi.spyOn(investigation, 'toggleLocation');
    document.getElementById('btn-inv-move')?.click();
    expect(toggleLocationSpy).toHaveBeenCalled();

    document.getElementById('btn-close-talk')?.click();
    expect(dom.talkOptionsModalEl.classList.contains('hidden')).toBe(true);
  });

  it('dispatches trial actions: start trial, press, present, prev, next', () => {
    const startTrialSpy = vi.spyOn(trial, 'startTrial');
    document.getElementById('btn-inv-trial')?.click();
    expect(startTrialSpy).toHaveBeenCalled();

    const pressSpy = vi.spyOn(trial, 'handlePressStatement');
    document.getElementById('btn-press')?.click();
    expect(pressSpy).toHaveBeenCalled();

    courtRecordOpened = false;
    document.getElementById('btn-trial-present')?.click();
    expect(courtRecordOpened).toBe(true);

    const prevSpy = vi.spyOn(trial, 'prevStatement');
    document.getElementById('btn-prev-statement')?.click();
    expect(prevSpy).toHaveBeenCalled();

    const nextSpy = vi.spyOn(trial, 'nextStatement');
    document.getElementById('btn-next-statement')?.click();
    expect(nextSpy).toHaveBeenCalled();
  });
});
