// @Architecture(descriptionShort="Regression tests for per-statement testimony cameras", type="test", icon="panel")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { CASE_SCRIPT } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { TrialController } from '../../src/engine/Private/TrialController.js';
import { VisualEffects } from '../../src/engine/Private/VisualEffects.js';
import { GameStateManager } from '../../src/state/index.js';
import type { CaseScript, Statement, Testimony } from '../../src/types/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

const WITNESS_BG = 'assets/bg_witness.webp';

const onTheStand: Statement = {
  id: 'fixture_1', speaker: 'SUPER SAM', pose: 'supersam_idle',
  text: 'I testify from the stand.', bg: WITNESS_BG, furniture: 'podium'
};
const atTheBench: Statement = {
  id: 'fixture_2', speaker: 'SUPER SAM', pose: 'supersam_idle', text: 'I speak from my bench.'
};

const fixtureTestimony: Testimony = {
  title: 'Fixture', witness: 'SUPER SAM', bgm: 'cross_exam_moderato', statements: [onTheStand, atTheBench]
};

function fixtureScript(): CaseScript {
  return { ...CASE_SCRIPT, trial: { ...CASE_SCRIPT.trial, testimony1: fixtureTestimony } };
}

describe('Testimony statement camera', () => {
  let dom: DomElements;
  let controller: TrialController;

  beforeEach(() => {
    vi.useFakeTimers();
    dom = setupDomHarness();
    const state = new GameStateManager();
    state.mode = 'TRIAL';
    const soundEngine = new SoundEngine();
    soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
    controller = new TrialController({
      dom, state, script: fixtureScript(), soundEngine,
      midiComposer: new MidiMusicComposer(soundEngine),
      onQueueDialogue: (_dlg, cb) => cb?.(),
      onRenderLine: (line) => VisualEffects.updateStagingForLine(dom, line, /*isTrialMode=*/true),
      onOpenCourtRecord: () => {}
    });
  });

  it('renders a statement on the camera it declares', () => {
    controller.startTestimony(0);
    expect(dom.bgEl.style.backgroundImage).toContain(WITNESS_BG);
    expect(dom.courtFurnitureContainerEl.dataset.furniture).toBe('podium');
  });

  it('keeps the speaker default camera when the statement declares none', () => {
    controller.startTestimony(0);
    controller.nextStatement();
    const speakerDefault = VisualEffects.inferTrialBackground(atTheBench.speaker);
    expect(speakerDefault).toBeTruthy();
    expect(speakerDefault).not.toBe(WITNESS_BG);
    expect(dom.bgEl.style.backgroundImage).toContain(speakerDefault!);
  });
});
