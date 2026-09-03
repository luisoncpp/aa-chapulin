// @Architecture(descriptionShort="Case 2 day-1 courtroom intro and Florinda testimony", type="data", icon="layers")
/**
 * Case 2 Trial Day 1 — Opening and Testimony 1 (Doña Florinda).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';

export const CASE2_TRIAL_INTRO: DialogueLine[] = [
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: '¡Silencio en la sala! Se abre la sesión del tribunal superior.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'La fiscalía puede presentar sus cargos en contra del acusado Aquiles Esquivel Madrazo.' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Time is money, Your Honor!', sfx: 'desk_slam' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'El acusado fue sorprendido in fraganti dentro de la bóveda a las 10:00 PM con la herramienta del delito en sus manos. ¡Exijo un veredicto de culpabilidad en 3 minutos!' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_slam', text: '¡PROTESTO! ¡La defensa demostrará que todo este caso es un vil montaje!', sfx: 'desk_slam' },
  { bg: 'assets/bg_defense.webp', speaker: 'CHAPULIN', pose: 'chapulin_point', text: '¡Síganme los buenos! ¡No permitiremos que condenen a un inocente!' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Que pase al estrado el primer testigo de la fiscalía.' }
];

const T1_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: '¡Con permisito, dijo Monchito! ¡Doña Florinda, su afirmación de la hora es absolutamente imposible!', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'What?! ¡El reloj digital del pasillo marcaba las 10:00 PM! Time is money!', pose: 'supersam_point' },
  { speaker: 'DEFENSA', text: "¡Miren este 'Reloj de Péndulo Dañado' rescatado del interior de la bóveda!", sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'DEFENSA', text: 'Este reloj es electromecánico centralizado. Cuando a las 9:15 PM alguien forzó la caja del generador, ¡se quedó sin energía y se detuvo a las 9:15 PM!', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: '¡Cáspita! ¿Significa que la energía se cortó tres cuartos de hora antes?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: '¡Exacto! Quien restableció la corriente reprogramó el reloj digital a las 10:00 PM. ¡El robo comenzó a las 9:15 PM en completa oscuridad!', pose: 'donramon_idle' },
  { speaker: 'FLORINDA', text: '¡Ay, Dios mío! ¡¿Entonces a las 9:15 PM ya estaban robando la hacienda?!', pose: 'florinda_shock' },
  { speaker: 'SUPER SAM', text: 'Grrr... Un simple desfase horario no exime al acusado de haber reventado la caja. ¡Llamo al estrado al señor Peterete!', pose: 'supersam_sweat' }
];

export const CASE2_TESTIMONY_1: Testimony = {
  title: 'Testimonio: El Descubrimiento a las 10:00 PM',
  witness: 'Doña Florinda',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'stmt1_1',
      speaker: 'FLORINDA',
      pose: 'florinda_idle',
      text: 'Anoche a las 10:00 PM en punto, mientras terminaba de limpiar el salón del restaurante, sonó la alarma general.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿Cómo tiene tanta certeza de que eran las 10:00 PM?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: '¡Porque acababa de mirar el reloj eléctrico digital del pasillo, ignorante!', pose: 'florinda_angry' }
      ]
    },
    {
      id: 'stmt1_2',
      speaker: 'FLORINDA',
      pose: 'florinda_idle',
      text: 'Corrí de inmediato hacia la bóveda subterránea acompañada por el respetable jefe de seguridad, el señor Peterete.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'FLORINDA', text: '¡El señor Peterete llegó al vestíbulo casi al mismo tiempo que yo! ¡Un profesional!', pose: 'florinda_idle' }
      ]
    },
    {
      id: 'stmt1_3',
      speaker: 'FLORINDA',
      pose: 'florinda_angry',
      text: 'La puerta estaba entreabierta y vimos al acusado de pie frente a la caja fuerte vacía con su palanca de fierro.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿El Chómpiras estaba despierto o consciente?', pose: 'donramon_idle' },
        { speaker: 'FLORINDA', text: 'Bueno... parecía mareado o atontado, ¡pero la chusma siempre tiene esa cara de despistada!', pose: 'florinda_angry' }
      ]
    },
    {
      id: 'stmt1_4',
      speaker: 'FLORINDA',
      pose: 'florinda_idle',
      text: 'Hasta el reloj de péndulo de la pared de la bóveda marcaba las 10:00 PM, confirmando la hora exacta de la fechoría.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'FLORINDA', text: '¡Lo vi con estos ojos! Las manecillas decían las diez en punto.', pose: 'florinda_idle' }
      ],
      contradiction: {
        evidence: ['reloj_pendulo', 'caja_generador'],
        successDialogue: T1_SUCCESS
      }
    }
  ]
};
