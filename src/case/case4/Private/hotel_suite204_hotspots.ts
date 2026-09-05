// @Architecture(descriptionShort="Case 4 Suite 204 hotspot geometry and shell casing", type="data", icon="layers")
/**
 * Hotspots for Suite 204 — day 2 investigation.
 */

import type { Hotspot } from '../../../types/index.js';

export const SUITE204_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot_radiador204',
    label: 'Radiador de la 204',
    x: 62, y: 46, w: 26, h: 48,
    dialogue: [
      { speaker: 'DEFENSA', text: 'La válvula de purga del radiador está desenroscada...', pose: 'donramon_point' },
      { speaker: 'DEFENSA', text: '¡Dentro de la cavidad hay un casquillo calibre .38 con restos de mecha lenta de azufre quemada!', pose: 'donramon_shock', sfx: 'realization', addEvidence: 'casquillo_fogueo' },
      { speaker: 'RUFINO', text: '¡Pamplinas! ¡Eso lo plantó un fontanero resentido!', pose: 'rufino_smug' }
    ]
  },
  {
    id: 'hotspot_armario',
    label: 'Armario y Maletas',
    x: 6, y: 8, w: 52, h: 78,
    dialogue: [
      { speaker: 'RUFINO', text: '¡Apartense de mis pertenencias nobiliarias! Ese maletín contiene joyas de incalculable valor.', pose: 'rufino_monocle' },
      { speaker: 'DEFENSA', text: '(Cerrado con llave. Muy celoso de ese maletín...)', pose: 'donramon_sweat', unlockLocation: 'hotel_terraza_d2' }
    ]
  }
];
