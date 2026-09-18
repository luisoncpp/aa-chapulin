// @Architecture(descriptionShort="English Case 5 day 3 prosecutor office talk chain and unlocks", type="data", icon="layers")
/**
 * Case 5, Day 3 — conversations with Super Sam. Spec §14.2. English.
 */

import type { TalkOption } from '../../../types/index.js';

export const CASE5_FISCALIA_C5_TALKS_EN: TalkOption[] = [
  {
    id: 'pedir_oficio',
    label: 'Give me the diligence order',
    dialogue: [
      { speaker: 'SUPER SAM', text: 'Order 4471, November twenty-sixth. Mine, signed by me, ordered by me.', pose: 'supersam_idle' },
      { speaker: 'DEFENSA', text: '"Document collation diligence. Judicial Archive. December fourth, five PM."', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '"And at the foot, the distribution list: c.c.p. Assigned court clerk. c.c.p. Archive Directorate. c.c.p. Bankruptcy syndic 114/1971."', pose: 'chapulin_point' },
      { speaker: 'SUPER SAM', text: 'It is a formality, counselor. You notify whoever has a legal interest. The machine does it, not the man.', pose: 'supersam_idle' },
      { speaker: 'DEFENSA', text: 'Prosecutor, did you know that order left here with that list?', pose: 'chapulin_point' },
      { speaker: 'SUPER SAM', text: '...I sign one hundred forty orders a week.', pose: 'supersam_sweat' },
      { speaker: 'SUPER SAM', text: 'And until the day before yesterday I thought that was efficiency.', pose: 'supersam_sweat', addEvidence: 'oficio_diligencia' }
    ]
  },
  {
    id: 'por_que_tardo',
    label: 'Why did it take eighteen days?',
    unlockedByTalk: 'pedir_oficio',
    condition: (flags) => Boolean(flags.examined_hotspot_bolsa),
    dialogue: [
      { speaker: 'SUPER SAM', text: '...How do you mean?', pose: 'supersam_sweat' },
      { speaker: 'DEFENSA', text: 'Mr. Lengua wrote you on November eighth. You ordered the diligence on the twenty-sixth.', pose: 'chapulin_point' },
      { speaker: 'DEFENSA', text: 'Eighteen days, prosecutor. You, who charge by the minute.', pose: 'chapulin_idle' },
      { speaker: 'SUPER SAM', text: 'It was an inmate offering a file for a shorter sentence, counselor. I get those every week.', pose: 'supersam_idle' },
      { speaker: 'SUPER SAM', text: 'Inmates offering treasure maps. Inmates offering names. Inmates offering their mothers.', pose: 'supersam_sweat' },
      { speaker: 'DEFENSA', text: 'And what did you do with this one?', pose: 'chapulin_idle' },
      { speaker: 'SUPER SAM', text: 'I put it in a drawer.', pose: 'supersam_sweat' },
      { speaker: 'SUPER SAM', text: 'And on the twenty-sixth I took it out because I was cleaning the drawer.', pose: 'supersam_sweat' },
      { speaker: 'NARRADOR', text: 'Super Sam falls silent a long moment, hand on the calculator.' },
      { speaker: 'SUPER SAM', text: 'Counselor. Go to the penitentiary and ask for that man\'s effects.', pose: 'supersam_idle' },
      { speaker: 'DEFENSA', text: 'And why are you telling me?', pose: 'chapulin_idle' },
      { speaker: 'SUPER SAM', text: 'Because I did not ask for them.', pose: 'supersam_sweat' },
      { speaker: 'SUPER SAM', text: 'Time is money, counselor. And some days it costs you dearly.', pose: 'supersam_sweat', unlockLocation: 'penal_efectos' }
    ]
  }
];
