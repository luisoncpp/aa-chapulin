// @Architecture(descriptionShort="Public facade assembling bilingual Case 4 scripts", type="facade", icon="layers")
/**
 * Case 4: El Caso del Hotel Buena Vista.
 */

import type { CaseScript, ClimaxDefinition, DialogueLine, OpeningPresent, Testimony } from '../../types/index.js';
import { CASE4_CLIMAX } from './Private/climax.js';
import { CASE4_CLIMAX_EN } from './Private/climax_en.js';
import { CASE4_DETENTION } from './Private/detention.js';
import { CASE4_DETENTION_EN } from './Private/detention_en.js';
import { CASE4_DETENTION_D3 } from './Private/detention_d3.js';
import { CASE4_DETENTION_D3_EN } from './Private/detention_d3_en.js';
import { CASE4_DELEGACION } from './Private/delegacion.js';
import { CASE4_DELEGACION_EN } from './Private/delegacion_en.js';
import { CASE4_HOTEL_AZOTEA } from './Private/hotel_azotea.js';
import { CASE4_HOTEL_AZOTEA_EN } from './Private/hotel_azotea_en.js';
import { CASE4_HOTEL_CAVA } from './Private/hotel_cava.js';
import { CASE4_HOTEL_CAVA_EN } from './Private/hotel_cava_en.js';
import { CASE4_HOTEL_LOBBY } from './Private/hotel_lobby.js';
import { CASE4_HOTEL_LOBBY_D3 } from './Private/hotel_lobby_d3.js';
import { CASE4_HOTEL_LOBBY_D3_EN } from './Private/hotel_lobby_d3_en.js';
import { CASE4_HOTEL_LOBBY_EN } from './Private/hotel_lobby_en.js';
import { CASE4_HOTEL_SOTANO } from './Private/hotel_sotano.js';
import { CASE4_HOTEL_SOTANO_EN } from './Private/hotel_sotano_en.js';
import { CASE4_HOTEL_SUITE } from './Private/hotel_suite.js';
import { CASE4_HOTEL_SUITE204 } from './Private/hotel_suite204.js';
import { CASE4_HOTEL_SUITE204_EN } from './Private/hotel_suite204_en.js';
import { CASE4_HOTEL_SUITE_EN } from './Private/hotel_suite_en.js';
import { CASE4_HOTEL_TERRAZA } from './Private/hotel_terraza.js';
import { CASE4_HOTEL_TERRAZA_D2 } from './Private/hotel_terraza_d2.js';
import { CASE4_HOTEL_TERRAZA_D2_EN } from './Private/hotel_terraza_d2_en.js';
import { CASE4_HOTEL_TERRAZA_EN } from './Private/hotel_terraza_en.js';
import {
  CASE4_DAY1_EVIDENCE, CASE4_DAY1_UNLOCK, CASE4_DAY2_EVIDENCE,
  CASE4_DAY3_EVIDENCE, CASE4_DEBUG_EVIDENCE
} from './Private/progress.js';
import { CASE4_TESTIMONY_1, CASE4_TRIAL_INTRO } from './Private/trial_day1.js';
import { CASE4_TESTIMONY_1_EN, CASE4_TRIAL_INTRO_EN } from './Private/trial_day1_en.js';
import { CASE4_TESTIMONY_2 } from './Private/trial_day1_t2.js';
import { CASE4_TESTIMONY_2_EN } from './Private/trial_day1_t2_en.js';
import { CASE4_DAY2_INTRO, CASE4_TESTIMONY_3 } from './Private/trial_day2.js';
import { CASE4_DAY2_INTRO_EN, CASE4_TESTIMONY_3_EN } from './Private/trial_day2_en.js';
import { CASE4_TESTIMONY_4 } from './Private/trial_day2_t2.js';
import { CASE4_TESTIMONY_4_EN } from './Private/trial_day2_t2_en.js';
import {
  CASE4_DAY3_INTRO, CASE4_DAY3_OPENING_PRESENT, CASE4_TESTIMONY_5
} from './Private/trial_day3.js';
import {
  CASE4_DAY3_INTRO_EN, CASE4_DAY3_OPENING_PRESENT_EN, CASE4_TESTIMONY_5_EN
} from './Private/trial_day3_en.js';
import { CASE4_TESTIMONY_6 } from './Private/trial_day3_t2.js';
import { CASE4_TESTIMONY_6_EN } from './Private/trial_day3_t2_en.js';

interface Case4Parts {
  scenes: CaseScript['investigation'];
  intro: DialogueLine[];
  t1: Testimony;
  t2: Testimony;
  day2Intro: DialogueLine[];
  t3: Testimony;
  t4: Testimony;
  day3Intro: DialogueLine[];
  day3Opening: OpeningPresent;
  t5: Testimony;
  t6: Testimony;
  climax: ClimaxDefinition;
}

function assembleCase4(parts: Case4Parts): CaseScript {
  return {
    id: 'case4',
    startLocation: 'detention',
    requiredEvidence: CASE4_DAY1_EVIDENCE,
    debugEvidence: CASE4_DEBUG_EVIDENCE,
    debugUnlockLocations: CASE4_DAY1_UNLOCK,
    investigation: parts.scenes,
    trial: {
      intro: parts.intro,
      testimony1: parts.t1,
      testimony2: parts.t2,
      climax: parts.climax
    },
    adjournment: {
      nextLocation: 'hotel_sotano',
      unlockLocations: ['hotel_sotano'],
      requiredEvidence: CASE4_DAY2_EVIDENCE,
      trial: { intro: parts.day2Intro, testimony1: parts.t3, testimony2: parts.t4 },
      next: {
        nextLocation: 'hotel_cava',
        unlockLocations: ['hotel_cava'],
        requiredEvidence: CASE4_DAY3_EVIDENCE,
        trial: {
          intro: parts.day3Intro,
          openingPresent: parts.day3Opening,
          testimony1: parts.t5,
          testimony2: parts.t6
        }
      }
    }
  };
}

const SCENES_ES: CaseScript['investigation'] = {
  detention: CASE4_DETENTION,
  hotel_lobby: CASE4_HOTEL_LOBBY,
  hotel_suite: CASE4_HOTEL_SUITE,
  hotel_terraza: CASE4_HOTEL_TERRAZA,
  hotel_sotano: CASE4_HOTEL_SOTANO,
  hotel_suite204: CASE4_HOTEL_SUITE204,
  hotel_terraza_d2: CASE4_HOTEL_TERRAZA_D2,
  delegacion: CASE4_DELEGACION,
  hotel_cava: CASE4_HOTEL_CAVA,
  hotel_lobby_d3: CASE4_HOTEL_LOBBY_D3,
  hotel_azotea: CASE4_HOTEL_AZOTEA,
  detention_d3: CASE4_DETENTION_D3
};

const SCENES_EN: CaseScript['investigation'] = {
  detention: CASE4_DETENTION_EN,
  hotel_lobby: CASE4_HOTEL_LOBBY_EN,
  hotel_suite: CASE4_HOTEL_SUITE_EN,
  hotel_terraza: CASE4_HOTEL_TERRAZA_EN,
  hotel_sotano: CASE4_HOTEL_SOTANO_EN,
  hotel_suite204: CASE4_HOTEL_SUITE204_EN,
  hotel_terraza_d2: CASE4_HOTEL_TERRAZA_D2_EN,
  delegacion: CASE4_DELEGACION_EN,
  hotel_cava: CASE4_HOTEL_CAVA_EN,
  hotel_lobby_d3: CASE4_HOTEL_LOBBY_D3_EN,
  hotel_azotea: CASE4_HOTEL_AZOTEA_EN,
  detention_d3: CASE4_DETENTION_D3_EN
};

export const CASE_SCRIPT_CASE4_ES: CaseScript = assembleCase4({
  scenes: SCENES_ES,
  intro: CASE4_TRIAL_INTRO,
  t1: CASE4_TESTIMONY_1,
  t2: CASE4_TESTIMONY_2,
  day2Intro: CASE4_DAY2_INTRO,
  t3: CASE4_TESTIMONY_3,
  t4: CASE4_TESTIMONY_4,
  day3Intro: CASE4_DAY3_INTRO,
  day3Opening: CASE4_DAY3_OPENING_PRESENT,
  t5: CASE4_TESTIMONY_5,
  t6: CASE4_TESTIMONY_6,
  climax: CASE4_CLIMAX
});

export const CASE_SCRIPT_CASE4_EN: CaseScript = assembleCase4({
  scenes: SCENES_EN,
  intro: CASE4_TRIAL_INTRO_EN,
  t1: CASE4_TESTIMONY_1_EN,
  t2: CASE4_TESTIMONY_2_EN,
  day2Intro: CASE4_DAY2_INTRO_EN,
  t3: CASE4_TESTIMONY_3_EN,
  t4: CASE4_TESTIMONY_4_EN,
  day3Intro: CASE4_DAY3_INTRO_EN,
  day3Opening: CASE4_DAY3_OPENING_PRESENT_EN,
  t5: CASE4_TESTIMONY_5_EN,
  t6: CASE4_TESTIMONY_6_EN,
  climax: CASE4_CLIMAX_EN
});
