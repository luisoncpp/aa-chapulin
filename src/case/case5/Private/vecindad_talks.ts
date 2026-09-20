// @Architecture(descriptionShort="Case 5 day 2 vecindad Barriga talk options and unlock", type="data", icon="layers")
/**
 * Caso 5, Día 2 — conversaciones con el Señor Barriga. Spec §12.1.
 */

import type { TalkOption } from '../../../types/index.js';

export const CASE5_VECINDAD_TALKS: TalkOption[] = [
  {
    id: 'vio_alguien',
    label: '¿Vio usted a alguien?',
    dialogue: [
      { speaker: 'BARRIGA', text: 'A nadie, joven. Yo estaba desayunando. Salí por el periódico y ahí estaba el sobre.', pose: 'barriga_idle' },
      { speaker: 'DEFENSA', text: '¿A qué hora?', pose: 'chapulin_idle' },
      { speaker: 'BARRIGA', text: 'Nueve en punto. Salgo por el periódico a las nueve desde 1954.', pose: 'barriga_idle' },
      { speaker: 'DEFENSA', text: '(Otro señor con horario. En esta ciudad todos tienen horario menos yo.)', pose: 'chapulin_idle' }
    ]
  },
  {
    id: 'que_hizo_dinero',
    label: '¿Qué hizo con el dinero?',
    unlockedByTalk: 'vio_alguien',
    dialogue: [
      { speaker: 'BARRIGA', text: 'Guardé esos mismos billetes en la caja fuerte de mi despacho. Diecisiete mensualidades, joven: cuatro mil doscientos cincuenta pesos. Eso no se guarda bajo el colchón.', pose: 'barriga_idle' },
      { speaker: 'DEFENSA', text: '¿Y el recibo?', pose: 'chapulin_idle' },
      { speaker: 'BARRIGA', text: 'Lo hice esa misma mañana y se lo di al señor Ramón el lunes en el patio. Le dije «gracias» y él puso una cara rarísima.', pose: 'barriga_sorpresa' },
      { speaker: 'DEFENSA', text: '¿Qué escribió usted en el concepto?', pose: 'chapulin_point' },
      { speaker: 'BARRIGA', text: 'Lo que pasó. «Recibí de tercero no identificado, a cuenta del inquilino.»', pose: 'barriga_idle' },
      { speaker: 'DEFENSA', text: '¿Por qué no puso el nombre de Don Ramón?', pose: 'chapulin_idle' },
      { speaker: 'BARRIGA', text: 'Porque no me lo dio él, joven. Yo seré casero, pero no soy mentiroso.', pose: 'barriga_reclamo' },
      { speaker: 'DEFENSA', text: '(Este señor acaba de escribir, sin querer, la mejor prueba de la defensa. Y va a subir al estrado a decir que fue Don Ramón.)', pose: 'chapulin_idle' }
    ]
  },
  {
    id: 'porque_donramon',
    label: '¿Y por qué cree que fue Don Ramón?',
    unlockedByTalk: 'que_hizo_dinero',
    dialogue: [
      { speaker: 'BARRIGA', text: '¿Pues quién más iba a pagar la renta del señor Ramón?', pose: 'barriga_idle' },
      { speaker: 'DEFENSA', text: 'No lo sé. Eso es lo que vengo a averiguar.', pose: 'chapulin_idle' },
      { speaker: 'BARRIGA', text: 'Joven, yo no quiero que metan al señor Ramón a la cárcel. Me debe diecisiete meses.', pose: 'barriga_sorpresa' },
      { speaker: 'BARRIGA', text: '...Me DEBÍA. Ay, ya ni sé.', pose: 'barriga_confundido' },
      { speaker: 'DEFENSA', text: 'Señor Barriga, ¿me presta ese sobre y la nota?', pose: 'chapulin_point' },
      { speaker: 'BARRIGA', text: 'Llévese lo que quiera menos el recibo, que es mi comprobante fiscal.', pose: 'barriga_idle' },
      { speaker: 'DEFENSA', text: 'Llévame una copia entonces.', pose: 'chapulin_idle' },
      { speaker: 'BARRIGA', text: 'Dos pesos la copia.', pose: 'barriga_reclamo' },
      { speaker: 'DEFENSA', text: '¡Se aprovechan de mi nobleza!', pose: 'chapulin_panic' },
      { speaker: 'DEFENSA', text: '(Una nota a máquina, sin firma, escrita por alguien que sabe cómo se redacta un oficio.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(¿Y quién redacta oficios todo el día? Los juzgados.)', pose: 'chapulin_point', unlockLocation: 'correspondencia' }
    ]
  }
];
