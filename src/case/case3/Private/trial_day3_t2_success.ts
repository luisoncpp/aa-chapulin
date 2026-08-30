// @Architecture(descriptionShort="Case 3 day-3 testimony 2 success leads to climax", type="data", icon="layers")
/**
 * Case 3 Trial Day 3 — Testimony 6 success (Aniceto / ventana trabada).
 */

import type { DialogueLine } from '../../../types/index.js';

export const CASE3_T6_SUCCESS: DialogueLine[] = [
  { cutin: 'objection_toma_eso', speaker: 'DEFENSA', text: '¡TOMA ESO! ¡Hermética, dice usted!', sfx: 'whoosh', bgm: 'pursuit', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: '¡El ventilador central de las cabinas de XEVC está descompuesto desde AGOSTO! ¡Las tres cabinas graban con la ventana trabada con una cuña de madera!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'ANICETO', text: '¡E-eso es un detalle de mantenimiento sin importancia!', pose: 'aniceto_sweat' },
  { speaker: 'DEFENSA', text: '¡Es el detalle que le va a costar veinte años! Porque con la ventana abierta, TODO lo que dicen las bocinas de la plaza se cuela en la grabación.', pose: 'donramon_point' },
  { speaker: 'DEFENSA', text: '¡Y en este cartucho, debajo del grito, se oye clarito el aviso del niño de los cachetes!', sfx: 'desk_slam', pose: 'donramon_slam' },
  { speaker: 'JUEZ', text: '¡El aviso de las 9:40 de la noche!', pose: 'judge_shock' },
  { speaker: 'DEFENSA', text: '¡El grito que oyeron dos mil personas se grabó a las nueve cuarenta! ¡Y a las nueve cuarenta el señor Barriga estaba en la plaza, vivo, buscando a un niño!', pose: 'donramon_point' },
  { speaker: 'BARRIGA', text: '¡Es cierto! ¡Yo andaba con la señora Florinda gritando "Quicoooo"!', pose: 'barriga_shock' },
  { speaker: 'CHAPULIN', text: '¡Entonces esa voz del cartucho NO ES la del señor Barriga! ¡Es una imitación!', sfx: 'desk_slam', pose: 'chapulin_slam' },
  { speaker: 'ANICETO', text: '¡Una imitación que pudo hacer cualquiera! ¡Cualquiera!', pose: 'aniceto_panic' },
  { speaker: 'SUPER SAM', text: '¡Exactly! ¡Y el acusado tuvo una cabina toda la noche!', pose: 'supersam_slam', sfx: 'desk_slam' },
  { speaker: 'JUEZ', text: '¡ORDEN! La corte exige que la defensa demuestre, con pruebas, QUIÉN grabó esa voz.', pose: 'judge_gavel', sfx: 'gavel' }
];
