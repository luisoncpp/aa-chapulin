// @Architecture(descriptionShort="English Case 5 day 2 police station scene", type="data", icon="layers")
/**
 * Case 5, Day 2 — Police precinct (`delegacion_c5`). Spec §12.4.
 * Closes the day by delivering `expediente_serie`.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_DELEGACION_C5_TALKS_EN } from './delegacion_c5_talks_en.js';

export const CASE5_DELEGACION_C5_EN: InvestigationScene = {
  title: 'Police Precinct',
  name: 'Precinct',
  bg: 'assets/bg_delegacion.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'December 7, 3:00 PM. Precinct. On the Sergeant\'s desk lie five ribbon-tied dossiers and a cup of cold coffee.', bg: 'assets/bg_delegacion.webp', furniture: 'none', bgm: 'investigation' },
    { speaker: 'SARGENTO', text: 'At your service, counselor! I did not sleep.', pose: 'pazguato_saludo' },
    { speaker: 'DEFENSA', text: 'Sergeant, you have the face of a Tuesday.', pose: 'chapulin_idle' },
    { speaker: 'SARGENTO', text: 'Because last night I started doing something nobody asked for, and at my age when you do that, you wake up like this.', pose: 'pazguato_decidido' }
  ],
  hotspots: [
    {
      id: 'hotspot_legajos',
      label: 'Dossiers on the Desk',
      x: 36, y: 48, w: 32, h: 22,
      dialogue: [
        { speaker: 'NARRADOR', text: 'Five ribbon-tied dossiers dated July through October, stacked beside the cold coffee.' },
        { speaker: 'DEFENSA', text: '(The Sergeant already has them ready. He only needs to show them to me.)', pose: 'chapulin_idle' }
      ]
    }
  ],
  talkOptions: CASE5_DELEGACION_C5_TALKS_EN
};
