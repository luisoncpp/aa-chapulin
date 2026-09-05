// @Architecture(descriptionShort="English Case 4 day-1 hotel lobby with Cecilio", type="data", icon="layers")
/**
 * Case 4 Day 1 — Grand Lobby (`hotel_lobby`) English.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_HOTEL_LOBBY_EN: InvestigationScene = {
  title: 'Grand Lobby - Hotel Buena Vista',
  name: 'Grand Lobby',
  bg: 'assets/bg_hotel_lobby.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'cecilio_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'October 25, 10:30 AM. Grand Lobby of Hotel Buena Vista.' },
    { speaker: 'CECILIO', text: 'Welcome to our illustrious establishment, distinguished gentleman in tails! Allow me to take your top hat.', pose: 'cecilio_ciego' },
    { speaker: 'DEFENSA', text: 'Hey, Don Cecilio! Put on your glasses! I\'m not any count, I\'m Don Ramón! And this isn\'t a top hat, it\'s my wrinkled denim cap!', pose: 'donramon_panic' },
    { speaker: 'CECILIO', text: 'Good heavens! A beggar invading the Persian rug of my five-star lobby!', pose: 'cecilio_escandalo' },
    { speaker: 'CHAPULIN', text: 'Hold your gesture, noble innkeeper! El Chapulín Colorado investigates last night\'s tragedy on the third floor!', pose: 'chapulin_point' },
    { speaker: 'CECILIO', text: 'Ah, the deplorable spectacle of the scarred tenant! He disturbed the Count of Montemayor and all of high society.', pose: 'cecilio_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_recepcion',
      label: 'Reception Desk',
      x: 46, y: 40, w: 44, h: 42,
      dialogue: [
        { speaker: 'CECILIO', text: 'Here I register the cream of society. No denim caps on my marble counter!', pose: 'cecilio_escandalo' }
      ]
    },
    {
      id: 'hotspot_candelabro',
      label: 'Crystal Chandelier',
      x: 42, y: 8, w: 16, h: 20,
      dialogue: [
        { speaker: 'DEFENSA', text: '(Shines brighter than my financial future. Useless, but pretty.)', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: '¡Más vale pájaro en mano que ciento volando!', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'Chapulín, that doesn\'t apply to chandeliers.', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_scandal',
      label: 'Last night\'s scandal',
      dialogue: [
        { speaker: 'CECILIO', text: 'At 11:15 PM I heard a thunderclap from the third floor. I went up with the Sergeant and found the door barred with the interior chain.', pose: 'cecilio_idle' },
        { speaker: 'DEFENSA', text: 'And the plumber Botija?', pose: 'donramon_point' },
        { speaker: 'CECILIO', text: 'Hiding in the dirty laundry basket like a sewer rat! What shame for my hotel!', pose: 'cecilio_escandalo' }
      ]
    },
    {
      id: 'about_blueprint',
      label: 'The building blueprint',
      unlockedByTalk: 'about_scandal',
      dialogue: [
        { speaker: 'CECILIO', text: 'Take the building schematic. Built in 1920 with solid iron and vertical steam flues.', pose: 'cecilio_idle', addEvidence: 'plano_hotel' },
        { speaker: 'DEFENSA', text: 'Does Suite 304 share pipes with any other room?', pose: 'donramon_idle' },
        { speaker: 'CECILIO', text: 'With Suite 204 directly below. But that is plumbing, not crime.', pose: 'cecilio_ciego', unlockLocation: 'hotel_suite' }
      ]
    }
  ]
};
