// @Architecture(descriptionShort="Case 4 rooftop trunk hotspot geometry", type="data", icon="layers")
/**
 * Hotspots for Azotea y Cuarto de Máquinas — day 3 investigation.
 */

import type { Hotspot } from '../../../types/index.js';

export const AZOTEA_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot_baul',
    label: 'Baúl detrás del Motor',
    x: 38, y: 52, w: 22, h: 34,
    dialogue: [
      { speaker: 'CHOMPIRAS', text: '¡Mire lo que descubrí detrás del generador del montacargas!', pose: 'chompiras_nervous' },
      { speaker: 'DEFENSA', text: '¡El baúl inglés de Rufino Rufián!', pose: 'donramon_point' },
      { speaker: 'DEFENSA', text: 'En el forro de terciopelo azul hay fibras de lana marrón del traje de Cuajinais y polvo de carbón del montacargas.', pose: 'donramon_shock', sfx: 'realization', addEvidence: 'baul_etiquetas' },
      { speaker: 'CHAPULIN', text: '¡No contaban con mi astucia! ¡Aquí escondió el baúl vacío después de descargar el cadáver en la 304!', pose: 'chapulin_point', unlockLocation: 'detention_d3' }
    ]
  }
];
