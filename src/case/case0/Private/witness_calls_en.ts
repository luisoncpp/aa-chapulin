// @Architecture(descriptionShort="English Case 0 calling-to-the-stand blocks", type="data", icon="layers")
import type { DialogueLine } from '../../../types/index.js';

/** First call: the prosecution summons Casimiro, who states name and occupation. */
export const CASE0_WITNESS_CALL_T1_EN: DialogueLine[] = [
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'The prosecution calls its one and only witness to the stand: Mr. Casimiro Lengua. And make it quick, Your Honor. Every step of those stairs costs me money.' },
  { speaker: 'CASIMIRO', pose: 'casimiro_amable', text: 'Climbing, climbing. To the stand. From the Latin stare, “to stand upright”.' },
  { speaker: 'DEFENSA', pose: 'donramon_sweat', text: '(This man footnotes the staircase. I am going to grow a beard in here.)' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Witness, state your name and occupation.' },
  { speaker: 'CASIMIRO', pose: 'casimiro_catalogo', text: 'Casimiro Lengua, at your service: authorized distributor for The Universal Knowledge Encyclopedias. From the Latin encyclopaedia, “instruction in a circle”.' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Your testimony, please. Only what you perceived.' }
];

/** Second round, same witness: a formal recall instead of a fresh identification. */
export const CASE0_WITNESS_RECALL_T2_EN: DialogueLine[] = [
  { speaker: 'SUPER SAM', pose: 'supersam_slam', sfx: 'desk_slam', text: 'The prosecution recalls Mr. Lengua to the stand! Same witness, same stand, zero travel expenses. That is efficiency!' },
  { speaker: 'CASIMIRO', pose: 'casimiro_amable', text: 'I never left it, prosecutor.' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Then consider yourself recalled where you stand. Time is money.' },
  { speaker: 'DEFENSA', pose: 'donramon_idle', text: '(Pardon me, said Monchito. Same gentleman, except now he owes me an hour.)' },
  { speaker: 'JUEZ', pose: 'judge_gavel', sfx: 'gavel', text: 'Mr. Lengua, you remain under oath. Proceed with your new testimony.' }
];

/** Third round: the witness is recalled in his new condition as a suspect. */
export const CASE0_WITNESS_RECALL_T3_EN: DialogueLine[] = [
  { speaker: 'SUPER SAM', pose: 'supersam_slam', sfx: 'desk_slam', text: 'The prosecution calls to the stand... its own witness! For the third time, Your Honor! At this rate I am billing this court for overtime.' },
  { speaker: 'CASIMIRO', pose: 'casimiro_sweat', text: 'I have not stepped off the stand once, prosecutor. Not one line.' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'For the record, and in your new capacity: state your name and occupation again.' },
  { speaker: 'CASIMIRO', pose: 'casimiro_panic', text: 'Again? ...Casimiro Lengua. Authorized distributor of... of... of assorted volumes.' },
  { speaker: 'CHAPULÍN', pose: 'chapulin_point', text: 'Good grief! He ran out of Latin!' },
  { speaker: 'JUEZ', pose: 'judge_gavel', sfx: 'gavel', text: 'Mr. Lengua, explain to this court how that accordion file reached your sample case. From now on, every word is on the record against you.' }
];
