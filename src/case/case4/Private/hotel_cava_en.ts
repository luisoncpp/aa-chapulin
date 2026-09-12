// @Architecture(descriptionShort="English Case 4 day-3 wine cellar evidence scene", type="data", icon="layers")
/** Case 4 Day 3 — Wine Cellar (`hotel_cava`), 09:00, English. Spec §11.1. */

import type { InvestigationScene } from '../../../types/index.js';
import { CAVA_HOTSPOTS_EN } from './hotel_cava_hotspots_en.js';

export const CASE4_HOTEL_CAVA_EN: InvestigationScene = {
  title: 'Wine Cellar of the Gran Hotel',
  name: 'Wine Cellar',
  bg: 'assets/bg_hotel_cava.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'October 27, 9:00. Cellar of the Gran Hotel Buena Vista.' },
    { speaker: 'SARGENTO', text: 'I brought you everything we have on that bottle, counselor. Even the cork the young lady Maruja gave us.', pose: 'pazguato_saludo' },
    { speaker: 'DEFENSA', text: 'How long have you had it?', pose: 'donramon_point' },
    { speaker: 'SARGENTO', text: 'Since noon the day after the discovery. With hour, folio, and both signatures. As you see it there, that cork has better paperwork than I do.', pose: 'pazguato_decidido' },
    { speaker: 'DEFENSA', text: 'Then that piece of cork left the hotel before the man drank.', pose: 'donramon_idle' },
    { speaker: 'SARGENTO', text: 'It was in a purse and then in my archive. Nobody else touched it, I will sign to that.', pose: 'pazguato_idle' },
    { speaker: 'CHAPULIN', text: 'And what are we going to ask a cork, Don Ramón? Corks do not talk!', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'This one does. We are going to ask it how the thing that killed Mr. Gómez got in.', pose: 'donramon_point' },
    { speaker: 'CHAPULIN', text: '...Oh. Now the cork gives me the creeps.', pose: 'chapulin_panic' }
  ],
  hotspots: CAVA_HOTSPOTS_EN,
  talkOptions: [
    {
      id: 'analisis_canal',
      label: 'Request the channel analysis',
      condition: (flags) => Boolean(flags.examined_hotspot_libro) && Boolean(flags.examined_hotspot_botella) && Boolean(flags.examined_hotspot_cierre),
      dialogue: [
        { speaker: 'CHAPULIN', text: 'It has two holes! A fat one and a skinny one.', pose: 'chapulin_point' },
        { speaker: 'SARGENTO', text: 'The fat one is the corkscrew. The skinny one... that one I cannot place.', pose: 'pazguato_sweat' },
        { speaker: 'DEFENSA', text: 'Neither can I. And the things I do not know keep me awake more than my landlord does.', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: 'So I log it exactly as it is?', pose: 'pazguato_saludo' },
        { speaker: 'DEFENSA', text: 'Exactly as it is. And have them analyse it on the inside, not the outside.', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: 'Including that little speck caught on the rim?', pose: 'pazguato_saludo' },
        { speaker: 'DEFENSA', text: 'Including that. But the report is to say what it is, not what it resembles. I do not want riddles: I want an analysis.', pose: 'donramon_point', unlockLocation: 'hotel_lobby_d3' },
        { speaker: 'CHAPULIN', text: '(My antennae are tingling. Although it might just be the cellar cold.)', pose: 'chapulin_idle' },
        { speaker: 'SARGENTO', text: 'I am filing the request. The result reaches the precinct this afternoon.', pose: 'pazguato_decidido' }
      ]
    }
  ]
};
