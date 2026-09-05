// @Architecture(descriptionShort="English wine cellar hotspot geometry", type="data", icon="layers")
/**
 * Hotspots for Wine Cellar — day 3 investigation (English).
 */

import type { Hotspot } from '../../../types/index.js';

export const CAVA_HOTSPOTS_EN: Hotspot[] = [
  {
    id: 'hotspot_estanteria',
    label: 'Wine Racks',
    x: 8, y: 16, w: 90, h: 72,
    dialogue: [
      { speaker: 'SARGENTO', text: 'In the Count\'s private locker we found the intact twin bottle and his private order list.', pose: 'pazguato_saludo' },
      { speaker: 'DEFENSA', text: 'And what was secured on day one in Suite 304?', pose: 'donramon_point' },
      { speaker: 'SARGENTO', text: 'The central lab returned the broken glass and poisoned bottle.', pose: 'pazguato_decidido', addEvidence: 'copa_vino' },
      { speaker: 'SARGENTO', text: 'Chateau Buena Vista 1958. Sediment in the glass tested positive for potassium cyanide.', pose: 'pazguato_saludo', addEvidence: 'botella_vino' },
      { speaker: 'DEFENSA', text: '(Rufino\'s private reserve... The poison came in the wine.)', pose: 'donramon_idle', unlockLocation: 'hotel_lobby_d3' }
    ]
  }
];
