// @Architecture(descriptionShort="Case 5 day-3 courtroom gloss of the word síndico", type="data", icon="layers")
/**
 * Case 5 Trial Day 3 — the court pauses inside T7 press 3 to define "síndico"
 * before the player is asked to present. Fixed shape of the project's
 * "palabra difícil" gag (see Case 0's cartapacio lesson).
 */

import type { DialogueLine } from '../../../types/index.js';

/** Press aside: the bench explains who administers a bankrupt company's goods. */
export const SINDICO_LESSON: DialogueLine[] = [
  { speaker: 'DEFENSA', text: 'Señor juez, una pregunta de ignorante, ya que estamos.', pose: 'chapulin_idle' },
  { speaker: 'DEFENSA', text: 'Ese sótano guarda huacales de una empresa quebrada hace once años. Si la empresa ya no existe, ¿esas cajas de quién son?', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'De la masa, defensa. Y las administra un síndico.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: '¿Un sindi... qué?', pose: 'chapulin_idle' },
  { speaker: 'JUEZ', text: '...co.', pose: 'judge_thinking' },
  { speaker: 'DEFENSA', text: '¡Chanfle!', pose: 'chapulin_panic' },
  { speaker: 'JUEZ', text: 'La corte advierte que el término no es del dominio común. Se ilustrará para el acta.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Cuando un negocio quiebra, sus cosas no se quedan sin dueño: pasan a un bulto que la ley llama masa.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Un abogado nombrado por un juzgado la cuida, la reparte y responde de ella hasta que el concurso termina. A ése se le llama síndico.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: '¡Ah! ¡Entonces no es el dueño, es el que cuida lo que ya no tiene dueño!', pose: 'chapulin_point' },
  { speaker: 'JUEZ', text: 'Queda ilustrado el término. Continúe, defensa.', sfx: 'gavel', pose: 'judge_gavel' }
];
