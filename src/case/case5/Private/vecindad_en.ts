// @Architecture(descriptionShort="English Case 5 day 2 Barriga office vecindad scene", type="data", icon="layers")
/**
 * Case 5, Day 2 — Mr. Barriga's office (`vecindad_c5`). Spec §12.1.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_VECINDAD_HOTSPOTS_EN } from './vecindad_hotspots_en.js';
import { CASE5_VECINDAD_TALKS_EN } from './vecindad_talks_en.js';

export const CASE5_VECINDAD_EN: InvestigationScene = {
  title: 'The Tenement - Mr. Barriga\'s Office',
  name: 'The Tenement',
  bg: 'assets/bg_despacho.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'barriga_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'December 7, 8:30 AM. Mr. Barriga\'s office in the tenement on Spook Street.', bg: 'assets/bg_despacho.webp', furniture: 'none', bgm: 'investigation' },
    { speaker: 'BARRIGA', text: 'Oh, no! Not again! I already know why you are here!', pose: 'barriga_enojado' },
    { speaker: 'DEFENSA', text: 'I have not told you anything.', pose: 'chapulin_idle' },
    { speaker: 'BARRIGA', text: 'Because every time someone from this tenement knocks it is to ask for an extension!', pose: 'barriga_enojado' },
    { speaker: 'DEFENSA', text: 'I came for the opposite, Mr. Barriga. I came about rent that was actually paid.', pose: 'chapulin_point' },
    { speaker: 'BARRIGA', text: '...Ah.', pose: 'barriga_idle' },
    { speaker: 'BARRIGA', text: 'That.', pose: 'barriga_shock' },
    { speaker: 'BARRIGA', text: 'Look, young man. I have been collecting from Mr. Ramon for seventeen years. Seventeen.', pose: 'barriga_idle' },
    { speaker: 'BARRIGA', text: 'And on November twenty-ninth I found a yellow envelope under my door with seventeen months inside.', pose: 'barriga_shock' },
    { speaker: 'BARRIGA', text: 'I sat on the step and stayed still for ten minutes.', pose: 'barriga_idle' },
    { speaker: 'DEFENSA', text: 'For pleasure?', pose: 'chapulin_idle' },
    { speaker: 'BARRIGA', text: 'From shock. When something fixes itself after seventeen years, you know something broke somewhere else.', pose: 'barriga_idle', addProfile: 'perfil_barriga' }
  ],
  hotspots: CASE5_VECINDAD_HOTSPOTS_EN,
  talkOptions: CASE5_VECINDAD_TALKS_EN
};
