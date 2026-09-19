// @Architecture(descriptionShort="Case 5 day-2 Lic. Berrondo testimony", type="data", icon="layers")
/**
 * Case 5 Trial Day 2 — Testimony 5, Lic. Berrondo (spec §13.3). BGM cross_exam_grave (§23.7).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import {
  CASE5_D2_T2_EXPEDIENTE_SUCCESS, CASE5_D2_T2_LIBRO_SUCCESS, POINT_EXPEDIENTE_SERIE
} from './trial_day2_success.js';

const MOMENTO: DialogueLine = {
  speaker: 'DEFENSA',
  text: '¡UN MOMENTO!',
  cutin: 'objection_un_momento',
  sfx: 'whoosh',
  pose: 'chapulin_point'
};

export const CASE5_TESTIMONY_5: Testimony = {
  title: 'Testimonio: Lo que administro y lo que vendo',
  witness: 'Lic. Berrondo',
  bgm: 'cross_exam_grave',
  statements: [
    {
      id: 'c5_d2t2_1',
      speaker: 'BERRONDO',
      pose: 'berrondo_idle',
      text: 'Soy síndico de la quiebra 114 diagonal 1971, Enciclopedias El Saber Universal, sociedad anónima, desde el 9 de marzo de ese año.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Once años con un concurso abierto. ¿No es mucho?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'Es muchísimo, licenciado, y es culpa de una acreedora de Tacubaya que se niega a cobrar cuarenta pesos por principio.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'Mientras ella no cobre, el concurso no se cierra. Mientras no se cierre, los bienes siguen en depósito.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'Y mientras sigan en depósito, yo sigo respondiendo de ellos. Con mi firma y con mi patrimonio.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '(Cuarenta pesos. Un negocio de once años colgado de cuarenta pesos que una señora no quiere cobrar.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d2t2_2',
      speaker: 'BERRONDO',
      pose: 'berrondo_idle',
      text: 'Entre los bienes de esa masa hay un cedulario de once mil cuatrocientas tarjetas, inventariado, sellado y depositado en el sótano del Archivo Judicial.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Cuántas veces baja usted a ese sótano?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'Dos veces al mes, en promedio. Los jueves.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '¿Los jueves?', pose: 'chapulin_idle' },
        { speaker: 'BERRONDO', text: 'Los jueves. Es el día en que el Archivo no recibe público en el sótano y se puede trabajar.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '¿Y qué hace usted ahí abajo?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'Reviso, cuento, cotejo y firmo. Un depositario que no cuenta es un depositario que va a la cárcel.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '(Once años bajando los jueves a un sótano del juzgado. Y nadie le ha preguntado nunca por qué.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d2t2_3',
      speaker: 'BERRONDO',
      pose: 'berrondo_idle',
      text: 'Vendo copias de esa información a quien la pide y la paga. Es lícito, está declarado y pago impuestos por ello.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Y no le da a usted ninguna vergüenza?', pose: 'chapulin_point' },
        { speaker: 'SUPER SAM', text: '¡OBJECTION! ¡La vergüenza no es un hecho!', pose: 'supersam_slam', sfx: 'desk_slam' },
        { speaker: 'JUEZ', text: '...Concedido, aunque a esta corte le habría gustado la respuesta.', pose: 'judge_thinking' },
        { speaker: 'BERRONDO', text: 'Contesto igual, señor juez, si me lo permite.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'No. No me da vergüenza. Yo vendo domicilios y hábitos de pago.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'Los compran cobradores, abogados, aseguradoras y tres periódicos. Uno de ellos es el que publicó el caso de su cliente en agosto.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '¿Y si se la compra un ladrón?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'Entonces el ladrón roba, licenciado, y el ladrón responde.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'Yo no le puse la mano en la puerta a nadie.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '(Y eso, señor juez, es exactamente lo malo.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d2t2_4',
      speaker: 'BERRONDO',
      pose: 'berrondo_idle',
      text: 'No conozco ni he conocido a ninguno de los sentenciados cuyos expedientes la defensa ha estado hojeando. Ni siquiera a la víctima.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Ni a la víctima? ¡Fue distribuidor de su propia empresa!', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'De la empresa que liquidé, licenciado. Que no es mi empresa: es mi expediente.', pose: 'berrondo_definicion' },
        { speaker: 'BERRONDO', text: 'Ciento diez distribuidores. Yo llegué cuando ya estaban despedidos. Para mí eran una partida del pasivo laboral.', pose: 'berrondo_idle' },
        { speaker: 'JUEZ', text: '¿No recuerda usted ni una cara?', pose: 'judge_shock' },
        { speaker: 'BERRONDO', text: 'Ni una, señor juez. Y lo lamento sinceramente, porque anoche lo intenté durante dos horas.', pose: 'berrondo_idle' },
        { speaker: 'DON RAMÓN', text: '(...Chapulín.)', pose: 'donramon_shock' },
        { speaker: 'DON RAMÓN', text: '(El señor Lengua hablaba igualito que ese señor.)', pose: 'donramon_idle' },
        { speaker: 'DEFENSA', text: '(¿Igualito cómo?)', pose: 'chapulin_idle' },
        { speaker: 'DON RAMÓN', text: '(Definiendo palabras que nadie preguntó, joven. Con latín y todo.)', pose: 'donramon_sweat' },
        { speaker: 'DON RAMÓN', text: '(Yo creí que era una manía de vendedor. Y resulta que era de dónde la copió.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'c5_d2t2_5',
      speaker: 'BERRONDO',
      pose: 'berrondo_idle',
      text: 'Y el cuatro de diciembre entré a las dieciséis cero cinco, revisé el huacal nueve y salí a las dieciséis cincuenta. Consta en el libro.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Y a qué fue usted ese día al sótano?', pose: 'chapulin_point' },
        { speaker: 'BERRONDO', text: 'A revisar el huacal nueve, porque una diligencia iba a tocarlo.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '¿Sabía usted que iba a haber una diligencia?', pose: 'chapulin_panic' },
        { speaker: 'BERRONDO', text: 'Naturalmente. Un bien de la masa no se toca sin notificar al síndico; es lo primero que se estudia en concursal.', pose: 'berrondo_definicion' },
        { speaker: 'DEFENSA', text: '(Contesta que sí sin que le tiemble nada. Porque es verdad y porque es legal.)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '¿Y salió a las cuatro cincuenta?', pose: 'chapulin_idle' },
        { speaker: 'BERRONDO', text: 'A las dieciséis cincuenta. Está en el libro, licenciado. Léalo usted.', pose: 'berrondo_idle' },
        { speaker: 'DEFENSA', text: '(Eso voy a hacer.)', pose: 'chapulin_idle' }
      ],
      contradiction: {
        evidence: ['libro_peritos'],
        successDialogue: CASE5_D2_T2_LIBRO_SUCCESS,
        followUp: {
          evidence: ['expediente_serie'],
          prompt: '¿Qué tienen en común cinco casos que no se conocen entre sí?',
          successDialogue: CASE5_D2_T2_EXPEDIENTE_SUCCESS,
          pointTarget: POINT_EXPEDIENTE_SERIE
        }
      }
    }
  ]
};
