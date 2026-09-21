// @Architecture(descriptionShort="Unit tests for penalty SFX and bilingual objection lines", type="test", icon="bolt")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { SoundEngine } from '../../src/audio/index.js';
import { applyPenaltyEffects, queuePenaltyDialogue, queuePenaltyOrRestart } from '../../src/engine/Private/TrialPenalty.js';
import { i18n } from '../../src/i18n/index.js';
import { GameStateManager } from '../../src/state/index.js';
import type { CaseScript, DialogueLine, Testimony } from '../../src/types/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('TrialPenalty', () => {
  let state: GameStateManager;
  let queued: DialogueLine[][];

  beforeEach(() => {
    vi.useFakeTimers();
    state = new GameStateManager();
    queued = [];
    i18n.setLanguage('es');
  });

  function host() {
    const soundEngine = new SoundEngine();
    soundEngine.init(new FakeAudioContext() as unknown as AudioContext);
    return {
      dom: setupDomHarness(),
      state,
      soundEngine,
      onQueueDialogue: (dialogue: DialogueLine[], onComplete?: () => void) => {
        queued.push(dialogue);
        if (onComplete) onComplete();
      }
    };
  }

  it('applies damage UI, shake, and flash when a penalty lands', () => {
    const deps = host();
    applyPenaltyEffects(deps);
    expect(state.health).toBe(4);
    expect(deps.dom.gameScreen.classList.contains('screen-shake')).toBe(true);
  });

  it('queues Spanish protesto lines, then English objection when language is en', () => {
    queuePenaltyDialogue(host(), /*onResume*/ () => {});
    expect(queued[0][0].text).toBe('¡PROTESTO!');
    expect(queued[0][0]).toMatchObject({ speaker: 'DEFENSA', pose: 'donramon_point' });

    i18n.setLanguage('en');
    queuePenaltyDialogue(host(), /*onResume*/ () => {});
    expect(queued[1][0].text).toBe('OBJECTION!');
    expect(queued[1][0]).toMatchObject({ speaker: 'DEFENSA', pose: 'donramon_point' });
    expect(queued[1]).toHaveLength(3);
  });

  it('appends game-over judge and defense lines when health is exhausted', () => {
    state.health = 1;
    state.takePenalty();
    queuePenaltyDialogue(host(), /*onResume*/ () => {});
    expect(queued[0].some((line) => line.text === i18n.t.gameOverJudgeText)).toBe(true);
    expect(queued[0].some((line) => line.text === i18n.t.gameOverDefenseText)).toBe(true);
    expect(queued[0].find((line) => line.text === i18n.t.gameOverDefenseText))
      .toMatchObject({ speaker: 'DEFENSA', pose: 'donramon_panic' });
  });

  it('uses the scripted defense panic pose on game over', () => {
    state.health = 1;
    state.takePenalty();
    queuePenaltyDialogue({ ...host(), script: chapulinDefenseScript() }, /*onResume*/ () => {});
    expect(queued[0].find((line) => line.text === i18n.t.gameOverDefenseText))
      .toMatchObject({ speaker: 'DEFENSA', pose: 'chapulin_panic' });
  });

  it('queues Super Sam pointing and a Don Ramón protesto by default', () => {
    queuePenaltyDialogue(host(), /*onResume*/ () => {});
    expect(queued[0][0]).toMatchObject({ speaker: 'DEFENSA', pose: 'donramon_point' });
    expect(queued[0][1]).toMatchObject({ speaker: 'SUPER SAM', pose: 'supersam_point', text: i18n.t.penaltyProsecutionText });
    expect(queued[0][2]).toMatchObject({ speaker: 'JUEZ', pose: 'judge_gavel' });
  });

  it('uses Chapulín protesto and a voiceless SECRETARIO when court roles are set', () => {
    queuePenaltyDialogue(
      { ...host(), script: chapulinDefenseScript(), testimony: secretarioTestimony() },
      /*onResume*/ () => {}
    );
    const lines = queued[0];
    expect(lines[0]).toMatchObject({ speaker: 'DEFENSA', pose: 'chapulin_point' });
    expect(lines[1]).toMatchObject({ speaker: 'SECRETARIO', text: i18n.t.penaltyProsecutionText });
    expect(lines[1].pose).toBeUndefined();
    expect(lines.some((line) => line.speaker === 'SUPER SAM')).toBe(false);
    expect(lines.some((line) => line.pose === 'donramon_point')).toBe(false);
  });

  it('reads the penalty prosecutor from the trial day when testimony does not override', () => {
    const script = chapulinDefenseScript();
    script.trial.penaltyProsecutionSpeaker = 'SECRETARIO';
    queuePenaltyDialogue({ ...host(), script }, /*onResume*/ () => {});
    expect(queued[0][1]).toMatchObject({ speaker: 'SECRETARIO', text: i18n.t.penaltyProsecutionText });
    expect(queued[0][1].pose).toBeUndefined();
  });

  it('restarts after game-over instead of continuing the current prompt', () => {
    state.health = 1;
    const deps = { ...host(), onRestartTrial: vi.fn() };
    applyPenaltyEffects(deps);
    const onContinue = vi.fn();
    queuePenaltyOrRestart(deps, /*onContinue*/ onContinue);
    expect(onContinue).not.toHaveBeenCalled();
    expect(queued[0].some((line) => line.text === i18n.t.gameOverJudgeText)).toBe(true);
    expect(deps.onRestartTrial).toHaveBeenCalled();
  });
});

function chapulinDefenseScript(): CaseScript {
  return {
    id: 'case1',
    startLocation: 'detention',
    requiredEvidence: [],
    debugEvidence: [],
    debugUnlockLocations: [],
    investigation: {},
    defensePointPose: 'chapulin_point',
    defensePanicPose: 'chapulin_panic',
    trial: {
      intro: [],
      testimonies: [],
      climax: { dialogue: [], presentTarget: [], verdict: [] }
    }
  };
}

function secretarioTestimony(): Testimony {
  return {
    title: 'T3',
    witness: 'BERRONDO',
    bgm: 'cross_exam_moderato',
    statements: [],
    penaltyProsecutionSpeaker: 'SECRETARIO'
  };
}
