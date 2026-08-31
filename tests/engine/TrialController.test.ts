// @Architecture(descriptionShort="Unit tests for trial cross-examination, pressing, and contradictions", type="test", icon="panel")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { CASE_SCRIPT, getCaseScript } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { SCENE_FADE_MS } from '../../src/engine/Private/SceneFade.js';
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

    controller = new TrialController({
      dom,
      state,
      script: CASE_SCRIPT,
      soundEngine: soundEngineInstance,
      midiComposer: midiComposerInstance,
      onQueueDialogue: (dlg, cb) => {
        queuedDialogues.push(dlg);
        if (cb) cb();
      },
      onRenderLine: (line) => renderedLines.push(line),
      onOpenCourtRecord: (isTrialPresent) => {
        courtRecordOpenedWithTrial = isTrialPresent;
      }
    });
  });

  it('starts trial mode and begins testimony 1', () => {
    controller.startTrial();
    vi.advanceTimersByTime(SCENE_FADE_MS * 2);
    expect(state.mode).toBe('TRIAL');
    expect(dom.trialNavEl.classList.contains('hidden')).toBe(false);
    expect(controller.currentTestimony).toBe(CASE_SCRIPT.trial.testimony1);
    expect(renderedLines.length).toBeGreaterThan(0);
  });

  it('covers the investigation plate before swapping into the courtroom', () => {
    queuedDialogues = [];
    dom.bgEl.style.backgroundImage = "url('assets/bg_museum.jpg')";
    controller.startTrial();
    expect(state.mode).not.toBe('TRIAL');
    expect(queuedDialogues).toHaveLength(0);
    expect(dom.flashEl.classList.contains('hidden')).toBe(false);
    expect(dom.bgEl.style.backgroundImage).toContain('bg_museum.jpg');
    vi.advanceTimersByTime(SCENE_FADE_MS);
    expect(state.mode).toBe('TRIAL');
    expect(dom.bgEl.style.backgroundImage).toContain('bg_judge.jpg');
    expect(queuedDialogues).toHaveLength(0);
    vi.advanceTimersByTime(SCENE_FADE_MS);
    expect(queuedDialogues).toHaveLength(1);
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
    const originalPressText = controller.currentTestimony!.statements[0].pressText;
    controller.currentTestimony!.statements[0].pressText = undefined;
    expect(() => controller.handlePressStatement()).not.toThrow();
    controller.currentTestimony!.statements[0].pressText = originalPressText;
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
    expect(controller.phase).toBe('CLIMAX');

    controller.handlePresentEvidence('antenitas_vinil');

    expect(queuedDialogues.some((d) => d.some((l) => l.text.includes('¡INOCENTE!')))).toBe(true);
    expect(dom.confettiContainerEl.children.length).toBe(80);
  });

  it('handles climax submission: penalty and retry on incorrect item', () => {
    controller.startClimax();
    expect(controller.phase).toBe('CLIMAX');
    expect(state.health).toBe(5);

    controller.handlePresentEvidence('insignia_abogado');

    expect(state.health).toBe(4);
  });

  it('triggers game over when a wrong climax present exhausts health', () => {
    controller.startClimax();
    courtRecordOpenedWithTrial = false;
    queuedDialogues = [];
    state.health = 1;

    controller.handlePresentEvidence('insignia_abogado');

    expect(queuedDialogues.some((d) => d.some((l) => l.text.includes('CULPABLE')))).toBe(true);
    expect(courtRecordOpenedWithTrial).toBe(false);
    expect(state.gameOver).toBe(false);
    expect(state.health).toBe(5);
  });

  it('walks Case 2 climax through gold, valerian, then wax mold', () => {
    const case2 = getCaseScript('es', 'case2');
    const case2Controller = new TrialController({
      dom,
      state,
      script: case2,
      soundEngine: soundEngineInstance,
      midiComposer: midiComposerInstance,
      onQueueDialogue: (dlg, cb) => {
        queuedDialogues.push(dlg);
        if (cb) cb();
      },
      onRenderLine: (line) => renderedLines.push(line),
      onOpenCourtRecord: (isTrialPresent) => {
        courtRecordOpenedWithTrial = isTrialPresent;
      }
    });

    case2Controller.startClimax();
    case2Controller.handlePresentEvidence('lata_grasa');
    expect(queuedDialogues.some((d) => d.some((l) => l.text.includes('INOCENTE')))).toBe(false);
    expect(queuedDialogues.some((d) => d.some((l) => l.text.includes('lata del Chómpiras')))).toBe(true);

    case2Controller.handlePresentEvidence('frasco_valeriana');
    expect(queuedDialogues.some((d) => d.some((l) => l.text.includes('profundamente dormido')))).toBe(true);

    case2Controller.handlePresentEvidence('molde_cera');
    expect(queuedDialogues.some((d) => d.some((l) => l.text.includes('INOCENTE')))).toBe(false);
    expect(dom.choicePromptModalEl.classList.contains('hidden')).toBe(false);

    case2Controller.handleSelectChoice('purchase_time');
    expect(queuedDialogues.some((d) => d.some((l) => l.text.includes('INOCENTE')))).toBe(false);

    case2Controller.handleSelectChoice('security_chief');
    expect(queuedDialogues.some((d) => d.some((l) => l.text.includes('INOCENTE')))).toBe(true);
    expect(case2Controller.isAwaitingEvidence()).toBe(false);
  });

  it('triggers game over when penalties exhaust all health', () => {
    controller.startTestimony('testimony1');
    controller.currentStatementIdx = 0;
    state.health = 1;

    controller.handlePresentEvidence('insignia_abogado');

    expect(state.gameOver).toBe(false); // Resets after restart
    expect(state.health).toBe(5);
  });

  it('keeps trial controls hidden during intro dialogue and shows them only when cross-examination starts', () => {
    let pendingCallback: (() => void) | null = null;
    const asyncController = new TrialController({
      dom,
      state,
      script: JSON.parse(JSON.stringify(CASE_SCRIPT)),
      soundEngine: soundEngineInstance,
      midiComposer: midiComposerInstance,
      onQueueDialogue: (_dlg, cb) => {
        pendingCallback = cb || null;
      },
      onRenderLine: (line) => renderedLines.push(line),
      onOpenCourtRecord: (isTrialPresent) => {
        courtRecordOpenedWithTrial = isTrialPresent;
      }
    });

    asyncController.startTrial();
    vi.advanceTimersByTime(SCENE_FADE_MS * 2);
    // Intro dialogue is playing -> trial controls MUST be hidden
    expect(dom.trialNavEl.classList.contains('hidden')).toBe(true);

    // Once intro finishes, startTestimony is called and controls appear
    expect(pendingCallback).not.toBeNull();
    pendingCallback!();
    expect(dom.trialNavEl.classList.contains('hidden')).toBe(false);
  });

  it('hides trial controls while press dialogue is queued and reveals them when statement re-renders', () => {
    let pendingCallback: (() => void) | null = null;
    const asyncController = new TrialController({
      dom,
      state,
      script: JSON.parse(JSON.stringify(CASE_SCRIPT)),
      soundEngine: soundEngineInstance,
      midiComposer: midiComposerInstance,
      onQueueDialogue: (_dlg, cb) => {
        pendingCallback = cb || null;
      },
      onRenderLine: (line) => renderedLines.push(line),
      onOpenCourtRecord: (isTrialPresent) => {
        courtRecordOpenedWithTrial = isTrialPresent;
      }
    });

    asyncController.startTestimony('testimony1');
    expect(dom.trialNavEl.classList.contains('hidden')).toBe(false);

    asyncController.handlePressStatement();
    // While press dialogue is playing -> controls hidden
    expect(dom.trialNavEl.classList.contains('hidden')).toBe(true);

    // When press dialogue finishes -> controls restored
    pendingCallback!();
    expect(dom.trialNavEl.classList.contains('hidden')).toBe(false);
  });

  it('hides trial controls during penalty dialogue and restores them when statement re-renders', () => {
    let pendingCallback: (() => void) | null = null;
    const asyncController = new TrialController({
      dom,
      state,
      script: JSON.parse(JSON.stringify(CASE_SCRIPT)),
      soundEngine: soundEngineInstance,
      midiComposer: midiComposerInstance,
      onQueueDialogue: (_dlg, cb) => {
        pendingCallback = cb || null;
      },
      onRenderLine: (line) => renderedLines.push(line),
      onOpenCourtRecord: (isTrialPresent) => {
        courtRecordOpenedWithTrial = isTrialPresent;
      }
    });

    asyncController.startTestimony('testimony1');
    expect(dom.trialNavEl.classList.contains('hidden')).toBe(false);

    asyncController.handlePresentEvidence('insignia_abogado');
    // Penalty dialogue is playing -> controls hidden
    expect(dom.trialNavEl.classList.contains('hidden')).toBe(true);

    // When penalty dialogue finishes -> controls restored
    pendingCallback!();
    expect(dom.trialNavEl.classList.contains('hidden')).toBe(false);
  });

  it('keeps trial controls hidden throughout climax', () => {
    controller.startClimax();
    expect(dom.trialNavEl.classList.contains('hidden')).toBe(true);
  });

  it('adjourns Case 2 after testimony 2 instead of starting the climax', () => {
    const case2 = getCaseScript('es', 'case2');
    let adjournedTo: string | null = null;
    const case2Controller = new TrialController({
      dom,
      state,
      script: case2,
      soundEngine: soundEngineInstance,
      midiComposer: midiComposerInstance,
      onQueueDialogue: (dlg, cb) => {
        queuedDialogues.push(dlg);
        if (cb) cb();
      },
      onRenderLine: (line) => renderedLines.push(line),
      onOpenCourtRecord: (isTrialPresent) => {
        courtRecordOpenedWithTrial = isTrialPresent;
      },
      onAdjourn: (location) => {
        adjournedTo = location;
      }
    });

    case2Controller.startTestimony('testimony2');
    case2Controller.currentStatementIdx = 1;
    case2Controller.handlePresentEvidence('informe_boveda');

    expect(adjournedTo).toBe('oficina_postal');
    expect(state.trialDay).toBe(2);
    expect(state.flags.completed_trial_day1).toBe(true);
    expect(courtRecordOpenedWithTrial).toBe(false);
    expect(case2Controller.phase).toBe('IDLE');
  });

  it('starts Case 2 day-2 testimonies after adjournment', () => {
    const case2 = getCaseScript('es', 'case2');
    state.beginTrialDay2(case2.adjournment!);
    const day2 = new TrialController({
      dom,
      state,
      script: case2,
      soundEngine: soundEngineInstance,
      midiComposer: midiComposerInstance,
      onQueueDialogue: (dlg, cb) => {
        queuedDialogues.push(dlg);
        if (cb) cb();
      },
      onRenderLine: (line) => renderedLines.push(line),
      onOpenCourtRecord: () => {}
    });
    day2.startTrial();
    vi.advanceTimersByTime(SCENE_FADE_MS * 2);
    expect(day2.currentTestimony).toBe(case2.adjournment?.trial.testimony1);
  });
});

