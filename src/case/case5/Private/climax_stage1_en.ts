// @Architecture(descriptionShort="English Case 5 climax stage 1 — profile Berrondo", type="data", icon="layers")
/**
 * Case 5 climax EN — Stage 1 WHO? (spec §18.1).
 */

import type { ClimaxStage } from '../../../types/index.js';

export const CASE5_CLIMAX_STAGE1_EN: ClimaxStage = {
  profileTarget: ['perfil_berrondo'],
  prompt: 'Who do the exhibits this court has admitted point to?',
  failDialogue: [
    { speaker: 'JUEZ', text: 'No, counselor.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'And this court reminds you it did not ask whom you suspect, but whom the exhibits you yourself got admitted point to.', pose: 'judge_neutral' },
    { speaker: 'SECRETARIO', text: 'The prosecution notes the defense is auditioning names.', sfx: 'damage' },
    { speaker: 'JUEZ', text: 'The court repeats the question, and warns you that you have fewer chances than you did a minute ago.', pose: 'judge_neutral' }
  ],
  successDialogue: [
    { speaker: 'DEFENSA', text: 'OBJECTION!', sfx: 'desk_slam', cutin: 'objection_protesto', pose: 'chapulin_slam', bgm: 'pursuit' },
    { speaker: 'DEFENSA', text: 'The man who was in that hallway is sitting at the prosecution table, Your Honor.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'Attorney Fulgencio Berrondo.', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'NARRADOR', text: 'The whole gallery rises.', sfx: 'realization' },
    { speaker: 'BERRONDO', text: '......', pose: 'berrondo_idle', bg: 'assets/bg_courtroom.webp' },
    { speaker: 'SECRETARIO', text: 'The prosecution objects! Attorney Berrondo assisted this office for three days!' },
    { speaker: 'JUEZ', text: 'The court shares the objection in principle. Defense, justify it or withdraw.', pose: 'judge_neutral' },
    { speaker: 'DEFENSA', text: 'With four things, Your Honor. Four things he said himself, in front of you, with nobody putting words in his mouth.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'First. On November twenty-ninth he signed a receipt stating the day, the hour, the place, and the name.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'Second. On November twenty-ninth, the same day, he opened with a voucher the drawer that runs from Donceles to Calle del Espanto.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Third. On December fourth he was inside that building at an hour that now falls inside the expert\'s window.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'Fourth. And yesterday he testified under oath that nobody had warned him, when his own signature said otherwise.', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'BERRONDO', text: 'Your Honor, I corrected the fourth myself and apologized.', pose: 'berrondo_sweat', bg: 'assets/bg_courtroom.webp' },
    { speaker: 'DEFENSA', text: 'You apologized when I showed you the signature, counselor. Not before.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'And it is the first time in four days you have done something after the fact instead of before.', pose: 'chapulin_point' },
    { speaker: 'BERRONDO', text: '......', pose: 'berrondo_sweat', bg: 'assets/bg_courtroom.webp' },
    { speaker: 'JUEZ', text: 'The court allows the defense to continue.', sfx: 'gavel', pose: 'judge_gavel' },
    { speaker: 'JUEZ', text: 'But I warn you one thing, counselor: four facts are not four proofs.', pose: 'judge_neutral' },
    { speaker: 'JUEZ', text: 'This man turned in his badge at four fifty.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'Tell this court what authorized him to remain inside that building after that hour.', sfx: 'gavel', pose: 'judge_gavel' }
  ]
};
