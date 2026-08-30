// @Architecture(descriptionShort="Unit tests for investigation return after adjournment", type="test", icon="share")
import { describe, expect, it, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { getCaseScript } from '../../src/case/index.js';
import { handleAdjournment } from '../../src/engine/Private/AdjournmentHandler.js';
import { SCENE_FADE_MS } from '../../src/engine/Private/SceneFade.js';
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
    const queued: unknown[] = [];
    const investigation = new InvestigationController({
      dom, state, script: case2, soundEngine, midiComposer,
      onQueueDialogue: (dlg) => { queued.push(dlg); }
    });
    state.beginNewCase(case2);
    dom.bgEl.style.backgroundImage = "url('assets/bg_judge.jpg')";
    dom.charSpriteEl.classList.remove('hidden');
    dom.courtFurnitureContainerEl.classList.remove('hidden');
    dom.gameScreen.dataset.stageFrame = 'bench-stand';
    dom.dialogueTextEl.textContent = 'Última línea del juicio';
    dom.btnInvTrial.classList.remove('disabled');
    dom.btnInvTrial.classList.add('pulse-glow');

    handleAdjournment(investigation, 'oficina_postal', dom.flashEl);
    expect(state.currentLocation).not.toBe('oficina_postal');
    expect(queued).toHaveLength(0);
    expect(dom.bgEl.style.backgroundImage).toContain('bg_judge.jpg');

    vi.advanceTimersByTime(SCENE_FADE_MS);
    expect(state.currentLocation).toBe('oficina_postal');
    expect(dom.bgEl.style.backgroundImage).toContain('bg_postal.jpg');
    expect(dom.charSpriteEl.classList.contains('hidden')).toBe(true);
    expect(dom.courtFurnitureContainerEl.classList.contains('hidden')).toBe(true);
    expect(dom.gameScreen.dataset.stageFrame).toBe('plain');
    expect(dom.dialogueTextEl.textContent).toBe('');
    expect(dom.btnInvTrial.classList.contains('disabled')).toBe(true);
    expect(dom.btnInvTrial.classList.contains('pulse-glow')).toBe(false);
    expect(queued).toHaveLength(0);

    vi.advanceTimersByTime(SCENE_FADE_MS);
    expect(queued).toHaveLength(1);
  });
});
