// @Architecture(descriptionShort="English Case 4 day-1 terrace bar with Maruja", type="data", icon="layers")
/**
 * Case 4 Day 1 — Terrace Bar "El Chapuzón" (`hotel_terraza`) English.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_HOTEL_TERRAZA_EN: InvestigationScene = {
  title: 'Terrace Bar "El Chapuzón"',
  name: 'Terrace Bar',
  bg: 'assets/bg_hotel_bar.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'maruja_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'October 25, 1:15 PM. Terrace Bar "El Chapuzón".' },
    { speaker: 'MARUJA', text: 'My... what do we have here? A gentleman in a fishing hat and a lad wrapped in crimson velvet.', pose: 'maruja_abanico' },
    { speaker: 'CHAPULIN', text: '¡Chanfle! A life-sized rag doll of flesh and bone!', pose: 'chapulin_panic' },
    { speaker: 'DEFENSA', text: 'Madam or miss... I\'m defense counsel for Gordon Botija.', pose: 'donramon_sweat' },
    { speaker: 'MARUJA', text: 'Call me Maruja, Counsel... Though if you mean to save that giant who dispatched poor Gómez, you\'re wasting gunpowder on firecrackers.', pose: 'maruja_coqueta' },
    { speaker: 'CHAPULIN', text: 'Easy, lovely lady! Because a bird in the hand is worth... seeing it fly at dawn.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'No, Chapulín! The early bird catches the worm, and a bird in the hand beats a hundred in the bush.', pose: 'donramon_idle' },
    { speaker: 'MARUJA', text: 'How funny you are...', pose: 'maruja_abanico' }
  ],
  hotspots: [
    {
      id: 'hotspot_barra',
      label: 'Bar Counter',
      x: 2, y: 36, w: 60, h: 40,
      dialogue: [
        { speaker: 'MARUJA', text: 'I serve cocktails to high society here. Though last night I nearly dropped my fan from fright.', pose: 'maruja_abanico' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_hallway',
      label: 'What did you hear in the hallway last night?',
      dialogue: [
        { speaker: 'MARUJA', text: 'I was in Suite 303 resting from a migraine. At 11:15 PM a brutal blast shook the walls.', pose: 'maruja_idle' },
        { speaker: 'MARUJA', text: 'When I stepped into the hall, I saw Don Cecilio trying to push the Suite 304 door.', pose: 'maruja_nerviosa' }
      ]
    },
    {
      id: 'about_victim',
      label: 'About the victim (Mr. Gómez)',
      unlockedByTalk: 'about_hallway',
      dialogue: [
        { speaker: 'MARUJA', text: 'I barely knew him by sight when we crossed paths at reception that afternoon.', pose: 'maruja_coqueta' },
        { speaker: 'DEFENSA', text: '(She gets nervous when I mention Cuajinais... Interesting.)', pose: 'donramon_sweat' }
      ]
    },
    {
      id: 'about_chain_object',
      label: 'The object in the hallway',
      unlockedByTalk: 'about_victim',
      dialogue: [
        { speaker: 'MARUJA', text: 'When the Sergeant rammed the door at 11:20 PM, the chain lock flew onto the hall rug. I picked it up because it had a strange shiny wire tangled in it...', pose: 'maruja_nerviosa' },
        { speaker: 'MARUJA', text: 'I thought it was costume jewelry, but I\'ll hand it over if it helps.', pose: 'maruja_abanico', addEvidence: 'candado_cadena' },
        { speaker: 'DEFENSA', text: '(Fishing line on the bolt... The locked room was a trick!)', pose: 'donramon_shock', sfx: 'realization' }
      ]
    }
  ]
};
