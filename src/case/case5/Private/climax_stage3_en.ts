// @Architecture(descriptionShort="English Case 5 climax stage 3 — reference shelf", type="data", icon="layers")
/**
 * Case 5 climax EN — Stage 3 DID HE GO UP? intro + present + point (spec §18.3).
 */

import type { ClimaxStage } from '../../../types/index.js';
import { CASE5_CLIMAX_STAGE3_POINT_EN } from './climax_stage3_point_en.js';

export const CASE5_CLIMAX_STAGE3_EN: ClimaxStage = {
  presentTarget: ['tomo_caido'],
  prompt: 'What proves someone returned to the first floor after the blow?',
  deflects: [{
    evidence: ['esquina_tarjeta'],
    dialogue: [
      { speaker: 'JUEZ', text: 'The card corner implicates Attorney Berrondo, but it does not prove anyone returned to the first floor after the blow.', pose: 'judge_thinking' },
      { speaker: 'JUEZ', text: 'This court needs what remained upstairs and could not get there on its own.', pose: 'judge_neutral' }
    ]
  }],
  failDialogue: [
    { speaker: 'JUEZ', text: 'That does not prove anyone returned to the first floor after the blow.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'This court needs something that was upstairs and could not get there on its own.', pose: 'judge_neutral' },
    { speaker: 'SECRETARIO', text: 'One point off the defense, Your Honor.', sfx: 'damage' }
  ],
  introDialogue: [
    { speaker: 'DEFENSA', text: 'TAKE THAT! The reference shelf from hallway seven!', sfx: 'desk_slam', cutin: 'objection_toma_eso', pose: 'chapulin_slam' },
    { speaker: 'DEFENSA', text: 'Twenty-four numbered slots, Your Honor. And the janitor of that building testified Monday, in this room, that when he went up he saw it straight.', pose: 'chapulin_point' },
    { speaker: 'NICANOR', text: 'Straight, Your Honor. Complete. I can count them asleep.', pose: 'nicanor_idle' },
    { speaker: 'DEFENSA', text: 'Twenty-three volumes and the gap for thirteen.', pose: 'chapulin_idle' },
    { speaker: 'JUEZ', text: 'And?', pose: 'judge_thinking' },
    { speaker: 'DEFENSA', text: 'And on the floor, a meter from the body, there was another volume.', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'NARRADOR', text: 'Absolute silence in the room.', bgm: 'suspense' },
    { speaker: 'JUEZ', text: '...Twenty-four volumes.', pose: 'judge_shock' },
    { speaker: 'DEFENSA', text: 'Twenty-four volumes for twenty-four slots... and one slot empty since 1971.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'The count is off, Your Honor. One too many.', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'JUEZ', text: 'Bring that volume before this court! NOW!', sfx: 'gavel', pose: 'judge_gavel' }
  ],
  pointTarget: CASE5_CLIMAX_STAGE3_POINT_EN,
  successDialogue: [
    { speaker: 'JUEZ', text: '...This court wants to understand one thing.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'Is that card file in my courthouse basement what the street calls "Volume Thirteen"?', pose: 'judge_neutral' },
    { speaker: 'DEFENSA', text: 'A man told you that in this same room in August, Your Honor, and you could not ask him.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'The prosecution objected it was irrelevant to the verdict. And you agreed.', pose: 'chapulin_point' },
    { speaker: 'JUEZ', text: '...I remember perfectly.', pose: 'judge_shock' },
    { speaker: 'JUEZ', text: 'And it has been the worst decision I have made since I took this bench.', pose: 'judge_thinking' }
  ]
};
