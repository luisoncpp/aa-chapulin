// @Architecture(descriptionShort="Case 4 day-2 courtroom intro and Maruja testimony", type="data", icon="layers")
/**
 * Case 4 Trial Day 2 — Opening (§10.1) and Testimony 3, Maruja (§10.2).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import {
  CASE4_D2_T1_CASQUILLO_HALF, CASE4_D2_T1_PLANO_HALF,
  CASE4_D2_T1_RUTA_A_SUCCESS, CASE4_D2_T1_RUTA_B_SUCCESS, CASE4_PLANO_POINT_TARGET
} from './trial_day2_success.js';

export const CASE4_DAY2_INTRO: DialogueLine[] = [
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Se reanuda la audiencia.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'New theory, Your Honor, y ésta viene con factura. La toxicología dice veneno. El acusado cargó el vino y traía pleito con el difunto.' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_slam', text: '¡Un fontanero envenenador! Ya me imagino el encabezado. Y los encabezados también cuestan dinero.', sfx: 'desk_slam' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_slam', text: '¡PROTESTO! Entre la entrega de esa botella y la copa que se sirvió hubo otro cuarto y otras manos.', sfx: 'desk_slam' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Prove it, counselor.' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'A eso vine. Ayer le desarmé una hipótesis; hoy vengo con tiempo para la segunda.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Escucharemos a quien vio abrir esa botella. Y de paso quiero saber por qué esta sala oyó un disparo a una hora en la que ya no había a quién disparar.' }
];

export const CASE4_TESTIMONY_3: Testimony = {
  title: 'Testimonio: La copa y el estruendo',
  witness: 'Maruja',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'd2_t1_1',
      speaker: 'MARUJA',
      pose: 'maruja_idle',
      text: 'Vi al fontanero entregar la botella en la puerta de la 204. El señor conde firmó el recibo sin quitarse el monóculo.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'MARUJA', text: 'Acompañé a Rufino desde recepción, vi el anillo en su mano y observé la entrega. Botija se retiró sin entrar; no hubo préstamo del anillo ni otra entrega de objetos.', pose: 'maruja_coqueta' }
      ]
    },
    {
      id: 'd2_t1_2',
      speaker: 'MARUJA',
      pose: 'maruja_idle',
      text: 'Después volví con el señor Gómez. Él mismo destapó la botella y se sirvió una copa. Insistió en destaparla él, como todos los hombres.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'MARUJA', text: 'Salí a buscar a Cuajinais por una deuda de juego. Dejé a Rufino solo con la botella entre ambas visitas.', pose: 'maruja_nerviosa' },
        { speaker: 'MARUJA', text: 'Cuajinais insistió en abrirla personalmente y me regaló el cierre, que guardé antes de que él bebiera y entregué al Sargento al día siguiente.', pose: 'maruja_idle' }
      ]
    },
    {
      id: 'd2_t1_3',
      speaker: 'MARUJA',
      pose: 'maruja_idle',
      text: 'Más tarde vino el estruendo, y ese estruendo nació dentro de la 304. Yo estaba pegada a esa pared y lo sentí en los huesos.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'MARUJA', text: 'Vibró sobre todo el radiador. No vi humo ni a un tirador dentro de la 304.', pose: 'maruja_nerviosa' }
      ],
      contradiction: {
        evidence: ['plano_hotel'],
        pointTarget: { ...CASE4_PLANO_POINT_TARGET, promptQuestion: '¿Qué conexión permite que un ruido de otra habitación llegue hasta la 304?' },
        successDialogue: CASE4_D2_T1_PLANO_HALF,
        followUp: {
          evidence: ['casquillo_fogueo'],
          prompt: '¿Qué objeto acredita que se produjo allí un efecto sin proyectil?',
          successDialogue: CASE4_D2_T1_RUTA_A_SUCCESS
        }
      }
    },
    {
      id: 'd2_t1_4',
      speaker: 'MARUJA',
      pose: 'maruja_idle',
      text: 'Así que a las once y cuarto había alguien adentro de esa habitación accionando un arma. No hay de otra.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'MARUJA', text: 'El hecho observado fue el ruido. La presencia de un tirador es mi inferencia.', pose: 'maruja_nerviosa' }
      ],
      contradiction: {
        evidence: ['casquillo_fogueo'],
        successDialogue: CASE4_D2_T1_CASQUILLO_HALF,
        followUp: {
          evidence: ['plano_hotel'],
          pointTarget: CASE4_PLANO_POINT_TARGET,
          prompt: '¿Cómo llegó ese sonido hasta la habitación señalada por la testigo?',
          successDialogue: CASE4_D2_T1_RUTA_B_SUCCESS
        }
      }
    }
  ]
};
