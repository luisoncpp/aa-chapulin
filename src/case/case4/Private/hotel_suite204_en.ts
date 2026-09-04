// @Architecture(descriptionShort="English Case 4 day-2 Suite 204 with Rufino", type="data", icon="layers")
/**
 * Case 4 Day 2 — Suite 204 (`hotel_suite204`) English.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { SUITE204_HOTSPOTS_EN } from './hotel_suite204_hotspots_en.js';

export const CASE4_HOTEL_SUITE204_EN: InvestigationScene = {
  title: 'Suite 204 - Rufino Rufián\'s Room',
  name: 'Suite 204',
  bg: 'assets/bg_hotel_suite204.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'rufino_smug',
  intro: [
    { speaker: 'NARRADOR', text: 'October 26, 11:00 AM. Suite 204, directly beneath the crime scene.' },
    { speaker: 'RUFINO', text: 'My... who granted the rabble access to my noble quarters?', pose: 'rufino_monocle' },
    { speaker: 'DEFENSA', text: 'We\'re here to inspect the building\'s pipes, sir.', pose: 'donramon_idle' },
    { speaker: 'RUFINO', text: 'I regret to disappoint you, counselor. My evening at 11:15 PM was spent at the baccarat table harvesting victories before distinguished diplomats.', pose: 'rufino_smug' },
    { speaker: 'CHAPULIN', text: '(This man talks like he\'s got a hot potato on his neck...)', pose: 'chapulin_idle' }
  ],
  hotspots: SUITE204_HOTSPOTS_EN,
  talkOptions: [
    {
      id: 'about_alibi',
      label: 'Your alibi last night',
      dialogue: [
        { speaker: 'RUFINO', text: 'From 10:30 to 11:30 PM I was on the baccarat green felt. Witnesses of honor, ivory chips, and French champagne.', pose: 'rufino_smug' },
        { speaker: 'DEFENSA', text: '(Very sure of his public alibi... Let\'s see what the freight elevator log says.)', pose: 'donramon_idle' }
      ]
    }
  ]
};
