// @Architecture(descriptionShort="English Case 2 Clotilde lab scene with valerian and wax", type="data", icon="layers")
/**
 * Case 2 Day 2 — Doña Clotilde's botanical laboratory (English).
 */

import type { InvestigationScene } from '../../types/index.js';

export const CASE2_CLOTILDE_EN: InvestigationScene = {
  title: 'Room 71 and Botanical Laboratory',
  name: "Doña Clotilde's House",
  bg: 'assets/bg_clotilde.jpg',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: "August 30, 11:30 AM. Doña Clotilde's House." },
    { speaker: 'CLOTILDE', text: 'Oh, my Roro! What joy to have you in my humble home! Shall I prepare coffee or a calming infusion?', pose: 'clotilde_flustered' },
    { speaker: 'DEFENSA', text: 'Ah... thank you, Doña Clotilde, but we are investigating a curious aroma. Do you recognize this vial?', pose: 'donramon_sweat' },
    { speaker: 'CLOTILDE', text: 'Of course! It is my secret Concentrated Valerian and Rose Essence. Mr. Peterete came the afternoon before the theft and bought three bottles, claiming insomnia.', pose: 'clotilde_mysterious' },
    { speaker: 'CHAPULIN', text: 'Bingo! The sleeping gas in the vent was bought by Peterete himself!', pose: 'chapulin_point' }
  ],
  hotspots: [
    {
      id: 'hotspot_frasco',
      label: 'Essence Bottles',
      x: 18, y: 28, w: 22, h: 40,
      dialogue: [
        { speaker: 'CLOTILDE', text: 'Take a sample, my Roro. It causes instant sleep for about thirty minutes. It matches the aroma on your handkerchief!', pose: 'clotilde_idle', addEvidence: 'frasco_valeriana' }
      ]
    },
    {
      id: 'hotspot_basura',
      label: 'Trash and Wax',
      x: 62, y: 48, w: 26, h: 32,
      dialogue: [
        { speaker: 'DEFENSA', text: 'Doña Clotilde, would you mind if we look around? Chapulín, look at this!', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: 'It is a piece of candle wax shaped like a key!', pose: 'chapulin_idle', addEvidence: 'molde_cera' },
        { speaker: 'DEFENSA', text: 'Peterete used Doña Clotilde\'s wax to mold the master key when he came to buy the sedative!', pose: 'donramon_point' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_peterete_visit',
      label: "About Peterete's visit",
      dialogue: [
        { speaker: 'CLOTILDE', text: 'He arrived so elegant, with his hat. He asked for the essence "for insomnia" and lingered by my candles. What a gentleman... or so I thought!', pose: 'clotilde_flustered' }
      ]
    }
  ]
};
