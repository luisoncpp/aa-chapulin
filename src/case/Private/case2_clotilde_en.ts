// @Architecture(descriptionShort="English Case 2 Clotilde lab scene with valerian and wax", type="data", icon="layers")
/**
 * Case 2 Day 2 — Doña Clotilde's botanical laboratory (English).
 */

import type { InvestigationScene } from '../../types/index.js';

export const CASE2_CLOTILDE_EN: InvestigationScene = {
  title: 'Room 71 and Botanical Laboratory',
  name: "Doña Clotilde's House",
  bg: 'assets/bg_clotilde.jpg',
  bgm: 'casa_clotilde',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: "August 30, 11:30 AM. Doña Clotilde's House." },
    { speaker: 'CLOTILDE', text: 'Oh, my Roro! What joy to have you in my humble home! Shall I prepare coffee or a calming infusion?', pose: 'clotilde_flustered' },
    { speaker: 'DEFENSA', text: 'Ah... thank you, Doña Clotilde, but we are investigating a curious aroma. Do you recognize this vial?', pose: 'donramon_sweat' },
    { speaker: 'CLOTILDE', text: 'Of course! It is my secret Concentrated Valerian and Rose Essence. A very elegant man came the afternoon before the theft and bought three bottles, claiming terrible insomnia.', pose: 'clotilde_mysterious' },
    { speaker: 'CHAPULIN', text: 'An elegant man? Don\'t you remember who he was?', pose: 'chapulin_idle' },
    { speaker: 'CLOTILDE', text: 'He wore his hat pulled down and a scarf covering half his face. But his manners were very refined, nothing like the rabble.', pose: 'clotilde_mysterious' }
  ],
  hotspots: [
    {
      id: 'hotspot_frasco',
      label: 'Essence Bottles',
      x: 32, y: 14, w: 24, h: 32,
      dialogue: [
        { speaker: 'CLOTILDE', text: 'Take a sample, my Roro. It causes instant sleep for about thirty minutes. It matches the aroma on your handkerchief!', pose: 'clotilde_idle', addEvidence: 'frasco_valeriana' }
      ]
    },
    {
      id: 'hotspot_basura',
      label: 'Trash and Wax',
      x: 30, y: 74, w: 22, h: 24,
      dialogue: [
        { speaker: 'DEFENSA', text: 'Doña Clotilde, would you mind if we look around? Chapulín, look at this!', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: 'It is a piece of candle wax shaped like a key!', pose: 'chapulin_idle', addEvidence: 'molde_cera' },
        { speaker: 'DEFENSA', text: 'The mysterious buyer used Doña Clotilde\'s wax to mold a key when he came to buy the sedative!', pose: 'donramon_point' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_peterete_visit',
      label: 'About the mysterious buyer',
      dialogue: [
        { speaker: 'CLOTILDE', text: 'He arrived so elegant, hat and scarf. He asked for the essence "for insomnia" and lingered by my candles. I never saw his face clearly!', pose: 'clotilde_flustered' }
      ]
    }
  ]
};
