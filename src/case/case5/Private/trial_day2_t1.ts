// @Architecture(descriptionShort="Case 5 day-2 Señor Barriga testimony", type="data", icon="layers")
/**
 * Case 5 Trial Day 2 — Testimony 4, Señor Barriga (spec §13.2).
 */

import type { DialogueLine, Testimony } from '../../../types/index.js';
import { CASE5_D2_T1_NOTA_SUCCESS, CASE5_D2_T1_RECIBO_SUCCESS } from './trial_day2_success.js';

const MOMENTO: DialogueLine = {
  speaker: 'DEFENSA',
  text: '¡UN MOMENTO!',
  cutin: 'objection_un_momento',
  sfx: 'whoosh',
  pose: 'chapulin_point'
};

export const CASE5_TESTIMONY_4: Testimony = {
  title: 'Testimonio: El sobre del veintinueve',
  witness: 'Señor Barriga',
  bgm: 'cross_exam_moderato',
  statements: [
    {
      id: 'c5_d2t1_1',
      speaker: 'BARRIGA',
      pose: 'barriga_idle',
      text: 'El veintinueve de noviembre, a las nueve de la mañana, encontré un sobre amarillo debajo de mi puerta.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿A las nueve en punto?', pose: 'chapulin_point' },
        { speaker: 'BARRIGA', text: 'A las nueve. Desayuno antes de esa hora y salgo por el periódico a las nueve en punto desde 1954.', pose: 'barriga_idle' },
        { speaker: 'DEFENSA', text: 'Entonces el sobre pudo estar ahí desde la madrugada.', pose: 'chapulin_idle' },
        { speaker: 'BARRIGA', text: 'Pudo. Yo no duermo en la puerta, joven.', pose: 'barriga_enojado' },
        { speaker: 'DEFENSA', text: '(Nadie vio nada. Como siempre que las cosas están bien hechas.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d2t1_2',
      speaker: 'BARRIGA',
      pose: 'barriga_idle',
      text: 'Adentro venían diecisiete mensualidades en efectivo. Cuatro mil doscientos cincuenta pesos, en billetes nuevecitos.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Billetes nuevos?', pose: 'chapulin_point' },
        { speaker: 'BARRIGA', text: 'Nuevecitos. De los de cien, con la banda del banco todavía puesta en dos fajos.', pose: 'barriga_shock' },
        { speaker: 'JUEZ', text: '¿Con banda de banco?', pose: 'judge_thinking' },
        { speaker: 'BARRIGA', text: 'Con banda. Yo la guardé porque tenía un número. Se la di al Sargento.', pose: 'barriga_idle' },
        { speaker: 'SARGENTO', text: 'Y yo la rastreé, señor juez. Retiro de ventanilla del veintiséis de noviembre. Cuenta a nombre de una sindicatura.', pose: 'pazguato_decidido' },
        { speaker: 'NARRADOR', text: 'Murmullo.', sfx: 'realization' },
        { speaker: 'BERRONDO', text: 'Señor juez, con la venia: ese retiro es mío y está declarado.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'Retiré cinco mil pesos el veintiséis para pagar honorarios de un notario en efectivo, cosa fea pero corriente.', pose: 'berrondo_idle' },
        { speaker: 'BERRONDO', text: 'El notario extendió factura y la tengo aquí. ¿La agrego?', pose: 'berrondo_idle' },
        { speaker: 'JUEZ', text: '...Agréguela.', pose: 'judge_thinking' },
        { speaker: 'DEFENSA', text: '(Contesta antes de que le pregunten. Y contesta bien.)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(Cinco mil menos cuatro mil doscientos cincuenta son setecientos cincuenta pesos. ¿Cuánto cobra un notario?)', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(Ese pedacito no me lo va a contestar hoy. Me lo guardo.)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d2t1_3',
      speaker: 'BARRIGA',
      pose: 'barriga_idle',
      text: 'Y venía una nota a máquina, diciéndome que expidiera el recibo y que no hacía falta contestar.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Léale la nota a la corte, señor Barriga.', pose: 'chapulin_point' },
        { speaker: 'BARRIGA', text: '«Adjunto el pago de diecisiete mensualidades vencidas a cargo del C. Ramón Valdés, inquilino de la vivienda 72.»', pose: 'barriga_idle' },
        { speaker: 'BARRIGA', text: '«Se ruega expedir el recibo correspondiente y conservarlo. No se requiere respuesta.»', pose: 'barriga_idle' },
        { speaker: 'JUEZ', text: '¿«Se ruega»?', pose: 'judge_thinking' },
        { speaker: 'BARRIGA', text: 'Se ruega, señor juez. Así dice.', pose: 'barriga_idle' },
        { speaker: 'DEFENSA', text: '(Y «conservarlo». ¿Por qué le importaría a nadie que el casero guarde el recibo?)', pose: 'chapulin_idle' }
      ]
    },
    {
      id: 'c5_d2t1_4',
      speaker: 'BARRIGA',
      pose: 'barriga_idle',
      text: 'Hice el recibo esa misma mañana y se lo entregué al señor Ramón ese lunes, en el patio, delante de dos vecinas.',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: '¿Qué cara puso mi cliente cuando le dio el recibo?', pose: 'chapulin_point' },
        { speaker: 'BARRIGA', text: 'Cara de susto.', pose: 'barriga_shock' },
        { speaker: 'BARRIGA', text: 'Yo le dije «gracias, señor Ramón» y él me dijo «¿gracias de qué?» y se quedó parado como poste.', pose: 'barriga_idle' },
        { speaker: 'SUPER SAM', text: '¡Actuación! ¡Yo también sé poner cara de poste!', pose: 'supersam_point' },
        { speaker: 'DON RAMÓN', text: 'Póngala usted, señor fiscal, a ver si le sale.', pose: 'donramon_idle' },
        { speaker: 'SUPER SAM', text: '¡...No pienso poner cara de poste en mi propio juicio!', pose: 'supersam_sweat' },
        { speaker: 'JUEZ', text: 'Lástima.', pose: 'judge_thinking' }
      ]
    },
    {
      id: 'c5_d2t1_5',
      speaker: 'BARRIGA',
      pose: 'barriga_idle',
      text: 'Yo no vi a nadie. Pero tenía que ser él. ¿Quién más le iba a pagar la renta al señor Ramón?',
      pressText: [
        MOMENTO,
        { speaker: 'DEFENSA', text: 'Señor Barriga, ¿usted quiere que condenen a Don Ramón?', pose: 'chapulin_point' },
        { speaker: 'BARRIGA', text: '¡Claro que no!', pose: 'barriga_shock' },
        { speaker: 'BARRIGA', text: 'Si lo encierran, ¿a quién le cobro? Uno no le cobra la renta a un preso.', pose: 'barriga_enojado' },
        { speaker: 'BARRIGA', text: 'Yo nomás estoy diciendo lo único que se me ocurre, joven, porque no se me ocurre otra cosa.', pose: 'barriga_idle' },
        { speaker: 'DEFENSA', text: '(Eso es exactamente lo que está pasando, señor juez. Y no es lo mismo que declarar.)', pose: 'chapulin_idle' }
      ],
      contradiction: {
        evidence: ['nota_mecanografiada'],
        successDialogue: CASE5_D2_T1_NOTA_SUCCESS,
        followUp: {
          evidence: ['recibo_renta'],
          prompt: '¿De quién dijo el testigo que recibía ese dinero?',
          successDialogue: CASE5_D2_T1_RECIBO_SUCCESS
        }
      }
    }
  ]
};
