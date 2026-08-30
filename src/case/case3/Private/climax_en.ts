// @Architecture(descriptionShort="English Case 3 climax, breakdown, verdict, and epilogue", type="data", icon="layers")
/**
 * Case 3 Final Climax, Verdict, and Waiting-Room Epilogue (English).
 */

import type { ClimaxDefinition, DialogueLine } from '../../../types/index.js';
import { CASE3_CLIMAX_CHOICES_EN } from './climax_choices_en.js';
import { assembleCase3Climax } from './climax_shared.js';

const WAITING_ROOM = 'assets/bg_waiting_room.jpg';

const STAGE1: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'Professor Jirafales\'s script! The lost-child notice aired ONLY ONCE all night: at 9:40 PM!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'JIRAFALES', text: '¡¡¡TA-TA-TA-TA-TAAAAAA!!! Nine-forty — not a second earlier or later!', pose: 'jirafales_angry' },
  { speaker: 'JUEZ', text: 'Then the scream was recorded at 9:40 PM. An hour and five minutes BEFORE the assault!', pose: 'judge_shock' }
];

const STAGE2: DialogueLine[] = [
  { speaker: 'SUPER SAM', text: 'And at 9:40 the defendant was locked in a booth! Case closed!', pose: 'supersam_point' },
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'Exactly, Mr. Prosecutor! And here\'s what he recorded!', sfx: 'whoosh', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: '"La Salud es Primero," Cabina B, 9:30 to 9:50 PM per the log! Listen to minute ten!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'NARRADOR', text: '(From the speaker: the doctor recommending chamomile tea... and underneath, distant, "...se ha perdido un niño de cachetes muy grandes...")', sfx: 'realization' },
  { speaker: 'JUEZ', text: 'The same notice! On the defendant\'s tape!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'At 9:40 sharp my client was talking chamomile in Cabina B — and it was recorded. He couldn\'t be in two booths at once.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'The log says it: at 9:40 Cabina C was still empty. La Chimoltrufia does not start the horoscopes until ten. Only one other booth was occupied at that hour! Cabina A!', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: '...And in Cabina A, 9:30 to 10:00 per the log, they were recording...', pose: 'supersam_sweat' },
  { speaker: 'CHAPULIN', text: 'The Thursday sketch!', pose: 'chapulin_point' }
];

const STAGE3: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '"El Casero Cascarrabias"! XEVC\'s weekly sketch, where an actor IMITATES Señor Barriga\'s voice — for four years!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'JUEZ', text: 'I hear it every Thursday! It\'s terrible and I love it!', pose: 'judge_shock' },
  { speaker: 'ANICETO', text: 'That character is a guest actor! A kid from Guadalajara! He\'s already gone!', pose: 'aniceto_panic' },
  { speaker: 'DEFENSA', text: 'Strange. XEVC\'s program sheet lists no guest actor in four years. It lists one announcer... the same one who does news, schedules, ads, and the sketch.', pose: 'donramon_point' },
  { speaker: 'BARRIGA', text: 'I paid him double to do it, because he said he was embarrassed!', pose: 'barriga_enojado' }
];

const STAGE4: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'And here\'s the why! Monte de Piedad ticket! A bronze microphone pawned in June... redeemed September 3 with TWELVE THOUSAND PESOS CASH!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'And the Green Book rubbing says: "Missing forty thousand. The withdrawals were signed by THE TREASURER"!', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'And who is treasurer of the Kermés Fund?!', pose: 'judge_shock' },
  { speaker: 'BARRIGA', text: '...Aniceto. Aniceto Rebollar. For twenty-five years.', pose: 'barriga_vendado' },
  { speaker: 'DEFENSA', text: 'Twenty-eight thousand went to pay the station transmitter debt! And twelve thousand to redeem THIS!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'NARRADOR', text: '(Don Ramón lifts the Golden Microphone. The plaque gleams: "A Aniceto Rebollar, 25 años de La Voz de Oro".)' },
  { speaker: 'DEFENSA', text: 'The murder weapon is your own trophy, Mr. Rebollar! Redeemed with kermés money, grabbed from the pedestal when the only man who knew said he\'d announce it on air!', pose: 'donramon_point' },
  { speaker: 'ANICETO', text: 'Y-you can\'t prove that voice is mine! It\'s a tape! A tape has no face!', sfx: 'damage', pose: 'aniceto_panic' },
  { speaker: 'SUPER SAM', text: 'He\'s right... Without the voice, this is all paperwork. Time is money and this is... paperwork.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'The prosecutor is right, incredible as that sounds. Counselor, can you prove that voice belongs to the witness?', pose: 'judge_thinking' }
];

const EPILOGUE: DialogueLine[] = [
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'NARRADOR', text: 'One hour later. Courthouse waiting room. Outside, the neighborhood still can\'t believe it.' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'BARRIGA', text: 'Ñoño. Come here, son. A year? A whole year with a bad heart and you tell me nothing?', pose: 'barriga_vendado' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'NONO', text: 'I didn\'t want you to worry, Daddy!', pose: 'nono_llorando' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'BARRIGA', text: 'I worry more finding out in a courtroom, boy!', pose: 'barriga_vendado', sfx: 'realization' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPATIN', text: 'And you — my clinic Monday at nine. No excuses.', pose: 'chapatin_enojado' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'NONO', text: 'How much do I owe you, Doctor?', pose: 'nono_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPATIN', text: 'Nothing. Already paid with three days in jail and a lawyer in a denim hat.', pose: 'chapatin_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'SARGENTO', text: '¡Mi Licenciado! The prosecutor docked my paycheck again! Says it was for "olfactory insubordination" over the trash!', pose: 'pazguato_decidido' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'BARRIGA', text: 'Sergeant, the station needs a night watchman. An honest one. Interested?', pose: 'barriga_vendado' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'SARGENTO', text: '¡A sus órdenes! And do you pay... with money?', pose: 'pazguato_saludo' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'BARRIGA', text: 'With money, Sergeant. And speaking of money, Licenciado Monchito...', pose: 'barriga_vendado' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', text: 'Me?! I just saved the life of the man who was going to...!', pose: 'donramon_panic' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'BARRIGA', text: 'Fifteen months of rent, Don Ramón. FIFTEEN.', pose: 'barriga_enojado', sfx: 'desk_slam' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', text: '...What if I deduct it from my fees?', pose: 'donramon_sweat' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'BARRIGA', text: 'What fees? The doctor didn\'t pay you!', pose: 'barriga_vendado' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', text: '¡CHANFLE!', pose: 'donramon_panic' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'NARRADOR', text: '(From the hallway speaker, the station opens again. A young, shaky voice clears its throat.)' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'NONO', text: '"Muy buenas noches tengan todos ustedes... Aquí XEVC, La Voz de la Vecindad..."' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', text: 'You know what, Monchito? El que a hierro mata... acaba con la casa llena de fierros.', pose: 'chapulin_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'DEFENSA', text: '...That\'s not how the saying goes, Chapulín.', pose: 'donramon_idle' },
  { bg: WAITING_ROOM, furniture: 'none', speaker: 'CHAPULIN', text: 'I know! But if I say it right, next time we catch nobody! ¡Síganme los buenos!', pose: 'chapulin_point' }
];

const VERDICT_LINES = CASE3_CLIMAX_CHOICES_EN[1].successDialogue;

export const CASE3_CLIMAX_EN: ClimaxDefinition = assembleCase3Climax({
  dialogue: [
    { speaker: 'JUEZ', text: 'Licenciado Monchito, this court no longer debates whether your client is innocent. It debates who is guilty. And for that we need four things: when it was recorded, where, who could record it, and why.', bgm: 'suspense', pose: 'judge_thinking' },
    { speaker: 'DEFENSA', text: '(Four nails, Monchito. One by one, and miss none.)', pose: 'donramon_idle' },
    { speaker: 'CHAPULIN', text: '¡Ánimo, Monchito! ¡Que no panda el cúnico!', pose: 'chapulin_point' }
  ],
  stage1: STAGE1,
  stage2: STAGE2,
  stage3: STAGE3,
  stage4: STAGE4,
  choices: CASE3_CLIMAX_CHOICES_EN,
  verdict: VERDICT_LINES,
  epilogue: EPILOGUE
});
