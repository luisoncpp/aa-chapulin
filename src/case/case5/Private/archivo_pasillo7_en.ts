// @Architecture(descriptionShort="English Case 5 day 1 judicial archive hallway 7 scene", type="data", icon="layers")
/**
 * Case 5, Day 1 — Judicial Archive hallway 7 (`archivo_pasillo7`), English. Spec §10.3.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_PASILLO7_HOTSPOTS_EN } from './archivo_pasillo7_hotspots_en.js';

export const CASE5_ARCHIVO_PASILLO7_EN: InvestigationScene = {
  title: 'Judicial Archive - Hallway 7',
  name: 'Judicial Archive - Hallway 7',
  bg: 'assets/bg_archivo_pasillo7.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'December 6, 11:40 AM. Hallway 7, first floor. Absurd heat for December.', bg: 'assets/bg_archivo_pasillo7.webp', furniture: 'none', bgm: 'suspense' },
    { speaker: 'SARGENTO', text: 'At your service, Counse...!', pose: 'pazguato_saludo' },
    { speaker: 'SARGENTO', text: '...lor.', pose: 'pazguato_sweat' },
    { speaker: 'DEFENSA', text: 'Sergeant!', pose: 'chapulin_point' },
    { speaker: 'SARGENTO', text: 'Forgive me. I have spent nearly three months saying my counselor to the other one and my tongue ties itself in knots.', pose: 'pazguato_sweat' },
    { speaker: 'DEFENSA', text: 'Call me my counselor. I brought his badge and everything.', pose: 'chapulin_idle' },
    { speaker: 'SARGENTO', text: '...At your service, Counselor.', pose: 'pazguato_saludo' },
    { speaker: 'DEFENSA', text: 'Sergeant, with all respect: whose side are you on?', pose: 'chapulin_idle' },
    { speaker: 'SARGENTO', text: 'On the side of getting things down right, Counselor. In September I moved a microphone before photographing it and they reminded me for six weeks.', pose: 'pazguato_decidido' },
    { speaker: 'SARGENTO', text: 'Here I moved nothing. I photographed, measured, requested analysis, and waited.', pose: 'pazguato_decidido' },
    { speaker: 'SARGENTO', text: 'And I will tell you something I should not: I do not like this case.', pose: 'pazguato_sweat', addProfile: 'perfil_sargento' }
  ],
  hotspots: CASE5_PASILLO7_HOTSPOTS_EN,
  talkOptions: []
};
