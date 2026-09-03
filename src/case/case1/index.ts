// @Architecture(descriptionShort="Public facade assembling bilingual Case 1 scripts", type="facade", icon="layers")
/**
 * Case 1: El Chapulín Colorado: Turnabout Red Grasshopper.
 */

import type { CaseScript } from '../../types/index.js';
import { CLIMAX_DATA } from './Private/climax.js';
import { CLIMAX_DATA_EN } from './Private/climax_en.js';
import { INVESTIGATION_SCENES } from './Private/investigation.js';
import { INVESTIGATION_SCENES_EN } from './Private/investigation_en.js';
import { CASE1_DEBUG, CASE1_REQUIRED, CASE1_UNLOCK } from './Private/progress.js';
import { TESTIMONY_1, TESTIMONY_2, TRIAL_INTRO } from './Private/trial.js';
import { TESTIMONY_1_EN, TESTIMONY_2_EN, TRIAL_INTRO_EN } from './Private/trial_en.js';

export const CASE_SCRIPT_CASE1_ES: CaseScript = {
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

export const CASE_SCRIPT_CASE1_EN: CaseScript = {
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
