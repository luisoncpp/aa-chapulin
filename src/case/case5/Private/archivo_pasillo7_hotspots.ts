// @Architecture(descriptionShort="Case 5 day 1 pasillo 7 examine hotspots and day close", type="data", icon="layers")
/**
 * Caso 5, Día 1 — puntos de interés del pasillo 7. Spec §10.3.
 * Silueta, tomo y estante van pintados en el fondo para Examinar.
 */

import type { Hotspot } from '../../../types/index.js';

export const CASE5_PASILLO7_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot_cuerpo',
    label: 'Silueta del cuerpo',
    x: 38, y: 54, w: 26, h: 26,
    dialogue: [
      { speaker: 'NARRADOR', text: 'Una silueta de gis en el piso, entre el estante y la mesa de consulta. Boca abajo, con la cabeza hacia el estante.' },
      { speaker: 'DEFENSA', text: 'Cayó de frente. Con la cara hacia los libros.', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Golpe único en la nuca, mi Licenciado. El forense está preparando una ampliación sobre la dirección y el modo del impacto.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: '¿Y la hora?', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'Entre las cinco y las cinco y media. Le tomaron la temperatura a las seis cuarenta.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: 'Sargento, ¿usted no siente que aquí hace un calor de fritanga?', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Sí, pero el forense no vino a sentir. Vino a medir.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: '(Ahí está el detalle... o a lo mejor no. Me lo apunto de todos modos.)', pose: 'chapulin_idle', addEvidence: 'informe_forense_c5' }
    ]
  },
  {
    id: 'hotspot_tomo',
    label: 'Tomo caído',
    x: 54, y: 82, w: 18, h: 16,
    dialogue: [
      { speaker: 'NARRADOR', text: 'A un metro de la silueta, marcado con un cartelito de perito, un tomo grueso encuadernado en tela verde.' },
      { speaker: 'DEFENSA', text: '«El Saber Universal. Tomo XI. Ferrocarriles - Guatemala.»', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: 'Tiene sangre en el lomo.', pose: 'chapulin_panic' },
      { speaker: 'SARGENTO', text: 'Dos kilos ochocientos. Es el arma, mi Licenciado. La fiscalía ya lo fotografió, lo marcó y ordenó que quedara aquí bajo resguardo; yo tengo la ficha pericial.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: '¿Y este sellito morado de la primera hoja?', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Ni idea. Está medio borrado y tiene letra chiquita. Con la lupa del Acta a lo mejor lo lee usted.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: '(Lo miro con calma más tarde. Ahorita lo que me importa es que a este señor lo mataron con un libro.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(Con un libro, Chapulín. Con un libro.)', pose: 'chapulin_panic', addEvidence: 'tomo_caido' }
    ]
  },
  {
    id: 'hotspot_estante',
    label: 'Estante de consulta',
    x: 54, y: 6, w: 46, h: 72,
    dialogue: [
      { speaker: 'NARRADOR', text: 'Un estante de madera oscura pegado al muro, con las ranuras numeradas del 1 al 24 en cartoncitos.' },
      { speaker: 'DEFENSA', text: 'Una colección completa. Del uno al veinticuatro.', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(A ver... uno, dos, tres... doce... catorce...)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: 'Sargento, aquí falta uno. La ranura trece está vacía.', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'Ésa lleva vacía desde antes que yo naciera, mi Licenciado. Me lo dijo el conserje.', pose: 'pazguato_idle' },
      { speaker: 'SARGENTO', text: 'Dice que ese tomo se anunció y nunca se imprimió. Que le pasó a toda la colección del país.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: '¿Y entonces no falta ninguno?', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Ninguno. Veintitrés tomos y el hueco de siempre. Lo conté tres veces porque no me lo creía.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: '¡Pero si el arma es un tomo de esta colección! ¡Si lo sacaron de aquí tendría que faltar otro!', pose: 'chapulin_panic' },
      { speaker: 'SARGENTO', text: 'Por eso lo conté tres veces.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: '(Veintitrés tomos en el estante y uno más en el suelo. Veinticuatro tomos para veinticuatro ranuras... y una ranura vacía.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(Las cuentas no me salen y no sé por qué. Me llevo el estante entero al Acta.)', pose: 'chapulin_idle', addEvidence: 'estante_consulta' }
    ]
  },
  {
    id: 'hotspot_mesa',
    label: 'Mesa de consulta',
    // Cierra la jornada (campana + salida a la sala). Se mantiene oculto hasta que
    // cuerpo, tomo y estante estén examinados para que el cierre no se adelante.
    condition: (flags) => Boolean(flags.examined_hotspot_cuerpo)
      && Boolean(flags.examined_hotspot_tomo)
      && Boolean(flags.examined_hotspot_estante),
    x: 0, y: 4, w: 34, h: 58,
    dialogue: [
      { speaker: 'NARRADOR', text: 'Una mesa larga de roble con una lámpara de pantalla verde. Sobre ella, un legajo abierto y atado con listón.' },
      { speaker: 'DEFENSA', text: 'Es el expediente del señor Lengua. Su apelación.', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: 'Y está abierto en la página doscientos catorce.', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'Ahí lo dejó él. Nadie ha pasado esa hoja, mi Licenciado; tengo la fotografía de las siete de la noche y está igualita.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: 'En la página doscientos catorce hay una tarjeta pegada con engrudo.', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '«Enciclopedias El Saber Universal, S.A.» Prueba decomisada al sentenciado en julio.', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Esa sociedad está disuelta desde el setenta y uno. Lo dice ahí abajito, de puño y letra del secretario.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: '(Un hombre al que le quedaban cuatro años de condena pidió que lo trajeran hasta aquí para señalar una tarjeta vieja.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(Y lo mataron antes de que llegara el actuario.)', pose: 'chapulin_panic', addEvidence: 'expediente_casimiro' },
      { speaker: 'SARGENTO', text: 'Mi Licenciado. Una cosa más y ya me callo.', pose: 'pazguato_sweat' },
      { speaker: 'SARGENTO', text: 'La fiscalía me pidió el libro de visitas y yo se lo di.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: '¿Y le pidieron algo más?', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: '...No, mi Licenciado. Me pidieron ése y nada más.', pose: 'pazguato_sweat' },
      { speaker: 'SARGENTO', text: 'Y yo contesto lo que me preguntan. Ése es mi defecto y también mi virtud.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: '(Catorce firmas de visitas. Y nadie ha preguntado todavía quién entró sin ser visita.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(Ya preguntaré yo, Sargento. Delante del juez.)', pose: 'chapulin_point' },
      { speaker: 'NARRADOR', text: 'Suena la campana del juzgado, al otro lado de la calle.', sfx: 'bell' },
      { speaker: 'DEFENSA', text: '¡Síganme los buenos! ¡A la sala de audiencias!', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'A sus órdenes, mi Licenciado.', pose: 'pazguato_saludo' }
    ]
  }
];
