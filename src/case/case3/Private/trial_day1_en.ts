// @Architecture(descriptionShort="English Case 3 day-1 intro and Pazguato testimony", type="data", icon="layers")
/**
 * Case 3 Trial Day 1 — Opening and Testimony 1 (English).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';

export const CASE3_TRIAL_INTRO_EN: DialogueLine[] = [
  { bg: 'assets/bg_judge.jpg', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Silence in the court! The trial of Doctor Chapatín is now in session.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.jpg', speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Time is money, Your Honor! Two thousand witnesses heard the victim scream the defendant\'s name!', sfx: 'desk_slam' },
  { bg: 'assets/bg_courtroom.jpg', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'And three minutes later they found him on top of the body! I want a verdict before my lunch hour!' },
  { bg: 'assets/bg_defense.jpg', speaker: 'DEFENSA', pose: 'donramon_slam', text: 'OBJECTION! ¡Con permisito, dijo Monchito!', sfx: 'desk_slam' },
  { bg: 'assets/bg_defense.jpg', speaker: 'DEFENSA', pose: 'donramon_point', text: 'The defense maintains that no crime was committed in that booth.' },
  { bg: 'assets/bg_judge.jpg', speaker: 'JUEZ', pose: 'judge_shock', text: 'How do you mean no...? The victim was right there!' },
  { bg: 'assets/bg_defense.jpg', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'The victim was there, Your Honor. That is not the same thing.' },
  { bg: 'assets/bg_judge.jpg', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Call the prosecution\'s first witness.' }
];

const T1_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Sergeant, that booth is not as the criminal left it — because the criminal was never there!', pose: 'donramon_point' },
  { speaker: 'SARGENTO', text: 'And... and right next to the doctor his paper bag was lying there, mi Licenciado. With the freshly used syringe inside.', pose: 'pazguato_sweat', addEvidence: 'bolsa_papel' },
  { speaker: 'DEFENSA', text: 'These glasses are missing the right lens! They broke on impact... so where is the glass? Not a single shard in that booth!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'JUEZ', text: 'Good heavens! The glasses broke somewhere else!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'And more: the medical report lists RED WOOL FIBERS in the victim\'s hair and neck. Cabina B\'s floor is gray linoleum. Not one red thread there!', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'Grrr... That proves nothing! They could have fallen earlier!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'Fibers from the blow, Mr. Prosecutor? Señor Barriga was struck lying on red wool. Then they laid him on gray linoleum.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'If that\'s true, someone moved the victim... but how? That man weighs as much as two men!', pose: 'judge_thinking' }
];

export const CASE3_TESTIMONY_1_EN: Testimony = {
  title: 'Testimony: The Discovery in Cabina B',
  witness: 'The Sergeant',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'stmt1_1',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'At 11:03 the victim\'s scream went on air and we heard it even in the Plaza.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'Clear as day, mi Licenciado. The whole plaza jumped.', pose: 'pazguato_idle' }
      ]
    },
    {
      id: 'stmt1_2',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'I flew upstairs and ran into young Ñoño at the booth door. We found the doctor kneeling over Señor Barriga.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'What else did you find in that booth besides the doctor and the victim?', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: 'Ah! And the doctor\'s paper bag was lying there too. Inside: an empty cardiotonic ampule and a freshly used syringe.', pose: 'pazguato_sweat', addEvidence: 'bolsa_papel' },
        { speaker: 'DEFENSA', text: 'Freshly used? Sergeant, that means the doctor injected someone shortly before going up.', pose: 'donramon_idle' },
        { speaker: 'SUPER SAM', text: 'Or he meant to inject the victim. Time is money, don\'t waste it!', pose: 'supersam_point' }
      ]
    },
    {
      id: 'stmt1_2b',
      speaker: 'SARGENTO',
      pose: 'pazguato_sweat',
      text: 'And the doctor\'s paper bag was lying there too, with a freshly used syringe.',
      unlockedBy: 'stmt1_2',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'An empty cardiotonic ampule, mi Licenciado. And the syringe still warm.', pose: 'pazguato_sweat', addEvidence: 'bolsa_papel' }
      ]
    },
    {
      id: 'stmt1_3',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'The crime happened right there, in that booth. The weapon was beside the body.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'Well... for the photo it looked better neat, so I moved it before...', pose: 'pazguato_sweat' },
        { speaker: 'SUPER SAM', text: 'YOUR SALARY IS CUT! Another paycheck!', pose: 'supersam_slam', sfx: 'desk_slam' },
        { speaker: 'SARGENTO', text: 'That makes four, my prosecutor. At this rate I\'ll owe you.', pose: 'pazguato_sweat' }
      ],
      contradiction: {
        evidence: ['lentes_barriga', 'informe_barriga'],
        successDialogue: T1_SUCCESS
      }
    },
    {
      id: 'stmt1_4',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'On the second floor were young Ñoño at the console, Mrs. Chimoltrufia in Cabina C, and Don Aniceto tied up in the storeroom. Nobody else.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'Poor Don Aniceto. Whoever tied him had a steady hand.', pose: 'pazguato_sweat' }
      ]
    }
  ]
};
