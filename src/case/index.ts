// @Architecture(descriptionShort="Public facade exporting complete case 1 narrative script", type="facade", icon="layers")
/**
 * Case Script Subsystem Public Interface
 * Assembles data from [[./Private/case1_investigation.ts]], [[./Private/case1_trial.ts]], and [[./Private/case1_climax.ts]].
 */

import type { CaseScript } from '../types/index.js';
import { CLIMAX_DATA } from './Private/case1_climax.js';
import { INVESTIGATION_SCENES } from './Private/case1_investigation.js';
import { TESTIMONY_1, TESTIMONY_2, TRIAL_INTRO } from './Private/case1_trial.js';

// @Section(Case 1 Script Aggregation)
export const CASE_SCRIPT: CaseScript = {
  investigation: INVESTIGATION_SCENES,
  trial: {
    intro: TRIAL_INTRO,
    testimony1: TESTIMONY_1,
    testimony2: TESTIMONY_2,
    climax: CLIMAX_DATA
  }
};
