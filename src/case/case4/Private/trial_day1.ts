// @Architecture(descriptionShort="Case 4 day-1 courtroom intro and Sargento testimony", type="data", icon="layers")
/**
 * Case 4 Trial Day 1 — Opening and Testimony 1 (El Sargento).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import {
  CASE4_D1_T1_FOLLOWUP_SUCCESS, CASE4_D1_T1_POINT_SUCCESS, CASE4_D1_T1_POINT_TARGET
} from './trial_day1_success.js';

export const CASE4_TRIAL_INTRO: DialogueLine[] = [
  { bg: 'assets/bg_judge.webp', speaker: 'JUEZ', pose: 'judge_gavel', text: '¡Silencio en este tribunal! Se abre la vista preliminar contra el ciudadano Gordon Botija Pompa y Pompa por el delito de homicidio calificado y robo.', sfx: 'gavel', bgm: 'trial' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Time is money, Your Honor! ¡Este proceso no requiere más de diez minutos de deliberación!', sfx: 'desk_slam' },
  { bg: 'assets/bg_courtroom.webp', speaker: 'SUPER SAM', pose: 'supersam_point', text: 'El inculpado fue sorprendido en flagrancia dentro de un cuarto cerrado por dentro con cadena de latón, con las manos empapadas en pólvora y la billetera del occiso en su bolsillo. ¡Pido sentencia condenatoria antes del cierre de Wall Street!' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_slam', text: '¡PROTESTO! ¡Con permisito, dijo Monchito!', sfx: 'desk_slam' },
  { bg: 'assets/bg_defense.webp', speaker: 'DEFENSA', pose: 'donramon_point', text: '¡La defensa demostrará que esa supuesta recámara hermética fue un truco de magia montado por un tercero para inculpar a un humilde fontanero!' }
];

export const CASE4_TESTIMONY_1: Testimony = {
  title: 'Testimonio: El Hallazgo en la Suite 304',
  witness: 'El Sargento',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'd1_t1_1',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'A las 11:15 PM en punto escuchamos un disparo de arma de fuego procedente del tercer piso.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿Cómo está tan seguro del minutero exacto, Sargento?', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: '¡Porque miré mi reloj de pulso reglamentario en cuanto sonó el trallazo metálico en las tuberías!', pose: 'pazguato_saludo' },
        { speaker: 'DEFENSA', text: 'De modo que las 11:15 PM es cuando usted oyó el ruido... no necesariamente cuando ocurrió el disparo.', pose: 'donramon_idle' },
        { speaker: 'SUPER SAM', text: 'Objection! Time is money! ¡Ruido de balazo y hora de disparo son la misma cosa aquí y en Manhattan!', pose: 'supersam_slam', sfx: 'desk_slam' }
      ]
    },
    {
      id: 'd1_t1_2',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'Al subir con la gerencia, encontramos la puerta de la Suite 304 trabada por dentro con la cadena de seguridad.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿La puerta abría algo o estaba completamente sellada?', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: 'Abría apenas unos cuatro centímetros... lo justo para ver el perno dorado de la cadena atrancado en el riel de latón.', pose: 'pazguato_sweat' },
        { speaker: 'DEFENSA', text: 'Cuatro centímetros... suficiente para meter la mano... o un hilo.', pose: 'donramon_idle' },
        { speaker: 'SUPER SAM', text: '¡Nadie tiene manos de papel para colarse por cuatro centímetros, letrado!', pose: 'supersam_point' }
      ]
    },
    {
      id: 'd1_t1_3',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'Tras forzar la entrada, vimos el cuerpo sin vida y la cubeta con vino recién servida junto al cadáver.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿Y afirma usted que el vino y el hielo estaban recién puestos en la mesita?', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: '¡Totalmente! La fotografía oficial que tomé a las 11:30 PM documenta la escena intacta quince minutos después del crimen.', pose: 'pazguato_saludo' },
        { speaker: 'JUEZ', text: 'El Sargento afirma que el servicio de bebidas estaba fresco... Esto debe constar en autos.', pose: 'judge_thinking' }
      ]
    },
    {
      id: 'd1_t1_3b',
      speaker: 'SARGENTO',
      pose: 'pazguato_sweat',
      text: 'La escena estaba fresca a las 11:30 PM: la cubeta con hielo y el vino acababan de servirse en la suite.',
      unlockedBy: 'd1_t1_3',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: 'Sargento, insisto: ¿observó con atención los témpanos dentro de esa cubeta antes de dar por sentado que estaban recién servidos?', pose: 'donramon_sweat' },
        { speaker: 'SARGENTO', text: 'Bueno, mi Licenciado... Con el alboroto del fiambre, la chimenea y el Botija metido en el cesto, yo vi el balde de metal reluciente y di por hecho que los cubitos estaban recién salidos del congelador.', pose: 'pazguato_sweat' },
        { speaker: 'SUPER SAM', text: 'Time is money! ¡Un balde de hielo es un balde de hielo! ¡Deje de marear la perdiz con cubitos de agua y presente una contradicción si la tiene!', pose: 'supersam_slam', sfx: 'desk_slam' }
      ],
      contradiction: {
        evidence: ['foto_crimen'],
        pointTarget: CASE4_D1_T1_POINT_TARGET,
        successDialogue: CASE4_D1_T1_POINT_SUCCESS,
        followUp: {
          evidence: ['informe_policial'],
          prompt: '¿Tiene alguna prueba documental que desacredite la hora registrada en el reporte policial?',
          successDialogue: CASE4_D1_T1_FOLLOWUP_SUCCESS
        }
      }
    },
    {
      id: 'd1_t1_4',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'Oculto en el cesto de la ropa estaba el acusado, con las manos tiznadas y la billetera de la víctima.',
      pressText: [
        { speaker: 'DEFENSA', text: '¡UN MOMENTO!', cutin: 'objection_un_momento', sfx: 'whoosh', pose: 'donramon_point' },
        { speaker: 'DEFENSA', text: '¿Revisó si faltaba dinero o si la billetera estaba abierta cuando atraparon a Botija?', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: 'La billetera estaba cerrada. La abrí en presencia del fiscal y tenía doscientos pesos en billetes de curso legal... intactos.', pose: 'pazguato_saludo' },
        { speaker: 'DEFENSA', text: '(Doscientos pesos enteros... Un ladrón se habría llevado los billetes antes de esconderse.)', pose: 'donramon_idle' },
        { speaker: 'SUPER SAM', text: '¡No intente justificarlo! ¡Botija no tuvo tiempo de vaciarla porque llegamos en diez segundos!', pose: 'supersam_point' }
      ]
    }
  ]
};
