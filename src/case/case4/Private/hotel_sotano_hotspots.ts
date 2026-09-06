// @Architecture(descriptionShort="Case 4 day 2 boiler room hotspot geometry", type="data", icon="layers")
/**
 * Hotspots for Sótano y Sala de Calderas — day 2 investigation (spec §9.1).
 */

import type { Hotspot } from '../../../types/index.js';

export const SOTANO_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot_conducto',
    label: 'Conducto',
    x: 38, y: 0, w: 17, h: 60,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Conducto vertical. En el plano marca la 204 como siguiente revisión.', pose: 'donramon_point' },
      { speaker: 'SARGENTO', text: 'Sin explicar todavía ningún artefacto. Solo el recorrido.', pose: 'pazguato_idle' }
    ]
  },
  {
    id: 'hotspot_inventario',
    label: 'Inventario de la Gala',
    x: 5, y: 23, w: 30, h: 32,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Registro de material de efectos sonoros, con un conjunto pendiente de devolución. Se adjunta al informe.', pose: 'pazguato_saludo' },
      { speaker: 'DEFENSA', text: 'Acceso de personal y huéspedes de gala. Nada de exclusividades inventadas.', pose: 'donramon_idle' }
    ]
  },
  {
    id: 'hotspot_banco',
    label: 'Banco de Mantenimiento',
    x: 6, y: 59, w: 41, h: 31,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Fichas de trabajo: Botija estuvo ocupado con Chómpiras después de entregar la botella. Se conservan para el juicio final.', pose: 'pazguato_idle' }
    ]
  },
  {
    id: 'hotspot_cenizas',
    label: 'Cenizas',
    x: 50, y: 71, w: 50, h: 29,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Carbón ordinario. El revólver no aparece aquí.', pose: 'pazguato_idle' }
    ]
  }
];
