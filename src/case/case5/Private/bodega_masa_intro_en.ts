// @Architecture(descriptionShort="English Case 5 day 3 bodega intro and antenitas beat", type="data", icon="layers")
/**
 * Case 5, Day 3 — judicial goods warehouse intro (`bodega_masa`). Spec §14.1. English.
 */

import type { DialogueLine } from '../../../types/index.js';

const BODEGA_BG = 'assets/bg_bodega_masa.webp';

export const CASE5_BODEGA_MASA_INTRO_EN: DialogueLine[] = [
  { speaker: 'NARRADOR', text: 'December 8, 9:00 AM. Judicial Archive basement. Judicial property warehouse.', bg: BODEGA_BG, furniture: 'none', bgm: 'suspense' },
  { speaker: 'NARRADOR', text: 'Fourteen wooden crates: twelve stacked two by two and two more on the floor. Number nine is oversized; the lids are cross-sealed with paper strips.' },
  { speaker: 'SARGENTO', text: 'Judicial inspection in matter 5,514. Present: the defense, the public ministry representative, myself, and the syndic. Nine oh two.', pose: 'pazguato_decidido' },
  { speaker: 'BERRONDO', text: 'Good morning, counselor. I brought you coffee again; it is cold down here.', pose: 'berrondo_idle' },
  { speaker: 'DEFENSA', text: '...Thank you.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '(He brings me coffee the day I come to open his box. And not out of cynicism. Out of courtesy.)', pose: 'chapulin_idle' },
  { speaker: 'CHOMPIRAS', text: 'Chapulin! I mean, counselor! I mean... oh, man!', pose: 'chompiras_nervous' },
  { speaker: 'DEFENSA', text: 'Chompiras! You are here?', pose: 'chapulin_point' },
  { speaker: 'CHOMPIRAS', text: 'I haul the crates, counselor. Since September.', pose: 'chompiras_idle' },
  { speaker: 'CHOMPIRAS', text: 'It is my first job with insurance and a Christmas bonus and I am not losing it, so if anyone asks, I did not say a thing about nothing.', pose: 'chompiras_nervous' },
  { speaker: 'DEFENSA', text: 'Nobody is taking anything from you, Chompiras.', pose: 'chapulin_idle' },
  { speaker: 'CHOMPIRAS', text: 'That is what they told me in August and I wound up in the slammer.', pose: 'chompiras_nervous', addProfile: 'perfil_chompiras' },
  { speaker: 'DEFENSA', text: '(All right, vinyl antennae. Work for me.)', pose: 'chapulin_idle' },
  { speaker: 'NARRADOR', text: 'El Chapulin plants himself before crate 9 and closes his eyes. The antennae rise.', sfx: 'whoosh' },
  { speaker: 'NARRADOR', text: 'And nothing happens.' },
  { speaker: 'DEFENSA', text: '...Nothing?', pose: 'chapulin_panic' },
  { speaker: 'NARRADOR', text: 'El Chapulin takes another step. Presses the antennae to the wood.' },
  { speaker: 'NARRADOR', text: 'Nothing. Still as two shoelaces.', sfx: 'whoosh' },
  { speaker: 'DEFENSA', text: 'BUT THIS IS THE CATALOG OF ELEVEN THOUSAND FOUR HUNDRED THEFTS!', pose: 'chapulin_panic' },
  { speaker: 'SARGENTO', text: 'Did they fail you, Counselor?', pose: 'pazguato_sweat' },
  { speaker: 'DEFENSA', text: '...I do not know what it means.', pose: 'chapulin_idle' },
  { speaker: 'BERRONDO', text: 'Perhaps you are questioning them wrong, counselor.', pose: 'berrondo_idle' },
  { speaker: 'DEFENSA', text: 'How do you mean?', pose: 'chapulin_point' },
  { speaker: 'BERRONDO', text: 'One thing is what your device suggests. Another is the auction close I told you myself and the inventory you examined.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'And the papers say that what is in that crate is simply not stolen.', pose: 'berrondo_idle' },
  { speaker: 'NARRADOR', text: 'Silence in the basement.', bgm: 'suspense' },
  { speaker: 'DEFENSA', text: '(...Chanfle.)', pose: 'chapulin_idle' }
];
