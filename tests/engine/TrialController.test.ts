// @Architecture(descriptionShort="Unit tests for trial cross-examination, pressing, and contradictions", type="test", icon="panel")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { CASE_SCRIPT } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { TrialController } from '../../src/engine/Private/TrialController.js';
import { GameStateManager } from '../../src/state/index.js';
import type { DialogueLine } from '../../src/types/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('TrialController', () => {
  let dom: DomElements;
  let state: GameStateManager;
  let soundEngineInstance: SoundEngine;
  let midiComposerInstance: MidiMusicComposer;
  let controller: TrialController;
  let queuedDialogues: DialogueLine[][] = [];
  let renderedLines: DialogueLine[] = [];
  let courtRecordOpenedWithTrial = false;

  beforeEach(() => {
    vi.useFakeTimers();
    dom = setupDomHarness();
    state = new GameStateManager();
    const fakeCtx = new FakeAudioContext();
    soundEngineInstance = new SoundEngine();
    soundEngineInstance.init(fakeCtx as unknown as AudioContext);
    midiComposerInstance = new MidiMusicComposer(soundEngineInstance);
    queuedDialogues = [];
    renderedLines = [];
    courtRecordOpenedWithTrial = false;

    // Stub window.alert
    vi.stubGlobal('alert', vi.fn());

    controller = new TrialController(
      dom,
      state,
      CASE_SCRIPT,
      soundEngineInstance,
      midiComposerInstance,
      (dlg, cb) => {
        queuedDialogues.push(dlg);
        if (cb) cb();
      },
      (line) => renderedLines.push(line),
      (isTrialPresent) => {
        courtRecordOpenedWithTrial = isTrialPresent;
      }
    );
  });

  it('starts trial mode and begins testimony 1', () => {
    controller.startTrial();
    expect(state.mode).toBe('TRIAL');
    expect(dom.trialNavEl.classList.contains('hidden')).toBe(false);
    expect(controller.currentTestimony).toBe(CASE_SCRIPT.trial.testimony1);
    expect(renderedLines.length).toBeGreaterThan(0);
  });

  it('navigates statements with next and previous cycling', () => {
    controller.startTestimony('testimony1');
    expect(controller.currentStatementIdx).toBe(0);

    controller.nextStatement();
    expect(controller.currentStatementIdx).toBe(1);

    controller.nextStatement();
    expect(controller.currentStatementIdx).toBe(2);

    // Wraps back to 0
    controller.nextStatement();
    expect(controller.currentStatementIdx).toBe(0);

    // Cycles backward to 2
    controller.prevStatement();
    expect(controller.currentStatementIdx).toBe(2);
  });

  it('handles navigation and actions before testimony is started gracefully', () => {
    expect(() => controller.renderCurrentStatement()).not.toThrow();
    expect(() => controller.nextStatement()).not.toThrow();
    expect(() => controller.prevStatement()).not.toThrow();
    expect(() => controller.handlePressStatement()).not.toThrow();
    expect(() => controller.handlePresentEvidence('chipote_chillon')).not.toThrow();
  });

  it('presses witness statement to trigger press dialogue', () => {
    controller.startTestimony('testimony1');
    controller.currentStatementIdx = 0;

    controller.handlePressStatement();
    expect(queuedDialogues.length).toBeGreaterThan(0);
  });

  it('handles statement without pressText gracefully', () => {
    controller.startTestimony('testimony1');
    controller.currentTestimony!.statements[0].pressText = undefined;
    expect(() => controller.handlePressStatement()).not.toThrow();
  });

  it('handles penalty when incorrect evidence is presented', () => {
    controller.startTestimony('testimony1');
    controller.currentStatementIdx = 0;

    expect(state.health).toBe(5);
    controller.handlePresentEvidence('insignia_abogado');

    expect(state.health).toBe(4);
    expect(queuedDialogues.some((d) => d.some((l) => l.text.includes('Time is money')))).toBe(true);
  });

  it('progresses from testimony 1 to testimony 2 on valid contradiction', () => {
    controller.startTestimony('testimony1');
    controller.currentStatementIdx = 1;

    controller.handlePresentEvidence('chipote_chillon');
    expect(controller.currentTestimony).toBe(CASE_SCRIPT.trial.testimony2);
    expect(midiComposerInstance.currentTrack).toBe('cross_exam_allegro');
  });

  it('progresses from testimony 2 to climax on valid contradiction', () => {
    controller.startTestimony('testimony2');
    controller.currentStatementIdx = 0;

    controller.handlePresentEvidence('pastillas_chiquitolina');
    expect(courtRecordOpenedWithTrial).toBe(true);
    expect(midiComposerInstance.currentTrack).toBe('suspense');
  });

  it('handles climax submission: victory on correct target', () => {
    controller.startClimax();
    (dom.presentBtnEl as any).dataset.selectedId = 'antenitas_vinil';

    dom.presentBtnEl.onclick?.({} as MouseEvent);

    expect(queuedDialogues.some((d) => d.some((l) => l.text.includes('¡INOCENTE!')))).toBe(true);
    expect(dom.confettiContainerEl.children.length).toBe(80);
  });

  it('handles climax submission: penalty and retry on incorrect item', () => {
    controller.startClimax();
    (dom.presentBtnEl as any).dataset.selectedId = 'insignia_abogado';

    expect(state.health).toBe(5);
    dom.presentBtnEl.onclick?.({} as MouseEvent);

    expect(state.health).toBe(4);
  });

  it('triggers game over when penalties exhaust all health', () => {
    controller.startTestimony('testimony1');
    controller.currentStatementIdx = 0;
    state.health = 1;

    controller.handlePresentEvidence('insignia_abogado');

    expect(state.gameOver).toBe(false); // Resets after restart
    expect(state.health).toBe(5);
  });
});
