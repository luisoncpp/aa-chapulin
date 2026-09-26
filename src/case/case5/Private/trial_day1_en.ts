// @Architecture(descriptionShort="Case 5 day-1 courtroom intro and opening present (EN)", type="data", icon="layers")
/**
 * Case 5 Trial Day 1 — Opening (§11.1), `openingPresent`, and testimony exports, English.
 */

import type { DialogueLine, OpeningPresent } from '../../../types/index.js';
import { CASE5_TRIAL_INTRO_EN } from './trial_openings.js';
import { CASE5_D1_OPENING_BADGE_SUCCESS_EN } from './trial_day1_success_en.js';
import { CASE5_TESTIMONY_1_EN } from './trial_day1_t1_en.js';
import { CASE5_TESTIMONY_2_EN } from './trial_day1_t2_en.js';
import { CASE5_TESTIMONY_3_EN } from './trial_day1_t3_en.js';

export { CASE5_TESTIMONY_1_EN, CASE5_TESTIMONY_2_EN, CASE5_TESTIMONY_3_EN };

export const CASE5_TRIAL_INTRO_FULL_EN: DialogueLine[] = [
  ...CASE5_TRIAL_INTRO_EN,
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Defendant: Ramon Valdes, law degree from...' },
  { speaker: 'DON RAMÓN', pose: 'donramon_idle', text: 'The street, Your Honor.' },
  { speaker: 'JUEZ', pose: 'judge_thinking', text: '...the street. Yes.' },
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Counselor Valdes, this is the fifth time this court has seen you. And the first time it has seen you sitting there.' },
  { speaker: 'DON RAMÓN', pose: 'donramon_sweat', text: 'Feels strange to me too, Your Honor. Everything looks smaller.' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Your Honor, the prosecution will be brief, because this case already cost me a night.' },
  { speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'A sealed building. A book with fourteen signatures. A dead man. And in the dead man\'s hand, the address of the last man who went up.', sfx: 'desk_slam' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Motive? The victim was going to testify Saturday that this gentleman\'s four victories between August and October were not talent. They were bought information.' },
  { speaker: 'DON RAMÓN', pose: 'donramon_idle', text: '...Bought with what, prosecutor? I have not paid rent in seventeen months.' },
  { speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'AH! BUT HE PAID IT! NOVEMBER TWENTY-NINTH! SEVENTEEN MONTHS! IN CASH!', sfx: 'desk_slam' },
  { bg: 'assets/bg_gallery_characters.webp', furniture: 'none', speaker: 'NARRADOR', text: 'The gallery erupts.', sfx: 'gavel' },
  { speaker: 'JUEZ', pose: 'judge_gavel', text: 'ORDER!', sfx: 'gavel' },
  { speaker: 'JUEZ', pose: 'judge_shock', text: 'First things first: this court does not recognize anyone at the defense table.' },
  { speaker: 'DEFENSA', pose: 'chapulin_slam', text: 'Right here, Your Honor!', sfx: 'desk_slam' },
  { speaker: 'JUEZ', pose: 'judge_shock', text: '...And who are you?' },
  { speaker: 'DEFENSA', pose: 'chapulin_point', text: 'I am El Chapulin Colorado!' },
  { speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'OBJECTION! Your Honor, that man was my DEFENDANT in August!', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', pose: 'chapulin_point', text: 'And they acquitted me! Which is more than your record can say!' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'The court still needs whoever occupies that table to establish their credentials.' },
  { speaker: 'DON RAMÓN', pose: 'donramon_idle', text: 'Kid. The badge.' }
];

export const CASE5_DAY1_OPENING_PRESENT_EN: OpeningPresent = {
  evidence: ['insignia_abogado'],
  prompt: 'What establishes the defense before this court?',
  successDialogue: CASE5_D1_OPENING_BADGE_SUCCESS_EN
};
