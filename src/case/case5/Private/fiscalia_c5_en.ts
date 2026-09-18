// @Architecture(descriptionShort="English Case 5 day 3 prosecutor office investigation scene", type="data", icon="layers")
/**
 * Case 5, Day 3 — Public ministry agent office (`fiscalia_c5`). Spec §14.2. English.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_FISCALIA_C5_HOTSPOTS_EN } from './fiscalia_c5_hotspots_en.js';
import { CASE5_FISCALIA_C5_TALKS_EN } from './fiscalia_c5_talks_en.js';

export const CASE5_FISCALIA_C5_EN: InvestigationScene = {
  title: 'Public Ministry Agent Office',
  name: 'Prosecutor\'s office',
  bg: 'assets/bg_fiscalia.webp',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  idlePose: 'supersam_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'December 8, 11:20 AM. Public ministry agent Sam Sullivan\'s office.', bg: 'assets/bg_fiscalia.webp', furniture: 'none', bgm: 'detention_center' },
    { speaker: 'NARRADOR', text: 'A hand-crank calculator, a pocket stopwatch, and, in a corner, a folded empty canvas bag.' },
    { speaker: 'SUPER SAM', text: 'Counselor.', pose: 'supersam_idle' },
    { speaker: 'DEFENSA', text: 'Prosecutor.', pose: 'chapulin_idle' },
    { speaker: 'SUPER SAM', text: 'If you came for me to drop the charge, the answer is no. If you came for me to give you proof, the answer is no.', pose: 'supersam_point' },
    { speaker: 'SUPER SAM', text: 'If you came to ask why I look like I have not slept, the answer is also no.', pose: 'supersam_sweat' },
    { speaker: 'DEFENSA', text: 'I came for the diligence order.', pose: 'chapulin_point' },
    { speaker: 'SUPER SAM', text: '...Ah.', pose: 'supersam_sweat' },
    { speaker: 'SUPER SAM', text: 'That one I will give you.', pose: 'supersam_idle' }
  ],
  hotspots: CASE5_FISCALIA_C5_HOTSPOTS_EN,
  talkOptions: CASE5_FISCALIA_C5_TALKS_EN
};
