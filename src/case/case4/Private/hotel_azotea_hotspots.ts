// @Architecture(descriptionShort="Case 4 rooftop trunk hotspot geometry", type="data", icon="layers")
/**
 * Hotspots for Azotea — day 2 inspection (spec §9.4).
 */

import type { Hotspot } from '../../../types/index.js';

export const AZOTEA_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot_etiqueta',
    label: 'Etiqueta B-17',
    x: 41, y: 63, w: 8, h: 11,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Cotejo con bitácora y recibo: confirma el mismo objeto.', pose: 'donramon_point' }
    ]
  },
  {
    id: 'hotspot_faja',
    label: 'Faja Rota',
    x: 44, y: 54, w: 8, h: 43,
    dialogue: [
      { speaker: 'SARGENTO', text: 'El número coincide con el talón firmado de entrega. Su rotura demuestra apertura posterior a esa entrega.', pose: 'pazguato_saludo' },
      { speaker: 'DEFENSA', text: '(No identifica por sí sola el contenido.)', pose: 'donramon_idle' }
    ]
  },
  {
    id: 'hotspot_forro',
    label: 'Forro',
    x: 38, y: 86, w: 20, h: 12,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Retal marrón enganchado. Consultemos la fotografía del traje en el Acta: ambas formas a escala comparable.', pose: 'donramon_point' },
      { speaker: 'SARGENTO', text: 'Fotografiaré el forro antes de recoger nada.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: 'Incluya ese retal.', pose: 'donramon_idle' },
      { speaker: 'CHOMPIRAS', text: '¿Por un pedacito de tela?', pose: 'chompiras_nervous' },
      { speaker: 'DEFENSA', text: 'Primero conservamos lo que hay. Después veremos qué significa.', pose: 'donramon_idle' }
    ]
  },
  {
    id: 'hotspot_compartimiento',
    label: 'Compartimiento Principal',
    x: 38, y: 54, w: 18, h: 9,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Dimensiones compatibles con la hipótesis que podremos formular. Nada de pasajes secretos.', pose: 'donramon_idle' }
    ]
  },
  {
    id: 'hotspot_motor',
    label: 'Motor',
    x: 32, y: 8, w: 43, h: 45,
    dialogue: [
      { speaker: 'CHOMPIRAS', text: 'Procedimiento y prohibición de pasajeros confirmados. Sin averías convenientes.', pose: 'chompiras_idle' }
    ]
  }
];
