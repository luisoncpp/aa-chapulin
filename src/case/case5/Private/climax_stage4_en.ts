// @Architecture(descriptionShort="English Case 5 climax stage 4 — address card", type="data", icon="layers")
/**
 * Case 5 climax EN — Stage 4 WHAT WAS HE SELLING? (spec §18.5).
 */

import type { ClimaxStage } from '../../../types/index.js';

export const CASE5_CLIMAX_STAGE4_EN: ClimaxStage = {
  presentTarget: ['ficha_domicilio'],
  prompt: 'What was in that card file that touched this trial directly?',
  failDialogue: [
    { speaker: 'JUEZ', text: 'That is not what the clerk just brought into this room, counselor.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'This court is offering you a card. Present it.', pose: 'judge_neutral' },
    { speaker: 'SECRETARIO', text: 'One point off, Your Honor, and those are the last.', sfx: 'damage' }
  ],
  successDialogue: [
    { speaker: 'DEFENSA', text: 'OBJECTION!', sfx: 'desk_slam', cutin: 'objection_protesto', pose: 'chapulin_slam' },
    { speaker: 'DEFENSA', text: 'The card from the file for Calle del Espanto number eight, apartment seventy-two.', pose: 'chapulin_point' },
    { speaker: 'JUEZ', text: 'Read it, counselor. Field by field.', sfx: 'gavel', bgm: 'suspense', pose: 'judge_gavel' },
    { speaker: 'DEFENSA', text: '"Address: Calle del Espanto eight, apartment seventy-two."', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: '"Declared income: variable. Occupation: lawyer without an office."', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: '"Declared valuables: none."', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: '"Payment punctuality: fourteen months behind."', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: '"Seller notes: do not press."', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'And the last field in the left column, Your Honor. The one at the very bottom.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: '"Door condition: lock expired. Push to enter."', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'NARRADOR', text: 'A long, ugly murmur runs through the gallery.', sfx: 'realization' },
    { speaker: 'JUEZ', text: 'How old is that card?', pose: 'judge_shock' },
    { speaker: 'DEFENSA', text: 'Drawn up in nineteen sixty-nine.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'And updated this August.', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'NARRADOR', text: 'The courtroom erupts.', sfx: 'gavel', bgm: 'pursuit' },
    { speaker: 'JUEZ', text: 'ORDER!', sfx: 'gavel', pose: 'judge_gavel' },
    { speaker: 'DEFENSA', text: 'Your Honor, this man was on file.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'Not as a lawyer. Not as an enemy.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'As merchandise. With his rent overdue and his lock expired, in a drawer between Donceles and Espanto.', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'DON RAMÓN', text: '...Fourteen months.', pose: 'donramon_shock' },
    { speaker: 'DON RAMÓN', text: 'In August I owed fourteen months. That is true.', pose: 'donramon_idle' },
    { speaker: 'DON RAMÓN', text: 'And somebody took the trouble to write it down.', pose: 'donramon_sweat' },
    { speaker: 'DEFENSA', text: 'And there is one more thing, Your Honor, and it is the one that has me standing here.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'This card is missing the lower right corner.', pose: 'chapulin_idle' },
    { speaker: 'JUEZ', text: 'Bailiff! The fragment found in the victim\'s hand!', sfx: 'gavel', pose: 'judge_gavel' },
    { speaker: 'NARRADOR', text: 'The bailiff sets the waxed paper envelope on the clerk\'s table and takes out the piece with tweezers.', bgm: 'suspense' },
    { speaker: 'NARRADOR', text: 'The clerk brings the fragment to the card.', sfx: 'realization' },
    { speaker: 'SECRETARIO', text: '...It fits, Your Honor.' },
    { speaker: 'SECRETARIO', text: 'Tooth for tooth. And the four lines of the address field complete: "...city of Calle del Espanto 8, apt. 72."' },
    { speaker: 'NARRADOR', text: 'Absolute silence.', bgm: 'suspense' },
    { speaker: 'DEFENSA', text: 'And it is not only the paper that matches, Your Honor.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'The trustee withdrawal was five thousand pesos. The notary\'s real invoice, seven hundred fifty.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Five thousand minus seven hundred fifty is four thousand two hundred fifty, exactly the seventeen installments in the envelope.', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'DEFENSA', text: 'The note made a receipt exist in my client\'s name and Barriga kept proof of payment. That is the trail Berrondo needed for his setup.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'Barriga kept the copy and handed the original to Don Ramon; that is why it turned up in his pocket. The note did not order that handoff, but the setup used it.', pose: 'chapulin_point' },
    { speaker: 'JUEZ', text: 'Attorney Berrondo.', pose: 'judge_neutral' },
    { speaker: 'JUEZ', text: 'The paper scrap in a murdered man\'s hand came from a card in your file, kept in your custody.', pose: 'judge_shock' },
    { speaker: 'BERRONDO', text: '...Anyone could have torn it off, Your Honor.', pose: 'berrondo_panic', bg: 'assets/bg_courtroom.webp' },
    { speaker: 'DEFENSA', text: 'Not anyone, counselor.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'Because anyone would have taken the card.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'And you put it back in your drawer.', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'DEFENSA', text: 'Mutilated, missing a corner, but in its place.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'Just like the shelf.', pose: 'chapulin_idle' },
    { speaker: 'BERRONDO', text: '...!', pose: 'berrondo_panic', bg: 'assets/bg_courtroom.webp' },
    { speaker: 'JUEZ', text: 'The court orders preventive detention of Attorney Fulgencio Berrondo.', sfx: 'gavel', pose: 'judge_gavel' },
    { speaker: 'SECRETARIO', text: 'Your Honor, with respect... the prosecution notes all of this remains circumstantial.' },
    { speaker: 'JUEZ', text: '...It is.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'And this court will not send a seventy-one-year-old man to prison for a mania of lining up books.', pose: 'judge_neutral' },
    { speaker: 'JUEZ', text: 'Defense. You have one left and we both know it.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'Close the origin of those documents and explain why this chain points to Berrondo.', sfx: 'gavel', pose: 'judge_gavel' }
  ]
};
