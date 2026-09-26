// @Architecture(descriptionShort="Case 5 day-3 courtroom gloss of the word receiver", type="data", icon="layers")
/**
 * Case 5 Trial Day 3 — the court pauses inside T7 press 3 to define "receiver"
 * before the player is asked to present. English twin of the Spanish "palabra
 * difícil" gag; the cut syllable lands on receivership, not on a literal
 * translation of «sindicatura».
 */

import type { DialogueLine } from '../../../types/index.js';

/** Press aside: the bench explains who administers a bankrupt company's goods. */
export const SINDICO_LESSON_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'Your Honor, an ignorant question, while we are here.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'That basement holds crates from a company that went bankrupt eleven years ago. If the company no longer exists, whose crates are those?', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'They belong to the estate, defense. And a receiver administers them.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: 'A recei... what?', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: '...ver.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'Good grief!', pose: 'chapulin_panic' },
  { speaker: 'JUEZ', text: 'The court notes the term is not common knowledge. It will be explained for the record.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'When a business fails, its things are not left ownerless: they pass into a bundle the law calls the estate.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'A lawyer appointed by a court keeps it, distributes it, and answers for it until the proceeding ends. That lawyer is called the receiver.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: 'Oh! So he is not the owner, he is the one who looks after what has no owner!', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'The term is explained. Continue, defense.', sfx: 'gavel', pose: 'judge_gavel' }
];
