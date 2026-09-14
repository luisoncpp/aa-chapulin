// @Architecture(descriptionShort="English Case 1 witness call blocks", type="data", icon="layers")
/**
 * Witness calls (spec §7). Each block ends on a JUDGE line ordering testimony
 * and is queued as the tail of the `successDialogue` that precedes it.
 */

import type { DialogueLine } from '../../../types/index.js';

export const CASE1_CALL_TRIPASECA_D1_EN: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'The witness may step down. Prosecution, call your next witness.', pose: 'judge_neutral', bgm: 'trial' },
  { speaker: 'SUPER SAM', text: 'With pleasure, Your Honor! The prosecution calls the one man who saw it all with his own eyes: the gentleman known as El Tripaseca.', pose: 'supersam_point' },
  { speaker: 'JUEZ', text: 'Witness, state your name and occupation.', pose: 'judge_neutral' },
  { speaker: 'TRIPASECA', text: 'A trader, Your Honor. An honest trader: I buy cheap and sell whatever will sell.', pose: 'tripaseca_smug' },
  { speaker: 'JUEZ', text: 'The court also asked for your name.', pose: 'judge_thinking' },
  { speaker: 'TRIPASECA', text: 'I thought it might. El Tripaseca, at your service. It is a nickname, mind you. I do not choose what people call me.', pose: 'tripaseca_smug', addProfile: 'perfil_tripaseca' },
  { speaker: 'JUEZ', text: 'You are under oath. Your testimony, please.', sfx: 'gavel', pose: 'judge_gavel' }
];

export const CASE1_CALL_ALMA_NEGRA_EN: DialogueLine[] = [
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', text: 'Alma Negra, Your Honor. The night watchman. The victim.', pose: 'donramon_point' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', text: 'Objection! That man was in a coma thirty-six hours ago!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', text: 'And last night he woke up, counselor. The doctor signed him out to testify this morning.', pose: 'donramon_idle' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', text: 'The court admits the witness. Bring him in.', sfx: 'gavel', pose: 'judge_gavel' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'NARRADOR', text: 'A wheelchair is pushed in by the bailiff. In it, an enormous man, head bandaged, one eye patched.', sfx: 'whoosh' },
  { bg: 'assets/bg_witness.webp', speaker: 'ALMA NEGRA', text: 'By a thousand devils! This ship rides high!', pose: 'almanegra_shock' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', text: 'Witness, state your name and occupation.', pose: 'judge_neutral' },
  { bg: 'assets/bg_witness.webp', speaker: 'ALMA NEGRA', text: 'Alma Negra. Night watchman of the Museum of Curiosities. Formerly a sailor. Long before that, a pirate, but the statute has run on that.', pose: 'almanegra_vendado' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', text: '...The court would rather not dig into that. Your testimony, please.', sfx: 'gavel', pose: 'judge_gavel' }
];

export const CASE1_CALL_TRIPASECA_D2_T2_EN: DialogueLine[] = [
  { speaker: 'SUPER SAM', text: 'With pleasure, Your Honor! The prosecution recalls the witness Tripaseca!', pose: 'supersam_point', bgm: 'trial' },
  { speaker: 'TRIPASECA', text: 'I never stepped down, counselor.', pose: 'tripaseca_smug' },
  { speaker: 'SUPER SAM', text: 'Then consider yourself recalled where you sit! Time is money!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Mr. Tripaseca, you remain under oath. Proceed.', sfx: 'gavel', pose: 'judge_gavel' }
];

export const CASE1_CALL_TRIPASECA_D2_T3_EN: DialogueLine[] = [
  { speaker: 'SUPER SAM', text: 'The prosecution calls the same witness for the third time! Three testimonies and zero travel costs, Your Honor!', pose: 'supersam_point', bgm: 'trial' },
  { speaker: 'TRIPASECA', text: 'Still here, counselor. I have even got comfortable.', pose: 'tripaseca_smug' },
  { speaker: 'JUEZ', text: 'Mr. Tripaseca, you remain under oath. You said the thief ran towards the front door.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Testify about the escape, and testify about that photograph.', sfx: 'gavel', pose: 'judge_gavel' }
];
