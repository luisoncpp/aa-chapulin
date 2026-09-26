// @Architecture(descriptionShort="Case 5 day-4 courtroom intro, opening present, testimony exports", type="data", icon="layers")
/**
 * Case 5 Trial Day 4 — Opening (§17.1), `openingPresent` de bitácora, testimony T9.
 */

import type { DialogueLine, OpeningPresent } from '../../../types/index.js';
import { CASE5_DAY4_INTRO } from './trial_openings.js';
import { CASE5_DAY4_OPENING_PRESENT_SUCCESS } from './trial_day4_success.js';
import { CASE5_TESTIMONY_9 } from './trial_day4_t1.js';

export { CASE5_TESTIMONY_9 };

export const CASE5_DAY4_INTRO_FULL: DialogueLine[] = [
  ...CASE5_DAY4_INTRO,
  { speaker: 'NARRADOR', text: '9 de diciembre, 4:00 PM. Cuarta y última audiencia.', bgm: 'trial' },
  { speaker: 'JUEZ', pose: 'judge_gavel', text: 'Se reanuda la audiencia. Esta corte anunció ayer que hoy dicta sentencia y lo sostiene.', sfx: 'gavel' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Defensa: tiene usted la palabra y tiene usted una tarde.' },
  { speaker: 'DEFENSA', text: 'Señor juez, antes de llamar a mi testigo, la defensa tiene que rectificar una prueba.', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: '¿Rectificar?', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: 'El informe del forense.', pose: 'chapulin_point' },
  { speaker: 'SECRETARIO', text: 'La representación social no se opone... aunque no entiende.' },
  { speaker: 'DON RAMÓN', text: '(Nadie entiende, señor secretario. Yo tampoco y es mi pellejo.)', pose: 'donramon_sweat' },
  { speaker: 'JUEZ', text: 'Presente la defensa lo que tenga.', sfx: 'gavel', pose: 'judge_gavel' }
];

export const CASE5_DAY4_OPENING_PRESENT: OpeningPresent = {
  evidence: ['bitacora_caldera'],
  prompt: '¿Con qué temperatura trabajó el forense?',
  successDialogue: CASE5_DAY4_OPENING_PRESENT_SUCCESS
};
