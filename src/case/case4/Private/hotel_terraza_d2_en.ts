// @Architecture(descriptionShort="English Case 4 day-2 terrace bar with Chómpiras", type="data", icon="layers")
/**
 * Case 4 Day 2 — Terrace Bar (`hotel_terraza_d2`) English — character rotation.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_HOTEL_TERRAZA_D2_EN: InvestigationScene = {
  title: 'Terrace Bar "El Chapuzón"',
  name: 'Terrace Bar',
  bg: 'assets/bg_hotel_bar.webp',
  bgm: 'investigation',
  speaker: 'NARRADOR',
  idlePose: 'chompiras_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'October 26, 1:00 PM. Terrace Bar. Maruja is gone; at the counter, a scruffy bellhop sips orange soda through a straw.' },
    { speaker: 'CHOMPIRAS', text: 'Oh, Mother of mine! Don\'t hit me with the mallet — I fell off a fence as a kid and my head stayed tender!', pose: 'chompiras_nervous' },
    { speaker: 'DEFENSA', text: 'Chómpiras?! What the devil are you doing working in this palace of millionaires?!', pose: 'donramon_shock' },
    { speaker: 'CHOMPIRAS', text: 'Don Ramón! What a miracle I don\'t see you fleeing sixteen months of rent! I\'m working as bellhop and freight-elevator operator.', pose: 'chompiras_nervous' },
    { speaker: 'CHAPULIN', text: 'Praise honest work! Tell me, good friend: what strange movements did you see last night in the elevators?', pose: 'chapulin_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_barra',
      label: 'Bar Counter',
      x: 2, y: 36, w: 60, h: 40,
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'I hide here when the manager passes. Orange soda and back to work!', pose: 'chompiras_relieved' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_elevator',
      label: 'The service freight elevator',
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'At 10:20 PM the log recorded heavy load about 175 kilos: floor 2 to floor 3. Rufino plus trunk plus... well, you get me!', pose: 'chompiras_nervous', addEvidence: 'registro_montacargas' },
        { speaker: 'CHOMPIRAS', text: 'At 10:25 PM, light load of 95 kilos: floor 3 straight to the roof. The trunk came back empty!', pose: 'chompiras_relieved' },
        { speaker: 'DEFENSA', text: '(175 minus 95... eighty kilos stayed on the third floor!)', pose: 'donramon_shock', sfx: 'realization', unlockLocation: 'delegacion' }
      ]
    },
    {
      id: 'about_count',
      label: 'Did you see the Count of Montemayor?',
      unlockedByTalk: 'about_elevator',
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'I saw him hurry toward the gaming salon around 10:30 PM smelling of hot wax and fine tobacco.', pose: 'chompiras_idle' },
        { speaker: 'DEFENSA', text: '(Hot wax... like melted seal wax.)', pose: 'donramon_idle' }
      ]
    }
  ]
};
