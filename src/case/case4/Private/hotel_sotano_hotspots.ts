// @Architecture(descriptionShort="Case 4 day 2 boiler room hotspot geometry", type="data", icon="layers")
/**
 * Hotspots for Sótano y Sala de Calderas — day 2 investigation.
 */

import type { Hotspot } from '../../../types/index.js';

export const SOTANO_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot_caldera',
    label: 'Caldera y Cenizas',
    x: 54, y: 32, w: 38, h: 52,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Entre las cenizas del tiro de la chimenea que baja de los pisos superiores, recuperé un revólver .38 de cañón corto con una bala percutida.', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: '¿Y eso entra al acta de la defensa?', pose: 'donramon_point' },
      { speaker: 'SARGENTO', text: 'No, mi Licenciado. Queda bajo custodia pericial de la fiscalía en mi poder para peritajes balísticos. Usted no lo toca.', pose: 'pazguato_sweat' },
      { speaker: 'CHAPULIN', text: '¡Pero alguien lo arrojó por el tiro después del crimen!', pose: 'chapulin_point' }
    ]
  }
];
