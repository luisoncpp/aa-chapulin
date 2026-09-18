// @Architecture(descriptionShort="Public facade assembling bilingual Case 5 scripts", type="facade", icon="layers")
/**
 * Case 5: El Tomo Trece — El Último Juicio de Don Ramón.
 * Four investigation days and four trial days; `adjournment.next` chains thrice.
 */

import type {
  AdjournmentDefinition, CaseScript, ClimaxDefinition, DialogueLine, Testimony, TrialDayScript
} from '../../types/index.js';
import {
  CASE5_DAY1_EVIDENCE, CASE5_DAY1_UNLOCK, CASE5_DAY2_EVIDENCE,
  CASE5_DAY3_EVIDENCE, CASE5_DAY4_EVIDENCE, CASE5_DEBUG_EVIDENCE,
  CASE5_DEBUG_PROFILES
} from './Private/progress.js';
import {
  CASE5_DAY2_INTRO, CASE5_DAY2_INTRO_EN, CASE5_DAY3_INTRO, CASE5_DAY3_INTRO_EN,
  CASE5_DAY4_INTRO, CASE5_DAY4_INTRO_EN, CASE5_TRIAL_INTRO, CASE5_TRIAL_INTRO_EN
} from './Private/trial_openings.js';
import { CASE5_CELDA } from './Private/celda.js';
import { CASE5_ARCHIVO_VESTIBULO } from './Private/archivo_vestibulo.js';
import { CASE5_ARCHIVO_PASILLO7 } from './Private/archivo_pasillo7.js';

interface Case5Parts {
  scenes: CaseScript['investigation'];
  intro: DialogueLine[];
  t1: Testimony;
  t2: Testimony;
  t3: Testimony;
  day2Intro: DialogueLine[];
  t4: Testimony;
  t5: Testimony;
  day3Intro: DialogueLine[];
  t6: Testimony;
  t7: Testimony;
  t8: Testimony;
  day4Intro: DialogueLine[];
  t9: Testimony;
  climax: ClimaxDefinition;
}

const PLACEHOLDER_TESTIMONY: Testimony = {
  title: 'Placeholder',
  witness: 'NARRADOR',
  bgm: 'cross_exam_moderato',
  statements: []
};

const PLACEHOLDER_CLIMAX: ClimaxDefinition = {
  dialogue: [{ speaker: 'JUEZ', pose: 'judge_neutral', text: '…', bgm: 'suspense' }],
  presentTarget: ['credencial_sindico'],
  verdict: [{ speaker: 'JUEZ', pose: 'judge_gavel', text: '…', sfx: 'gavel' }]
};

function dayTrial(intro: DialogueLine[], testimonies: Testimony[]): TrialDayScript {
  return {
    intro,
    testimonies,
    testimony1: testimonies[0],
    testimony2: testimonies[1]
  };
}

function adjournmentChain(parts: Case5Parts): AdjournmentDefinition {
  return {
    nextLocation: 'vecindad_c5',
    unlockLocations: ['vecindad_c5'],
    requiredEvidence: CASE5_DAY2_EVIDENCE,
    trial: dayTrial(parts.day2Intro, [parts.t4, parts.t5]),
    next: {
      nextLocation: 'bodega_masa',
      unlockLocations: ['bodega_masa'],
      requiredEvidence: CASE5_DAY3_EVIDENCE,
      trial: dayTrial(parts.day3Intro, [parts.t6, parts.t7, parts.t8]),
      next: {
        nextLocation: 'celda_c5_d4',
        unlockLocations: ['celda_c5_d4'],
        requiredEvidence: CASE5_DAY4_EVIDENCE,
        trial: dayTrial(parts.day4Intro, [parts.t9])
      }
    }
  };
}

function assembleCase5(parts: Case5Parts): CaseScript {
  return {
    id: 'case5',
    startLocation: 'celda_c5',
    requiredEvidence: CASE5_DAY1_EVIDENCE,
    debugEvidence: CASE5_DEBUG_EVIDENCE,
    debugProfiles: CASE5_DEBUG_PROFILES,
    debugUnlockLocations: CASE5_DAY1_UNLOCK,
    investigation: parts.scenes,
    trial: {
      intro: parts.intro,
      testimonies: [parts.t1, parts.t2, parts.t3],
      testimony1: parts.t1,
      testimony2: parts.t2,
      climax: parts.climax
    },
    adjournment: adjournmentChain(parts)
  };
}

const PLACEHOLDER_PARTS_ES: Case5Parts = {
  scenes: {
    celda_c5: CASE5_CELDA,
    archivo_vestibulo: CASE5_ARCHIVO_VESTIBULO,
    archivo_pasillo7: CASE5_ARCHIVO_PASILLO7
  },
  intro: CASE5_TRIAL_INTRO,
  t1: PLACEHOLDER_TESTIMONY,
  t2: PLACEHOLDER_TESTIMONY,
  t3: PLACEHOLDER_TESTIMONY,
  day2Intro: CASE5_DAY2_INTRO,
  t4: PLACEHOLDER_TESTIMONY,
  t5: PLACEHOLDER_TESTIMONY,
  day3Intro: CASE5_DAY3_INTRO,
  t6: PLACEHOLDER_TESTIMONY,
  t7: PLACEHOLDER_TESTIMONY,
  t8: PLACEHOLDER_TESTIMONY,
  day4Intro: CASE5_DAY4_INTRO,
  t9: PLACEHOLDER_TESTIMONY,
  climax: PLACEHOLDER_CLIMAX
};

const PLACEHOLDER_PARTS_EN: Case5Parts = {
  ...PLACEHOLDER_PARTS_ES,
  scenes: {},
  intro: CASE5_TRIAL_INTRO_EN,
  day2Intro: CASE5_DAY2_INTRO_EN,
  day3Intro: CASE5_DAY3_INTRO_EN,
  day4Intro: CASE5_DAY4_INTRO_EN
};

export const CASE_SCRIPT_CASE5_ES: CaseScript = assembleCase5(PLACEHOLDER_PARTS_ES);
export const CASE_SCRIPT_CASE5_EN: CaseScript = assembleCase5(PLACEHOLDER_PARTS_EN);
