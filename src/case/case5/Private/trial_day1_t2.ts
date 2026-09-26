// @Architecture(descriptionShort="Case 5 day-1 Sargento testimony two", type="data", icon="layers")
/**
 * Case 5 Trial Day 1 — Testimony 2, El Sargento (spec §11.3).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE5_D1_T2_PARTE_SUCCESS, CASE5_D1_T2_TARJETA_SUCCESS } from './trial_day1_success.js';

const MOMENTO: DialogueLine = {
  speaker: 'DEFENSA',
  text: '¡UN MOMENTO!',
  cutin: 'objection_un_momento',
  sfx: 'whoosh',
  pose: 'chapulin_point'
};

export const CASE5_TESTIMONY_2: Testimony = {
  title: 'Testimonio: La secuencia que asenté',
  witness: 'El Sargento',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'c5_d1t2_1',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'Recibí el aviso a las cinco treinta y ocho y llegué a las cinco cincuenta y dos con el forense.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Catorce minutos de camino. ¿Por qué tan rápido?', pose: 'chapulin_point' },
        { speaker: 'SARGENTO', text: 'Porque el Archivo está cruzando la calle del juzgado, mi Licenciado. Digo, licenciado. Digo... perdón.', pose: 'pazguato_sweat' },
        { speaker: 'SUPER SAM', text: '¡Your salary is cut!', pose: 'supersam_point' },
        { speaker: 'SARGENTO', text: 'Ya no, señor fiscal. Desde octubre cobro por escalafón.', pose: 'pazguato_decidido' },
        { speaker: 'SUPER SAM', text: '...¿Desde cuándo?', pose: 'supersam_sweat' },
        { speaker: 'SARGENTO', text: 'Desde que usted firmó mi ascenso sin leerlo.', pose: 'pazguato_decidido' },
        { bg: 'assets/bg_gallery_characters.webp', furniture: 'none', speaker: 'NARRADOR', text: 'Risas en la galería.', sfx: 'realization' },
        { speaker: 'JUEZ', text: '¡Orden!', sfx: 'gavel', pose: 'judge_gavel' }
      ]
    },
    {
      id: 'c5_d1t2_2',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'El cuerpo estaba boca abajo entre el estante siete y la mesa de consulta, con la cabeza hacia el estante.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿La cabeza hacia el estante?', pose: 'chapulin_point' },
        { speaker: 'SARGENTO', text: 'Hacia el estante. Los pies hacia la mesa. Cayó de frente, como quien va caminando y se apaga.', pose: 'pazguato_idle' },
        { speaker: 'DEFENSA', text: 'O sea que estaba de espaldas a quien le pegó.', pose: 'chapulin_idle' },
        { speaker: 'SARGENTO', text: 'De espaldas y sentado, licenciado. La silla quedó volcada hacia atrás.', pose: 'pazguato_idle' },
        { speaker: 'DEFENSA', text: '(Sentado. Leyendo. Con la lámpara prendida y un expediente abierto.)', pose: 'chapulin_panic' },
        { speaker: 'DON RAMÓN', text: '(Estaba esperando al actuario. Me lo dijo: «Yo aquí espero».)', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'c5_d1t2_3',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'A un metro, el Tomo XI de una enciclopedia, con sangre en el lomo. Lo fotografié antes de tocarlo.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Descríbame el golpe, Sargento.', pose: 'chapulin_point' },
        { speaker: 'SARGENTO', text: 'Uno solo. En la nuca. El informe preliminar sólo fija un canto recto de cuatro centímetros.', pose: 'pazguato_idle' },
        { speaker: 'DEFENSA', text: '¿Y con cuánta fuerza?', pose: 'chapulin_idle' },
        { speaker: 'SARGENTO', text: 'Todavía no consta si el objeto se blandió o se aplicó de otra manera. Pedí al forense que amplíe el análisis de las marcas.', pose: 'pazguato_sweat' },
        { speaker: 'JUEZ', text: '¿Está pendiente esa ampliación, entonces?', pose: 'judge_shock' },
        { speaker: 'SARGENTO', text: 'Sí, señor juez. No quiero confundir lo que vimos con lo que aún tiene que concluir el perito.', pose: 'pazguato_idle' },
        { speaker: 'DEFENSA', text: '(Un canto recto de cuatro centímetros. Necesito el modo del golpe, no sólo el tamaño de la marca.)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(Ojalá llegue esa ampliación antes de que se cierre el juicio de hoy.)', pose: 'chapulin_panic' }
      ]
    },
    {
      id: 'c5_d1t2_4',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'En la mano derecha traía cerrada una esquina de tarjeta, con un domicilio escrito a máquina.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Esa esquina de tarjeta. ¿Estaba apretada?', pose: 'chapulin_point' },
        { speaker: 'SARGENTO', text: 'La mano estaba cerrada, licenciado. Eso lo asenté.', pose: 'pazguato_idle' },
        { speaker: 'DEFENSA', text: 'No le pregunté por la mano. Le pregunté por el papel.', pose: 'chapulin_point' },
        { speaker: 'SARGENTO', text: '...El papel estaba liso.', pose: 'pazguato_sweat' },
        { speaker: 'JUEZ', text: '¿Liso?', pose: 'judge_thinking' },
        { speaker: 'SARGENTO', text: 'Liso, señor juez. Sin una arruga. Yo lo saqué con pinzas y lo puse en un sobre y se me hizo raro, pero uno asienta, no opina.', pose: 'pazguato_decidido' },
        { speaker: 'DEFENSA', text: '(Asiente usted, Sargento. Opino yo.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d1t2_5',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: 'Les tomé declaración a los custodios del pasillo. Los dos me dijeron que en toda la tarde no subió nadie más que el acusado.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Los dos custodios?', pose: 'chapulin_point' },
        { speaker: 'SARGENTO', text: 'Los dos. Alfredo Rangel y Jesús Nieto. Los dos dijeron lo mismo.', pose: 'pazguato_idle' },
        { speaker: 'DEFENSA', text: '¿Y estuvieron en la reja del pasillo toda la tarde?', pose: 'chapulin_idle' },
        { speaker: 'SARGENTO', text: '...Toda la tarde, sí. Bueno.', pose: 'pazguato_sweat' },
        { speaker: 'SARGENTO', text: 'Señor juez, ¿le puedo agregar una cosa a mi declaración? Es que si no lo digo no duermo.', pose: 'pazguato_sweat' },
        { speaker: 'JUEZ', text: '¡La corte quiere oír eso! Testigo, agregue esa declaración a su testimonio.', sfx: 'gavel', pose: 'judge_gavel' },
        { speaker: 'NARRADOR', text: 'Se ha añadido una nueva declaración al testimonio.', sfx: 'realization' }
      ]
    },
    {
      id: 'c5_d1t2_6',
      speaker: 'SARGENTO',
      pose: 'pazguato_idle',
      text: '...A los dos pares de custodios, señor juez. Porque a las cinco en punto hubo relevo.',
      unlockedBy: 'c5_d1t2_5',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Relevo?', pose: 'chapulin_point' },
        { speaker: 'SARGENTO', text: 'Relevo de turno, licenciado. Rangel y Nieto entregaron a las cinco. Los que entraron fueron Cadena y Solís.', pose: 'pazguato_idle' },
        { speaker: 'DEFENSA', text: '¿Y a qué hora llegaron Cadena y Solís a la reja?', pose: 'chapulin_point' },
        { speaker: 'SARGENTO', text: '...Eso ya no me lo dijeron a mí. Eso está en la hoja de relevo.', pose: 'pazguato_sweat' },
        { speaker: 'SUPER SAM', text: '¡Irrelevante! ¡Un cambio de turno dura lo que dura un saludo!', pose: 'supersam_slam', sfx: 'desk_slam' },
        { speaker: 'DEFENSA', text: '(Un saludo. Vamos a ver cuánto dura un saludo en este país.)', pose: 'chapulin_idle' }
      ],
      contradiction: {
        evidence: ['hoja_relevo'],
        successDialogue: CASE5_D1_T2_PARTE_SUCCESS,
        followUp: {
          evidence: ['esquina_tarjeta'],
          prompt: '¿Cómo llegó ese papel a la mano de la víctima?',
          successDialogue: CASE5_D1_T2_TARJETA_SUCCESS
        }
      }
    }
  ]
};
