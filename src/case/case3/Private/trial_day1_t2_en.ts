// @Architecture(descriptionShort="English Case 3 day-1 Chimoltrufia hallway testimony", type="data", icon="layers")
/**
 * Case 3 Trial Day 1 — Testimony 2 (English).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';

const T2_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'TAKE THAT!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'That cart was not carrying records!', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: 'These two grease streaks leave the OFFICE door and end in Cabina B! And a thread from Señor Barriga\'s jacket was stuck in a wheel!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'CHIMOLTRUFIA', text: '¡Ay, qué la canción! So what was on the cart was...?', pose: 'chimoltrufia_shock' },
  { speaker: 'CHAPULIN', text: 'It was Señor Barriga! They wheeled him down the hall like a long-play record!', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'SUPER SAM', text: 'Objection! The defendant could have moved him himself!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'In three minutes, Mr. Prosecutor? Between the 11:03 scream and the 11:06 arrest there\'s three minutes! An old man does not open a safe, strike a man, load him on a cart, roll him fifty meters, and lay him down in three minutes!', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: 'The defense is right! Señor Barriga was attacked in the office and moved to the booth!', pose: 'judge_shock' },
  { speaker: 'SUPER SAM', text: 'Then he did it EARLIER! And staged the scene to fake the time!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Enough. I order Señor Barriga\'s office sealed and searched. This session is adjourned twenty-four hours!', pose: 'judge_gavel', sfx: 'gavel' }
];

export const CASE3_TESTIMONY_2_EN: Testimony = {
  title: 'Testimony: The Hallway During El Grito',
  witness: 'La Chimoltrufia',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'stmt2_1',
      speaker: 'CHIMOLTRUFIA',
      pose: 'chimoltrufia_idle',
      text: 'I was recording the horoscopes in Cabina C, ¡como digo una cosa, digo otra!',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CHIMOLTRUFIA', text: 'I record the horoscopes alone because nobody helps me. Ah, and they came out lovely: I said Pisces would have a dreadful day, and look at that.', pose: 'chimoltrufia_confundida' }
      ]
    },
    {
      id: 'stmt2_2',
      speaker: 'CHIMOLTRUFIA',
      pose: 'chimoltrufia_idle',
      text: 'At 11:03 I heard Señor Barriga\'s scream through the little hallway speaker.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CHIMOLTRUFIA', text: 'Clear as a bell — or as a scream, ¡como digo una cosa, digo otra!', pose: 'chimoltrufia_idle' }
      ]
    },
    {
      id: 'stmt2_3',
      speaker: 'CHIMOLTRUFIA',
      pose: 'chimoltrufia_idle',
      text: 'And nobody walked that hallway all night except the little doctor, who left cursing at 10:40.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CHIMOLTRUFIA', text: 'Well, walk-walk nobody... but around ten-fifty I heard the record cart\'s wheels squeaking. Must\'ve been the janitor hauling discs — heavily loaded, that cart!', pose: 'chimoltrufia_confundida' },
        { speaker: 'DEFENSA', text: '(There it is. At 10:50 someone was pushing something heavy down that hall... and the doctor had already left at 10:40.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'stmt2_3b',
      speaker: 'CHIMOLTRUFIA',
      pose: 'chimoltrufia_confundida',
      text: 'Around ten-fifty I heard the record cart squeak — must\'ve been the janitor hauling discs.',
      unlockedBy: 'stmt2_3',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CHIMOLTRUFIA', text: 'Heavily loaded, I tell you. ¡Ay, qué la canción!', pose: 'chimoltrufia_shock' }
      ],
      contradiction: {
        evidence: ['marcas_carrito'],
        successDialogue: T2_SUCCESS
      }
    },
    {
      id: 'stmt2_4',
      speaker: 'CHIMOLTRUFIA',
      pose: 'chimoltrufia_idle',
      text: 'That\'s why I say it was him... although I also say who knows.',
      pressText: [
        { speaker: 'DEFENSA', text: 'HOLD IT!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CHIMOLTRUFIA', text: '¡Como digo una cosa, digo otra! Don\'t rush me!', pose: 'chimoltrufia_confundida' }
      ]
    }
  ]
};
