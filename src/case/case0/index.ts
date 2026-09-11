// @Architecture(descriptionShort="Public facade assembling bilingual Case 0 scripts", type="facade", icon="layers")
import type { CaseScript } from '../../types/index.js';
import { CASE0_CLIMAX } from './Private/climax.js';
import { CASE0_CLIMAX_EN } from './Private/climax_en.js';
import { CASE0_DEBUG, CASE0_REQUIRED, CASE0_UNLOCK } from './Private/progress.js';
import {
  CASE0_OPENING_PRESENT, CASE0_TESTIMONY_1, CASE0_TESTIMONY_2, CASE0_TESTIMONY_3, CASE0_TRIAL_INTRO
} from './Private/trial.js';
import {
  CASE0_OPENING_PRESENT_EN, CASE0_TESTIMONY_1_EN, CASE0_TESTIMONY_2_EN, CASE0_TESTIMONY_3_EN, CASE0_TRIAL_INTRO_EN
} from './Private/trial_en.js';

export const CASE_SCRIPT_CASE0_ES: CaseScript = {
  id: 'case0', startLocation: 'courtroom', requiredEvidence: CASE0_REQUIRED,
  debugEvidence: CASE0_DEBUG, debugUnlockLocations: CASE0_UNLOCK, investigation: {},
  trial: { intro: CASE0_TRIAL_INTRO, testimonies: [CASE0_TESTIMONY_1, CASE0_TESTIMONY_2, CASE0_TESTIMONY_3], testimony1: CASE0_TESTIMONY_1, testimony2: CASE0_TESTIMONY_2, climax: CASE0_CLIMAX, openingPresent: CASE0_OPENING_PRESENT }
};

export const CASE_SCRIPT_CASE0_EN: CaseScript = {
  id: 'case0', startLocation: 'courtroom', requiredEvidence: CASE0_REQUIRED,
  debugEvidence: CASE0_DEBUG, debugUnlockLocations: CASE0_UNLOCK, investigation: {},
  trial: { intro: CASE0_TRIAL_INTRO_EN, testimonies: [CASE0_TESTIMONY_1_EN, CASE0_TESTIMONY_2_EN, CASE0_TESTIMONY_3_EN], testimony1: CASE0_TESTIMONY_1_EN, testimony2: CASE0_TESTIMONY_2_EN, climax: CASE0_CLIMAX_EN, openingPresent: CASE0_OPENING_PRESENT_EN }
};
