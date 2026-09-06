// @Architecture(descriptionShort="English Case 4 day-3 lobby scene", type="data", icon="layers")
/** Case 4 Day 3 — Lobby (`hotel_lobby_d3`), 10:30, English. */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_HOTEL_LOBBY_D3_EN: InvestigationScene = {
  title: 'Grand Lobby of Hotel Buena Vista',
  name: 'Grand Lobby',
  bg: 'assets/bg_hotel_lobby.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'chimoltrufia_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'October 27, 10:30 AM. Lobby. Chimoltrufia covers the counter for Cecilio.' },
    { speaker: 'CHIMOLTRUFIA', text: 'They put me on the counter because there is nobody to mind it. And because I do know where every paper in this hotel sits.', pose: 'chimoltrufia_idle' },
    { speaker: 'DEFENSA', text: 'And Don Cecilio?', pose: 'donramon_idle' },
    { speaker: 'CHIMOLTRUFIA', text: 'Answering the reporters. With his glasses on, mind you. He has already called two photographers "miss".', pose: 'chimoltrufia_confundida' },
    { speaker: 'CHAPULIN', text: 'He called me "madam".', pose: 'chapulin_idle' },
    { speaker: 'CHIMOLTRUFIA', text: 'Do not feel bad, young man. He called me "sonny".', pose: 'chimoltrufia_shock' },
    { speaker: 'DEFENSA', text: 'Ma\'am, we need original folios. Not the shift log.', pose: 'donramon_point' },
    { speaker: 'CHIMOLTRUFIA', text: 'Oh, counselor, do you think I am in any state to play secretary with my husband locked up? And like I say one thing I say another: tell me which ones and I will have them out in two minutes.', pose: 'chimoltrufia_idle' },
    { speaker: 'DEFENSA', text: '(Fourteen years behind that counter. She is the only person in this hotel who knows where everything is.)', pose: 'donramon_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_libro_d3',
      label: 'Service Logbook',
      x: 52, y: 58, w: 15, h: 16,
      dialogue: [
        { speaker: 'CHIMOLTRUFIA', text: 'You saw the log yesterday. The originals are in the file.', pose: 'chimoltrufia_idle' }
      ]
    },
    {
      id: 'hotspot_plano_d3',
      label: 'Counter Plan',
      x: 64, y: 58, w: 27, h: 24,
      dialogue: [
        { speaker: 'CHIMOLTRUFIA', text: 'The plan stands: door, screen, corridors.', pose: 'chimoltrufia_confundida' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'folios_noche',
      label: 'That night’s folios',
      dialogue: [
        { speaker: 'CHIMOLTRUFIA', text: 'Here is the wine delivery certification signed before Maruja. I attach it.', pose: 'chimoltrufia_idle', updateEvidence: 'orden_servicios' },
        { speaker: 'CHIMOLTRUFIA', text: 'And by the way: the handwritten folio you hold was handed in by the guest himself. No call, no errand.', pose: 'chimoltrufia_confundida' }
      ]
    },
    {
      id: 'salon_juego',
      label: 'The gaming salon',
      dialogue: [
        { speaker: 'CHIMOLTRUFIA', text: 'Rounds signed by the players between 23:10 and 23:25.', pose: 'chimoltrufia_idle', addEvidence: 'boleta_baccarat' },
        { speaker: 'DEFENSA', text: 'This slip confirms Mr. Rufián was at the baccarat table when the bang sounded.', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: 'Oh no! Then we lost?', pose: 'chapulin_panic' },
        { speaker: 'DEFENSA', text: 'No, Chapulín. We lost an idea we never held.', pose: 'donramon_idle' },
        { speaker: 'CHAPULIN', text: 'Ah, good. Those are the ones that hurt least.', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: 'We already know that at quarter past eleven the dead man had been dead for hours.', pose: 'donramon_point' },
        { speaker: 'CHIMOLTRUFIA', text: 'And what use is that to my Botija?', pose: 'chimoltrufia_confundida' },
        { speaker: 'DEFENSA', text: 'That nobody had to be inside that room at that hour. Not the count... and not your husband.', pose: 'donramon_idle' },
        { speaker: 'CHIMOLTRUFIA', text: 'Well, bless that little slip. And like I say one thing I say another: a gambler\'s ticket is going to save mine.', pose: 'chimoltrufia_idle' }
      ]
    },
    {
      id: 'telegrama_noche',
      label: 'That night’s telegram',
      dialogue: [
        { speaker: 'CHIMOLTRUFIA', text: 'Filed copy and receipt signed at 20:50. A Cleopatra Necklace share claim with a threat to go to the police.', pose: 'chimoltrufia_idle', addEvidence: 'nota_amenaza' }
      ]
    },
    {
      id: 'dicen_hotel',
      label: 'Hotel gossip',
      condition: (flags) => Boolean(flags.talk_folios_noche) && Boolean(flags.talk_salon_juego) && Boolean(flags.talk_telegrama_noche),
      dialogue: [
        { speaker: 'CHIMOLTRUFIA', text: 'The staff already condemned my husband over his record.', pose: 'chimoltrufia_shock' },
        { speaker: 'DEFENSA', text: 'Then let us see him now.', pose: 'donramon_idle', unlockLocation: 'detention_d3' }
      ]
    }
  ]
};
