// @Architecture(descriptionShort="Case 4 Suite 304 hotspot geometry and evidence", type="data", icon="layers")
/**
 * Hotspots for Suite Presidencial 304 — day 1 investigation.
 */

import type { Hotspot } from '../../../types/index.js';

export const SUITE304_HOTSPOTS: Hotspot[] = [
  {
    id: 'hotspot_cuerpo',
    label: 'Silueta junto a la Chimenea',
    x: 28, y: 72, w: 36, h: 26,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Aquí yacía el occiso junto a la chimenea. La copa rota, la botella descorchada y la cubeta de hielo quedaron aseguradas bajo cadena de custodia.', pose: 'pazguato_saludo' },
      { speaker: 'DEFENSA', text: '¿Y las actuaciones preliminares?', pose: 'donramon_idle' },
      { speaker: 'SARGENTO', text: '¡A sus órdenes! Informe policial y fotografía oficial tomada a las 11:30 PM.', pose: 'pazguato_sweat', addEvidence: 'informe_policial' },
      { speaker: 'SARGENTO', text: 'La toma fotográfica documenta la escena intacta quince minutos después del estruendo.', pose: 'pazguato_saludo', addEvidence: 'foto_crimen' }
    ]
  },
  {
    id: 'hotspot_puerta',
    label: 'Marco de la Puerta',
    x: 2, y: 6, w: 24, h: 68,
    dialogue: [
      { speaker: 'SARGENTO', text: 'El marco de caoba está astillado donde empujamos la puerta. El cerrojo de cadena estaba en su riel interior.', pose: 'pazguato_idle' },
      { speaker: 'DEFENSA', text: '¿Y qué vio la señorita Maruja?', pose: 'donramon_point' },
      { speaker: 'SARGENTO', text: 'Dijo que al forzar la jamba cayó algo metálico al pasillo. Ella lo recogió del suelo.', pose: 'pazguato_sweat' }
    ]
  },
  {
    id: 'hotspot_radiador',
    label: 'Radiador de Hierro',
    x: 34, y: 42, w: 16, h: 36,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Tubería gruesa que baja hacia el piso 2. Huele a humo de combustión y azufre concentrado.', pose: 'donramon_idle' },
      { speaker: 'CHAPULIN', text: '¡No contaban con mi astucia! ¡Esa tubería conecta con el sótano!', pose: 'chapulin_point' }
    ]
  },
  {
    id: 'hotspot_cesto',
    label: 'Cesto de Lavandería',
    x: 86, y: 52, w: 14, h: 32,
    dialogue: [
      { speaker: 'SARGENTO', text: 'Gran cesto de mimbre con sábanas blancas salpicadas de tizne. Aquí se ocultó Botija.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: '(Se metió de pánico... pero no mató a nadie.)', pose: 'donramon_sweat', unlockLocation: 'hotel_terraza' }
    ]
  }
];
