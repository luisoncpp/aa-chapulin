// @Architecture(descriptionShort="English Case 3 Barriga office crime-scene hotspots", type="data", icon="layers")
/**
 * Case 3 Day 2 — Señor Barriga's office (`despacho_barriga`) English.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE3_DESPACHO_EN: InvestigationScene = {
  title: 'Señor Barriga\'s Office',
  name: 'Barriga Office',
  bg: 'assets/bg_despacho.jpg',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: 'September 17, 9:30 AM. Administration office, court seals on the door.' },
    { speaker: 'ANICETO', text: 'Come in, Counselor. They asked me to open it — I\'m treasurer of the kermés... though I confess my hands shake coming in here.', pose: 'aniceto_idle' },
    { speaker: 'DEFENSA', text: 'You keep the fund\'s books?', pose: 'donramon_idle' },
    { speaker: 'ANICETO', text: 'I keep them, I sign them, and I weep over them. Twenty-five years. This station runs on affection and cables tied with string.', pose: 'aniceto_idle' },
    { speaker: 'CHAPULIN', text: 'Incredible! No wonder they say el que mucho abarca... poco aprieta el cinturón.', pose: 'chapulin_idle' },
    { speaker: 'ANICETO', text: '"El que mucho abarca, poco aprieta," young man. No belt. Forgive me — I simply cannot help it.', pose: 'aniceto_thinking' }
  ],
  hotspots: [
    {
      id: 'hotspot_escritorio',
      label: 'Under the Desk',
      x: 42, y: 56, w: 38, h: 32,
      dialogue: [
        { speaker: 'CHAPULIN', text: 'Here\'s the eye the glasses were missing!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'And the rug is red wool. The medical report\'s fibers came from here. This is the real crime scene.', pose: 'donramon_point', sfx: 'realization', updateEvidence: 'lentes_barriga' }
      ]
    },
    {
      id: 'hotspot_pedestal',
      label: 'Velvet Pedestal',
      x: 2, y: 50, w: 24, h: 34,
      dialogue: [
        { speaker: 'DEFENSA', text: 'Empty pedestal... dust ring the exact size of the octagonal base. The plaque says: "A Aniceto Rebollar, 25 años de La Voz de Oro".', pose: 'donramon_idle', updateEvidence: 'microfono_oro' },
        { speaker: 'ANICETO', text: '...Yes. It\'s mine. How ugly, that they used it for that.', pose: 'aniceto_thinking' },
        { speaker: 'DEFENSA', text: '(His trophy was in the office. It turned up in the booth. So it rode the cart with Señor Barriga.)', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'hotspot_caja',
      label: 'Safe & Ashtray',
      x: 2, y: 14, w: 24, h: 36,
      dialogue: [
        { speaker: 'CHAPULIN', text: 'They stole a page and smoked it!', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: 'They burned it, Chapulín. And there isn\'t a single bill in that safe, because the Fund is never kept in cash. They didn\'t come for money. They came for a page... and that someone knew the combination.', pose: 'donramon_point', sfx: 'realization', addEvidence: 'libro_verde', unlockLocation: 'clinica_chapatin' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_tesoro',
      label: 'About the Kermés Fund',
      dialogue: [
        { speaker: 'ANICETO', text: 'I signed the Green Book. Every peso, every missing peso... and last night they tore out the page that hurt most.', pose: 'aniceto_idle' },
        { speaker: 'DEFENSA', text: '(Who else knew that safe\'s combination?)', pose: 'donramon_idle' }
      ]
    }
  ]
};
