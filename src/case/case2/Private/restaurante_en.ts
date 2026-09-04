// @Architecture(descriptionShort="English Case 2 restaurant scene with blueprint and generator", type="data", icon="layers")
/**
 * Case 2 Day 1 — Restaurant and generator yard (English).
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE2_RESTAURANTE_EN: InvestigationScene = {
  title: "Doña Florinda's Restaurant and Electrical Yard",
  name: "Doña Florinda's Restaurant",
  bg: 'assets/bg_restaurante.webp',
  bgm: 'restaurante',
  speaker: 'NARRADOR',
  idlePose: 'jirafales_idle',
  intro: [
    { speaker: 'NARRADOR', text: "August 29, 1:00 PM. Doña Florinda's Restaurant." },
    { speaker: 'JIRAFALES', text: 'Ah, Don Ramón! I heard of Mr. Chómpiras\'s unfortunate situation. As a man of science, I stand for absolute truth.', pose: 'jirafales_idle' },
    { speaker: 'DEFENSA', text: 'Professor, you are a well of wisdom. Were you dining here last night with Doña Florinda?', pose: 'donramon_idle' },
    { speaker: 'JIRAFALES', text: 'Indeed. We were savoring clay-pot coffee when, suddenly, at 9:15 PM the lights suffered a momentary blackout.', pose: 'jirafales_smoking' },
    { speaker: 'DEFENSA', text: 'At 9:15 PM?! Exactly when the vault clock stopped!', pose: 'donramon_point' },
    { speaker: 'JIRAFALES', text: 'Precisely. As an architecture enthusiast, I have drawn this meticulous floor plan.', pose: 'jirafales_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_plano',
      label: 'Architectural Blueprint',
      x: 36, y: 48, w: 22, h: 22,
      dialogue: [
        { speaker: 'JIRAFALES', text: 'Take this plan. The vault has no windows or outer doors; only the ventilation duct and an old laundry dumbwaiter to the rear alley.', pose: 'jirafales_idle', addEvidence: 'plano_hacienda' }
      ]
    },
    {
      id: 'hotspot_generador',
      label: 'Outdoor Generator Box',
      x: 69, y: 30, w: 13, h: 28,
      dialogue: [
        { speaker: 'DEFENSA', text: 'Look! The crowbar tip has navy-blue generator paint...', pose: 'donramon_shock', sfx: 'realization', updateEvidence: 'palanca_rota' },
        { speaker: 'DEFENSA', text: 'They used it to force the generator box, not the safe!', pose: 'donramon_shock', addEvidence: 'caja_generador' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_blackout',
      label: 'About the lights flickering',
      dialogue: [
        { speaker: 'JIRAFALES', text: 'The restaurant has its own feed. It only flickered. The hacienda wing, however, must have gone dark.', pose: 'jirafales_smoking' },
        { speaker: 'DEFENSA', text: '(If they threw the master switch at 9:15... the hallway digital clock lost its time too.)', pose: 'donramon_idle' }
      ]
    }
  ]
};
