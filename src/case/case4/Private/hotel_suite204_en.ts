// @Architecture(descriptionShort="English Case 4 day-2 Suite 204", type="data", icon="layers")
/** Case 4 Day 2 — Suite 204, 10:00, English. */

import type { InvestigationScene } from '../../../types/index.js';
import { SUITE204_HOTSPOTS_EN } from './hotel_suite204_hotspots_en.js';

export const CASE4_HOTEL_SUITE204_EN: InvestigationScene = {
  title: "Suite 204 - Rufino Rufián's Room",
  name: 'Suite 204',
  bg: 'assets/bg_hotel_suite204.webp',
  bgm: 'casa_clotilde',
  speaker: 'NARRADOR',
  idlePose: 'rufino_smug',
  intro: [
    { speaker: 'NARRADOR', text: 'October 26, 10:00 AM. Suite 204. Authorized visit, supervised by the Sergeant.' },
    { speaker: 'RUFINO', text: 'Come in, come in. And before you turn my rooms into a plumbing workshop: yes, Mr. Gómez was here. I will not deny a visit half the hotel saw.', pose: 'rufino_monocle' },
    { speaker: 'DEFENSA', text: 'Botija says he delivered the wine at this door.', pose: 'donramon_idle' },
    { speaker: 'RUFINO', text: 'And he asked me for a signature. I gave him one. In my family we sign everything, condolences included.', pose: 'rufino_smug' },
    { speaker: 'CHAPULIN', text: 'And where is your family from?', pose: 'chapulin_idle' },
    { speaker: 'RUFINO', text: 'Montemayor, young man.', pose: 'rufino_smug' },
    { speaker: 'CHAPULIN', text: 'Oh, I have a cousin in Montemayor!', pose: 'chapulin_point' },
    { speaker: 'RUFINO', text: '...I very much doubt it.', pose: 'rufino_sweat' },
    { speaker: 'DEFENSA', text: '(I have never seen a count defend his hometown in such a hurry.)', pose: 'donramon_idle' },
    { speaker: 'CHAPULIN', text: 'And the trunk?', pose: 'chapulin_point' },
    { speaker: 'RUFINO', text: 'I lent it to my guest. He had things to take up to his room, and one is generous with other people\'s luggage.', pose: 'rufino_smug' },
    { speaker: 'DEFENSA', text: 'Let us start with that visit.', pose: 'donramon_idle' }
  ],
  hotspots: SUITE204_HOTSPOTS_EN,
  talkOptions: [
    {
      id: 'la_reunion',
      label: 'The meeting',
      dialogue: [
        { speaker: 'RUFINO', text: 'We discussed business and Mr. Gómez left alive. I admit no extortion.', pose: 'rufino_smug' },
        { speaker: 'DEFENSA', text: '(We log his version without charging him yet.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'la_botella',
      label: 'The bottle',
      dialogue: [
        { speaker: 'RUFINO', text: 'I received it sealed, left it on the table, and my guest opened it. Maruja was there for the opening.', pose: 'rufino_monocle' },
        { speaker: 'DEFENSA', text: '(The stretch between delivery and opening still needs rebuilding.)', pose: 'donramon_idle' }
      ]
    },
    {
      id: 'el_baul',
      label: 'The trunk',
      dialogue: [
        { speaker: 'RUFINO', text: 'I own B-17: I signed dispatch and reception. I helped stow the guest’s things.', pose: 'rufino_smug' },
        { speaker: 'DEFENSA', text: '(That explanation will face contrast.)', pose: 'donramon_point' }
      ]
    },
    {
      id: 'objetos_reserva',
      label: 'Objects of note',
      dialogue: [
        { speaker: 'DEFENSA', text: 'That turning ring... we already saw it at reception.', pose: 'donramon_point' },
        { speaker: 'RUFINO', text: 'It turns to protect the relief. Nothing more.', pose: 'rufino_monocle' },
        { speaker: 'DEFENSA', text: 'Does it not worry you that they found a gala device in your radiator?', pose: 'donramon_idle' },
        { speaker: 'RUFINO', text: 'What worries me is that somebody used my room as a storeroom. Staff came and went all night: maids, bellhops, plumbers...', pose: 'rufino_sweat' },
        { speaker: 'CHAPULIN', text: 'And counts!', pose: 'chapulin_point' },
        { speaker: 'RUFINO', text: 'The count lives here, young man. That is different.', pose: 'rufino_monocle' },
        { speaker: 'SARGENTO', text: 'I will log those entries too. All of them, with name and hour.', pose: 'pazguato_decidido' },
        { speaker: 'DEFENSA', text: 'Do that, Sergeant. Finding a thing in a room does not say who left it there. Otherwise they would charge me with the leaks in my own house.', pose: 'donramon_idle', unlockLocation: 'hotel_terraza_d2' }
      ]
    }
  ]
};
