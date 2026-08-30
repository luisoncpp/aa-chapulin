// @Architecture(descriptionShort="Public facade assembling bilingual Case 3 scripts", type="facade", icon="layers")
/**
 * Case 3: El Juicio del Doctor Chapatín — La Noche del Grito.
 */

import type { CaseScript, ClimaxDefinition, DialogueLine, Testimony } from '../../types/index.js';
import { CASE3_BODEGA } from './Private/bodega.js';
import { CASE3_BODEGA_EN } from './Private/bodega_en.js';
import { CASE3_CABINA } from './Private/cabina.js';
import { CASE3_CABINA_EN } from './Private/cabina_en.js';
import { CASE3_CLIMAX } from './Private/climax.js';
import { CASE3_CLIMAX_EN } from './Private/climax_en.js';
import { CASE3_CLINICA } from './Private/clinica.js';
import { CASE3_CLINICA_EN } from './Private/clinica_en.js';
import { CASE3_DELEGACION } from './Private/delegacion.js';
import { CASE3_DELEGACION_D3 } from './Private/delegacion_d3.js';
import { CASE3_DELEGACION_D3_EN } from './Private/delegacion_d3_en.js';
import { CASE3_DELEGACION_EN } from './Private/delegacion_en.js';
import { CASE3_DESPACHO } from './Private/despacho.js';
import { CASE3_DESPACHO_EN } from './Private/despacho_en.js';
import { CASE3_DETENTION } from './Private/detention.js';
import { CASE3_DETENTION_D3 } from './Private/detention_d3.js';
import { CASE3_DETENTION_D3_EN } from './Private/detention_d3_en.js';
import { CASE3_DETENTION_EN } from './Private/detention_en.js';
import { CASE3_KERMES } from './Private/kermes.js';
import { CASE3_KERMES_EN } from './Private/kermes_en.js';
import {
  CASE3_DAY1_EVIDENCE, CASE3_DAY1_UNLOCK, CASE3_DAY2_EVIDENCE,
  CASE3_DAY3_EVIDENCE, CASE3_DEBUG_EVIDENCE
} from './Private/progress.js';
import { CASE3_TESTIMONY_1, CASE3_TRIAL_INTRO } from './Private/trial_day1.js';
import { CASE3_TESTIMONY_1_EN, CASE3_TRIAL_INTRO_EN } from './Private/trial_day1_en.js';
import { CASE3_TESTIMONY_2 } from './Private/trial_day1_t2.js';
import { CASE3_TESTIMONY_2_EN } from './Private/trial_day1_t2_en.js';
import { CASE3_DAY2_INTRO, CASE3_TESTIMONY_3 } from './Private/trial_day2.js';
import { CASE3_DAY2_INTRO_EN, CASE3_TESTIMONY_3_EN } from './Private/trial_day2_en.js';
import { CASE3_TESTIMONY_4 } from './Private/trial_day2_t2.js';
import { CASE3_TESTIMONY_4_EN } from './Private/trial_day2_t2_en.js';
import { CASE3_DAY3_INTRO, CASE3_TESTIMONY_5 } from './Private/trial_day3.js';
import { CASE3_DAY3_INTRO_EN, CASE3_TESTIMONY_5_EN } from './Private/trial_day3_en.js';
import { CASE3_TESTIMONY_6 } from './Private/trial_day3_t2.js';
import { CASE3_TESTIMONY_6_EN } from './Private/trial_day3_t2_en.js';

interface Case3Parts {
  scenes: CaseScript['investigation'];
  intro: DialogueLine[];
  t1: Testimony;
  t2: Testimony;
  day2Intro: DialogueLine[];
  t3: Testimony;
  t4: Testimony;
  day3Intro: DialogueLine[];
  t5: Testimony;
  t6: Testimony;
  climax: ClimaxDefinition;
}

function assembleCase3(parts: Case3Parts): CaseScript {
  return {
    id: 'case3',
    startLocation: 'detention',
    requiredEvidence: CASE3_DAY1_EVIDENCE,
    debugEvidence: CASE3_DEBUG_EVIDENCE,
    debugUnlockLocations: CASE3_DAY1_UNLOCK,
    investigation: parts.scenes,
    trial: {
      intro: parts.intro,
      testimony1: parts.t1,
      testimony2: parts.t2,
      climax: parts.climax
    },
    adjournment: {
      nextLocation: 'despacho_barriga',
      unlockLocations: ['despacho_barriga'],
      requiredEvidence: CASE3_DAY2_EVIDENCE,
      trial: { intro: parts.day2Intro, testimony1: parts.t3, testimony2: parts.t4 },
      next: {
        nextLocation: 'bodega_radio',
        unlockLocations: ['bodega_radio'],
        requiredEvidence: CASE3_DAY3_EVIDENCE,
        trial: { intro: parts.day3Intro, testimony1: parts.t5, testimony2: parts.t6 }
      }
    }
  };
}

const SCENES_ES: CaseScript['investigation'] = {
  detention: CASE3_DETENTION,
  cabina_radio: CASE3_CABINA,
  plaza_kermes: CASE3_KERMES,
  despacho_barriga: CASE3_DESPACHO,
  clinica_chapatin: CASE3_CLINICA,
  delegacion: CASE3_DELEGACION,
  bodega_radio: CASE3_BODEGA,
  delegacion_d3: CASE3_DELEGACION_D3,
  detention_d3: CASE3_DETENTION_D3
};

const SCENES_EN: CaseScript['investigation'] = {
  detention: CASE3_DETENTION_EN,
  cabina_radio: CASE3_CABINA_EN,
  plaza_kermes: CASE3_KERMES_EN,
  despacho_barriga: CASE3_DESPACHO_EN,
  clinica_chapatin: CASE3_CLINICA_EN,
  delegacion: CASE3_DELEGACION_EN,
  bodega_radio: CASE3_BODEGA_EN,
  delegacion_d3: CASE3_DELEGACION_D3_EN,
  detention_d3: CASE3_DETENTION_D3_EN
};

export const CASE_SCRIPT_CASE3_ES: CaseScript = assembleCase3({
  scenes: SCENES_ES,
  intro: CASE3_TRIAL_INTRO,
  t1: CASE3_TESTIMONY_1,
  t2: CASE3_TESTIMONY_2,
  day2Intro: CASE3_DAY2_INTRO,
  t3: CASE3_TESTIMONY_3,
  t4: CASE3_TESTIMONY_4,
  day3Intro: CASE3_DAY3_INTRO,
  t5: CASE3_TESTIMONY_5,
  t6: CASE3_TESTIMONY_6,
  climax: CASE3_CLIMAX
});

export const CASE_SCRIPT_CASE3_EN: CaseScript = assembleCase3({
  scenes: SCENES_EN,
  intro: CASE3_TRIAL_INTRO_EN,
  t1: CASE3_TESTIMONY_1_EN,
  t2: CASE3_TESTIMONY_2_EN,
  day2Intro: CASE3_DAY2_INTRO_EN,
  t3: CASE3_TESTIMONY_3_EN,
  t4: CASE3_TESTIMONY_4_EN,
  day3Intro: CASE3_DAY3_INTRO_EN,
  t5: CASE3_TESTIMONY_5_EN,
  t6: CASE3_TESTIMONY_6_EN,
  climax: CASE3_CLIMAX_EN
});
