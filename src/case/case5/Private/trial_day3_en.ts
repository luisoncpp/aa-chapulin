// @Architecture(descriptionShort="Case 5 day-3 EN intro, opening present, testimony exports", type="data", icon="layers")
/**
 * Case 5 Trial Day 3 — Opening (§15.1), openingPresent on effects, testimonies T6/T7/T8, English.
 */

import type { DialogueLine, OpeningPresent } from '../../../types/index.js';
import { CASE5_DAY3_INTRO_EN } from './trial_openings.js';
import { CASE5_DAY3_OPENING_PRESENT_SUCCESS_EN } from './trial_day3_success_en.js';
import { CASE5_TESTIMONY_6_EN } from './trial_day3_t1_en.js';
import { CASE5_TESTIMONY_7_EN } from './trial_day3_t2_en.js';
import { CASE5_TESTIMONY_8_EN } from './trial_day3_t3_en.js';

export { CASE5_TESTIMONY_6_EN, CASE5_TESTIMONY_7_EN, CASE5_TESTIMONY_8_EN };

export const CASE5_DAY3_INTRO_FULL_EN: DialogueLine[] = [
  ...CASE5_DAY3_INTRO_EN,
  { speaker: 'NARRADOR', text: 'December 8, 4:00 PM. Third hearing.', bgm: 'trial' },
  { speaker: 'JUEZ', pose: 'judge_gavel', text: 'Court is resumed. This court received the record of this morning\'s judicial inspection.', sfx: 'gavel' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'It shows the deposit holds furniture and three thousand two hundred volumes distributed among its crates; in crate nine were inventoried two hundred ten luxury copies, a card file of eleven thousand four hundred seven cards, and a typewriter.' },
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'It also shows all of it has been inventoried since 1971 and none of it is stolen.' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Your Honor, the prosecution requests this line of investigation be closed and the court rule on the defendant.' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'The prosecution requests that every day and this court denies it every day. Sit down.' },
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'First things first: yesterday this court heard that man requested this proceeding for his appeal. What nobody has explained yet is what he came to point to in it.' },
  { speaker: 'JUEZ', pose: 'judge_gavel', text: 'Defense: what did the victim come to do?', sfx: 'gavel' }
];

export const CASE5_DAY3_OPENING_PRESENT_EN: OpeningPresent = {
  evidence: ['efectos_casimiro'],
  prompt: 'What was the victim going to point to at that proceeding?',
  successDialogue: CASE5_DAY3_OPENING_PRESENT_SUCCESS_EN
};
