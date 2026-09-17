// @Architecture(descriptionShort="Public facade assembling bilingual Case 1 scripts", type="facade", icon="layers")
/**
 * Case 1: El Juicio del Chapulín Colorado — La Chicharra de Oro.
 * Two investigation days and two trial days; `adjournment.next` is deliberately
 * absent because the case ends on day 2 (spec §8.1).
 */

import type {
  CaseScript, ClimaxDefinition, DialogueLine, OpeningPresent, Testimony
} from '../../types/index.js';
import { CASE1_CAMARAS } from './Private/camaras.js';
import { CASE1_CAMARAS_EN } from './Private/camaras_en.js';
import { CASE1_CLIMAX } from './Private/climax.js';
import { CASE1_CLIMAX_EN } from './Private/climax_en.js';
import { CASE1_CLINICA } from './Private/clinica.js';
import { CASE1_CLINICA_EN } from './Private/clinica_en.js';
import { CASE1_CLINICA_D2 } from './Private/clinica_d2.js';
import { CASE1_CLINICA_D2_EN } from './Private/clinica_d2_en.js';
import { CASE1_DETENTION } from './Private/detention.js';
import { CASE1_DETENTION_EN } from './Private/detention_en.js';
import { CASE1_MUSEO } from './Private/museo.js';
import { CASE1_MUSEO_EN } from './Private/museo_en.js';
import { CASE1_PATIO } from './Private/patio.js';
import { CASE1_PATIO_EN } from './Private/patio_en.js';
import {
  CASE1_DAY1_EVIDENCE, CASE1_DAY1_UNLOCK, CASE1_DAY2_EVIDENCE, CASE1_DAY2_UNLOCK,
  CASE1_DEBUG_EVIDENCE, CASE1_DEBUG_PROFILES
} from './Private/progress.js';
import { CASE1_TESTIMONY_1, CASE1_TRIAL_INTRO } from './Private/trial_day1.js';
import { CASE1_TESTIMONY_1_EN, CASE1_TRIAL_INTRO_EN } from './Private/trial_day1_en.js';
import { CASE1_TESTIMONY_2 } from './Private/trial_day1_t2.js';
import { CASE1_TESTIMONY_2_EN } from './Private/trial_day1_t2_en.js';
import {
  CASE1_DAY2_INTRO, CASE1_DAY2_OPENING_PRESENT, CASE1_TESTIMONY_3
} from './Private/trial_day2.js';
import {
  CASE1_DAY2_INTRO_EN, CASE1_DAY2_OPENING_PRESENT_EN, CASE1_TESTIMONY_3_EN
} from './Private/trial_day2_en.js';
import { CASE1_TESTIMONY_4 } from './Private/trial_day2_t2.js';
import { CASE1_TESTIMONY_4_EN } from './Private/trial_day2_t2_en.js';
import { CASE1_TESTIMONY_5 } from './Private/trial_day2_t3.js';
import { CASE1_TESTIMONY_5_EN } from './Private/trial_day2_t3_en.js';

interface Case1Parts {
  scenes: CaseScript['investigation'];
  intro: DialogueLine[];
  t1: Testimony;
  t2: Testimony;
  day2Intro: DialogueLine[];
  day2Opening: OpeningPresent;
  t3: Testimony;
  t4: Testimony;
  t5: Testimony;
  climax: ClimaxDefinition;
}

function assembleCase1(parts: Case1Parts): CaseScript {
  return {
    id: 'case1',
    startLocation: 'detention',
    requiredEvidence: CASE1_DAY1_EVIDENCE,
    debugEvidence: CASE1_DEBUG_EVIDENCE,
    debugProfiles: CASE1_DEBUG_PROFILES,
    debugUnlockLocations: CASE1_DAY1_UNLOCK,
    investigation: parts.scenes,
    trial: {
      intro: parts.intro,
      testimonies: [parts.t1, parts.t2],
      testimony1: parts.t1,
      testimony2: parts.t2,
      climax: parts.climax
    },
    adjournment: {
      nextLocation: 'patio_carga',
      unlockLocations: CASE1_DAY2_UNLOCK,
      requiredEvidence: CASE1_DAY2_EVIDENCE,
      trial: {
        intro: parts.day2Intro,
        openingPresent: parts.day2Opening,
        testimonies: [parts.t3, parts.t4, parts.t5],
        testimony1: parts.t3,
        testimony2: parts.t4
      }
    }
  };
}

const SCENES_ES: CaseScript['investigation'] = {
  detention: CASE1_DETENTION,
  museo_sala2: CASE1_MUSEO,
  clinica: CASE1_CLINICA,
  patio_carga: CASE1_PATIO,
  cuarto_camaras: CASE1_CAMARAS,
  clinica_d2: CASE1_CLINICA_D2
};

const SCENES_EN: CaseScript['investigation'] = {
  detention: CASE1_DETENTION_EN,
  museo_sala2: CASE1_MUSEO_EN,
  clinica: CASE1_CLINICA_EN,
  patio_carga: CASE1_PATIO_EN,
  cuarto_camaras: CASE1_CAMARAS_EN,
  clinica_d2: CASE1_CLINICA_D2_EN
};

export const CASE_SCRIPT_CASE1_ES: CaseScript = assembleCase1({
  scenes: SCENES_ES,
  intro: CASE1_TRIAL_INTRO,
  t1: CASE1_TESTIMONY_1,
  t2: CASE1_TESTIMONY_2,
  day2Intro: CASE1_DAY2_INTRO,
  day2Opening: CASE1_DAY2_OPENING_PRESENT,
  t3: CASE1_TESTIMONY_3,
  t4: CASE1_TESTIMONY_4,
  t5: CASE1_TESTIMONY_5,
  climax: CASE1_CLIMAX
});

export const CASE_SCRIPT_CASE1_EN: CaseScript = assembleCase1({
  scenes: SCENES_EN,
  intro: CASE1_TRIAL_INTRO_EN,
  t1: CASE1_TESTIMONY_1_EN,
  t2: CASE1_TESTIMONY_2_EN,
  day2Intro: CASE1_DAY2_INTRO_EN,
  day2Opening: CASE1_DAY2_OPENING_PRESENT_EN,
  t3: CASE1_TESTIMONY_3_EN,
  t4: CASE1_TESTIMONY_4_EN,
  t5: CASE1_TESTIMONY_5_EN,
  climax: CASE1_CLIMAX_EN
});
