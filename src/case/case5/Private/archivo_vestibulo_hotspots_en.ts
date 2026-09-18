// @Architecture(descriptionShort="English Case 5 day 1 archivo vestibulo hotspots and explanatory plate", type="data", icon="layers")
/**
 * Case 5, Day 1 — vestibule points of interest, English. Spec §10.2.
 */

import type { Hotspot } from '../../../types/index.js';

const VESTIBULO_BG = 'assets/bg_archivo_vestibulo.webp';
const PLATE_DOS_ACCESOS = 'assets/plate_dos_accesos.webp';

export const CASE5_VESTIBULO_HOTSPOTS_EN: Hotspot[] = [
  {
    id: 'hotspot_libro',
    label: 'Visitor Logbook',
    x: 38, y: 42, w: 22, h: 18,
    dialogue: [
      { speaker: 'NARRADOR', text: 'On the counter, an open registration book with a pen tied to a cord.' },
      { speaker: 'DEFENSA', text: 'December fourth page. Fourteen signatures.', pose: 'chapulin_idle' },
      { speaker: 'NICANOR', text: 'Fourteen. I count them twice: when I close and the next morning.', pose: 'nicanor_idle' },
      { speaker: 'DEFENSA', text: 'The last one says: "R. Valdes. Entry four forty. Exit four fifty-eight."', pose: 'chapulin_point' },
      { speaker: 'NICANOR', text: 'I wrote the exit time. Nobody leaves here without my writing it down.', pose: 'nicanor_idle' },
      { speaker: 'DEFENSA', text: 'And the police who brought Mr. Lengua?', pose: 'chapulin_idle' },
      { speaker: 'NICANOR', text: 'Uniformed officers do not sign, kid. They never have. The book is for the public.', pose: 'nicanor_idle' },
      { speaker: 'DEFENSA', text: '(So this book does not say who was in the building. It says who was public.)', pose: 'chapulin_idle', addEvidence: 'libro_visitas' }
    ]
  },
  {
    id: 'hotspot_plano',
    label: 'Civil Protection Floor Plan',
    x: 62, y: 28, w: 28, h: 32,
    dialogue: [
      { speaker: 'NARRADOR', text: 'Tacked beside the counter, a yellowed building plan with exits marked in red.' },
      { speaker: 'DEFENSA', text: 'Ground floor, first floor, basement... and two doors!', pose: 'chapulin_point' },
      { speaker: 'NICANOR', text: 'Three, if you count the coal door, but that one has been sealed since fifty-eight.', pose: 'nicanor_idle' },
      { speaker: 'DEFENSA', text: 'And this one on the side?', pose: 'chapulin_idle' },
      { speaker: 'NICANOR', text: 'That is the expert window. No public there: experts, court clerks, notaries, and trustees go in.', pose: 'nicanor_idle' },
      { speaker: 'DEFENSA', text: 'Do they sign a logbook too?', pose: 'chapulin_point' },
      { speaker: 'NICANOR', text: 'Of course. Their logbook. Theirs.', pose: 'nicanor_idle' },
      { speaker: 'DEFENSA', text: '...There are two logbooks?', pose: 'chapulin_panic' },
      { speaker: 'NICANOR', text: 'Kid, this place has logbooks to log the logbooks.', pose: 'nicanor_escoba' },
      { speaker: 'DEFENSA', text: '(Two doors. Two logbooks. And the police took one.)', pose: 'chapulin_idle', addEvidence: 'plano_archivo' },
      { speaker: 'NARRADOR', text: 'Judicial Archive floor plan. The public door opens to the vestibule and the visitor log counter.', bg: PLATE_DOS_ACCESOS, furniture: 'none' },
      { speaker: 'NARRADOR', text: 'The expert window opens to the service yard and has its own logbook.', bg: PLATE_DOS_ACCESOS, furniture: 'none' },
      { speaker: 'NARRADOR', text: 'A service stair links the yard, the basement, and the end of hallway 7 without passing any counter.', bg: PLATE_DOS_ACCESOS, furniture: 'none' },
      { speaker: 'DEFENSA', text: '(By that stair you can go from the basement to hallway seven without anyone seeing your face.)', pose: 'chapulin_idle', bg: VESTIBULO_BG, furniture: 'none' },
      { speaker: 'DEFENSA', text: '(They never counted on my cunning... and neither did I, to be honest.)', pose: 'chapulin_idle', bg: VESTIBULO_BG, furniture: 'none' }
    ]
  },
  {
    id: 'hotspot_carrito',
    label: 'File Cart',
    x: 8, y: 52, w: 24, h: 28,
    dialogue: [
      { speaker: 'NARRADOR', text: 'A metal cart with ribbon-tied file bundles, waiting for someone to carry them upstairs.' },
      { speaker: 'NICANOR', text: 'The elevator boy takes that one up. I do not carry anymore: my back is a wreck.', pose: 'nicanor_idle' },
      { speaker: 'DEFENSA', text: 'What boy?', pose: 'chapulin_idle' },
      { speaker: 'NICANOR', text: 'Chompiras. Good kid. They put him here in September and he has not missed a day.', pose: 'nicanor_idle' },
      { speaker: 'DEFENSA', text: '(Chompiras! He owes me one.)', pose: 'chapulin_point' }
    ]
  }
];
