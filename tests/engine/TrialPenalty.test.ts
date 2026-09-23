// @Architecture(descriptionShort="Unit tests for penalty SFX and bilingual objection lines", type="test", icon="bolt")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { SoundEngine } from '../../src/audio/index.js';
import { CASE_SCRIPT_CASE1_ES } from '../../src/case/case1/index.js';
import { CASE_SCRIPT_CASE5_ES } from '../../src/case/case5/index.js';
import {
  applyPenaltyEffects,
  queuePenaltyDialogue,
  queuePenaltyOrRestart
} from '../../src/engine/Private/TrialPenalty.js';
import { i18n } from '../../src/i18n/index.js';
import { GameStateManager } from '../../src/state/index.js';
import type { CaseScript, DialogueLine, Testimony } from '../../src/types/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

/** The somber cue `gameOverLines` stamps on the first CULPABLE line. */
const GAME_OVER_BGM = 'game_over' as const;

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

  it('uses Chapulín poses when Case 5 is the active defense', () => {
    state.caseId = 'case5';
    queuePenaltyDialogue(host(), /*onResume*/ () => {});
    expect(queued[0][0]).toMatchObject({ speaker: 'DEFENSA', pose: 'chapulin_point' });
    state.health = 1;
    state.takePenalty();
    queuePenaltyDialogue(host(), /*onResume*/ () => {});
    expect(queued[1].find((line) => line.text === i18n.t.gameOverDefenseText))
      .toMatchObject({ speaker: 'DEFENSA', pose: 'chapulin_panic' });
  });

  it('uses the scripted defense panic pose on game over', () => {
    state.health = 1;
    state.takePenalty();
    queuePenaltyDialogue({ ...host(), script: chapulinDefenseScript() }, /*onResume*/ () => {});
    expect(queued[0].find((line) => line.text === i18n.t.gameOverDefenseText))
      .toMatchObject({ speaker: 'DEFENSA', pose: 'chapulin_panic' });
  });

  it('queues Super Sam finding and a Don Ramón protesto by default', () => {
    queuePenaltyDialogue(host(), /*onResume*/ () => {});
    expect(queued[0][0]).toMatchObject({ speaker: 'DEFENSA', pose: 'donramon_point' });
    expect(queued[0][1]).toMatchObject({
      speaker: 'SUPER SAM',
      pose: 'supersam_point',
      text: i18n.t.penaltySecretaryText
    });
    expect(queued[0][2]).toMatchObject({ speaker: 'JUEZ', pose: 'judge_gavel' });
  });

  it('uses Super Sam for Case 1 penalties on both trial days', () => {
    for (const trialDay of [1, 2] as const) {
      state.trialDay = trialDay;
      queuePenaltyDialogue({ ...host(), script: CASE_SCRIPT_CASE1_ES }, /*onResume*/ () => {});
      expect(queued.at(-1)?.[1]).toMatchObject({ speaker: 'SUPER SAM', pose: 'supersam_point' });
    }
  });

  it('switches the Case 5 penalty speaker only after Sam recuses himself', () => {
    const deps = host();
    deps.state.caseId = 'case5';
    for (const trialDay of [1, 2] as const) {
      deps.state.trialDay = trialDay;
      queuePenaltyDialogue({ ...deps, script: CASE_SCRIPT_CASE5_ES }, /*onResume*/ () => {});
      expect(queued.at(-1)?.[1]).toMatchObject({ speaker: 'SUPER SAM', pose: 'supersam_point' });
    }
    deps.state.trialDay = 3;

    queuePenaltyDialogue({ ...deps, script: CASE_SCRIPT_CASE5_ES }, /*onResume*/ () => {});
    expect(queued.at(-1)?.[1]).toMatchObject({ speaker: 'SUPER SAM', pose: 'supersam_point' });

    const thirdDay = CASE_SCRIPT_CASE5_ES.adjournment?.next?.trial;
    const testimony6 = thirdDay?.testimonies[0];
    const testimony7 = thirdDay?.testimonies[1];
    const testimony8 = thirdDay?.testimonies[2];
    queuePenaltyDialogue({ ...deps, script: CASE_SCRIPT_CASE5_ES, testimony: testimony6 }, /*onResume*/ () => {});
    expect(queued.at(-1)?.[1]).toMatchObject({ speaker: 'SUPER SAM', pose: 'supersam_point' });
    queuePenaltyDialogue({ ...deps, script: CASE_SCRIPT_CASE5_ES, testimony: testimony7 }, /*onResume*/ () => {});
    expect(queued.at(-1)?.[1]).toMatchObject({ speaker: 'SUPER SAM', pose: 'supersam_point' });

    deps.state.flags.case5_super_sam_recused = true;
    queuePenaltyDialogue({ ...deps, script: CASE_SCRIPT_CASE5_ES, testimony: testimony7 }, /*onResume*/ () => {});
    expect(queued.at(-1)?.[1]).toMatchObject({ speaker: 'SECRETARIO', pose: 'secretario_leyendo' });
    queuePenaltyDialogue({ ...deps, script: CASE_SCRIPT_CASE5_ES, testimony: testimony8 }, /*onResume*/ () => {});
    expect(queued.at(-1)?.[1]).toMatchObject({ speaker: 'SECRETARIO', pose: 'secretario_leyendo' });

    deps.state.trialDay = 4;
    queuePenaltyDialogue({ ...deps, script: CASE_SCRIPT_CASE5_ES }, /*onResume*/ () => {});
    expect(queued.at(-1)?.[1]).toMatchObject({ speaker: 'SECRETARIO', pose: 'secretario_leyendo' });
  });

  it('uses Chapulín protesto and an explicit SECRETARIO role when court roles are set', () => {
    queuePenaltyDialogue(
      { ...host(), script: chapulinDefenseScript(), testimony: secretarioTestimony() },
      /*onResume*/ () => {}
    );
    const lines = queued[0];
    expect(lines[0]).toMatchObject({ speaker: 'DEFENSA', pose: 'chapulin_point' });
    expect(lines[1]).toMatchObject({
      speaker: 'SECRETARIO',
      text: i18n.t.penaltySecretaryText,
      pose: 'secretario_leyendo',
      bg: 'assets/bg_courtroom.webp'
    });
    expect(lines.some((line) => line.speaker === 'SUPER SAM')).toBe(false);
    expect(lines.some((line) => line.pose === 'donramon_point')).toBe(false);
  });

  it('lets an explicit trial-day prosecutor override the Super Sam default', () => {
    const script = chapulinDefenseScript();
    script.trial.penaltyProsecutionSpeaker = 'SECRETARIO';
    queuePenaltyDialogue({ ...host(), script }, /*onResume*/ () => {});
    expect(queued[0][1]).toMatchObject({
      speaker: 'SECRETARIO',
      text: i18n.t.penaltySecretaryText,
      pose: 'secretario_leyendo',
      bg: 'assets/bg_courtroom.webp'
    });
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

  it('uses climax guiltyDialogue when health is exhausted', () => {
    state.health = 1;
    state.takePenalty();
    const guilty = [
      { speaker: 'JUEZ', pose: 'judge_gavel' as const, text: 'Ramón Valdés... ¡CULPABLE!' }
    ];
    queuePenaltyDialogue({ ...host(), guiltyDialogue: guilty }, /*onResume*/ () => {});
    expect(queued[0].some((line) => line.text === 'Ramón Valdés... ¡CULPABLE!')).toBe(true);
    expect(queued[0].some((line) => line.text === i18n.t.gameOverJudgeText)).toBe(false);
  });

  it('switches to the somber game-over cue on the first guilty line', () => {
    state.health = 1;
    state.takePenalty();
    queuePenaltyDialogue(host(), /*onResume*/ () => {});
    const guiltyStart = queued[0].findIndex((line) => line.text === i18n.t.gameOverJudgeText);
    expect(queued[0][guiltyStart].bgm).toBe(GAME_OVER_BGM);
    expect(queued[0].slice(0, guiltyStart).every((line) => !line.bgm)).toBe(true);
  });

  it('switches to the somber cue on scripted guiltyDialogue too', () => {
    state.health = 1;
    state.takePenalty();
    const guilty: DialogueLine[] = [
      { speaker: 'JUEZ', pose: 'judge_gavel', text: '¡CULPABLE!' },
      { speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Inténtelo otra vez.' }
    ];
    queuePenaltyDialogue({ ...host(), guiltyDialogue: guilty }, /*onResume*/ () => {});
    const line = queued[0].find((l) => l.text === '¡CULPABLE!');
    expect(line?.bgm).toBe(GAME_OVER_BGM);
    expect(guilty[0].bgm).toBeUndefined();
  });

  it('keeps a bgm the script already declared on its guilty block', () => {
    state.health = 1;
    state.takePenalty();
    const guilty: DialogueLine[] = [
      { speaker: 'JUEZ', pose: 'judge_gavel', text: '¡CULPABLE!', bgm: 'suspense' }
    ];
    queuePenaltyDialogue({ ...host(), guiltyDialogue: guilty }, /*onResume*/ () => {});
    expect(queued[0].find((l) => l.text === '¡CULPABLE!')?.bgm).toBe('suspense');
  });

  it('does not cue the game-over track while health remains', () => {
    queuePenaltyDialogue(host(), /*onResume*/ () => {});
    expect(queued[0].every((line) => line.bgm !== GAME_OVER_BGM)).toBe(true);
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
