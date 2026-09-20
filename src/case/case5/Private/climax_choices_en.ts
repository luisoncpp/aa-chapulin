// @Architecture(descriptionShort="English Case 5 climax choice prompt — antenna trap", type="data", icon="layers")
/**
 * Case 5 climax EN — Choice "What the antennae cannot prove" (spec §18.4).
 */

import type { ChoicePrompt } from '../../../types/index.js';

export const CASE5_CLIMAX_CHOICES_EN: ChoicePrompt[] = [
  {
    id: 'no_robado',
    question: 'What follows from the award Berrondo acknowledged and the inventory of crate nine?',
    options: [
      { id: 'descompuestas', label: 'That the antennae were broken and so the auction does not count.' },
      { id: 'no_robado', label: 'That the card file was bought at auction and remains on deposit; it does not make Berrondo innocent of murder.' },
      { id: 'vacio', label: 'That the crate was empty and there were no goods to award.' },
      { id: 'inocente', label: 'That lawful purchase of the file makes Berrondo innocent of every offense.' }
    ],
    correctId: 'no_robado',
    failDialogue: [
      { speaker: 'DEFENSA', text: '(No. I am making the antennae answer a question the documents should answer.)', pose: 'chapulin_panic' },
      { speaker: 'SECRETARIO', text: 'That answer does not separate what the auction and inventory prove from what they do not.', sfx: 'damage' },
      { speaker: 'DON RAMÓN', text: '(Young man. Think about the papers, not the antennae.)', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: '(Ask yourself what that man could buy for three pesos. And what that purchase does not prove.)', pose: 'donramon_idle' }
    ],
    successDialogue: [
      { speaker: 'DEFENSA', text: 'Your Honor, the defense wants one thing on the record that shames it.', pose: 'chapulin_idle' },
      { speaker: 'DEFENSA', text: 'Wednesday I went down to that basement. I stood staring at my antennae, waiting for an answer.', pose: 'chapulin_point' },
      { speaker: 'DEFENSA', text: 'But in this courtroom I will not present their stillness as proof. I have his statement about the auction and the deposit inventory.', pose: 'chapulin_idle' },
      { speaker: 'SECRETARIO', text: 'Then the auction clears Attorney Berrondo!' },
      { speaker: 'DON RAMÓN', text: 'No, Mr. Clerk.', pose: 'donramon_idle' },
      { speaker: 'NARRADOR', text: 'Don Ramon stands up in the dock.', bgm: 'suspense' },
      { speaker: 'JUEZ', text: 'The defendant may speak.', sfx: 'gavel', pose: 'judge_gavel' },
      { speaker: 'DON RAMÓN', text: 'I have listened four days to talk about that crate and understood nothing until a minute ago.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'The antennae do not need to vibrate, Your Honor. What is in the crate was not stolen; Berrondo admitted buying it for three pesos and the inventory confirms the originals remain on deposit.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'Eleven thousand four hundred seven cards filed with each family\'s address, wages, valuables, and how their door closes.', pose: 'donramon_shock' },
      { speaker: 'DON RAMÓN', text: 'And they all gave them themselves. Sitting in their living rooms, with the salesman across from them, happy to be trusted the volumes.', pose: 'donramon_idle' },
      { speaker: 'NARRADOR', text: 'Absolute silence in the courtroom.', bgm: 'suspense' },
      { speaker: 'DON RAMÓN', text: 'That man did not need to steal those cards, Your Honor. That is the point.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'The file is his: he bought it at auction for three pesos. And yet the originals remain in judicial deposit, under his own signature.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'Buying it legally does not make him innocent, Your Honor. That is proof of how he could sell the information for eleven years without anyone stopping him.', pose: 'donramon_shock' },
      { speaker: 'JUEZ', text: '...Let the defendant\'s intervention be entered in full.', sfx: 'gavel', pose: 'judge_gavel' },
      { speaker: 'DEFENSA', text: '(Don Ramon...)', pose: 'chapulin_idle' },
      { speaker: 'DON RAMÓN', text: '(Hush, young man, I am doing fine.)', pose: 'donramon_idle' },
      { speaker: 'JUEZ', text: 'Miss Penaloza: your voucher folder, to the clerk.', pose: 'judge_neutral' },
      { speaker: 'JUEZ', text: 'This court orders the "Donceles to Espanto" drawer of the crate nine card file brought to this courtroom.', sfx: 'gavel', bgm: 'pursuit', pose: 'judge_gavel' },
      { speaker: 'BERRONDO', text: 'Your Honor, that drawer has one thousand three hundred cards! It will take all night!', pose: 'berrondo_panic', bg: 'assets/bg_courtroom.webp' },
      { speaker: 'JUEZ', text: 'It is filed by street, counselor. You said so yourself.', pose: 'judge_neutral' },
      { speaker: 'JUEZ', text: 'And this court is lucky today to have someone who knows exactly which street to look for.', pose: 'judge_thinking' },
      { speaker: 'JUEZ', text: 'Defendant: dictate your address to the clerk.', sfx: 'gavel', pose: 'judge_gavel' },
      { speaker: 'DON RAMÓN', text: '...Calle del Espanto number eight, apartment seventy-two.', pose: 'donramon_idle' },
      { speaker: 'DON RAMÓN', text: 'Mexico City.', pose: 'donramon_sweat' },
      { speaker: 'NARRADOR', text: 'The clerk runs his finger through the drawer for forty seconds. The room does not breathe.', bgm: 'suspense' },
      { speaker: 'SECRETARIO', text: '...I have it, Your Honor.', addEvidence: 'ficha_domicilio' },
      { speaker: 'JUEZ', text: 'Defense: present it. You earned it.', sfx: 'gavel', pose: 'judge_gavel' }
    ]
  }
];
