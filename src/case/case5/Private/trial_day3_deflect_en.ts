// @Architecture(descriptionShort="Case 5 day-3 T6 premature-present deflections, English", type="data", icon="layers")
/**
 * Case 5 Trial Day 3 — Testimony 6 deflections (spec §15.2), English.
 */

import type { DialogueLine } from '../../../types/index.js';

/** Statement 2: the photograph says when it was opened, not what is kept inside. */
export const CASE5_D3_T1_HUACAL_DEFLECT_EN: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'Defense: that photograph proves the day someone opened the crate. The witness is testifying about what he does on Thursdays.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Until this court knows what is kept inside, a loose date contradicts no one. Establish the contents first.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: '(First what is in there. Then who opened it.)', pose: 'chapulin_idle' }
];

/** Statement 3: the machine says what is there today; the witness speaks of what he has seen. */
export const CASE5_D3_T1_MAQUINA_DEFLECT_EN: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'Defense: that typewriter was recovered yesterday, in the inspection this court ordered. It says what is in the crate today.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'The witness speaks of what he has seen since September. To contradict him, bring me what the court wrote when it sealed that deposit.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: '(What the court wrote... when it sealed it. In nineteen seventy-one.)', pose: 'chapulin_idle' }
];

/** Statement 3 of T7: the lid proves presence, not knowledge of the notice. */
export const CASE5_D3_T2_HUACAL_DEFLECT_EN: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'Defense: that lid does prove the syndic was there and signed an opening on Saturday the fourth.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'But being in the deposit does not yet prove he knew about this diligence or that the prosecution notified him. Bring me the order that carries that notice.', pose: 'judge_neutral' }
];

/** Statements 5 and 6 of T8: the order proves sending, not receipt. */
export const CASE5_D3_T3_OFICIO_DEFLECT_EN: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'Defense: that order proves the prosecution sent notice to the receivership, but not that Counselor Berrondo received it.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'That is not yet a contradiction. To refute his claim that nobody told him, you must prove the notice reached his hands.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: '(The order proves it was sent. We still need to prove it arrived.)', pose: 'chapulin_idle' }
];
