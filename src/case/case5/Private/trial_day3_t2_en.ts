// @Architecture(descriptionShort="Case 5 day-3 Super Sam testimony, English", type="data", icon="layers")
/**
 * Case 5 Trial Day 3 — Testimony 7, Super Sam (spec §15.3), English. BGM cross_exam_grave.
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE5_D3_T2_EXPEDIENTE_SUCCESS_EN, CASE5_D3_T2_OFICIO_SUCCESS_EN } from './trial_day3_success_sam_en.js';

const MOMENTO: DialogueLine = {
  speaker: 'DEFENSA',
  text: 'HOLD IT!',
  cutin: 'objection_un_momento',
  sfx: 'whoosh',
  pose: 'chapulin_point'
};

export const CASE5_TESTIMONY_7_EN: Testimony = {
  title: 'Testimony: What I was paid in August',
  witness: 'Super Sam',
  bgm: 'cross_exam_grave',
  statements: [
    {
      id: 'c5_d3t2_1',
      speaker: 'SUPER SAM',
      pose: 'supersam_idle',
      text: 'I received the deceased\'s letter on November 8. I put it in a drawer and kept it eighteen days.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Eighteen days. Why?', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'Because an inmate offering a file in exchange for a shorter sentence reaches me every week, counselor.', pose: 'supersam_idle' },
        { speaker: 'SUPER SAM', text: 'And because I myself convicted that inmate and convicted the wrong man for two thirds of the trial.', pose: 'supersam_sweat' },
        { speaker: 'JUEZ', text: 'Wrongly?', pose: 'judge_thinking' },
        { speaker: 'SUPER SAM', text: 'I convicted the wrong man for two thirds of the trial, Your Honor. You were there.', pose: 'supersam_sweat' },
        { speaker: 'SUPER SAM', text: 'Nobody goes back gladly to a file where they looked like an idiot.', pose: 'supersam_sweat' }
      ]
    },
    {
      id: 'c5_d3t2_2',
      speaker: 'SUPER SAM',
      pose: 'supersam_idle',
      text: 'On the twenty-sixth I took it out and set the diligence for Saturday, December 4 at five in the afternoon, because Saturday transport costs half.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Saturday costs half?', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'Saturday, no public, no court-clerk overtime, with two guards on duty already paid for.', pose: 'supersam_idle' },
        { speaker: 'SUPER SAM', text: 'I saved four hundred eighty pesos, counselor.', pose: 'supersam_sweat' },
        { speaker: 'DEFENSA', text: 'And you left that building empty.', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: '...And I left that building empty.', pose: 'supersam_sweat' },
        { speaker: 'DON RAMÓN', text: '(Do not finish that thought, kid.)', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(I was not going to, Don Ramon. I have also saved on things that cost me later.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d3t2_3',
      speaker: 'SUPER SAM',
      pose: 'supersam_idle',
      text: 'Nobody else knew about that diligence. A prosecution letter is not published in the newspaper.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Nobody? Not even the court clerk?', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'The court clerk, the Archive Directorate, and me. Three people.', pose: 'supersam_idle' },
        { speaker: 'DEFENSA', text: 'And the guards?', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: 'The guards find out the morning of the transfer. That is policy.', pose: 'supersam_idle' },
        { speaker: 'DEFENSA', text: 'So, by your account, five people knew Saturday morning.', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: 'Five. And none of them killed anyone.', pose: 'supersam_point' },
        { speaker: 'DEFENSA', text: '(Five people... and a distribution list he signed without reading.)', pose: 'chapulin_idle' }
      ],
      contradiction: {
        evidence: ['oficio_diligencia'],
        successDialogue: CASE5_D3_T2_OFICIO_SUCCESS_EN,
        followUp: {
          evidence: ['expediente_serie'],
          prompt: 'What was it called, in August, that they paid the prosecutor for?',
          successDialogue: CASE5_D3_T2_EXPEDIENTE_SUCCESS_EN
        }
      }
    },
    {
      id: 'c5_d3t2_4',
      speaker: 'SUPER SAM',
      pose: 'supersam_idle',
      text: 'And now mine. On August 21 this year, someone paid me to get to a museum fast and close a case in five minutes.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Mr. Prosecutor, you do not have to say this.', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'I know, counselor.', pose: 'supersam_idle' },
        { speaker: 'DEFENSA', text: 'They can take your license.', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: 'I know that too.', pose: 'supersam_idle' },
        { speaker: 'DEFENSA', text: 'Then why?', pose: 'chapulin_panic' },
        { speaker: 'SUPER SAM', text: 'Because a dead man wrote me on November 8 and I left him eighteen days in a drawer.', pose: 'supersam_sweat' },
        { speaker: 'SUPER SAM', text: 'And because if I do not say it today, tomorrow you will have to beat it out of me, and that costs me more.', pose: 'supersam_idle' },
        { speaker: 'NARRADOR', text: 'Absolute silence.', bgm: 'suspense' }
      ]
    },
    {
      id: 'c5_d3t2_5',
      speaker: 'SUPER SAM',
      pose: 'supersam_idle',
      text: 'It was once. It had no name, no receipt, and I did not sell it to anyone. It was an envelope, an hour, and a canvas bag.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'How much was in that bag?', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'Ten thousand pesos in silver coin. Six kilos.', pose: 'supersam_idle' },
        { speaker: 'DEFENSA', text: 'And who left it?', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: 'I do not know. It appeared in an alley, at the hour on the envelope, in my own canvas bag sealed by my own prosecution office.', pose: 'supersam_sweat' },
        { speaker: 'SUPER SAM', text: 'That is what scared me most, counselor: they used my bag. Someone entered my office.', pose: 'supersam_sweat' },
        { speaker: 'DEFENSA', text: 'And what did the envelope say?', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'An hour and an address. Typed.', pose: 'supersam_idle' },
        { speaker: 'DEFENSA', text: '(Typed.)', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: 'Do you still have it?', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: 'I burned it in August.', pose: 'supersam_sweat' },
        { speaker: 'SUPER SAM', text: 'And that, counselor, is the only thing in all of this I truly regret.', pose: 'supersam_sweat' }
      ]
    },
    {
      id: 'c5_d3t2_6',
      speaker: 'SUPER SAM',
      pose: 'supersam_idle',
      text: 'Since then I carry that empty bag. Not from remorse. For accounting.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '"For accounting"?', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'An empty bag weighs four hundred grams, counselor. A man who carries four hundred grams every day remembers every day.', pose: 'supersam_idle' },
        { speaker: 'SUPER SAM', text: 'In my country, they call that amortization.', pose: 'supersam_sweat' },
        { speaker: 'DEFENSA', text: 'In mine they call it conscience.', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: 'Everything is cheaper in yours.', pose: 'supersam_idle' }
      ]
    }
  ]
};
