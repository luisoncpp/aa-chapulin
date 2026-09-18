// @Architecture(descriptionShort="English Case 5 day 3 bodega examine hotspots and location unlock", type="data", icon="layers")
/**
 * Case 5, Day 3 — judicial goods warehouse hotspots. Spec §14.1. English.
 * Crate, drawers, and typewriter are painted on the background for Examine.
 */

import type { Hotspot } from '../../../types/index.js';

const BODEGA_BG = 'assets/bg_bodega_masa.webp';
const PLATE_HUACAL = 'assets/plate_huacal_sellos.webp';

export const CASE5_BODEGA_MASA_HOTSPOTS_EN: Hotspot[] = [
  {
    id: 'hotspot_huacal',
    label: 'Crate 9 lid',
    x: 70, y: 56, w: 24, h: 38,
    dialogue: [
      { speaker: 'NARRADOR', text: 'The lid is covered with overlapping seal strips like scales. Each one carries an initial and a date.' },
      { speaker: 'DEFENSA', text: 'One... two... fifty... a hundred...', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'More than two hundred fifty, counselor. More than two hundred fifty openings since 1971.', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: 'Every time a deposit is opened it must be sealed again, and the new seal is pasted on top of the old one without removing it.', pose: 'berrondo_definicion' },
      { speaker: 'BERRONDO', text: 'That way anyone can read the crate\'s history without opening it.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: 'And the one on top?', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: 'The top one is mine and is dated December fourth. I already declared that yesterday under protest.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '(He already declared it. Before anyone asked. Again.)', pose: 'chapulin_idle' },
      { speaker: 'SARGENTO', text: 'Counselor, shall I photograph the whole lid?', pose: 'pazguato_decidido' },
      { speaker: 'DEFENSA', text: 'Photograph it, Sergeant. And count them yourself.', pose: 'chapulin_idle', addEvidence: 'huacal_9' },
      { speaker: 'NARRADOR', text: 'Seal on a judicial deposit. A gummed paper strip crosses the lid joint.', bg: PLATE_HUACAL, furniture: 'none' },
      { speaker: 'NARRADOR', text: 'Whoever opens signs the new strip and pastes it over the previous one without removing any.', bg: PLATE_HUACAL, furniture: 'none' },
      { speaker: 'NARRADOR', text: 'The stack of strips is the deposit history: how many times it was opened, when, and by whom.', bg: PLATE_HUACAL, furniture: 'none' },
      { speaker: 'NARRADOR', text: 'El Chapulin returns to the warehouse.', bg: BODEGA_BG, furniture: 'none' }
    ]
  },
  {
    id: 'hotspot_cajones',
    label: 'Index drawers',
    x: 44, y: 46, w: 28, h: 24,
    dialogue: [
      { speaker: 'NARRADOR', text: 'Inside the crate, nine blond wood drawers with brass pulls and a handwritten label on each front.', bg: BODEGA_BG, furniture: 'none' },
      { speaker: 'DEFENSA', text: '"Aguascalientes to Bucareli." "Bucareli to Donceles." "Donceles to Espanto."', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '...They are sorted by street.', pose: 'chapulin_panic' },
      { speaker: 'BERRONDO', text: 'By street, counselor. A door-to-door credit publisher does not sell to people: it sells to addresses.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: 'And how many are there?', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'Eleven thousand four hundred seven, at the last cutoff.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: 'Seven more?', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: 'Seven new accounts and eleven closed since the auction. Closed ones are marked inactive but stay in the drawer. Addresses die too, counselor.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '(Seven new. This file is not dead. This file is growing.)', pose: 'chapulin_panic' },
      { speaker: 'SARGENTO', text: 'Your Honor... I mean, Counselor: shall I take the nine drawers to the precinct?', pose: 'pazguato_decidido' },
      { speaker: 'BERRONDO', text: 'I ask you not to, Sergeant. This is a judicial deposit under my responsibility and it answers to my signature.', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: 'But I offer something better: let the court seal them and leave them here, and open whichever drawer the court requests, when it requests it.', pose: 'berrondo_idle' },
      { speaker: 'SARGENTO', text: '...That is more correct than what I was about to do.', pose: 'pazguato_sweat' },
      { speaker: 'DEFENSA', text: '(Eleven thousand four hundred seven cards and you have to ask for them by street.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(If I do not know which street to search, it is the same as if they were at the bottom of the sea.)', pose: 'chapulin_idle', addEvidence: 'fichero_cedulario' }
    ]
  },
  {
    id: 'hotspot_maquina',
    label: 'Typewriter',
    x: 56, y: 70, w: 22, h: 18,
    condition: (flags) => Boolean(flags.examined_hotspot_huacal) && Boolean(flags.examined_hotspot_cajones),
    dialogue: [
      { speaker: 'NARRADOR', text: 'At the back of the crate, wrapped in a rubber cover, a black typewriter with a chrome carriage.' },
      { speaker: 'DEFENSA', text: '"Olivetti Lexikon 80." And it has a stenciled number on the side: forty-one.', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'Item 41 of the inventory. As I told you yesterday in my office.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: 'May I?', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'You may look. You may not type: any sign of use alters a deposit item.', pose: 'berrondo_definicion' },
      { speaker: 'DEFENSA', text: '(The ribbon is worn down to the fabric. This machine has typed a great deal.)', pose: 'chapulin_panic' },
      { speaker: 'DEFENSA', text: 'Counselor, who uses this machine?', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: 'I do, counselor. Twice a month, sitting right here, to draft my review minutes.', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: 'And before me, eleven years of secretaries. A machine does not break from use: it breaks from not being used.', pose: 'berrondo_idle' },
      { speaker: 'SARGENTO', text: 'Counselor, with permission: I will ask the court for a visual examination of this machine.', pose: 'pazguato_decidido' },
      { speaker: 'BERRONDO', text: 'That suits me very well, Sergeant. I would have asked for it myself.', pose: 'berrondo_idle', addEvidence: 'maquina_escribir' },
      { speaker: 'DEFENSA', text: '(He would have asked for it. Of course he would have asked for it.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(Because a machine he uses legally to write legal minutes proves absolutely nothing.)', pose: 'chapulin_panic' },
      { speaker: 'CHOMPIRAS', text: 'Say, counselor... are you leaving yet? I have to stack the crates again.', pose: 'chompiras_idle' },
      { speaker: 'DEFENSA', text: 'You unseal them and seal them again?', pose: 'chapulin_idle' },
      { speaker: 'CHOMPIRAS', text: 'I unseal them, more like. On Thursdays.', pose: 'chompiras_idle' },
      { speaker: 'DEFENSA', text: 'On Thursdays?', pose: 'chapulin_point' },
      { speaker: 'CHOMPIRAS', text: 'Thursdays, counselor. The man in black shows up, I pry open number nine with a crowbar, he sits a while and types, and then I nail it shut again.', pose: 'chompiras_idle' },
      { speaker: 'DEFENSA', text: '...Since when?', pose: 'chapulin_panic' },
      { speaker: 'CHOMPIRAS', text: 'Me? Since September.', pose: 'chompiras_idle' },
      { speaker: 'CHOMPIRAS', text: 'But Mr. Nicanor says Berrondo has been doing the same for eleven years. Before I started, the earlier loaders helped him.', pose: 'chompiras_idle' },
      { speaker: 'NARRADOR', text: 'El Chapulin keeps staring at the crate.', bgm: 'suspense' },
      { speaker: 'DEFENSA', text: '(Eleven years. Twice a month. Sitting and typing. In a courthouse.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(And the antennae did not vibrate. But their stillness does not rule out a clue or say anything about ownership. Berrondo said the box is legally deposited. What if the terrible thing is precisely that he is telling the truth?)', pose: 'chapulin_panic' },
      { speaker: 'BERRONDO', text: 'Counselor, I am going up to the prosecutor\'s office. Shall I drive you? My car is in the yard.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '...No, thank you. I will run.', pose: 'chapulin_idle', unlockLocation: 'fiscalia_c5' },
      { speaker: 'BERRONDO', text: 'As you wish. Have a good morning.', pose: 'berrondo_idle' }
    ]
  }
];
