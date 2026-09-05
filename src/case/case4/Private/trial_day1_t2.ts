// @Architecture(descriptionShort="Case 4 day-1 Cecilio testimony and adjournment", type="data", icon="layers")
/**
 * Case 4 Trial Day 1 — Testimony 2 (Don Cecilio Buenavista).
 */

import type { Testimony } from '../../../types/index.js';
import { CASE4_D1_T2_CHAIN_SUCCESS, CASE4_D1_T2_WALLET_SUCCESS } from './trial_day1_success.js';

export const CASE4_TESTIMONY_2: Testimony = {
  title: 'Testimonio: La Cadena de Seguridad',
  witness: 'Don Cecilio Buenavista',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'd1_t2_1',
      speaker: 'CECILIO',
      pose: 'cecilio_idle',
      text: 'Yo mismo empujé con el hombro la pesada puerta de roble de la suite tras oír el tiroteo.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿No intentó abrir con su llave maestra de la gerencia primero?', pose: 'donramon_idle' },
        { speaker: 'CECILIO', text: 'La cerradura ordinaria de llave estaba descorrida... Lo que frenaba el acceso era pura y exclusivamente la cadena de seguridad interior.', pose: 'cecilio_idle' },
        { speaker: 'SUPER SAM', text: '¡Exacto! ¡Cerradura abierta pero cadena trabada por dentro por el asesino!', pose: 'supersam_point' }
      ]
    },
    {
      id: 'd1_t2_2',
      speaker: 'CECILIO',
      pose: 'cecilio_idle',
      text: 'La hoja se detuvo en seco a los cuatro centímetros porque la cadena de latón estaba firme en su carril.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿Y qué se podía distinguir exactamente por esa rendija de cuatro centímetros?', pose: 'donramon_idle' },
        { speaker: 'CECILIO', text: 'Mis ojos no son de águila imperial, distinguido letrado, pero alcancé a percibir en la penumbra el cesto de mimbre y la silueta del occiso cerca del fuego.', pose: 'cecilio_ciego' },
        { speaker: 'DEFENSA', text: '(Cuatro centímetros de rendija... más que suficiente para pasar un sedal de pescar.)', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'd1_t2_3',
      speaker: 'CECILIO',
      pose: 'cecilio_idle',
      text: 'Ese mecanismo es inviolable desde el exterior; requiere forzosamente que una mano humana deslice el perno desde adentro.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿Está usted absolutamente convencido de que nadie pudo manipular ese cerrojo desde el exterior del pasillo?', pose: 'donramon_idle' },
        { speaker: 'CECILIO', text: '¡Completamente, señor letrado! La chapa de latón macizo no tiene hendiduras exteriores y el perno corre por la cara interna. A menos que el homicida fuera un fantasma o poseyera poderes de telequinesis, ¡nadie puede empujar ese perno desde el pasillo!', pose: 'cecilio_escandalo' },
        { speaker: 'DEFENSA', text: '(Un fantasma no... pero alguien con paciencia, un buen hilo y dos dedos de frente, sin duda alguna...)', pose: 'donramon_idle' }
      ],
      contradiction: {
        evidence: ['candado_cadena'],
        successDialogue: CASE4_D1_T2_CHAIN_SUCCESS,
        followUp: {
          evidence: ['billetera_cuajinais'],
          prompt: '¿Tiene alguna prueba en su poder que refute el móvil de robo?',
          successDialogue: CASE4_D1_T2_WALLET_SUCCESS
        }
      }
    },
    {
      id: 'd1_t2_4',
      speaker: 'CECILIO',
      pose: 'cecilio_idle',
      text: 'Como el Botija era el único viviente dentro de la alcoba, ¡sólo él pudo atrancar la puerta para proteger su botín!',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿A qué botín se refiere usted con tanta ligereza, Don Cecilio?', pose: 'donramon_idle' },
        { speaker: 'CECILIO', text: '¡A la billetera de piel de cocodrilo del infortunado señor Gómez, por supuesto! ¡Un humilde fontanero no puede resistir la tentación del lujo!', pose: 'cecilio_idle' },
        { speaker: 'DEFENSA', text: '¡Cuidado con difamar a la clase trabajadora, don Cecilio, que el Botija tiene las manos tiznadas pero honradas!', pose: 'donramon_slam', sfx: 'desk_slam' }
      ]
    }
  ]
};
