// @Architecture(descriptionShort="English Case 4 day-3 lobby with Chimoltrufia", type="data", icon="layers")
/**
 * Case 4 Day 3 — Grand Lobby (`hotel_lobby_d3`) English — character rotation.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_HOTEL_LOBBY_D3_EN: InvestigationScene = {
  title: 'Grand Lobby - Hotel Buena Vista',
  name: 'Grand Lobby',
  bg: 'assets/bg_hotel_lobby.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'chimoltrufia_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'October 27, 11:00 AM. Don Cecilio rushed to the capital; La Chimoltrufia mans the counter wielding a feather duster fiercely.' },
    { speaker: 'CHIMOLTRUFIA', text: 'Oh, what a song! As I say one thing, I say another! Nobody tells me my Botijita poisoned anyone!', pose: 'chimoltrufia_confundida' },
    { speaker: 'CHAPULIN', text: 'Easy, doña Chimoltrufia! ¡Se aprovechan de su nobleza!', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Did you clean Rufino Rufián\'s suite early today?', pose: 'donramon_idle' },
    { speaker: 'CHIMOLTRUFIA', text: 'Of course, Don Ramón! That slick cat left for court with his wastebasket overflowing.', pose: 'chimoltrufia_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_recepcion',
      label: 'Reception Desk',
      x: 46, y: 40, w: 44, h: 42,
      dialogue: [
        { speaker: 'CHIMOLTRUFIA', text: 'I clean here while the manager handles investors! As I say one thing, I say another!', pose: 'chimoltrufia_confundida' }
      ]
    },
    {
      id: 'hotspot_candelabro',
      label: 'Crystal Chandelier',
      x: 42, y: 8, w: 16, h: 20,
      dialogue: [
        { speaker: 'DEFENSA', text: '(Still shines like day one. Still useless.)', pose: 'donramon_sweat' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_trash',
      label: 'What you found in the trash',
      dialogue: [
        { speaker: 'CHIMOLTRUFIA', text: 'I found this gold ring stained with red wax... and a baccarat betting slip! I thought he\'d throw it in the incinerator, but I have an appraiser\'s eye!', pose: 'chimoltrufia_shock', addEvidence: 'boleta_baccarat' },
        { speaker: 'CHIMOLTRUFIA', text: 'And the heraldic seal ring I rescued too. To dust it properly with my feather duster!', pose: 'chimoltrufia_idle', addEvidence: 'sello_lacre' },
        { speaker: 'DEFENSA', text: '(Fifteen-minute recess in baccarat... Rufino\'s alibi cracks!)', pose: 'donramon_shock', sfx: 'realization', unlockLocation: 'hotel_azotea' }
      ]
    }
  ]
};
