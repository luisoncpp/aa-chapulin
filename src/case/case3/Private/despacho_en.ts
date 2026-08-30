// @Architecture(descriptionShort="English Case 3 Barriga office crime-scene revisit", type="data", icon="layers")
/**
 * Case 3 Day 2 — Señor Barriga's office investigation (English).
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE3_DESPACHO_EN = {
  title: 'Señor Barriga\'s Office',
  name: 'Administration Office',
  bg: 'assets/bg_despacho.jpg',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: 'September 17, 9:30 AM. Administration office, court seals on the door.' },
    { speaker: 'ANICETO', text: 'Come in, Counselor. They asked me to open it — I\'m treasurer of the kermés... though I confess my hands shake coming in here.', pose: 'aniceto_terciopelo' },
    { speaker: 'DEFENSA', text: 'You keep the fund\'s books?', pose: 'donramon_idle' },
    { speaker: 'ANICETO', text: 'I keep them, I sign them, and I weep over them. Twenty-five years. This station runs on affection and cables tied with string.', pose: 'aniceto_terciopelo' },
    { speaker: 'CHAPULIN', text: 'Incredible! No wonder they say el que mucho abarca... poco aprieta el cinturón.', pose: 'chapulin_thinking' },
    { speaker: 'ANICETO', text: '"El que mucho abarca, poco aprieta," young man. No belt. Forgive me — I simply cannot help it.', pose: 'aniceto_thinking' }
  ],
  hotspots: [
    {
      id: 'hotspot_escritorio',
      label: 'Under the Desk',
      x: 30, y: 55, w: 40, h: 25,
      dialogue: [
        { speaker: 'CHAPULIN', text: 'Here\'s the eye the glasses were missing!', pose: 'chapulin_point', updateEvidence: 'lentes_barriga' },
        { speaker: 'DEFENSA', text: 'And the rug is red wool. The medical report\'s fibers came from here. This is the real crime scene.', pose: 'donramon_shock' }
      ]
    },
    {
      id: 'hotspot_pedestal',
      label: 'Velvet Pedestal',
      x: 70, y: 30, w: 20, h: 40,
      dialogue: [
        { speaker: 'ANICETO', text: '...Yes. It\'s mine. How ugly, that they used it for that.', pose: 'aniceto_thinking', updateEvidence: 'microfono_oro' },
        { speaker: 'DEFENSA', text: '(His trophy was in the office. It turned up in the booth. So it rode the cart with Señor Barriga.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'hotspot_caja',
      label: 'Safe & Ashtray',
      x: 10, y: 25, w: 25, h: 40,
      dialogue: [
        { speaker: 'CHAPULIN', text: 'They stole a page and smoked it!', pose: 'chapulin_panic', addEvidence: 'libro_verde' },
        { speaker: 'DEFENSA', text: 'They burned it, Chapulín. Someone didn\'t want September 12 read... and that someone knew the combination.', pose: 'donramon_point', unlockLocation: 'clinica_chapatin' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_tesoro',
      label: 'About the kermés fund',
      dialogue: [
        { speaker: 'ANICETO', text: 'I sign every withdrawal. Twenty-five years of trust. If something\'s missing... I\'d be the first to want it found.', pose: 'aniceto_terciopelo' },
        { speaker: 'DEFENSA', text: '(Velvet voice, perfect manners, and that compulsion to correct. Note it twice now.)', pose: 'donramon_sweat' }
      ]
    }
  ]
} as InvestigationScene;
