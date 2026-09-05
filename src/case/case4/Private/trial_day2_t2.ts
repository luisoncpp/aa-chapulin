// @Architecture(descriptionShort="Case 4 day-2 Maruja acoustic testimony", type="data", icon="layers")
/**
 * Case 4 Trial Day 2 — Testimony 4 (Maruja).
 */

import type { Testimony } from '../../../types/index.js';
import {
  CASE4_D2_T2_CASQUILLO_SUCCESS, CASE4_D2_T2_PLANO_SUCCESS, CASE4_PLANO_POINT_TARGET
} from './trial_day2_success.js';

export const CASE4_TESTIMONY_4: Testimony = {
  title: 'Testimonio: El Estampido de las 11:15 PM',
  witness: 'Maruja',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'd2_t2_1',
      speaker: 'MARUJA',
      pose: 'maruja_idle',
      text: 'Yo me encontraba recostada en mi alcoba de la Suite 303 a las 11:15 en punto.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Señorita Maruja, ¿dónde se encontraba usted exactamente minutos antes de las 11:15 PM?', pose: 'donramon_idle' },
        { speaker: 'MARUJA', text: 'Acababa de subir por la escalera principal tras tomar una infusión de azahar en la terraza del bar. Entré a mi Suite 303 y me recosté en el diván porque me aquejaba una migraña pertinaz.', pose: 'maruja_abanico' },
        { speaker: 'SUPER SAM', text: '¡Ubicación perfecta para ser testigo presencial del balazo!', pose: 'supersam_point' }
      ]
    },
    {
      id: 'd2_t2_2',
      speaker: 'MARUJA',
      pose: 'maruja_idle',
      text: 'El estrépito fue aterrador; la vibración sacudió con fuerza la pared que comparte tuberías con la 304.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Dice que la vibración sacudió la pared. ¿Qué elemento de la habitación tembló con más fuerza?', pose: 'donramon_idle' },
        { speaker: 'MARUJA', text: '¡El radiador de calefacción! Es de hierro forjado y retumbó como campana de catedral al recibir el estrépito.', pose: 'maruja_nerviosa' },
        { speaker: 'DEFENSA', text: '(El radiador de hierro forjado... conectado en línea recta vertical con el piso inferior.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'd2_t2_3',
      speaker: 'MARUJA',
      pose: 'maruja_idle',
      text: 'Conozco el timbre metálico de un revólver .38; el sonido nació directamente dentro de la habitación contigua.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Conoce el timbre de un revólver .38... ¿El estruendo viajó libremente por el aire o resonó con eco metálico encapsulado?', pose: 'donramon_idle' },
        { speaker: 'MARUJA', text: 'Qué oído tan fino tiene, Licenciado... Ahora que lo pienso, sonó con un retumbar hueco y metálico, como si el cañón hubiera disparado dentro de una campana de hierro.', pose: 'maruja_coqueta' },
        { speaker: 'SUPER SAM', text: '¡Poesía acústica! ¡Un disparo es un disparo, Your Honor!', pose: 'supersam_slam', sfx: 'desk_slam' }
      ]
    },
    {
      id: 'd2_t2_4',
      speaker: 'MARUJA',
      pose: 'maruja_idle',
      text: 'Si el tiro sonó en ese segundo exacto, el asesino forzosamente tuvo que estar dentro jalando el gatillo.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Señorita Maruja, ¿vio usted con sus propios ojos al tirador dentro de la 304 jalando el gatillo?', pose: 'donramon_idle' },
        { speaker: 'MARUJA', text: 'No me hacía falta mirar, Licenciado... El estampido fue tan ensordecedor y cimbró tan pegado a mi tabique divisorio, que cualquier alma viva juraría que la bala salió de esa recámara. ¿Dónde más podría haber sido?', pose: 'maruja_abanico' },
        { speaker: 'DEFENSA', text: '(Ese es el truco maestro... Si la detonación parece salir de la habitación, todos asumen que el asesino estaba adentro jalando el gatillo.)', pose: 'donramon_idle' }
      ],
      contradiction: {
        evidence: ['plano_hotel'],
        pointTarget: CASE4_PLANO_POINT_TARGET,
        successDialogue: CASE4_D2_T2_PLANO_SUCCESS,
        followUp: { evidence: ['casquillo_fogueo'], successDialogue: CASE4_D2_T2_CASQUILLO_SUCCESS }
      }
    }
  ]
};
