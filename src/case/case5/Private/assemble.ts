// @Architecture(descriptionShort="Shared Case 5 script assembly for ES and EN parts", type="util", icon="layers")
/**
 * Assembles four-day Case 5 scripts. Language parts live in parts_es / parts_en.
 */

import type {
  AdjournmentDefinition, CaseScript, ClimaxDefinition, DialogueLine, OpeningPresent, Testimony,
  TrialDayScript
} from '../../../types/index.js';
import {
  CASE5_DAY1_EVIDENCE, CASE5_DAY1_UNLOCK, CASE5_DAY2_EVIDENCE,
  CASE5_DAY3_EVIDENCE, CASE5_DAY4_EVIDENCE, CASE5_DEBUG_EVIDENCE,
  CASE5_DEBUG_PROFILES
} from './progress.js';

export interface Case5Parts {
  scenes: CaseScript['investigation'];
  intro: DialogueLine[];
  day1Opening?: OpeningPresent;
  t1: Testimony;
  t2: Testimony;
  t3: Testimony;
  day2Intro: DialogueLine[];
  day2Opening?: OpeningPresent;
  t4: Testimony;
  t5: Testimony;
  day3Intro: DialogueLine[];
  day3Opening?: OpeningPresent;
  t6: Testimony;
  t7: Testimony;
  t8: Testimony;
  day4Intro: DialogueLine[];
  day4Opening?: OpeningPresent;
  t9: Testimony;
  climax: ClimaxDefinition;
}

function dayTrial(intro: DialogueLine[], testimonies: Testimony[]): TrialDayScript {
  return {
    intro,
    testimonies,
    testimony1: testimonies[0],
    testimony2: testimonies[1]
  };
}

function adjournmentChain(parts: Case5Parts): AdjournmentDefinition {
  return {
    nextLocation: 'vecindad_c5',
    unlockLocations: ['vecindad_c5'],
    requiredEvidence: CASE5_DAY2_EVIDENCE,
    trial: {
      ...dayTrial(parts.day2Intro, [parts.t4, parts.t5]),
      ...(parts.day2Opening ? { openingPresent: parts.day2Opening } : {})
    },
    next: {
      nextLocation: 'bodega_masa',
      unlockLocations: ['bodega_masa'],
      requiredEvidence: CASE5_DAY3_EVIDENCE,
      trial: {
        ...dayTrial(parts.day3Intro, [parts.t6, parts.t7, parts.t8]),
        ...(parts.day3Opening ? { openingPresent: parts.day3Opening } : {})
      },
      next: {
        nextLocation: 'celda_c5_d4',
        unlockLocations: ['celda_c5_d4'],
        requiredEvidence: CASE5_DAY4_EVIDENCE,
        trial: {
          ...dayTrial(parts.day4Intro, [parts.t9]),
          ...(parts.day4Opening ? { openingPresent: parts.day4Opening } : {})
        }
      }
    }
  };
}

export function assembleCase5(parts: Case5Parts): CaseScript {
  return {
    id: 'case5',
    startLocation: 'celda_c5',
    requiredEvidence: CASE5_DAY1_EVIDENCE,
    debugEvidence: CASE5_DEBUG_EVIDENCE,
    debugProfiles: CASE5_DEBUG_PROFILES,
    debugUnlockLocations: CASE5_DAY1_UNLOCK,
    investigation: parts.scenes,
    trial: {
      intro: parts.intro,
      testimonies: [parts.t1, parts.t2, parts.t3],
      testimony1: parts.t1,
      testimony2: parts.t2,
      climax: parts.climax,
      ...(parts.day1Opening ? { openingPresent: parts.day1Opening } : {})
    },
    adjournment: adjournmentChain(parts)
  };
}
