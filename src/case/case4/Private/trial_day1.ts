// @Architecture(descriptionShort="Case 4 day-1 courtroom intro and Cecilio testimony", type="data", icon="layers")
/**
 * Case 4 Trial Day 1 — Opening (§8.1) and Testimony 1, Cecilio (§8.2).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE4_CADENA_POINT_TARGET, CASE4_D1_T1_POINT_SUCCESS } from './trial_day1_success.js';

export const CASE4_TRIAL_INTRO: DialogueLine[] = [
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: '¡Silencio en la sala! Se abre la audiencia por la muerte del huésped de la Suite 304.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_idle', text: 'Un muerto, un arma y un hombre encerrado con los dos. Time is money, Your Honor: esta corte cobra por hora y yo también.' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_slam', text: '¡Y encima el acusado es fontanero! ¡Un señor que se gana la vida metiendo la mano donde no debe!', sfx: 'desk_slam' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_slam', text: '¡PROTESTO! ¡Con permisito, dijo Monchito!', sfx: 'desk_slam' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_point', text: 'Ese hombre entró a esa suite porque el hotel lo mandó a trabajar. Con orden escrita y con hora.' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Una orden de trabajo explica la puerta, counselor. No explica el cadáver.' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Todavía no. Pero explica por qué el único sospechoso de la fiscalía llegó armado con una llave de tuercas.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Las dos observaciones son pertinentes. Escucharemos primero cómo se encontró esa puerta.' }
];

export const CASE4_TESTIMONY_1: Testimony = {
  title: 'Testimonio: La única persona dentro',
  witness: 'Don Cecilio Buenavista',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'd1_t1_1',
      speaker: 'CECILIO',
      pose: 'cecilio_idle',
      text: 'Después de aquel estruendo subí a la 304 con el Sargento. Treinta y un años sin un escándalo en mi hotel, señor juez. Treinta y uno.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CECILIO', text: 'Oí el estruendo; lo que vi fue la puerta después. No identifico a ningún tirador.', pose: 'cecilio_ciego' }
      ]
    },
    {
      id: 'd1_t1_2',
      speaker: 'CECILIO',
      pose: 'cecilio_idle',
      text: 'La cerradura de llave estaba abierta, pero la cadena no nos dejó entrar. Eso lo comprobé con la mano, no con la vista.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CECILIO', text: 'La hoja quedó detenida por la cadena, no por un mueble ni por una segunda cerradura.', pose: 'cecilio_idle' }
      ]
    },
    {
      id: 'd1_t1_3',
      speaker: 'CECILIO',
      pose: 'cecilio_idle',
      text: 'Y ese perno, señores, únicamente puede deslizarlo alguien que esté dentro de la habitación.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'CECILIO', text: 'Describo la placa como la vi. Mi conclusión depende de que nadie hubiera preparado el mecanismo antes.', pose: 'cecilio_ciego' }
      ],
      contradiction: {
        evidence: ['candado_cadena'],
        pointTarget: CASE4_CADENA_POINT_TARGET,
        successDialogue: CASE4_D1_T1_POINT_SUCCESS
      }
    },
    {
      id: 'd1_t1_4',
      speaker: 'CECILIO',
      pose: 'cecilio_idle',
      text: 'Como el señor Botija era el único vivo que hallamos ahí adentro, tuvo que echar la cadena él.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'SUPER SAM', text: 'El hallazgo merece explicación, aunque el testigo no vio la mano que accionó el cierre.', pose: 'supersam_point' }
      ],
      contradiction: {
        evidence: ['candado_cadena'],
        pointTarget: CASE4_CADENA_POINT_TARGET,
        successDialogue: CASE4_D1_T1_POINT_SUCCESS
      }
    }
  ]
};
