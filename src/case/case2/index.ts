// @Architecture(descriptionShort="Public facade assembling bilingual Case 2 scripts", type="facade", icon="layers")
/**
 * Case 2: El Juicio del Chómpiras — El Chanfle de Oro.
 */

import type { CaseScript } from '../../types/index.js';
import { CASE2_BOVEDA } from './Private/boveda.js';
import { CASE2_BOVEDA_EN } from './Private/boveda_en.js';
import { CASE2_CLIMAX } from './Private/climax.js';
import { CASE2_CLIMAX_EN } from './Private/climax_en.js';
import { CASE2_CLOTILDE } from './Private/clotilde.js';
import { CASE2_CLOTILDE_EN } from './Private/clotilde_en.js';
import { CASE2_DETENTION } from './Private/detention.js';
import { CASE2_DETENTION_EN } from './Private/detention_en.js';
import { CASE2_POSTAL } from './Private/postal.js';
import { CASE2_POSTAL_EN } from './Private/postal_en.js';
import { CASE2_DAY1_EVIDENCE, CASE2_DAY2_EVIDENCE, CASE2_UNLOCK } from './Private/progress.js';
import { CASE2_RESTAURANTE } from './Private/restaurante.js';
import { CASE2_RESTAURANTE_EN } from './Private/restaurante_en.js';
import { CASE2_TESTIMONY_1, CASE2_TRIAL_INTRO } from './Private/trial_day1.js';
import { CASE2_TESTIMONY_1_EN, CASE2_TRIAL_INTRO_EN } from './Private/trial_day1_en.js';
import { CASE2_TESTIMONY_2 } from './Private/trial_day1_t2.js';
import { CASE2_TESTIMONY_2_EN } from './Private/trial_day1_t2_en.js';
import { CASE2_DAY2_INTRO, CASE2_TESTIMONY_3 } from './Private/trial_day2.js';
import { CASE2_DAY2_INTRO_EN, CASE2_TESTIMONY_3_EN } from './Private/trial_day2_en.js';
import { CASE2_TESTIMONY_4 } from './Private/trial_day2_t2.js';
import { CASE2_TESTIMONY_4_EN } from './Private/trial_day2_t2_en.js';

export const CASE_SCRIPT_CASE2_ES: CaseScript = {
  id: 'case2',
  startLocation: 'detention',
  requiredEvidence: CASE2_DAY1_EVIDENCE,
  debugEvidence: CASE2_DAY1_EVIDENCE,
  debugUnlockLocations: CASE2_UNLOCK,
  investigation: {
    detention: CASE2_DETENTION,
    boveda: CASE2_BOVEDA,
    restaurante: CASE2_RESTAURANTE,
    oficina_postal: CASE2_POSTAL,
    casa_clotilde: CASE2_CLOTILDE
  },
  trial: {
    intro: CASE2_TRIAL_INTRO,
    testimony1: CASE2_TESTIMONY_1,
    testimony2: CASE2_TESTIMONY_2,
    climax: CASE2_CLIMAX
  },
  adjournment: {
    nextLocation: 'oficina_postal',
    unlockLocations: ['oficina_postal'],
    requiredEvidence: CASE2_DAY2_EVIDENCE,
    trial: {
      intro: CASE2_DAY2_INTRO,
      testimony1: CASE2_TESTIMONY_3,
      testimony2: CASE2_TESTIMONY_4
    }
  }
};

export const CASE_SCRIPT_CASE2_EN: CaseScript = {
  id: 'case2',
  startLocation: 'detention',
  requiredEvidence: CASE2_DAY1_EVIDENCE,
  debugEvidence: CASE2_DAY1_EVIDENCE,
  debugUnlockLocations: CASE2_UNLOCK,
  investigation: {
    detention: CASE2_DETENTION_EN,
    boveda: CASE2_BOVEDA_EN,
    restaurante: CASE2_RESTAURANTE_EN,
    oficina_postal: CASE2_POSTAL_EN,
    casa_clotilde: CASE2_CLOTILDE_EN
  },
  trial: {
    intro: CASE2_TRIAL_INTRO_EN,
    testimony1: CASE2_TESTIMONY_1_EN,
    testimony2: CASE2_TESTIMONY_2_EN,
    climax: CASE2_CLIMAX_EN
  },
  adjournment: {
    nextLocation: 'oficina_postal',
    unlockLocations: ['oficina_postal'],
    requiredEvidence: CASE2_DAY2_EVIDENCE,
    trial: {
      intro: CASE2_DAY2_INTRO_EN,
      testimony1: CASE2_TESTIMONY_3_EN,
      testimony2: CASE2_TESTIMONY_4_EN
    }
  }
};
