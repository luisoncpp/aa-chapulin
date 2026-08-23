/**
 * Case Script Subsystem Public Interface
 */

import type { CaseScript } from '../types/index.js';
import { CLIMAX_DATA } from './Private/case1_climax.js';
import { INVESTIGATION_SCENES } from './Private/case1_investigation.js';
import { TESTIMONY_1, TESTIMONY_2, TRIAL_INTRO } from './Private/case1_trial.js';

export const CASE_SCRIPT: CaseScript = {
  investigation: INVESTIGATION_SCENES,
  trial: {
    intro: TRIAL_INTRO,
    testimony1: TESTIMONY_1,
    testimony2: TESTIMONY_2,
    climax: CLIMAX_DATA
  }
};
