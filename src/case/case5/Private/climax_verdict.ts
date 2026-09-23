// @Architecture(descriptionShort="Case 5 climax verdict and guilty penalty lines", type="data", icon="layers")
/**
 * Case 5 climax — Veredicto INOCENTE y CULPABLE por salud 0 (spec §19.1–§19.2).
 */

import type { DialogueLine } from '../../../types/index.js';

export const CASE5_CLIMAX_VERDICT: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'Esta corte tiene todo lo que necesita.', sfx: 'gavel', bgm: 'trial', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'Se ordena consignar a Fulgencio Berrondo Ontiveros por homicidio calificado.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'Se da vista al ministerio público respecto del cedulario del huacal nueve, y esta corte hace constar por escrito que vender esa información no es delito en este país.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'También hace constar que a este juez le parece una vergüenza, y que la ley no se arregla desde un estrado sino desde el Congreso.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Se da vista igualmente respecto de la conducta del agente Sam Sullivan, declarada por él mismo.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Y se hace constar que las condenas de julio, agosto, agosto, septiembre y octubre quedan firmes.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'Comprarle una herramienta a alguien no le quita a nadie la autoría de lo que hizo con ella.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'En cuanto al acusado.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Ramón Valdés subió una escalera porque un hombre al que él mismo había vencido le pidió que estuviera presente.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Estuvo doce minutos. Bajó. Firmó su salida con buena letra. Y le dijo al conserje «ojalá que no».', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Esta corte dicta su veredicto.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: '¡INOCENTE!', cutin: 'objection_inocente', sfx: 'gavel', bgm: 'victory', confetti: true, pose: 'judge_gavel' },
  { speaker: 'DEFENSA', text: '¡SÍGANME LOS BUENOS!', pose: 'chapulin_point' },
  { speaker: 'DON RAMÓN', text: '......', pose: 'donramon_shock' },
  { speaker: 'DON RAMÓN', text: 'Con permisito, dijo Monchito.', pose: 'donramon_idle' },
  { speaker: 'SARGENTO', text: '¡A sus órdenes, mi Licenciado! ¡LOS DOS!', pose: 'pazguato_saludo' },
  { speaker: 'CHOMPIRAS', text: '¡Éramos pocos y salimos inocentes todos!', pose: 'chompiras_relieved' },
  { speaker: 'NICANOR', text: '...¿Y ahora quién barre todo este confeti?', pose: 'nicanor_escoba' }
];

export const CASE5_CLIMAX_GUILTY: DialogueLine[] = [
  { speaker: 'JUEZ', text: 'La corte ha oído a la defensa durante cuatro días y ha visto quedarse sin crédito a su propio abogado.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: 'No es agradable decir esto. Esta corte respeta al acusado y lo ha respetado cuatro veces.', pose: 'judge_thinking' },
  { speaker: 'JUEZ', text: 'Pero un tribunal no absuelve por respeto.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Ramón Valdés estuvo a solas con la víctima dentro de la hora de su muerte, y en la mano del muerto estaba su domicilio.', pose: 'judge_neutral' },
  { speaker: 'JUEZ', text: 'Esta corte dicta su veredicto.', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'JUEZ', text: '¡CULPABLE!', cutin: 'objection_culpable', sfx: 'gavel', pose: 'judge_gavel' },
  { speaker: 'DON RAMÓN', text: '...Está bien, joven.', pose: 'donramon_idle' },
  { speaker: 'DON RAMÓN', text: 'Inténtelo otra vez.', pose: 'donramon_idle' }
];
