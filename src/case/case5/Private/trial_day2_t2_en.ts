// @Architecture(descriptionShort="Case 5 day-2 Lic. Berrondo testimony (English)", type="data", icon="layers")
/**
 * Case 5 Trial Day 2 — Testimony 5, Lic. Berrondo (spec §13.3), English. BGM cross_exam_grave (§23.7).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import {
  CASE5_D2_T2_EXPEDIENTE_SUCCESS_EN, CASE5_D2_T2_LIBRO_SUCCESS_EN, POINT_EXPEDIENTE_SERIE_EN
} from './trial_day2_success_en.js';

const MOMENTO: DialogueLine = {
  speaker: 'DEFENSA',
  text: 'HOLD IT!',
  cutin: 'objection_un_momento',
  sfx: 'whoosh',
  pose: 'chapulin_point'
};

export const CASE5_TESTIMONY_5_EN: Testimony = {
  title: 'Testimony: What I administer and what I sell',
  witness: 'Lic. Berrondo',
  bgm: 'cross_exam_grave',
  statements: [
    {
      id: 'c5_d2t2_1',
      speaker: 'BERRONDO',
      pose: 'berrondo_idle',
      text: 'I am trustee in bankruptcy 114 diagonal 1971, Enciclopedias El Saber Universal, corporation, since March ninth of that year.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Eleven years with an open proceeding. Is that not a lot?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'It is far too much, counselor, and it is the fault of a creditor in Tacubaya who refuses to collect forty pesos on principle.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'Until she collects, the proceeding does not close. Until it closes, the assets stay in deposit.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'And while they stay in deposit, I remain liable for them. With my signature and my estate.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '(Forty pesos. An eleven-year business hanging on forty pesos a lady will not collect.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d2t2_2',
      speaker: 'BERRONDO',
      pose: 'berrondo_idle',
      text: 'Among the assets of that estate is a card index of eleven thousand four hundred cards, inventoried, sealed, and deposited in the basement of the Judicial Archive.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'How often do you go down to that basement?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'Twice a month, on average. On Thursdays.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: 'Always on Thursdays?', pose: 'chapulin_idle' },
        { speaker: 'BERRONDO', text: 'On Thursdays. That is the day the Archive does not receive the public in the basement and work can be done.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: 'And what do you do down there?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'I review, count, cross-check, and sign. A custodian who does not count is a custodian who goes to jail.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '(Eleven years going down on Thursdays to a courthouse basement. And nobody ever asked him why.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d2t2_3',
      speaker: 'BERRONDO',
      pose: 'berrondo_idle',
      text: 'I sell copies of that information to whoever asks and pays. It is lawful, it is declared, and I pay taxes on it.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'And it does not shame you at all?', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'OBJECTION! Shame is not a fact!', pose: 'supersam_slam', sfx: 'desk_slam' },
        { speaker: 'JUEZ', text: '...Sustained, though this court would have liked the answer.', pose: 'judge_thinking' },
        { speaker: 'BERRONDO', text: 'I will answer anyway, Your Honor, if you permit me.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'No. It does not shame me. I sell addresses and payment habits.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'Collectors, lawyers, insurers, and three newspapers buy them. One of them published your client\'s case in August.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: 'And if a thief buys one?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'Then the thief steals, counselor, and the thief answers for it.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'I did not put my hand on anyone\'s door.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '(And that, Your Honor, is exactly what is wrong.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d2t2_4',
      speaker: 'BERRONDO',
      pose: 'berrondo_idle',
      text: 'I do not know and have not known any of the convicts whose files the defense has been paging through. Not even the victim.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Not even the victim? He was a distributor for your own company!', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'For the company I liquidated, counselor. Which is not my company: it is my file.', pose: 'berrondo_definicion' },
        { speaker: 'BERRONDO', text: 'One hundred ten distributors. I arrived when they were already dismissed. To me they were a labor-liability line item.', pose: 'berrondo_idle' },
        { speaker: 'JUEZ', text: 'You do not remember a single face?', pose: 'judge_shock' },
        { speaker: 'BERRONDO', text: 'Not one, Your Honor. And I sincerely regret it, because I tried for two hours last night.', pose: 'berrondo_idle' },
        { speaker: 'DON RAMÓN', text: '(...Counselor.)', pose: 'donramon_shock' },
        { speaker: 'DON RAMÓN', text: '(Mr. Lengua talked just like that man.)', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(Just like how?)', pose: 'chapulin_idle' },
        { speaker: 'DON RAMÓN', text: '(Defining words nobody asked for, young man. With Latin and everything.)', pose: 'donramon_sweat' },
        { speaker: 'DON RAMÓN', text: '(I thought it was a salesman\'s quirk. Turns out it was where he copied it from.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'c5_d2t2_5',
      speaker: 'BERRONDO',
      pose: 'berrondo_idle',
      text: 'And on December fourth I entered at sixteen oh five, reviewed crate nine, and left at sixteen fifty. It is on the ledger.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'And why did you go to the basement that day?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'To review crate nine, because a proceeding was going to touch it.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: 'You knew there would be a proceeding?', pose: 'chapulin_panic' },
        { speaker: 'BERRONDO', text: 'Naturally. An estate asset is not touched without notifying the trustee; that is the first thing you study in bankruptcy law.', pose: 'berrondo_definicion' },
        { speaker: 'DEFENSA', text: '(He says yes without a tremor. Because it is true and because it is legal.)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'And you left at four fifty?', pose: 'chapulin_idle' },
        { speaker: 'BERRONDO', text: 'At sixteen fifty. It is in the ledger, counselor. Read it yourself.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '(That is what I am going to do.)', pose: 'chapulin_idle' }
      ],
      contradiction: {
        evidence: ['libro_peritos'],
        successDialogue: CASE5_D2_T2_LIBRO_SUCCESS_EN,
        followUp: {
          evidence: ['expediente_serie'],
          prompt: 'What do five cases that do not know each other have in common?',
          successDialogue: CASE5_D2_T2_EXPEDIENTE_SUCCESS_EN,
          pointTarget: POINT_EXPEDIENTE_SERIE_EN
        }
      }
    }
  ]
};
