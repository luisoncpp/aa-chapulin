// @Architecture(descriptionShort="Case 5 day-2 contradiction success, point target, GIRO 2 (English)", type="data", icon="layers")
/**
 * Case 5 Trial Day 2 — Barriga/Berrondo successes, Pointing 1, Turn 2 (spec §13), English.
 * Point-zone bounds measured on `examine_expediente_serie_en.webp` (five dated panels).
 */

import type { DialogueLine, PointTargetContradiction } from '../../../types/index.js';

const PLATE_CINCO = 'assets/plate_cinco_papeles.webp';

const PANEL_FAIL = (text: string): DialogueLine[] => [
  { speaker: 'JUEZ', pose: 'judge_thinking', text, sfx: 'damage' }
];

export const POINT_EXPEDIENTE_SERIE_EN: PointTargetContradiction = {
  targetEvidenceId: 'expediente_serie',
  promptQuestion: 'Point at the paper that already describes the product this witness admits selling.',
  imageAsset: 'assets/examine_expediente_serie_en.webp',
  zones: [
    { id: 'panel_a', bounds: [1, 12, 20, 92], isCorrect: false, failureDialogue: PANEL_FAIL('That card names the dissolved company, counselor. It leads us to the card index, but it does not describe the product sold.') },
    { id: 'panel_b', bounds: [20, 12, 39, 92], isCorrect: true, failureDialogue: [] },
    { id: 'panel_c', bounds: [39, 12, 58, 92], isCorrect: false, failureDialogue: PANEL_FAIL('Those purchases prepared another crime, but they are not information from the card index. Look again.') },
    { id: 'panel_d', bounds: [58, 12, 78, 92], isCorrect: false, failureDialogue: PANEL_FAIL('Aniceto paid twelve thousand pesos to redeem the microphone. That is a preparation expense, not the product this witness sells.') },
    { id: 'panel_e', bounds: [78, 12, 99, 92], isCorrect: false, failureDialogue: PANEL_FAIL('That paper records a split that was never paid. It contains no data about a house or a door.') }
  ],
  successDialogue: [
    { speaker: 'DEFENSA', text: 'The museum card, Your Honor!', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'DEFENSA', text: 'Six typed lines with the latch, the grate, the watchman\'s round, and even a closing service.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'That is not a witness\'s memory. It is household information turned into a product for whoever wants to get in.', pose: 'chapulin_idle' },
    { speaker: 'JUEZ', text: 'And the other four panels?', pose: 'judge_thinking' },
    { speaker: 'DEFENSA', text: 'They give context on preparation, money, and loot. They do not prove this witness sold them, and I am not going to pretend they do.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'But panel A names the dissolved company, panel B shows an operational card, and the witness himself admits he administers that index and sells copies.', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'NARRADOR', text: 'The whole courtroom leans forward.', sfx: 'realization', bgm: 'pursuit' },
    { bg: PLATE_CINCO, furniture: 'none', speaker: 'NARRADOR', text: 'July 12. A card from a company dissolved since 1971, in the pocket of a man who recognized doors.' },
    { bg: PLATE_CINCO, furniture: 'none', speaker: 'NARRADOR', text: 'August 21. A six-line typed card: the latch, the grate, the watchman\'s written round, and a closing service.' },
    { bg: PLATE_CINCO, furniture: 'none', speaker: 'NARRADOR', text: 'August 28 and September 15. Purchases to prepare two crimes: tools at a corner shop and twelve thousand pesos paid to recover a microphone.' },
    { bg: PLATE_CINCO, furniture: 'none', speaker: 'NARRADOR', text: 'October 24. A stolen necklace whose split was never paid, and for which two men killed each other.' },
    { speaker: 'DEFENSA', text: 'Your Honor, I am not going to say five cases prove one seller. They do not.', pose: 'chapulin_idle', bgm: 'objection' },
    { speaker: 'DEFENSA', text: 'But panel A identifies *El Saber Universal*, and panel B contains exactly the kind of information the witness admits selling.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'That business\'s catalogue is eleven thousand four hundred cards sitting in the basement of this courthouse.', pose: 'chapulin_slam', sfx: 'desk_slam', cutin: 'objection_protesto' },
    { speaker: 'DEFENSA', text: 'That does not prove murder. It does justify this court inspecting the crate before accepting the link as coincidence.', pose: 'chapulin_idle' },
    { speaker: 'NARRADOR', text: 'The gallery rises as one. The Judge bangs the gavel five times.', sfx: 'gavel' },
    { speaker: 'JUEZ', text: 'ORDER! ORDER IN THE COURT!', sfx: 'gavel', pose: 'judge_gavel' },
    { speaker: 'SUPER SAM', text: 'OBJECTION! Your Honor, selling is not killing! It is not even stealing!', pose: 'supersam_slam', sfx: 'desk_slam' },
    { speaker: 'SUPER SAM', text: 'Even if they sold a card to four criminals, each one planned and carried out his own job! All four are convicted and all four are guilty!', pose: 'supersam_point' },
    { speaker: 'DEFENSA', text: '...And I have not said otherwise, Mr. Prosecutor.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'Buying a tool from someone does not take away anyone\'s authorship of what he did with it.', pose: 'chapulin_idle' },
    { speaker: 'BERRONDO', text: 'Your Honor, I appreciate that precision from the defense more than I can say.', pose: 'berrondo_idle' },
    { speaker: 'BERRONDO', text: 'I will add three things, numbered, and then I will be quiet.', pose: 'berrondo_definicion' },
    { speaker: 'BERRONDO', text: 'First. Everything the defense just described is lawful, and I declared it before she discovered it.', pose: 'berrondo_idle' },
    { speaker: 'BERRONDO', text: 'Second. There is not a shred of proof that I sold the museum card, and the defense knows it.', pose: 'berrondo_idle' },
    { speaker: 'BERRONDO', text: 'Third. Even if I had, selling information is still not a crime in this country.', pose: 'berrondo_idle' },
    { speaker: 'BERRONDO', text: 'This court may censure me morally. It cannot prosecute me.', pose: 'berrondo_idle' },
    { speaker: 'JUEZ', text: '...The court grants all three, counselor, and does so with a churning stomach.', pose: 'judge_thinking', updateProfile: 'perfil_berrondo' },
    { speaker: 'DEFENSA', text: 'Your Honor!', pose: 'chapulin_panic' },
    { speaker: 'JUEZ', text: 'Counselor, if I convicted someone today on a pattern, tomorrow they would convict your client by the same procedure.', pose: 'judge_neutral' },
    { speaker: 'JUEZ', text: 'A motive and an opportunity are not authorship. In this courtroom that holds for everyone or for no one.', sfx: 'gavel', pose: 'judge_gavel' },
    { speaker: 'DEFENSA', text: '(...He\'s right. Once again someone who isn\'t me is right.)', pose: 'chapulin_idle' },
    { speaker: 'JUEZ', text: 'But this court can do one thing.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'A judicial inspection of crate nine in the courthouse property vault is ordered for tomorrow at nine o\'clock.', sfx: 'gavel', bgm: 'pursuit', pose: 'judge_gavel' },
    { speaker: 'JUEZ', text: 'With the trustee, the prosecution, the defense, and the judicial police present.', pose: 'judge_neutral' },
    { speaker: 'BERRONDO', text: 'I will be there at eight forty-five, Your Honor, with the key and the inventory.', pose: 'berrondo_idle' },
    { speaker: 'BERRONDO', text: 'I have absolutely nothing to hide.', pose: 'berrondo_idle' },
    { speaker: 'NARRADOR', text: 'And he says it without a single drop of sweat, because it is true.', bgm: 'suspense' },
    { speaker: 'DEFENSA', text: '(It is true. That is the problem. Everything he said today is true.)', pose: 'chapulin_idle' },
    { speaker: 'JUEZ', text: 'Court is adjourned.', sfx: 'gavel', pose: 'judge_gavel' },
    { speaker: 'DON RAMÓN', text: '(Young man.)', pose: 'donramon_idle' },
    { speaker: 'DON RAMÓN', text: '(When a man tells a judge he has nothing to hide, he is almost always lying.)', pose: 'donramon_idle' },
    { speaker: 'DON RAMÓN', text: '(And when he is not lying, it is worse: it means what he has is legal.)', pose: 'donramon_sweat' }
  ]
};

export const CASE5_D2_T1_NOTA_SUCCESS_EN: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION!', sfx: 'desk_slam', bgm: 'objection', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Your Honor, that note is typewritten, in the third person, and about the debtor himself.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: '"On behalf of C. Ramon Valdes." Nobody pays his own rent "on behalf of" himself.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'And "kindly issue the corresponding receipt." Mr. Barriga: how does my client write to you?', pose: 'chapulin_point' },
  { speaker: 'BARRIGA', text: 'On the wrapper of a cake, Your Honor.', pose: 'barriga_idle' },
  { speaker: 'BARRIGA', text: 'And with spelling mistakes.', pose: 'barriga_enojado' },
  { speaker: 'NARRADOR', text: 'Laughter in the gallery.', sfx: 'realization' },
  { speaker: 'DON RAMÓN', text: 'They are mistakes of time, not spelling.', pose: 'donramon_sweat' },
  { speaker: 'DEFENSA', text: 'My client has no typewriter, Your Honor! My client has no table to put one on!', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'SUPER SAM', text: 'Objection! You can rent a typewriter for two pesos an hour at any stationery shop!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'And you can learn to write "kindly issue" at any stationery shop too!', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'The court grants that whoever drafted that note is not the tenant.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'And the court wants to know what the man who received the money wrote on the receipt.', pose: 'judge_thinking' }
];

export const CASE5_D2_T1_RECIBO_SUCCESS_EN: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'TAKE THAT!', sfx: 'desk_slam', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Mr. Barriga wrote the receipt in his own hand on November twenty-ninth.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'And in the description he put, verbatim: "Received from unidentified third party, on account of the tenant."', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Good gracious! The witness himself recorded that he could not identify who left the money.', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'That does not yet prove who paid, Your Honor. It proves the receipt does not certify a personal payment from Don Ramon.', pose: 'chapulin_idle' },
  { speaker: 'BARRIGA', text: 'Of course I recorded it! I may be a landlord, but I am not a liar!', pose: 'barriga_enojado' },
  { speaker: 'BARRIGA', text: 'If Mr. Ramon had paid me, I would have written "received from Mr. Ramon," and I would have drawn a little picture!', pose: 'barriga_shock' },
  { speaker: 'DEFENSA', text: 'Mr. Barriga, you wrote this defense\'s best evidence eight days ago without knowing it.', pose: 'chapulin_idle' },
  { speaker: 'BARRIGA', text: '...Really?', pose: 'barriga_shock' },
  { speaker: 'DEFENSA', text: 'Really.', pose: 'chapulin_idle' },
  { speaker: 'BARRIGA', text: 'Oh. Then do not charge me for the consultation.', pose: 'barriga_idle' },
  { speaker: 'SUPER SAM', text: 'OBJECTION!', sfx: 'desk_slam', cutin: 'objection_un_momento', pose: 'supersam_slam' },
  { speaker: 'SUPER SAM', text: 'Your Honor! If a third party paid that rent, then the accused has an ACCOMPLICE!', pose: 'supersam_point' },
  { speaker: 'SUPER SAM', text: 'Someone who paid him seventeen months five days before the homicide! That does not exonerate him — it makes it worse!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: '(...And he\'s right. He\'s right, and I do not like it one bit.)', pose: 'chapulin_panic' },
  { speaker: 'JUEZ', text: 'The court grants the point to the prosecution.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'A third party paid. This court wants to know who, and it wants to know today.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'The witness may step down.', pose: 'judge_neutral' },
  { speaker: 'NARRADOR', text: 'At the prosecution table, the man with the cravat stands up.', bgm: 'suspense' },
  { speaker: 'BERRONDO', text: 'Your Honor. With this court\'s leave and the prosecutor\'s permission.', pose: 'berrondo_idle' },
  { speaker: 'SUPER SAM', text: 'Counselor?', pose: 'supersam_sweat' },
  { speaker: 'BERRONDO', text: 'I have spent two days hearing the defense circle my name without saying it, and that is bad for everyone: for her, for the court, and for me.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'I request to give voluntary testimony. By this act I waive my status as prosecution co-counsel while I testify.', pose: 'berrondo_idle' },
  { speaker: 'JUEZ', text: 'Counselor, nobody has accused you of anything!', pose: 'judge_shock' },
  { speaker: 'BERRONDO', text: 'Not yet, Your Honor. I prefer to answer before I am answered.', pose: 'berrondo_idle' },
  { speaker: 'DEFENSA', text: '(...He opened the door the judge slammed in my face — all by himself.)', pose: 'chapulin_panic' },
  { speaker: 'DON RAMÓN', text: '(Young man. Careful.)', pose: 'donramon_sweat' },
  { speaker: 'DON RAMÓN', text: '(A man who takes the stand without being called is a man who already knows what they will ask.)', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Let Counselor Berrondo take the stand. Name, occupation, and oath.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'BERRONDO', text: 'Fulgencio Berrondo Ontiveros. Practicing attorney since 1955 and syndic since March 1971.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'I swear to tell the truth, and I add that in twenty-seven years of practice I have not had a single note in my file.', pose: 'berrondo_idle' },
  { speaker: 'JUEZ', text: 'The court verified that this morning, and it is true. You may testify.', sfx: 'gavel', pose: 'judge_gavel' }
];

export const CASE5_D2_T2_LIBRO_SUCCESS_EN: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION!', sfx: 'desk_slam', bgm: 'objection', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Your Honor, the witness just said "I left at sixteen fifty."', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'That book has no departure column.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'What did you say?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'It has two columns, Your Honor, and they are printed: "time of entry" and "time of badge return."', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'What this book records at sixteen fifty is not that someone left the building. It is that someone turned in a badge at a window.', pose: 'chapulin_idle' },
  { speaker: 'NARRADOR', text: 'Murmurs in the gallery.', sfx: 'realization' },
  { speaker: 'SUPER SAM', text: 'Objection! It is the same thing! You hand in the badge and you leave!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'One normally does leave, Mr. Prosecutor. That is not the same as being on record.', pose: 'chapulin_point' },
  { speaker: 'BERRONDO', text: 'Counselor is right.', pose: 'berrondo_idle' },
  { speaker: 'JUEZ', text: 'Pardon?', pose: 'judge_shock' },
  { speaker: 'BERRONDO', text: 'I say counselor is right, Your Honor, and I thank her.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'I testified "I left" and I should have testified "I returned the badge." That is my imprecision and I correct it.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'I left through the service yard, where I park my car. Nobody logs that gate because there is nothing to log.', pose: 'berrondo_idle' },
  { speaker: 'DEFENSA', text: '(He agreed with me. He agreed with me and took everything away.)', pose: 'chapulin_panic', updateProfile: 'perfil_berrondo' },
  { speaker: 'JUEZ', text: 'The testimony is corrected. And the court still does not know who paid that rent.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Defense: do you have anything linking this witness to the money, or are we going to keep arguing columns?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: '(Sergeant, I hope you did not sleep through something.)', pose: 'chapulin_idle' }
];

export const CASE5_D2_T2_EXPEDIENTE_SUCCESS_EN: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'TAKE THAT!', sfx: 'desk_slam', pose: 'chapulin_slam', bgm: 'objection' },
  { speaker: 'DEFENSA', text: 'Your Honor, the judicial police compiled five case files last night. Five different cases, five different culprits, five different neighborhoods.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'And in all five there is a paper nobody could explain.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Let it be shown to this court.', sfx: 'gavel', pose: 'judge_gavel' }
];

export const CASE5_DAY2_OPENING_PRESENT_SUCCESS_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'Casimiro Lengua, Your Honor.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Sentenced in July for the assault on collector Nazario Cuenca. Prosecuted by the office appearing today and defeated by the lawyer now sitting in the dock.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'His conviction is not in dispute and this defense will not ask for a review. He was guilty and still is.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'And what was he doing in the Archive?', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: 'He came to testify in a proceeding of his appeal, Your Honor. He requested that proceeding himself.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'And he asked that the only lawyer who had beaten him be present.', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'Why would a man ask for that?', pose: 'judge_thinking' },
  { speaker: 'DON RAMÓN', text: 'Because he was the only one he was not afraid of, Your Honor.', pose: 'donramon_idle' },
  { speaker: 'DON RAMÓN', text: 'People like Mr. Lengua get fear, or pity, or disgust. Never anything more like respect.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Be seated.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SUPER SAM', text: 'Touching. The prosecution calls the witness who collected that rent.', pose: 'supersam_point' },
  { speaker: 'SUPER SAM', text: 'Mr. Zenon Barriga y Pesado, landlord.', pose: 'supersam_point' },
  { speaker: 'BARRIGA', text: 'Present. And let me clarify right now that I did not want to come.', pose: 'barriga_enojado' },
  { speaker: 'JUEZ', text: 'Nobody wants to come, Mr. Barriga. Your testimony.', sfx: 'gavel', pose: 'judge_gavel' }
];
