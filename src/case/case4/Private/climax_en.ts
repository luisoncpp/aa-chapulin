// @Architecture(descriptionShort="English Case 4 climax and epilogue", type="data", icon="layers")
/** English Case 4 climax: two stages with present + point, then verdict. */

import type { ClimaxDefinition, DialogueLine, PointTargetContradiction } from '../../../types/index.js';
import { CASE4_ANILLO_POINT_TARGET, CASE4_CIERRE_POINT_TARGET } from './climax_stage_success.js';
import { CASE4_EPILOGUE_EN } from './climax_epilogue.js';

const WAITING_ROOM_BG = 'assets/bg_waiting_room.webp';

const CIERRE_EN: PointTargetContradiction = {
  ...CASE4_CIERRE_POINT_TARGET,
  promptQuestion: 'What does the V58-17 cork show that no corkscrew could make?',
  zones: [
    { id: 'canal_fino', bounds: [34, 48, 70, 79], isCorrect: true, failureDialogue: [] },
    { id: 'cierre_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: [
      { speaker: 'JUEZ', pose: 'judge_thinking', text: 'That mark belongs to the ordinary opening, counselor. Look for a way the corkscrew could not have made.', sfx: 'damage' },
      { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'And look fast! Time is money!' }
    ] }
  ]
};
const ANILLO_EN: PointTargetContradiction = {
  ...CASE4_ANILLO_POINT_TARGET,
  promptQuestion: 'Which part of the ring matches the fragment held in the channel?',
  zones: [
    { id: 'extremo_truncado', bounds: [50, 37, 80, 88], isCorrect: true, failureDialogue: [] },
    { id: 'anillo_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: [
      { speaker: 'JUEZ', pose: 'judge_thinking', text: 'That part explains how the piece works, counselor. This court asked you which part is missing from it.', sfx: 'damage' }
    ] }
  ]
};

const STAGE1_EN: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'TAKE THAT! A channel running clean through the cork, side to side! And the lab found the same toxin down inside it!', sfx: 'desk_slam', bgm: 'pursuit', pose: 'donramon_slam' },
  { speaker: 'JUEZ', text: 'Good gracious! Are you telling this court they poisoned the wine without opening the bottle?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Through the cork, Your Honor. With something thin and rigid. After that, one little spot of wax over the seal and nobody sees where it went in.', pose: 'donramon_point' },
  { speaker: 'CHAPULIN', text: 'Like poking a juice pouch without opening it!', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: '...Surprisingly clear.', pose: 'judge_thinking' },
  { speaker: 'SUPER SAM', text: 'And who tells me that hole was not made later, to manufacture this story for me?', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'Custody, prosecutor. That cork left 204 in Miss Maruja’s purse before the victim drank.', pose: 'donramon_idle' },
  { speaker: 'MARUJA', text: 'He gave it to me himself. I handed it to the Sergeant next day, once I knew which bottle it came from.', pose: 'maruja_idle' },
  { speaker: 'SARGENTO', text: 'Since that noon it has been in my file. With hour and two signatures.', pose: 'pazguato_saludo' },
  { speaker: 'SUPER SAM', text: 'Then fifteen hours passed inside a private purse. Your chain starts late, counselor.', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'Late, and I grant it. What it does prove is that this cork never went back to that room nor passed through the defendant’s hands — by that hour he was already in custody.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'One possibility stays open over who kept it.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'It stays. And I do not intend to close it on anyone’s word, but on what stayed trapped inside the channel.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'The court accepts the method and reserves the hand.', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'SUPER SAM', text: 'And that hand carried tools! A plumber carries thin rigid things all the livelong day. And he held the bottle five minutes!', pose: 'supersam_point' },
  { speaker: 'BOTIJA', text: 'I carried it tight against my chest, sir. The way you carry a child.', pose: 'botija_nervioso' },
  { speaker: 'SUPER SAM', text: 'Five minutes are five minutes, Your Honor.', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'Then let us compare that channel with what stayed inside it.', pose: 'donramon_point' }
];

const STAGE2_EN: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION! This tip is missing a piece! And the piece it is missing stayed inside the cork.', sfx: 'desk_slam', bgm: 'objection', pose: 'donramon_slam' },
  { speaker: 'SARGENTO', text: 'Both fracture faces stand photographed at the same scale, Your Honor. Edge matches edge.', pose: 'pazguato_saludo' },
  { speaker: 'SARGENTO', text: 'And the break is fresh. The expert says such a tip snaps forcing it against the neck glass.', pose: 'pazguato_decidido' },
  { speaker: 'DEFENSA', text: 'That is why it stayed in the cork. Whoever did it learned it only today.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'And the channel still holds residue of the same agent that killed Mr. Gómez.', pose: 'donramon_idle' },
  { speaker: 'SUPER SAM', text: '...A ring.', pose: 'supersam_sweat' },
  { speaker: 'SUPER SAM', text: 'My calculator does not have a key for this.', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'A ring for sealing wax. That is why nobody wonders at wax on it. What wax cannot explain is a hollow tip.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'And who held that piece that night?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'At quarter past nine he sealed the cellar release with it. The wax is still on the folio, crest and all.', pose: 'donramon_idle' },
  { speaker: 'CECILIO', text: 'He stamped that seal before me. That is why the folio bears wax and not one more signature.', pose: 'cecilio_idle' },
  { speaker: 'MARUJA', text: 'And I saw it on him at the 204 door, when he signed the wine receipt.', pose: 'maruja_idle' },
  { speaker: 'DEFENSA', text: 'Botija never held it, and nobody has testified to lending it to him that night.', pose: 'donramon_point' },
  { speaker: 'SARGENTO', text: 'I seized it yesterday afternoon, when the court ordered custody. There was not a single night in which to get rid of it.', pose: 'pazguato_decidido' },
  { speaker: 'DEFENSA', text: 'And there closes what stood open a moment ago: who kept the cork never held this ring, and the piece that left that fragment sits guarded since yesterday.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'The court holds that possibility resolved.', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'DEFENSA', text: 'Mr. Rufián: you were left alone with a sealed bottle... and the piece missing from your ring was inside that cork.', pose: 'donramon_point', cutin: 'objection_toma_eso', sfx: 'whoosh', bgm: 'objection' },
  { speaker: 'RUFINO', text: '...', pose: 'rufino_panic' },
  { speaker: 'NARRADOR', text: 'The monocle slips and hangs from its chain.' },
  { speaker: 'RUFINO', text: 'That cork belonged in the trash! He gave it to her! HE GAVE IT TO HER RIGHT IN FRONT OF ME, LIKE A PIECE OF CANDY!', pose: 'rufino_breakdown', sfx: 'desk_slam' }
];

const VERDICT_EN: DialogueLine[] = [
  { speaker: 'RUFINO', text: 'I planned the necklace. All he did was open a display case, and ever since he thought himself my partner.', pose: 'rufino_breakdown' },
  { speaker: 'RUFINO', text: 'Eleven months collecting. And that night he came to my hotel to put a price on my surname.', pose: 'rufino_breakdown' },
  { speaker: 'JUEZ', text: 'Your surname is false.', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'RUFINO', text: 'That is why it cost so much.', pose: 'rufino_breakdown' },
  { speaker: 'DEFENSA', text: 'And the plumber?', pose: 'donramon_point' },
  { speaker: 'RUFINO', text: 'A man with a record, a master key, and a quarrel half the corridor heard. I wrote it on a piece of paper and the hotel sent him up to me.', pose: 'rufino_breakdown' },
  { speaker: 'BOTIJA', text: 'He picked me because nobody was going to believe me.', pose: 'botija_llorando' },
  { speaker: 'RUFINO', text: 'I picked him because he was cheap.', pose: 'rufino_breakdown' },
  { speaker: 'CHIMOLTRUFIA', text: 'Look at me when you say that!', pose: 'chimoltrufia_shock' },
  { speaker: 'SUPER SAM', text: 'The prosecution drops the charges against the defendant, Your Honor. And moves that all three hearings be billed to the count\'s account.', pose: 'supersam_idle' },
  { speaker: 'JUEZ', text: 'I have heard enough. This court rules.', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'JUEZ', text: 'Gordon Botija Pompa y Pompa, this court finds you NOT GUILTY.', pose: 'judge_gavel', cutin: 'objection_inocente', sfx: 'whoosh', bgm: 'victory' },
  { speaker: 'JUEZ', text: 'The defendant answers administratively for taking and keeping the dead man’s wallet. Not for his death.', pose: 'judge_neutral' },
  { speaker: 'BOTIJA', text: 'Yes, sir. That I did do.', pose: 'botija_aliviado' },
  { speaker: 'JUEZ', text: 'Rufino Rufián stands charged with homicide, concealment, and receiving the Cleopatra Necklace.', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'JUEZ', text: 'The court notes Sergeant Refugio Pazguato’s work, requesting the exams that corrected his own report.', pose: 'judge_neutral' },
  { speaker: 'SUPER SAM', text: 'An efficient prosecutor takes his losses and closes the position, Your Honor. Time is money.', pose: 'supersam_idle' },
  { speaker: 'DEFENSA', text: 'The kindest thing I ever heard you say.', pose: 'donramon_idle' }
];

export const CASE4_CLIMAX_EN: ClimaxDefinition = {
  dialogue: [
    { speaker: 'SUPER SAM', text: 'Facts, Your Honor. Facts. The wine left the cellar sealed, the defendant carried it, and a while later it killed a man.', pose: 'supersam_slam', sfx: 'desk_slam', bgm: 'suspense' },
    { speaker: 'SUPER SAM', text: 'Mr. Rufián hid a corpse out of cowardice. That is a different crime and it goes on a different invoice. Someone else poured that glass!', pose: 'supersam_idle' },
    { speaker: 'RUFINO', text: 'I received a sealed bottle. I set it on the table and touched it no more until my guest opened it.', pose: 'rufino_smug' },
    { speaker: 'DEFENSA', text: 'That bottle was opened in front of a witness, seal intact. Nobody disputes that.', pose: 'donramon_idle' },
    { speaker: 'JUEZ', text: 'Then, counselor, this court needs to know how a toxin enters a sealed bottle.', pose: 'judge_thinking' },
    { speaker: 'CHAPULIN', text: 'Oh, Monchito! And now, who can defend us?', pose: 'chapulin_panic' },
    { speaker: 'DEFENSA', text: 'We can, Chapulín. Your Honor: it has been answered since yesterday. The trouble is the answer came inside a cork.', pose: 'donramon_point', bgm: 'pursuit' }
  ],
  presentTarget: ['botella_vino'],
  stages: [
    {
      presentTarget: ['botella_vino'],
      prompt: 'What does the V58-17 cork show that no corkscrew could make?',
      pointTarget: CIERRE_EN,
      successDialogue: STAGE1_EN
    },
    {
      presentTarget: ['sello_lacre'],
      prompt: 'Which piece of evidence explains the fragment left inside the channel?',
      pointTarget: ANILLO_EN,
      successDialogue: STAGE2_EN
    }
  ],
  verdict: VERDICT_EN,
  epilogue: { bg: WAITING_ROOM_BG, dialogue: CASE4_EPILOGUE_EN }
};
