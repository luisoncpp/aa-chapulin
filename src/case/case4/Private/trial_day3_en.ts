// @Architecture(descriptionShort="English Case 4 day-3 intro and testimony", type="data", icon="layers")
/** Case 4 Trial Day 3 — Opening (no openingPresent) and Testimony 5, English. */

import type { DialogueLine, PointTargetContradiction, Testimony } from '../../../types/index.js';
import { CASE4_ORDEN_POINT_TARGET } from './trial_day3_success.js';
void CASE4_ORDEN_POINT_TARGET;

export const CASE4_DAY3_INTRO_EN: DialogueLine[] = [
  { bg: 'assets/bg_waiting_room.webp', furniture: 'none', speaker: 'NARRADOR', text: 'October 27, 4:00 PM. High Court - Waiting Room.', bgm: 'trial' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'The final session of this trial is open. Let us recap what stands proven.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Death came by a toxin in the wine, inside the autopsy window.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'The shot and the bang were staging after death, in keeping with the autopsy and the proven freight.' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'And the question the defense has not answered me in three days still stands: who put something in that bottle? The defendant carried it in both hands.', sfx: 'desk_slam' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'He also carried a trunk without knowing what was inside. Carrying a thing does not say what was done to that thing, prosecutor.' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Poetry, counselor. Poetry is not listed on any exchange.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'The defense grants Mr. Rufián stood at the gaming tables at 23:15.' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'It grants it, Your Honor. That alibi is true and we will not dispute it. Only it covers the noise... and the noise killed nobody.' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Then the prosecution keeps its account: the wine left dosed from the hands that carried it.' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_sweat', text: '(Third day, Don Ramón. Only the bottle left. Nothing but the bottle.)' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'We will hear Mr. Rufián on his own part in this.' }
];

export const CASE4_DAY3_OPENING_PRESENT_EN: undefined = undefined;

const ORDEN_EN: PointTargetContradiction = {
  ...CASE4_ORDEN_POINT_TARGET,
  promptQuestion: 'Which part of this request names one specific employee?',
  zones: [
    { id: 'nombre_empleado', bounds: [18, 58, 80, 82], isCorrect: true, failureDialogue: [] },
    { id: 'orden_resto', bounds: [0, 0, 100, 100], isCorrect: false, failureDialogue: [
      { speaker: 'JUEZ', pose: 'judge_thinking', text: 'That part names nobody, counselor. Look for where the person who was to go up is chosen.', sfx: 'damage' },
      { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Take your time, counselor. I bill by the hour.' }
    ] }
  ]
};

const T5_SUCCESS_EN: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION! The hotel chose nobody! The name is written right here, in his own hand!', sfx: 'desk_slam', bgm: 'objection', pose: 'donramon_slam' },
  { speaker: 'RUFINO', text: 'A hotel copies what the guest dictates to it.', pose: 'rufino_sweat' },
  { speaker: 'CECILIO', text: 'Forgive me, count, but you put that paper into my hand yourself. I only filed it. And for filing my eyes work perfectly.', pose: 'cecilio_idle' },
  { speaker: 'DEFENSA', text: 'He asked for one man, by name, to stand inside that room at one set hour.', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'To what end, counselor?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'So that he would be found there. You improvised no staging: you picked the man you were going to hang it on.', pose: 'donramon_point' },
  { speaker: 'RUFINO', text: 'I picked whoever was available.', pose: 'rufino_sweat' },
  { speaker: 'DEFENSA', text: 'You picked the one with a record.', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'Your Honor, picking a clerk is not poisoning a guest. The prosecution holds that the wine arrived dosed.', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'And that is why we are going to talk about the bottle. But let the record show who wrote that name.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'So recorded.', pose: 'judge_gavel', sfx: 'gavel' }
];

export const CASE4_TESTIMONY_5_EN: Testimony = {
  title: 'Testimony: My part in this misfortune',
  witness: 'Rufino Rufián',
  bgm: 'cross_exam_presto',
  statements: [
    {
      id: 'd3_t1_1',
      speaker: 'RUFINO',
      pose: 'rufino_smug',
      text: 'I found Mr. Gómez dead in my room and lost my head for a moment. A man of my name is not raised for that.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'RUFINO', text: 'I fix no hour for finding him. My account still fits the forensic window.', pose: 'rufino_sweat' }
      ]
    },
    {
      id: 'd3_t1_2',
      speaker: 'RUFINO',
      pose: 'rufino_smug',
      text: 'I took him up inside my trunk, dressed the scene, and shot a man who was already dead. Yesterday I admitted the first; today I admit the rest, for I will not carry what I did not do.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'The revolver was Gómez’s own, carried on him. The registry lists that gun under the dead man’s name, which is why it stayed in the room.', pose: 'pazguato_saludo' }
      ]
    },
    {
      id: 'd3_t1_3',
      speaker: 'RUFINO',
      pose: 'rufino_smug',
      text: 'But the bottle came from outside. I received it sealed, from that employee’s own hands.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'RUFINO', text: 'I grant I stood alone with the sealed bottle between delivery and my guest’s arrival. I say it as one who sees no issue.', pose: 'rufino_sweat' }
      ]
    },
    {
      id: 'd3_t1_4',
      speaker: 'RUFINO',
      pose: 'rufino_smug',
      text: 'And I did not ask for him to come to the bath. I requested a plumber. Which one they sent was the hotel’s decision.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'RUFINO', text: 'Assigning the clerk was the hotel’s call. I did not even know his name.', pose: 'rufino_monocle' }
      ],
      contradiction: { evidence: ['orden_servicios'], pointTarget: ORDEN_EN, successDialogue: T5_SUCCESS_EN }
    }
  ]
};
