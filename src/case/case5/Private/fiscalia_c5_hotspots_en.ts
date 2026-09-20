// @Architecture(descriptionShort="English Case 5 day 3 prosecutor office empty bag hotspot", type="data", icon="layers")
/**
 * Case 5, Day 3 — prosecutor office hotspot. Spec §14.2. English.
 */

import type { Hotspot } from '../../../types/index.js';

export const CASE5_FISCALIA_C5_HOTSPOTS_EN: Hotspot[] = [
  {
    id: 'hotspot_bolsa',
    label: 'Empty canvas bag',
    x: 77, y: 84, w: 23, h: 16,
    dialogue: [
      { speaker: 'NARRADOR', text: 'In the corner, folded on a chair, a raw canvas bag with the prosecutor seal. Empty and clean.' },
      { speaker: 'DEFENSA', text: 'And this one?', pose: 'chapulin_idle' },
      { speaker: 'SUPER SAM', text: 'That is my bag.', pose: 'supersam_sweat' },
      { speaker: 'DEFENSA', text: 'It is empty.', pose: 'chapulin_idle' },
      { speaker: 'SUPER SAM', text: 'Since August.', pose: 'supersam_sweat' },
      { speaker: 'DEFENSA', text: 'Prosecutor, in August you prosecuted me.', pose: 'chapulin_point' },
      { speaker: 'SUPER SAM', text: 'I know perfectly well, counselor. I closed that case in five minutes. Five.', pose: 'supersam_sweat' },
      { speaker: 'SUPER SAM', text: 'And I have carried an empty bag for four months so I do not forget why I closed it so fast.', pose: 'supersam_sweat' },
      { speaker: 'DEFENSA', text: '...Pardon?', pose: 'chapulin_panic' },
      { speaker: 'SUPER SAM', text: 'Nothing. Get out of my office.', pose: 'supersam_point' },
      { speaker: 'DEFENSA', text: '(No. He is not telling me today. And if I force it out of him, it stops being his.)', pose: 'chapulin_idle' }
    ]
  }
];
