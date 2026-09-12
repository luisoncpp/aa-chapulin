// @Architecture(descriptionShort="English Case 3 call-to-the-stand beats opening every testimony", type="data", icon="layers")
/**
 * Case 3 — "Llamado al estrado" (English adaptation, not a translation).
 * Each block is appended to the dialogue the engine plays right before its testimony:
 * the prosecution calls the witness, the court takes name and occupation, and the judge
 * orders the testimony to begin. Returning witnesses get a shorter recall beat instead.
 */

import type { DialogueLine } from '../../../types/index.js';

/** Day 1 · Testimony 1 — the Sergeant. His full name was already spoken at the radio station. */
export const CASE3_CALL_SARGENTO_EN: DialogueLine[] = [
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'The prosecution calls its first witness: the officer who worked the scene! And make it quick — every minute of this court costs money!' },
  { speaker: 'SARGENTO', pose: 'pazguato_saludo', text: 'At your service, my prosecutor! Coming, coming...' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Witness, state your full name and occupation for the record.' },
  { speaker: 'SARGENTO', pose: 'pazguato_saludo', text: 'Preventive Police, Your Honor, rank of sergeant. And my full name is Sergeant Refu—' },
  { speaker: 'SUPER SAM', pose: 'supersam_slam', sfx: 'desk_slam', text: 'STOP! Your full name runs eleven seconds and eleven seconds cost money! Write down "the Sergeant" and move on!' },
  { speaker: 'SARGENTO', pose: 'pazguato_sweat', text: 'There you have it, Your Honor. That\'s why everyone just calls me "the Sergeant". It\'s cheaper.' },
  { speaker: 'DEFENSA', pose: 'donramon_idle', text: '(Poor man. They dock my rent; they dock his name.)' },
  { speaker: 'JUEZ', pose: 'judge_gavel', sfx: 'gavel', text: 'So noted. Sergeant, begin your testimony.' }
];

/** Day 1 · Testimony 2 — La Chimoltrufia. Her occupation answer contradicts itself twice. */
export const CASE3_CALL_CHIMOLTRUFIA_EN: DialogueLine[] = [
  { speaker: 'SUPER SAM', pose: 'supersam_sweat', text: 'The prosecution calls its second witness. She was in that hallway and she will contradict the counselor. And keep it short, madam — time is money!' },
  { speaker: 'CHIMOLTRUFIA', pose: 'chimoltrufia_idle', text: 'Oh, of course! You see, I\'m very short-spoken... although I\'m also a terrible chatterbox.' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Madam, for the record: your name and your occupation.' },
  { speaker: 'CHIMOLTRUFIA', pose: 'chimoltrufia_confundida', text: 'La Chimoltrufia, at your service. And I\'m the horoscope announcer at XEVC... well, assistant announcer. Well, the one who makes the coffee. ¡Como digo una cosa, digo otra!' },
  { speaker: 'JUEZ', pose: 'judge_thinking', text: '...And which of the three shall I enter?' },
  { speaker: 'CHIMOLTRUFIA', pose: 'chimoltrufia_idle', text: 'All three, Your Honor. They only pay me for one anyway.' },
  { speaker: 'DEFENSA', pose: 'donramon_sweat', text: '(Chanfle. This lady just contradicted the previous witness... and the previous witness was her.)' },
  { speaker: 'JUEZ', pose: 'judge_gavel', sfx: 'gavel', text: 'So noted... whatever it was. Witness, proceed with your testimony.' }
];

/** Day 2 · Testimony 1 — Ñoño. The defense called him; the prosecution grabs the call anyway. */
export const CASE3_CALL_NONO_EN: DialogueLine[] = [
  { speaker: 'SUPER SAM', pose: 'supersam_slam', sfx: 'desk_slam', text: 'Objection! If the defense calls him in one minute, the prosecution calls him in thirty seconds! Get the boy up there!' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Take the stand, witness. State your name and your occupation.' },
  { speaker: 'NONO', pose: 'nono_nervioso', text: 'Ñoño, Your Honor... Señor Barriga\'s son. And I\'m the console operator at XEVC.' },
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'And which shall I enter as your occupation: operator, or son of the victim?' },
  { speaker: 'NONO', pose: 'nono_llorando', text: 'I\'m doing very badly at both, Your Honor.' },
  { speaker: 'DEFENSA', pose: 'donramon_idle', text: '(Oh, kid. I have a daughter your age. I know that face by heart.)' },
  { speaker: 'JUEZ', pose: 'judge_gavel', sfx: 'gavel', text: 'This court will hear you patiently. Proceed, young man.' }
];

/** Day 2 · Testimony 2 — Don Aniceto's first appearance. He cannot let a mispronunciation pass. */
export const CASE3_CALL_ANICETO_EN: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Let the witness take the stand. State your name and occupation for the record.' },
  { speaker: 'ANICETO', pose: 'aniceto_idle', text: 'Aniceto Rebollar, senior announcer of XEVC. Twenty-five years on the air, Your Honor. Not one night missed.' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'The star announcer! The golden voice! Mister RE-bo-lar!' },
  { speaker: 'ANICETO', pose: 'aniceto_idle', text: 'Re-bo-LLAR, Mr. Prosecutor. The weight goes at the end, where the word ends in an R. "RE-bo-lar" is what people say when they read out loud without understanding what they read.' },
  { speaker: 'SUPER SAM', pose: 'supersam_sweat', text: '...Grrr.' },
  { speaker: 'CHAPULIN', pose: 'chapulin_idle', text: '¡Chanfle! The prosecution just got docked a syllable.' },
  { speaker: 'JUEZ', pose: 'judge_gavel', sfx: 'gavel', text: 'Mr. Rebollar, with whatever diction you please: begin your testimony.' }
];

/** Day 3 · Testimony 1 — Señor Barriga, wheeled in awake for the first time. */
export const CASE3_CALL_BARRIGA_EN: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Let the victim be brought in. The court permits him to testify seated.' },
  { speaker: 'NARRADOR', text: '(Two orderlies wheel the chair up to the stand. The whole courtroom goes quiet.)' },
  { speaker: 'BARRIGA', pose: 'barriga_vendado', text: 'Good evening. Forgive me for not rising.' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Nobody asked you to, sir. For the record: your name and your occupation.' },
  { speaker: 'BARRIGA', pose: 'barriga_vendado', text: 'Barriga. Owner and director of radio station XEVC... and a landlord, Your Honor. Though today I come only as a victim.' },
  { speaker: 'DEFENSA', pose: 'donramon_sweat', text: '(Of every witness stand in the world, I had to draw my own landlord.)' },
  { speaker: 'JUEZ', pose: 'judge_gavel', sfx: 'gavel', text: 'The court thanks you for the effort, Señor Barriga. Begin your testimony.' }
];

/** Day 3 · Testimony 2 — Don Aniceto recalled. Already identified, and already unravelling. */
export const CASE3_RECALL_ANICETO_EN: DialogueLine[] = [
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'The court recalls Don Aniceto Rebollar to the stand. The witness is already identified on the record.' },
  { speaker: 'ANICETO', pose: 'aniceto_sweat', text: 'Identified, yes. Although today you call me in a different tone — and the tone goes on the record too.' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Same witness, same oath, same minute! The prosecution does not pay overtime!' },
  { speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Don Aniceto, I didn\'t come to take your twenty-five years away. I came to have you explain one night.' },
  { speaker: 'ANICETO', pose: 'aniceto_sweat', text: 'One night. Naturally. Ask away, Counselor: I speak beautifully even when I\'m being accused.' },
  { speaker: 'JUEZ', pose: 'judge_gavel', sfx: 'gavel', text: 'Under the same oath, Mr. Rebollar. Give this court your new testimony.' }
];
