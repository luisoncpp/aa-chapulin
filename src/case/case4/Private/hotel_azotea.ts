// @Architecture(descriptionShort="Case 4 day 3 rooftop with Chómpiras and trunk", type="data", icon="layers")
/**
 * Case 4 Day 3 — Azotea y Cuarto de Máquinas (`hotel_azotea`).
 */

import type { InvestigationScene } from '../../../types/index.js';
import { AZOTEA_HOTSPOTS } from './hotel_azotea_hotspots.js';

export const CASE4_HOTEL_AZOTEA: InvestigationScene = {
  title: 'Azotea y Cuarto de Máquinas',
  name: 'Azotea',
  bg: 'assets/bg_hotel_azotea.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'chompiras_idle',
  intro: [
    { speaker: 'NARRADOR', text: '27 de octubre, 1:30 PM. Azotea del hotel, junto a la maquinaria del montacargas.' },
    { speaker: 'CHOMPIRAS', text: '¡Don Ramón! Estaba barriendo las telarañas del cuarto del motor del montacargas...', pose: 'chompiras_nervous' },
    { speaker: 'DEFENSA', text: '¿Y qué encontraste?', pose: 'donramon_point' },
    { speaker: 'CHOMPIRAS', text: 'Algo grande detrás del generador. ¡Parece un baúl de cuero inglés!', pose: 'chompiras_relieved' }
  ],
  hotspots: AZOTEA_HOTSPOTS,
  talkOptions: [
    {
      id: 'about_elevator_log',
      label: 'La bitácora del montacargas',
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'A las 10:25 PM subió del piso 3 a la azotea con 95 kilos. Rufino de 75 y el baúl vacío de 20. ¡Los 80 del muerto se quedaron arriba!', pose: 'chompiras_nervous' },
        { speaker: 'DEFENSA', text: '(El vehículo del traslado... Examina el baúl.)', pose: 'donramon_idle' }
      ]
    }
  ]
};
