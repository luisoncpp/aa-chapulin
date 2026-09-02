// @Architecture(descriptionShort="English Case 2 postal alley scene with Jaimito", type="data", icon="layers")
/**
 * Case 2 Day 2 — Back alley post and Don Jaimito (English).
 */

import type { InvestigationScene } from '../../types/index.js';

export const CASE2_POSTAL_EN: InvestigationScene = {
  title: 'Post Office and Rear Alley',
  name: 'Postal Alley',
  bg: 'assets/bg_postal.webp',
  bgm: 'callejon_postal',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: 'August 30, 9:00 AM. Rear Alley and Postal Stand.' },
    { speaker: 'JAIMITO', text: 'Good morning... I came to deliver these letters, but I want to avoid fatigue...', pose: 'jaimito_tired' },
    { speaker: 'DEFENSA', text: 'Don Jaimito, sorry to bother you, but on the night of the theft you parked your mail cart in this alley, right under the hacienda dumbwaiter.', pose: 'donramon_idle' },
    { speaker: 'JAIMITO', text: 'Ah, yes! In my hometown, Tangamandapio, carts are left in the shade of the guava trees...', pose: 'jaimito_idle' },
    { speaker: 'CHAPULIN', text: 'Don Jaimito, do you recall Mr. Peterete handing you a package on the 28th at 9:30 PM?', pose: 'chapulin_idle' },
    { speaker: 'JAIMITO', text: 'At 9:30 PM? Impossible! I was taking a restorative nap on the park bench to avoid fatigue. They even gave me a ticket for leaving the cart abandoned.', pose: 'jaimito_tired' }
  ],
  hotspots: [
    {
      id: 'hotspot_multa',
      label: 'Traffic Citation',
      x: 2, y: 40, w: 11, h: 22,
      dialogue: [
        { speaker: 'JAIMITO', text: 'Yes, look. It says: "9:30 PM. Postal vehicle abandoned with no carrier in sight."', pose: 'jaimito_tired', addEvidence: 'multa_transito' }
      ]
    },
    {
      id: 'hotspot_registro',
      label: 'Postal Ledger',
      x: 13, y: 30, w: 16, h: 28,
      dialogue: [
        { speaker: 'DEFENSA', text: 'This 9:30 PM entry is stamped with an irregular hand stamp... not the official mechanical stamp you always carry.', pose: 'donramon_point', addEvidence: 'registro_postal' },
        { speaker: 'JAIMITO', text: 'I stamped nothing! The official stamp never leaves me, to avoid the fatigue of looking for it.', pose: 'jaimito_proud' }
      ]
    },
    {
      id: 'hotspot_saca_postal',
      label: 'Mail Sack',
      x: 28, y: 55, w: 22, h: 20,
      dialogue: [
        { speaker: 'DEFENSA', text: 'Good grief! This shoe-polish tin weighs over 5 kilos... and golden dust is spilling from the lid!', pose: 'donramon_shock', sfx: 'realization', addEvidence: 'lata_grasa' },
        { speaker: 'CHAPULIN', text: "My vinyl antennae are detecting the presence of the enemy! I mean... they're detecting something very suspicious in this tin!", pose: 'chapulin_point', addEvidence: 'antenitas_vinil', unlockLocation: 'casa_clotilde' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_siesta',
      label: 'Where were you at 9:30 PM?',
      dialogue: [
        { speaker: 'JAIMITO', text: 'On the park bench, avoiding fatigue. The cart sat all alone in the alley. The police never searched it; they only secured the vault.', pose: 'jaimito_tired' }
      ]
    }
  ]
};
