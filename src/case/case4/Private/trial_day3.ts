// @Architecture(descriptionShort="Case 4 day-3 intro and Rufino maintenance testimony", type="data", icon="layers")
/**
 * Case 4 Trial Day 3 — Opening (§12.1, no openingPresent) and Testimony 5 (§12.2).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE4_D3_T1_ORDEN_SUCCESS, CASE4_ORDEN_POINT_TARGET } from './trial_day3_success.js';

export const CASE4_DAY3_INTRO: DialogueLine[] = [
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: 'Se abre la última sesión de este proceso. Recapitulemos lo probado.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'La muerte se produjo por un tóxico en el vino, dentro de la ventana de la autopsia.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'El disparo y el estruendo fueron un montaje posterior a la muerte, conforme a la autopsia y al traslado ya acreditados.' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Y sigue en pie la pregunta que la defensa no me ha contestado en tres días: ¿quién le puso algo a esa botella? El acusado la cargó con sus dos manos.', sfx: 'desk_slam' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'También cargó un baúl sin saber lo que iba adentro. Que uno cargue una cosa no dice qué le hicieron a esa cosa, señor fiscal.' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Poetry, counselor. La poesía no cotiza.' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'La defensa reconoce que el señor Rufián estaba en el salón de juego a las 23:15.' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_idle', text: 'Lo reconoce, señor juez. Esa coartada es verdadera y no la vamos a discutir. Sólo que cubre el ruido... y el ruido no mató a nadie.' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Entonces la fiscalía mantiene su cuenta: el vino salió alterado de las manos que lo transportaron.' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_sweat', text: '(Tercer día, Monchito. Ya nomás falta la botella. Nada más la botella.)' },
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_neutral', text: 'Escucharemos al señor Rufián sobre su propia intervención.' }
];

/** Spec §12.1: sin openingPresent; la boleta se lee sin presentar. */
export const CASE4_DAY3_OPENING_PRESENT: undefined = undefined;

export const CASE4_TESTIMONY_5: Testimony = {
  title: 'Testimonio: Mi parte en esta desgracia',
  witness: 'Rufino Rufián',
  bgm: 'cross_exam_presto',
  statements: [
    {
      id: 'd3_t1_1',
      speaker: 'RUFINO',
      pose: 'rufino_smug',
      text: 'Encontré al señor Gómez muerto en mi habitación y perdí la cabeza un momento. A un hombre de mi apellido no lo educan para eso.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'RUFINO', text: 'No preciso la hora en que lo encontré. Su relato sigue siendo compatible con la ventana forense.', pose: 'rufino_sweat' }
      ]
    },
    {
      id: 'd3_t1_2',
      speaker: 'RUFINO',
      pose: 'rufino_smug',
      text: 'Lo subí dentro de mi baúl, preparé la escena y disparé sobre un hombre que ya estaba muerto. Ayer admití lo primero; hoy admito lo demás, porque no pienso cargar con lo que no hice.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'El revólver era del propio Gómez, que lo llevaba encima. El padrón registra esa arma a nombre del difunto y por eso quedó en la habitación.', pose: 'pazguato_saludo' }
      ]
    },
    {
      id: 'd3_t1_3',
      speaker: 'RUFINO',
      pose: 'rufino_smug',
      text: 'Pero la botella llegó de afuera. Yo la recibí cerrada, de las manos de ese empleado.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'RUFINO', text: 'Admito que estuve solo con la botella cerrada entre la entrega y la llegada de mi invitado. Lo digo como quien no ve el problema.', pose: 'rufino_sweat' }
      ]
    },
    {
      id: 'd3_t1_4',
      speaker: 'RUFINO',
      pose: 'rufino_smug',
      text: 'Y yo no pedí que subiera él al baño. Solicité un fontanero. A cuál mandaban lo decidió el hotel.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'RUFINO', text: 'La asignación del empleado fue decisión del hotel. Yo ni siquiera conocía su nombre.', pose: 'rufino_monocle' }
      ],
      contradiction: {
        evidence: ['orden_servicios'],
        pointTarget: CASE4_ORDEN_POINT_TARGET,
        successDialogue: CASE4_D3_T1_ORDEN_SUCCESS
      }
    }
  ]
};
