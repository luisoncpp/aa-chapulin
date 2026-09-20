// @Architecture(descriptionShort="English Case 1 waiting-room epilogue", type="data", icon="layers")
/**
 * Case 1 — Waiting-room epilogue (§14). Every line stamps `bg` +
 * `furniture: 'none'` ([[docs/lessons-learned/trial-waiting-room-epilogue-staging.md]]).
 */

import type { ClimaxEpilogue, DialogueLine } from '../../../types/index.js';

const BG = 'assets/bg_waiting_room.webp';

const LINES_EN: DialogueLine[] = [
  { speaker: 'NARRADOR', text: 'August 30th, 6:40 PM. Courthouse waiting room.', bgm: 'epilogue' },
  { speaker: 'FLORINDA', text: 'It is back in its case already. They are putting in double glass and a new grate.', pose: 'florinda_idle' },
  { speaker: 'DEFENSA', text: 'And the loading door latch?', pose: 'donramon_idle' },
  { speaker: 'FLORINDA', text: '...The locksmith comes tomorrow. Tomorrow.', pose: 'florinda_idle' },
  { speaker: 'DEFENSA', text: 'Doña Florinda, "tomorrow" has been five months now.', pose: 'donramon_sweat' },
  { speaker: 'FLORINDA', text: '¡Chusma, chus...! ...Oh. Never mind. The locksmith comes tomorrow.', pose: 'florinda_angry' },
  { speaker: 'ALMA NEGRA', text: 'Counselor.', pose: 'almanegra_vendado' },
  { speaker: 'DEFENSA', text: 'Don Alma Negra.', pose: 'donramon_idle' },
  { speaker: 'ALMA NEGRA', text: 'I burned the notebook.', pose: 'almanegra_vendado' },
  { speaker: 'DEFENSA', text: 'All of it?', pose: 'donramon_shock' },
  { speaker: 'ALMA NEGRA', text: 'All of it. Forty years of watches, into the bin. From today the round gets invented fresh every night.', pose: 'almanegra_vendado' },
  { speaker: 'CHAPULIN', text: 'And what if you forget it?', pose: 'chapulin_idle' },
  { speaker: 'ALMA NEGRA', text: 'Then let whoever wants to surprise me forget it too, deckhand.', pose: 'almanegra_vendado' },
  { speaker: 'NARRADOR', text: 'Super Sam crosses the corridor, briefcase in one hand and the new canvas bag clutched against his chest, not on his shoulder.', sfx: 'whoosh' },
  { speaker: 'SUPER SAM', text: 'Counselor.', pose: 'supersam_idle' },
  { speaker: 'DEFENSA', text: 'Counselor.', pose: 'donramon_idle' },
  { speaker: 'SUPER SAM', text: 'You won. Eight hours of hearings. Eight hours. You know what that costs.', pose: 'supersam_idle' },
  { speaker: 'DEFENSA', text: 'I can imagine.', pose: 'donramon_idle' },
  { speaker: 'SUPER SAM', text: '...No. You cannot imagine.', pose: 'supersam_sweat' },
  { speaker: 'NARRADOR', text: 'The prosecutor walks on without looking back.', sfx: 'whoosh' },
  { speaker: 'CHAPULIN', text: 'Counselor, did you understand him?', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'No, young man. And today I do not want to understand him.', pose: 'donramon_idle' },
  { speaker: 'CHAPULIN', text: 'Then let us celebrate! How much did they pay you to defend me?', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Nothing. You are a public-defender case.', pose: 'donramon_sweat' },
  { speaker: 'CHAPULIN', text: 'Nothing?! And your rent?!', pose: 'chapulin_panic' },
  { speaker: 'DEFENSA', text: 'Fourteen months. The same fourteen I had on Monday.', pose: 'donramon_idle' },
  { speaker: 'CHAPULIN', text: 'Do not fret, Don Ramón. A rolling stone... spoils the broth.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '...Chapulín, I am no stone and I have no broth. I have a landlord.', pose: 'donramon_sweat' },
  { speaker: 'CHAPULIN', text: 'Even worse! ¡Pero que no panda el cúnico!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: '(Fourteen months of rent, zero pesos in fees, and a prosecutor who walked out hugging a new bag as if the old one had never existed.)', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: '(And a twenty-cent card, in a case file, that nobody will ever read again.)', pose: 'donramon_idle' },
  { speaker: 'DEFENSA', text: 'Come along, young man. Supper is on me.', pose: 'donramon_idle' },
  { speaker: 'CHAPULIN', text: 'With whose money?!', pose: 'chapulin_panic' },
  { speaker: 'DEFENSA', text: 'With yours. ¡Síganme los buenos!', pose: 'donramon_point' },
  { speaker: 'CHAPULIN', text: '¡Chanfle!', pose: 'chapulin_panic' }
];

export const CASE1_EPILOGUE_EN: ClimaxEpilogue = {
  bg: BG,
  dialogue: LINES_EN.map(/*stampWaitingRoom*/ (line) => ({ ...line, bg: BG, furniture: 'none' as const }))
};
