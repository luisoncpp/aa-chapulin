// @Architecture(descriptionShort="English Case 4 day-2 rooftop scene", type="data", icon="layers")
/** Case 4 Day 2 — Rooftop, 12:00, English. */

import type { InvestigationScene } from '../../../types/index.js';
import { AZOTEA_HOTSPOTS_EN } from './hotel_azotea_hotspots_en.js';

export const CASE4_HOTEL_AZOTEA_EN: InvestigationScene = {
  title: 'Rooftop and Machine Room',
  name: 'Rooftop',
  bg: 'assets/bg_hotel_azotea_day.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'chompiras_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'October 26, 12:00 PM. Rooftop. Chómpiras and the Sergeant join the inspection.' },
    { speaker: 'CHOMPIRAS', text: 'The trunk is where the log says. Nobody found it while sweeping by chance.', pose: 'chompiras_idle' }
  ],
  hotspots: AZOTEA_HOTSPOTS_EN,
  talkOptions: [
    {
      id: 'cotejar_porte',
      label: 'Check the freight',
      condition: (flags) => Boolean(flags.examined_hotspot_etiqueta) && Boolean(flags.examined_hotspot_faja) && Boolean(flags.examined_hotspot_forro),
      dialogue: [
        { speaker: 'SARGENTO', text: 'I am going to photograph the lining before I collect anything. Photo, number, bag. In that order.', pose: 'pazguato_saludo' },
        { speaker: 'DEFENSA', text: 'And that little snag of cloth, include it.', pose: 'donramon_point' },
        { speaker: 'CHOMPIRAS', text: 'All that work over one thread?', pose: 'chompiras_nervous' },
        { speaker: 'DEFENSA', text: 'Chómpiras, in my trade threads are the only thing a man can pull.', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: 'In mine too! You see, my tights...', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'No.', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: '...my tights keep unravelling along the back seam.', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'Sergeant, photograph that too. Just in case.', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: 'The swatch matches the guarded clothing tear. Edge and weave correspondence.', pose: 'pazguato_saludo', addEvidence: 'baul_etiquetas' },
        { speaker: 'DEFENSA', text: '(It may show that garment touched the inside; the garment may have lain apart from the body.)', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: 'I am organizing the results for the precinct.', pose: 'pazguato_decidido', unlockLocation: 'delegacion' }
      ]
    }
  ]
};
