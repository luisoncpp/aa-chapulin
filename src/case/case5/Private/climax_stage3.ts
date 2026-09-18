// @Architecture(descriptionShort="Case 5 climax stage 3 — estante consulta", type="data", icon="layers")
/**
 * Case 5 climax — Etapa 3 ¿SUBIÓ? intro + present + point (spec §18.3).
 */

import type { ClimaxStage } from '../../../types/index.js';
import { CASE5_CLIMAX_STAGE3_POINT } from './climax_stage3_point.js';

export const CASE5_CLIMAX_STAGE3: ClimaxStage = {
  presentTarget: ['estante_consulta'],
  prompt: '¿Qué prueba que alguien volvió al primer piso después del golpe?',
  failDialogue: [
    { speaker: 'JUEZ', text: 'Eso no demuestra que alguien volviera al primer piso después del golpe.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: 'Esta corte necesita una cosa que estuviera arriba y que no pudiera llegar sola.', pose: 'judge_neutral' },
    { speaker: 'SECRETARIO', text: 'Un punto menos para la defensa, señor juez.', sfx: 'damage' }
  ],
  introDialogue: [
    { speaker: 'DEFENSA', text: '¡TOMA ESO! ¡El estante de consulta del pasillo siete!', sfx: 'desk_slam', cutin: 'objection_toma_eso', pose: 'chapulin_slam' },
    { speaker: 'DEFENSA', text: 'Veinticuatro ranuras numeradas, señor juez. Y el conserje de ese edificio declaró el lunes, en esta sala, que al subir lo vio derechito.', pose: 'chapulin_point' },
    { speaker: 'NICANOR', text: 'Derechito, señor juez. Completo. Yo los cuento hasta dormido.', pose: 'nicanor_idle' },
    { speaker: 'DEFENSA', text: 'Veintitrés tomos y el hueco del trece.', pose: 'chapulin_idle' },
    { speaker: 'JUEZ', text: '¿Y?', pose: 'judge_thinking' },
    { speaker: 'DEFENSA', text: 'Y en el suelo, a un metro del cuerpo, había otro tomo.', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'NARRADOR', text: 'Silencio absoluto en la sala.', bgm: 'suspense' },
    { speaker: 'JUEZ', text: '...Veinticuatro tomos.', pose: 'judge_shock' },
    { speaker: 'DEFENSA', text: 'Veinticuatro tomos para veinticuatro ranuras... y una ranura que lleva vacía desde 1971.', pose: 'chapulin_point' },
    { speaker: 'DEFENSA', text: 'Sobran las cuentas, señor juez. Sobra uno.', pose: 'chapulin_slam', sfx: 'desk_slam' },
    { speaker: 'JUEZ', text: '¡Que traigan esa fotografía a la vista de esta corte! ¡AHORA!', sfx: 'gavel', pose: 'judge_gavel' }
  ],
  pointTarget: CASE5_CLIMAX_STAGE3_POINT,
  successDialogue: [
    { speaker: 'JUEZ', text: '...Esta corte quiere entender una cosa.', pose: 'judge_thinking' },
    { speaker: 'JUEZ', text: '¿Ese cedulario que está en el sótano de mi juzgado es lo que en la calle llaman «el Tomo Trece»?', pose: 'judge_neutral' },
    { speaker: 'DEFENSA', text: 'Se lo dijo un hombre en esta misma sala en agosto, señor juez, y usted no pudo preguntárselo.', pose: 'chapulin_idle' },
    { speaker: 'DEFENSA', text: 'La fiscalía objetó que era irrelevante para el veredicto. Y usted le dio la razón.', pose: 'chapulin_point' },
    { speaker: 'JUEZ', text: '...Lo recuerdo perfectamente.', pose: 'judge_shock' },
    { speaker: 'JUEZ', text: 'Y ha sido la peor decisión que he tomado desde que ocupo este estrado.', pose: 'judge_thinking' }
  ]
};
