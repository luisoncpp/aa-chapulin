// @Architecture(descriptionShort="English Case 4 day-2 terrace with Chómpiras", type="data", icon="layers")
/** Case 4 Day 2 — Terrace with Chómpiras, 11:00, English. */

import type { InvestigationScene } from '../../../types/index.js';

export const CASE4_HOTEL_TERRAZA_D2_EN: InvestigationScene = {
  title: 'Terrace Bar "El Chapuzón"',
  name: 'Terrace Bar',
  bg: 'assets/bg_hotel_bar.webp',
  bgm: 'terraza_bar',
  speaker: 'NARRADOR',
  idlePose: 'chompiras_idle',
  intro: [
    { speaker: 'NARRADOR', text: 'October 26, 11:00 AM. Terrace. The freight-elevator bellhop is minding the counter.' },
    { speaker: 'CHOMPIRAS', text: 'Counselor! Are you the one getting Botija out? Because if you do not get him out, I am left with nobody to help me with the trunks.', pose: 'chompiras_idle' },
    { speaker: 'DEFENSA', text: 'I am getting him out. Do the two of you know each other from before?', pose: 'donramon_idle' },
    { speaker: 'CHOMPIRAS', text: 'From before before. But we do not talk about that anymore, right? We are uniformed men now.', pose: 'chompiras_nervous' },
    { speaker: 'CHAPULIN', text: 'How beautiful it is to reform!', pose: 'chapulin_idle' },
    { speaker: 'CHOMPIRAS', text: 'Beautiful, yes. Well paid, no.', pose: 'chompiras_relieved' },
    { speaker: 'DEFENSA', text: 'We are looking for a shipment with this number.', pose: 'donramon_idle' },
    { speaker: 'CHOMPIRAS', text: 'Then you cannot miss, counselor. Guests change their names every other day; luggage does not. The bag carries its tag and that is that.', pose: 'chompiras_nervous' },
    { speaker: 'CHAPULIN', text: 'And do you ride inside the freight lift?', pose: 'chapulin_point' },
    { speaker: 'CHOMPIRAS', text: 'Oh, no! The cabin is for freight. You send the bundle up and climb the stairs, like the poor do.', pose: 'chompiras_idle' }
  ],
  hotspots: [
    {
      id: 'hotspot_lamina',
      label: 'Shipment Sheet',
      x: 14, y: 49, w: 24, h: 18,
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'Sheet with several rows. B-17 shows twice with different loads; the rest is ordinary freight.', pose: 'chompiras_nervous' },
        { speaker: 'DEFENSA', text: '(Printed marks let us trail the tag with no color needed.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'hotspot_sombrillas2',
      label: 'Parasols',
      x: 58, y: 12, w: 42, h: 35,
      dialogue: [
        { speaker: 'CHAPULIN', text: 'Same sunset, different bellhop!', pose: 'chapulin_idle' }
      ]
    }
  ],
  talkOptions: [
    {
      id: 'como_funciona',
      label: 'How it works',
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'Outside operator, manual call, load log. No hidden passengers inside the weighed mass.', pose: 'chompiras_idle' }
      ]
    },
    {
      id: 'seguir_b17',
      label: 'Trail B-17',
      condition: (flags) => Boolean(flags.examined_hotspot_lamina),
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'Rufino’s trunk, with Botija’s handling. The scale read what it read; I say not what was inside.', pose: 'chompiras_nervous', addEvidence: 'registro_montacargas' },
        { speaker: 'CHOMPIRAS', text: 'Well, something came out of it, counselor. I log what the scale reads, not what rides inside.', pose: 'chompiras_idle' },
        { speaker: 'CHAPULIN', text: 'Eighty kilos! And what weighs eighty kilos?', pose: 'chapulin_point' },
        { speaker: 'CHOMPIRAS', text: 'Around here, almost everything worth having.', pose: 'chompiras_nervous' },
        { speaker: 'DEFENSA', text: 'Then we are going to have to look at that trunk.', pose: 'donramon_point' },
        { speaker: 'CHAPULIN', text: 'And was it stored or lost?', pose: 'chapulin_idle' },
        { speaker: 'CHOMPIRAS', text: 'Stored. That is why I log the numbers... though afterward nobody believes a word I say.', pose: 'chompiras_relieved' },
        { speaker: 'DEFENSA', text: 'I do. After all, we are two men who write everything down and whom nobody believes.', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'recepcion_304',
      label: 'Reception at 304',
      condition: (flags) => Boolean(flags.talk_seguir_b17),
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'Sealed delivery to Rufino, numbered strap whole. I walked with Botija through service access and signed as freight witness.', pose: 'chompiras_idle', updateEvidence: 'orden_servicios' }
      ]
    },
    {
      id: 'donde_termino',
      label: 'Where it ended',
      condition: (flags) => Boolean(flags.talk_recepcion_304),
      dialogue: [
        { speaker: 'CHOMPIRAS', text: 'Let us check the roof destination and inspect it.', pose: 'chompiras_relieved', unlockLocation: 'hotel_azotea' }
      ]
    }
  ]
};
