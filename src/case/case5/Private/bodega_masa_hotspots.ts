// @Architecture(descriptionShort="Case 5 day 3 bodega examine hotspots and location unlock", type="data", icon="layers")
/**
 * Caso 5, Día 3 — puntos de interés de la bodega de bienes. Spec §14.1.
 * Huacal, cajones y máquina van pintados en el fondo para Examinar.
 */

import type { Hotspot } from '../../../types/index.js';

const BODEGA_BG = 'assets/bg_bodega_masa.webp';
const PLATE_HUACAL = 'assets/plate_huacal_sellos.webp';

export const CASE5_BODEGA_MASA_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot_huacal',
    label: 'Tapa del huacal 9',
    x: 70, y: 56, w: 24, h: 38,
    dialogue: [
      { speaker: 'NARRADOR', text: 'La tapa está cubierta de tiras de papel sellado encabalgadas unas sobre otras, como escamas. Cada una lleva una rúbrica y una fecha.' },
      { speaker: 'DEFENSA', text: 'Una... dos... cincuenta... cien...', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'Más de doscientas cincuenta, licenciado. Más de doscientas cincuenta aperturas desde 1971.', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: 'Cada vez que se abre un depósito hay que sellarlo de nuevo, y el sello nuevo se pega encima del anterior, sin quitarlo.', pose: 'berrondo_definicion' },
      { speaker: 'BERRONDO', text: 'Es para que cualquiera pueda contar la historia del huacal sin abrirlo.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '¿Y la de hasta arriba?', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: 'La de hasta arriba es mía y es del cuatro de diciembre. Ya lo declaré ayer bajo protesta.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '(Ya lo declaró. Antes de que se lo preguntaran. Otra vez.)', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Mi Licenciado, ¿le fotografío la tapa entera?', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: 'Fotografíemela, Sargento. Y cuéntelas usted también.', pose: 'chapulin_idle', addEvidence: 'huacal_9' },
      { speaker: 'NARRADOR', text: 'Sellado de un bien en depósito judicial. Una tira de papel engomado cruza la junta de la tapa.', bg: PLATE_HUACAL, furniture: 'none' },
      { speaker: 'NARRADOR', text: 'Quien abre firma la tira nueva y la pega encima de la anterior, sin retirar ninguna.', bg: PLATE_HUACAL, furniture: 'none' },
      { speaker: 'NARRADOR', text: 'La pila de tiras es el historial del depósito: cuántas veces se abrió, cuándo y quién.', bg: PLATE_HUACAL, furniture: 'none' },
      { speaker: 'NARRADOR', text: 'El Chapulín vuelve a la bodega.', bg: BODEGA_BG, furniture: 'none' }
    ]
  },
  {
    id: 'hotspot_cajones',
    label: 'Cajones del cedulario',
    x: 44, y: 46, w: 28, h: 24,
    dialogue: [
      { speaker: 'NARRADOR', text: 'Dentro del huacal, nueve cajones de madera rubia con tiradores de latón y una etiqueta manuscrita en cada frente.' },
      { speaker: 'DEFENSA', text: '«Aguascalientes a Bucareli.» «Bucareli a Donceles.» «Donceles a Espanto.»', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '...Están ordenadas por calle.', pose: 'chapulin_panic' },
      { speaker: 'BERRONDO', text: 'Por calle, licenciado. Una editorial de crédito a domicilio no vende a personas: vende a domicilios.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '¿Y cuántas hay?', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'Once mil cuatrocientas siete, al último corte.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '¿Siete más?', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: 'Siete altas y once bajas desde el remate. Las bajas se marcan inactivas, pero no se sacan del cajón. Los domicilios se mueren también, licenciado.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '(Siete altas. Este fichero no está muerto. Este fichero crece.)', pose: 'chapulin_panic' },
      { speaker: 'SARGENTO', text: 'Señor juez... digo, mi Licenciado: ¿me llevo los nueve cajones a la delegación?', pose: 'pazguato_decidido' },
      { speaker: 'BERRONDO', text: 'Le pido que no, Sargento. Es un depósito judicial bajo mi responsabilidad y responde a mi firma.', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: 'Pero le ofrezco algo mejor: que los selle la corte y los deje aquí, y que se abra el cajón que la corte pida, cuando lo pida.', pose: 'berrondo_idle' },
      { speaker: 'SARGENTO', text: '...Eso es más correcto que lo que yo iba a hacer.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: '(Once mil cuatrocientas siete tarjetas y hay que pedirlas por calle.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(Si no sé qué calle buscar, es lo mismo que si estuvieran en el fondo del mar.)', pose: 'chapulin_idle', addEvidence: 'fichero_cedulario' }
    ]
  },
  {
    id: 'hotspot_maquina',
    label: 'Máquina de escribir',
    x: 56, y: 70, w: 22, h: 18,
    condition: (flags) => Boolean(flags.examined_hotspot_huacal) && Boolean(flags.examined_hotspot_cajones),
    dialogue: [
      { speaker: 'NARRADOR', text: 'En el fondo del huacal, envuelta en una funda de hule, una máquina de escribir negra con el carro cromado.' },
      { speaker: 'DEFENSA', text: '«Olivetti Lexikon 80.» Y tiene un número pintado con plantilla en el costado: cuarenta y uno.', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'Partida 41 del inventario. Como le dije ayer en mi despacho.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '¿Puedo?', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'Puede mirar. No puede escribir: cualquier huella de uso altera un bien en depósito.', pose: 'berrondo_definicion' },
      { speaker: 'DEFENSA', text: '(La cinta está gastada hasta la tela. Esta máquina ha escrito muchísimo.)', pose: 'chapulin_panic' },
      { speaker: 'DEFENSA', text: 'Licenciado, ¿quién usa esta máquina?', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: 'Yo, licenciado. Dos veces al mes, aquí sentado, para levantar mis actas de revisión.', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: 'Y antes que yo, once años de secretarias. Una máquina no se echa a perder por usarla: se echa a perder por no usarla.', pose: 'berrondo_idle' },
      { speaker: 'SARGENTO', text: 'Mi Licenciado, con permiso: yo le pido a la corte un peritaje ocular de esta máquina.', pose: 'pazguato_decidido' },
      { speaker: 'BERRONDO', text: 'Me parece muy bien, Sargento. Yo mismo lo habría pedido.', pose: 'berrondo_idle', addEvidence: 'maquina_escribir' },
      { speaker: 'DEFENSA', text: '(Lo habría pedido él. Claro que lo habría pedido él.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(Porque una máquina que él usa legalmente para escribir actas legales no prueba nada de nada.)', pose: 'chapulin_panic' },
      { speaker: 'CHOMPIRAS', text: 'Oiga, licenciado... ¿ya se van? Es que yo tengo que volver a subir los huacales.', pose: 'chompiras_idle' },
      { speaker: 'DEFENSA', text: '¿Tú los subes y los bajas?', pose: 'chapulin_idle' },
      { speaker: 'CHOMPIRAS', text: 'Yo los destapo, más bien. Los jueves.', pose: 'chompiras_idle' },
      { speaker: 'DEFENSA', text: '¿Los jueves?', pose: 'chapulin_point' },
      { speaker: 'CHOMPIRAS', text: 'Los jueves, licenciado. Llega el señor de negro, yo le destapo el nueve con la pata de cabra, él se sienta un ratito a escribir, y luego yo se lo vuelvo a clavar.', pose: 'chompiras_idle' },
      { speaker: 'DEFENSA', text: '...¿Desde cuándo?', pose: 'chapulin_panic' },
      { speaker: 'CHOMPIRAS', text: '¿Yo? Desde septiembre.', pose: 'chompiras_idle' },
      { speaker: 'CHOMPIRAS', text: 'Pero el señor Nicanor dice que Berrondo lleva once años haciendo lo mismo. Antes de que yo entrara, le ayudaban los cargadores anteriores.', pose: 'chompiras_idle' },
      { speaker: 'NARRADOR', text: 'El Chapulín se queda mirando el huacal.', bgm: 'suspense' },
      { speaker: 'DEFENSA', text: '(Once años. Dos veces al mes. Sentado a escribir. En un juzgado.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(Y las antenitas no vibraron. Pero su quietud no descarta una pista ni dice nada sobre la propiedad. Berrondo dijo que la caja está legalmente depositada. ¿Y si lo terrible es precisamente que dice la verdad?)', pose: 'chapulin_panic' },
      { speaker: 'BERRONDO', text: 'Licenciado, voy a subir a la fiscalía. ¿Lo acerco? Tengo el coche en el patio.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '...No, gracias. Yo voy corriendo.', pose: 'chapulin_idle', unlockLocation: 'fiscalia_c5' },
      { speaker: 'BERRONDO', text: 'Como usted quiera. Que tenga buena mañana.', pose: 'berrondo_idle' }
    ]
  }
];
