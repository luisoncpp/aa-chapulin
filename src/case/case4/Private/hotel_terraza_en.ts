// @Architecture(descriptionShort="English Case 4 day-1 terrace scene", type="data", icon="layers")
/** Case 4 Day 1 — Terrace (`hotel_terraza`), 12:00, English. */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_HOTEL_TERRAZA_EN: InvestigationScene = {
  title: 'Terrace Bar "El Chapuzón"',
  name: 'Terrace Bar',
  bg: 'assets/bg_hotel_bar.webp',
  bgm: 'terraza_bar',
  speaker: 'NARRADOR',
  idlePose: 'maruja_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'October 25, 12:00 PM. Hotel terrace.' },
    { speaker: 'MARUJA', text: 'If you come about the noise, I will answer. If you ask what I lost at the tables, that has nothing to do with anything.', pose: 'maruja_idle' },
    { speaker: 'DEFENSA', text: 'I had not asked anything yet.', pose: 'donramon_idle' },
    { speaker: 'MARUJA', text: 'That is why I said it first. This way all three of us save time.', pose: 'maruja_abanico' },
    { speaker: 'CHAPULIN', text: 'Good heavens! You answer faster than a person can ask.', pose: 'chapulin_idle' },
    { speaker: 'MARUJA', text: 'Young man, in this hotel they call me the Siren. And sirens sing first.', pose: 'maruja_coqueta' },
    { speaker: 'DEFENSA', text: '(This lady will leave me out of questions before my landlord leaves me out of rooms.)', pose: 'donramon_sweat' },
    { speaker: 'NARRADOR', text: 'Opening her purse for the fan, something inside rattles like a handful of dice.' },
    { speaker: 'MARUJA', text: 'Corks. One from every dinner that was worth it. I will not apologize for that.', pose: 'maruja_coqueta' },
    { speaker: 'CHAPULIN', text: 'I keep soda caps. But nobody invites me to dinner.', pose: 'chapulin_idle' },
    { speaker: 'MARUJA', text: 'Poor thing. In that suit I would not invite you either.', pose: 'maruja_abanico' }
  ],
  hotspots: [
    {
      id: 'hotspot_barra',
      label: 'Terrace Bar',
      x: 0, y: 43, w: 67, h: 36,
      dialogue: [
        { speaker: 'MARUJA', text: 'Here I serve cocktails to high society. Last night the fright reached even here.', pose: 'maruja_abanico' }
      ]
    },
    {
      id: 'hotspot_sombrillas',
      label: 'Parasols',
      x: 58, y: 12, w: 42, h: 35,
      dialogue: [
        { speaker: 'CHAPULIN', text: 'A fine sunset for questioning!', pose: 'chapulin_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'entrada_botija',
      label: "Botija's entrance",
      dialogue: [
        { speaker: 'MARUJA', text: 'I saw Botija enter before the bang. He came to work, not to hide.', pose: 'maruja_idle' }
      ]
    },
    {
      id: 'el_ruido',
      label: 'The noise',
      dialogue: [
        { speaker: 'MARUJA', text: 'Later I heard the forced door. A muffled thud during the party, cause unclaimed.', pose: 'maruja_nerviosa' },
        { speaker: 'DEFENSA', text: 'Calibers? Distances?', pose: 'donramon_point' },
        { speaker: 'MARUJA', text: 'I do not know calibers by ear. I heard a bang, period.', pose: 'maruja_idle' }
      ]
    },
    {
      id: 'visita_204',
      label: 'The 204 visit',
      dialogue: [
        { speaker: 'MARUJA', text: 'I had been in 204 over a gambling matter. That is all I will say for now.', pose: 'maruja_coqueta' }
      ]
    },
    {
      id: 'recuerdo_noche',
      label: 'That night’s keepsake',
      condition: (flags) => Boolean(flags.talk_entrada_botija) && Boolean(flags.talk_el_ruido) && Boolean(flags.talk_visita_204),
      dialogue: [
        { speaker: 'MARUJA', text: 'Before you go on... this one is from that night. Mr. Gómez gave it to me when he uncorked the bottle.', pose: 'maruja_nerviosa' },
        { speaker: 'DEFENSA', text: 'He gave it to you?', pose: 'donramon_point' },
        { speaker: 'MARUJA', text: 'He pulled it out, placed it in my hand like a man offering a flower, and then he poured. I left with the cork in my purse.', pose: 'maruja_idle' },
        { speaker: 'SARGENTO', text: 'Then that stopper left the room before you did... and before he drank.', pose: 'pazguato_saludo' },
        { speaker: 'MARUJA', text: 'I kept it because the gentleman was kind. Nobody warned me it would turn into evidence.', pose: 'maruja_nerviosa' },
        { speaker: 'NARRADOR', text: 'The Sergeant bags it, numbers it, and logs the delivery hour in tiny, perfect handwriting.' },
        { speaker: 'SARGENTO', text: 'It stays as an annex to my report. With my signature and yours.', pose: 'pazguato_decidido', updateEvidence: 'informe_policial' },
        { speaker: 'CHAPULIN', text: 'And what is that for, Sergeant? It is a cork!', pose: 'chapulin_idle' },
        { speaker: 'SARGENTO', text: 'It is so that in a month nobody can argue with me about where this cork has been. Because it will be written down.', pose: 'pazguato_idle' },
        { speaker: 'DEFENSA', text: '(They will dock his pay for bagging a cork. And he will bag it anyway.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'como_placa',
      label: 'How the plate was found',
      condition: (flags) => Boolean(flags.talk_recuerdo_noche),
      dialogue: [
        { speaker: 'SARGENTO', text: 'How the plate was found: bolt, trapped fibers, corridor length, route diagram.', pose: 'pazguato_saludo', addEvidence: 'candado_cadena' },
        { speaker: 'DEFENSA', text: '(Path and fibers. The full solution is proven at trial.)', pose: 'donramon_idle' }
      ]
    }
  ]
};
