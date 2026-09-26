// @Architecture(descriptionShort="Case 5 day-3 courtroom intro, opening present, testimony exports", type="data", icon="layers")
/**
 * Case 5 Trial Day 3 — Opening (§15.1), `openingPresent` de efectos, testimonies T6/T7/T8.
 */

import type { DialogueLine, OpeningPresent } from '../../../types/index.js';
import { CASE5_DAY3_INTRO } from './trial_openings.js';
import { CASE5_DAY3_OPENING_PRESENT_SUCCESS } from './trial_day3_success.js';
import { CASE5_TESTIMONY_6 } from './trial_day3_t1.js';
import { CASE5_TESTIMONY_7 } from './trial_day3_t2.js';
import { CASE5_TESTIMONY_8 } from './trial_day3_t3.js';

export { CASE5_TESTIMONY_6, CASE5_TESTIMONY_7, CASE5_TESTIMONY_8 };

export const CASE5_DAY3_INTRO_FULL: DialogueLine[] = [
  ...CASE5_DAY3_INTRO,
  { speaker: 'NARRADOR', text: '8 de diciembre, 4:00 PM. Tercera audiencia.', bgm: 'trial' },
  { speaker: 'JUEZ', pose: 'judge_gavel', text: 'Se reanuda la audiencia. Esta corte recibió el acta de la inspección judicial de esta mañana.', sfx: 'gavel' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Consta que el depósito reúne mobiliario y tres mil doscientos tomos distribuidos entre sus huacales; en el huacal nueve se inventariaron doscientos diez ejemplares de lujo, un cedulario de once mil cuatrocientas siete tarjetas y una máquina de escribir.' },
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Consta también que todo ello está inventariado desde 1971 y que nada de ello es robado.' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Your Honor, la fiscalía solicita que se archive esta línea de investigación y se resuelva sobre el acusado.' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'La fiscalía la solicita todos los días y esta corte se la niega todos los días. Siéntese.' },
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Antes de nada: ayer esta corte oyó que ese hombre pidió esta diligencia para su apelación. Lo que nadie ha explicado todavía es qué venía a señalar en ella.' },
  { speaker: 'JUEZ', pose: 'judge_gavel', text: 'Defensa: ¿qué venía a hacer la víctima?', sfx: 'gavel' }
];

export const CASE5_DAY3_OPENING_PRESENT: OpeningPresent = {
  evidence: ['efectos_casimiro'],
  prompt: '¿Qué iba a señalar la víctima en esa diligencia?',
  successDialogue: CASE5_DAY3_OPENING_PRESENT_SUCCESS
};
