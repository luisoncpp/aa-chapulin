// @Architecture(descriptionShort="English Case 4 day-2 precinct forensic report", type="data", icon="layers")
/**
 * Case 4 Day 2 — Police Precinct (`delegacion`) English.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_DELEGACION_EN: InvestigationScene = {
  title: 'Police Precinct',
  name: 'Precinct',
  bg: 'assets/bg_delegacion.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'October 26, 3:30 PM. Central Police Precinct.' },
    { speaker: 'SARGENTO', text: 'Counsel! The capital\'s toxicology autopsy protocol just came out of the oven!', pose: 'pazguato_saludo' },
    { speaker: 'DEFENSA', text: 'Spit it out, Sergeant — court sits in half an hour.', pose: 'donramon_idle' },
    { speaker: 'SARGENTO', text: 'You\'ll fall backward! The chest gunshot has no skin burn or lung clots... Cuajinais wasn\'t breathing when the bullet pierced his clothes!', pose: 'pazguato_sweat', addEvidence: 'informe_forense' },
    { speaker: 'DEFENSA', text: '¡Chanfle! You\'re telling me they shot a corpse?', pose: 'donramon_shock', sfx: 'realization' },
    { speaker: 'CHAPULIN', text: '¡No contaban con mi astucia! He died from poison before ten at night!', pose: 'chapulin_point' }
  ],
  hotspots: [
    {
      id: 'hotspot_archivo',
      label: 'Evidence Filing Cabinet',
      x: 8, y: 16, w: 18, h: 50,
      dialogue: [
        { speaker: 'SARGENTO', text: 'I keep what the prosecutor doesn\'t dock from me here. The forensic report is already in your record.', pose: 'pazguato_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_cyanide',
      label: 'Real cause of death?',
      dialogue: [
        { speaker: 'SARGENTO', text: 'Cellular asphyxia from potassium cyanide between 9:30 and 10:00 PM. The 11:15 shot was post-mortem.', pose: 'pazguato_decidido' },
        { speaker: 'DEFENSA', text: '(Turn 1... The false time of death. In a little while we tear it apart in court.)', pose: 'donramon_point' }
      ]
    }
  ]
};
