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
    x: 34, y: 58, w: 28, h: 22,
    dialogue: [
      { speaker: 'NARRADOR', text: 'Una silueta de gis en el piso, entre el estante y la mesa de consulta. Boca abajo, con la cabeza hacia el estante.' },
      { speaker: 'DEFENSA', text: 'Cayó de frente. Con la cara hacia los libros.', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Golpe único en la nuca, mi Licenciado. El legista está preparando una ampliación sobre la dirección y el modo del impacto.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: '¿Y la hora?', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'Entre las cinco y las cinco y media. Le tomaron la temperatura a las seis cuarenta.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: 'Sargento, ¿usted no siente que aquí hace un calor de fritanga?', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Sí, pero el legista no vino a sentir. Vino a medir.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: '(Ahí está el detalle... o a lo mejor no. Me lo apunto de todos modos.)', pose: 'chapulin_idle', addEvidence: 'informe_forense_c5' }
    ]
  },
  {
    id: 'hotspot_tomo',
    label: 'Tomo caído',
    x: 48, y: 62, w: 16, h: 14,
    dialogue: [
      { speaker: 'NARRADOR', text: 'A un metro de la silueta, marcado con un cartelito de perito, un tomo grueso encuadernado en tela verde.' },
      { speaker: 'DEFENSA', text: '«El Saber Universal. Tomo XI. Ferrocarriles - Guatemala.»', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: 'Tiene sangre en el canto del lomo.', pose: 'chapulin_panic' },
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
    x: 6, y: 18, w: 22, h: 58,
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
    x: 58, y: 38, w: 32, h: 28,
    dialogue: [
      { speaker: 'NARRADOR', text: 'Una mesa larga de roble con una lámpara de pantalla verde. Sobre ella, un legajo abierto y atado con listón.' },
      { speaker: 'DEFENSA', text: 'Es el expediente del señor Lengua. Su apelación.', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: 'Y está abierto en la foja doscientos catorce.', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'Ahí lo dejó él. Nadie ha pasado esa hoja, mi Licenciado; tengo la fotografía de las siete de la noche y está igualita.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: 'En la foja doscientos catorce hay una tarjeta pegada con engrudo.', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '«Enciclopedias El Saber Universal, S.A.» Prueba decomisada al sentenciado en julio.', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Esa sociedad está disuelta desde el setenta y uno. Lo dice ahí abajito, de puño y letra del secretario.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: '(Un hombre al que le quedaban cuatro años de condena pidió que lo trajeran hasta aquí para señalar una tarjeta vieja.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(Y lo mataron antes de que llegara el actuario.)', pose: 'chapulin_panic', addEvidence: 'expediente_casimiro' },
      { speaker: 'SARGENTO', text: 'Mi Licenciado. Una cosa más y ya me callo.', pose: 'pazguato_sweat' },
      { speaker: 'SARGENTO', text: 'La fiscalía me pidió el libro de visitas y yo se lo di.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: '¿Y el otro?', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: '¿Cuál otro?', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: 'El de peritos. El de la puerta del costado.', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: '...Nadie me lo pidió.', pose: 'pazguato_sweat' },
      { speaker: 'SARGENTO', text: 'Y yo no lo ofrecí, porque «visitas» son las visitas y peritos son peritos.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: '(No lo diga en el juicio, Sargento. Deje que se les ocurra a ellos.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(Y si no se les ocurre, ya me encargo yo.)', pose: 'chapulin_point' },
      { speaker: 'NARRADOR', text: 'Suena la campana del juzgado, al otro lado de la calle.', sfx: 'bell' },
      { speaker: 'DEFENSA', text: '¡Síganme los buenos! ¡A la sala de audiencias!', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'A sus órdenes, mi Licenciado.', pose: 'pazguato_saludo' }
    ]
  }
];
