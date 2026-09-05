// @Architecture(descriptionShort="English Suite 304 hotspot geometry and evidence", type="data", icon="layers")
/**
 * Hotspots for Presidential Suite 304 — day 1 investigation (English).
 */

import type { Hotspot } from '../../../types/index.js';

export const SUITE304_HOTSPOTS_EN: Hotspot[] = [
  {
    id: 'hotspot_cuerpo',
    label: 'Silhouette by the Fireplace',
    x: 28, y: 72, w: 36, h: 26,
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
    x: 2, y: 6, w: 24, h: 68,
    dialogue: [
      { speaker: 'SARGENTO', text: 'The mahogany frame is splintered where we forced the door. The security chain was on its interior rail.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: 'And what did Miss Maruja see?', pose: 'donramon_point' },
      { speaker: 'SARGENTO', text: 'She said something metallic fell into the hall when we forced the jamb. She picked it up from the floor.', pose: 'pazguato_sweat' }
    ]
  },
  {
    id: 'hotspot_radiador',
    label: 'Cast-Iron Radiator',
    x: 34, y: 42, w: 16, h: 36,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Thick pipe running down to the second floor. Smells of combustion smoke and concentrated sulfur.', pose: 'donramon_idle' },
      { speaker: 'CHAPULIN', text: '¡No contaban con mi astucia! That pipe connects to the basement!', pose: 'chapulin_point' }
    ]
  },
  {
    id: 'hotspot_cesto',
    label: 'Laundry Basket',
    x: 86, y: 52, w: 14, h: 32,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Large wicker basket with white sheets splattered with soot. Botija hid here.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: '(Panic, not murder.)', pose: 'donramon_sweat', unlockLocation: 'hotel_terraza' }
    ]
  },
  {
    id: 'hotspot_almohada',
    label: 'Sofa Pillow',
    x: 64, y: 54, w: 20, h: 26,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Look at this through a magnifying glass! This feather pillow has a blackened hole and down scattered all over the sofa. Whoever fired here pressed the barrel against the pillow to drown the flash sound.', pose: 'donramon_point' },
      { speaker: 'CHAPULIN', text: '¡Lo sospeché desde un principio! They used a feather pillow as a homemade silencer to muffle the blast!', pose: 'chapulin_point' },
      { speaker: 'SARGENTO', text: 'Gee... you are right, counselor. I thought the deceased had a pillow fight before getting shot.', pose: 'pazguato_sweat' }
    ]
  }
];
