// @Architecture(descriptionShort="Case 5 day-1 contradiction and follow-up success dialogues (EN)", type="data", icon="layers")
/**
 * Case 5 Trial Day 1 — resolving presents, follow-ups, and TURNABOUT 1 (spec §11), English.
 */

import type { DialogueLine } from '../../../types/index.js';

const PLATE_FOTO = 'assets/plate_foto_pericial.webp';

export const CASE5_D1_T1_FORENSE_SUCCESS_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'OBJECTION!', sfx: 'desk_slam', cutin: 'objection_protesto', pose: 'chapulin_slam', bgm: 'objection' },
  { speaker: 'DEFENSA', text: 'Your Honor, the coroner\'s report fixes the death between five and five thirty in the afternoon.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'And the defendant signed out at four fifty-eight. The witness says so, and the witness wrote it with his own pen.', pose: 'chapulin_idle' },
  { speaker: 'SUPER SAM', text: 'Two minutes, counselor! TWO! The expert gave a window, not a stopwatch!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'Then let us do the prosecutor\'s math, Your Honor.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'If my client killed him before four fifty-eight, he calmly walked down a staircase, crossed a lobby, chatted with the janitor, and signed in neat handwriting.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'And if he killed him after, then he went back up. And the witness just testified that nobody went up.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'NICANOR', text: 'Nobody went up, Your Honor. I will sign to that.', pose: 'nicanor_idle' },
  { speaker: 'JUEZ', text: 'Good gracious!', pose: 'judge_shock' },
  { speaker: 'JUEZ', text: 'Either the defendant killed before signing out, and the report cannot rule out those two minutes...', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: '...or someone else was in that hallway whom this book does not know.', pose: 'judge_neutral' },
  { speaker: 'SUPER SAM', text: 'The book knows EVERYONE! Fourteen signatures, Your Honor!', pose: 'supersam_point' },
  { speaker: 'JUEZ', text: 'Defense: do you have anything to say about that book?', pose: 'judge_thinking' }
];

export const CASE5_D1_T1_LIBRO_SUCCESS_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'TAKE THAT! The public visitors\' log!', sfx: 'desk_slam', cutin: 'objection_toma_eso', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Mr. Nicanor: on December fourth, did two police officers enter the building escorting a prisoner?', pose: 'chapulin_point' },
  { speaker: 'NICANOR', text: 'Of course. And at five o\'clock two more came in for the shift change.', pose: 'nicanor_idle' },
  { speaker: 'DEFENSA', text: 'And did they sign?', pose: 'chapulin_idle' },
  { speaker: 'NICANOR', text: 'Uniformed officers do not sign, counselor. They never have. Not them, not the mailman, not me, not the clerk at the window.', pose: 'nicanor_idle' },
  { speaker: 'DEFENSA', text: 'So that day, inside the building, there were at least five people not in this book.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'NARRADOR', text: 'Murmurs in the gallery.', sfx: 'realization' },
  { speaker: 'DEFENSA', text: 'Your Honor: this book does not say who was in the Archive.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'It says who was public.', pose: 'chapulin_idle' },
  { speaker: 'SUPER SAM', text: 'Objection! A custody officer does not murder his own prisoner!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'Nobody said that, prosecutor, and I ask you not to repeat it.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'I am not pointing at anyone. I am saying the list is incomplete.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'The court shares that distinction and thanks the defense for drawing it.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Witness, you may step down for now. The court wants to hear from the officer who processed the scene.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SUPER SAM', text: 'The prosecution calls Sergeant Refu...', pose: 'supersam_point' },
  { speaker: 'SARGENTO', text: 'Refugio Pazguato, Your Honor. Judicial police.', pose: 'pazguato_saludo' },
  { speaker: 'SUPER SAM', text: 'I was going to say it!', pose: 'supersam_sweat' },
  { speaker: 'SARGENTO', text: 'You never finish it, prosecutor.', pose: 'pazguato_decidido' },
  { speaker: 'JUEZ', text: 'Sworn to tell the truth. Your testimony.', sfx: 'gavel', pose: 'judge_gavel' }
];

export const CASE5_D1_T2_PARTE_SUCCESS_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'OBJECTION!', sfx: 'desk_slam', cutin: 'objection_protesto', pose: 'chapulin_slam', bgm: 'objection' },
  { speaker: 'DEFENSA', text: 'Your Honor, the detention report annex carries the Archive shift-change sheet, with four signatures and four times.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Rangel and Nieto sign out at five o\'clock.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Cadena and Solís sign in at five fifteen.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Fifteen minutes!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Fifteen minutes with hallway seven\'s gate unguarded, Your Honor.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Right in the middle of the window when that man died.', pose: 'chapulin_idle' },
  { speaker: 'SARGENTO', text: '...That is correct. And I logged it, Your Honor, and nobody asked me about it until today.', pose: 'pazguato_decidido' },
  { speaker: 'SUPER SAM', text: 'Your salary is...! Ugh!', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'So noted! Between seventeen hundred and seventeen fifteen, hallway seven stood open and unguarded.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SUPER SAM', text: 'Open for the defendant, Your Honor! He had already signed out and could go back up!', pose: 'supersam_point' },
  { speaker: 'DEFENSA', text: 'By the main staircase, which starts three meters from a man who spent thirty-one years watching that door.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'The court grants the defense its point and returns the question to the prosecution.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'And it also wants an explanation of that smooth paper, counselor.', pose: 'judge_thinking' }
];

export const CASE5_D1_T2_TARJETA_SUCCESS_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'TAKE THAT!', sfx: 'desk_slam', cutin: 'objection_toma_eso', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Your Honor, look closely. Three centimeters by two and a half.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'The edge is torn straight. Like paper torn when you fold it and pull calmly across a desk.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Paper ripped from someone in a struggle ends up crumpled. This one is pressed flat.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'SARGENTO', text: 'I logged that, Your Honor. "Smooth."', pose: 'pazguato_decidido' },
  { speaker: 'DEFENSA', text: 'And there is more. The hand was closed around the paper, not squeezing it. The card stock has not a single nail mark.', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'What is the defense saying?', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'That nobody ripped a card from that man.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'That someone opened his hand afterward, put a scrap of card stock inside, and closed it again.', pose: 'chapulin_slam', sfx: 'desk_slam', cutin: 'objection_protesto' },
  { speaker: 'NARRADOR', text: 'The gallery rises. The Judge strikes the gavel four times.', sfx: 'gavel' },
  { speaker: 'JUEZ', text: 'ORDER! ORDER IN THE COURT!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: 'And with the enlargement we requested this morning, Your Honor: the blow came top to bottom from behind, with no arc.', pose: 'chapulin_point', updateEvidence: 'informe_forense_c5' },
  { speaker: 'DEFENSA', text: 'The object was held in two hands and closed on the back of the neck. Like closing a book.', pose: 'chapulin_idle' },
  { speaker: 'SUPER SAM', text: 'Your client spent twelve minutes alone with him, counselor! With no witness who saw that desk!', pose: 'supersam_slam', sfx: 'desk_slam', updateProfile: 'perfil_donramon' },
  { speaker: 'DEFENSA', text: 'And those twelve minutes are all I have, prosecutor. I know.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'That is why I am not asking the court to believe me. I am asking it to count.', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'The court needs the janitor again.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'Mr. Tolentino, return to the stand. You remain under oath.', pose: 'judge_neutral' },
  { speaker: 'NICANOR', text: 'With permission. And forgive the delay — I went for my broom.', pose: 'nicanor_escoba' },
  { speaker: 'JUEZ', text: '...The court asks you to set the broom aside.', pose: 'judge_thinking' },
  { speaker: 'NICANOR', text: 'Without it I do not know where to put my hands, Your Honor.', pose: 'nicanor_sweat' },
  { speaker: 'JUEZ', text: 'Leave the broom. And testify about what you saw when you went up.', sfx: 'gavel', pose: 'judge_gavel' }
];

export const CASE5_D1_T3_PLANO_SUCCESS_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'OBJECTION!', sfx: 'desk_slam', cutin: 'objection_protesto', pose: 'chapulin_slam', bgm: 'objection' },
  { speaker: 'DEFENSA', text: 'The Judicial Archive civil-protection floor plan, Your Honor! Pinned with thumbtacks two meters from this witness since 1958!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'There is a service staircase. It rises from the loading yard to the basement, and from the basement to the far end of hallway seven.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'It does not pass through the lobby. It does not pass the front desk. It does not pass any visitors\' log.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'So watching your staircase is not enough to conclude nobody else could reach hallway seven.', pose: 'chapulin_point' },
  { speaker: 'NICANOR', text: 'Crates go up that way, Your Honor. And the freight-elevator boy.', pose: 'nicanor_idle' },
  { speaker: 'JUEZ', text: 'GOOD HEAVENS!', pose: 'judge_shock' },
  { speaker: 'SUPER SAM', text: 'Objection! That staircase opens onto the yard! The yard has a gate! The gate is closed!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', text: 'The gate is closed to the public, prosecutor.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'And for whom is it open?', pose: 'chapulin_idle' },
  { speaker: 'NICANOR', text: 'Well, for the experts. And the bailiffs. And the notaries. And the receivers.', pose: 'nicanor_idle' },
  { speaker: 'NICANOR', text: 'They come in through Miss Genoveva\'s window.', pose: 'nicanor_idle' },
  { speaker: 'JUEZ', text: 'And do they sign?', pose: 'judge_shock' },
  { speaker: 'NICANOR', text: 'Their book, Your Honor. Not mine.', pose: 'nicanor_idle' },
  { speaker: 'NARRADOR', text: 'Absolute silence in the courtroom.', bgm: 'suspense' },
  { speaker: 'JUEZ', text: '...There are two books?', pose: 'judge_shock' },
  { speaker: 'NICANOR', text: 'Your Honor, in the Archive there are books to log the books.', pose: 'nicanor_escoba' }
];

export const CASE5_D1_T3_EXPEDIENTE_GIRO_SUCCESS_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'TAKE THAT!', sfx: 'desk_slam', cutin: 'objection_toma_eso', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Mr. Nicanor said everything was "in its place." And among the things in their place was an open case file.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Open to page two hundred fourteen, Your Honor. And on page two hundred fourteen there is a card glued with paste.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Read it, counselor.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: '"Enciclopedias El Saber Universal, Sociedad Anónima." Evidence seized from the convicted man in July.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'And at the foot, in the clerk\'s hand: "company dissolved since 1971."', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Mr. Nicanor dusts Volume XI every Monday. On the Saturday of the crime he saw the shelf complete and the file open to this page.', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'And what was that man doing here with a card from a company dead eleven years?', pose: 'judge_thinking', updateProfile: 'perfil_casimiro' },
  { speaker: 'DEFENSA', text: 'That, Your Honor, is exactly what someone did not want him to say.', pose: 'chapulin_slam', sfx: 'desk_slam', updateProfile: 'perfil_nicanor' },
  { speaker: 'SUPER SAM', text: 'OBJECTION! Speculation!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Sustained. But the court notes it anyway, because it will need it.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'This court is going to order something very simple.', sfx: 'gavel', bgm: 'objection', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'Prosecution: the Judicial Archive log of experts and court auxiliaries, December fourth page. First thing tomorrow.', pose: 'judge_neutral' },
  { speaker: 'SUPER SAM', text: 'Your Honor, with all respect, that book is procedural. Appraisers sign there.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'Prosecutor: this court has spent the whole hearing hearing that nobody came in through one door.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'And we have spent the whole hearing without anyone telling me who came in through the other.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SUPER SAM', text: '...The prosecution will bring it.', pose: 'supersam_sweat' },
  { speaker: 'NARRADOR', text: 'At the prosecution table, the man with the gold watch chain takes out a pen and writes a single line in a notebook.' },
  { speaker: 'DEFENSA', text: '(That man took a note. He has gone all day without taking notes, and now he takes a note.)', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '(And I do not even know why I noticed.)', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Tomorrow this court wants two things.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'What the second-door register establishes. And what the seventeen-month rent receipt actually proves, because the prosecution offered it as motive without yet establishing who paid.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DON RAMÓN', text: '(Seventeen months.)', pose: 'donramon_sweat' },
  { speaker: 'DON RAMÓN', text: '(In my whole life I never had seventeen months of anything. Not even luck.)', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Court is adjourned.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: '(Don Ramón, we won the first day.)', pose: 'chapulin_point' },
  { speaker: 'DON RAMÓN', text: '(No, kid. You do not win the first day. On the first day you only do not lose.)', pose: 'donramon_idle' }
];

export const CASE5_D1_OPENING_BADGE_SUCCESS_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'My badge, Your Honor!', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'That badge is dented.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'It fell down a drain in July, Your Honor. But it still shines nice.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: '...This court has seen that badge litigate four times, and all four times it learned something.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'The defense is credentialed, under the responsibility of the defendant who appointed it.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SUPER SAM', text: 'Your Honor, this is a two-ring circus!', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'It is a one-ring circus, prosecutor, and you have been in it for five months.', pose: 'judge_thinking' },
  { speaker: 'NARRADOR', text: 'At the prosecution table, to Super Sam\'s right, sits a second man. Three-piece black suit and gold watch chain. He has not moved.', addProfile: 'perfil_supersam' },
  { speaker: 'JUEZ', text: 'And this court does not know the gentleman accompanying the prosecution either.', pose: 'judge_neutral' },
  { speaker: 'BERRONDO', text: 'Fulgencio Berrondo, Your Honor. Attorney, bar number 4,882, admitted since 1955.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'I appear as amicus to the public ministry, without fee, with this court\'s leave.', pose: 'berrondo_idle' },
  { speaker: 'JUEZ', text: 'And to what do we owe the pleasure, counselor?', pose: 'judge_thinking' },
  { speaker: 'BERRONDO', text: 'The deceased was, many years ago, distributor for a company whose liquidation I oversee. I thought I ought to be present.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: '*Amicus*, from Latin *coadiuvare*: one who helps alongside another. I do not speak unless granted leave.', pose: 'berrondo_definicion' },
  { speaker: 'DEFENSA', text: '(Who asked him what it meant?)', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'You are entered on the record.', pose: 'judge_neutral', addProfile: 'perfil_berrondo' },
  { speaker: 'JUEZ', text: 'And this court wants a clear answer to one question before any other:', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Was anyone else inside that building?', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SUPER SAM', text: 'No, Your Honor! And the man who spent thirty-one years sitting at the door will say so!', pose: 'supersam_point' },
  { speaker: 'SUPER SAM', text: 'The prosecution calls the Judicial Archive janitor, Mr. Nicanor Tolentino.', pose: 'supersam_point' },
  { speaker: 'JUEZ', text: 'Before we hear him, let the clerk place the forensic photograph on view. This court wants to know what we are talking about.', pose: 'judge_neutral' },
  { bg: PLATE_FOTO, furniture: 'none', speaker: 'NARRADOR', text: 'Forensic photograph taken at 19:05 on December fourth. The body lies face down between the shelf and the reading table.' },
  { bg: PLATE_FOTO, furniture: 'none', speaker: 'NARRADOR', text: 'One meter away, a cloth-bound volume with a stain on the spine edge.' },
  { bg: PLATE_FOTO, furniture: 'none', speaker: 'NARRADOR', text: 'On the table, an open file and a lamp still lit. On the wall, a shelf with twenty-four slots.' },
  { speaker: 'JUEZ', text: 'Witness, state your name and occupation.', pose: 'judge_neutral' },
  { speaker: 'NICANOR', text: 'Nicanor Tolentino, janitor of the Judicial Archive. Thirty-one years, four months.', pose: 'nicanor_idle' },
  { speaker: 'NICANOR', text: 'And I want it on the record that I wax that floor myself and nobody told me twenty policemen would trample it.', pose: 'nicanor_escoba' },
  { speaker: 'JUEZ', text: 'So noted. Your testimony, please. Only what you perceived.', sfx: 'gavel', pose: 'judge_gavel' }
];
