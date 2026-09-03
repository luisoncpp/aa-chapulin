// @Architecture(descriptionShort="English Case 2 day-1 intro and Florinda testimony", type="data", icon="layers")
/**
 * Case 2 Trial Day 1 — Opening and Testimony 1 (English).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';

export const CASE2_TRIAL_INTRO_EN: DialogueLine[] = [
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Order in the court! The high court is now in session.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'The prosecution may present its charges against Aquiles Esquivel Madrazo.' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Time is money, Your Honor!', sfx: 'desk_slam' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'The defendant was caught red-handed in the vault at 10:00 PM with the crime tool in his hands. I demand a guilty verdict in 3 minutes!' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_slam', text: 'OBJECTION! The defense will prove this entire case is a frame-up!', sfx: 'desk_slam' },
  { bg: 'assets/bg_defense.webp', speaker: 'CHAPULIN', pose: 'chapulin_point', text: 'Follow the good guys! We will not let an innocent man be condemned!' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Call the prosecution\'s first witness.' }
];

const T1_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Excuse me, said Monchito! Doña Florinda, your claim about the time is impossible!', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'What?! The hallway digital clock read 10:00 PM! Time is money!', pose: 'supersam_point' },
  { speaker: 'DEFENSA', text: 'Look at this Stopped Pendulum Clock recovered from inside the vault!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'DEFENSA', text: 'It is a centralized electromechanical clock. When someone forced the generator box at 9:15 PM, it lost power and froze at 9:15 PM!', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'Good heavens! The power was cut three quarters of an hour earlier?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Exactly! Whoever restored power reprogrammed the digital clock to 10:00 PM. The theft began at 9:15 PM in total darkness!', pose: 'donramon_idle' },
  { speaker: 'FLORINDA', text: 'Oh my! Then at 9:15 PM they were already robbing the hacienda?!', pose: 'florinda_shock' },
  { speaker: 'SUPER SAM', text: 'Grrr... A time gap does not excuse the defendant from cracking the safe. I call Mr. Peterete!', pose: 'supersam_sweat' }
];

export const CASE2_TESTIMONY_1_EN: Testimony = {
  title: 'Testimony: The Discovery at 10:00 PM',
  witness: 'Doña Florinda',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'stmt1_1',
      speaker: 'FLORINDA',
      pose: 'florinda_idle',
      text: 'Last night at 10:00 PM sharp, while I finished cleaning the restaurant hall, the general alarm rang.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'How are you so certain it was 10:00 PM?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'Because I had just looked at the hallway digital clock, you ignoramus!', pose: 'florinda_angry' }
      ]
    },
    {
      id: 'stmt1_2',
      speaker: 'FLORINDA',
      pose: 'florinda_idle',
      text: 'I ran at once to the underground vault accompanied by the respectable security chief, Mr. Peterete.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'FLORINDA', text: 'Mr. Peterete reached the lobby almost at the same time I did! A professional!', pose: 'florinda_idle' }
      ]
    },
    {
      id: 'stmt1_3',
      speaker: 'FLORINDA',
      pose: 'florinda_angry',
      text: 'The door was ajar and we saw the defendant standing before the empty safe with his iron crowbar.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Was Chómpiras awake or conscious?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'Well... he looked dizzy or dazed, but the rabble always has that vacant look!', pose: 'florinda_angry' }
      ]
    },
    {
      id: 'stmt1_4',
      speaker: 'FLORINDA',
      pose: 'florinda_idle',
      text: 'Even the vault pendulum clock read 10:00 PM, confirming the exact hour of the crime.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'FLORINDA', text: 'I saw it with these eyes! The hands said ten o\'clock sharp.', pose: 'florinda_idle' }
      ],
      contradiction: {
        evidence: ['reloj_pendulo', 'caja_generador'],
        successDialogue: T1_SUCCESS
      }
    }
  ]
};
