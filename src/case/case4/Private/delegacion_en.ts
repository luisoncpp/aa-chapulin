// @Architecture(descriptionShort="English Case 4 day-2 precinct scene", type="data", icon="layers")
/** Case 4 Day 2 — Precinct, 14:00, English. Deliveries close the topic, never the intro. */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_DELEGACION_EN: InvestigationScene = {
  title: 'Police Precinct',
  name: 'Precinct',
  bg: 'assets/bg_delegacion.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'October 26, 2:00 PM. Police Precinct.' },
    { speaker: 'SARGENTO', text: 'Let us check Botija’s first account against signatures and destinations. No invented visits.', pose: 'pazguato_saludo' }
  ],
  hotspots: [
    {
      id: 'hotspot_expediente',
      label: 'Freight File',
      x: 10, y: 24, w: 18, h: 32,
      dialogue: [
        { speaker: 'SARGENTO', text: 'Signatures and destinations match what Botija said from the start.', pose: 'pazguato_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'cotejar_firmas',
      label: 'Check signatures and destinations',
      dialogue: [
        { speaker: 'SARGENTO', text: 'The freight is reviewed: numbers, strap, and signatures in place.', pose: 'pazguato_saludo' },
        { speaker: 'DEFENSA', text: '(The effect’s lab confirmation does not name its user. Only how it works.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'resultado_laboratorio',
      label: 'The lab result',
      condition: (flags) => Boolean(flags.talk_cotejar_firmas),
      dialogue: [
        { speaker: 'SARGENTO', text: 'Toxicology came in, counselor. And this one turned my stomach.', pose: 'pazguato_sweat' },
        { speaker: 'DEFENSA', text: 'Say it once and plainly.', pose: 'donramon_idle' },
        { speaker: 'SARGENTO', text: 'What killed Mr. Gómez was also in the wine in this glass.', pose: 'pazguato_decidido', addEvidence: 'copa_vino' },
        { speaker: 'CHAPULIN', text: 'Then it was not the bullet, or the noise, or the trunk!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'It was the glass. Sergeant, does the analysis say who put it there?', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'No, sir. It says what was there and how it entered the body. Names do not come in the jar.', pose: 'pazguato_sweat' },
        { speaker: 'CHAPULIN', text: 'And the hour?', pose: 'chapulin_idle' },
        { speaker: 'SARGENTO', text: 'The same window as the first report. The lab did not turn watchmaker overnight.', pose: 'pazguato_idle' },
        { speaker: 'DEFENSA', text: 'Then it falls to us. We rebuild who held that bottle, and when.', pose: 'donramon_point' },
        { speaker: 'CHAPULIN', text: 'Follow me, good citizens!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'Chapulín, the bottle is the other way.', pose: 'donramon_sweat', addEvidence: 'toxicologia_vino' }
      ]
    }
  ]
};
