// @Architecture(descriptionShort="English Case 4 day-3 rooftop scene", type="data", icon="layers")
/**
 * Case 4 Day 3 — Rooftop Machine Room (`hotel_azotea`) English.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { AZOTEA_HOTSPOTS_EN } from './hotel_azotea_hotspots_en.js';

export const CASE4_HOTEL_AZOTEA_EN: InvestigationScene = {
  title: 'Rooftop and Machine Room',
  name: 'Rooftop',
  bg: 'assets/bg_hotel_azotea.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'chompiras_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'October 27, 1:30 PM. Hotel rooftop, beside the freight-elevator machinery.' },
    { speaker: 'CHOMPIRAS', text: 'Don Ramón! I was sweeping cobwebs in the elevator motor room...', pose: 'chompiras_nervous' },
    { speaker: 'DEFENSA', text: 'And what did you find?', pose: 'donramon_point' },
    { speaker: 'CHOMPIRAS', text: 'Something big behind the generator. Looks like an English leather trunk!', pose: 'chompiras_relieved' }
  ],
  hotspots: AZOTEA_HOTSPOTS_EN,
  talkOptions: [
    {
      id: 'about_elevator_log',
      label: 'The freight elevator log',
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'At 10:25 PM it went from floor 3 to the roof with 95 kilos. Rufino at 75 and the empty trunk at 20. The dead man\'s 80 stayed upstairs!', pose: 'chompiras_nervous' },
        { speaker: 'DEFENSA', text: '(The transport vehicle... Examine the trunk.)', pose: 'donramon_idle' }
      ]
    }
  ]
};
