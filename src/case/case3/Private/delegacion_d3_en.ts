// @Architecture(descriptionShort="English Case 3 day-3 precinct cartridge and pawn-ticket reveals", type="data", icon="layers")
/**
 * Case 3 Day 3 — Police station (`delegacion_d3`) English.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE3_DELEGACION_D3_EN: InvestigationScene = {
  title: 'Police Station — Day 3',
  name: 'Police Station',
  bg: 'assets/bg_delegacion.jpg',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  intro: [
    { speaker: 'NARRADOR', text: 'September 18, 8:00 AM. The sergeant hasn\'t changed uniforms. And doesn\'t plan to.' },
    { speaker: 'PAZGUATO', text: '¡Mi Licenciado! All night in the station trash bins! Eight hours! With these little hands!', pose: 'pazguato_decidido' },
    { speaker: 'CHAPULIN', text: 'And with my vinyl antennae! They vibrated nasty over the alley bin!', pose: 'chapulin_point' },
    { speaker: 'PAZGUATO', text: 'There it was, mi Licenciado. Under the peels. Cartridge three.', pose: 'pazguato_decidido', addEvidence: 'cartucho_corte' },
    { speaker: 'NARRADOR', text: '(They put the cartridge in the machine. The room goes silent.)', sfx: 'realization' },
    { speaker: 'BARRIGA', text: '¡Doctor Chapatín, no! ¡Auxilio! ...' },
    { speaker: 'DEFENSA', text: 'Again. Turn up what\'s BEHIND the voice.', pose: 'donramon_shock' },
    { speaker: 'NARRADOR', text: '(Under the scream, distant and raspy, a plaza speaker:) "...se ha perdido un niño de cachetes muy grandes..."' },
    { speaker: 'CHAPULIN', text: 'That\'s Quico\'s notice! From the Professor\'s script! Nine-forty at night!', pose: 'chapulin_panic' },
    { speaker: 'DEFENSA', text: 'At 9:40 Señor Barriga was in the plaza, alive, helping search for the boy — in front of Doña Florinda and the Professor!', pose: 'donramon_slam', updateEvidence: 'cartucho_corte' },
    { speaker: 'DEFENSA', text: 'So at 9:40, while Señor Barriga hunted Quico in the plaza... SOMEONE was recording his voice in a booth.', pose: 'donramon_point' },
    { speaker: 'PAZGUATO', text: 'What does that mean, mi Licenciado?', pose: 'pazguato_sweat' },
    { speaker: 'DEFENSA', text: 'That the voice on this cartridge, Sergeant, was never Señor Barriga\'s.', pose: 'donramon_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_reproductor',
      label: 'Cartridge Player',
      x: 42, y: 30, w: 26, h: 32,
      dialogue: [
        { speaker: 'DEFENSA', text: 'The 11:03 scream... and underneath, the 9:40 notice. Impossible for the same person to be in two places.', pose: 'donramon_point' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_empeno',
      label: 'About the Golden Microphone',
      dialogue: [
        { speaker: 'PAZGUATO', text: 'And while I was at it I went to the Monte de Piedad, mi Licenciado. That microphone was pawned since June. Redeemed September 3. Twelve thousand pesos. Cash.', pose: 'pazguato_decidido', addEvidence: 'boleta_empeno', updateEvidence: 'microfono_oro' },
        { speaker: 'DEFENSA', text: 'And where does a neighborhood radio announcer get twelve thousand pesos in cash?', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'about_libro_verde',
      label: 'Pencil rubbing of the Green Book',
      dialogue: [
        { speaker: 'CHAPULIN', text: 'With the pencil on its side, like in school! It came out! It says: \'Missing forty thousand. The withdrawals were signed by the treasurer. I\'ll say it on air.\'', pose: 'chapulin_point', sfx: 'realization', updateEvidence: 'libro_verde', unlockLocation: 'centro_detencion_d3' },
        { speaker: 'DEFENSA', text: '(Señor Barriga was going to denounce the treasurer... on air. On his own station.)', pose: 'donramon_shock' }
      ]
    }
  ]
};
