// @Architecture(descriptionShort="Regression tests for scripted witness evidence deflects", type="test", icon="bolt")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { MidiMusicComposer, SoundEngine } from '../../src/audio/index.js';
import { TrialController } from '../../src/engine/Private/TrialController.js';
import { i18n } from '../../src/i18n/index.js';
import { GameStateManager } from '../../src/state/index.js';
import type { CaseScript, DialogueLine, PoseName, Testimony } from '../../src/types/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

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

describe('TrialDeflect', () => {
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

  it('queues Berrondo denial, not Super Sam, and applies a penalty', () => {
    expect(state.health).toBe(5);
    ctrl.handlePresentEvidence('parte_detencion');
    expect(state.health).toBe(4);
    expect(queued).toHaveLength(1);
    expect(queued[0]).toEqual(DEFLECT_LINES);
    expect(queued[0].some((line) => line.speaker === 'SUPER SAM')).toBe(false);
    expect(queued[0].some((line) => line.pose === 'berrondo_sweat')).toBe(false);
  });

  it('plays contradiction successDialogue with berrondo_sweat, not the deflect', () => {
    ctrl.currentStatementIdx = 1;
    ctrl.handlePresentEvidence('recibo_hielo');
    expect(state.health).toBe(5);
    expect(queued).toHaveLength(1);
    expect(queued[0]).toEqual(SUCCESS_LINES);
    expect(queued[0].some((line) => line.pose === 'berrondo_sweat')).toBe(true);
    expect(queued[0].some((line) => line.text.includes('diligencia'))).toBe(false);
  });

  it('still queues deflect after two generic misses, not the press hint', () => {
    ctrl.handlePresentEvidence('chipote_chillon');
    ctrl.handlePresentEvidence('insignia_abogado');
    expect(queued[1].some((line) => line.text === i18n.t.pressHint)).toBe(true);
    queued.length = 0;
    ctrl.handlePresentEvidence('parte_detencion');
    expect(queued).toHaveLength(1);
    expect(queued[0]).toEqual(DEFLECT_LINES);
    expect(queued[0].some((line) => line.text === i18n.t.pressHint)).toBe(false);
    expect(queued[0].some((line) => line.speaker === 'SUPER SAM')).toBe(false);
  });

  it('sends unrelated evidence through onPresentPenalty (Super Sam by default)', () => {
    ctrl.handlePresentEvidence('chipote_chillon');
    expect(state.health).toBe(4);
    expect(queued[0].some((line) => line.speaker === 'SUPER SAM')).toBe(true);
    expect(queued[0]).not.toEqual(DEFLECT_LINES);
  });

  it('accepts berrondo_sweat as a DialogueLine pose', () => {
    const pose: PoseName = 'berrondo_sweat';
    const line: DialogueLine = {
      speaker: 'BERRONDO',
      text: '...Acabo de declararlo.',
      pose
    };
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
        id: 's2',
        speaker: 'BERRONDO',
        text: 'Nadie me lo dijo.',
        deflects,
        contradiction: { evidence: ['recibo_hielo'], successDialogue: SUCCESS_LINES }
      },
      { id: 's3', speaker: 'BERRONDO', text: 'Hidden', unlockedBy: 's1' }
    ]
  };
}

function scriptWithTestimony(testimony: Testimony): CaseScript {
  return {
    id: 'case1',
    startLocation: 'detention',
    requiredEvidence: [],
    debugEvidence: [],
    debugUnlockLocations: [],
    investigation: {},
    trial: {
      intro: [],
      testimonies: [testimony],
      testimony1: testimony,
      climax: { dialogue: [], presentTarget: [], verdict: [] }
    }
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
    dom: setupDomHarness(),
    state,
    script,
    soundEngine,
    midiComposer: new MidiMusicComposer(soundEngine),
    onQueueDialogue: (dialogue) => { queued.push(dialogue); },
    onRenderLine: () => {},
    onOpenCourtRecord: () => {}
  });
}
