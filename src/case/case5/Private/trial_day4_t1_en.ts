// @Architecture(descriptionShort="Case 5 day-4 Genoveva Peñaloza testimony, English", type="data", icon="layers")
/**
 * Case 5 Trial Day 4 — Testimony 9, Ms. Genoveva Peñaloza (spec §17.2), English.
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE5_D4_T1_CEDULARIO_SUCCESS_EN, CASE5_D4_T1_LIBRO_SUCCESS_EN } from './trial_day4_success_en.js';

const MOMENTO: DialogueLine = {
  speaker: 'DEFENSA',
  text: 'HOLD IT!',
  cutin: 'objection_un_momento',
  sfx: 'whoosh',
  pose: 'chapulin_point'
};

export const CASE5_TESTIMONY_9_EN: Testimony = {
  title: 'Testimony: The window regulations',
  witness: 'Ms. Genoveva Peñaloza',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'c5_d4t1_1',
      speaker: 'GENOVEVA',
      pose: 'genoveva_idle',
      text: 'My window serves experts, bailiffs, notaries, and syndics. It is the only access to that building that is not the public one.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'And can you see the service staircase from your window?', pose: 'chapulin_point' },
        { speaker: 'GENOVEVA', text: 'No, sir.', pose: 'genoveva_idle' },
        { speaker: 'DEFENSA', text: 'And the courtyard gate?', pose: 'chapulin_idle' },
        { speaker: 'GENOVEVA', text: 'Neither.', pose: 'genoveva_idle' },
        { speaker: 'DEFENSA', text: 'And that does not strike you as odd?', pose: 'chapulin_point' },
        { speaker: 'GENOVEVA', text: 'The regulations do not authorize me to find things odd, sir.', pose: 'genoveva_reglamento' },
        { speaker: 'NARRADOR', text: 'Brief laughter in the gallery.', sfx: 'realization' },
        { speaker: 'GENOVEVA', text: 'And I beg the gallery not to laugh. I have spent thirteen years doing exactly what a paper says, and that is why the paper exists.', pose: 'genoveva_reglamento' },
        { speaker: 'JUEZ', text: 'The court supports the witness.', pose: 'judge_neutral' }
      ]
    },
    {
      id: 'c5_d4t1_2',
      speaker: 'GENOVEVA',
      pose: 'genoveva_idle',
      text: 'On December fourth I served four people, and all four are in my log with their time of entry and their time of departure.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Is your log ever amended?', pose: 'chapulin_point' },
        { speaker: 'GENOVEVA', text: 'Never. If I make a mistake, I strike through with one line, write beside it, and sign the correction.', pose: 'genoveva_idle' },
        { speaker: 'DEFENSA', text: 'And are there any corrections on December fourth?', pose: 'chapulin_idle' },
        { speaker: 'GENOVEVA', text: 'None.', pose: 'genoveva_idle' },
        { speaker: 'DEFENSA', text: '(No corrections. And she is absolutely certain.)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(This is going to be horrible.)', pose: 'chapulin_idle' }
      ],
      contradiction: {
        evidence: ['libro_peritos'],
        successDialogue: CASE5_D4_T1_LIBRO_SUCCESS_EN,
        followUp: {
          evidence: ['fichero_cedulario'],
          prompt: 'What would a voucher have to say to open that card-file index?',
          successDialogue: CASE5_D4_T1_CEDULARIO_SUCCESS_EN
        }
      }
    },
    {
      id: 'c5_d4t1_3',
      speaker: 'GENOVEVA',
      pose: 'genoveva_idle',
      text: 'I issued Counselor Berrondo a visitor badge at 4:05 PM and received it back at 4:50 PM.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'And what exactly is a visitor badge?', pose: 'chapulin_point' },
        { speaker: 'GENOVEVA', text: 'A numbered brass plate on a cord. It grants access to the first-floor reading rooms.', pose: 'genoveva_idle' },
        { speaker: 'DEFENSA', text: 'Only the first floor?', pose: 'chapulin_idle' },
        { speaker: 'GENOVEVA', text: 'Only that. The basement does not open with a badge. The basement opens with a credential.', pose: 'genoveva_reglamento' },
        { speaker: 'DEFENSA', text: 'And do you keep the credential?', pose: 'chapulin_point' },
        { speaker: 'GENOVEVA', text: 'A syndic\'s credential? Not even if I were ordered to. A judge issues it, and he keeps it.', pose: 'genoveva_idle' },
        { speaker: 'DEFENSA', text: '(...)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(The badge belongs to the building. The credential belongs to the bankruptcy. He told me so himself yesterday.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d4t1_4',
      speaker: 'GENOVEVA',
      pose: 'genoveva_idle',
      text: 'I write the time myself, with my pen, when they place the badge on my counter. The regulations authorize me to do that.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Miss: when you write that time, what are you looking at?', pose: 'chapulin_point' },
        { speaker: 'GENOVEVA', text: 'A badge on my counter, sir.', pose: 'genoveva_idle' },
        { speaker: 'DEFENSA', text: 'And the person?', pose: 'chapulin_idle' },
        { speaker: 'GENOVEVA', text: 'That too, if they stay to wait for the receipt. Many do not.', pose: 'genoveva_idle' },
        { speaker: 'DEFENSA', text: 'And afterward?', pose: 'chapulin_point' },
        { speaker: 'GENOVEVA', text: 'Not afterward, sir. Afterward I go back to my work.', pose: 'genoveva_idle' },
        { speaker: 'GENOVEVA', text: 'My window faces inward into the building. The door is behind my back.', pose: 'genoveva_reglamento' },
        { speaker: 'JUEZ', text: '...Is the witness facing away from the door she guards?', pose: 'judge_shock' },
        { speaker: 'GENOVEVA', text: 'I guard nothing, Your Honor. I record.', pose: 'genoveva_reglamento' }
      ]
    },
    {
      id: 'c5_d4t1_5',
      speaker: 'GENOVEVA',
      pose: 'genoveva_idle',
      text: 'And, by regulation, every opening or removal from the goods deposit requires a voucher. I fill out the vouchers that are filed, and I archive them.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'What is a deposit voucher?', pose: 'chapulin_point' },
        { speaker: 'GENOVEVA', text: 'A slip. The regulations require whoever moves, opens, or consults an item in deposit to fill out the voucher and sign it.', pose: 'genoveva_idle' },
        { speaker: 'DEFENSA', text: 'Even if he is the depositary?', pose: 'chapulin_idle' },
        { speaker: 'GENOVEVA', text: 'Especially if it is under his responsibility, sir. The deposit does not protect the court: it protects the depositary.', pose: 'genoveva_reglamento' },
        { speaker: 'DEFENSA', text: 'And what is written on the voucher?', pose: 'chapulin_point' },
        { speaker: 'GENOVEVA', text: 'Date, name, crate number... and what was opened. With its exact label.', pose: 'genoveva_idle' },
        { speaker: 'DEFENSA', text: '(With its exact label.)', pose: 'chapulin_panic' }
      ]
    }
  ]
};
