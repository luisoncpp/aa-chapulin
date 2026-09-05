// @Architecture(descriptionShort="English day 2 boiler room hotspot geometry", type="data", icon="layers")
/**
 * Hotspots for Basement Boiler Room — day 2 investigation (English).
 */

import type { Hotspot } from '../../../types/index.js';

export const SOTANO_HOTSPOTS_EN: Hotspot[] = [
  {
    id: 'hotspot_caldera',
    label: 'Boiler and Ashes',
    x: 54, y: 32, w: 38, h: 52,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Among the ashes of the chimney flue from the upper floors, I recovered a short-barrel .38 revolver with a fired round.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: 'Does that go into the defense record?', pose: 'donramon_point' },
      { speaker: 'SARGENTO', text: 'No, Counsel. It stays in prosecution custody in my possession for ballistics. You don\'t touch it.', pose: 'pazguato_sweat' },
      { speaker: 'CHAPULIN', text: 'But someone threw it down the flue after the crime!', pose: 'chapulin_point' }
    ]
  }
];
