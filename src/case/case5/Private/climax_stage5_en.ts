// @Architecture(descriptionShort="English Case 5 climax stage 5 — typewriter", type="data", icon="layers")
/**
 * Case 5 climax EN — Stage 5 THE DECISIVE COMPARISON (spec §18.6).
 */

import type { ClimaxStage } from '../../../types/index.js';
import { CASE5_CLIMAX_BREAKDOWN_EN } from './climax_breakdown_en.js';

const PLATE_CUATRO_RENGLONES = 'assets/plate_cuatro_renglones.webp';

const CASE5_CLIMAX_STAGE5_SUCCESS_EN: ClimaxStage['successDialogue'] = [
  { speaker: 'DEFENSA', text: 'TAKE THAT!', sfx: 'desk_slam', cutin: 'objection_toma_eso', pose: 'chapulin_slam', bgm: 'pursuit' },
  { speaker: 'DEFENSA', text: 'The typewriter, Your Honor! Line forty-one of the nineteen seventy-one inventory!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'An Olivetti Lexikon 80 that is in the back of that crate today, eleven years after inventory, whose more than two hundred fifty seal strips bear one signature only: yours!', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'SECRETARIO', text: 'The document exam report is in the file, Your Honor, and says it could not be compared against the machine!' },
  { speaker: 'DEFENSA', text: 'Because it takes a court order to use a deposit good!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'And I have spent four days waiting to ask for one!', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Granted.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'BERRONDO', text: 'YOUR HONOR!', pose: 'berrondo_panic' },
  { speaker: 'BERRONDO', text: 'That machine is estate property! Using it alters the deposit!', pose: 'berrondo_panic' },
  { speaker: 'JUEZ', text: 'It does, counselor. And the court answers for that.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Bailiff: the typewriter, to this courtroom. On its cart.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'NARRADOR', text: 'Eleven minutes. Nobody in the gallery moves.', bgm: 'suspense' },
  { speaker: 'NARRADOR', text: 'The bailiff enters pushing a metal cart with a black typewriter, number 41 stenciled on the side.', sfx: 'whoosh' },
  { speaker: 'NARRADOR', text: 'He sets it on the clerk\'s table. The whole room can hear paper feed into the roller.', sfx: 'click' },
  { speaker: 'JUEZ', text: 'Mr. Clerk. Type, at dictation, the text of the fragment found in the victim\'s hand, keeping its four lines.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: '"...city of Calle del Espanto 8, apt. 4."', pose: 'chapulin_idle' },
  { speaker: 'NARRADOR', text: 'The clerk types the fragment in a room where nothing is heard but the keys.', sfx: 'text' },
  { speaker: 'NARRADOR', text: 'The clerk pulls the sheet from the roller and holds it up.', sfx: 'realization' },
  { speaker: 'SECRETARIO', text: '...Your Honor.' },
  { speaker: 'SECRETARIO', text: 'Every s is half a line below the baseline.' },
  { speaker: 'NARRADOR', text: 'The whole gallery rises.', sfx: 'realization', bgm: 'objection' },
  { speaker: 'JUEZ', text: 'ORDER! ORDER IN THE COURT!', sfx: 'gavel', pose: 'judge_gavel' },
  { bg: PLATE_CUATRO_RENGLONES, furniture: 'none', speaker: 'NARRADOR', text: 'July twelfth. Business card seized from Casimiro Lengua. The s, half a line down.' },
  { bg: PLATE_CUATRO_RENGLONES, furniture: 'none', speaker: 'NARRADOR', text: 'August twenty-first. Six-line card found in a museum loading yard. The s, half a line down.' },
  { bg: PLATE_CUATRO_RENGLONES, furniture: 'none', speaker: 'NARRADOR', text: 'November twenty-ninth. Note that came with seventeen months of rent in a yellow envelope. The s, half a line down.' },
  { bg: PLATE_CUATRO_RENGLONES, furniture: 'none', speaker: 'NARRADOR', text: 'Today, in this room. A sample just typed. The s, half a line down.' },
  { speaker: 'DEFENSA', text: 'Four papers, Your Honor. One machine.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'The comparison identifies the machine behind the papers; it does not by itself identify who used it, much less the killer.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'But the affidavit proves Berrondo knew the diligence; the voucher shows which drawer he opened; the two strips show two openings on the day of the crime, though only one was logged.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'The luxury volume left that crate and appeared where the weapon was missing; the mutilated card links the file to the fragment placed in Casimiro\'s hand. It is the combination of those trails with Berrondo\'s access and his own words about the shelf that supports the charge.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'And opening that crate has left eleven years of strips signed by one hand only: his. Taking the typewriter without an order would have been disposing of another\'s property.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'He told me so in his office Tuesday, over coffee with me.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: '"I have twenty-seven years of practice without a single mark on my record."', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Attorney Berrondo: you killed a man.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'And you did not take the machine because it was not yours.', pose: 'chapulin_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso' },
  ...CASE5_CLIMAX_BREAKDOWN_EN
];

export const CASE5_CLIMAX_STAGE5_EN: ClimaxStage = {
  presentTarget: ['maquina_escribir'],
  requiredUpdateStage: { maquina_escribir: 2 },
  prompt: 'What does this court still need to compare?',
  failDialogue: [
    { speaker: 'JUEZ', text: 'That is already in the file and we already argued it, counselor.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'This court asked you to close the origin of the documents and link it to acts already proved.', pose: 'judge_neutral' },
    { speaker: 'SECRETARIO', text: 'Your Honor, the defense has very little credit left.', sfx: 'damage' },
    { speaker: 'DON RAMÓN', text: '(Young man, Mr. Lengua wrote it in a notebook and wrote it to you.)', pose: 'donramon_idle' }
  ],
  successDialogue: CASE5_CLIMAX_STAGE5_SUCCESS_EN
};
