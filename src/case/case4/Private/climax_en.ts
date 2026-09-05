// @Architecture(descriptionShort="English Case 4 climax, breakdown, verdict, and epilogue", type="data", icon="layers")
/**
 * Case 4 Final Climax (English).
 */

import type { ClimaxDefinition, DialogueLine } from '../../../types/index.js';
import { CASE4_CLIMAX_BOTTLE_POINT } from './climax_stage_success.js';
import { CASE4_EPILOGUE_EN } from './climax_epilogue.js';

const WAITING_ROOM_BG = 'assets/bg_waiting_room.webp';

const BOTTLE_POINT_EN = {
  ...CASE4_CLIMAX_BOTTLE_POINT,
  promptQuestion: 'Point to the exact spot where cyanide penetrated the sealed bottle!'
};

const STAGE1_EN: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'Look with a magnifying glass at this red wax seal\'s head! There is the mark of a hypodermic needle!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'A millimeter hole disguised with melted wax!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'You did not uncork the bottle! You injected liquid cyanide through the virgin cork and then used a hot metal object to seal the puncture with melted wax.', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'JUEZ', text: 'But... with what specific object did you heat and stamp that wax?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'With the same jewel you threw in your suite\'s trash believing nobody would find it!', pose: 'donramon_point' }
];

const STAGE2_EN: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'This gold wax-seal signet ring! The jewel Rufino threw in his suite\'s garbage!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
  { speaker: 'RUFINO', text: 'NOOOO! Curse you, neighborhood meddler!', pose: 'rufino_panic', sfx: 'damage' }
];

const VERDICT_EN: DialogueLine[] = [
  { speaker: 'NARRADOR', text: '(Rufino\'s gold monocle falls off and shatters on the stand. Desperate, he yanks his fake mustache clean off and throws his tailcoat to the floor in fits of rage.)' },
  { speaker: 'RUFINO', text: 'That Cuajinais pig was going to turn me in! We stole Cleopatra\'s Necklace together in Marseille and he came demanding fifty thousand pesos cash or he\'d bring the police to my door!', pose: 'rufino_breakdown', bgm: 'pursuit' },
  { speaker: 'RUFINO', text: 'He was going to kill me! I only offered him a cup in my suite so he\'d sleep forever! And that wretched fat plumber went up to unclog pipes at the perfect moment to be my scapegoat!', pose: 'rufino_breakdown' },
  { speaker: 'SUPER SAM', text: 'OH NOOO! A criminal swindler! My noble-bond investments fell to zero!', pose: 'supersam_breakdown', sfx: 'damage' },
  { speaker: 'JUEZ', text: 'The farce is over! Having proven the mastermind, material author, and pyrotechnic trap mechanics...', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'JUEZ', text: 'I declare citizen Gordon Botija Pompa y Pompa... NOT GUILTY of all charges!', pose: 'judge_gavel', cutin: 'objection_inocente', sfx: 'whoosh', bgm: 'victory' },
  { speaker: 'NARRADOR', text: '(Tricolor confetti falls on the defense bench. Botija lifts Chimoltrufia into the air amid tears and thunderous laughter.)' },
  { speaker: 'BOTIJA', text: 'I\'m free, my heaven! I\'m free!', pose: 'botija_aliviado' },
  { speaker: 'CHIMOLTRUFIA', text: 'Like I say one thing I say another, but today I\'ll make you a triple-tortilla chicharrón stew in green sauce!', pose: 'chimoltrufia_confundida' },
  { speaker: 'CHAPULIN', text: 'You didn\'t count on my cunning!', pose: 'chapulin_point' }
];

export const CASE4_CLIMAX_EN: ClimaxDefinition = {
  dialogue: [
    { speaker: 'RUFINO', text: 'Nonsense! Nobody in this courtroom can scientifically prove how cyanide entered that bottle if the cork was sealed with my wax intact!', pose: 'rufino_panic', sfx: 'desk_slam', bgm: 'pursuit' },
    { speaker: 'JUEZ', text: 'Silence in the court! Counselor Monchito: the witness challenges this tribunal. Does the defense hold material proof showing how the poison was injected without breaking the cork?', pose: 'judge_gavel', sfx: 'gavel' },
    { speaker: 'DEFENSA', text: 'The defense holds the decisive proof that will destroy the fake count\'s alibi!', cutin: 'objection_protesto', sfx: 'desk_slam', pose: 'donramon_slam' }
  ],
  presentTarget: ['botella_vino'],
  stages: [
    {
      presentTarget: ['botella_vino'],
      prompt: 'What material proof shows how poison was injected without breaking the cork?',
      pointTarget: BOTTLE_POINT_EN,
      successDialogue: STAGE1_EN
    },
    {
      presentTarget: ['sello_lacre'],
      prompt: 'With what specific object was the wax seal melted and stamped?',
      successDialogue: STAGE2_EN
    }
  ],
  verdict: VERDICT_EN,
  epilogue: { bg: WAITING_ROOM_BG, dialogue: CASE4_EPILOGUE_EN }
};
