// @Architecture(descriptionShort="Case 4 day-1 Sargento testimony and turnabout", type="data", icon="layers")
/**
 * Case 4 Trial Day 1 — Testimony 2, Sargento (§8.3).
 * La ampliación se entrega presionando (3 o 4) y la contradicción usa informe_forense.
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE4_D1_T2_ALMOHADA_SUCCESS, CASE4_D1_T2_FORENSE_SUCCESS } from './trial_day1_success.js';

const AMPLIACION_PRESS: DialogueLine[] = [
  { speaker: 'SARGENTO', text: '¡Momentito, señor juez! La secretaría acaba de recibir la ampliación que pedimos ayer en la suite.', pose: 'pazguato_saludo' },
  { speaker: 'SUPER SAM', text: '¿Usted mandó pedir exámenes extra? ¡Eso sale del presupuesto de la fiscalía! YOUR SALARY IS CUT!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'SARGENTO', text: 'Con ésta van tres quincenas, mi fiscal. A este paso voy a terminar trabajándole de gratis... o sea, igual que ahora.', pose: 'pazguato_sweat' },
  { speaker: 'JUEZ', text: 'Incorpórese el documento a las dos partes antes de continuar.', pose: 'judge_gavel', sfx: 'gavel' },
  { speaker: 'NARRADOR', text: 'El informe distingue la reacción de los tejidos, el intervalo de muerte y los análisis todavía pendientes.' },
  { speaker: 'SARGENTO', text: 'Aquél era mi parte. Éste es el del forense. Y no dicen lo mismo.', pose: 'pazguato_decidido', addEvidence: 'informe_forense' }
];

export const CASE4_TESTIMONY_2: Testimony = {
  title: 'Testimonio: La secuencia que asenté',
  witness: 'El Sargento',
  bgm: 'cross_exam_allegro',
  statements: [
    {
      id: 'd1_t2_1',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'A las 23:15 oímos el estruendo, mi señor juez. A las 23:20 abrimos la habitación a puros empujones.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'Una cosa es el ruido y otra la apertura. Entre ambas pasaron cinco minutos.', pose: 'pazguato_saludo' }
      ]
    },
    {
      id: 'd1_t2_2',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'La víctima tenía una herida en el pecho y junto al cuerpo había un revólver. Lo fotografié antes de tocarlo, que para eso me pagan. Poquito, pero me pagan.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'Revisemos el arma y la almohada cuando llegue la ampliación. De momento constan como halladas.', pose: 'pazguato_sweat' }
      ]
    },
    {
      id: 'd1_t2_3',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'Mi reconstrucción inicial fue que esa bala lo mató justo cuando sonó el estruendo.',
      pressText: [
        ...AMPLIACION_PRESS
      ],
      contradiction: {
        evidence: ['informe_forense'],
        successDialogue: CASE4_D1_T2_FORENSE_SUCCESS,
        followUp: {
          evidence: ['foto_crimen', 'informe_policial'],
          prompt: '¿Qué objeto pudo amortiguar el disparo real?',
          successDialogue: CASE4_D1_T2_ALMOHADA_SUCCESS
        }
      }
    },
    {
      id: 'd1_t2_4',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'Y con esa secuencia fue con la que relacioné al señor Botija con el homicidio.',
      pressText: [
        ...AMPLIACION_PRESS
      ],
      contradiction: {
        evidence: ['informe_forense'],
        successDialogue: CASE4_D1_T2_FORENSE_SUCCESS,
        followUp: {
          evidence: ['foto_crimen', 'informe_policial'],
          prompt: '¿Qué objeto pudo amortiguar el disparo real?',
          successDialogue: CASE4_D1_T2_ALMOHADA_SUCCESS
        }
      }
    }
  ]
};
