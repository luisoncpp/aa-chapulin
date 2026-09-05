// @Architecture(descriptionShort="English Suite 204 hotspot geometry", type="data", icon="layers")
/**
 * Hotspots for Suite 204 — day 2 investigation (English).
 */

import type { Hotspot } from '../../../types/index.js';

export const SUITE204_HOTSPOTS_EN: Hotspot[] = [
  {
    id: 'hotspot_radiador204',
    label: 'Suite 204 Radiator',
    x: 62, y: 46, w: 26, h: 48,
    dialogue: [
      { speaker: 'DEFENSA', text: 'The radiator purge valve is unscrewed...', pose: 'donramon_point' },
      { speaker: 'DEFENSA', text: 'Inside the cavity is a .38 shell casing with burned slow-match sulfur residue!', pose: 'donramon_shock', sfx: 'realization', addEvidence: 'casquillo_fogueo' },
      { speaker: 'RUFINO', text: 'Nonsense! A resentful plumber planted that!', pose: 'rufino_smug' }
    ]
  },
  {
    id: 'hotspot_armario',
    label: 'Wardrobe and Luggage',
    x: 6, y: 8, w: 52, h: 78,
    dialogue: [
      { speaker: 'RUFINO', text: 'Step away from my noble belongings! That briefcase holds jewels of incalculable value.', pose: 'rufino_monocle' },
      { speaker: 'DEFENSA', text: '(Locked tight. Very protective of that briefcase...)', pose: 'donramon_sweat', unlockLocation: 'hotel_terraza_d2' }
    ]
  }
];
