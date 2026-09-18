// @Architecture(descriptionShort="English Case 5 day 4 midnight detention cell investigation scene", type="data", icon="layers")
/**
 * Case 5, Day 4 — Detention Center, midnight cell (`celda_c5_d4`). Spec §16.1. English.
 * Chapulin speaks as DEFENSA; Don Ramon is the defendant.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { CASE5_CELDA_D4_TALKS_EN } from './celda_d4_talks_en.js';

export const CASE5_CELDA_D4_EN: InvestigationScene = {
  title: 'Detention Center — Cell',
  name: 'Detention Center',
  bg: 'assets/bg_detention.webp',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  idlePose: 'donramon_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'December 9, 5:40 AM. City Detention Center. A little over ten hours remain until the final hearing.', bg: 'assets/bg_detention.webp', furniture: 'none', bgm: 'detention_center' },
    { speaker: 'DON RAMÓN', text: 'Young man, it is five forty in the morning.', pose: 'donramon_idle' },
    { speaker: 'DEFENSA', text: 'I have not slept!', pose: 'chapulin_panic' },
    { speaker: 'DON RAMÓN', text: 'It shows in your antennae. They are crooked.', pose: 'donramon_idle' },
    { speaker: 'DEFENSA', text: 'Don Ramon, I have an idea, and it is a horrible idea.', pose: 'chapulin_idle' },
    { speaker: 'DON RAMÓN', text: 'Those are the ones that work. Sit down.', pose: 'donramon_idle' }
  ],
  hotspots: [],
  talkOptions: CASE5_CELDA_D4_TALKS_EN
};
