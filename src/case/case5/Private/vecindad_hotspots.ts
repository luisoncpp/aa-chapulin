// @Architecture(descriptionShort="Case 5 day 2 vecindad Barriga office hotspots", type="data", icon="layers")
/**
 * Caso 5, Día 2 — puntos de interés del despacho del Señor Barriga. Spec §12.1.
 */

import type { Hotspot } from '../../../types/index.js';

export const CASE5_VECINDAD_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot_puerta',
    label: 'Puerta del despacho',
    x: 10, y: 2, w: 20, h: 40,
    dialogue: [
      { speaker: 'NARRADOR', text: 'Una puerta de madera con el marco hinchado por la humedad y una rendija de dos dedos abajo.' },
      { speaker: 'DEFENSA', text: 'Por aquí cabe un sobre sin doblarlo.', pose: 'chapulin_idle' },
      { speaker: 'BARRIGA', text: 'Por ahí me han pasado de todo: cartas, quejas, un pollo.', pose: 'barriga_idle' },
      { speaker: 'DEFENSA', text: '¿Un pollo?', pose: 'chapulin_panic' },
      { speaker: 'BARRIGA', text: 'Vivo. No pregunte.', pose: 'barriga_reclamo' },
      { speaker: 'DEFENSA', text: '(Cualquiera pudo dejar ese sobre sin que nadie lo viera. Eso no me sirve de nada... o me sirve para todo.)', pose: 'chapulin_idle' }
    ]
  },
  {
    id: 'hotspot_sobre',
    label: 'Sobre y su contenido',
    x: 62, y: 40, w: 24, h: 22,
    dialogue: [
      { speaker: 'NARRADOR', text: 'Sobre el escritorio, un sobre de manila abierto y, al lado, media cuartilla mecanografiada.' },
      { speaker: 'BARRIGA', text: 'Ahí está todo. El sobre, el papelito y la copia de mi recibo. Yo no soy de los que tiran papeles.', pose: 'barriga_idle' },
      { speaker: 'DEFENSA', text: '«Adjunto el pago de diecisiete mensualidades vencidas a cargo del C. Ramón Valdés, inquilino de la vivienda 72.»', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '«Se ruega expedir el recibo correspondiente y conservarlo. No se requiere respuesta.»', pose: 'chapulin_point' },
      { speaker: 'DEFENSA', text: '...Señor Barriga, ¿usted cree que Don Ramón escribe así?', pose: 'chapulin_idle' },
      { speaker: 'BARRIGA', text: 'Joven, el señor Ramón me manda los recados escritos en la envoltura de una torta.', pose: 'barriga_idle' },
      { speaker: 'BARRIGA', text: 'Y con faltas.', pose: 'barriga_reclamo' },
      { speaker: 'DEFENSA', text: '(A máquina. En tercera persona. Y con «se ruega».)', pose: 'chapulin_idle', addEvidence: 'nota_mecanografiada' },
      { speaker: 'DEFENSA', text: '(Y el recibo dice «tercero no identificado».)', pose: 'chapulin_idle', addEvidence: 'recibo_renta' }
    ]
  }
];
