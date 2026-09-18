// @Architecture(descriptionShort="Case 5 day-1 Nicanor recall testimony three (EN)", type="data", icon="layers")
/**
 * Case 5 Trial Day 1 — Testimony 3, Nicanor Tolentino recall (spec §11.4), English.
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE5_D1_T3_EXPEDIENTE_GIRO_SUCCESS_EN, CASE5_D1_T3_PLANO_SUCCESS_EN } from './trial_day1_success_en.js';

const MOMENTO: DialogueLine = {
  speaker: 'DEFENSA',
  text: 'HOLD IT!',
  cutin: 'objection_un_momento',
  sfx: 'whoosh',
  pose: 'chapulin_point'
};

export const CASE5_TESTIMONY_3_EN: Testimony = {
  title: 'Testimony: What I Did See When I Went Up',
  witness: 'Nicanor Tolentino',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'c5_d1t3_1',
      speaker: 'NICANOR',
      pose: 'nicanor_idle',
      text: 'At five thirty-five I went up the main staircase, like every day of my life.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Every day at the same time?', pose: 'chapulin_point' },
        { speaker: 'NICANOR', text: 'Five thirty-five. Not a minute earlier, because at five thirty an intern might still come running.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: 'And who else knows you go up at five thirty-five?', pose: 'chapulin_idle' },
        { speaker: 'NICANOR', text: 'The whole building, counselor. I have gone up at the same time for thirty-one years. It is the only thing people know about me.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: '(The whole building. Another schedule written on a good man\'s forehead.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d1t3_2',
      speaker: 'NICANOR',
      pose: 'nicanor_idle',
      text: 'In hallway seven the gentleman was on the floor, and the volume one meter from him.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Was the volume open or closed?', pose: 'chapulin_point' },
        { speaker: 'NICANOR', text: 'Closed. Face down, spine up.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: 'And do you know which volume it was?', pose: 'chapulin_idle' },
        { speaker: 'NICANOR', text: 'Eleven, counselor. I know because I dust it on Mondays. Railways-Guatemala.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: '(This man knows that collection volume by volume. And it never occurred to him to say one was missing.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d1t3_3',
      speaker: 'NICANOR',
      pose: 'nicanor_idle',
      text: 'Everything else was in its place: the table with its file open, the lamp lit, and the shelf straight.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '"The shelf straight." What does that mean?', pose: 'chapulin_point' },
        { speaker: 'NICANOR', text: 'That it was complete, counselor. Not a gap.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: 'Complete? With a volume on the floor?', pose: 'chapulin_panic' },
        { speaker: 'NICANOR', text: 'Well, yes. It struck me odd for a second and then I forgot, because there was a dead man.', pose: 'nicanor_sweat' },
        { speaker: 'SUPER SAM', text: 'OBJECTION! The witness had just found a corpse! Nobody counts books at that moment!', pose: 'supersam_slam', sfx: 'desk_slam' },
        { speaker: 'NICANOR', text: 'I do, prosecutor. I count them asleep. There are twenty-three and the gap for thirteen.', pose: 'nicanor_idle' },
        { speaker: 'JUEZ', text: 'The gap for thirteen?', pose: 'judge_thinking' },
        { speaker: 'NICANOR', text: 'That one has been empty since seventy-one. A volume they announced and never printed. I call it "volume thirteen," and there it stays, empty.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: '(Volume thirteen.)', pose: 'chapulin_idle' },
        { speaker: 'BERRONDO', text: '...', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '(That man with the watch chain has not moved all hearing. And he just moved a finger.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d1t3_4',
      speaker: 'NICANOR',
      pose: 'nicanor_idle',
      text: 'And since nobody went up my staircase after the counselor, I concluded nobody else could reach hallway seven. That staircase starts three meters from my desk.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Is your staircase the only one that reaches hallway seven?', pose: 'chapulin_point' },
        { speaker: 'NICANOR', text: 'Mine is the people\'s staircase.', pose: 'nicanor_idle' },
        { speaker: 'DEFENSA', text: 'I did not ask if it is the people\'s. I asked if it is the only one.', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'OBJECTION! This court already rejected that line! The witness testifies about his door!', pose: 'supersam_slam', sfx: 'desk_slam' },
        { speaker: 'JUEZ', text: '...The court overrules the objection.', pose: 'judge_neutral' },
        { speaker: 'SUPER SAM', text: 'WHAT?!', pose: 'supersam_sweat' },
        { speaker: 'JUEZ', text: 'This morning the defense asked out of curiosity. Now there are fifteen unguarded minutes and a paper someone pressed flat.', pose: 'judge_thinking' },
        { speaker: 'JUEZ', text: 'Answer, witness.', sfx: 'gavel', pose: 'judge_gavel' },
        { speaker: 'NICANOR', text: '...No, counselor. It is not the only one.', pose: 'nicanor_sweat' }
      ],
      contradiction: {
        evidence: ['plano_archivo'],
        successDialogue: CASE5_D1_T3_PLANO_SUCCESS_EN,
        followUp: {
          evidence: ['expediente_casimiro'],
          prompt: 'What was the deceased doing when he was struck?',
          successDialogue: CASE5_D1_T3_EXPEDIENTE_GIRO_SUCCESS_EN
        }
      }
    }
  ]
};
