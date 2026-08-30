// @Architecture(descriptionShort="English Case 3 Cabina B crime scene hotspots", type="data", icon="layers")
/**
 * Case 3 Day 1 — XEVC Cabina B investigation (English).
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE3_CABINA_EN = {
  title: 'XEVC — Cabina B',
  name: 'Radio Booth B',
  bg: 'assets/bg_cabina.jpg',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: 'September 16, 11:00 AM. Radio station XEVC, second floor of Edificio Barriga.' },
    { speaker: 'PAZGUATO', text: '¡A sus órdenes, mi Licenciado! Sergeant Refugio Pazguato, at your service and justice\'s.', pose: 'pazguato_saludo' },
    { speaker: 'DEFENSA', text: 'Does the prosecution know you\'re letting us in?', pose: 'donramon_idle' },
    { speaker: 'PAZGUATO', text: 'Uh... no. And please don\'t tell Super Sam — he\'s docked me three paychecks already. But I... I don\'t think the little doctor did it.', pose: 'pazguato_sweat' },
    { speaker: 'CHAPULIN', text: 'That\'s the spirit! ¡Síganme los buenos!', pose: 'chapulin_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_trofeo',
      label: 'Console Desk',
      x: 35, y: 40, w: 30, h: 25,
      dialogue: [
        { speaker: 'PAZGUATO', text: 'I put it there for the photo. Looked neater that way.', pose: 'pazguato_sweat' },
        { speaker: 'DEFENSA', text: 'You... put it there? Sergeant, that\'s altering the scene.', pose: 'donramon_shock', addEvidence: 'microfono_oro' }
      ]
    },
    {
      id: 'hotspot_piso',
      label: 'Floor & Chalk Outline',
      x: 20, y: 65, w: 40, h: 20,
      dialogue: [
        { speaker: 'CHAPULIN', text: 'Look, Monchito! These glasses are missing an eye!', pose: 'chapulin_point', addEvidence: 'lentes_barriga' },
        { speaker: 'DEFENSA', text: 'The right lens is gone... and there isn\'t a single shard of glass in this booth. Interesting.', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'hotspot_micro',
      label: 'Booth Microphone',
      x: 55, y: 25, w: 15, h: 30,
      dialogue: [
        { speaker: 'CHIMOLTRUFIA', text: 'Ay, the boy unplugs it every night when we finish. ¡Como digo una cosa, digo otra!: I tell him to leave it, and he coils it up.', pose: 'chimoltrufia_idle', addEvidence: 'microfono_cabina' }
      ]
    },
    {
      id: 'hotspot_ventana',
      label: 'Window & Fan',
      x: 75, y: 10, w: 20, h: 35,
      dialogue: [
        { speaker: 'CHAPULIN', text: 'You can hear the fair like we\'re standing in the fair!', pose: 'chapulin_idle', addEvidence: 'ventana_cabina' },
        { speaker: 'DEFENSA', text: 'Write that down. It might matter.', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'hotspot_cintas',
      label: 'Tape Shelf',
      x: 5, y: 20, w: 18, h: 40,
      dialogue: [
        { speaker: 'DEFENSA', text: '(A tape of digestion tips. Doubt this helps anyone.)', pose: 'donramon_idle', addEvidence: 'cinta_salud' }
      ]
    },
    {
      id: 'hotspot_pasillo',
      label: 'Hallway Carpet',
      x: 0, y: 70, w: 25, h: 20,
      dialogue: [
        { speaker: 'DEFENSA', text: 'Two parallel grease streaks from the office door to Cabina B. And a thread from Señor Barriga\'s jacket stuck in a wheel.', pose: 'donramon_point', sfx: 'realization', addEvidence: 'marcas_carrito' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_informe',
      label: 'The medical report',
      dialogue: [
        { speaker: 'PAZGUATO', text: 'Here it is, mi Licenciado — folded in four inside a bean torta. Contusion on the right temple, octagonal mark, and red wool fibers in the hair and neck.', pose: 'pazguato_idle', addEvidence: 'informe_medico' }
      ]
    },
    {
      id: 'about_quien',
      label: 'Who else was in the building?',
      dialogue: [
        { speaker: 'PAZGUATO', text: 'Young Ñoño at the console, Mrs. Chimoltrufia in Cabina C, and Don Aniceto... poor Don Aniceto, we found him tied up in the storeroom. Whoever did that had a steady hand.', pose: 'pazguato_sweat', unlockLocation: 'plaza_kermes' }
      ]
    }
  ]
} as InvestigationScene;
