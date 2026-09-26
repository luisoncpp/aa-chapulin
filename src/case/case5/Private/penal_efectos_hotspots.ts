// @Architecture(descriptionShort="Case 5 day 3 penal effects locker hotspot and day close", type="data", icon="layers")
/**
 * Caso 5, Día 3 — punto de interés de la bodega de efectos personales. Spec §14.3.
 * Cierra la jornada entregando `efectos_casimiro`.
 */

import type { Hotspot } from '../../../types/index.js';

export const CASE5_PENAL_EFECTOS_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot_caja',
    label: 'Caja 214-J',
    x: 8, y: 42, w: 34, h: 40,
    dialogue: [
      { speaker: 'NARRADOR', text: 'Dentro de la caja: dos relojes de pulsera parados, un moño de corbata, una libreta de pasta negra y un papel carbón doblado en cuatro.' },
      { speaker: 'DEFENSA', text: 'Dos relojes.', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Uno por brazo, dice el registro. Los dos parados en la misma hora.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: '(Dos relojes que ya no le sirven a nadie.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: 'El papel carbón es la copia de un oficio.', pose: 'chapulin_point' },
      { speaker: 'DEFENSA', text: '«Ciudadano agente del ministerio público. El suscrito, interno, ofrece entregar a esa representación social un fichero...»', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '«...a cambio de que se estudie la reducción de mi condena. 8 de noviembre.»', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Y la libreta, mi Licenciado. Léala. Yo ya la leí y por eso traigo esta cara.', pose: 'pazguato_decidido' },
      { speaker: 'NARRADOR', text: 'La libreta está escrita con letra pequeña y apretadísima, con márgenes y con subrayados.' },
      { speaker: 'NARRADOR', text: '«Tomo primero. De la máquina.»' },
      { speaker: 'NARRADOR', text: '«Punto uno. La tarjeta que me decomisaron en julio tiene la ese caída. La miré nueve años, renglón por renglón.»' },
      { speaker: 'NARRADOR', text: '«Punto dos. La ficha del museo que salió en el periódico en agosto tiene la ese caída. Se ve en la fotografía, aunque esté borrosa.»' },
      { speaker: 'NARRADOR', text: '«Punto tres. Las escribió el mismo aparato. Un aparato no se corrige solo: se corrige con un mecánico, y nadie llamó al mecánico en once años.»' },
      { speaker: 'NARRADOR', text: '«Punto cuatro. Yo sé dónde está ese aparato porque yo tecleé en él de 1962 a 1971, y no lo han movido.»' },
      { speaker: 'NARRADOR', text: '«Punto cinco. Lo que no sé es cómo decirlo sin que parezca que me quiero salvar. Y me quiero salvar.»' },
      { speaker: 'DEFENSA', text: '...Sargento.', pose: 'chapulin_panic' },
      { speaker: 'SARGENTO', text: 'Dígame, mi Licenciado.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: 'Este hombre estaba haciendo mi trabajo.', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Lo estaba haciendo desde el ocho de noviembre.', pose: 'pazguato_decidido' },
      { speaker: 'SARGENTO', text: 'Y lo mataron a doce metros de la máquina, guardada en el sótano, el día que por fin le hicieron caso.', pose: 'pazguato_decidido', addEvidence: 'efectos_casimiro' },
      { speaker: 'DEFENSA', text: '(Tengo la máquina. Tengo las tarjetas. Tengo cinco expedientes. Tengo un libro sin columna de salida.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(Y no tengo absolutamente nada, porque todo eso es legal.)', pose: 'chapulin_panic' },
      { speaker: 'SARGENTO', text: 'Mi Licenciado. ¿Le puedo decir algo que no es de policía?', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: 'Dígame.', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'El señor Ramón me cae mal desde el Caso del Grito. Me dijo «poli» tres veces.', pose: 'pazguato_idle' },
      { speaker: 'SARGENTO', text: 'Y si mañana lo condenan, yo me voy a pasar el resto de mi vida sabiendo que tuve el libro de peritos en la mano el primer día y no lo entregué.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: 'Sargento, usted no hizo nada mal.', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Yo no hice nada, mi Licenciado. Que es distinto y es peor.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: '¡Síganme los buenos, Sargento!', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'A sus órdenes, mi Licenciado.', pose: 'pazguato_saludo' }
    ]
  }
];
