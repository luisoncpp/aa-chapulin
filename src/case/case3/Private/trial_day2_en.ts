// @Architecture(descriptionShort="English Case 3 day-2 intro and Ñoño console testimony", type="data", icon="layers")
/**
 * Case 3 Trial Day 2 — Opening and Testimony 1 (English).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';

export const CASE3_DAY2_INTRO_EN: DialogueLine[] = [
  { bg: 'assets/bg_judge.jpg', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Session resumes. The office search confirmed what the defense said: the assault happened there.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.jpg', speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Correction, Your Honor! It confirms WHERE it happened, not WHO did it!', sfx: 'desk_slam' },
  { bg: 'assets/bg_courtroom.jpg', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'The defendant had from 10:40 to 11:03! Time enough to be money!' },
  { bg: 'assets/bg_defense.jpg', speaker: 'DEFENSA', pose: 'donramon_slam', text: 'The defense calls the console operator of XEVC.', sfx: 'desk_slam' }
];

const T3_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'That scream did NOT enter through any microphone!', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'The console\'s own log spells it out: 23:03, STATION CUT, CARTRIDGE 3, AUTOMATIC!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'JUEZ', text: 'Automatic?! You mean the machine fired it alone?!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Alone, Your Honor. And if doubt remains: Cabina B\'s microphone cable was coiled and unplugged since about ten to ten. Not a whisper went on air from that booth!', pose: 'donramon_point' },
  { speaker: 'NARRADOR', text: '(The courtroom erupts. The Judge bangs the gavel four times and nobody hears it.)', sfx: 'gavel' },
  { speaker: 'CHAPULIN', text: '¡Lo sospeché desde un principio! The scream two thousand people heard was a RECORDING!', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'SUPER SAM', text: 'A canned scream?! But... but that means...', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'It means two things, Mr. Prosecutor. One: nobody knows when Señor Barriga was really attacked. And two, the ugly one...', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Someone recorded a cry for help in the victim\'s voice BEFORE the victim needed it! This wasn\'t a quarrel, Your Honor — this was rehearsed!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'JUEZ', text: 'Premeditation! Someone planned this hours ahead!', pose: 'judge_shock' },
  { speaker: 'SUPER SAM', text: 'And that someone had a recording booth all night! THE DEFENDANT! I call the other victim, Don Aniceto Rebollar!', pose: 'supersam_point' }
];

export const CASE3_TESTIMONY_3_EN: Testimony = {
  title: 'Testimony: I Was at the Console',
  witness: 'Ñoño',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'stmt3_1',
      speaker: 'NONO',
      pose: 'nono_nervioso',
      text: 'I\'m the operator. That night I ran the console through the whole Grito.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'NONO', text: '...Okay. At eleven sharp Don Aniceto sent me to the roof to move the antenna, because El Grito was coming through with static. I came down at 11:06.', pose: 'nono_llorando' },
        { speaker: 'DEFENSA', text: 'So the console was ALONE at the exact minute of the scream?', pose: 'donramon_idle' },
        { speaker: 'SUPER SAM', text: 'Objection! That helps the prosecution! An empty console is a console anyone could use!', pose: 'supersam_slam', sfx: 'desk_slam' },
        { speaker: 'DEFENSA', text: '(Or a console that needed nobody...)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'stmt3_1b',
      speaker: 'NONO',
      pose: 'nono_llorando',
      text: 'At eleven sharp Don Aniceto sent me to the roof — I was gone until 11:06.',
      unlockedBy: 'stmt3_1',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'NONO', text: 'I swear that\'s all! Please don\'t tell my daddy...', pose: 'nono_llorando' }
      ]
    },
    {
      id: 'stmt3_2',
      speaker: 'NONO',
      pose: 'nono_nervioso',
      text: 'At 11:03 my daddy\'s scream entered through Cabina B\'s microphone and went on air.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'NONO', text: 'That\'s how booths work! Microphone in, speakers out!', pose: 'nono_nervioso' }
      ],
      contradiction: {
        evidence: ['bitacora_transmision', 'microfono_cabina'],
        successDialogue: T3_SUCCESS
      }
    },
    {
      id: 'stmt3_3',
      speaker: 'NONO',
      pose: 'nono_nervioso',
      text: 'Nobody else touched the console. Nobody, I swear!',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'NONO', text: 'N-nobody! (He sweats and shakes.)', pose: 'nono_llorando' },
        { speaker: 'JUEZ', text: 'Easy, young man. Breathe.', pose: 'judge_neutral' }
      ]
    },
    {
      id: 'stmt3_4',
      speaker: 'NONO',
      pose: 'nono_nervioso',
      text: 'Then we all went up... and the doctor was there, with my daddy on the floor.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'NONO', text: 'He was kneeling. Helping. I think.', pose: 'nono_llorando' }
      ]
    }
  ]
};
