// @Architecture(descriptionShort="English Case 5 day 1 judicial archive vestibule scene", type="data", icon="layers")
/**
 * Case 5, Day 1 — Judicial Archive vestibule (`archivo_vestibulo`), English. Spec §10.2.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_VESTIBULO_HOTSPOTS_EN } from './archivo_vestibulo_hotspots_en.js';
import { CASE5_VESTIBULO_TALKS_EN } from './archivo_vestibulo_talks_en.js';

export const CASE5_ARCHIVO_VESTIBULO_EN: InvestigationScene = {
  title: 'Judicial Archive - Vestibule',
  name: 'Judicial Archive',
  bg: 'assets/bg_archivo_vestibulo.webp',
  bgm: 'archivo',
  speaker: 'NARRADOR',
  idlePose: 'nicanor_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'December 6, 10:15 AM. District Judicial Archive, vestibule.', bg: 'assets/bg_archivo_vestibulo.webp', furniture: 'none', bgm: 'archivo' },
    { speaker: 'NARRADOR', text: 'It smells of old paper, floor wax, and, for three days now, clothes drying.' },
    { speaker: 'NICANOR', text: 'Step lightly, kid, I just waxed.', pose: 'nicanor_escoba' },
    { speaker: 'DEFENSA', text: 'Good morning! I come from the defense of Counselor Valdes.', pose: 'chapulin_point' },
    { speaker: 'NICANOR', text: '...You are with the defense?', pose: 'nicanor_idle' },
    { speaker: 'DEFENSA', text: 'I am the defense!', pose: 'chapulin_idle' },
    { speaker: 'NICANOR', text: 'Ah. Well, I am the janitor and I have been here thirty-one years. Nothing surprises me anymore, not even you.', pose: 'nicanor_idle' },
    { speaker: 'NICANOR', text: 'Nicanor Tolentino, at your service. I was the one who found him.', pose: 'nicanor_sweat', addProfile: 'perfil_nicanor' },
    { speaker: 'DEFENSA', text: 'Mr. Nicanor, may I ask you things?', pose: 'chapulin_idle' },
    { speaker: 'NICANOR', text: 'Ask, but walk along the edge. And do not touch anything in hallway seven; a man died there and it still smells damp.', pose: 'nicanor_escoba' },
    { speaker: 'DEFENSA', text: 'Damp?', pose: 'chapulin_idle' },
    { speaker: 'NICANOR', text: 'A pipe burst on December third. Damp eats paper, kid. Damp and mice.', pose: 'nicanor_idle' },
    { speaker: 'NICANOR', text: 'They turned the boiler and two dryers to maximum since December third. That place is an oven.', pose: 'nicanor_sweat' },
    { speaker: 'DEFENSA', text: '(An oven. Well. At least the dead man did not catch a chill.)', pose: 'chapulin_idle' }
  ],
  hotspots: CASE5_VESTIBULO_HOTSPOTS_EN,
  talkOptions: CASE5_VESTIBULO_TALKS_EN
};
