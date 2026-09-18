// @Architecture(descriptionShort="Case 5 day-1 Nicanor testimony one (EN)", type="data", icon="layers")
/**
 * Case 5 Trial Day 1 — Testimony 1, Nicanor Tolentino (spec §11.2), English.
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE5_D1_T1_FORENSE_SUCCESS_EN, CASE5_D1_T1_LIBRO_SUCCESS_EN } from './trial_day1_success_en.js';

const MOMENTO: DialogueLine = {
  speaker: 'DEFENSA',
  text: 'HOLD IT!',
  cutin: 'objection_un_momento',
  sfx: 'whoosh',
  pose: 'chapulin_point'
};

export const CASE5_TESTIMONY_1_EN: Testimony = {
  title: 'Testimony: Nobody Else Came In That Afternoon',
  witness: 'Nicanor Tolentino',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'c5_d1t1_1',
      speaker: 'NICANOR',
      pose: 'nicanor_idle',
      text: 'I open at eight and close at seven, and in between I do not leave the front desk except to wax.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'And when do you wax?', pose: 'chapulin_point' },
        { speaker: 'NICANOR', text: 'Saturdays from four to five, kid. I mean, counselor. Saturdays, because there is no public.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: 'December fourth was a Saturday!', pose: 'chapulin_panic' },
        { speaker: 'NICANOR', text: 'And I waxed from four to five without taking my eyes off the door. You wax with your back turned, but you wax watching.', pose: 'nicanor_escoba' },
        { speaker: 'JUEZ', text: 'Can you wax while watching the door?', pose: 'judge_thinking' },
        { speaker: 'NICANOR', text: 'Your Honor, with all respect: I can wax asleep.', pose: 'nicanor_idle' },
        { speaker: 'SUPER SAM', text: 'There you have it, Your Honor! A witness with thirty-one years of waxing experience!', pose: 'supersam_point' },
        { speaker: 'DEFENSA', text: '(He is not mocking him. He is using him as a wall.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d1t1_2',
      speaker: 'NICANOR',
      pose: 'nicanor_idle',
      text: 'On December fourth fourteen people signed in. The last was Counselor Valdes, at four forty.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Fourteen people. Who?', pose: 'chapulin_point' },
        { speaker: 'NICANOR', text: 'Nine interns, two bailiffs, a lady who came for a 1931 birth certificate, a morning appraisal expert, and his counselor.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: 'And did they all leave?', pose: 'chapulin_idle' },
        { speaker: 'NICANOR', text: 'All of them, with their times. You can count the book yourself if you know how to count.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: 'I can count to twenty-four!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: '(...and that is where I got stuck this morning.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d1t1_3',
      speaker: 'NICANOR',
      pose: 'nicanor_idle',
      text: 'At four fifty-eight he came down, signed out, and I wrote the time with my pen.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'You saw Counselor Valdes come down?', pose: 'chapulin_point' },
        { speaker: 'NICANOR', text: 'I saw him come down the stairs, cross the lobby, and sign. I asked if he had found what he was looking for.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: 'And what did he answer?', pose: 'chapulin_idle' },
        { speaker: 'NICANOR', text: 'He said: "I hope not." I did not understand him and I did not ask.', pose: 'nicanor_sweat' },
        { speaker: 'DON RAMÓN', text: '(I did not understand him either, Mr. Nicanor. Still do not.)', pose: 'donramon_sweat' },
        { speaker: 'SUPER SAM', text: '"I hope not"! Your Honor, let the record show the phrase of a man who had just committed murder!', pose: 'supersam_slam', sfx: 'desk_slam' },
        { speaker: 'DEFENSA', text: 'OBJECTION! That is interpretation, not testimony!', sfx: 'desk_slam', cutin: 'objection_protesto', pose: 'chapulin_slam' },
        { speaker: 'JUEZ', text: 'Sustained. The phrase is entered, not the interpretation.', pose: 'judge_neutral' }
      ]
    },
    {
      id: 'c5_d1t1_4',
      speaker: 'NICANOR',
      pose: 'nicanor_idle',
      text: 'After him nobody came in and nobody went out. At five thirty-five I went up to close and there was the poor gentleman.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'A long half hour, Mr. Nicanor. What did you do in that half hour?', pose: 'chapulin_point' },
        { speaker: 'NICANOR', text: 'Finished waxing, put away the buffer, had a coffee, and went up.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: 'Did you hear anything upstairs?', pose: 'chapulin_idle' },
        { speaker: 'NICANOR', text: 'With the boiler and both dryers on full, counselor, you cannot hear Judgment Day up there.', pose: 'nicanor_sweat' },
        { speaker: 'DEFENSA', text: '(The dryers again. And again nobody stops.)', pose: 'chapulin_idle' }
      ],
      contradiction: {
        evidence: ['informe_forense_c5'],
        successDialogue: CASE5_D1_T1_FORENSE_SUCCESS_EN,
        followUp: {
          evidence: ['libro_visitas'],
          prompt: 'Who does that book not require to sign?',
          successDialogue: CASE5_D1_T1_LIBRO_SUCCESS_EN
        }
      }
    },
    {
      id: 'c5_d1t1_5',
      speaker: 'NICANOR',
      pose: 'nicanor_idle',
      text: 'Nobody passes my door without signing. Thirty-one years, Your Honor. It has never happened.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '"My door." You said "my door."', pose: 'chapulin_point' },
        { speaker: 'NICANOR', text: 'My door, yes sir. The public one.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: 'And are there others?', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: 'OBJECTION! The witness is not an architect! His testimony is about what he guards!', pose: 'supersam_slam', sfx: 'desk_slam' },
        { speaker: 'JUEZ', text: 'Sustained. Defense, limit yourself to the witness\'s door.', pose: 'judge_neutral' },
        { speaker: 'DEFENSA', text: '(They shut me down. Fine. That was not the way yet.)', pose: 'chapulin_idle' }
      ]
    }
  ]
};
