// @Architecture(descriptionShort="English Case 4 day-1 Suite 304 crime scene", type="data", icon="layers")
/**
 * Case 4 Day 1 — Presidential Suite 304 (`hotel_suite`) English.
 */

import type { InvestigationScene } from '../../../types/index.js';
import { SUITE304_HOTSPOTS_EN } from './hotel_suite_hotspots_en.js';

export const CASE4_HOTEL_SUITE_EN: InvestigationScene = {
  title: 'Presidential Suite 304',
  name: 'Suite 304',
  bg: 'assets/bg_hotel_suite.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'October 25, 11:45 AM. Presidential Suite 304.' },
    { speaker: 'SARGENTO', text: 'At justice\'s command, Counsel! Sergeant Refugio Pazguato guarding the crime scene.', pose: 'pazguato_saludo' },
    { speaker: 'DEFENSA', text: 'Isn\'t Super Sam here counting dollars?', pose: 'donramon_idle' },
    { speaker: 'SARGENTO', text: 'No, he went to the exchange to round up cents. But if he catches me helping the defense, he\'ll dock my Christmas bonus for three years!', pose: 'pazguato_sweat' },
    { speaker: 'CHAPULIN', text: 'Fear not, loyal keeper of order! The nobility of your duty protects you!', pose: 'chapulin_idle' }
  ],
  hotspots: SUITE304_HOTSPOTS_EN,
  talkOptions: [
    {
      id: 'about_victim',
      label: 'About the victim',
      dialogue: [
        { speaker: 'SARGENTO', text: 'Mr. Gómez, alias El Cuajinais. Passing guest with a fake ID. We found him dead by the fireplace.', pose: 'pazguato_idle' },
        { speaker: 'DEFENSA', text: 'And the drinks on the side table?', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'Broken glass, uncorked bottle, and ice bucket. All secured for chemical analysis.', pose: 'pazguato_saludo' }
      ]
    }
  ]
};
