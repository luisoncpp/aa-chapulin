// @Architecture(descriptionShort="English Suite 204 hotspot geometry", type="data", icon="layers")
/** Same geometry as Spanish. */

import type { Hotspot } from '../../../types/index.js';

export const SUITE204_HOTSPOTS_EN: Hotspot[] = [
  {
    id: 'hotspot_radiador204',
    label: '204 Radiator',
    x: 64, y: 47, w: 24, h: 53,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Effect remains in the radiator. Sergeant: log it in front of us.', pose: 'donramon_point' },
      { speaker: 'SARGENTO', text: 'Logged. Documented safe test by experts; we handle no unknown device.', pose: 'pazguato_decidido', addEvidence: 'casquillo_fogueo' }
    ]
  },
  {
    id: 'hotspot_mesa',
    label: 'Table',
    x: 5, y: 67, w: 30, h: 33,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Where wine was served, ordinary glass marks.', pose: 'donramon_idle' },
      { speaker: 'SARGENTO', text: 'No stain chemically names anyone by sight.', pose: 'pazguato_sweat' }
    ]
  },
  {
    id: 'hotspot_armario',
    label: 'Wardrobe',
    x: 16, y: 0, w: 46, h: 67,
    dialogue: [
      { speaker: 'RUFINO', text: 'That briefcase holds valuables.', pose: 'rufino_monocle' },
      { speaker: 'SARGENTO', text: 'Its existence is logged. Opening it later needs cause and an order.', pose: 'pazguato_saludo' }
    ]
  },
  {
    id: 'hotspot_recibo',
    label: 'Luggage Receipt',
    x: 15, y: 72, w: 9, h: 9,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Number B-17 and destinations. With this number we ask the operator.', pose: 'donramon_point' }
    ]
  }
];
