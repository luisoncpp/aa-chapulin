// @Architecture(descriptionShort="English Case 2 day-2 intro and postal alibi testimony", type="data", icon="layers")
/**
 * Case 2 Trial Day 2 — Reopening and postal alibi (English).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';

export const CASE2_DAY2_INTRO_EN: DialogueLine[] = [
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'This court resumes in the matter of the Golden Chanfle.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Time is money! Your Honor, the prosecution has confirmed Mr. Peterete has an ironclad alibi at the time of the blackout.', sfx: 'desk_slam' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'He was at the post office with the mailman dispatching parcels. The defendant remains the only viable suspect!' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_slam', text: 'The defense demands Mr. Peterete return to the witness stand!', sfx: 'desk_slam' }
];

const T3_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Mr. Peterete, your alibi is faker than a three-dollar bill from Super Sam!', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'Hey! My dollars are 100% authentic!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'This Traffic Citation and Postal Ledger prove that at 9:30 PM the cart was abandoned and no mailman was there to receive anything!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'DEFENSA', text: 'You yourself stamped a fake seal in the ledger to manufacture an alibi!', pose: 'donramon_point' },
  { speaker: 'PETERETE', text: 'G-grrrk! Damn that lazy mailman!', pose: 'peterete_sweat' }
];

export const CASE2_TESTIMONY_3_EN: Testimony = {
  title: 'Testimony: My Postal Alibi',
  witness: 'El Peterete',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'stmt3_1',
      speaker: 'PETERETE',
      pose: 'peterete_smug',
      text: 'What a lamentable waste of time. At 9:15 PM I was at the post office delivering urgent packages.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'What was inside those urgent packages?', pose: 'donramon_idle' },
        { speaker: 'PETERETE', text: 'Fine fabric samples, none of this court\'s business.', pose: 'peterete_thinking' }
      ]
    },
    {
      id: 'stmt3_2',
      speaker: 'PETERETE',
      pose: 'peterete_smug',
      text: 'Mailman Jaimito received my parcels and stamped the official 9:30 PM seal in the ledger.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'PETERETE', text: 'The stamp does not lie, counselor. Ask the mailman... if you find him awake.', pose: 'peterete_smug' }
      ],
      contradiction: { evidence: ['multa_transito', 'registro_postal'], successDialogue: T3_SUCCESS }
    },
    {
      id: 'stmt3_3',
      speaker: 'PETERETE',
      pose: 'peterete_smug',
      text: 'I stayed until 9:45 PM chatting amiably about the history of Tangamandapio.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'PETERETE', text: 'A fascinating town. The mailman never stops talking about it... when he is not snoring.', pose: 'peterete_thinking' }
      ],
      contradiction: { evidence: ['multa_transito', 'registro_postal'], successDialogue: T3_SUCCESS }
    },
    {
      id: 'stmt3_4',
      speaker: 'PETERETE',
      pose: 'peterete_smug',
      text: 'Therefore it was physically impossible for me to be near the generator or the air duct.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'PETERETE', text: 'Physics, counselor. Something a neighborhood defender often ignores.', pose: 'peterete_smug' }
      ]
    }
  ]
};
