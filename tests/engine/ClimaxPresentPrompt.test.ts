// @Architecture(descriptionShort="Tests climax present questions on HUD and court record", type="test", icon="dialog")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { getCaseScript } from '../../src/case/index.js';
import { applyClimaxPresentPrompt } from '../../src/engine/Private/ClimaxPresentPrompt.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { TrialController } from '../../src/engine/Private/TrialController.js';
import { GameStateManager } from '../../src/state/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('climax present prompt', () => {
  let dom: DomElements;

  beforeEach(() => {
    dom = setupDomHarness();
  });

  it('shows the question on the HUD and inside the court record', () => {
    applyClimaxPresentPrompt(dom, '¿CUÁNDO se grabó el grito?');
    expect(dom.climaxPresentPromptEl.classList.contains('hidden')).toBe(false);
    expect(dom.courtRecordPresentPromptEl.classList.contains('hidden')).toBe(false);
    expect(dom.climaxPresentPromptEl.textContent).toBe('¿CUÁNDO se grabó el grito?');
    expect(dom.courtRecordPresentPromptEl.textContent).toBe('¿CUÁNDO se grabó el grito?');
  });

  it('hides both banners when no stage is awaiting a present', () => {
    applyClimaxPresentPrompt(dom, '¿POR QUÉ?');
    applyClimaxPresentPrompt(dom, null);
    expect(dom.climaxPresentPromptEl.classList.contains('hidden')).toBe(true);
    expect(dom.courtRecordPresentPromptEl.classList.contains('hidden')).toBe(true);
    expect(dom.climaxPresentPromptEl.textContent).toBe('');
  });
});

describe('Case 3 climax present prompt stages', () => {
  let controller: TrialController;

  beforeEach(() => {
    vi.useFakeTimers();
    const dom = setupDomHarness();
    const state = new GameStateManager();
    const soundEngine = new SoundEngine();
    soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
    controller = new TrialController({
      dom,
      state,
      script: getCaseScript('es', 'case3'),
      soundEngine,
      midiComposer: new MidiMusicComposer(soundEngine),
      onQueueDialogue: (_dlg, cb) => { if (cb) cb(); },
      onRenderLine: () => {},
      onOpenCourtRecord: () => {}
    });
  });

  it('returns each stage question while awaiting evidence and none during choices', () => {
    expect(controller.getPresentPrompt()).toBeNull();
    controller.startClimax();
    expect(controller.getPresentPrompt()).toBe('¿CUÁNDO se grabó el grito?');
    controller.handlePresentEvidence('programa_kermes');
    expect(controller.getPresentPrompt()).toBe('¿DÓNDE se grabó? (y por qué no pudo ser el acusado)');
    controller.handlePresentEvidence('cinta_salud');
    expect(controller.getPresentPrompt()).toBe('¿QUIÉN podía hacer esa voz?');
    controller.handlePresentEvidence('cinta_sketch');
    expect(controller.getPresentPrompt()).toBe('¿POR QUÉ?');
    controller.handlePresentEvidence('boleta_empeno');
    expect(controller.getPresentPrompt()).toBeNull();
    expect(controller.isAwaitingEvidence()).toBe(false);

    controller.handleSelectChoice('prove_voice');
    expect(controller.isAwaitingEvidence()).toBe(false);
    controller.handleSelectChoice('proverb_trap');
    expect(controller.getPresentPrompt()).toBeNull();
    expect(controller.isAwaitingEvidence()).toBe(false);
  });
});
