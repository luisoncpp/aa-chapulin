// @Architecture(descriptionShort="English Case 1 day 1 opening and Florinda's testimony", type="data", icon="layers")
/**
 * Case 1, Day 1 — Opening (§10.1) and Testimony 1, Doña Florinda (§10.2).
 * No `openingPresent`: the badge is presented only in the tutorial (Case 0).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE1_CALL_TRIPASECA_D1_EN } from './witness_calls_en.js';

export const CASE1_TRIAL_INTRO_EN: DialogueLine[] = [
  { bg: 'assets/bg_waiting_room.webp', furniture: 'none', speaker: 'NARRADOR', text: 'August 22, 2:00 PM. High Court - Waiting Room.', bgm: 'trial' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Order in the court! We open the hearing on the theft of the Golden Paralyzing Chicharra and the wounding of night watchman Alma Negra.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_case1_slam', text: 'Your Honor, I closed this case in five minutes. FIVE! A museum locked with a key, a watchman on the floor, and inside a gentleman dressed as a grasshopper holding the chipote.', sfx: 'desk_slam' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Time is money, and this trial is already costing me some.' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_slam', text: '¡PROTESTO! ¡Con permisito, dijo Monchito!', sfx: 'desk_slam', cutin: 'objection_protesto' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_point', text: 'My client was inside because he went in to help, Your Honor. If that is a crime, half this room should be in handcuffs.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'So noted, counselor. Prosecution, state your theory.' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_idle', text: '(Prosecutor Super Sam. Paid by the closed case, and today he took the floor without his dollar bag on his shoulder. I have never seen him without it. I am writing that down, if only out of nosiness.)', addProfile: 'perfil_supersam' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Simple, Your Honor. The defendant struck the watchman, blew open the case and took the chicharra. Three steps, one criminal.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_thinking', text: 'Then this court wants a clear answer to one question before any other: what was that man struck with?' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_case1_slam', text: 'With the chipote he was holding! The curator saw it!', sfx: 'desk_slam' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'The prosecution calls Mrs. Florinda Corcuera, widow of Matalascallando, curator of the museum.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Witness, state your name and occupation.' },
  { bg: 'assets/bg_witness.webp', speaker: 'FLORINDA', pose: 'florinda_angry', text: 'Florinda Corcuera, widow of Matalascallando, curator of the Museum of Curiosities. And let the record show I did not want to come to a place with so much riffraff.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'The court thanks you for the observation and asks for your testimony. Only what you perceived.', sfx: 'gavel' }
];

const CASE1_D1_T1_SUCCESS_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'desk_slam', cutin: 'objection_protesto', pose: 'donramon_slam', bgm: 'objection' },
  { speaker: 'DEFENSA', text: 'Your Honor, the lady arrived at nine oh five. The police arrested my client at nine oh seven.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Two minutes. And the arrest report lists, line by line, everything he was carrying: a chipote, a box of pills, a pair of antennae and three pesos.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Of one kilo two hundred of solid gold that fits in two hands... nothing.', pose: 'donramon_slam', sfx: 'desk_slam' },
  { speaker: 'FLORINDA', text: 'Well... well, he hid it.', pose: 'florinda_shock' },
  { speaker: 'DEFENSA', text: 'Where, madam? That same report says they searched the museum piece by piece that night. Four hundred and twelve pieces and not a trace.', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'He had two minutes! In two minutes I close a case!', pose: 'supersam_case1_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: "In two minutes you close a case, counselor. I do not doubt your speed: I doubt my client's.", pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'The court concedes that an unrecovered object does not by itself establish innocence.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: "But it also concedes that the prosecution has not put that chicharra in anyone's hands. For today, the theft hangs in the air.", sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SUPER SAM', text: 'It does not matter! Even if he took nothing, he STRUCK the watchman! The witness saw him standing beside the body!', pose: 'supersam_point' },
  { speaker: 'DEFENSA', text: 'You saw a man standing beside the body, madam, but you already admitted you did not see the assault. And from there to "he struck him" is a leap the prosecution took, not you.', pose: 'donramon_idle', updateProfile: 'perfil_florinda' },
  { speaker: 'JUEZ', text: 'That is true. The witness did not see the blow. To prove the assault, the court needs the witness who did see what happened.', pose: 'judge_thinking' },
  ...CASE1_CALL_TRIPASECA_D1_EN
];

export const CASE1_TESTIMONY_1_EN: Testimony = {
  title: 'Testimony: How I found my museum',
  witness: 'Doña Florinda',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'c1_d1t1_1',
      speaker: 'FLORINDA',
      pose: 'florinda_idle',
      text: 'I locked my museum at eight forty, with my key, which is the only one that exists.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT! The only key?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'FLORINDA', text: 'The only one, counselor. I have worn it round my neck since 1962.', pose: 'florinda_idle' },
        { speaker: 'DEFENSA', text: 'And the loading door?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'That one has no key at all. The latch broke in March and was never fixed, but it opens onto the yard and the yard is walled.', pose: 'florinda_idle' },
        { speaker: 'JUEZ', text: 'Is the court to understand there was a door anyone could open?', pose: 'judge_shock' },
        { speaker: 'FLORINDA', text: 'A door onto a walled yard, Your Honor! It is not the same thing!', pose: 'florinda_angry' },
        { speaker: 'DEFENSA', text: '(A two-metre wall. For an ordinary man it is a problem. For a man in a hurry, a step.)', pose: 'donramon_idle' },
        { speaker: 'SUPER SAM', text: 'Irrelevant! The defendant was INSIDE! How he got in is a detail of architecture!', pose: 'supersam_case1_slam', sfx: 'desk_slam' },
        { speaker: 'JUEZ', text: 'The court notes the detail of architecture. Continue, defense.', pose: 'judge_neutral' }
      ]
    },
    {
      id: 'c1_d1t1_2',
      speaker: 'FLORINDA',
      pose: 'florinda_crying',
      text: 'At nine oh four a neighbour rang me and I ran out like the devil was after me.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT! Which neighbour rang you?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'FLORINDA', text: 'Well... a man. He did not give his name.', pose: 'florinda_idle' },
        { speaker: 'DEFENSA', text: 'A man with no name rang your house?', pose: 'donramon_shock' },
        { speaker: 'FLORINDA', text: 'He said "madam, they are robbing your museum" and hung up. I did not ask. What would you have done?', pose: 'florinda_crying' },
        { speaker: 'DEFENSA', text: '(Someone took the trouble to warn the woman with the key. How considerate.)', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: '¡Lo sospeché desde un principio!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'You have suspected nothing, young man, you have been asleep in the dock all morning.', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: 'I was suspecting in my sleep! ¡Todos mis movimientos están fríamente calculados!', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c1_d1t1_3',
      speaker: 'FLORINDA',
      pose: 'florinda_angry',
      text: 'I opened the big door and there was my watchman on the ground, and that red bug standing beside him with the chipote in his hand.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT! Madam, be precise: standing beside him, or on top of him?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'FLORINDA', text: 'Standing beside him. Upright, facing the door.', pose: 'florinda_idle' },
        { speaker: 'DEFENSA', text: 'And the watchman?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'Face down. Head towards the door and feet towards the display case.', pose: 'florinda_crying' },
        { speaker: 'DEFENSA', text: '(He fell towards the door. Which means that when he was struck, his back was to the display case. I will keep that.)', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: 'One last thing, madam, and I ask it with all respect: did you see the blow?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: '...No. By the time I arrived he was already on the ground.', pose: 'florinda_idle' },
        { speaker: 'JUEZ', text: 'Good gracious! Let the record show: the witness did not see the assault.', sfx: 'gavel', pose: 'judge_shock' },
        { speaker: 'SUPER SAM', text: 'Objection! You do not need to see the tree fall to know who was holding the axe!', pose: 'supersam_case1_slam', sfx: 'desk_slam' },
        { speaker: 'DEFENSA', text: 'Unless the axe is a toy, counselor.', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'c1_d1t1_4',
      speaker: 'FLORINDA',
      pose: 'florinda_crying',
      text: 'And the case was smashed and my golden chicharra was gone. He took it. Who else?',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT! What was the chicharra like, madam?', sfx: 'whoosh', cutin: 'objection_un_momento', pose: 'donramon_point' },
        { speaker: 'FLORINDA', text: 'Beautiful! Solid gold, one kilo two hundred, with sharp-edged filigree. It fits in two hands.', pose: 'florinda_idle' },
        { speaker: 'DEFENSA', text: 'One kilo two hundred of gold. You do not tuck that into a trouser pocket.', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'Well, that is exactly why he took it!', pose: 'florinda_angry' },
        { speaker: 'DEFENSA', text: '(She is saying "he" because there was nobody else to say it about. She is not lying: she is filling a gap.)', pose: 'donramon_idle' }
      ],
      contradiction: {
        evidence: ['parte_detencion'],
        successDialogue: CASE1_D1_T1_SUCCESS_EN
      }
    }
  ]
};
