// @Architecture(descriptionShort="Case 4 wine cellar hotspot geometry", type="data", icon="layers")
/**
 * Hotspots for Cava de Vinos — day 3 investigation.
 */

import type { Hotspot } from '../../../types/index.js';

export const CAVA_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot_estanteria',
    label: 'Estanterías de Vino',
    x: 8, y: 18, w: 84, h: 58,
    dialogue: [
      { speaker: 'SARGENTO', text: 'En el casillero exclusivo del Conde hallamos la botella gemela intacta y la lista de pedidos privados a su nombre.', pose: 'pazguato_saludo' },
      { speaker: 'DEFENSA', text: '¿Y lo asegurado el primer día en la Suite 304?', pose: 'donramon_point' },
      { speaker: 'SARGENTO', text: 'El laboratorio central nos devolvió la copa rota y la botella envenenada.', pose: 'pazguato_decidido', addEvidence: 'copa_vino' },
      { speaker: 'SARGENTO', text: 'Chateau Buena Vista 1958. Sedimento positivo a cianuro de potasio en la copa.', pose: 'pazguato_saludo', addEvidence: 'botella_vino' },
      { speaker: 'DEFENSA', text: '(Reserva privada de Rufino... El veneno vino del vino.)', pose: 'donramon_idle', unlockLocation: 'hotel_lobby_d3' }
    ]
  }
];
