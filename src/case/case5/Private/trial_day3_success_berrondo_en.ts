// @Architecture(descriptionShort="Case 5 day-3 Berrondo EN successes and GIRO 3", type="data", icon="layers")
/**
 * Case 5 Trial Day 3 — T8 (Berrondo) successes and GIRO 3, English.
 */

import type { DialogueLine } from '../../../types/index.js';

export const CASE5_D3_T3_ACUSE_SUCCESS_EN: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: 'OBJECTION!', sfx: 'desk_slam', bgm: 'objection', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Your Honor, the court service-acknowledgment book, November 29 sheet.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: '"Official letter 4471. Document-comparison diligence requested by inmate C. Lengua." Judicial Archive, December 4, 5:00 PM.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: '"Delivered to: Syndicate for bankruptcy 114 diagonal 71."', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'And in the margin, Your Honor, a rubric.', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'NARRADOR', text: 'The whole room turns toward the stand.', sfx: 'realization' },
  { speaker: 'BERRONDO', text: '......', pose: 'berrondo_idle' },
  { speaker: 'JUEZ', text: 'Counselor Berrondo. Is that rubric yours?', pose: 'judge_neutral' },
  { speaker: 'BERRONDO', text: 'It is mine, Your Honor.', pose: 'berrondo_idle' },
  { speaker: 'JUEZ', text: 'Did you sign for receipt on November 29 of a letter stating the day, the hour, the place, and the name?', pose: 'judge_shock' },
  { speaker: 'BERRONDO', text: 'I signed.', pose: 'berrondo_idle' },
  { speaker: 'JUEZ', text: 'And you just testified under oath that nobody told you?!', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'BERRONDO', text: '...I just testified to that.', pose: 'berrondo_sweat' },
  { speaker: 'NARRADOR', text: 'First drop of sweat in three days.', sfx: 'realization', bgm: 'pursuit' },
  { speaker: 'DEFENSA', text: 'And the correspondence clerk remembers you, counselor!', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'She remembers because you said "miss," and nobody calls her "miss"!', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'BERRONDO', text: '......I sign two hundred acknowledgments a month, Your Honor.', pose: 'berrondo_sweat' },
  { speaker: 'DEFENSA', text: 'The prosecutor said that an hour ago and it cost him his career!', pose: 'chapulin_point' },
  { speaker: 'BERRONDO', text: 'It will cost me more, counselor.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'I correct my testimony: I was notified on November 29, and I forgot.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'It is a grave lapse in a man of my profession and I will not excuse it.', pose: 'berrondo_idle' },
  { speaker: 'JUEZ', text: 'Let the correction be entered.', sfx: 'gavel', pose: 'judge_gavel', updateProfile: 'perfil_berrondo' },
  { speaker: 'DEFENSA', text: '(I got him. I finally got him on one.)', pose: 'chapulin_point' },
  { speaker: 'DON RAMÓN', text: '(Kid, do not look pleased.)', pose: 'donramon_sweat' },
  { speaker: 'DON RAMÓN', text: '(Forgetting is not murder. And that man just traded a lie for a character flaw.)', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Defense: where did the book used to kill that man come from?', pose: 'judge_thinking' }
];

const CASE5_DAY3_GIRO3_EN: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'This court will do the math aloud, because it has been doing it silently for three days.', sfx: 'gavel', bgm: 'suspense', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'The expert fixes death between 5:00 PM and 5:30 PM.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'The defendant signed out at 4:58 PM.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'And Counselor Berrondo returned his badge at 4:50 PM.', pose: 'judge_thinking' },
  { speaker: 'NARRADOR', text: 'The judge removes his glasses.', bgm: 'suspense' },
  { speaker: 'JUEZ', text: 'Counselor Chapulin: you showed this court that building had a second door.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'You also showed that returning a badge is not the same as leaving. Nobody saw Counselor Berrondo cross the gate.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'Your Honor!', pose: 'chapulin_panic' },
  { speaker: 'JUEZ', text: 'But an unproven exit is not a proven stay either. At five o\'clock, this court cannot place anyone in that corridor.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'The second door opened a possibility. After three days, the defense still has not turned it into presence.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'And against that absence stands one proven fact: the defendant knew the way, left two minutes before the interval, and could have returned during fifteen unsupervised minutes.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DON RAMÓN', text: '...Your Honor, I did not go back up.', pose: 'donramon_shock' },
  { speaker: 'JUEZ', text: 'I know, Counselor Valdes. And this court cannot sentence on what it knows: it sentences on what is proved.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Tomorrow is the fourth day. This court will not grant a fifth.', sfx: 'gavel', pose: 'judge_gavel', updateProfile: 'perfil_chapulin' },
  { speaker: 'SECRETARIO', text: 'Public ministry maintains the charge, Your Honor.' },
  { speaker: 'JUEZ', text: 'Defense: tomorrow at four in the afternoon you put someone inside that corridor, or this court sentences on what it has.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Court is adjourned.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'NARRADOR', text: 'The room empties slowly. Super Sam leaves without the canvas bag, which stays on the table.' },
  { speaker: 'BERRONDO', text: 'Counselor.', pose: 'berrondo_idle' },
  { speaker: 'DEFENSA', text: '...Counselor.', pose: 'chapulin_idle' },
  { speaker: 'BERRONDO', text: 'The rubric was very well found. And the volume stamp, better.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'If you ever want to practice for real, speak with me. I mean it.', pose: 'berrondo_idle' },
  { speaker: 'DEFENSA', text: '(And he means it. That is the worst part: he means it.)', pose: 'chapulin_idle' }
];

export const CASE5_D3_T3_TOMO_SUCCESS_EN: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: 'TAKE THAT!', sfx: 'desk_slam', pose: 'chapulin_slam' },
  { speaker: 'DEFENSA', text: 'Your Honor, the murder weapon is Volume XI of El Saber Universal, economy edition, cloth-bound.', pose: 'chapulin_point' },
  { speaker: 'DEFENSA', text: 'And on the flyleaf is a violet ink stamp nobody has read aloud in three days.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: 'Read it.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: '"Donation from the syndic of bankruptcy 114 diagonal 71. October 14, 1971."', pose: 'chapulin_slam', sfx: 'desk_slam' },
  { speaker: 'NARRADOR', text: 'Long murmur in the gallery.', sfx: 'realization' },
  { speaker: 'JUEZ', text: 'Did you donate those books to that Archive, counselor?', pose: 'judge_shock' },
  { speaker: 'BERRONDO', text: 'I did, Your Honor. Twenty-four slots and twenty-three volumes, because thirteen never existed.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'Nobody wanted them. They were twenty-three heavy volumes and the per-kilo auction did not cover freight.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'I gave them to the court to avoid hauling fees, declared it, and there is a receipt.', pose: 'berrondo_idle' },
  { speaker: 'DEFENSA', text: 'Your Honor: the victim was killed with a book the witness donated.', pose: 'chapulin_point' },
  { speaker: 'BERRONDO', text: 'Eleven years ago, counselor. And in plain view, in a public corridor, for eleven years.', pose: 'berrondo_idle' },
  { speaker: 'BERRONDO', text: 'If donating a book were evidence, half this city\'s libraries would be on trial.', pose: 'berrondo_idle' },
  { speaker: 'JUEZ', text: '...The court grants the gentleman is right. Again.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: '(Again.)', pose: 'chapulin_idle' },
  ...CASE5_DAY3_GIRO3_EN
];
