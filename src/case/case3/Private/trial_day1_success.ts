// @Architecture(descriptionShort="Case 3 day-1 testimony 1 contradiction success", type="data", icon="layers")
/**
 * Case 3 Trial Day 1 — Testimony 1 success dialogue (Pazguato / lentes).
 */

import type { DialogueLine } from '../../../types/index.js';

export const CASE3_T1_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO! ¡Sargento, esa cabina no está como la dejó el criminal, porque el criminal nunca estuvo ahí!', sfx: 'whoosh', bgm: 'objection', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: '¡A estos lentes les falta el cristal derecho! Se rompieron con el golpe... ¿y dónde está el vidrio? ¡En esa cabina no hay ni una esquirla!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'JUEZ', text: '¡Cáspita! ¡Los lentes se rompieron en otra parte!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: 'Y hay más. El informe médico reporta FIBRAS ROJAS DE LANA en el cabello y el cuello de la víctima. El piso de la Cabina B es linóleo gris. ¡Ahí no hay una sola hebra roja!', pose: 'donramon_point' },
  { speaker: 'SUPER SAM', text: 'Grrr... ¡Eso no prueba nada! ¡Pudieron caérsele antes!', pose: 'supersam_sweat' },
  { speaker: 'DEFENSA', text: '¿Las fibras del golpe, señor fiscal? Al Señor Barriga lo golpearon tirado sobre lana roja. Y después lo acostaron en linóleo gris.', pose: 'donramon_idle' },
  { speaker: 'JUEZ', text: 'Si eso es cierto, alguien trasladó a la víctima... ¿pero cómo? ¡Ese hombre pesa lo que dos hombres!', pose: 'judge_thinking' }
];
