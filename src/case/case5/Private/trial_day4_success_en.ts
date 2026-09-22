// @Architecture(descriptionShort="Case 5 day-4 opening present, T9 contradiction successes, GIRO 4, English", type="data", icon="layers")
/**
 * Case 5 Trial Day 4 — opening present, T9 successes, GIRO 4 (spec §17), English.
 */

import type { ChoicePrompt, DialogueLine, TrialPresentStep } from '../../../types/index.js';

export const CASE5_DAY4_OPENING_PRESENT_SUCCESS_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'The Archive maintenance log, Your Honor, and the thermograph strip from corridor seven!', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'On December third a pipe burst in corridor seven\'s wall. They ran the boiler and two dryers at maximum and left them for four days.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'The building thermograph, which has recorded data on strips changed every Sunday for eighteen years, logged sustained thirty-one degrees on December fourth\'s strip.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'And the medical examiner calculated time of death using a table for a room at twenty.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Good grief! And what does that mean?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'You see, Your Honor: a body throws its heat at the air, like throwing money out the window... no, wait, that one is not it either.', bg: 'assets/examine_termografo.webp', furniture: 'none' },
  { speaker: 'DEFENSA', text: 'The point is: the colder the air, the faster the deceased... the body, cools down. Well, that is the idea.', bg: 'assets/examine_termografo.webp', furniture: 'none' },
  { speaker: 'NARRADOR', text: 'The lower curve is the one the expert used: a room at twenty degrees.', bg: 'assets/plate_curva_enfriamiento.webp', furniture: 'none' },
  { speaker: 'NARRADOR', text: 'The upper curve is corridor 7 that afternoon: thirty-one degrees. The body cooled much more slowly.', bg: 'assets/plate_curva_enfriamiento.webp', furniture: 'none' },
  { speaker: 'NARRADOR', text: 'At the same temperature measured at 6:40 PM, the upper curve places death twenty-five minutes earlier.', bg: 'assets/plate_curva_enfriamiento.webp', furniture: 'none' },
  { speaker: 'NARRADOR', text: 'The medical examiner stands up in the second row of the gallery without being called.', bg: 'assets/bg_judge.webp', furniture: 'none' },
  { speaker: 'NARRADOR', text: 'He speaks with the clerk for forty seconds, does two sums on a slip of paper, and nods.', sfx: 'realization' },
  { speaker: 'SECRETARIO', text: 'Your Honor, the expert corrects his report. At thirty-one degrees, the interval is adjusted.' },
  { speaker: 'JUEZ', text: 'State it.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SECRETARIO', text: 'From 4:35 PM to 5:05 PM.', updateEvidence: 'informe_forense_c5' },
  { speaker: 'NARRADOR', text: 'A low murmur in the gallery, slow to grow because the room is slow to understand it.', bgm: 'suspense' },
  { speaker: 'SECRETARIO', text: '...Your Honor. With permission.' },
  { speaker: 'SECRETARIO', text: 'The defendant signed his entry at 4:40 PM and his exit at 4:58 PM.' },
  { speaker: 'SECRETARIO', text: 'The prosecution notes that the defense has just placed its own client inside the window.' },
  { speaker: 'NARRADOR', text: 'The gallery erupts.', sfx: 'gavel' },
  { speaker: 'JUEZ', text: 'ORDER! ORDER IN THE COURT!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'Counselor Chapulin! Do you know what you have just done?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'I do, Your Honor. I knew at five forty this morning.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'You have just placed your client alone with the victim within the hour of death!', pose: 'judge_shock', updateProfile: 'perfil_donramon' },
  { speaker: 'DEFENSA', text: 'Yes, Your Honor.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'And I have just shown that the logged hour does not rule out the other man either. I still have to prove he reached the corridor.', pose: 'chapulin_point' },
  { speaker: 'NARRADOR', text: 'Silence.', bgm: 'suspense' },
  { speaker: 'JUEZ', text: '...Explain yourself.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: 'Counselor Berrondo returned his visitor badge at 4:50 PM.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'The prosecution treated that as a time of departure until we challenged the column header on Tuesday.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Before that, 4:50 PM fell outside the expert\'s window.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Now it falls inside it. And because the log does not prove departure, it does not rule out that he was still there at 5:02 PM.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'BERRONDO', text: '......', pose: 'berrondo_idle', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'DON RAMÓN', text: '(There it is, kid.)', pose: 'donramon_idle' },
  { speaker: 'DON RAMÓN', text: '(There\'s the detail.)', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'The court understands. And the court warns the defense that from this moment it plays without a net.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'If you do not place someone else inside that corridor, the only person left placed there is your client.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: 'I know, Your Honor.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'The defense calls the clerk in charge of the Judicial Archive experts\' window.', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'Name and occupation.', pose: 'judge_neutral' },
  { speaker: 'GENOVEVA', text: 'Genoveva Penaloza Suarez. Clerk in charge of the experts and court auxiliaries window. Thirteen years.', pose: 'genoveva_idle' },
  { speaker: 'GENOVEVA', text: 'And I wish to note that I was summoned.', pose: 'genoveva_reglamento' },
  { speaker: 'JUEZ', text: 'Everyone here was summoned, miss. Take the stand.', sfx: 'gavel', pose: 'judge_gavel' }
];

export const CASE5_D4_T1_LIBRO_SUCCESS_EN: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION!', sfx: 'desk_slam', bgm: 'objection', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Miss Penaloza, with all respect: your log has no departure column.', pose: 'chapulin_point' },
  { speaker: 'GENOVEVA', text: '...It does.', pose: 'genoveva_idle' },
  { speaker: 'DEFENSA', text: 'Read the court the printed header of the second column.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'GENOVEVA', text: '..."Time badge returned".', pose: 'genoveva_sweat' },
  { speaker: 'NARRADOR', text: 'Silence in the courtroom.', sfx: 'realization' },
  { speaker: 'GENOVEVA', text: '......', pose: 'genoveva_shock' },
  { speaker: 'GENOVEVA', text: 'Thirteen years.', pose: 'genoveva_shock' },
  { speaker: 'GENOVEVA', text: 'Thirteen years calling a column that says something else "time of departure".', pose: 'genoveva_sweat' },
  { speaker: 'DEFENSA', text: 'Everyone calls it that, miss. I confused the terms too until I read the header on Tuesday.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Your Honor: that log does not record who was inside the Archive.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'It records who requested a badge and who returned it.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Let that be entered in those exact words.', sfx: 'gavel', pose: 'judge_gavel', updateProfile: 'perfil_genoveva' },
  { speaker: 'DEFENSA', text: 'And one more thing, miss, because you are the only person in this trial who knows the regulations.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'A syndic who has already returned his badge — can he remain inside the building?', pose: 'chapulin_point' },
  { speaker: 'GENOVEVA', text: '...Yes, sir.', pose: 'genoveva_sweat' },
  { speaker: 'GENOVEVA', text: 'With his credential he may be in the goods deposit at any hour, for as many hours as he wishes, and nobody has to know.', pose: 'genoveva_reglamento' },
  { speaker: 'GENOVEVA', text: 'That is what the paper says.', pose: 'genoveva_idle' },
  { speaker: 'NARRADOR', text: 'Rising murmur in the gallery.', sfx: 'realization', bgm: 'objection' },
  { speaker: 'BERRONDO', text: 'Your Honor, with permission: that is exact, and I said so myself yesterday.', pose: 'berrondo_idle', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'BERRONDO', text: 'I have never hidden either of those things, because both are perfectly legal.', pose: 'berrondo_sweat', bg: 'assets/bg_courtroom.webp' },
  { speaker: 'DEFENSA', text: '(He is sweating. He has been sweating since yesterday.)', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Defense: being in a basement is not being in a corridor.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'This court has spent four days waiting for someone to climb a staircase.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: '(I am coming, Your Honor. Just one thing first.)', pose: 'chapulin_idle' }
];

const PLAN_CHOICE_EN: ChoicePrompt = {
  id: 'd4_plan_preparation',
  question: 'If Berrondo prepared the setup before Saturday, what hypothesis can we test?',
  options: [
    { id: 'esperar', label: 'He waited for Saturday and improvised.' },
    { id: 'planear', label: 'He searched in advance for a piece to frame Don Ramón.' }
  ],
  correctId: 'planear',
  successDialogue: [
    { speaker: 'DEFENSA', text: '(If he planned the lure, he had to confirm beforehand that Don Ramón\'s card was still in the index.)', pose: 'chapulin_idle' }
  ],
  failDialogue: [
    { speaker: 'DON RAMÓN', text: '(If he waited for Saturday, there will be no earlier record to help us.)', pose: 'donramon_idle' },
    { speaker: 'DEFENSA', text: '(Let us return to the hypothesis that leaves a trace we can check.)', pose: 'chapulin_idle' }
  ]
};

export const CASE5_D4_T1_CHAIN_EN: TrialPresentStep[] = [
  {
    evidence: ['esquina_tarjeta'],
    prompt: 'What scene finding could have been prepared to frame Don Ramón?',
    successDialogue: [
      { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'TAKE THAT!', sfx: 'desk_slam', pose: 'chapulin_slam' },
      { speaker: 'DEFENSA', text: 'The card corner found in Casimiro\'s hand carried Don Ramón\'s address. Someone put it there to point at him.', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: 'A typed card does not prove it came from my index. Anyone who knew Mr. Valdés could have written it.', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: 'Until this trial I did not even know that man\'s name. Why would I search eleven thousand cards for him?', pose: 'berrondo_idle' }
    ]
  },
  {
    evidence: ['oficio_diligencia'],
    prompt: 'What prosecution document named the person summoned and was distributed to the Syndic\'s Office?',
    successDialogue: [
      { speaker: 'DEFENSA', text: 'Notice 4471 names Ramón Valdés at Casimiro\'s request and orders a copy sent to the Syndic\'s Office.', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: 'I signed the receipt, but I did not pay attention to the subject. The written name does not prove I read it.', pose: 'berrondo_idle' },
      { speaker: 'JUEZ', text: 'The notice proves what he could know, not what he did after signing it.', pose: 'judge_thinking' }
    ]
  },
  { choice: PLAN_CHOICE_EN, successDialogue: [] },
  {
    evidence: ['fichero_cedulario'],
    prompt: 'What item would he have consulted to confirm that Don Ramón was still indexed?',
    successDialogue: [
      { speaker: 'DEFENSA', text: 'The card-file index holds the address cards. If he chose one, he could confirm that Don Ramón\'s was still filed.', pose: 'chapulin_point' },
      { speaker: 'DON RAMÓN', text: '(That is still a hypothesis, kid.)', pose: 'donramon_idle' }
    ]
  },
  {
    profileTarget: ['perfil_genoveva'],
    prompt: 'Who can check the deposit records and tell us whether there was an earlier consultation?',
    successDialogue: [
      { speaker: 'DEFENSA', text: 'Your Honor, I ask that Ms. Penaloza return to the stand. She files the deposit vouchers.', pose: 'chapulin_point' },
      { speaker: 'JUEZ', text: 'Miss, check your folder. Is there a card-file consultation by Counselor Berrondo on November twenty-ninth?', pose: 'judge_neutral' },
      { speaker: 'GENOVEVA', text: 'Yes, Your Honor. "November twenty-ninth. Crate 9. Item consulted: card-file index. Requester: Counselor Fulgencio Berrondo. Signature: F. Berrondo."', pose: 'genoveva_sweat' },
      { speaker: 'DEFENSA', text: 'That was a Monday. The voucher records a consultation, but not which card he saw, and it was not required to open the crate.', pose: 'chapulin_slam', sfx: 'desk_slam' },
      { speaker: 'JUEZ', text: 'Let that be entered. The card will be identified by its address, not by this voucher.', pose: 'judge_neutral' },
      { speaker: 'SECRETARIO', text: 'I receive the folder, Your Honor.' },
      { speaker: 'JUEZ', text: 'Counselor Chapulin. This court has spent four days forbidding you to point at a person, and today it is going to order you to.', sfx: 'gavel', pose: 'judge_gavel' }
    ]
  }
];

export const CASE5_D4_T1_CEDULARIO_SUCCESS_EN: DialogueLine[] = CASE5_D4_T1_CHAIN_EN[4].successDialogue;
