// @Architecture(descriptionShort="English Case 5 day 4 midnight cell talk options and caldera unlock", type="data", icon="layers")
/**
 * Case 5, Day 4 — midnight cell talk options (`celda_c5_d4`). Spec §16.1. English.
 */

import type { TalkOption } from '../../../types/index.js';

export const CASE5_CELDA_D4_TALKS_EN: TalkOption[] = [
  {
    id: 'pasillo_caliente',
    label: 'The hallway was hot',
    dialogue: [
      { speaker: 'DEFENSA', text: 'Don Ramon, when you went upstairs on Saturday, was it hot up there?', pose: 'chapulin_point' },
      { speaker: 'DON RAMÓN', text: 'A dreadful heat. I took off my jacket and put it back on because it was not the place.', pose: 'donramon_idle' },
      { speaker: 'DEFENSA', text: 'And Mr. Lengua?', pose: 'chapulin_idle' },
      { speaker: 'DON RAMÓN', text: 'He was sweating. He wiped his forehead with his handkerchief every other sentence. I thought it was nerves.', pose: 'donramon_sweat' },
      { speaker: 'DEFENSA', text: 'And the janitor?', pose: 'chapulin_point' },
      { speaker: 'DON RAMÓN', text: 'At the door the janitor told me the boiler and dryers had been at maximum since the third, because of a burst pipe.', pose: 'donramon_idle' },
      { speaker: 'DEFENSA', text: 'Don Ramon.', pose: 'chapulin_panic' },
      { speaker: 'DEFENSA', text: 'The coroner calculated time of death from the body temperature.', pose: 'chapulin_point' },
      { speaker: 'DON RAMÓN', text: '...Yes.', pose: 'donramon_idle' },
      { speaker: 'DEFENSA', text: 'And he calculated assuming a normal room.', pose: 'chapulin_idle' },
      { speaker: 'DON RAMÓN', text: '...Yes.', pose: 'donramon_shock' },
      { speaker: 'DEFENSA', text: 'In a hot room the body cools more slowly. And if it cools more slowly...', pose: 'chapulin_point' },
      { speaker: 'DON RAMÓN', text: '...death came earlier than the paper says.', pose: 'donramon_shock' },
      { speaker: 'DEFENSA', text: 'Earlier.', pose: 'chapulin_idle' },
      { speaker: 'NARRADOR', text: 'The two of them fall silent.', bgm: 'suspense' },
      { speaker: 'DON RAMÓN', text: 'Young man.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'If that window moves back, it reaches me.', pose: 'donramon_sweat' },
      { speaker: 'DEFENSA', text: '...Yes.', pose: 'chapulin_panic' },
      { speaker: 'DON RAMÓN', text: 'I spent twelve minutes alone with that man, with nobody watching the table.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'If you move that window, for the first time in four days the judge has an hour when I was inside.', pose: 'donramon_sweat' },
      { speaker: 'DEFENSA', text: '(And that is why I came at five forty in the morning. Because I cannot decide this myself.)', pose: 'chapulin_idle' }
    ]
  },
  {
    id: 'presentar_o_no',
    label: 'Do I present it or not?',
    unlockedByTalk: 'pasillo_caliente',
    dialogue: [
      { speaker: 'DEFENSA', text: 'Don Ramon, you are the lawyer. Tell me what to do.', pose: 'chapulin_idle' },
      { speaker: 'DON RAMÓN', text: 'I am the defendant, young man. Defendants do not decide these things.', pose: 'donramon_idle' },
      { speaker: 'DEFENSA', text: 'You decided four trials in a row!', pose: 'chapulin_point' },
      { speaker: 'DON RAMÓN', text: 'Those were not mine.', pose: 'donramon_sweat' },
      { speaker: 'NARRADOR', text: 'Don Ramon stares at the wall for a long while.' },
      { speaker: 'DON RAMÓN', text: 'Chapulin.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'They put me in here over a scrap of paper someone placed in a dead man\'s hand.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'If I get out because an expert misread a room\'s temperature, I get out just as dirty as when I came in.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'Present it.', pose: 'donramon_shock' },
      { speaker: 'DEFENSA', text: 'But it puts you inside the window!', pose: 'chapulin_panic' },
      { speaker: 'DON RAMÓN', text: 'It puts me in, and it puts him in.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'And I have a lawyer.', pose: 'donramon_idle' },
      { speaker: 'DEFENSA', text: '......', pose: 'chapulin_idle' },
      { speaker: 'DON RAMÓN', text: 'Go on, young man. And comb those antennae — you are going to be in the newspaper.', pose: 'donramon_idle' },
      { speaker: 'DEFENSA', text: 'Do not panic the cunic, Don Ramon!', pose: 'chapulin_point' },
      { speaker: 'DON RAMÓN', text: 'It already spread, young man. Four days ago.', pose: 'donramon_sweat', unlockLocation: 'archivo_caldera' }
    ]
  }
];
