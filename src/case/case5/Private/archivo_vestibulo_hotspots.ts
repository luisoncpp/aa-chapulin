// @Architecture(descriptionShort="Case 5 day 1 archivo vestibulo hotspots and explanatory plate", type="data", icon="layers")
/**
 * Caso 5, Día 1 — puntos de interés del vestíbulo. Spec §10.2.
 */

import type { Hotspot } from '../../../types/index.js';

const VESTIBULO_BG = 'assets/bg_archivo_vestibulo.webp';
const PLATE_DOS_ACCESOS = 'assets/plate_dos_accesos.webp';

export const CASE5_VESTIBULO_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot_libro',
    label: 'Libro de visitas',
    x: 38, y: 42, w: 22, h: 18,
    dialogue: [
      { speaker: 'NARRADOR', text: 'Sobre el mostrador, un libro de registro abierto, con una pluma atada a un cordel.' },
      { speaker: 'DEFENSA', text: 'Hoja del cuatro de diciembre. Catorce firmas.', pose: 'chapulin_idle' },
      { speaker: 'NICANOR', text: 'Catorce. Yo las cuento dos veces: al cerrar y al día siguiente.', pose: 'nicanor_idle' },
      { speaker: 'DEFENSA', text: 'La última dice: «R. Valdés. Entrada cuatro cuarenta. Salida cuatro cincuenta y ocho.»', pose: 'chapulin_point' },
      { speaker: 'NICANOR', text: 'La hora de salida se la puse yo. Nadie sale de aquí sin que yo le ponga la hora.', pose: 'nicanor_idle' },
      { speaker: 'DEFENSA', text: '¿Y los policías que trajeron al señor Lengua?', pose: 'chapulin_idle' },
      { speaker: 'NICANOR', text: 'Uniformados no firman, joven. Nunca han firmado. El libro es para el público.', pose: 'nicanor_idle' },
      { speaker: 'DEFENSA', text: '(O sea que este libro no dice quién estuvo en el edificio. Dice quién era público.)', pose: 'chapulin_idle', addEvidence: 'libro_visitas' }
    ]
  },
  {
    id: 'hotspot_plano',
    label: 'Plano de protección civil',
    x: 62, y: 28, w: 28, h: 32,
    dialogue: [
      { speaker: 'NARRADOR', text: 'Clavado con tachuelas junto al mostrador, un plano amarillento del edificio con las salidas marcadas en rojo.' },
      { speaker: 'DEFENSA', text: 'Planta baja, primer piso, sótano... ¡y dos puertas!', pose: 'chapulin_point' },
      { speaker: 'NICANOR', text: 'Tres, si cuenta la del carbón, pero ésa lleva tapiada desde el cincuenta y ocho.', pose: 'nicanor_idle' },
      { speaker: 'DEFENSA', text: '¿Y ésta de acá, la del costado?', pose: 'chapulin_idle' },
      { speaker: 'NICANOR', text: 'Ésa es la ventanilla de peritos. Ahí no entra público: entran peritos, actuarios, notarios y síndicos.', pose: 'nicanor_idle' },
      { speaker: 'DEFENSA', text: '¿Y también firman un libro?', pose: 'chapulin_point' },
      { speaker: 'NICANOR', text: 'Pues claro. Su libro. El de ellos.', pose: 'nicanor_idle' },
      { speaker: 'DEFENSA', text: '...¿Hay dos libros?', pose: 'chapulin_panic' },
      { speaker: 'NICANOR', text: 'Joven, aquí hay libros hasta para apuntar los libros.', pose: 'nicanor_escoba' },
      { speaker: 'DEFENSA', text: '(Dos puertas. Dos libros. Y la policía se llevó uno.)', pose: 'chapulin_idle', addEvidence: 'plano_archivo' },
      { speaker: 'NARRADOR', text: 'Plano del Archivo Judicial. La puerta pública da al vestíbulo y al mostrador del libro de visitas.', bg: PLATE_DOS_ACCESOS, furniture: 'none' },
      { speaker: 'NARRADOR', text: 'La ventanilla de peritos da al patio de maniobras y lleva su propio libro.', bg: PLATE_DOS_ACCESOS, furniture: 'none' },
      { speaker: 'NARRADOR', text: 'Una escalera de servicio une el patio, el sótano y el extremo del pasillo 7 sin pasar por ningún mostrador.', bg: PLATE_DOS_ACCESOS, furniture: 'none' },
      { speaker: 'DEFENSA', text: '(Por esa escalera se puede subir del sótano al pasillo siete sin que nadie te vea la cara.)', pose: 'chapulin_idle', bg: VESTIBULO_BG, furniture: 'none' },
      { speaker: 'DEFENSA', text: '(No contaban con mi astucia... ni yo tampoco, la verdad.)', pose: 'chapulin_idle', bg: VESTIBULO_BG, furniture: 'none' }
    ]
  },
  {
    id: 'hotspot_carrito',
    label: 'Carrito de expedientes',
    x: 8, y: 52, w: 24, h: 28,
    dialogue: [
      { speaker: 'NARRADOR', text: 'Un carrito de metal con legajos atados con listón, esperando a que alguien los suba.' },
      { speaker: 'NICANOR', text: 'Ése lo sube el muchacho del montacargas. Yo ya no cargo: tengo la cintura hecha una lástima.', pose: 'nicanor_idle' },
      { speaker: 'DEFENSA', text: '¿Qué muchacho?', pose: 'chapulin_idle' },
      { speaker: 'NICANOR', text: 'El Chómpiras. Buen muchacho. Lo metieron aquí en septiembre y no ha faltado ni un día.', pose: 'nicanor_idle' },
      { speaker: 'DEFENSA', text: '(¡El Chómpiras! Ese sí me debe una.)', pose: 'chapulin_point' }
    ]
  }
];
