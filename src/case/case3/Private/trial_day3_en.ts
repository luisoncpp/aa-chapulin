// @Architecture(descriptionShort="English Case 3 day-3 intro and Barriga victim testimony", type="data", icon="layers")
/**
 * Case 3 Trial Day 3 — Opening and Testimony 1 (English).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';

export const CASE3_DAY3_INTRO_EN: DialogueLine[] = [
  { bg: 'assets/bg_judge.jpg', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Session resumes. The court has been informed the victim regained consciousness.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.jpg', speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'And the prosecution calls him to the stand at once! Let the victim point to his attacker and we go to lunch!', sfx: 'desk_slam' },
  { bg: 'assets/bg_defense.jpg', speaker: 'DEFENSA', pose: 'donramon_idle', text: '(Let him talk. That\'s exactly what I need.)' }
];

const T5_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'Your Honor, before we continue I want something on the record!', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'For three days this defense has NOT pointed at any witness. Not the sergeant, not Mrs. Chimoltrufia, not the boy. I didn\'t come to hand out blame — I came to read evidence.', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'And this evidence says something I take no pleasure in saying.', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'DEFENSA', text: 'These are the storeroom bonds! The gag knot sat IN FRONT, on the left side!', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'And what does that mean, Counselor?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'That whoever tied it stood IN FRONT of that mouth! Nobody gags another from behind and ties the knot in front!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'CHAPULIN', text: 'And more! Three quarters of an hour tied and not a scrape on the wrists! And in the floor dust — not one struggle mark, just a neat sit-down!', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'CHAPATIN', text: 'I examined him that night! That gentleman did not struggle one second! And if anyone doubts it, they can come argue with the bag!', pose: 'chapatin_enojado' },
  { speaker: 'NARRADOR', text: '(Absolute silence. Don Aniceto Rebollar stops smiling for the first time in twenty-five years.)', sfx: 'realization' },
  { speaker: 'JUEZ', text: 'Are you saying the second victim... tied himself?!', pose: 'judge_shock' },
  { speaker: 'BARRIGA', text: 'No... No, no, no. Counselor, you don\'t understand. I trusted that man with the books for twenty-five years.', pose: 'barriga_shock' },
  { speaker: 'DEFENSA', text: 'I know, Señor Barriga. That\'s why you also trusted him with the secret. And that\'s why... he\'s the only one who could use it.', pose: 'donramon_idle' },
  { speaker: 'SUPER SAM', text: 'OBJECTION! The prosecution will not allow a victim to be lynched over a bad knot! Let Mr. Rebollar take the stand!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'ANICETO', text: 'With pleasure, Mr. Prosecutor. With great pleasure.', pose: 'aniceto_sweat' }
];

export const CASE3_TESTIMONY_5_EN: Testimony = {
  title: 'Testimony: The Name I Never Spoke',
  witness: 'Señor Barriga',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'stmt5_1',
      speaker: 'BARRIGA',
      pose: 'barriga_vendado',
      text: 'On September 12 I discovered forty thousand pesos missing from the Kermés Fund.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'BARRIGA', text: 'Forty thousand pesos! That\'s eleven months of rent! I mean fifteen months — and you know very well whose, Counselor!', pose: 'barriga_enojado' },
        { speaker: 'DEFENSA', text: '(Sweating...)', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'stmt5_2',
      speaker: 'BARRIGA',
      pose: 'barriga_vendado',
      text: 'The withdrawals bore the treasury signature, so I decided to name the name on air after El Grito.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'BARRIGA', text: 'On my station. After twenty-five years of trust.', pose: 'barriga_vendado' }
      ]
    },
    {
      id: 'stmt5_3',
      speaker: 'BARRIGA',
      pose: 'barriga_vendado',
      text: 'I told no one... no one, except one person I trusted completely.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'BARRIGA', text: 'I told him at eight that night, in my office, while I put the Green Book in the safe. I remember clearly because he held the door while I dialed the combination.', pose: 'barriga_vendado' },
        { speaker: 'DEFENSA', text: '(One person knew about the shortage. One person saw the combination. And that person turned up tied.)', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: '(Monchito! But that person is victim number two!)', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: '(Exactly why, Chapulín. Exactly why nobody thought to look.)', pose: 'donramon_point' }
      ]
    },
    {
      id: 'stmt5_3b',
      speaker: 'BARRIGA',
      pose: 'barriga_vendado',
      text: 'I told him at eight, in my office, while he held the door as I dialed the safe.',
      unlockedBy: 'stmt5_3',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'BARRIGA', text: 'Twenty-five years. How do you not trust twenty-five years?', pose: 'barriga_vendado' }
      ]
    },
    {
      id: 'stmt5_4',
      speaker: 'BARRIGA',
      pose: 'barriga_vendado',
      text: 'And that person is innocent: that person was also attacked and left tied in the storeroom.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'BARRIGA', text: 'Don Aniceto. My voice of gold. My treasurer.', pose: 'barriga_vendado' }
      ],
      contradiction: {
        evidence: ['ataduras_bodega'],
        successDialogue: T5_SUCCESS
      }
    }
  ]
};
