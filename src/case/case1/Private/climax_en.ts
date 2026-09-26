// @Architecture(descriptionShort="English Case 1 climax final stage, verdict and epilogue", type="data", icon="layers")
/**
 * Case 1 — Climax stage 4 (§13.4), verdict (§13.5) and epilogue (§14).
 * The EN plate is its own asset because the six lines are legible text in the
 * image (spec §21).
 */

import type { ClimaxDefinition, DialogueLine } from '../../../types/index.js';
import { CASE1_CLIMAX_STAGES_EN } from './climax_stages_en.js';
import { CASE1_EPILOGUE_EN } from './epilogue_en.js';

const PLATE = 'assets/examine_ficha_museo_en.webp';

const STAGE_4_FAIL_EN: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Counselor, that exhibit does not explain where the four facts came from.', sfx: 'damage' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'The court wants the object those facts are written on. Look for it in the Record.' }
];

const STAGE_4_SUCCESS_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'From the glovebox of the truck in the yard, Your Honor.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'A card. Typed. Six lines.', pose: 'donramon_point' },
  { speaker: 'TRIPASECA', text: 'NO!', pose: 'tripaseca_panic' },
  { speaker: 'JUEZ', text: 'Read it in full, counselor. Line by line.', sfx: 'gavel', bgm: 'suspense', pose: 'judge_gavel' },
  { bg: PLATE, furniture: 'none', speaker: 'DEFENSA', text: 'A typewritten card the size of a library index card.' },
  { bg: PLATE, furniture: 'none', speaker: 'DEFENSA', text: '"One. Loading door latch: broken since March. Push it."' },
  { bg: PLATE, furniture: 'none', speaker: 'DEFENSA', text: '"Two. Gallery 2 grate: 18 × 24. Mesh loose at the lower corner. Opens onto the yard."' },
  { bg: PLATE, furniture: 'none', speaker: 'DEFENSA', text: '"Three. Watchman: 20:45 the forward hold. 21:00 the after hold. Copied from his notebook; hangs from a nail in the booth."' },
  { bg: PLATE, furniture: 'none', speaker: 'DEFENSA', text: '"Four. Chiquitolina pills: pharmacy on Insurgentes, the back counter."' },
  { bg: PLATE, furniture: 'none', speaker: 'DEFENSA', text: '"Five. Camera roll: changed on Mondays. On Tuesday one frame is left."' },
  { bg: PLATE, furniture: 'none', speaker: 'DEFENSA', text: '"Six. Closing service included. 5 min."' },
  { bg: PLATE, furniture: 'none', speaker: 'DEFENSA', text: 'On the reverse, a printed letterhead: "Enciclopedias El Saber Universal, S. A."' },
  { bg: PLATE, furniture: 'none', speaker: 'DEFENSA', text: 'The typewriter that produced it has a flaw: every s falls half a line below the baseline.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', text: '...Repeat line three.', pose: 'judge_shock' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', text: '"Twenty forty-five: the forward hold. Twenty-one hundred: the after hold."', pose: 'donramon_point' },
  { bg: 'assets/bg_witness.webp', speaker: 'ALMA NEGRA', text: 'By a thousand devils! Those are MY words!', pose: 'almanegra_shock' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', text: 'Word for word, Don Alma Negra. Including "the forward hold" and "the after hold".', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Your Honor: there is not one person in this city who calls gallery one of a museum "the forward hold". Only he does.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: "Whoever wrote this card held this man's notebook in his hands, calmly, and copied it.", pose: 'donramon_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso' },
  { speaker: 'JUEZ', text: 'Now lines one, two and five.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'The latch broken since March. The eighteen by twenty-four grate. The roll changed on Mondays.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'Those three, plus this round, are exactly the four facts the defense dug out over two days!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'All four, Your Honor. Not one more.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'This trial spent two days discovering, one by one, the four facts somebody already had written on a twenty-cent card.', pose: 'donramon_idle' },
  { speaker: 'NARRADOR', text: 'It takes half a minute for the uproar in the gallery to die down.', bg: 'assets/bg_gallery_characters.webp', furniture: 'none', sfx: 'realization', bgm: 'pursuit' },
  { speaker: 'JUEZ', text: 'Counselor... line four names a pharmacy.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'That one this defense did not prove, Your Honor. The card says it. If somebody sold those pills, let the public prosecutor look into it.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Mr. Tripaseca. This court asks you one last time. Who wrote that card?', pose: 'judge_neutral' },
  { speaker: 'TRIPASECA', text: '......', pose: 'tripaseca_sweat' },
  { speaker: 'DEFENSA', text: 'Mr. Tripaseca, I do not like you, but I will tell you one thing, trader to neighbour.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'You did not study that museum. You have never studied anything in your life.', pose: 'donramon_point' },
  { speaker: 'TRIPASECA', text: 'OF COURSE I DID NOT!', pose: 'tripaseca_panic' },
  { speaker: 'NARRADOR', text: 'The witness tears off his hat and bites it.', sfx: 'desk_slam' },
  { speaker: 'TRIPASECA', text: 'I studied nothing! Who studies?! YOU BUY IT!', pose: 'tripaseca_breakdown' },
  { speaker: 'TRIPASECA', text: 'You pay and they hand you the little paper! The measurements, the schedules, everything! That is how the work is done now!', pose: 'tripaseca_breakdown' },
  { speaker: 'JUEZ', text: 'WHOM did you pay?', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'TRIPASECA', text: 'The Thirteenth Volume!', pose: 'tripaseca_breakdown' },
  { speaker: 'NARRADOR', text: 'Absolute silence in the room.', bg: 'assets/bg_gallery_characters.webp', furniture: 'none', bgm: 'suspense' },
  { speaker: 'JUEZ', text: '...The what?', pose: 'judge_thinking' },
  { speaker: 'TRIPASECA', text: 'The Thirteenth Volume.', pose: 'tripaseca_breakdown' },
  { speaker: 'JUEZ', text: 'And what is that? A person? A place?', pose: 'judge_shock' },
  { speaker: 'TRIPASECA', text: '...I just leave the money and pick up the paper. I have never seen anybody.', pose: 'tripaseca_breakdown' },
  { speaker: 'DEFENSA', text: 'Your Honor, the defense requests an investigation into...', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'OBJECTION!', sfx: 'desk_slam', cutin: 'objection_un_momento', pose: 'supersam_slam' },
  { speaker: 'SUPER SAM', text: 'Your Honor, the defendant in this trial is the gentleman in red! Who sold a card to a crook is irrelevant to the verdict!', pose: 'supersam_point' },
  { speaker: 'JUEZ', text: '...The court sustains the objection.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'Your Honor!', pose: 'donramon_shock' },
  { speaker: 'JUEZ', text: 'Counselor, the prosecutor is right, and that bothers me more than it bothers you.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'This court rules on the defendant before it. The card remains on file as evidence of an unidentified third party.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: '(An unidentified third party. And there it will stay.)', pose: 'donramon_idle' },
  { speaker: 'CHAPULIN', text: '(Don Ramón... I did not like that name at all.)', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '(Nor did I, young man. But today we are here to win, not to understand.)', pose: 'donramon_sweat' }
];

const CASE1_VERDICT_EN: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'This court has everything it needs.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'The witness El Tripaseca is detained in this room for aggravated theft and grievous bodily harm. Let the authorities take him.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'TRIPASECA', text: 'I buy cheap...! I buy cheap and sell whatever will sell...!', pose: 'tripaseca_breakdown' },
  { speaker: 'JUEZ', text: 'The public prosecutor is put on notice regarding the pharmacy named in line four, and regarding the origin of the canvas bag.', pose: 'judge_neutral' },
  { speaker: 'SUPER SAM', text: '...The prosecution takes note.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'As to the defendant.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'He came in through an open door, empty-handed, to help a man he did not know, and he was arrested for arriving late.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'This court delivers its verdict.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'NOT GUILTY!', cutin: 'objection_inocente', sfx: 'gavel', bgm: 'victory', pose: 'judge_gavel' },
  { speaker: 'NARRADOR', text: '', instant: true, confetti: true },
  { speaker: 'CHAPULIN', text: '¡SÍGANME LOS BUENOS!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: '¡Con permisito, dijo Monchito!', pose: 'donramon_point' },
  { speaker: 'FLORINDA', text: '...Thank you, counselor. Thank you.', pose: 'florinda_crying' },
  { speaker: 'ALMA NEGRA', text: 'By a thousand devils, this ship made port!', pose: 'almanegra_shock' }
];

export const CASE1_CLIMAX_EN: ClimaxDefinition = {
  dialogue: [
    { speaker: 'JUEZ', text: 'This court will hear the closing argument of the defense.', bgm: 'suspense', pose: 'judge_gavel', sfx: 'gavel' }
  ],
  presentTarget: ['ficha_museo'],
  stages: [
    ...CASE1_CLIMAX_STAGES_EN,
    {
      presentTarget: ['ficha_museo'],
      prompt: 'Where did everything the thief knew in advance come from?',
      failDialogue: STAGE_4_FAIL_EN,
      successDialogue: STAGE_4_SUCCESS_EN
    }
  ],
  verdict: CASE1_VERDICT_EN,
  epilogue: CASE1_EPILOGUE_EN
};
