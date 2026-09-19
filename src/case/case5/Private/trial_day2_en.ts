// @Architecture(descriptionShort="Case 5 day-2 courtroom intro, opening present, testimony exports (English)", type="data", icon="layers")
/**
 * Case 5 Trial Day 2 — Opening (§13.1), person `openingPresent`, testimonies T4/T5, English.
 */

import type { DialogueLine, OpeningPresent } from '../../../types/index.js';
import { CASE5_DAY2_INTRO_EN } from './trial_openings.js';
import { CASE5_DAY2_OPENING_PRESENT_SUCCESS_EN } from './trial_day2_success_en.js';
import { CASE5_TESTIMONY_4_EN } from './trial_day2_t1_en.js';
import { CASE5_TESTIMONY_5_EN } from './trial_day2_t2_en.js';

export { CASE5_TESTIMONY_4_EN, CASE5_TESTIMONY_5_EN };

export const CASE5_DAY2_INTRO_FULL_EN: DialogueLine[] = [
  ...CASE5_DAY2_INTRO_EN,
  { speaker: 'JUEZ', pose: 'judge_gavel', text: 'Court is back in session. This court wants to know what the second ledger and that rent receipt really prove. Prosecution: the ledger this court ordered.', sfx: 'gavel' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Here it is, Your Honor. And I warn you it is of absolutely no significance.' },
  { speaker: 'NARRADOR', text: 'The bailiff sets on the table a ledger bound in black rubber, much thinner than the other.' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Read it, Mr. Clerk. Page for December fourth.' },
  { speaker: 'SECRETARIO', text: 'Four entries, Your Honor.' },
  { speaker: 'SECRETARIO', text: 'One. Hermenegildo Rosas, valuation expert. Entry nine ten, badge returned nine forty.' },
  { speaker: 'SECRETARIO', text: 'Two. Counselor Fulgencio Berrondo, trustee in bankruptcy 114 diagonal 1971. Entry sixteen oh five, badge returned sixteen fifty.' },
  { speaker: 'SECRETARIO', text: 'Three. Counselor Hilario Balbuena, court clerk. Entry seventeen forty-four, badge returned eighteen oh five.' },
  { speaker: 'SECRETARIO', text: 'Four. Sergeant Refugio Pazguato, judicial police. Entry seventeen fifty-two, badge returned twenty-two fifteen.' },
  { speaker: 'NARRADOR', text: 'Absolute silence in the courtroom.', bgm: 'suspense' },
  { speaker: 'DEFENSA', text: '(...The second name is the man who gave me coffee this morning.)', pose: 'chapulin_panic' },
  { speaker: 'SUPER SAM', text: 'Your Honor, before the gallery starts inventing things!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'SUPER SAM', text: 'Counselor Berrondo is an officer of the court and was doing his job! I myself invited him to assist on Monday morning, when he informed me of his status as the victim\'s trustee!', pose: 'supersam_point' },
  { speaker: 'BERRONDO', text: 'That is exact, Your Honor. I told the prosecutor Monday morning, before the first hearing.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'I considered that hiding it would have been unworthy and that declaring it would be useful. Both seemed obvious to me.', pose: 'berrondo_idle' },
  { speaker: 'JUEZ', text: 'Does the defense have anything to say?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: '...The defense has a great deal to say and still has nothing to say it with, Your Honor.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Then the court will stop you, counselor, for your own good.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Counselor Berrondo appears as prosecution co-counsel. This court will not take testimony from a lawyer because the defense is uncomfortable.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: '(And there the door closed.)', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '(The young woman at the window keeps that ledger. I am noting her in the Record, even if she is no use today.)', pose: 'chapulin_idle', addEvidence: 'libro_peritos', addProfile: 'perfil_genoveva' },
  { speaker: 'JUEZ', text: 'And before we hear today\'s witness, this court wants one thing on the record, because we have spent two days talking about a man as if he were furniture.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Defense: tell this court who the victim was and what he was doing in that Archive.', sfx: 'gavel', pose: 'judge_gavel' }
];

export const CASE5_DAY2_OPENING_PRESENT_EN: OpeningPresent = {
  profileTarget: ['perfil_casimiro'],
  prompt: 'Who was the man who died in hallway 7?',
  successDialogue: CASE5_DAY2_OPENING_PRESENT_SUCCESS_EN
};
