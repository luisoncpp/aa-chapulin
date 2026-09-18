// @Architecture(descriptionShort="Case 5 waiting-room openings for four trial days", type="data", icon="layers")
/**
 * First two lines of each Case 5 trial-day intro. Spec dates from §11.1, §13.1,
 * §15.1 and §17.1; camera follows the waiting-room convention of every other case.
 */

import type { DialogueLine } from '../../../types/index.js';

const WAITING = 'assets/bg_waiting_room.webp';
const JUDGE = 'assets/bg_judge.webp';

function lobby(text: string): DialogueLine[] {
  return [
    { bg: WAITING, furniture: 'none', speaker: 'NARRADOR', text, bgm: 'trial' },
    { bg: JUDGE, speaker: 'JUEZ', pose: 'judge_gavel', text: '¡Silencio en la sala!', sfx: 'gavel' }
  ];
}

export const CASE5_TRIAL_INTRO: DialogueLine[] = lobby(
  '6 de diciembre, 2:00 PM. Tribunal Superior - Sala de Espera.'
);
export const CASE5_DAY2_INTRO: DialogueLine[] = lobby(
  '7 de diciembre, 4:00 PM. Tribunal Superior - Sala de Espera.'
);
export const CASE5_DAY3_INTRO: DialogueLine[] = lobby(
  '8 de diciembre, 4:00 PM. Tribunal Superior - Sala de Espera.'
);
export const CASE5_DAY4_INTRO: DialogueLine[] = lobby(
  '9 de diciembre, 4:00 PM. Tribunal Superior - Sala de Espera.'
);

export const CASE5_TRIAL_INTRO_EN: DialogueLine[] = lobby(
  'December 6, 2:00 PM. High Court - Waiting Room.'
);
export const CASE5_DAY2_INTRO_EN: DialogueLine[] = lobby(
  'December 7, 4:00 PM. High Court - Waiting Room.'
);
export const CASE5_DAY3_INTRO_EN: DialogueLine[] = lobby(
  'December 8, 4:00 PM. High Court - Waiting Room.'
);
export const CASE5_DAY4_INTRO_EN: DialogueLine[] = lobby(
  'December 9, 4:00 PM. High Court - Waiting Room.'
);
