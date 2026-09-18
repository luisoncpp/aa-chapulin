// @Architecture(descriptionShort="English Case 5 climax verdict and guilty penalty lines", type="data", icon="layers")
/**
 * Case 5 climax EN — INOCENTE verdict and CULPABLE at health 0 (spec §19.1–§19.2).
 */

import type { DialogueLine } from '../../../types/index.js';

export const CASE5_CLIMAX_VERDICT_EN: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'This court has everything it needs.', sfx: 'gavel', bgm: 'trial', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'Fulgencio Berrondo Ontiveros is remanded on a charge of aggravated homicide.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'The district attorney is given notice regarding the crate nine card file, and this court enters for the record that selling that information is not a crime in this country.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'It also enters that this judge finds it a disgrace, and that law is not fixed from the bench but from Congress.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Notice is likewise given regarding the conduct of Agent Sam Sullivan, as he himself declared.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'And it is entered that the convictions of July, August, August, September, and October stand firm.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'Buying a man a tool does not take away authorship of what he did with it.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'As for the defendant.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Ramon Valdes climbed a ladder because a man he himself had beaten asked him to be present.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'He was there twelve minutes. He came down. He signed his exit in a neat hand. And he told the janitor "I hope not."', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'This court enters its verdict.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'NARRADOR', text: 'NOT GUILTY!', cutin: 'objection_inocente', sfx: 'gavel', bgm: 'victory', confetti: true },
  { speaker: 'NARRADOR', text: 'Confetti falls over the courtroom.' },
  { speaker: 'DEFENSA', text: 'FOLLOW ME, GOOD PEOPLE!', pose: 'chapulin_point' },
  { speaker: 'DON RAMÓN', text: '......', pose: 'donramon_shock' },
  { speaker: 'DON RAMÓN', text: 'With your permission, said Monchito.', pose: 'donramon_idle' },
  { speaker: 'SARGENTO', text: 'At your service, Counselor! BOTH OF YOU!', pose: 'pazguato_saludo' },
  { speaker: 'CHOMPIRAS', text: 'We were few and we all walked out innocent!', pose: 'chompiras_relieved' },
  { speaker: 'NICANOR', text: '...And who sweeps up all this confetti now?', pose: 'nicanor_escoba' }
];

export const CASE5_CLIMAX_GUILTY_EN: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'The court has heard the defense for four days and watched it run out of credit with its own lawyer.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'It is not pleasant to say this. This court respects the defendant and has respected him four times.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'But a court does not acquit out of respect.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Ramon Valdes was alone with the victim within the hour of his death, and the dead man\'s hand held his address.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'This court enters its verdict.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'NARRADOR', text: 'GUILTY!', cutin: 'objection_culpable', sfx: 'gavel' },
  { speaker: 'DON RAMÓN', text: '...All right, young man.', pose: 'donramon_idle' },
  { speaker: 'DON RAMÓN', text: 'Try again.', pose: 'donramon_idle' }
];
