// @Architecture(descriptionShort="Unit tests for investigation return after adjournment", type="test", icon="share")
import { describe, expect, it, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { getCaseScript } from '../../src/case/index.js';
import { handleAdjournment } from '../../src/engine/Private/AdjournmentHandler.js';
import { InvestigationController } from '../../src/engine/Private/InvestigationController.js';
import { GameStateManager } from '../../src/state/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('AdjournmentHandler', () => {
  it('resets the trial button and starts investigation at the adjournment location', () => {
    vi.useFakeTimers();
    const dom = setupDomHarness();
    const state = new GameStateManager();
    const soundEngine = new SoundEngine();
    soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
    const midiComposer = new MidiMusicComposer(soundEngine);
    const case2 = getCaseScript('es', 'case2');
    const investigation = new InvestigationController({
      dom, state, script: case2, soundEngine, midiComposer,
      onQueueDialogue: () => {}
    });
    state.beginNewCase(case2);
    dom.btnInvTrial.classList.remove('disabled');
    dom.btnInvTrial.classList.add('pulse-glow');

    handleAdjournment(investigation, 'oficina_postal');

    expect(state.currentLocation).toBe('oficina_postal');
    expect(dom.btnInvTrial.classList.contains('disabled')).toBe(true);
    expect(dom.btnInvTrial.classList.contains('pulse-glow')).toBe(false);
  });
});
