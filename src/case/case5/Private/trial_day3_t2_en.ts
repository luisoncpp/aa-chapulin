// @Architecture(descriptionShort="Case 5 day-3 Super Sam testimony, English", type="data", icon="layers")
/**
 * Case 5 Trial Day 3 — Testimony 7, Super Sam (spec §15.3), English. BGM cross_exam_grave.
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE5_D3_T2_EXPEDIENTE_SUCCESS_EN, CASE5_D3_T2_OFICIO_SUCCESS_EN } from './trial_day3_success_sam_en.js';
import { CASE5_D3_T2_HUACAL_DEFLECT_EN } from './trial_day3_deflect_en.js';
import { SINDICO_LESSON_EN } from './trial_day3_sindico_lesson_en.js';

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
      pose: 'supersam_point',
      text: 'I received the letter the inmate sent me on November 8. I put it in a drawer and kept it eighteen days.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Eighteen days. Why?', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'Because an inmate offering a file in exchange for a shorter sentence reaches me every week, counselor.', pose: 'supersam_point' },
        { speaker: 'SUPER SAM', text: 'And because that particular inmate was convicted by me, and I convicted him badly.', pose: 'supersam_sweat' },
        { speaker: 'JUEZ', text: 'Wrongly?', pose: 'judge_thinking' },
        { speaker: 'SUPER SAM', text: 'I convicted the wrong man all the way to the end of the trial, Your Honor. You were there.', pose: 'supersam_sweat' },
        { speaker: 'SUPER SAM', text: 'Nobody goes back gladly to a file where they looked like an idiot.', pose: 'supersam_sweat' }
      ]
    },
    {
      id: 'c5_d3t2_2',
      speaker: 'SUPER SAM',
      pose: 'supersam_point',
      text: 'On the twenty-sixth I took it out and set the diligence for Saturday, December 4 at five in the afternoon, because Saturday transport costs half.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Saturday costs half?', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'Saturday, no public, no court-clerk overtime, with two guards on duty already paid for.', pose: 'supersam_point' },
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
      pose: 'supersam_point',
      text: 'Nobody else knew about that diligence. A prosecution letter is not published in the newspaper.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Nobody? Not even the court clerk?', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'The court clerk, the Archive Directorate, and me. Three people.', pose: 'supersam_point' },
        { speaker: 'DEFENSA', text: 'And the guards?', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: 'The guards find out the morning of the transfer. That is policy.', pose: 'supersam_point' },
        { speaker: 'DEFENSA', text: 'So, by your account, five people knew Saturday morning.', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: 'Five. And none of them killed anyone.', pose: 'supersam_point' },
        ...SINDICO_LESSON_EN,
        { speaker: 'DEFENSA', text: '(Five people, he says. But that is him talking... it is not his own letter talking.)', pose: 'chapulin_idle' }
      ],
      deflect: { evidence: ['huacal_9'], dialogue: CASE5_D3_T2_HUACAL_DEFLECT_EN },
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
      pose: 'supersam_sweat',
      text: 'And now mine. On the morning of August 28 I walked into my chambers and my bag was gone. Six kilos of this office silver coin.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'And when did you file the report?', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'I did not file it.', pose: 'supersam_sweat' },
        { speaker: 'DEFENSA', text: 'Six kilos of silver are stolen from you and you file nothing?', pose: 'chapulin_panic' },
        { speaker: 'SUPER SAM', text: 'I was going to at noon. By five in the afternoon I had nothing left to report.', pose: 'supersam_sweat' },
        { speaker: 'JUEZ', text: 'Explain yourself, Mr. Prosecutor.', pose: 'judge_thinking' },
        { speaker: 'SUPER SAM', text: 'A bought man does not report the men who bought him, Your Honor. It runs expensive.', pose: 'supersam_sweat' },
        { speaker: 'DEFENSA', text: 'That night an empty canvas bag bearing your office seal was left in a museum\'s loading yard.', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: '...Yes.', pose: 'supersam_sweat' },
        { speaker: 'DEFENSA', text: 'You saw it. They set it on the evidence table in front of you.', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: 'And I said the prosecution hands out bags like that. For expenses. For many things.', pose: 'supersam_sweat' },
        { speaker: 'SUPER SAM', text: 'That is what I said, counselor. It was mine.', pose: 'supersam_sweat' },
        { speaker: 'NARRADOR', text: 'Nobody coughs.', sfx: 'realization' }
      ]
    },
    {
      id: 'c5_d3t2_5',
      speaker: 'SUPER SAM',
      pose: 'supersam_sweat',
      text: 'That same night they bought me with one kilo of my own silver, for getting to that museum fast and closing the case in five minutes.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Mr. Prosecutor, you do not have to say this.', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'I know, counselor.', pose: 'supersam_sweat' },
        { speaker: 'DEFENSA', text: 'They can take your license.', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: 'I know that too.', pose: 'supersam_sweat' },
        { speaker: 'DEFENSA', text: 'Then why?', pose: 'chapulin_panic' },
        { speaker: 'SUPER SAM', text: 'Because there is a dead man who wrote to me on November 8 and I left him eighteen days in a drawer.', pose: 'supersam_sweat' },
        { speaker: 'SUPER SAM', text: 'And because if I do not say it today, tomorrow you will have to beat it out of me, and that costs me more.', pose: 'supersam_sweat' },
        { speaker: 'NARRADOR', text: 'Absolute silence.' },
        { speaker: 'DEFENSA', text: 'How was it delivered?', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: 'An envelope under my door with an hour and an address. At that hour, in that alley, there was a bundle wrapped in butcher paper.', pose: 'supersam_sweat' },
        { speaker: 'SUPER SAM', text: 'I opened it right there and counted it. I always count, counselor. It is the one thing I do well.', pose: 'supersam_sweat' },
        { speaker: 'DEFENSA', text: 'One kilo out of six.', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: 'They gave me back a sixth of what was mine and I said yes. That is my whole fee, counselor.', pose: 'supersam_sweat' },
        { speaker: 'DON RAMÓN', text: '(Do not finish him off, son.)', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: 'And what else did the envelope carry?', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'Below them, a line that asked me for nothing. It was written the way you write what has already been sold.', pose: 'supersam_sweat' },
        { speaker: 'DEFENSA', text: '(Typed.)', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: 'Do you still have it?', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: 'I burned it in August.', pose: 'supersam_sweat' },
        { speaker: 'SUPER SAM', text: 'And that, counselor, is the only thing in all of this I truly regret.', pose: 'supersam_sweat' }
      ]
    },
    {
      id: 'c5_d3t2_6',
      speaker: 'SUPER SAM',
      pose: 'supersam_sweat',
      text: 'I have carried it stuffed with cotton ever since. Not from remorse. For accounting.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '"For accounting"?', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'Full of silver it weighed six kilos. Full of cotton it weighs nine hundred grams.', pose: 'supersam_point' },
        { speaker: 'SUPER SAM', text: 'I lift the same bag every day and the same weight is missing. That way I do not have to remember on purpose.', pose: 'supersam_sweat' },
        { speaker: 'DEFENSA', text: 'And what is the cotton for?', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: 'So the balance does not show, counselor. A prosecutor paid by the closed case cannot walk into court with a slack bag.', pose: 'supersam_sweat' },
        { speaker: 'SUPER SAM', text: 'In my country, they call that amortization.', pose: 'supersam_sweat' },
        { speaker: 'DEFENSA', text: 'In mine they call it conscience.', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: 'Everything is cheaper in yours.', pose: 'supersam_point' }
      ]
    }
  ]
};
