// @Architecture(descriptionShort="English Case 4 day-3 business testimony", type="data", icon="layers")
/** Case 4 Trial Day 3 — Testimony 6, business, English. Straight to climax. */

import type { DialogueLine, PointTargetContradiction, Testimony } from '../../../types/index.js';
import { CASE4_TELEGRAMA_POINT_TARGET } from './trial_day3_success.js';

const TELEGRAM_EN: PointTargetContradiction = {
  ...CASE4_TELEGRAMA_POINT_TARGET,
  promptQuestion: 'Which part of this paper proves the addressee held it?',
  zones: [
    { id: 'acuse_recepcion', bounds: [10, 64, 94, 86], isCorrect: true, failureDialogue: [] },
    { id: 'telegrama_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: [
      { speaker: 'JUEZ', pose: 'judge_thinking', text: 'That part proves no receipt. Look for the signature of the man who took it.', sfx: 'damage' }
    ] }
  ]
};

const T6_SUCCESS_EN: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION! You signed that receipt fifty minutes before the visit you supposedly never expected!', sfx: 'desk_slam', bgm: 'objection', pose: 'donramon_slam' },
  { speaker: 'RUFINO', text: 'I sign dozens of papers a day.', pose: 'rufino_sweat' },
  { speaker: 'DEFENSA', text: 'This one demands payment for a stolen necklace under threat of report. That one nobody signs unread. Not you, not anyone.', pose: 'donramon_point' },
  { speaker: 'SARGENTO', text: 'And the necklace turned up yesterday in the briefcase we seized in his room, Your Honor. I logged it.', pose: 'pazguato_decidido' },
  { speaker: 'JUEZ', text: 'Do you know that jewel?', pose: 'judge_thinking' },
  { speaker: 'RUFINO', text: 'I grant it is mine.', pose: 'rufino_sweat' },
  { speaker: 'DEFENSA', text: 'It stands reported stolen eleven months ago. And the man who came to collect his share turned up dead inside a trunk of yours.', pose: 'donramon_point', bgm: 'objection' },
  { speaker: 'SUPER SAM', text: '...A motive. Now we do have a motive.', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'SUPER SAM', text: 'But a motive is no method, Your Honor! The man who touched that bottle is still the defendant!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'Agreed, prosecutor. Then let us talk about the bottle.', pose: 'donramon_idle' },
  { speaker: 'CHAPULIN', text: 'About time! I have been carrying it for three days.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Let the defense show how that wine was dosed. It is the last thing this trial has left to resolve.', pose: 'judge_gavel', sfx: 'gavel' }
];

export const CASE4_TESTIMONY_6_EN: Testimony = {
  title: 'Testimony: A business meeting',
  witness: 'Rufino Rufián',
  bgm: 'cross_exam_presto',
  statements: [
    {
      id: 'd3_t2_1',
      speaker: 'RUFINO',
      pose: 'rufino_smug',
      text: 'I met Mr. Gómez years ago, in import business. Men in transit, if you follow me.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'RUFINO', text: 'Vague import business. Nothing to add or take.', pose: 'rufino_monocle' }
      ]
    },
    {
      id: 'd3_t2_2',
      speaker: 'RUFINO',
      pose: 'rufino_smug',
      text: 'That night he came up to pitch an investment and left on his own feet.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'RUFINO', text: 'He left my sight. That is what I meant.', pose: 'rufino_sweat' }
      ]
    },
    {
      id: 'd3_t2_3',
      speaker: 'RUFINO',
      pose: 'rufino_smug',
      text: 'I owed that man nothing. Nor did I hold the slightest personal interest in his death.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'RUFINO', text: 'My fortune is my own and the word debt offends me.', pose: 'rufino_monocle' }
      ]
    },
    {
      id: 'd3_t2_4',
      speaker: 'RUFINO',
      pose: 'rufino_smug',
      text: 'And I did not even expect his visit. I learned he was in this hotel when I saw him walk into my room.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'RUFINO', text: 'Nobody announced that visit to me.', pose: 'rufino_monocle' }
      ],
      contradiction: { evidence: ['nota_amenaza'], pointTarget: TELEGRAM_EN, successDialogue: T6_SUCCESS_EN }
    }
  ]
};
