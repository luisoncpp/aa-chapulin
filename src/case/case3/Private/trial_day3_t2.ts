// @Architecture(descriptionShort="Case 3 day-3 Aniceto final testimony", type="data", icon="layers")
/**
 * Case 3 Trial Day 3 — Testimony 6 (Don Aniceto acorralado).
 */

import type { Testimony } from '../../../types/index.js';
import { CASE3_T6_SUCCESS } from './trial_day3_t2_success.js';

export const CASE3_TESTIMONY_6: Testimony = {
  title: 'Testimonio: Veinticinco años de voz',
  witness: 'Don Aniceto Rebollar',
  bgm: 'cross_exam_presto',
  statements: [
    {
      id: 'stmt6_1',
      speaker: 'ANICETO',
      pose: 'aniceto_sweat',
      text: 'Está bien. Sí. Yo me até. ¡Me até de puro miedo, porque oí al asesino en el pasillo y me escondí en la bodega!',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'ANICETO', text: '¿Nunca ha tenido miedo, Licenciado? Yo tengo sesenta y cuatro años y una voz bonita. Con eso no se pelea uno.', pose: 'aniceto_sweat' },
        { speaker: 'SUPER SAM', text: '(La sala vuelve a compadecerlo. El fiscal aplaude.)', pose: 'supersam_idle' }
      ]
    },
    {
      id: 'stmt6_2',
      speaker: 'ANICETO',
      pose: 'aniceto_sweat',
      text: 'Pero yo no grabé nada: a las 9:40 yo estaba en la Cabina A grabando el sketch, encerrado con llave.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿La ventana de la cabina estaba cerrada?', pose: 'donramon_idle' },
        { speaker: 'ANICETO', text: 'Y la ventana estaba cerrada, naturalmente. Una cabina de radio es hermética: por eso se llama cabina.', pose: 'aniceto_sweat' },
        { speaker: 'DEFENSA', text: '...Hermética. Repítalo, por favor. Que conste en actas.', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'stmt6_2b',
      speaker: 'ANICETO',
      pose: 'aniceto_sweat',
      text: 'Y la ventana estaba cerrada, naturalmente. Una cabina de radio es hermética.',
      unlockedBy: 'stmt6_2',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'ANICETO', text: 'Hermética, Licenciado. Por eso se llama cabina.', pose: 'aniceto_sweat' }
      ],
      contradiction: { evidence: ['ventana_cabina', 'cartucho_corte'], successDialogue: CASE3_T6_SUCCESS }
    },
    {
      id: 'stmt6_3',
      speaker: 'ANICETO',
      pose: 'aniceto_sweat',
      text: 'Y además yo no sé imitar a nadie. Soy locutor de noticias, no payaso de carpa.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'ANICETO', text: 'Locutor de noticias. Veinticinco años. La dicción, ante todo.', pose: 'aniceto_thinking' }
      ]
    },
    {
      id: 'stmt6_4',
      speaker: 'ANICETO',
      pose: 'aniceto_sweat',
      text: 'El cartucho de identificación lo carga el operador. Ese muchacho. No yo.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'ANICETO', text: '¡El operador! ¡Ese muchacho de la consola! ¡No yo!', pose: 'aniceto_panic' },
        { speaker: 'BARRIGA', text: '¡Ñoño no cargó ningún cartucho esa noche!', pose: 'barriga_enojado' },
        { speaker: 'JUEZ', text: '¡Orden en la sala!', pose: 'judge_gavel', sfx: 'gavel' }
      ]
    }
  ]
};
