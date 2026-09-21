// @Architecture(descriptionShort="Regression tests for both deflect present outcomes", type="test", icon="panel")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { getCaseScript } from '../../src/case/index.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { TrialController } from '../../src/engine/Private/TrialController.js';
import { i18n } from '../../src/i18n/index.js';
import { GameStateManager } from '../../src/state/index.js';
import type { CaseScript, DialogueLine, PoseName, Testimony } from '../../src/types/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

const HUACAL_DEFLECT = 'esa fotografía prueba el día';
const MAQUINA_DEFLECT = 'esa máquina se levantó ayer';

describe('Premature present deflection (Case 5, day 3, Testimony 6)', () => {
  let dom: DomElements;
  let state: GameStateManager;
  let controller: TrialController;
  let queuedDialogues: DialogueLine[][] = [];

  function viewStatement(idx: number): void {
    controller.startTestimony(0);
    controller.currentStatementIdx = idx;
  }

  function queuedText(): string {
    return queuedDialogues.flat().map((line) => line.text).join(' | ');
  }

  beforeEach(() => {
    vi.useFakeTimers();
    dom = setupDomHarness();
    state = new GameStateManager();
    state.caseId = 'case5';
    state.trialDay = 3;
    queuedDialogues = [];
    const soundEngine = new SoundEngine();
    soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
    controller = new TrialController({
      dom,
      state,
      script: getCaseScript('es', 'case5'),
      soundEngine,
      midiComposer: new MidiMusicComposer(soundEngine),
      onQueueDialogue: (dlg, cb) => {
        queuedDialogues.push(dlg);
        if (cb) cb();
      },
      onRenderLine: () => {},
      onOpenCourtRecord: () => {}
    });
  });

  it('answers the crate photograph without a penalty', () => {
    viewStatement(1);
    controller.handlePresentEvidence('huacal_9');
    expect(state.health).toBe(5);
    expect(queuedText()).toContain(HUACAL_DEFLECT);
  });

  it('answers the typewriter without a penalty', () => {
    viewStatement(2);
    controller.handlePresentEvidence('maquina_escribir');
    expect(state.health).toBe(5);
    expect(queuedText()).toContain(MAQUINA_DEFLECT);
  });

  it('leaves a harmlessly deflected statement in place', () => {
    viewStatement(1);
    controller.handlePresentEvidence('huacal_9');
    expect(controller.phase).toBe('TESTIMONY');
    expect(controller.currentStatementIdx).toBe(1);
    expect(controller.getTestimonyIndex()).toBe(0);
  });

  it('still resolves the contradiction with the inventory', () => {
    viewStatement(2);
    controller.handlePresentEvidence('inventario_1971');
    expect(state.health).toBe(5);
    expect(queuedText()).toContain('cuarenta y siete partidas');
  });

  it('penalizes unrelated evidence', () => {
    viewStatement(1);
    controller.handlePresentEvidence('inventario_1971');
    expect(state.health).toBe(4);
    expect(queuedText()).not.toContain(HUACAL_DEFLECT);
  });
});

const DEFLECT_LINES: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡PROTESTO!', pose: 'chapulin_slam' },
  { speaker: 'BERRONDO', text: 'No conozco esa diligencia.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'Nadie me notificó de ella.', pose: 'berrondo_definicion' },
  { speaker: 'JUEZ', text: 'Eso no prueba una contradicción.', pose: 'judge_gavel' }
];

const SUCCESS_LINES: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡PROTESTO!', pose: 'chapulin_slam' },
  { speaker: 'BERRONDO', text: '...Acabo de declararlo.', pose: 'berrondo_sweat' }
];

describe('Scripted witness deflects', () => {
  let queued: DialogueLine[][];
  let state: GameStateManager;
  let ctrl: TrialController;

  beforeEach(() => {
    vi.useFakeTimers();
    i18n.setLanguage('es');
    queued = [];
    state = new GameStateManager();
    ctrl = makeController(scriptWithTestimony(deflectTestimony()), queued, state);
    ctrl.startTestimony(0);
  });

  it('queues the witness denial and applies a penalty', () => {
    ctrl.handlePresentEvidence('parte_detencion');
    expect(state.health).toBe(4);
    expect(queued[0]).toEqual(DEFLECT_LINES);
    expect(queued[0].some((line) => line.speaker === 'SUPER SAM')).toBe(false);
  });

  it('plays contradiction success instead of the witness deflect', () => {
    ctrl.currentStatementIdx = 1;
    ctrl.handlePresentEvidence('recibo_hielo');
    expect(state.health).toBe(5);
    expect(queued[0]).toEqual(SUCCESS_LINES);
  });

  it('keeps witness deflects ahead of the press hint', () => {
    ctrl.handlePresentEvidence('chipote_chillon');
    ctrl.handlePresentEvidence('insignia_abogado');
    expect(queued[1].some((line) => line.text === i18n.t.pressHint)).toBe(true);
    queued.length = 0;
    ctrl.handlePresentEvidence('parte_detencion');
    expect(queued[0]).toEqual(DEFLECT_LINES);
    expect(queued[0].some((line) => line.text === i18n.t.pressHint)).toBe(false);
  });

  it('sends unrelated evidence through the default penalty', () => {
    ctrl.handlePresentEvidence('chipote_chillon');
    expect(state.health).toBe(4);
    expect(queued[0].some((line) => line.speaker === 'SUPER SAM')).toBe(true);
  });

  it('accepts berrondo_sweat as a dialogue pose', () => {
    const pose: PoseName = 'berrondo_sweat';
    const line: DialogueLine = { speaker: 'BERRONDO', text: '...Acabo de declararlo.', pose };
    expect(line.pose).toBe('berrondo_sweat');
  });
});

function deflectTestimony(): Testimony {
  const deflects = [{ evidence: ['parte_detencion' as const], dialogue: DEFLECT_LINES }];
  return {
    title: 'D3-T3',
    witness: 'BERRONDO',
    bgm: 'cross_exam_moderato',
    statements: [
      { id: 's1', speaker: 'BERRONDO', text: 'Comparezco.', deflects },
      {
        id: 's2', speaker: 'BERRONDO', text: 'Nadie me lo dijo.', deflects,
        contradiction: { evidence: ['recibo_hielo'], successDialogue: SUCCESS_LINES }
      },
      { id: 's3', speaker: 'BERRONDO', text: 'Hidden', unlockedBy: 's1' }
    ]
  };
}

function scriptWithTestimony(testimony: Testimony): CaseScript {
  return {
    id: 'case1', startLocation: 'detention', requiredEvidence: [], debugEvidence: [],
    debugUnlockLocations: [], investigation: {},
    trial: { intro: [], testimonies: [testimony], testimony1: testimony,
      climax: { dialogue: [], presentTarget: [], verdict: [] } }
  };
}

function makeController(
  script: CaseScript,
  queued: DialogueLine[][],
  state: GameStateManager
): TrialController {
  const soundEngine = new SoundEngine();
  soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
  return new TrialController({
    dom: setupDomHarness(), state, script, soundEngine,
    midiComposer: new MidiMusicComposer(soundEngine),
    onQueueDialogue: (dialogue) => { queued.push(dialogue); },
    onRenderLine: () => {}, onOpenCourtRecord: () => {}
  });
}
