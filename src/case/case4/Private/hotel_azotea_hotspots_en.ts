// @Architecture(descriptionShort="English rooftop trunk hotspot geometry", type="data", icon="layers")
/**
 * Hotspots for Rooftop Machine Room — day 3 investigation (English).
 */

import type { Hotspot } from '../../../types/index.js';

export const AZOTEA_HOTSPOTS_EN: Hotspot[] = [
  {
    id: 'hotspot_baul',
    label: 'Trunk Behind the Motor',
    x: 38, y: 52, w: 22, h: 34,
    dialogue: [
      { speaker: 'CHOMPIRAS', text: 'Look what I found behind the freight-elevator generator!', pose: 'chompiras_nervous' },
      { speaker: 'DEFENSA', text: 'Rufino Rufián\'s English trunk!', pose: 'donramon_point' },
      { speaker: 'DEFENSA', text: 'The blue velvet lining has brown wool fibers from Cuajinais\'s suit and coal dust from the elevator.', pose: 'donramon_shock', sfx: 'realization', addEvidence: 'baul_etiquetas' },
      { speaker: 'CHAPULIN', text: '¡No contaban con mi astucia! He hid the empty trunk here after unloading the body in 304!', pose: 'chapulin_point', unlockLocation: 'detention_d3' }
    ]
  }
];
