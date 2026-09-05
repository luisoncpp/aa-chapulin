// @Architecture(descriptionShort="Case 4 day-3 intro and Rufino baccarat testimony", type="data", icon="layers")
/**
 * Case 4 Trial Day 3 — Opening (GIRO 2) and Testimony 5 (Rufino Rufián).
 */

import type { DialogueLine, OpeningPresent, Testimony } from '../../../types/index.js';
import {
  CASE4_D3_T1_BOLETA_SUCCESS, CASE4_D3_T1_REGISTRO_FOLLOWUP, CASE4_DAY3_OPENING_PRESENT_SUCCESS
} from './trial_day3_success.js';

export const CASE4_DAY3_INTRO: DialogueLine[] = [
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: '¡Se abre la última sesión plenaria! Comparece en estrados el señor Rufino Rufián, huésped de la Suite 204.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'RUFINO', pose: 'rufino_smug', text: 'Protesto enérgicamente por este atropello a mi alcurnia y reputación. Mi estancia en el baccarat entre las 10:30 y las 11:30 PM ha sido certificada por la gerencia.' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Time is money! ¡No podemos molestar a un noble inversionista sin un móvil probado!', sfx: 'desk_slam' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_slam', text: '¡La defensa demostrará que el supuesto conde es un peligroso timador y que la víctima vino al hotel a cobrarle una cuenta mortal!', cutin: 'objection_protesto', sfx: 'desk_slam', bgm: 'objection' }
];

export const CASE4_DAY3_OPENING_PRESENT: OpeningPresent = {
  evidence: ['nota_amenaza'],
  prompt: '¿Qué prueba demuestra el móvil de extorsión entre la víctima y Rufino?',
  successDialogue: CASE4_DAY3_OPENING_PRESENT_SUCCESS
};

export const CASE4_TESTIMONY_5: Testimony = {
  title: 'Testimonio: Mi Coartada Inquebrantable en el Baccarat',
  witness: 'Rufino Rufián',
  bgm: 'cross_exam_presto',
  statements: [
    {
      id: 'd3_t1_1',
      speaker: 'RUFINO',
      pose: 'rufino_monocle',
      text: 'Desconozco absolutamente a ese maleante de cicatriz y sus presuntas extorsiones.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿Asegura que no conocía al difunto señor Gómez ni a su alias de El Cuajinais?', pose: 'donramon_idle' },
        { speaker: 'RUFINO', text: 'Por favor, leguleyo. Un Conde de Montemayor sólo alterna con ministros plenipotenciarios y duquesas europeas. No tengo tratos con bribones de barriada.', pose: 'rufino_monocle' },
        { speaker: 'SUPER SAM', text: '¡A gentleman of high society! ¡Una acusación infame contra el capital internacional!', pose: 'supersam_point' }
      ]
    },
    {
      id: 'd3_t1_2',
      speaker: 'RUFINO',
      pose: 'rufino_smug',
      text: 'Mi noche transcurrió de manera ininterrumpida en la mesa de baccarat de 10:30 a 11:30 PM ante testigos de honor.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿Afirma bajo juramento que no se levantó de su asiento en la mesa de baccarat ni un solo segundo en toda esa hora?', pose: 'donramon_idle' },
        { speaker: 'RUFINO', text: 'Por supuesto. Un aristócrata de mi categoría jamás interrumpe una racha afortunada en el paño verde. Sesenta minutos continuos de juego limpio de 10:30 a 11:30 PM ante la atenta mirada de diplomáticos y del propio croupier.', pose: 'rufino_smug' },
        { speaker: 'DEFENSA', text: '(Sesenta minutos continuos sin despegarse del paño verde... Habrá que ver si los registros oficiales de apuestas dicen lo mismo.)', pose: 'donramon_idle' }
      ],
      contradiction: {
        evidence: ['boleta_baccarat'],
        successDialogue: CASE4_D3_T1_BOLETA_SUCCESS,
        followUp: {
          evidence: ['registro_montacargas'],
          prompt: '¿Qué registro del hotel demuestra el traslado del cadáver al tercer piso?',
          successDialogue: CASE4_D3_T1_REGISTRO_FOLLOWUP
        }
      }
    },
    {
      id: 'd3_t1_3',
      speaker: 'RUFINO',
      pose: 'rufino_monocle',
      text: 'Jamás toqué el montacargas de servicio del personal; mi estatus me prohíbe operar maquinaria rústica.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Dice que no usó el montacargas... pero ese elevador de equipaje tiene paradas directas junto a su Suite 204 y la Suite 304.', pose: 'donramon_idle' },
        { speaker: 'RUFINO', text: '¡Insensateces! Operar palancas grasientas es labor de peones y lacayos. Un noble no ensucia sus puños de encaje con maquinaria de servicio.', pose: 'rufino_monocle' },
        { speaker: 'DEFENSA', text: '(A menos que necesite transportar un fardo de ochenta kilos sin cruzarse con nadie por las escaleras...)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'd3_t1_4',
      speaker: 'RUFINO',
      pose: 'rufino_smug',
      text: 'A las 11:15 PM, cuando se oyó la detonación, yo me encontraba apostando sobre el paño verde.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'A las 11:15 PM exactamente, ¿qué hacía usted?', pose: 'donramon_idle' },
        { speaker: 'RUFINO', text: 'Estaba doblando mi apuesta en la banca y recogiendo fichas de marfil. Si el edificio crujió por las tuberías, apenas mereció una mirada despectiva de mis distinguidos contertulios.', pose: 'rufino_smug' },
        { speaker: 'SUPER SAM', text: 'Coartada de hierro a prueba de balas, Your Honor!', pose: 'supersam_slam', sfx: 'desk_slam' }
      ]
    }
  ]
};
