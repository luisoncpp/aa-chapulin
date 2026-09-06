// @Architecture(descriptionShort="English Case 4 day-1 detention visit", type="data", icon="layers")
/** Case 4 Day 1 — Detention Center (`detention`) English. Adapted, same structure. */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_DETENTION_EN: InvestigationScene = {
  title: 'Detention Center - Visitor Room',
  name: 'Detention Center',
  bg: 'assets/bg_detention.webp',
  bgm: 'detention_center',
  speaker: 'NARRADOR',
  idlePose: 'botija_nervioso',
  intro: [
    { speaker: 'NARRADOR', text: 'October 25, nine in the morning. City Detention Center.' },
    { speaker: 'CHIMOLTRUFIA', text: 'Tell him to talk! Since last night all he does is repeat that I should not worry. And like I say one thing I say another: that is exactly what worries me!', pose: 'chimoltrufia_confundida' },
    { speaker: 'BOTIJA', text: 'I did not want you seeing me in here again, old girl.', pose: 'botija_llorando' },
    { speaker: 'CHIMOLTRUFIA', text: 'Well, you already saw me seeing you! And I do not know what hurts more, looking at you or you not talking to me.', pose: 'chimoltrufia_shock' },
    { speaker: 'DEFENSA', text: 'Pardon me, said Monchito. Licenciado Monchito, public defender by trade and by necessity.', pose: 'donramon_idle' },
    { speaker: 'CHIMOLTRUFIA', text: 'And how much do you charge?', pose: 'chimoltrufia_confundida' },
    { speaker: 'DEFENSA', text: 'Ma\'am, I am sixteen months behind on my own rent. Charging you would be an insult to my profession.', pose: 'donramon_sweat' },
    { speaker: 'CHAPULIN', text: 'And do not lose your keep! We came to hear all of it, even the parts he would rather not tell.', pose: 'chapulin_idle' },
    { speaker: 'BOTIJA', text: 'And you are with the police?', pose: 'botija_nervioso' },
    { speaker: 'CHAPULIN', text: 'I am El Chapulín Colorado.', pose: 'chapulin_idle' },
    { speaker: 'BOTIJA', text: 'Ah. Then I really am done for.', pose: 'botija_llorando' },
    { speaker: 'CHAPULIN', text: 'They take advantage of my noble nature!', pose: 'chapulin_panic' },
    { speaker: 'DEFENSA', text: 'Start at the beginning, Botija. And do not dress it up: ugly facts defend better than pretty ones.', pose: 'donramon_idle' },
    { speaker: 'BOTIJA', text: 'Then get comfortable, because that night they ran me all over this hotel. And running is not my best look.', pose: 'botija_nervioso' }
  ],
  hotspots: [
    {
      id: 'botija_spot',
      label: 'Gordon Botija',
      x: 20, y: 10, w: 60, h: 65,
      dialogue: [
        { speaker: 'BOTIJA', text: 'I tell everything from the start, Don Ramón! The jobs, the argument, and the hiding!', pose: 'botija_llorando' }
      ]
    },
    {
      id: 'phone_spot',
      label: 'Visitor Glass',
      x: 88, y: 15, w: 10, h: 45,
      dialogue: [
        { speaker: 'DEFENSA', text: 'Not one note from the prosecutor. He must be counting coins.', pose: 'donramon_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'encargos_gala',
      label: 'The gala jobs',
      dialogue: [
        { speaker: 'BOTIJA', text: 'That night, short-staffed, I took two paid jobs: carrying a sealed bottle from the cellar to 204 and moving a sealed trunk from 204 to 304.', pose: 'botija_nervioso' },
        { speaker: 'BOTIJA', text: 'I took hotel orders and tips for covering staff. The 204 guest received the bottle and the luggage in front of me.', pose: 'botija_nervioso' },
        { speaker: 'BOTIJA', text: 'I never saw inside the trunk. It was sealed. And at 23:05 I checked the 304 bathroom.', pose: 'botija_llorando' }
      ]
    },
    {
      id: 'cuajinais_billetera',
      label: 'Cuajinais and the wallet',
      dialogue: [
        { speaker: 'BOTIJA', text: 'Leaving the bathroom after the bang I recognized the man: El Cuajinais. I had argued with him that afternoon because he wanted to recruit me back into his business.', pose: 'botija_nervioso' },
        { speaker: 'BOTIJA', text: 'I told him no in front of the whole corridor. I feared Chimoltrufia would think I had accepted.', pose: 'botija_llorando' },
        { speaker: 'BOTIJA', text: 'I checked his ID to confirm who he was, pocketed the wallet in fright, and hid in the hamper.', pose: 'botija_llorando', addEvidence: 'billetera_cuajinais' },
        { speaker: 'SARGENTO', text: 'I log the wallet myself: Mr. Gómez ID and $200. On record who held it and where.', pose: 'pazguato_saludo' }
      ]
    },
    {
      id: 'puerta_dejaste',
      label: 'The door you left',
      condition: (flags) => Boolean(flags.talk_encargos_gala) && Boolean(flags.talk_cuajinais_billetera),
      dialogue: [
        { speaker: 'BOTIJA', text: 'I opened with my master key, left the door ajar, and went to the bathroom. I never touched the chain.', pose: 'botija_nervioso' },
        { speaker: 'BOTIJA', text: 'The sitting room lay dim behind the screen. While water ran I heard a soft door thud, but I saw nobody.', pose: 'botija_nervioso', unlockLocation: 'hotel_lobby' },
        { speaker: 'DEFENSA', text: 'The money was still inside. That proves nothing: a nervous thief also knows better than to spend.', pose: 'donramon_idle' },
        { speaker: 'BOTIJA', text: 'I know how it looks.', pose: 'botija_llorando' },
        { speaker: 'DEFENSA', text: 'That is why I need how it happened, not how you wish it sounded.', pose: 'donramon_idle' },
        { speaker: 'BOTIJA', text: 'I was scared. I thought if they found me next to Cuajinais they would decide we were partners again.', pose: 'botija_nervioso' },
        { speaker: 'DEFENSA', text: 'And climbing into the laundry hamper was the idea that came to you?', pose: 'donramon_sweat' },
        { speaker: 'BOTIJA', text: 'Climbing in came to me very fast. What never came to me was how to climb out.', pose: 'botija_llorando' },
        { speaker: 'CHAPULIN', text: 'I would have hidden too! My vinyl antennae detect the presence of enemies... but my legs form their own opinions.', pose: 'chapulin_idle' },
        { speaker: 'CHIMOLTRUFIA', text: 'You should have told me, Botija.', pose: 'chimoltrufia_confundida' },
        { speaker: 'BOTIJA', text: 'I feared even more that you would believe it too.', pose: 'botija_llorando' },
        { speaker: 'CHIMOLTRUFIA', text: 'Well, I did think it. And like I say one thing I say another: I thought it while crying.', pose: 'chimoltrufia_shock' },
        { speaker: 'CHAPULIN', text: 'There. You have both said it. We can start from there.', pose: 'chapulin_idle' },
        { speaker: 'DEFENSA', text: '(A man more afraid of his wife than of the gallows. That one is not lying to me.)', pose: 'donramon_idle' }
      ]
    }
  ]
};
