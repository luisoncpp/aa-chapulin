// @Architecture(descriptionShort="English Case 4 day-3 detention extortion note", type="data", icon="layers")
/**
 * Case 4 Day 3 — Detention Center (`detention_d3`) English.
 */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_DETENTION_D3_EN: InvestigationScene = {
  title: 'Detention Center — Day Three',
  name: 'Detention Center',
  bg: 'assets/bg_detention.webp',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  idlePose: 'botija_aliviado',
  intro: [
    { speaker: 'NARRADOR', text: 'October 27, 3:30 PM. Preventive Detention Center.' },
    { speaker: 'DEFENSA', text: 'Botija, the chemist unstitched the secret lining of Cuajinais\'s wallet and found a bus-terminal locker key. The Sergeant opened it immediately.', pose: 'donramon_idle', updateEvidence: 'billetera_cuajinais' },
    { speaker: 'BOTIJA', text: 'And what did Cuajinais keep there, Don Ramón?', pose: 'botija_aliviado' },
    { speaker: 'SARGENTO', text: 'The official receipt for an extortion telegram!', pose: 'pazguato_saludo', addEvidence: 'nota_amenaza' },
    { speaker: 'CHAPULIN', text: '¡No contaban con mi astucia! Cuajinais came to shake down the fake count!', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: '(Turn 2... With this we shatter Rufino\'s alibi in the final trial.)', pose: 'donramon_point' }
  ],
  hotspots: [
    {
      id: 'botija_spot',
      label: 'Gordon Botija',
      x: 32, y: 10, w: 36, h: 58,
      dialogue: [
        { speaker: 'BOTIJA', text: 'Thank you, Don Ramón! I can almost smell the corner churros!', pose: 'botija_aliviado' }
      ]
    },
    {
      id: 'phone_spot',
      label: 'Visitor Glass',
      x: 86, y: 16, w: 12, h: 40,
      dialogue: [
        { speaker: 'DEFENSA', text: 'Still no word from the prosecutor. He must be counting coins.', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'about_telegram',
      label: 'About the extortion telegram',
      dialogue: [
        { speaker: 'SARGENTO', text: '"Count of Montemayor: pay my $50,000 for Cleopatra\'s necklace or the police will know everything. Room 304."', pose: 'pazguato_decidido' },
        { speaker: 'BOTIJA', text: 'That Cuajinais was a crook, but he didn\'t deserve to die poisoned!', pose: 'botija_aliviado' },
        { speaker: 'DEFENSA', text: '(The real motive: extortion, not robbery. Tomorrow we open trial with this.)', pose: 'donramon_point' }
      ]
    }
  ]
};
