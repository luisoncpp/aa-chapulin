// @Architecture(descriptionShort="English Case 4 day-3 precinct closing", type="data", icon="layers")
/** Case 4 Day 3 — Precinct (`delegacion_d3`), 14:00, English. Final scene: sello_lacre closes the day. */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_DELEGACION_D3_EN: InvestigationScene = {
  title: 'Police Precinct — Day Three',
  name: 'Precinct',
  bg: 'assets/bg_delegacion.webp',
  bgm: 'suspense',
  speaker: 'NARRADOR',
  idlePose: 'pazguato_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'October 27, 2:00 PM. Police Precinct.' },
    { speaker: 'SARGENTO', text: 'I hold the 204 briefcase sealed since yesterday, and the personal effects apart.', pose: 'pazguato_saludo' }
  ],
  hotspots: [
    {
      id: 'hotspot_maletin',
      label: 'Seized Briefcase',
      x: 73, y: 17, w: 11, h: 9,
      dialogue: [
        { speaker: 'SARGENTO', text: 'Sealed yesterday afternoon. We open it only on today’s order.', pose: 'pazguato_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'maletin_incautado',
      label: 'The seized briefcase',
      dialogue: [
        { speaker: 'SARGENTO', text: 'With the telegram in hand, the judge cleared opening the 204 briefcase.', pose: 'pazguato_decidido' },
        { speaker: 'NARRADOR', text: 'Inside, wrapped in a hotel handkerchief, lies the Cleopatra Necklace.' },
        { speaker: 'CHAPULIN', text: 'Oh, good heavens! And is that the real thing?', pose: 'chapulin_point' },
        { speaker: 'SARGENTO', text: 'Reported stolen eleven months ago, young man. I logged it and attached it to the telegram file.', pose: 'pazguato_saludo', updateEvidence: 'nota_amenaza' },
        { speaker: 'DEFENSA', text: 'Eleven months kept in a hotel handkerchief. With that I could pay rent through next year. And last year\'s.', pose: 'donramon_sweat' },
        { speaker: 'CHAPULIN', text: 'Then the dead man came to collect.', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'He came to collect. That explains a meeting, Chapulín. It still does not explain a glass.', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'quien_tuvo',
      label: 'Who held each thing',
      condition: (flags) => Boolean(flags.talk_maletin_incautado),
      dialogue: [
        { speaker: 'SARGENTO', text: 'I read the documented chain, no new witnesses.', pose: 'pazguato_saludo' },
        { speaker: 'SARGENTO', text: '21:15–21:20, cellar and lobby: Cecilio with Rufino, ring on, sealing the cellar release.', pose: 'pazguato_idle' },
        { speaker: 'SARGENTO', text: '21:20, delivery: Botija takes the sealed bottle upstairs. He receives nothing else.', pose: 'pazguato_idle' },
        { speaker: 'SARGENTO', text: '21:25, 204 door: Maruja witnesses delivery and signature. The ring stays on Rufino’s hand.', pose: 'pazguato_idle' },
        { speaker: 'SARGENTO', text: '21:26, duty: Botija leaves with Chómpiras and never returns to that floor until the freight.', pose: 'pazguato_idle' },
        { speaker: 'SARGENTO', text: '21:30–21:40: Maruja leaves and leaves Rufino alone with the sealed bottle.', pose: 'pazguato_idle' },
        { speaker: 'SARGENTO', text: '21:40: Cuajinais pulls the cork, hands it to Maruja, and drinks. The cork leaves the hotel that night in her purse.', pose: 'pazguato_idle' },
        { speaker: 'SARGENTO', text: 'Day 2, hearing close: I seize Rufino’s personal effects, ring included, apart from the samples.', pose: 'pazguato_decidido' },
        { speaker: 'SARGENTO', text: 'The lab found the same agent inside the cork. Inside, counselor. Not on the skin of it.', pose: 'pazguato_saludo' },
        { speaker: 'DEFENSA', text: 'Down in the cork?', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'Down in it. And the bit caught on the rim is metal. Metal, not cork.', pose: 'pazguato_sweat' },
        { speaker: 'CHAPULIN', text: 'A cork with metal inside! Like the sandwiches at the market!', pose: 'chapulin_point' },
        { speaker: 'DEFENSA', text: 'The report does not say through which of the two marks it entered. That is what we are going to show.', pose: 'donramon_idle', updateEvidence: 'toxicologia_vino' },
        { speaker: 'DEFENSA', text: 'Sergeant, I want the effects you seized yesterday examined separately.', pose: 'donramon_point' },
        { speaker: 'SARGENTO', text: 'I have them right here, each in its own bag. This is Mr. Rufián\'s ring.', pose: 'pazguato_saludo' },
        { speaker: 'NARRADOR', text: 'The head turns on a pin. Beneath lie a cavity, a fine channel, and a metal tip with its end broken off.' },
        { speaker: 'SARGENTO', text: 'The report describes the piece and the channel residue. But it does not say whether that tip fits anything.', pose: 'pazguato_idle', addEvidence: 'sello_lacre' },
        { speaker: 'DEFENSA', text: 'It need not say. We compare that tomorrow, in front of the judge.', pose: 'donramon_point' },
        { speaker: 'CHAPULIN', text: '(My antennae have stopped tingling. Now they are shouting.)', pose: 'chapulin_idle' }
      ]
    }
  ]
};
