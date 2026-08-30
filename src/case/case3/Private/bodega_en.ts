// @Architecture(descriptionShort="English Case 3 day-3 bodega and Cabina A investigation", type="data", icon="layers")
/**
 * Case 3 Day 3 — Storeroom & Cabina A (`bodega_radio`) English.
 */

import type { Hotspot, InvestigationScene } from '../../../types/index.js';

const BODEGA_HOTSPOTS_EN: Hotspot[] = [
  {
    id: 'hotspot_ataduras',
    label: 'Bonds on the Floor',
    x: 24, y: 58, w: 32, h: 24,
    dialogue: [
      { speaker: 'CHAPULIN', text: 'Monchito! The gag knot is in front, on the left side!', pose: 'chapulin_point' },
      { speaker: 'DEFENSA', text: 'If someone gags you from behind, where does the knot land?', pose: 'donramon_idle' },
      { speaker: 'CHAPULIN', text: 'In back! ¡Todos mis movimientos están fríamente calculados!', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(Front and left. Like tying your own tie in a mirror.)', pose: 'donramon_sweat', sfx: 'realization', addEvidence: 'ataduras_bodega' }
    ]
  },
  {
    id: 'hotspot_polvo',
    label: 'Floor Dust',
    x: 52, y: 62, w: 28, h: 20,
    dialogue: [
      { speaker: 'DEFENSA', text: 'A clean sit-down mark. No drag, no kick. And the witness\'s wrists... not a single scrape.', pose: 'donramon_point' }
    ]
  },
  {
    id: 'hotspot_discos',
    label: 'Anniversary Shelf',
    x: 8, y: 16, w: 22, h: 42,
    dialogue: [
      { speaker: 'DEFENSA', text: 'He said he came down for these records. Nobody\'s touched this box in five days. The seal is intact since Monday.', pose: 'donramon_idle' },
      { speaker: 'CHAPULIN', text: '¡Chanfle! Then what did he come down for?', pose: 'chapulin_panic' },
      { speaker: 'DEFENSA', text: 'To be found, Chapulín. He came down to be found.', pose: 'donramon_point' }
    ]
  },
  {
    id: 'hotspot_cabina_a',
    label: 'Cabina A — Window',
    x: 72, y: 12, w: 22, h: 38,
    dialogue: [
      { speaker: 'CHAPULIN', text: 'Same wedge! Same dead fan!', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: 'Confirms the window note: you can hear the plaza from here too.', pose: 'donramon_idle' }
    ]
  },
  {
    id: 'hotspot_sketch',
    label: 'Tape Shelf — Cabina A',
    x: 48, y: 18, w: 20, h: 36,
    dialogue: [
      { speaker: 'CHAPULIN', text: 'It\'s Señor Barriga\'s voice! He\'s alive and talking!', pose: 'chapulin_point' },
      { speaker: 'DEFENSA', text: 'It\'s the Thursday sketch, Chapulín. An actor imitating the landlord. It\'s been on air for years and the whole neighborhood laughs.', pose: 'donramon_idle', addEvidence: 'cinta_sketch' },
      { speaker: 'DEFENSA', text: '(...An actor imitating the landlord. An actor. Imitating. The landlord.)', pose: 'donramon_shock', sfx: 'realization', unlockLocation: 'detention_d3' }
    ]
  }
];

export const CASE3_BODEGA_EN: InvestigationScene = {
  title: 'XEVC Storeroom & Cabina A',
  name: 'XEVC Storeroom',
  bg: 'assets/bg_bodega.jpg',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: 'September 18, 7:00 AM. XEVC storeroom: cables, dust, and a door to Cabina A.' },
    { speaker: 'DEFENSA', text: 'This is where they found Don Aniceto tied up. Let\'s check every corner.', pose: 'donramon_idle' },
    { speaker: 'CHAPULIN', text: 'My vinyl antennae are already trembling!', pose: 'chapulin_idle' }
  ],
  hotspots: BODEGA_HOTSPOTS_EN,
  talkOptions: [
    {
      id: 'about_amarrado',
      label: 'About Aniceto\'s bonds',
      dialogue: [
        { speaker: 'DEFENSA', text: 'Twenty minutes gagged... and the dust shows no struggle. That doesn\'t add up.', pose: 'donramon_point' },
        { speaker: 'CHAPULIN', text: '¡Lo sospeché desde un principio!', pose: 'chapulin_point' }
      ]
    }
  ]
};
