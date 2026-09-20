// @Architecture(descriptionShort="Case 5 day-3 Super Sam testimony", type="data", icon="layers")
/**
 * Case 5 Trial Day 3 — Testimony 7, Super Sam (spec §15.3). BGM cross_exam_grave (§23.7).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE5_D3_T2_EXPEDIENTE_SUCCESS, CASE5_D3_T2_OFICIO_SUCCESS } from './trial_day3_success_sam.js';

const MOMENTO: DialogueLine = {
  speaker: 'DEFENSA',
  text: '¡UN MOMENTO!',
  cutin: 'objection_un_momento',
  sfx: 'whoosh',
  pose: 'chapulin_point'
};

export const CASE5_TESTIMONY_7: Testimony = {
  title: 'Testimonio: Lo que cobré en agosto',
  witness: 'Super Sam',
  bgm: 'cross_exam_grave',
  statements: [
    {
      id: 'c5_d3t2_1',
      speaker: 'SUPER SAM',
      pose: 'supersam_idle',
      text: 'Recibí el oficio de la víctima el ocho de noviembre. Lo puse en un cajón y lo tuve dieciocho días.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Dieciocho días. ¿Por qué?', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'Porque un preso que ofrece un fichero a cambio de menos condena me llega todas las semanas, counselor.', pose: 'supersam_idle' },
        { speaker: 'SUPER SAM', text: 'Y porque ese preso en particular lo había condenado yo mismo y lo había condenado mal.', pose: 'supersam_sweat' },
        { speaker: 'JUEZ', text: '¿Mal?', pose: 'judge_thinking' },
        { speaker: 'SUPER SAM', text: 'Lo condené acusando al hombre equivocado durante dos tercios del juicio, Your Honor. Usted estaba ahí.', pose: 'supersam_sweat' },
        { speaker: 'SUPER SAM', text: 'Uno no vuelve con gusto a un expediente donde quedó como un imbécil.', pose: 'supersam_sweat' }
      ]
    },
    {
      id: 'c5_d3t2_2',
      speaker: 'SUPER SAM',
      pose: 'supersam_idle',
      text: 'El veintiséis lo saqué, y fijé la diligencia para el sábado cuatro de diciembre a las cinco de la tarde, porque el sábado el traslado cuesta la mitad.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿El sábado cuesta la mitad?', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'Sábado, sin público, sin horas extra del actuario, con dos custodios de guardia que ya están pagados.', pose: 'supersam_idle' },
        { speaker: 'SUPER SAM', text: 'Ahorré cuatrocientos ochenta pesos, counselor.', pose: 'supersam_sweat' },
        { speaker: 'DEFENSA', text: 'Y dejó ese edificio vacío.', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: '...Y dejé ese edificio vacío.', pose: 'supersam_sweat' },
        { speaker: 'DON RAMÓN', text: '(No lo remate, joven.)', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(No pensaba, Don Ramón. Yo también he ahorrado en cosas que luego me salieron caras.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d3t2_3',
      speaker: 'SUPER SAM',
      pose: 'supersam_idle',
      text: 'Nadie más supo de esa diligencia. Un oficio de la fiscalía no se publica en el periódico.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Nadie? ¿Ni el actuario?', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'El actuario, la dirección del Archivo y yo. Tres personas.', pose: 'supersam_idle' },
        { speaker: 'DEFENSA', text: '¿Y los custodios?', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: 'Los custodios se enteran la mañana del traslado. Es política.', pose: 'supersam_idle' },
        { speaker: 'DEFENSA', text: 'Entonces, según usted, el sábado por la mañana lo sabían cinco personas.', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: 'Cinco. Y ninguna de ellas mató a nadie.', pose: 'supersam_point' },
        { speaker: 'DEFENSA', text: '(Cinco personas... y una lista de distribución que él firmó sin leer.)', pose: 'chapulin_idle' }
      ],
      contradiction: {
        evidence: ['oficio_diligencia'],
        successDialogue: CASE5_D3_T2_OFICIO_SUCCESS,
        followUp: {
          evidence: ['expediente_serie'],
          prompt: '¿Cómo se llamaba, en agosto, lo que le pagaron al fiscal?',
          successDialogue: CASE5_D3_T2_EXPEDIENTE_SUCCESS
        }
      }
    },
    {
      id: 'c5_d3t2_4',
      speaker: 'SUPER SAM',
      pose: 'supersam_idle',
      text: 'Y ahora lo mío. El veintiuno de agosto de este año, alguien me pagó por llegar rápido a un museo y cerrar el caso en cinco minutos.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Señor fiscal, usted no tiene por qué decir esto.', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'Lo sé, counselor.', pose: 'supersam_idle' },
        { speaker: 'DEFENSA', text: 'Le pueden quitar la cédula.', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: 'También lo sé.', pose: 'supersam_idle' },
        { speaker: 'DEFENSA', text: '¿Entonces por qué?', pose: 'chapulin_panic' },
        { speaker: 'SUPER SAM', text: 'Porque hay un hombre muerto que me escribió el ocho de noviembre y yo lo dejé dieciocho días en un cajón.', pose: 'supersam_sweat' },
        { speaker: 'SUPER SAM', text: 'Y porque si no lo digo yo hoy, mañana lo va a tener que sacar usted a golpes, y eso me cuesta más caro.', pose: 'supersam_idle' },
        { speaker: 'NARRADOR', text: 'Silencio absoluto.' }
      ]
    },
    {
      id: 'c5_d3t2_5',
      speaker: 'SUPER SAM',
      pose: 'supersam_idle',
      text: 'Fue una vez. No tuvo nombre, no tuvo recibo y no se lo vendí a nadie. Fue un sobre, una hora y una bolsa de lona.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Cuánto había en esa bolsa?', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'Diez mil pesos en moneda de plata. Seis kilos.', pose: 'supersam_idle' },
        { speaker: 'DEFENSA', text: '¿Y quién se la dejó?', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: 'No lo sé. Apareció en un callejón, a la hora que decía el sobre, con mi propia bolsa de lona sellada por mi propia fiscalía.', pose: 'supersam_sweat' },
        { speaker: 'SUPER SAM', text: 'Eso fue lo que más me asustó, counselor: que usaran mi bolsa. Alguien entró a mi oficina.', pose: 'supersam_sweat' },
        { speaker: 'DEFENSA', text: '¿Y qué decía el sobre?', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'Una hora y una dirección. A máquina.', pose: 'supersam_idle' },
        { speaker: 'DEFENSA', text: '(A máquina.)', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: '¿Lo conserva?', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: 'Lo quemé en agosto.', pose: 'supersam_sweat' },
        { speaker: 'SUPER SAM', text: 'Y ésa, counselor, es la única cosa de todo esto de la que de veras me arrepiento.', pose: 'supersam_sweat' }
      ]
    },
    {
      id: 'c5_d3t2_6',
      speaker: 'SUPER SAM',
      pose: 'supersam_idle',
      text: 'Desde entonces cargo esa bolsa vacía. No por remordimiento. Por contabilidad.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿«Por contabilidad»?', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: 'Una bolsa vacía pesa cuatrocientos gramos, counselor. Un hombre que carga cuatrocientos gramos todos los días se acuerda todos los días.', pose: 'supersam_idle' },
        { speaker: 'SUPER SAM', text: 'A eso, en mi tierra, le llaman amortización.', pose: 'supersam_sweat' },
        { speaker: 'DEFENSA', text: 'En la mía le llaman conciencia.', pose: 'chapulin_idle' },
        { speaker: 'SUPER SAM', text: 'En la suya todo sale más barato.', pose: 'supersam_idle' }
      ]
    }
  ]
};
