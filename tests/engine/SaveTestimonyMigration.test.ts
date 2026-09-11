// @Architecture(descriptionShort="Legacy testimony snapshot migration checks", type="test", icon="database")
import { describe, expect, it, vi } from 'vitest';
import { CASE_SCRIPT_CASE0_ES } from '../../src/case/case0/index.js';
import { TrialController } from '../../src/engine/Private/TrialController.js';
import { GameStateManager } from '../../src/state/index.js';
import { SoundEngine, MidiMusicComposer } from '../../src/audio/index.js';
import { setupDomHarness } from '../fakes/DomHarness.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';

describe('legacy testimony snapshot migration', () => {
  it('maps testimony2 to index 1 while restoring a Case 0-compatible controller', () => {
    const dom = setupDomHarness();
    const soundEngine = new SoundEngine();
    soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
    const state = new GameStateManager();
    state.beginTrialOnlyCase(CASE_SCRIPT_CASE0_ES);
    const controller = new TrialController({
      dom, state, script: CASE_SCRIPT_CASE0_ES, soundEngine,
      midiComposer: new MidiMusicComposer(), onQueueDialogue: vi.fn(), onRenderLine: vi.fn(),
      onOpenCourtRecord: vi.fn()
    });
    controller.restoreTrialSnapshot({ phase: 'TESTIMONY', testimonyKey: 'testimony2', statementIdx: 0 });
    expect(controller.getTestimonyIndex()).toBe(1);
    expect(controller.currentTestimony).toBe(CASE_SCRIPT_CASE0_ES.trial.testimony2);
  });
});
