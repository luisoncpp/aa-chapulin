// @Architecture(descriptionShort="Public facade exporting bilingual case 1 and case 2 scripts", type="facade", icon="layers")
/**
 * Case Script Subsystem Public Interface (Spanish & English)
 * Assembles data from investigation, trial, and climax private scripts.
 */

import type { CaseId, CaseScript, EvidenceId, Language, LocationId } from '../types/index.js';
import { CLIMAX_DATA } from './Private/case1_climax.js';
import { CLIMAX_DATA_EN } from './Private/case1_climax_en.js';
import { INVESTIGATION_SCENES } from './Private/case1_investigation.js';
import { INVESTIGATION_SCENES_EN } from './Private/case1_investigation_en.js';
import { TESTIMONY_1, TESTIMONY_2, TRIAL_INTRO } from './Private/case1_trial.js';
import { TESTIMONY_1_EN, TESTIMONY_2_EN, TRIAL_INTRO_EN } from './Private/case1_trial_en.js';
export { CASE_SCRIPT_CASE2_EN, CASE_SCRIPT_CASE2_ES } from './Private/case2_script.js';
import { CASE_SCRIPT_CASE2_EN, CASE_SCRIPT_CASE2_ES } from './Private/case2_script.js';
import { CASE_SCRIPT_CASE3_EN, CASE_SCRIPT_CASE3_ES } from './Private/case3_script.js';

const CASE1_REQUIRED: EvidenceId[] = [
  'chipote_chillon', 'pastillas_chiquitolina', 'antenitas_vinil',
  'informe_medico', 'foto_crimen'
];
const CASE1_DEBUG: EvidenceId[] = [...CASE1_REQUIRED, 'bolsa_dolares'];
const CASE1_UNLOCK: LocationId[] = ['detention'];

// @Section(Case 1 Spanish Script)
// fallow-ignore-next-line unused-export
export const CASE_SCRIPT_ES: CaseScript = {
  id: 'case1',
  startLocation: 'museum',
  requiredEvidence: CASE1_REQUIRED,
  debugEvidence: CASE1_DEBUG,
  debugUnlockLocations: CASE1_UNLOCK,
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
  id: 'case1',
  startLocation: 'museum',
  requiredEvidence: CASE1_REQUIRED,
  debugEvidence: CASE1_DEBUG,
  debugUnlockLocations: CASE1_UNLOCK,
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

export function getCaseScript(lang: Language = 'es', caseId: CaseId = 'case1'): CaseScript {
  if (caseId === 'case3') {
    return lang === 'en' ? CASE_SCRIPT_CASE3_EN : CASE_SCRIPT_CASE3_ES;
  }
  if (caseId === 'case2') {
    return lang === 'en' ? CASE_SCRIPT_CASE2_EN : CASE_SCRIPT_CASE2_ES;
  }
  return lang === 'en' ? CASE_SCRIPT_EN : CASE_SCRIPT_ES;
}
