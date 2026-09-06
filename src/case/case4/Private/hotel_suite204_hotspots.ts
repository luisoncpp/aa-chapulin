// @Architecture(descriptionShort="Case 4 Suite 204 hotspot geometry and effect", type="data", icon="layers")
/**
 * Hotspots for Suite 204 — day 2 investigation (spec §9.2).
 */

import type { Hotspot } from '../../../types/index.js';

export const SUITE204_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot_radiador204',
    label: 'Radiador de la 204',
    x: 64, y: 47, w: 24, h: 53,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Restos de un efecto en el radiador. Sargento: regístrelo delante de nosotros.', pose: 'donramon_point' },
      { speaker: 'SARGENTO', text: 'Queda registrado. Ensayo seguro documentado por peritos; nosotros no manipulamos artefactos desconocidos.', pose: 'pazguato_decidido', addEvidence: 'casquillo_fogueo' }
    ]
  },
  {
    id: 'hotspot_mesa',
    label: 'Mesa',
    x: 5, y: 67, w: 30, h: 33,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Espacio donde se sirvió vino, marcas ordinarias de copas.', pose: 'donramon_idle' },
      { speaker: 'SARGENTO', text: 'Ninguna mancha identifica químicamente a nadie por inspección visual.', pose: 'pazguato_sweat' }
    ]
  },
  {
    id: 'hotspot_armario',
    label: 'Armario',
    x: 16, y: 0, w: 46, h: 67,
    dialogue: [
      { speaker: 'RUFINO', text: 'Ese maletín contiene valores.', pose: 'rufino_monocle' },
      { speaker: 'SARGENTO', text: 'Queda registrada su existencia. Su apertura posterior requerirá el motivo y la orden.', pose: 'pazguato_saludo' }
    ]
  },
  {
    id: 'hotspot_recibo',
    label: 'Recibo de Equipaje',
    x: 15, y: 72, w: 9, h: 9,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Número B-17 y destinos. Con este número preguntamos al operador.', pose: 'donramon_point' }
    ]
  }
];
