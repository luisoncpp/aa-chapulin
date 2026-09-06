// @Architecture(descriptionShort="English Case 4 day-1 hotel lobby", type="data", icon="layers")
/** Case 4 Day 1 — Lobby (`hotel_lobby`), 10:00, English. */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_HOTEL_LOBBY_EN: InvestigationScene = {
  title: 'Grand Lobby of Hotel Buena Vista',
  name: 'Grand Lobby',
  bg: 'assets/bg_hotel_lobby.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'cecilio_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'Gran Hotel Buena Vista. Front desk, ten in the morning.' },
    { speaker: 'CECILIO', text: 'Your receipt, count. And this time I counted the figures with my glasses on.', pose: 'cecilio_idle' },
    { speaker: 'RUFINO', text: 'A precaution this establishment should raise to a habit.', pose: 'rufino_smug' },
    { speaker: 'CECILIO', text: 'Good morning. How may I serve the lady and her companion?', pose: 'cecilio_ciego' },
    { speaker: 'DEFENSA', text: 'I appear to be the lady.', pose: 'donramon_sweat' },
    { speaker: 'CECILIO', text: 'A thousand pardons. At two meters I make out colors, not people.', pose: 'cecilio_ciego' },
    { speaker: 'CHAPULIN', text: 'Well, he made me out perfectly! Red!', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Licenciado Monchito, for the defense. We came about the jobs Botija worked during the gala.', pose: 'donramon_idle' },
    { speaker: 'RUFINO', text: 'He carried up a bottle and helped me with a trunk. Note in your little pad that he was punctual: punctuality is the courtesy of those with no other.', pose: 'rufino_monocle' },
    { speaker: 'CHAPULIN', text: 'And does that big ring sign papers too?', pose: 'chapulin_point' },
    { speaker: 'RUFINO', text: 'For sealing correspondence, young man. The head turns, to protect the relief.', pose: 'rufino_smug' },
    { speaker: 'NARRADOR', text: 'Rufino turns the ring head toward his palm and takes the receipt without a second thought.' },
    { speaker: 'RUFINO', text: 'I remain at the court’s disposal. One cooperates, even when one’s holiday is ruined.', pose: 'rufino_smug' },
    { speaker: 'DEFENSA', text: '(A count, a monocle, and a gold ring. And me with a dented badge.)', pose: 'donramon_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_libro',
      label: 'Service Logbook',
      x: 52, y: 58, w: 15, h: 16,
      dialogue: [
        { speaker: 'CECILIO', text: 'The shift log: wine, freight, and maintenance, with delivery and receipt times.', pose: 'cecilio_idle' }
      ]
    },
    {
      id: 'hotspot_plano',
      label: 'Counter Floor Plan',
      x: 64, y: 58, w: 27, h: 24,
      dialogue: [
        { speaker: 'CECILIO', text: 'The west wing plan. Keep it: door, screen, and service corridors.', pose: 'cecilio_idle' }
      ]
    },
    {
      id: 'hotspot_programa',
      label: 'Gala Program',
      x: 47, y: 53, w: 8, h: 15,
      dialogue: [
        { speaker: 'CHAPULIN', text: 'Stage sound effects run by the hotel! Quite a party.', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(Effects existed. Where they were used is another story.)', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'tres_ordenes',
      label: 'The three orders',
      dialogue: [
        { speaker: 'CECILIO', text: 'Read the rows: bottle V58-17 to 204, trunk B-17 to 304, and 23:05 maintenance.', pose: 'cecilio_idle' },
        { speaker: 'CECILIO', text: 'This is the shift log. Signed originals are filed by folio, not here.', pose: 'cecilio_idle' },
        { speaker: 'CECILIO', text: 'The duty porter logs luggage reception. To check signatures, request the exact folios.', pose: 'cecilio_idle', addEvidence: 'orden_servicios' }
      ]
    },
    {
      id: 'llegar_304',
      label: 'How to reach 304',
      dialogue: [
        { speaker: 'CECILIO', text: 'Outer door, screen, and bathroom access; service corridors outside.', pose: 'cecilio_idle', addEvidence: 'plano_hotel' },
        { speaker: 'DEFENSA', text: 'And the freight lift?', pose: 'donramon_point' },
        { speaker: 'CECILIO', text: 'It is no direct access to the suites. The cabin carries luggage only.', pose: 'cecilio_idle' }
      ]
    },
    {
      id: 'quien_solicito',
      label: 'Who requested the work',
      dialogue: [
        { speaker: 'CECILIO', text: 'Here is the original maintenance folio, filed by number.', pose: 'cecilio_idle' },
        { speaker: 'CECILIO', text: '204 paper, guest handwriting and signature, handed over at 22:45, with Botija’s name written by the requester and hour 23:05.', pose: 'cecilio_idle', updateEvidence: 'orden_servicios' },
        { speaker: 'DEFENSA', text: 'A suite guest requesting service proves no homicide.', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'el_ruido',
      label: 'The noise',
      dialogue: [
        { speaker: 'CECILIO', text: 'I heard a great bang and went up. The hour comes from the salon clock, not a diagnosis.', pose: 'cecilio_idle', unlockLocation: 'hotel_suite' },
        { speaker: 'CECILIO', text: 'Please hurry. I have a lobby full of guests awaiting an explanation.', pose: 'cecilio_idle' },
        { speaker: 'CHAPULIN', text: 'Slowly dresses the early bird, for haste makes... the wardrobe...', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'Chapulín, nobody is getting dressed.', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: 'Wait: haste makes waste, and the waste... Well, that’s the idea.', pose: 'chapulin_idle' },
        { speaker: 'CECILIO', text: 'Good heavens. And here I thought my glasses were the problem.', pose: 'cecilio_ciego' }
      ]
    }
  ]
};
