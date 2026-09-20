// @Architecture(descriptionShort="English Case 2 day-2 intro and postal alibi testimony", type="data", icon="layers")
/**
 * Case 2 Trial Day 2 — Reopening and postal alibi (English).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';

export const CASE2_DAY2_INTRO_EN: DialogueLine[] = [
  { bg: 'assets/bg_waiting_room.webp', furniture: 'none', speaker: 'NARRADOR', text: 'August 23, 3:00 PM. High Court - Waiting Room.', bgm: 'trial' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'This court resumes in the matter of the Golden Chanfle.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Time is money! Your Honor, the prosecution has confirmed Mr. Peterete has an ironclad alibi at the time of the blackout.', sfx: 'desk_slam' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'He was at the post office with the mailman dispatching parcels. The defendant remains the only viable suspect!' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_slam', text: 'The defense demands Mr. Peterete return to the witness stand!', sfx: 'desk_slam' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Granted. The court recalls Mr. Peterete to the stand.' },
  { bg: 'assets/bg_witness.webp', speaker: 'PETERETE', pose: 'peterete_smug', text: 'Back again. Would you like my name and occupation too, Your Honor? They are the same as yesterday.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_thinking', text: 'You are still under oath, witness. That is also the same as yesterday.' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Excuse me, said Monchito. Today I am asking about your alibi, not your titles.' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'And make it fast! Time is money, and we have gone two days without billing a verdict.', sfx: 'desk_slam' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Witness, tell this court where you were at 9:15 PM.', sfx: 'gavel' }
];

const T3_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Mr. Peterete, your alibi is faker than a three-dollar bill from Super Sam!', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'Hey! My dollars are 100% authentic!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'This Traffic Citation and Postal Ledger prove that at 9:30 PM the cart was abandoned and no mailman was there to receive anything!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'DEFENSA', text: 'You yourself stamped a fake seal in the ledger to manufacture an alibi!', pose: 'donramon_point' },
  { speaker: 'PETERETE', text: 'G-grrrk! Damn that lazy mailman!', pose: 'peterete_sweat' },
  { speaker: 'SUPER SAM', text: 'Your Honor... the prosecution withdraws the postal alibi. But the defendant is still the only man who was inside that vault.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'Witness, do not step down. This court is not finished with you.', pose: 'judge_thinking' },
  { speaker: 'PETERETE', text: 'Again? Your Honor, I have testified twice already. My name has not changed in the last three hours.', pose: 'peterete_sweat' },
  { speaker: 'DEFENSA', text: 'Your name has not. Your story has, and that makes two.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'Testify now about the vault: explain to this court how the Golden Chanfle got out of it.', pose: 'judge_gavel', sfx: 'gavel' }
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
