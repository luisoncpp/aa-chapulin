// @Architecture(descriptionShort="Case 3 day-2 Aniceto victim testimony", type="data", icon="layers")
/**
 * Case 3 Trial Day 2 — Testimony 4 (Don Aniceto como segunda víctima).
 */

import type { Testimony } from '../../../types/index.js';
import { CASE3_T4_SUCCESS } from './trial_day2_t2_success.js';

export const CASE3_TESTIMONY_4: Testimony = {
  title: 'Testimonio: Lo que sufrí en la bodega',
  witness: 'Don Aniceto Rebollar',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'stmt4_1',
      speaker: 'ANICETO',
      pose: 'aniceto_idle',
      text: 'A las 10:50 bajé a la bodega por los discos del aniversario.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'ANICETO', text: 'Discos del aniversario de la estación. Veinticinco años al aire.', pose: 'aniceto_idle' }
      ]
    },
    {
      id: 'stmt4_2',
      speaker: 'ANICETO',
      pose: 'aniceto_idle',
      text: 'Alguien me golpeó por la espalda, me ató y me amordazó. No alcancé a ver nada.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿Con qué lo amordazaron?', pose: 'donramon_idle' },
        { speaker: 'ANICETO', text: 'Me amordazaron con mi propio pañuelo de seda, ese que yo siempre llevaba al cuello. Me lo quitaron y me lo metieron en la boca. Qué humillación.', pose: 'aniceto_idle' }
      ]
    },
    {
      id: 'stmt4_2b',
      speaker: 'ANICETO',
      pose: 'aniceto_idle',
      text: 'Me amordazaron con mi propio pañuelo de seda, el que yo siempre llevaba al cuello.',
      unlockedBy: 'stmt4_2',
      pressText: [
        { speaker: 'DEFENSA', text: '(¿Su propio pañuelo? Sargento... ¿esas ataduras siguen tiradas en la bodega?)', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: 'Uy. Sí. Nadie las recogió.', pose: 'pazguato_sweat' }
      ]
    },
    {
      id: 'stmt4_3',
      speaker: 'ANICETO',
      pose: 'aniceto_idle',
      text: 'Pero oí sus pasos: cortitos, arrastrados... pasos de persona muy mayor.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'ANICETO', text: 'Pasos de persona muy mayor. El doctor Chapatín, sin duda.', pose: 'aniceto_idle' }
      ],
      contradiction: { evidence: ['receta_nono', 'bolsa_papel'], successDialogue: CASE3_T4_SUCCESS }
    },
    {
      id: 'stmt4_4',
      speaker: 'ANICETO',
      pose: 'aniceto_idle',
      text: 'Cuando el sargento me halló yo seguía atado. Casi me ahogo, señor Juez.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'SUPER SAM', text: '¡La fiscalía exige respeto para la segunda víctima de este monstruo!', pose: 'supersam_slam', sfx: 'desk_slam' },
        { speaker: 'JUEZ', text: 'La corte pide respeto para don Aniceto Rebollar.', pose: 'judge_neutral' },
        { speaker: 'DEFENSA', text: 'Con todo respeto, señor Juez. Solo buscamos la verdad.', pose: 'donramon_idle' }
      ]
    }
  ]
};
