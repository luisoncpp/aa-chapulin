// @Architecture(descriptionShort="English Case 4 day-3 wine cellar scene", type="data", icon="layers")
/**
 * Case 4 Day 3 — Wine Cellar (`hotel_cava`) English.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CAVA_HOTSPOTS_EN } from './hotel_cava_hotspots_en.js';

export const CASE4_HOTEL_CAVA_EN: InvestigationScene = {
  title: 'Grand Hotel Wine Cellar',
  name: 'Wine Cellar',
  bg: 'assets/bg_hotel_cava.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'October 27, 9:00 AM. Subterranean cellar of Hotel Buena Vista.' },
    { speaker: 'SARGENTO', text: 'Counsel! We raided the private French wine reserve with a court order.', pose: 'pazguato_decidido' },
    { speaker: 'DEFENSA', text: 'What did you find about the Chateau Buena Vista 1958?', pose: 'donramon_idle' },
    { speaker: 'CHAPULIN', text: '¡Síganme los buenos! The poison must be in one of these bottles!', pose: 'chapulin_point' }
  ],
  hotspots: CAVA_HOTSPOTS_EN,
  talkOptions: [
    {
      id: 'about_reserve',
      label: 'The Count\'s private reserve',
      dialogue: [
        { speaker: 'SARGENTO', text: 'Exclusive locker in Rufino Rufián\'s name. Grand reserve bottles with intact red wax seals... apparently.', pose: 'pazguato_idle' },
        { speaker: 'DEFENSA', text: '(Let\'s examine the racks carefully.)', pose: 'donramon_point' }
      ]
    }
  ]
};
