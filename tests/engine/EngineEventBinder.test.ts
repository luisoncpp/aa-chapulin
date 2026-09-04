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
  let startedCase2 = false;
  let startedCase4 = false;
  let advanced = false;
  let courtRecordOpened = false;
  let presentedFromModal = false;
  let historyOpened = false;

  beforeEach(() => {
    dom = setupDomHarness();
    state = new GameStateManager();
    const fakeCtx = new FakeAudioContext();
    soundEngineInstance = new SoundEngine();
    soundEngineInstance.init(fakeCtx as unknown as AudioContext);
    midiComposerInstance = new MidiMusicComposer(soundEngineInstance);

    startedGame = false;
    startedCase2 = false;
    startedCase4 = false;
    advanced = false;
    courtRecordOpened = false;
    presentedFromModal = false;
    historyOpened = false;

    investigation = new InvestigationController({
      dom,
      state,
      script: CASE_SCRIPT,
      soundEngine: soundEngineInstance,
      midiComposer: midiComposerInstance,
      onQueueDialogue: () => {}
    });

    trial = new TrialController({
      dom,
      state,
      script: CASE_SCRIPT,
      soundEngine: soundEngineInstance,
      midiComposer: midiComposerInstance,
      onQueueDialogue: () => {},
      onRenderLine: () => {},
      onOpenCourtRecord: () => {}
    });

    EngineEventBinder.bind({
      dom,
      soundEngine: soundEngineInstance,
      investigation,
      trial,
      onStartGame: () => { startedGame = true; },
      onStartCase2: () => { startedCase2 = true; },
      onStartCase4: () => { startedCase4 = true; },
      onAdvance: () => { advanced = true; },
      onOpenCourtRecord: () => { courtRecordOpened = true; },
      onPresentFromModal: () => { presentedFromModal = true; },
      onOpenHistory: () => { historyOpened = true; }
    });
  });

  it('dispatches start game and audio mute toggle events', () => {
    document.getElementById('btn-start-game')?.click();
    expect(startedGame).toBe(true);
    document.getElementById('btn-start-case2')?.click();
    expect(startedCase2).toBe(true);
    document.getElementById('btn-start-case4')?.click();
    expect(startedCase4).toBe(true);

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

  it('dispatches message history open and close events', () => {
    dom.btnHistory!.click();
    expect(historyOpened).toBe(true);

    dom.historyModalEl!.classList.remove('hidden');
    dom.btnCloseHistory!.click();
    expect(dom.historyModalEl!.classList.contains('hidden')).toBe(true);
  });

  it('closes the message history on Escape', () => {
    dom.historyModalEl!.classList.remove('hidden');
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' }));
    expect(dom.historyModalEl!.classList.contains('hidden')).toBe(true);
  });

  it('does not advance the scene while a modal is open', () => {
    dom.historyModalEl!.classList.remove('hidden');
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space' }));
    expect(advanced).toBe(false);

    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' }));
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space' }));
    expect(advanced).toBe(true);
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

    const openMoveSpy = vi.spyOn(investigation, 'openMoveMenu');
    document.getElementById('btn-inv-move')?.click();
    expect(openMoveSpy).toHaveBeenCalled();

    document.getElementById('btn-close-talk')?.click();
    expect(dom.talkOptionsModalEl.classList.contains('hidden')).toBe(true);

    document.getElementById('btn-close-move')?.click();
    expect(dom.moveLocationsModalEl.classList.contains('hidden')).toBe(true);
  });

  it('dispatches trial actions: start trial (only when enabled), press, present, prev, next', () => {
    const startTrialSpy = vi.spyOn(trial, 'startTrial');

    // Button is disabled initially; clicking must not start trial
    expect(dom.btnInvTrial.classList.contains('disabled')).toBe(true);
    dom.btnInvTrial.click();
    expect(startTrialSpy).not.toHaveBeenCalled();

    // When enabled, clicking starts trial
    dom.btnInvTrial.classList.remove('disabled');
    dom.btnInvTrial.disabled = false;
    dom.btnInvTrial.click();
    expect(startTrialSpy).toHaveBeenCalledTimes(1);

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
