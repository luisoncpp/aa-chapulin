// @Architecture(descriptionShort="Case 5 day-2 Señor Barriga testimony (English)", type="data", icon="layers")
/**
 * Case 5 Trial Day 2 — Testimony 4, Señor Barriga (spec §13.2), English.
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE5_D2_T1_NOTA_SUCCESS_EN, CASE5_D2_T1_RECIBO_SUCCESS_EN } from './trial_day2_success_en.js';

const MOMENTO: DialogueLine = {
  speaker: 'DEFENSA',
  text: 'HOLD IT!',
  cutin: 'objection_un_momento',
  sfx: 'whoosh',
  pose: 'chapulin_point'
};

export const CASE5_TESTIMONY_4_EN: Testimony = {
  title: 'Testimony: The envelope of the twenty-ninth',
  witness: 'Mr. Barriga',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'c5_d2t1_1',
      speaker: 'BARRIGA',
      pose: 'barriga_idle',
      text: 'On November twenty-ninth, at nine in the morning, I found a yellow envelope under my door.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'At nine on the dot?', pose: 'chapulin_point' },
        { speaker: 'BARRIGA', text: 'At nine. I eat breakfast before that hour and I go out for the paper at nine on the dot since 1954.', pose: 'barriga_idle' },
        { speaker: 'DEFENSA', text: 'Then the envelope could have been there since dawn.', pose: 'chapulin_idle' },
        { speaker: 'BARRIGA', text: 'It could. I do not sleep in the doorway, young man.', pose: 'barriga_enojado' },
        { speaker: 'DEFENSA', text: '(Nobody saw anything. As always when things are done right.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d2t1_2',
      speaker: 'BARRIGA',
      pose: 'barriga_idle',
      text: 'Inside were seventeen months\' rent in cash. Four thousand two hundred fifty pesos, in brand-new bills.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Brand-new bills?', pose: 'chapulin_point' },
        { speaker: 'BARRIGA', text: 'Brand-new. Hundreds, with the bank band still on two bundles.', pose: 'barriga_shock' },
        { speaker: 'JUEZ', text: 'With bank bands?', pose: 'judge_thinking' },
        { speaker: 'BARRIGA', text: 'With bands. I kept one because it had a number. I gave it to the Sergeant.', pose: 'barriga_idle' },
        { speaker: 'SARGENTO', text: 'And I traced it, Your Honor. Teller withdrawal on November twenty-six. Account in the name of a trust company.', pose: 'pazguato_decidido' },
        { speaker: 'NARRADOR', text: 'Murmurs.', sfx: 'realization' },
        { speaker: 'BERRONDO', text: 'Your Honor, with leave: that withdrawal is mine and it is declared.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'I withdrew five thousand pesos on the twenty-sixth to pay a notary\'s fees in cash, an ugly but common thing.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'The notary issued an invoice and I have it here. Shall I add it?', pose: 'berrondo_idle' },
        { speaker: 'JUEZ', text: '...Add it.', pose: 'judge_thinking' },
        { speaker: 'DEFENSA', text: '(He answers before they ask. And he answers well.)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(Five thousand minus four thousand two hundred fifty is seven hundred fifty pesos. How much does a notary charge?)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(He will not answer that bit today. I am saving it.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d2t1_3',
      speaker: 'BARRIGA',
      pose: 'barriga_idle',
      text: 'And there was a typewritten note telling me to issue the receipt and that no reply was needed.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Read the note to the court, Mr. Barriga.', pose: 'chapulin_point' },
        { speaker: 'BARRIGA', text: '"Enclosed is payment for seventeen months overdue on behalf of C. Ramón Valdés, tenant of dwelling 4."', pose: 'barriga_idle' },
        { speaker: 'BARRIGA', text: '"Kindly issue the corresponding receipt and keep it. No reply required."', pose: 'barriga_idle' },
        { speaker: 'JUEZ', text: '"Kindly issue"?', pose: 'judge_thinking' },
        { speaker: 'BARRIGA', text: 'Kindly issue, Your Honor. That is what it says.', pose: 'barriga_idle' },
        { speaker: 'DEFENSA', text: '(And "keep it." Why would anyone care whether the landlord keeps the receipt?)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d2t1_4',
      speaker: 'BARRIGA',
      pose: 'barriga_idle',
      text: 'I made the receipt that same morning and gave it to Mr. Ramón that Monday, in the courtyard, in front of two neighbors.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'What face did my client make when you gave him the receipt?', pose: 'chapulin_point' },
        { speaker: 'BARRIGA', text: 'A scared face.', pose: 'barriga_shock' },
        { speaker: 'BARRIGA', text: 'I said "thank you, Mr. Ramón" and he said "thank you for what?" and stood there like a post.', pose: 'barriga_idle' },
        { speaker: 'SUPER SAM', text: 'Acting! I know how to make a post face too!', pose: 'supersam_point' },
        { speaker: 'DON RAMÓN', text: 'Go on, Mr. Prosecutor, let us see if you can pull it off.', pose: 'donramon_idle' },
        { speaker: 'SUPER SAM', text: '...I am not making a post face in my own trial!', pose: 'supersam_sweat' },
        { speaker: 'JUEZ', text: 'A pity.', pose: 'judge_thinking' }
      ]
    },
    {
      id: 'c5_d2t1_5',
      speaker: 'BARRIGA',
      pose: 'barriga_idle',
      text: 'I did not see anyone. But it had to be him. Who else would pay Mr. Ramón\'s rent?',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Mr. Barriga, do you want Don Ramón convicted?', pose: 'chapulin_point' },
        { speaker: 'BARRIGA', text: 'Of course not!', pose: 'barriga_shock' },
        { speaker: 'BARRIGA', text: 'If they lock him up, who do I charge? You do not collect rent from a prisoner.', pose: 'barriga_enojado' },
        { speaker: 'BARRIGA', text: 'I am only saying the only thing I can think of, young man, because I cannot think of anything else.', pose: 'barriga_idle' },
        { speaker: 'DEFENSA', text: '(That is exactly what is happening, Your Honor. And it is not the same as testifying.)', pose: 'chapulin_idle' }
      ],
      contradiction: {
        evidence: ['nota_mecanografiada'],
        successDialogue: CASE5_D2_T1_NOTA_SUCCESS_EN,
        followUp: {
          evidence: ['recibo_renta'],
          prompt: 'From whom did the witness say he received that money?',
          successDialogue: CASE5_D2_T1_RECIBO_SUCCESS_EN
        }
      }
    }
  ]
};
