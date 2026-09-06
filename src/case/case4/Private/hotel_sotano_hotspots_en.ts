// @Architecture(descriptionShort="English day-2 boiler hotspot geometry", type="data", icon="layers")
/** Same geometry as Spanish. */

import type { Hotspot } from '../../../types/index.js';

export const SOTANO_HOTSPOTS_EN: Hotspot[] = [
  {
    id: 'hotspot_conducto',
    label: 'Conduit',
    x: 38, y: 0, w: 17, h: 60,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Vertical conduit. On the plan it marks 204 as the next check.', pose: 'donramon_point' },
      { speaker: 'SARGENTO', text: 'No device explained yet. Only the route.', pose: 'pazguato_idle' }
    ]
  },
  {
    id: 'hotspot_inventario',
    label: 'Gala Inventory',
    x: 5, y: 23, w: 30, h: 32,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Sound-effect stock log, one set still unreturned. Attached to the report.', pose: 'pazguato_saludo' },
      { speaker: 'DEFENSA', text: 'Staff and gala-guest access. No invented exclusivity.', pose: 'donramon_idle' }
    ]
  },
  {
    id: 'hotspot_banco',
    label: 'Workbench',
    x: 6, y: 59, w: 41, h: 31,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Work slips: Botija busy with Chómpiras after delivering the bottle. Kept for the final trial.', pose: 'pazguato_idle' }
    ]
  },
  {
    id: 'hotspot_cenizas',
    label: 'Ashes',
    x: 50, y: 71, w: 50, h: 29,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Ordinary coal. The revolver is not here.', pose: 'pazguato_idle' }
    ]
  }
];
