// @Architecture(descriptionShort="English Case 4 call-to-the-stand blocks", type="data", icon="layers")
/**
 * Case 4 — calling the witness to the stand, English adaptation (spec §18).
 * Super Sam's bilingual gag does not survive an English script, so his character
 * rides on the billing vocabulary instead. Rufino returns in D3-T2, so that block
 * is a short recall rather than a second identity interrogation.
 */

import type { DialogueLine } from '../../../types/index.js';

/** D1-T1: Don Cecilio, the nearsighted manager. Appended to CASE4_TRIAL_INTRO_EN. */
export const CASE4_CALL_CECILIO_EN: DialogueLine[] = [
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'The prosecution calls the manager of the Gran Hotel Buena Vista. And make it brisk: this court bills by the hour and the witness walks slowly.' },
  { bg: 'assets/bg_witness.webp', speaker: 'CECILIO', pose: 'cecilio_ciego', text: 'Here? Excuse me... a very good afternoon, Your Honor.' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_sweat', text: 'I am the prosecutor. The judge is up there.' },
  { bg: 'assets/bg_witness.webp', speaker: 'CECILIO', pose: 'cecilio_shock', text: 'Ah! You have a very commanding voice for a man that far down.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Witness, state your name and your occupation.' },
  { bg: 'assets/bg_witness.webp', speaker: 'CECILIO', pose: 'cecilio_idle', text: 'Cecilio Buenavista, owner and manager of the Gran Hotel Buena Vista. Thirty-one years behind that front desk, Your Honor.' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_sweat', text: '(Thirty-one years watching people walk in. Pity it was never from up close.)' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Proceed with your testimony. Only what you perceived that night.', sfx: 'gavel' }
];

/** D1-T2: the Sergeant. Appended to the day-1 chain success dialogue. */
export const CASE4_CALL_SARGENTO_EN: DialogueLine[] = [
  { speaker: 'SUPER SAM', text: 'Gladly, counselor. The prosecution calls the officer who logged the scene. Sergeant, take the stand, and do not file for travel expenses!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'SARGENTO', text: 'At once! I walked here from the precinct, prosecutor. There are no travel expenses left to file.', pose: 'pazguato_saludo' },
  { speaker: 'JUEZ', text: 'State your name and your occupation, witness.', pose: 'judge_neutral' },
  { speaker: 'SARGENTO', text: 'Refugio Pazguato, sergeant, third precinct. Though everyone calls me the Sergeant, and that suits me: it takes less time.', pose: 'pazguato_idle' },
  { speaker: 'CHAPULIN', text: 'I call him Sergeant and he calls me the red one! We understand each other perfectly!', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Sergeant, you were the first man to write down what happened in that room. Tell it exactly as you wrote it.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Proceed. Your report, and only your report.', pose: 'judge_gavel', sfx: 'gavel' }
];

/** D2-T1: Maruja. Appended to CASE4_DAY2_INTRO_EN. */
export const CASE4_CALL_MARUJA_EN: DialogueLine[] = [
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'The prosecution calls the guest from 303. And I warn you, miss: the time of this court is not something you can fan away.' },
  { bg: 'assets/bg_witness.webp', speaker: 'MARUJA', pose: 'maruja_coqueta', text: 'Coming, coming. Nobody ever died of waiting for a lady.' },
  { bg: 'assets/bg_witness.webp', speaker: 'MARUJA', pose: 'maruja_abanico', text: '...Forgive me. That line came out worse today than it usually does.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'State your name and your occupation before this court.' },
  { bg: 'assets/bg_witness.webp', speaker: 'MARUJA', pose: 'maruja_idle', text: 'Maruja. And at the Buena Vista they call me the Siren of the Hotel.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_thinking', text: 'That is a nickname, miss. I asked for your occupation.' },
  { bg: 'assets/bg_witness.webp', speaker: 'MARUJA', pose: 'maruja_abanico', text: 'Guest, Your Honor. Four months a guest. If that is not an occupation, I do not know what is.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'So recorded. Tell this court what you saw that night.', sfx: 'gavel' }
];

/** D2-T2: Chómpiras. Appended to the day-2 shared route payoff. */
export const CASE4_CALL_CHOMPIRAS_EN: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'Then let us count. Who moved the luggage that night?', pose: 'judge_thinking' },
  { speaker: 'SUPER SAM', text: 'The bellhop, Your Honor. The prosecution calls him. And let the record show this witness costs me nothing: the hotel is already paying for him.', pose: 'supersam_point' },
  { speaker: 'CHOMPIRAS', text: 'Me? Oh, Your Honor, I only take things up and down...', pose: 'chompiras_nervous' },
  { speaker: 'JUEZ', text: 'Your name and your occupation, witness.', pose: 'judge_neutral' },
  { speaker: 'CHOMPIRAS', text: 'El Chómpiras, at your service. Bellhop and freight-elevator operator of the Gran Hotel Buena Vista. Uniform and all, look at it.', pose: 'chompiras_idle' },
  { speaker: 'DEFENSA', text: 'And a logbook. Which is what this court has been short of.', pose: 'donramon_idle' },
  { speaker: 'CHOMPIRAS', text: 'That one I do carry, counselor. Ugly, but complete.', pose: 'chompiras_relieved' },
  { speaker: 'JUEZ', text: 'Proceed with your testimony.', pose: 'judge_gavel', sfx: 'gavel' }
];

/** D3-T1: Rufino swears the oath and lies about his title. Appended to CASE4_DAY3_INTRO_EN. */
export const CASE4_CALL_RUFINO_EN: DialogueLine[] = [
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_idle', text: 'The guest of Suite 204 will take the stand.' },
  { bg: 'assets/bg_witness.webp', speaker: 'RUFINO', pose: 'rufino_smug', text: 'With pleasure. One cooperates, even when one\'s holiday is ruined.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'The witness is reminded that he speaks under oath. State your name and your occupation.' },
  { bg: 'assets/bg_witness.webp', speaker: 'RUFINO', pose: 'rufino_monocle', text: 'Rufino Rufián y Montemayor, Count of Montemayor. Occupation, none: I administer what I inherited.' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_idle', text: '(Under oath. He said the whole thing without swallowing, looking the judge in the eye.)' },
  { bg: 'assets/bg_defense.webp', speaker: 'CHAPULIN', pose: 'chapulin_idle', text: '(I have a cousin in Montemayor too. And he is no count of anything.)' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'So recorded, count. Set out your part in these events.', sfx: 'gavel' }
];

/** D3-T2: recall. The witness is already sworn and introduced; no second identity check. */
export const CASE4_RECALL_RUFINO_EN: DialogueLine[] = [
  { speaker: 'SUPER SAM', text: 'And since it is on the record, Your Honor, let the witness stay where he is. Stepping down and climbing back up that stand costs time, and time...', pose: 'supersam_point' },
  { speaker: 'DEFENSA', text: 'Is money. We have all learned that one, prosecutor.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'This court recalls Mr. Rufián to the stand. He remains under the same oath.', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'RUFINO', text: 'My name and my occupation again, Your Honor?', pose: 'rufino_sweat' },
  { speaker: 'JUEZ', text: 'That will not be necessary. This court kept the first one.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: 'And the second one too. Now tell us what you and Mr. Gómez were to each other before either of you ever set foot in that hotel.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'Answer the defense, Mr. Rufián. Testify to that relationship.', pose: 'judge_gavel', sfx: 'gavel' }
];
