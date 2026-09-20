// @Architecture(descriptionShort="Case 5 day-3 opening and T6 EN successes", type="data", icon="layers")
/**
 * Case 5 Trial Day 3 — opening present and T6 (Chompiras) successes, English.
 */

import type { DialogueLine } from '../../../types/index.js';

export const CASE5_DAY3_OPENING_PRESENT_SUCCESS_EN: DialogueLine[] = [
  { speaker: 'DEFENSA', text: "The victim's personal effects, Your Honor. Two stopped watches, a bow tie, and a notebook.", pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'And in the notebook, five numbered points this man wrote in prison on November 8.', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'Read them.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: '"Point one. The card they seized from me in July has the dropped s. I stared at it nine years, line by line."', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '"Point two. The museum card that appeared in the newspaper in August has the dropped s."', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '"Point three. The same machine typed both. A machine does not correct itself."', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '"Point four. I know where that machine is, because I typed on it from 1962 to 1971."', pose: 'chapulin_point' },
  { speaker: 'NARRADOR', text: 'Murmurs in the gallery.', sfx: 'realization' },
  { speaker: 'DEFENSA', text: '"Point five. What I do not know is how to say it without looking like I am trying to save myself. And I am trying to save myself."', pose: 'chapulin_idle' },
  { speaker: 'NARRADOR', text: 'Silence.', bgm: 'suspense' },
  { speaker: 'JUEZ', text: 'Let the full notebook be entered.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'And let it be recorded that this court convicted that man in July and that his sentence still stands.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'What he did in July excuses nothing. What he meant to do in November does not redeem him.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'But this court will not let what he meant to do in November be lost a second time.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DON RAMÓN', text: '(...Thank you, Your Honor.)', pose: 'donramon_idle' },
  { speaker: 'SUPER SAM', text: '...Your Honor.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'Later, Mr. Prosecutor. First the defense will call its witness.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: 'The defense calls the loader for the Judicial Archive estate-goods deposit.', pose: 'chapulin_point' },
  { speaker: 'CHOMPIRAS', text: '...Me?!', pose: 'chompiras_nervous' },
  { speaker: 'JUEZ', text: 'Name and occupation.', pose: 'judge_neutral' },
  { speaker: 'CHOMPIRAS', text: '...They call me Chompiras, Your Honor. Loader. With insurance and a Christmas bonus.', pose: 'chompiras_nervous' },
  { speaker: 'CHOMPIRAS', text: 'And first I want to say I was acquitted in August and I have the paper.', pose: 'chompiras_idle' },
  { speaker: 'JUEZ', text: 'The court remembers perfectly and congratulates you. You may testify.', sfx: 'gavel', pose: 'judge_gavel' }
];

export const CASE5_D3_T1_INVENTARIO_SUCCESS_EN: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION!', sfx: 'desk_slam', bgm: 'objection', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Your Honor, the witness says "old books and some drawers." That is what he sees, and he says it in good faith.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'But what this court wrote about that crate in 1971 is recorded in the estate inventory: forty-seven line items.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Item twelve: card file, eleven thousand four hundred cards.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Item forty-one: Olivetti Lexikon 80 typewriter.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'So entered.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: 'And one more, Your Honor, because nobody has read it aloud in eleven years.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Item forty-four: unsold luxury-edition copies, two hundred ten.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Luxury edition?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'Half leather, Your Honor, with brass corners on the spine. The set nobody bought.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'That is why the company failed: two hundred ten complete luxury collections left unsold.', pose: 'chapulin_idle' },
  { speaker: 'BERRONDO', text: 'Two hundred ten loose unsold copies, counselor. Not two hundred ten complete collections. A memorable disaster.', pose: 'berrondo_idle' },
  { speaker: 'DEFENSA', text: '(Thank you, counselor.)', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '(He corrected me again. And again he gave me a fact I did not ask for.)', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Defense: what complete date appears on the topmost strip of the crate?', pose: 'judge_thinking' }
];

export const CASE5_D3_T1_HUACAL_SUCCESS_EN: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'TAKE THAT!', sfx: 'desk_slam', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Your Honor, the witness testified that crate is opened on Thursdays.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'And the topmost strip says, in full: "SAT December 4." The answer is written on the evidence I just presented.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Good heavens!', pose: 'judge_shock' },
  { speaker: 'CHOMPIRAS', text: 'Oh, right! I was not there Saturday! I play dominoes on Saturdays!', pose: 'chompiras_nervous' },
  { speaker: 'DEFENSA', text: 'Then who opened the crate for him?', pose: 'chapulin_point' },
  { speaker: 'CHOMPIRAS', text: 'He did it himself, counselor. The crowbar stays hanging on the nail.', pose: 'chompiras_idle' },
  { speaker: 'DEFENSA', text: 'And to haul something heavy up, did he need you on the freight elevator?', pose: 'chapulin_idle' },
  { speaker: 'CHOMPIRAS', text: 'No, counselor. I have the loader remote and the syndic has his. Basement to first floor takes a minute and a half.', pose: 'chompiras_idle' },
  { speaker: 'CHOMPIRAS', text: 'Counselor Berrondo knows how to run it. I saw him do it twice while I was unloading in the courtyard.', pose: 'chompiras_nervous' },
  { speaker: 'BERRONDO', text: 'Your Honor, I said so yesterday: I went down Saturday because a diligence was going to touch the estate goods.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'A depositary who only goes down on Thursdays and lets a Saturday diligence pass deserves a bar complaint.', pose: 'berrondo_idle' },
  { speaker: 'DEFENSA', text: '(He is right again. Again.)', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'The court enters the explanation on the record. Sergeant: on the photograph already in evidence, how many strips did you count?', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SARGENTO', text: 'More than two hundred fifty strips, Your Honor. I reviewed them with the expert.', pose: 'pazguato_decidido' },
  { speaker: 'SARGENTO', text: 'And the expert left his visual report on the machine. Shall I read it?', pose: 'pazguato_decidido' },
  { speaker: 'JUEZ', text: 'Read it.', pose: 'judge_neutral' },
  { speaker: 'SARGENTO', text: '"The lowercase s typebar is bent nine tenths of a millimeter."', pose: 'pazguato_idle', updateEvidence: 'maquina_escribir' },
  { speaker: 'SARGENTO', text: '"It prints half a line below the row and half a degree left of vertical."', pose: 'pazguato_idle' },
  { speaker: 'DEFENSA', text: '(The dropped s. Like in the dead man\'s notebook.)', pose: 'chapulin_panic' },
  { speaker: 'SUPER SAM', text: 'Objection! A machine with one crooked key is not a murderer!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'It is not, Mr. Prosecutor. But it is a machine that types the same way as something that appeared in a museum loading yard.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'And this court wants to know who typed it and who knew what.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'The witness may step down.', sfx: 'gavel', pose: 'judge_gavel', updateProfile: 'perfil_chompiras' },
  { speaker: 'NARRADOR', text: 'Super Sam stands without being asked.', bgm: 'suspense' },
  { speaker: 'SUPER SAM', text: 'Your Honor. The prosecution requests permission to testify.', pose: 'supersam_idle' },
  { speaker: 'JUEZ', text: 'The prosecution requests WHAT?', pose: 'judge_shock' },
  { speaker: 'SUPER SAM', text: 'That I be sworn in, Your Honor. Under oath.', pose: 'supersam_idle' },
  { speaker: 'DEFENSA', text: 'What?!', pose: 'chapulin_panic' },
  { speaker: 'DON RAMÓN', text: '(Let him, kid.)', pose: 'donramon_idle' },
  { speaker: 'DON RAMÓN', text: '(That man has been carrying a bag stuffed with cotton for over three months. Let him.)', pose: 'donramon_sweat' },
  { speaker: 'JUEZ', text: '...The court grants it, and appoints the clerk to act as public ministry in the meantime.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'Name, office, and oath.', pose: 'judge_neutral' },
  { speaker: 'SUPER SAM', text: 'Sam Sullivan. Public prosecutor assigned to this court.', pose: 'supersam_idle' },
  { speaker: 'SUPER SAM', text: 'I swear to tell the truth. And I warn this court it will be cheap: I will be quick.', pose: 'supersam_idle' },
  { speaker: 'JUEZ', text: 'You may testify.', sfx: 'gavel', pose: 'judge_gavel' }
];
