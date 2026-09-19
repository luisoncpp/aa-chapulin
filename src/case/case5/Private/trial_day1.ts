// @Architecture(descriptionShort="Case 5 day-1 courtroom intro and opening present", type="data", icon="layers")
/**
 * Case 5 Trial Day 1 — Opening (§11.1), `openingPresent`, and testimony exports.
 */

import type { DialogueLine, OpeningPresent } from '../../../types/index.js';
import { CASE5_TRIAL_INTRO } from './trial_openings.js';
import { CASE5_D1_OPENING_BADGE_SUCCESS } from './trial_day1_success.js';
import { CASE5_TESTIMONY_1 } from './trial_day1_t1.js';
import { CASE5_TESTIMONY_2 } from './trial_day1_t2.js';
import { CASE5_TESTIMONY_3 } from './trial_day1_t3.js';

export { CASE5_TESTIMONY_1, CASE5_TESTIMONY_2, CASE5_TESTIMONY_3 };

export const CASE5_TRIAL_INTRO_FULL: DialogueLine[] = [
  ...CASE5_TRIAL_INTRO,
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'Acusado: Ramón Valdés, licenciado en derecho por...' },
  { speaker: 'DON RAMÓN', pose: 'donramon_idle', text: 'Por la calle, señor juez.' },
  { speaker: 'JUEZ', pose: 'judge_thinking', text: '...por la calle. Sí.' },
  { speaker: 'JUEZ', pose: 'judge_thinking', text: 'Licenciado Valdés, es la quinta vez que esta corte lo ve. Y es la primera que lo ve sentado ahí.' },
  { speaker: 'DON RAMÓN', pose: 'donramon_sweat', text: 'A mí también se me hace raro, señor juez. Se ve todo más chiquito.' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Your Honor, la fiscalía va a ser breve, porque este caso ya me costó una noche.' },
  { speaker: 'SUPER SAM', pose: 'supersam_slam', text: 'Un edificio cerrado. Un libro con catorce firmas. Un muerto. Y en la mano del muerto, el domicilio del último hombre que subió.', sfx: 'desk_slam' },
  { speaker: 'SUPER SAM', pose: 'supersam_point', text: 'Motive? La víctima iba a declarar el sábado que las cuatro victorias de este señor entre agosto y octubre no fueron talento. Fueron información comprada.' },
  { speaker: 'DON RAMÓN', pose: 'donramon_idle', text: '...¿Comprada con qué, señor fiscal? Llevo diecisiete meses sin pagar la renta.' },
  { speaker: 'SUPER SAM', pose: 'supersam_slam', text: '¡AH! ¡Pero la pagó! ¡El veintinueve de noviembre! ¡DIECISIETE MESES! ¡En efectivo!', sfx: 'desk_slam' },
  { speaker: 'NARRADOR', text: 'La galería estalla.', sfx: 'gavel' },
  { speaker: 'JUEZ', pose: 'judge_gavel', text: '¡ORDEN!', sfx: 'gavel' },
  { speaker: 'JUEZ', pose: 'judge_shock', text: 'Antes de nada: esta corte no ve a nadie en el estrado de la defensa.' },
  { speaker: 'DEFENSA', pose: 'chapulin_slam', text: '¡Aquí, señor juez!', sfx: 'desk_slam' },
  { speaker: 'JUEZ', pose: 'judge_shock', text: '...¿Y usted quién es?' },
  { speaker: 'DEFENSA', pose: 'chapulin_point', text: '¡Soy el Chapulín Colorado!' },
  { speaker: 'SUPER SAM', pose: 'supersam_slam', text: '¡OBJECTION! ¡Your Honor, ese señor fue mi ACUSADO en agosto!', sfx: 'desk_slam' },
  { speaker: 'DEFENSA', pose: 'chapulin_point', text: '¡Y me absolvieron! ¡Que es más de lo que puede decir su expediente!' },
  { speaker: 'JUEZ', pose: 'judge_neutral', text: 'La corte necesita, de todos modos, que quien ocupa ese estrado acredite su personalidad.' },
  { speaker: 'DON RAMÓN', pose: 'donramon_idle', text: 'Joven. La insignia.' }
];

export const CASE5_DAY1_OPENING_PRESENT: OpeningPresent = {
  evidence: ['insignia_abogado'],
  prompt: '¿Qué acredita a la defensa ante esta corte?',
  successDialogue: CASE5_D1_OPENING_BADGE_SUCCESS
};
