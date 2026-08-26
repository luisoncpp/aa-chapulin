// @Architecture(descriptionShort="Public facade exporting bilingual case 1 narrative scripts", type="facade", icon="layers")
/**
 * Case Script Subsystem Public Interface (Spanish & English)
 * Assembles data from investigation, trial, and climax private scripts.
 */

import type { CaseScript, Language } from '../types/index.js';
import { CLIMAX_DATA } from './Private/case1_climax.js';
import { CLIMAX_DATA_EN } from './Private/case1_climax_en.js';
import { INVESTIGATION_SCENES } from './Private/case1_investigation.js';
import { INVESTIGATION_SCENES_EN } from './Private/case1_investigation_en.js';
import { TESTIMONY_1, TESTIMONY_2, TRIAL_INTRO } from './Private/case1_trial.js';
import { TESTIMONY_1_EN, TESTIMONY_2_EN, TRIAL_INTRO_EN } from './Private/case1_trial_en.js';

// @Section(Case 1 Spanish Script)
// fallow-ignore-next-line unused-export
export const CASE_SCRIPT_ES: CaseScript = {
  investigation: INVESTIGATION_SCENES,
  trial: {
    intro: TRIAL_INTRO,
    testimony1: TESTIMONY_1,
    testimony2: TESTIMONY_2,
    climax: CLIMAX_DATA
  }
};

// @Section(Case 1 English Script)
// fallow-ignore-next-line unused-export
export const CASE_SCRIPT_EN: CaseScript = {
  investigation: INVESTIGATION_SCENES_EN,
  trial: {
    intro: TRIAL_INTRO_EN,
    testimony1: TESTIMONY_1_EN,
    testimony2: TESTIMONY_2_EN,
    climax: CLIMAX_DATA_EN
  }
};

// @Section(Case Script Facade)
export const CASE_SCRIPT: CaseScript = CASE_SCRIPT_ES;

export function getCaseScript(lang: Language = 'es'): CaseScript {
  return lang === 'en' ? CASE_SCRIPT_EN : CASE_SCRIPT_ES;
}
