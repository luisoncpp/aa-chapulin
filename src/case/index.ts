// @Architecture(descriptionShort="Public facade exporting bilingual case 1–4 scripts", type="facade", icon="layers")
/**
 * Case Script Subsystem Public Interface (Spanish & English)
 * Assembles data from case 1, case 2, case 3, and case 4 modules.
 */

import type { CaseId, CaseScript, Language } from '../types/index.js';
import { CASE_SCRIPT_CASE1_EN, CASE_SCRIPT_CASE1_ES } from './case1/index.js';
import { CASE_SCRIPT_CASE2_EN, CASE_SCRIPT_CASE2_ES } from './case2/index.js';
import { CASE_SCRIPT_CASE3_EN, CASE_SCRIPT_CASE3_ES } from './case3/index.js';
import { CASE_SCRIPT_CASE4_EN, CASE_SCRIPT_CASE4_ES } from './case4/index.js';

// fallow-ignore-next-line unused-export
export { CASE_SCRIPT_CASE1_EN, CASE_SCRIPT_CASE1_ES } from './case1/index.js';
// fallow-ignore-next-line unused-export
export { CASE_SCRIPT_CASE2_EN, CASE_SCRIPT_CASE2_ES } from './case2/index.js';
// fallow-ignore-next-line unused-export
export { CASE_SCRIPT_CASE3_EN, CASE_SCRIPT_CASE3_ES } from './case3/index.js';
// fallow-ignore-next-line unused-export
export { CASE_SCRIPT_CASE4_EN, CASE_SCRIPT_CASE4_ES } from './case4/index.js';

// @Section(Case Script Facade)
export const CASE_SCRIPT: CaseScript = CASE_SCRIPT_CASE1_ES;

const SCRIPTS: Record<CaseId, Record<Language, CaseScript>> = {
  case1: { es: CASE_SCRIPT_CASE1_ES, en: CASE_SCRIPT_CASE1_EN },
  case2: { es: CASE_SCRIPT_CASE2_ES, en: CASE_SCRIPT_CASE2_EN },
  case3: { es: CASE_SCRIPT_CASE3_ES, en: CASE_SCRIPT_CASE3_EN },
  case4: { es: CASE_SCRIPT_CASE4_ES, en: CASE_SCRIPT_CASE4_EN }
};

export function getCaseScript(lang: Language = 'es', caseId: CaseId = 'case1'): CaseScript {
  return SCRIPTS[caseId]?.[lang] ?? (lang === 'en' ? CASE_SCRIPT_CASE1_EN : CASE_SCRIPT_CASE1_ES);
}
