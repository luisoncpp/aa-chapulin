// @Architecture(descriptionShort="Assembles Case 2 investigation maps and bilingual case scripts", type="data", icon="layers")
/**
 * Case 2 script assembly: scenes, trial days, climax, and progression lists.
 */

import type { CaseScript, EvidenceId, LocationId } from '../../types/index.js';
import { CASE2_BOVEDA } from './case2_boveda.js';
import { CASE2_BOVEDA_EN } from './case2_boveda_en.js';
import { CASE2_CLOTILDE } from './case2_clotilde.js';
import { CASE2_CLOTILDE_EN } from './case2_clotilde_en.js';
import { CASE2_CLIMAX } from './case2_climax.js';
import { CASE2_CLIMAX_EN } from './case2_climax_en.js';
import { CASE2_DETENTION } from './case2_detention.js';
import { CASE2_DETENTION_EN } from './case2_detention_en.js';
import { CASE2_POSTAL } from './case2_postal.js';
import { CASE2_POSTAL_EN } from './case2_postal_en.js';
import { CASE2_RESTAURANTE } from './case2_restaurante.js';
import { CASE2_RESTAURANTE_EN } from './case2_restaurante_en.js';
import { CASE2_TESTIMONY_1, CASE2_TRIAL_INTRO } from './case2_trial_day1.js';
import { CASE2_TESTIMONY_1_EN, CASE2_TRIAL_INTRO_EN } from './case2_trial_day1_en.js';
import { CASE2_TESTIMONY_2 } from './case2_trial_day1_t2.js';
import { CASE2_TESTIMONY_2_EN } from './case2_trial_day1_t2_en.js';
import { CASE2_DAY2_INTRO, CASE2_TESTIMONY_3 } from './case2_trial_day2.js';
import { CASE2_DAY2_INTRO_EN, CASE2_TESTIMONY_3_EN } from './case2_trial_day2_en.js';
import { CASE2_TESTIMONY_4 } from './case2_trial_day2_t2.js';
import { CASE2_TESTIMONY_4_EN } from './case2_trial_day2_t2_en.js';

export const CASE2_DAY1_EVIDENCE: EvidenceId[] = [
  'palanca_rota', 'informe_boveda', 'reloj_pendulo',
  'aroma_dulce', 'plano_hacienda', 'caja_generador'
];

export const CASE2_DAY2_EVIDENCE: EvidenceId[] = [
  'multa_transito', 'registro_postal', 'lata_grasa',
  'antenitas_vinil', 'frasco_valeriana', 'molde_cera'
];

const CASE2_UNLOCK: LocationId[] = ['boveda', 'restaurante'];

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
