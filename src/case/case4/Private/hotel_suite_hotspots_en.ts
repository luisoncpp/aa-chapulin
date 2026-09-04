// @Architecture(descriptionShort="English Suite 304 hotspot geometry and evidence", type="data", icon="layers")
/**
 * Hotspots for Presidential Suite 304 — day 1 investigation (English).
 */

import type { Hotspot } from '../../../types/index.js';

export const SUITE304_HOTSPOTS_EN: Hotspot[] = [
  {
    id: 'hotspot_cuerpo',
    label: 'Silhouette by the Fireplace',
    x: 58, y: 48, w: 22, h: 28,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Here lay the deceased by the fireplace. The broken glass, uncorked bottle, and ice bucket remain in police custody.', pose: 'pazguato_saludo' },
      { speaker: 'DEFENSA', text: 'And the preliminary report?', pose: 'donramon_idle' },
      { speaker: 'SARGENTO', text: 'At your service! Police report and official photograph taken at 11:30 PM.', pose: 'pazguato_sweat', addEvidence: 'informe_policial' },
      { speaker: 'SARGENTO', text: 'The photo documents the scene intact fifteen minutes after the blast.', pose: 'pazguato_saludo', addEvidence: 'foto_crimen' }
    ]
  },
  {
    id: 'hotspot_puerta',
    label: 'Door Frame',
    x: 6, y: 18, w: 16, h: 52,
    dialogue: [
      { speaker: 'SARGENTO', text: 'The mahogany frame is splintered where we forced the door. The security chain was on its interior rail.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: 'And what did Miss Maruja see?', pose: 'donramon_point' },
      { speaker: 'SARGENTO', text: 'She said something metallic fell into the hall when we forced the jamb. She picked it up from the floor.', pose: 'pazguato_sweat' }
    ]
  },
  {
    id: 'hotspot_radiador',
    label: 'Cast-Iron Radiator',
    x: 78, y: 32, w: 14, h: 40,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Thick pipe running down to the second floor. Smells of combustion smoke and concentrated sulfur.', pose: 'donramon_idle' },
      { speaker: 'CHAPULIN', text: '¡No contaban con mi astucia! That pipe connects to the basement!', pose: 'chapulin_point' }
    ]
  },
  {
    id: 'hotspot_cesto',
    label: 'Laundry Basket',
    x: 28, y: 54, w: 20, h: 32,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Large wicker basket with white sheets splattered with soot. Botija hid here.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: '(Panic, not murder.)', pose: 'donramon_sweat', unlockLocation: 'hotel_terraza' }
    ]
  }
];
