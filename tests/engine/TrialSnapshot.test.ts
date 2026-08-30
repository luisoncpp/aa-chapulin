// @Architecture(descriptionShort="Tests for trial snapshot restore and live script swap", type="test", icon="panel")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { CASE_SCRIPT, getCaseScript } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { TrialController } from '../../src/engine/Private/TrialController.js';
import { GameStateManager } from '../../src/state/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('TrialController snapshot and setScript', () => {
  let dom: DomElements;
  let state: GameStateManager;
  let controller: TrialController;
  let soundEngine: SoundEngine;
  let midiComposer: MidiMusicComposer;

  beforeEach(() => {
    vi.useFakeTimers();
    dom = setupDomHarness();
    state = new GameStateManager();
    soundEngine = new SoundEngine();
    soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
    midiComposer = new MidiMusicComposer(soundEngine);
    controller = new TrialController({
      dom,
      state,
      script: CASE_SCRIPT,
      soundEngine,
      midiComposer,
      onQueueDialogue: (_dlg, cb) => { if (cb) cb(); },
      onRenderLine: () => {},
      onOpenCourtRecord: () => {}
    });
  });

  it('starts a fresh trial when the snapshot is missing or idle', () => {
    controller.restoreTrialSnapshot();
    expect(state.mode).toBe('TRIAL');
    expect(controller.phase).toBe('TESTIMONY');
    expect(controller.currentTestimony).toBe(CASE_SCRIPT.trial.testimony1);

    controller.restoreTrialSnapshot({
      phase: 'IDLE',
      statementIdx: 0
    });
    expect(controller.currentTestimony).toBe(CASE_SCRIPT.trial.testimony1);
  });

  it('restores climax phase without opening testimony', () => {
    controller.restoreTrialSnapshot({ phase: 'CLIMAX', statementIdx: 0 });
    expect(controller.phase).toBe('CLIMAX');
    expect(controller.currentTestimony).toBeNull();
  });

  it('restores a testimony snapshot including trial day and statement index', () => {
    const case2 = getCaseScript('es', 'case2');
    const day2 = new TrialController({
      dom,
      state,
      script: case2,
      soundEngine,
      midiComposer,
      onQueueDialogue: (_dlg, cb) => { if (cb) cb(); },
      onRenderLine: () => {},
      onOpenCourtRecord: () => {}
    });
    day2.restoreTrialSnapshot({
      phase: 'TESTIMONY',
      testimonyKey: 'testimony2',
      statementIdx: 1,
      trialDay: 2
    });
    expect(state.trialDay).toBe(2);
    expect(day2.currentTestimony).toBe(case2.adjournment?.trial.testimony2);
    expect(day2.currentStatementIdx).toBe(1);
  });

  it('treats a testimony snapshot without a key as a full trial restart', () => {
    controller.restoreTrialSnapshot({
      phase: 'TESTIMONY',
      statementIdx: 2
    });
    expect(controller.currentTestimony).toBe(CASE_SCRIPT.trial.testimony1);
    expect(controller.currentStatementIdx).toBe(0);
  });

  it('rebinds the active testimony when the case script is swapped mid-cross-exam', () => {
    controller.setScript(CASE_SCRIPT);
    expect(controller.currentTestimony).toBeNull();

    controller.startTestimony('testimony1');
    const english = getCaseScript('en', 'case1');
    controller.setScript(english);
    expect(controller.currentTestimony).toBe(english.trial.testimony1);
  });
});
