// @Architecture(descriptionShort="Case 4 day-2 Chómpiras trunk testimony", type="data", icon="layers")
/**
 * Case 4 Trial Day 2 — Testimony 4, Chómpiras (§10.3).
 */

import type { Testimony } from '../../../types/index.js';
import {
  CASE4_D2_T2_BAUL_SUCCESS, CASE4_D2_T2_REGISTRO_SUCCESS, CASE4_REGISTRO_POINT_TARGET
} from './trial_day2_success.js';

export const CASE4_TESTIMONY_4: Testimony = {
  title: 'Testimonio: Un porte de equipaje',
  witness: 'Chómpiras',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'd2_t2_1',
      speaker: 'CHOMPIRAS',
      pose: 'chompiras_idle',
      text: 'Yo registré el B-17 saliendo de la planta 2 y luego entrando al almacén de la azotea. Con mi letra, que será fea pero es mía.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CHOMPIRAS', text: 'Preciso la parada intermedia: no hubo trayecto directo 2→azotea. Ambas filas están disponibles desde la investigación.', pose: 'chompiras_nervous' }
      ]
    },
    {
      id: 'd2_t2_2',
      speaker: 'CHOMPIRAS',
      pose: 'chompiras_idle',
      text: 'El porte hasta la 304 lo hizo el Botija, y ahí mero se lo recibió el señor conde.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CHOMPIRAS', text: 'Lo identifiqué por observación cercana y recibo. Nada de estaturas ni categorías.', pose: 'chompiras_idle' }
      ]
    },
    {
      id: 'd2_t2_3',
      speaker: 'CHOMPIRAS',
      pose: 'chompiras_idle',
      text: 'Yo vi salir y llegar un baúl cerrado. Ahí nomás iba equipaje, señor juez. Una persona no, porque una persona se queja.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CHOMPIRAS', text: 'Admito que no vi el interior; comprobé ausencia de pasajeros visibles y cierre externo. Mi conclusión excede esa observación.', pose: 'chompiras_nervous' }
      ],
      contradiction: {
        evidence: ['registro_montacargas'],
        pointTarget: CASE4_REGISTRO_POINT_TARGET,
        successDialogue: CASE4_D2_T2_REGISTRO_SUCCESS,
        followUp: {
          evidence: ['baul_etiquetas'],
          successDialogue: CASE4_D2_T2_BAUL_SUCCESS
        }
      }
    },
    {
      id: 'd2_t2_4',
      speaker: 'CHOMPIRAS',
      pose: 'chompiras_idle',
      text: 'Y la faja iba enterita cuando el conde lo recibió. Yo firmé el talón junto al Botija.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CHOMPIRAS', text: 'Número y faja confirmados. La faja se rompe después de que Rufino recibe el envío. Botija no dispone de intervalo oculto en la cabina.', pose: 'chompiras_idle' }
      ]
    }
  ]
};
