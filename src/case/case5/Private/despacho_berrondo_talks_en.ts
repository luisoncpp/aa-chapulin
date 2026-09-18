// @Architecture(descriptionShort="English Case 5 day 2 Berrondo talk chain and plates", type="data", icon="layers")
/**
 * Case 5, Day 2 — talk options with Attorney Berrondo. Spec §12.3.
 * Mashed proverb (§22.1) and hard-word gag (§22.2) adapted for English.
 */

import type { TalkOption } from '../../../types/index.js';

const DESPACHO_BG = 'assets/bg_despacho_berrondo.webp';
const PLATE_MASA = 'assets/plate_masa_concursal.webp';
const PLATE_FICHA = 'assets/plate_anatomia_ficha.webp';

export const CASE5_BERRONDO_TALKS_EN: TalkOption[] = [
  {
    id: 'quiebra_no_cierra',
    label: 'What is a bankruptcy that never closes?',
    dialogue: [
      { speaker: 'BERRONDO', text: 'What remains of a dead corporation is called insolvency.', pose: 'berrondo_definicion' },
      { speaker: 'DEFENSA', text: 'An insol... what?', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: '...vency.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: 'Chanfle!', pose: 'chapulin_panic' },
      { speaker: 'BERRONDO', text: 'From Latin concursus, "a running together": all creditors run at once on what is left.', pose: 'berrondo_definicion' },
      { speaker: 'BERRONDO', text: 'A pretty word for a very ugly thing, counselor.', pose: 'berrondo_idle' },
      { speaker: 'NARRADOR', text: 'Illustrated plate: bankruptcy estate. Everything a bankrupt company leaves behind is inventoried, sealed, and deposited.', bg: PLATE_MASA, furniture: 'none' },
      { speaker: 'NARRADOR', text: 'While an asset remains unawarded, it stays in administration; one already auctioned may remain on deposit under the sale conditions.', bg: PLATE_MASA, furniture: 'none' },
      { speaker: 'NARRADOR', text: 'The trustee answers for the deposit. He may open the crate and answers for every opening with his signature.', bg: PLATE_MASA, furniture: 'none' },
      { speaker: 'NARRADOR', text: 'That is why deposits are kept where the court can see them: in the Judicial Archive.', bg: PLATE_MASA, furniture: 'none' },
      { speaker: 'DEFENSA', text: 'In the Archive? That Archive?', pose: 'chapulin_panic', bg: DESPACHO_BG, furniture: 'none' },
      { speaker: 'BERRONDO', text: 'In the basement, counselor. Fourteen crates. I go down twice a month and sign every time.', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: 'If it seems sinister to you, think of it the other way: the most guarded place in this city to keep something is a courthouse.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '(And the place where nobody looks twice at a man with a credential... also.)', pose: 'chapulin_idle' }
    ]
  },
  {
    id: 'que_hay_huacales',
    label: 'And what is in those crates?',
    unlockedByTalk: 'quiebra_no_cierra',
    dialogue: [
      { speaker: 'BERRONDO', text: 'Office furniture, three thousand two hundred volumes nobody wanted, two hundred ten deluxe editions...', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: '...and the card file.', pose: 'berrondo_definicion' },
      { speaker: 'DEFENSA', text: 'The card fi...?', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'Card file. Eleven thousand four hundred cards. It was the only thing in that company worth anything, so they auctioned it last.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: 'Cards for what?', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: 'For customers, counselor. To sell twenty-four volumes on credit to a family, you have to know who that family is.', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: 'Here, I will show you a blank one. They are all the same.', pose: 'berrondo_idle' },
      { speaker: 'NARRADOR', text: 'Card-file card, single format since 1956. Six fields, typed by the salesman on his return from the route.', bg: PLATE_FICHA, furniture: 'none' },
      { speaker: 'NARRADOR', text: 'Address. Income declared by the head of household. Valuables the family claims to own.', bg: PLATE_FICHA, furniture: 'none' },
      { speaker: 'NARRADOR', text: 'Payment punctuality. Salesman\'s notes. And, at the bottom, the condition of the door.', bg: PLATE_FICHA, furniture: 'none' },
      { speaker: 'NARRADOR', text: 'That last field told them whether to come back or whether they could leave the volume inside.', bg: PLATE_FICHA, furniture: 'none' },
      { speaker: 'DEFENSA', text: '...The condition of the door?', pose: 'chapulin_panic', bg: DESPACHO_BG, furniture: 'none' },
      { speaker: 'BERRONDO', text: 'The lock, counselor. Whether it was good, whether it was overdue, whether it could be pushed.', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: 'It was a door-to-door credit company. It needed to know whether the address existed and whether the address locked.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '(Eleven thousand four hundred houses. With what is inside and how the door opens.)', pose: 'chapulin_panic' },
      { speaker: 'DEFENSA', text: '(Written by the families themselves.)', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'I see it impresses you. It impressed me in 1971; with the court\'s permission I paid three pesos for the card file. It was awarded to me, but the originals had to remain deposited here until the bankruptcy closed.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: 'And why did you want it?', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: 'To sell copies, counselor. Card by card, to whoever asks and pays.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: 'And that is allowed?!', pose: 'chapulin_panic' },
      { speaker: 'BERRONDO', text: 'Look it up, I beg you. Volume IX of the Code, entry "things outside commerce." The information is not there.', pose: 'berrondo_definicion' },
      { speaker: 'BERRONDO', text: 'Selling information is not a crime in this country, counselor. It was not in seventy-one, and it is not today.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '(He is not confessing anything. He is giving me a lecture.)', pose: 'chapulin_idle' }
    ]
  },
  {
    id: 'a_quien_vende',
    label: 'Who buys it?',
    unlockedByTalk: 'que_hay_huacales',
    dialogue: [
      { speaker: 'BERRONDO', text: 'Whoever asks. I do not ask why. Neither does whoever sells a knife.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: 'But a knife is for slicing bread!', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: 'And a card is for knowing whom to bill. Three collectors have bought one this year.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: 'Well it does not add up! Because birds of a feather... wake up with fleas!', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: '...Those are two proverbs, counselor.', pose: 'berrondo_definicion' },
      { speaker: 'DEFENSA', text: 'I know!', pose: 'chapulin_panic' },
      { speaker: 'BERRONDO', text: 'The first is the old English saying that birds of a feather flock together. The second warns that if you lie down with dogs, you wake up with fleas.', pose: 'berrondo_definicion' },
      { speaker: 'BERRONDO', text: 'You welded them at the midpoint. You produced a perfectly grammatical sentence that means absolutely nothing.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: 'It means plenty to me!', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: 'To you it does. That is the problem with talking to you.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '(He just corrected me exactly like Professor Jirafales.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(And I do not know why that did not make me laugh.)', pose: 'chapulin_idle' }
    ]
  },
  {
    id: 'ver_inventario',
    label: 'Will you let me see the inventory?',
    unlockedByTalk: 'a_quien_vende',
    dialogue: [
      { speaker: 'BERRONDO', text: 'Of course. It has been public since 1971; you may request it at the court, but I will spare you the paperwork.', pose: 'berrondo_idle' },
      { speaker: 'NARRADOR', text: 'Berrondo takes a thin dossier from the display case and sets it on the desk, open.' },
      { speaker: 'DEFENSA', text: 'Forty-seven line items...', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '"Item 12: card file, eleven thousand four hundred cards."', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '"Item 41: Olivetti Lexikon 80 typewriter."', pose: 'chapulin_point' },
      { speaker: 'BERRONDO', text: 'The secretaries used that one for contracts. It is still downstairs. With its item number stenciled on the casing.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: 'And nobody took it?', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'Counselor, that machine is not mine. It belongs to the estate.', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: 'Removing it from deposit would be disposing of another\'s property, and I have twenty-seven years of practice without a single note in my file.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '(Twenty-seven years without a single note.)', pose: 'chapulin_idle', addEvidence: 'inventario_1971' },
      { speaker: 'BERRONDO', text: 'Take the inventory. And one more thing, counselor, if I may.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: 'Go ahead.', pose: 'chapulin_idle' },
      { speaker: 'BERRONDO', text: 'Your client is a decent man. I have watched him litigate four times and all four times I thought this city needed him.', pose: 'berrondo_idle' },
      { speaker: 'BERRONDO', text: 'I truly hope you get him out.', pose: 'berrondo_idle' },
      { speaker: 'DEFENSA', text: '...Thank you.', pose: 'chapulin_idle' },
      { speaker: 'NARRADOR', text: 'Chapulín walks down the stairs at Donceles 14 and stops on the first landing.' },
      { speaker: 'DEFENSA', text: '(All my moves are coldly calculated.)', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: '(Except the antennae. They stood on end up there and I do not know why.)', pose: 'chapulin_panic', unlockLocation: 'delegacion_c5' }
    ]
  }
];
