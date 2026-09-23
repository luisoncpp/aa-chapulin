// @Architecture(descriptionShort="Case 5 day-3 Super Sam EN successes", type="data", icon="layers")
/**
 * Case 5 Trial Day 3 — T7 (Super Sam) contradiction and followUp successes, English.
 */

import type { DialogueLine } from '../../../types/index.js';

export const CASE5_D3_T2_OFICIO_SUCCESS_EN: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION!', sfx: 'desk_slam', bgm: 'objection', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Your Honor, official letter 4471 was signed by the prosecutor himself on November 26.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'And down at the bottom is the list of who was sent a copy, printed on his own office machine.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '"Copy to: the assigned court clerk. The Archive Directorate. And..."', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '"...the Syndicate for bankruptcy 114/1971."', pose: 'chapulin_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso' },
  { speaker: 'NARRADOR', text: 'The gallery rises.', sfx: 'realization', bgm: 'objection' },
  { speaker: 'SUPER SAM', text: '...What?', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'ORDER!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'SUPER SAM', text: 'Your Honor, I did not... the secretariat puts that in, the machine puts that in...', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'The law puts it in, Mr. Prosecutor. Nobody touches the goods of a bankruptcy without telling the receiver who looks after them.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'And that means there was a sixth person, Your Honor. A whole office the prosecutor never counted.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'Your letter did the right thing. And by doing the right thing it told someone the day, the hour, the place...', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '...and the name of the man who would be sitting there.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'SUPER SAM', text: '...Six hundred, Your Honor.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'What was that?', pose: 'judge_thinking' },
  { speaker: 'SUPER SAM', text: 'That I sign six hundred letters a month, and I have not read what goes at the bottom of one in eleven years.', pose: 'supersam_sweat' },
  { speaker: 'NARRADOR', text: 'The clerk lifts his pen.', pose: 'secretario_leyendo', updateProfile: 'perfil_supersam' },
  { speaker: 'JUEZ', text: 'So entered.', sfx: 'gavel', pose: 'judge_gavel', updateProfile: 'perfil_casimiro' },
  { speaker: 'JUEZ', text: 'And let it also be entered that this court still has nothing against anyone, because receiving a legal notice is not a crime.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: '(I know, Your Honor. I have known it for three days.)', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Defense, is there anything left of Mr. Prosecutor?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'One thing, Your Honor. And it is the one I least want to ask.', pose: 'chapulin_idle' }
];

export const CASE5_D3_T2_EXPEDIENTE_SUCCESS_EN: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'TAKE THAT!', sfx: 'desk_slam', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Panel B, Your Honor. The card that appeared in the museum loading yard on August 28. Six lines.', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'Read them.', sfx: 'gavel', bgm: 'suspense', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: '"One. Loading door latch: broken since March. Push it."', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '"Two. Gallery 2 grate: 18 × 24. Mesh loose at the lower corner. Opens onto the yard."', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '"Three. Watchman: 20:45 the forward hold. 21:00 the after hold. Copied from his notebook; hangs from a nail in the booth."', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '"Four. Chiquitolina pills: pharmacy on Insurgentes, the back counter."', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '"Five. Camera roll: changed on Mondays. On Tuesday one frame is left."', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'And six.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: '"Closing service included. 5 min."', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'NARRADOR', text: 'Super Sam stares at that line.', bgm: 'suspense' },
  { speaker: 'SUPER SAM', text: '...That is my envelope.', pose: 'supersam_sweat' },
  { speaker: 'JUEZ', text: 'What do you mean, your envelope?', pose: 'judge_shock' },
  { speaker: 'SUPER SAM', text: 'The third line of the envelope they pushed under my door said that, Your Honor. In those words.', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'And you closed that case in five minutes, Mr. Prosecutor. You said so yourself, in this room, in August.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '"Five." Shouted, with a slam of the hand.', pose: 'chapulin_idle' },
  { speaker: 'SUPER SAM', text: '......', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: 'Mr. Prosecutor, you thought someone had given you an envelope.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'What they gave you was line six of a catalog.', pose: 'chapulin_slam', sfx: 'desk_slam', cutin: 'objection_toma_eso' },
  { speaker: 'SUPER SAM', text: 'I AM NOT A LINE ITEM!', pose: 'supersam_breakdown', sfx: 'desk_slam' },
  { speaker: 'SUPER SAM', text: 'I am a man who charges! Charging is not being a product!', pose: 'supersam_breakdown' },
  { speaker: 'DEFENSA', text: 'With a price and a duration, Mr. Prosecutor. Five minutes.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'In your country, they call that a rate.', pose: 'chapulin_idle' },
  { speaker: 'NARRADOR', text: 'Long silence.', bgm: 'suspense' },
  { speaker: 'SUPER SAM', text: '...Your Honor.', pose: 'supersam_sweat' },
  { speaker: 'SUPER SAM', text: 'The prosecution —I— request to be removed from this matter and placed at the Comptroller\'s disposal.', pose: 'supersam_idle' },
  { speaker: 'JUEZ', text: 'So noted. The agreements clerk will continue as public ministry.', sfx: 'gavel', pose: 'judge_gavel', setFlag: 'case5_super_sam_recused' },
  { speaker: 'JUEZ', text: 'And this court will tell you one thing, Mr. Sullivan, because nobody else will.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'What you did today does not absolve you. But you did not do it cheaply.', pose: 'judge_neutral' },
  { speaker: 'SUPER SAM', text: '...Thank you, Your Honor.', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: '(And now. Now only the man with the watch chain is left.)', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Counselor Berrondo. This court orders you to testify, and warns you it is no longer as co-counsel.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'BERRONDO', text: 'With pleasure, Your Honor. And thank you for ordering it: this way it does not look like I am running.', pose: 'berrondo_idle' },
  { speaker: 'JUEZ', text: 'You may testify.', sfx: 'gavel', pose: 'judge_gavel' }
];
