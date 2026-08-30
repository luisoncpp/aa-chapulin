// @Architecture(descriptionShort="English Case 3 Cabina B crime scene hotspots", type="data", icon="layers")
/**
 * Case 3 Day 1 — XEVC Cabina B (`cabina_radio`) English.
 */

import type { Hotspot, InvestigationScene } from '../../../types/index.js';

const CABINA_HOTSPOTS_EN: Hotspot[] = [
  {
    id: 'hotspot_trofeo',
    label: 'Console Desk',
    x: 30, y: 28, w: 24, h: 30,
    dialogue: [
      { speaker: 'SARGENTO', text: 'I put it there for the photo. Looked neater that way.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: 'You... put it there? Sergeant, that\'s altering the scene.', pose: 'donramon_shock', sfx: 'realization', addEvidence: 'microfono_oro' }
    ]
  },
  {
    id: 'hotspot_piso',
    label: 'Floor & Chalk Outline',
    x: 50, y: 60, w: 42, h: 32,
    dialogue: [
      { speaker: 'CHAPULIN', text: 'Look, Monchito! These glasses are missing an eye!', pose: 'chapulin_point' },
      { speaker: 'DEFENSA', text: 'The right lens is gone... and there isn\'t a single shard of glass in this booth. Interesting.', pose: 'donramon_idle', sfx: 'realization', addEvidence: 'lentes_barriga' }
    ]
  },
  {
    id: 'hotspot_micro',
    label: 'Booth Microphone',
    x: 52, y: 24, w: 16, h: 40,
    dialogue: [
      { speaker: 'CHIMOLTRUFIA', text: 'Ay, the boy unplugs it every night when we finish. ¡Como digo una cosa, digo otra!: I tell him to leave it, and he coils it up.', pose: 'chimoltrufia_idle', addEvidence: 'microfono_cabina' }
    ]
  },
  {
    id: 'hotspot_ventana',
    label: 'Window & Fan',
    x: 70, y: 2, w: 28, h: 50,
    dialogue: [
      { speaker: 'CHAPULIN', text: 'You can hear the fair like we\'re standing in the fair!', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: 'Write that down. It might matter.', pose: 'donramon_idle', addEvidence: 'ventana_cabina' }
    ]
  },
  {
    id: 'hotspot_cintas',
    label: 'Tape Shelf',
    x: 16, y: 8, w: 16, h: 44,
    dialogue: [
      { speaker: 'DEFENSA', text: '(A tape of digestion tips. Doubt this helps anyone.)', pose: 'donramon_sweat', addEvidence: 'cinta_salud' }
    ]
  },
  {
    id: 'hotspot_pasillo',
    label: 'Hallway Carpet',
    x: 0, y: 54, w: 22, h: 32,
    dialogue: [
      { speaker: 'DEFENSA', text: 'Two black grease streaks... from the office to Cabina B. And a brown cashmere thread.', pose: 'donramon_point', sfx: 'realization', addEvidence: 'marcas_carrito' }
    ]
  }
];

export const CASE3_CABINA_EN: InvestigationScene = {
  title: 'Radio Station XEVC - Cabina B',
  name: 'Cabina B',
  bg: 'assets/bg_cabina.jpg',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: 'September 16, 11:00 AM. Radio station XEVC, second floor of Edificio Barriga.' },
    { speaker: 'SARGENTO', text: '¡A sus órdenes, mi Licenciado! Sergeant Refugio Pazguato, at your service and justice\'s.', pose: 'pazguato_saludo' },
    { speaker: 'DEFENSA', text: 'Does the prosecution know you\'re letting us in?', pose: 'donramon_idle' },
    { speaker: 'SARGENTO', text: 'Uh... no. And please don\'t tell Super Sam — he\'s docked me three paychecks already. But I... I don\'t think the little doctor did it.', pose: 'pazguato_sweat' },
    { speaker: 'CHAPULIN', text: 'That\'s the spirit! ¡Síganme los buenos!', pose: 'chapulin_idle' }
  ],
  hotspots: CABINA_HOTSPOTS_EN,
  talkOptions: [
    {
      id: 'about_informe',
      label: 'The medical report',
      dialogue: [
        { speaker: 'SARGENTO', text: 'Here\'s the report, mi Licenciado. I had it folded in four... inside a bean torta. Don\'t worry, I removed the bean.', pose: 'pazguato_saludo', addEvidence: 'informe_barriga' },
        { speaker: 'DEFENSA', text: '(Red wool fibers in the hair... Contusion with an octagonal mark. Noted.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'about_who_else',
      label: 'Who else was in the building?',
      dialogue: [
        { speaker: 'SARGENTO', text: 'Young Ñoño at the console, Mrs. Chimoltrufia in Cabina C, and Don Aniceto... poor Don Aniceto, we found him tied up in the storeroom. Whoever did that had a steady hand.', pose: 'pazguato_sweat', unlockLocation: 'plaza_kermes' },
        { speaker: 'CHAPULIN', text: 'We should talk to the people in the plaza!', pose: 'chapulin_point' }
      ]
    }
  ]
};
