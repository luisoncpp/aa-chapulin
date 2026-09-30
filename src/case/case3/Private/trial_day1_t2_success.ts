// @Architecture(descriptionShort="Case 3 day-1 testimony 2 contradiction success and adjournment", type="data", icon="layers")
/**
 * Case 3 Trial Day 1 — Testimony 2 success dialogue (Chimoltrufia / carrito).
 */

import type { DialogueLine } from '../../../types/index.js';

export const CASE3_T2_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡TOMA ESO! ¡Ese carrito no llevaba discos!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: '¡Estas dos rayas de grasa salen de la puerta del DESPACHO y terminan en la Cabina B! ¡Y en una rueda quedó atorado un hilo del saco del Señor Barriga!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'CHIMOLTRUFIA', text: '¡Ay, qué la canción! ¿Entonces lo que iba en el carrito era...?', pose: 'chimoltrufia_shock' },
  { speaker: 'CHAPULIN', text: '¡Era el señor Barriga! ¡Lo pasearon por el pasillo como si fuera un long play!', sfx: 'desk_slam', pose: 'chapulin_slam' },
  { speaker: 'SUPER SAM', text: 'Objection! ¡El acusado pudo haberlo movido él mismo!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: '¿En tres minutos, señor fiscal? Entre el grito de las 11:03 y el arresto de las 11:06 hay hora y media de minutos... digo, ¡hay tres minutos! ¡Un anciano no abre una caja fuerte, golpea a un hombre, lo sube a un carrito, lo pasea cincuenta metros y lo acuesta en tres minutos!', pose: 'donramon_point' },
  { speaker: 'JUEZ', text: '¡La defensa tiene razón! ¡Al Señor Barriga lo atacaron en el despacho y lo trasladaron a la cabina!', pose: 'judge_shock' },
  { speaker: 'SUPER SAM', text: 'Then he did it EARLIER! ¡Y montó la escena para fingir la hora!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: 'Suficiente. Ordeno sellar y registrar el despacho del Señor Barriga. ¡Se aplaza la sesión veinticuatro horas!', pose: 'judge_gavel', sfx: 'gavel' }
];
