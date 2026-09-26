// @Architecture(descriptionShort="Case 5 day-3 T6 premature-present deflections", type="data", icon="layers")
/**
 * Case 5 Trial Day 3 — Testimony 6 deflections (spec §15.2).
 * Two presents the player is right to attempt and wrong to attempt yet: the
 * court answers, points at what is still missing, and costs no health.
 */

import type { DialogueLine } from '../../../types/index.js';

/** Declaración 2: la fotografía dice cuándo se abrió, no qué se guarda dentro. */
export const CASE5_D3_T1_HUACAL_DEFLECT: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'Defensa: esa fotografía prueba el día en que alguien abrió el huacal. El testigo está declarando qué hace él los jueves.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Mientras esta corte no sepa qué se guarda ahí dentro, una fecha suelta no contradice a nadie. Establezca primero el contenido.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: '(Primero qué hay. Después quién lo abrió.)', pose: 'chapulin_idle' }
];

/** Declaración 3: la máquina dice qué hay hoy; el testigo habla de lo que ha visto. */
export const CASE5_D3_T1_MAQUINA_DEFLECT: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'Defensa: esa máquina se levantó ayer, en la inspección que esta corte ordenó. Dice lo que hay hoy en el huacal.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'El testigo habla de lo que él ha visto desde septiembre. Para contradecirlo, tráigame lo que la corte escribió cuando selló ese depósito.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: '(Lo que la corte escribió... cuando lo selló. En mil novecientos setenta y uno.)', pose: 'chapulin_idle' }
];

/** Declaración 3 de T7: la tapa prueba presencia, no conocimiento del aviso. */
export const CASE5_D3_T2_HUACAL_DEFLECT: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'Defensa: esa tapa sí demuestra que el síndico estuvo allí y rubricó una apertura el sábado cuatro.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Pero estar en el depósito no prueba todavía que conociera esta diligencia ni que la fiscalía le avisara. Tráigame el oficio que contiene ese aviso.', pose: 'judge_neutral' }
];

/** Declaraciones 5 y 6 de T8: el oficio prueba envío, no recepción. */
export const CASE5_D3_T3_OFICIO_DEFLECT: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'Defensa: ese oficio demuestra que la fiscalía mandó el aviso a la Sindicatura, pero no que el licenciado Berrondo lo recibiera.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Todavía no hay contradicción. Para desmentir que nadie se lo dijo, hace falta probar que el aviso llegó a sus manos.', pose: 'judge_neutral' },
  { speaker: 'DEFENSA', text: '(El oficio prueba el envío. Todavía falta probar la recepción.)', pose: 'chapulin_idle' }
];
