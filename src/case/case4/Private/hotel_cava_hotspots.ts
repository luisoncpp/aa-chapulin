// @Architecture(descriptionShort="Case 4 wine cellar hotspot geometry", type="data", icon="layers")
/**
 * Hotspots for Cava — day 3 (spec §11.1). Small object boxes on the
 * 960x540 cover crop: ledger (left shelves), bottle (center table),
 * cork (kept apart), wax seal (neck), shelf ambience (right).
 */

import type { Hotspot } from '../../../types/index.js';

export const CAVA_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot_libro',
    label: 'Libro de Cava',
    x: 0, y: 63, w: 28, h: 20,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Salida de V58-17 a las 21:15, autorización de Cecilio y numeración del ejemplar.', pose: 'pazguato_saludo' },
      { speaker: 'DEFENSA', text: 'El folio va cerrado con sello de lacre del huésped que pidió la botella, con escudo nobiliario.', pose: 'donramon_point' },
      { speaker: 'SARGENTO', text: 'Coincide con el recibo de entrega y la botella custodiada. No hay segunda botella del mismo lote esa noche.', pose: 'pazguato_idle' }
    ]
  },
  {
    id: 'hotspot_botella',
    label: 'Botella Precintada',
    x: 40, y: 47, w: 12, h: 42,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Ejemplar abierto recogido en la 304.', pose: 'pazguato_decidido', addEvidence: 'botella_vino' },
      { speaker: 'DEFENSA', text: '(El Acta incorpora sus vistas ampliadas, incluida la del cierre conservado aparte.)', pose: 'donramon_idle' }
    ]
  },
  {
    id: 'hotspot_cierre',
    label: 'Cierre Conservado',
    x: 50, y: 83, w: 8, h: 8,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Vista a escala: huella ancha del sacacorchos y, separado de ella, un canal fino que atraviesa el corcho de extremo a extremo.', pose: 'pazguato_saludo' },
      { speaker: 'DEFENSA', text: '¿Y lo del borde exterior?', pose: 'donramon_point' },
      { speaker: 'SARGENTO', text: 'Retenida una inclusión metálica diminuta cerca del borde exterior.', pose: 'pazguato_sweat' }
    ]
  },
  {
    id: 'hotspot_lacre',
    label: 'Lacre del Cuello',
    x: 41, y: 45, w: 11, h: 12,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Restos del sello original. Bajo aumento, un punto de cera refundida sobre el sello, no una rotura.', pose: 'donramon_point' },
      { speaker: 'SARGENTO', text: 'Describo lo que se ve; no nombro qué lo produjo.', pose: 'pazguato_idle' }
    ]
  },
  {
    id: 'hotspot_estanteria',
    label: 'Estantería',
    x: 70, y: 0, w: 30, h: 65,
    dialogue: [
      { speaker: 'CHAPULIN', text: '¡Con estos precios, ni la renta de dieciséis meses alcanza!', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Ambientación y nada más. Ninguna pista escondida en las cajas.', pose: 'pazguato_idle' }
    ]
  }
];
