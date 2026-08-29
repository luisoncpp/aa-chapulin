// @Architecture(descriptionShort="English Case 2 day-2 escape-route testimony", type="data", icon="layers")
/**
 * Case 2 Trial Day 2 — Impossible escape testimony (English).
 */

import type { DialogueLine, Testimony } from '../../types/index.js';

const T4_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'TAKE THAT!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'There are no windows, but the Professor\'s Blueprint reveals an old LAUNDRY DUMBWAITER that IS an exit to the outside!', sfx: 'desk_slam', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'The dumbwaiter connects the vault directly to the rear alley where the mail cart sat.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'JIRAFALES', text: 'TA-TA-TA-TA-TAAAAAA!!! Exactly as the Marquis designed it in 1892!', pose: 'jirafales_angry' },
  { speaker: 'PETERETE', text: 'B-but the police searched the suspect and there was no Golden Chanfle in sight! Where is the physical proof?!', pose: 'peterete_panic' }
];

export const CASE2_TESTIMONY_4_EN: Testimony = {
  title: 'Testimony: The Impossible Escape Route',
  witness: 'El Peterete',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'stmt4_1',
      speaker: 'PETERETE',
      pose: 'peterete_sweat',
      text: 'Even if I was not at the post office, nobody could have taken a 5-kilo statuette out of that underground vault!',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'PETERETE', text: 'Five kilos of gold do not vanish, counselor.', pose: 'peterete_sweat' }
      ]
    },
    {
      id: 'stmt4_2',
      speaker: 'PETERETE',
      pose: 'peterete_sweat',
      text: 'The walls are two meters of reinforced concrete and there is no exit to the outside.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'PETERETE', text: 'Not a crack. I swear it as an appraiser.', pose: 'peterete_smug' }
      ],
      contradiction: { evidence: ['plano_hacienda'], successDialogue: T4_SUCCESS }
    },
    {
      id: 'stmt4_3',
      speaker: 'PETERETE',
      pose: 'peterete_sweat',
      text: 'If I had stolen the Golden Chanfle, the police would have found it on me during the precautionary search.',
      pressText: [
        { speaker: 'SUPER SAM', text: 'Indeed! The police searched him from head to toe and he did not have an ounce of gold!', pose: 'supersam_point' },
        { speaker: 'DEFENSA', text: 'Because the gold never left through the main door...', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'stmt4_4',
      speaker: 'PETERETE',
      pose: 'peterete_sweat',
      text: 'The gold could not have left that vault! Surely Chómpiras hid it under the floor tiles!',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'PETERETE', text: 'Check the floor if you want to waste time!', pose: 'peterete_panic' }
      ]
    }
  ]
};
