// @Architecture(descriptionShort="Case 5 day-3 Chompiras testimony, English", type="data", icon="layers")
/**
 * Case 5 Trial Day 3 — Testimony 6, El Chompiras (spec §15.2), English.
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE5_D3_T1_HUACAL_DEFLECT_EN, CASE5_D3_T1_MAQUINA_DEFLECT_EN } from './trial_day3_deflect_en.js';
import { CASE5_D3_T1_HUACAL_SUCCESS_EN, CASE5_D3_T1_INVENTARIO_SUCCESS_EN } from './trial_day3_success_en.js';

const MOMENTO: DialogueLine = {
  speaker: 'DEFENSA',
  text: 'HOLD IT!',
  cutin: 'objection_un_momento',
  sfx: 'whoosh',
  pose: 'chapulin_point'
};

export const CASE5_TESTIMONY_6_EN: Testimony = {
  title: 'Testimony: What I haul in that basement',
  witness: 'El Chompiras',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'c5_d3t1_1',
      speaker: 'CHOMPIRAS',
      pose: 'chompiras_idle',
      text: 'I haul crates, Your Honor. I take them up, I take them down, and I pry the lids with the crowbar when they tell me to.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'How long have you worked there?', pose: 'chapulin_point' },
        { speaker: 'CHOMPIRAS', text: 'Since September 15, Your Honor. The Sergeant got me the job.', pose: 'chompiras_idle' },
        { speaker: 'SARGENTO', text: 'I got him an application, Your Honor. He earned the job himself.', pose: 'pazguato_decidido' },
        { speaker: 'CHOMPIRAS', text: 'It is the first time in my life I get paid to haul something that is not mine and still is not mine at the end.', pose: 'chompiras_relieved' },
        { bg: 'assets/bg_gallery_characters.webp', furniture: 'none', speaker: 'NARRADOR', text: 'Soft laughter in the gallery.', sfx: 'realization' }
      ]
    },
    {
      id: 'c5_d3t1_2',
      speaker: 'CHOMPIRAS',
      pose: 'chompiras_idle',
      text: 'I open crate nine on Thursdays, when the man in black shows up.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Always on Thursdays?', pose: 'chapulin_point' },
        { speaker: 'CHOMPIRAS', text: 'Always. I even have the crowbar ready for him.', pose: 'chompiras_idle' },
        { speaker: 'DEFENSA', text: 'And why Thursdays?', pose: 'chapulin_idle' },
        { speaker: 'CHOMPIRAS', text: 'Because there is no public downstairs on Thursdays and you can work. He told me.', pose: 'chompiras_idle' },
        { speaker: 'DEFENSA', text: '(And he said the same thing yesterday under oath. Point for point.)', pose: 'chapulin_idle' }
      ],
      deflect: { evidence: ['huacal_9'], dialogue: CASE5_D3_T1_HUACAL_DEFLECT_EN }
    },
    {
      id: 'c5_d3t1_3',
      speaker: 'CHOMPIRAS',
      pose: 'chompiras_idle',
      text: 'And inside there is nothing but old books and some wooden drawers. I have seen it open six or seven times.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Have you seen what is in the drawers?', pose: 'chapulin_point' },
        { speaker: 'CHOMPIRAS', text: 'Little cards, Your Honor. Thousands and thousands of little cards.', pose: 'chompiras_idle' },
        { speaker: 'DEFENSA', text: 'And you were not curious?', pose: 'chapulin_idle' },
        { speaker: 'CHOMPIRAS', text: 'Curiosity cost me eight months of trial, counselor! I am not curious about anything anymore, not even the newspaper!', pose: 'chompiras_nervous' },
        { speaker: 'DEFENSA', text: '(And still he just told the court what he thinks is in there. And he is wrong by default.)', pose: 'chapulin_idle' }
      ],
      deflect: { evidence: ['maquina_escribir'], dialogue: CASE5_D3_T1_MAQUINA_DEFLECT_EN },
      contradiction: {
        evidence: ['inventario_1971'],
        successDialogue: CASE5_D3_T1_INVENTARIO_SUCCESS_EN,
        followUp: {
          evidence: ['huacal_9'],
          prompt: 'What complete date appears on the topmost strip of the crate?',
          successDialogue: CASE5_D3_T1_HUACAL_SUCCESS_EN
        }
      }
    },
    {
      id: 'c5_d3t1_4',
      speaker: 'CHOMPIRAS',
      pose: 'chompiras_idle',
      text: 'The man sits a while, types, and when he is done I nail the lid back on and he sticks his little strip on top.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '"Sticks his little strip on top." What strip?', pose: 'chapulin_point' },
        { speaker: 'CHOMPIRAS', text: 'A gummed strip, Your Honor, like for sealing. It has his signature and the date.', pose: 'chompiras_idle' },
        { speaker: 'CHOMPIRAS', text: 'He writes it with a pen, wets it with his tongue, and sticks it on top of the others. Always on top, never removing.', pose: 'chompiras_idle' },
        { speaker: 'DEFENSA', text: 'And how many times have you seen him stick one on?', pose: 'chapulin_idle' },
        { speaker: 'CHOMPIRAS', text: 'Well... every time he came down. Six or seven since September.', pose: 'chompiras_idle' },
        { speaker: 'DEFENSA', text: 'Is the lid nailed shut?', pose: 'chapulin_point' },
        { speaker: 'CHOMPIRAS', text: 'No, counselor. It has four lever latches. The crowbar only lifts the lip because the wood swells.', pose: 'chompiras_idle' },
        { speaker: 'CHOMPIRAS', text: 'Opening it takes two minutes. Closing the four latches and putting on the strip, two and a half. I know because Miss Genoveva times us.', pose: 'chompiras_nervous' },
        { speaker: 'DEFENSA', text: '(Six or seven in three months. And that is two a month. The math works... unless one is extra.)', pose: 'chapulin_idle' }
      ]
    }
  ]
};
