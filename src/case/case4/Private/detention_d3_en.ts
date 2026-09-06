// @Architecture(descriptionShort="English Case 4 day-3 detention scene", type="data", icon="layers")
/** Case 4 Day 3 — Detention (`detention_d3`), 12:00, English. Character scene, no handovers. */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_DETENTION_D3_EN: InvestigationScene = {
  title: 'Detention Center — Day Three',
  name: 'Detention Center',
  bg: 'assets/bg_detention.webp',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  idlePose: 'botija_nervioso',
  intro: [
    { speaker: 'NARRADOR', text: 'October 27, 12:00 PM. Preventive Detention Center.' },
    { speaker: 'BOTIJA', text: 'They told me. That I carried upstairs a trunk with a dead man inside.', pose: 'botija_nervioso' },
    { speaker: 'DEFENSA', text: 'Yes.', pose: 'donramon_idle' },
    { speaker: 'BOTIJA', text: 'And I signed the receipt. With my name and in my own hand.', pose: 'botija_llorando' },
    { speaker: 'CHAPULIN', text: 'You signed a job. That was what they gave you to sign.', pose: 'chapulin_point' },
    { speaker: 'BOTIJA', text: 'All my life I wanted a job where they asked me to sign.', pose: 'botija_nervioso' },
    { speaker: 'CHIMOLTRUFIA', text: 'And you had one. They just used it.', pose: 'chimoltrufia_idle' },
    { speaker: 'CHAPULIN', text: 'Do not lose your keep! We still have one hearing left.', pose: 'chapulin_idle' },
    { speaker: 'BOTIJA', text: '...Do you always talk like that?', pose: 'botija_nervioso' },
    { speaker: 'CHAPULIN', text: 'Always. And people always understand me. Late, but they understand me.', pose: 'chapulin_idle' }
  ],
  hotspots: [
    {
      id: 'botija_spot',
      label: 'Gordon Botija',
      x: 20, y: 10, w: 60, h: 65,
      dialogue: [
        { speaker: 'BOTIJA', text: 'Ask what you want. I hide nothing now.', pose: 'botija_nervioso' }
      ]
    },
    {
      id: 'phone_spot',
      label: 'Visitor Glass',
      x: 88, y: 15, w: 10, h: 45,
      dialogue: [
        { speaker: 'DEFENSA', text: 'Still no word from the prosecutor.', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'despues_botella',
      label: 'After the bottle',
      dialogue: [
        { speaker: 'BOTIJA', text: 'Since 21:26: boiler with Chómpiras, two floor calls, and the 22:20 freight.', pose: 'botija_nervioso' },
        { speaker: 'DEFENSA', text: '(It matches the basement slips and the bellhop’s account. He was never long alone.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'el_anillo',
      label: 'The ring',
      dialogue: [
        { speaker: 'BOTIJA', text: 'I never held it nor was it lent to me. I remember the guest turning the ring head as he signed.', pose: 'botija_nervioso' },
        { speaker: 'DEFENSA', text: '(A memory, not an accusation.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'verguenza',
      label: 'What shames you',
      condition: (flags) => Boolean(flags.talk_despues_botella) && Boolean(flags.talk_el_anillo),
      dialogue: [
        { speaker: 'BOTIJA', text: 'My record shames me, and that my wife might think I went back to the trade. That is why I hid the wallet.', pose: 'botija_llorando' },
        { speaker: 'CHIMOLTRUFIA', text: 'I never thought you killed anyone.', pose: 'chimoltrufia_idle' },
        { speaker: 'BOTIJA', text: 'But you did think I had taken Cuajinais’s job.', pose: 'botija_nervioso' },
        { speaker: 'CHIMOLTRUFIA', text: 'I thought it for two days. And it angered me more to think it than to ask.', pose: 'chimoltrufia_confundida' },
        { speaker: 'BOTIJA', text: 'I told him no. I told him no in front of the whole corridor.', pose: 'botija_nervioso' },
        { speaker: 'DEFENSA', text: 'People heard that. And that is why the prosecutor thinks you argued over money.', pose: 'donramon_idle' },
        { speaker: 'BOTIJA', text: 'We argued because I refused. First time I am charged with something for saying no.', pose: 'botija_llorando' },
        { speaker: 'DEFENSA', text: 'To the precinct to close the chain.', pose: 'donramon_point', unlockLocation: 'delegacion_d3' }
      ]
    }
  ]
};
