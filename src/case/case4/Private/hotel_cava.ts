// @Architecture(descriptionShort="Case 4 day 3 wine cellar evidence scene", type="data", icon="layers")
/**
 * Case 4 Day 3 — Cava de Vinos (`hotel_cava`).
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CAVA_HOTSPOTS } from './hotel_cava_hotspots.js';

export const CASE4_HOTEL_CAVA: InvestigationScene = {
  title: 'Cava de Vinos del Gran Hotel',
  name: 'Cava de Vinos',
  bg: 'assets/bg_hotel_cava.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: '27 de octubre, 9:00 AM. Cava subterránea del Gran Hotel Buena Vista.' },
    { speaker: 'SARGENTO', text: '¡Mi Licenciado! Allanamos la reserva privada de vinos franceses con orden del juez.', pose: 'pazguato_decidido' },
    { speaker: 'DEFENSA', text: '¿Qué encontraron sobre el Chateau Buena Vista 1958?', pose: 'donramon_idle' },
    { speaker: 'CHAPULIN', text: '¡Síganme los buenos! ¡El veneno debe estar en alguna de estas botellas!', pose: 'chapulin_point' }
  ],
  hotspots: CAVA_HOTSPOTS,
  talkOptions: [
    {
      id: 'about_reserve',
      label: 'La reserva privada del Conde',
      dialogue: [
        { speaker: 'SARGENTO', text: 'Casillero exclusivo a nombre de Rufino Rufián. Botellas de gran reserva con sello de lacre rojo intacto... en apariencia.', pose: 'pazguato_idle' },
        { speaker: 'DEFENSA', text: '(Examinemos las estanterías con cuidado.)', pose: 'donramon_point' }
      ]
    }
  ]
};
