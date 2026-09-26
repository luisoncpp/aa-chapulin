// @Architecture(descriptionShort="English Case 5 day 4 archive boiler room investigation scene", type="data", icon="layers")
/**
 * Case 5, Day 4 — Judicial Archive basement, boiler room (`archivo_caldera`). Spec §16.2. English.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_ARCHIVO_CALDERA_HOTSPOTS_EN } from './archivo_caldera_hotspots_en.js';

export const CASE5_ARCHIVO_CALDERA_EN: InvestigationScene = {
  title: 'Judicial Archive — Boiler Room',
  name: 'Boiler room',
  bg: 'assets/bg_archivo_caldera.webp',
  bgm: 'investigation_core',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'December 9, 7:20 AM. Judicial Archive basement, boiler room.', bg: 'assets/bg_archivo_caldera.webp', furniture: 'none', bgm: 'investigation_core' },
    { speaker: 'NARRADOR', text: 'A riveted iron boiler and two industrial dryers, shut down since Tuesday. The room has already cooled.' },
    { speaker: 'SARGENTO', text: 'At your service, Counselor! I have been here since four.', pose: 'pazguato_saludo' },
    { speaker: 'CHOMPIRAS', text: 'And I since four thirty, because he has the key and I have the crowbar.', pose: 'chompiras_idle' },
    { speaker: 'DEFENSA', text: 'Sergeant, I need two things and both are from today.', pose: 'chapulin_point' },
    { speaker: 'SARGENTO', text: 'Give me the first one.', pose: 'pazguato_decidido' }
  ],
  hotspots: CASE5_ARCHIVO_CALDERA_HOTSPOTS_EN,
  talkOptions: []
};
