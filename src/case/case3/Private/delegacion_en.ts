// @Architecture(descriptionShort="English Case 3 day-2 precinct visit with transmission log", type="data", icon="layers")
/**
 * Case 3 Day 2 — Police station (`delegacion`) English.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE3_DELEGACION_EN: InvestigationScene = {
  title: 'Police Station',
  name: 'Police Station',
  bg: 'assets/bg_delegacion.jpg',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: 'September 17, 5:00 PM. Police station, the back desk that fell to the sergeant.' },
    { speaker: 'PAZGUATO', text: 'Come in, Licenciado. Want some? Bean torta. I only eat beans now — the prosecutor left me fourteen pesos this paycheck.', pose: 'pazguato_sweat' },
    { speaker: 'DEFENSA', text: 'No thanks, Sergeant. What did you recover from the control booth?', pose: 'donramon_idle' },
    { speaker: 'PAZGUATO', text: 'Here\'s the transmission log, mi Licenciado. The console writes down everything that goes on air — by itself.', pose: 'pazguato_decidido', addEvidence: 'bitacora_transmision' },
    { speaker: 'DEFENSA', text: '...Sergeant. It says at 23:03 an AUTOMATIC STATION ID cut aired. Cartridge three.', pose: 'donramon_shock' },
    { speaker: 'PAZGUATO', text: 'Yeah, right? I barely understood it either.', pose: 'pazguato_sweat' },
    { speaker: 'CHAPULIN', text: 'Monchito! That means at 11:03 the console wasn\'t broadcasting anyone live... it was playing a recording!', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: '¡CHANFLE! The scream the whole plaza heard was canned!', pose: 'donramon_panic', sfx: 'realization', updateEvidence: 'microfono_cabina' }
  ],
  hotspots: [
    {
      id: 'hotspot_archivo',
      label: 'Evidence Filing Cabinet',
      x: 68, y: 18, w: 24, h: 48,
      dialogue: [
        { speaker: 'PAZGUATO', text: 'I keep whatever the prosecutor doesn\'t dock me for. For now, pure paper.', pose: 'pazguato_idle' }
      ]
    },
    {
      id: 'hotspot_torta',
      label: 'Bean Torta',
      x: 36, y: 42, w: 20, h: 20,
      dialogue: [
        { speaker: 'DEFENSA', text: '(Better not. I already know where he kept the medical report.)', pose: 'donramon_sweat' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_cartucho',
      label: 'Where is cartridge three?',
      dialogue: [
        { speaker: 'PAZGUATO', text: 'See... I took the big reel from Cabina A. Thought that was the good one. The cartridges got left... somewhere in the station.', pose: 'pazguato_sweat' },
        { speaker: 'DEFENSA', text: '(Cartridge 3 is still missing. And it\'s the scream recording.)', pose: 'donramon_idle' },
        { speaker: 'PAZGUATO', text: 'If you give me a chance, I\'ll find it. Even if I have to stick my hands in the trash.', pose: 'pazguato_decidido' }
      ]
    }
  ]
};
