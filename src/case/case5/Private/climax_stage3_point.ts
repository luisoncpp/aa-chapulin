// @Architecture(descriptionShort="Case 5 climax stage 3 estante point zones", type="data", icon="layers")
/**
 * Case 5 climax — Señalamiento 2 on estante_consulta (spec §18.3).
 * Point-zone bounds are five equal columns on 960×540 until `examine_estante_consulta.webp` is calibrated.
 */

import type { DialogueLine, PointTargetContradiction } from '../../../types/index.js';
import { CASE5_CLIMAX_STAGE3_POINT_SUCCESS } from './climax_stage3_success.js';

const ZONE_FAIL = (text: string): DialogueLine[] => [
  { speaker: 'JUEZ', pose: 'judge_thinking', text, sfx: 'damage' }
];

export const CASE5_CLIMAX_STAGE3_POINT: PointTargetContradiction = {
  targetEvidenceId: 'estante_consulta',
  promptQuestion: 'Señala lo que no debería estar en ese estante.',
  imageAsset: 'assets/examine_estante_consulta.webp',
  zones: [
    { id: 'tomo_i', bounds: [2, 18, 20, 82], isCorrect: false, failureDialogue: ZONE_FAIL('Ése es el Tomo I, licenciado, y está donde debe. Mire la fila entera antes de señalar.') },
    { id: 'cartoncitos', bounds: [21, 18, 39, 82], isCorrect: false, failureDialogue: ZONE_FAIL('Los cartoncitos llevan ahí once años, licenciado. Los puso el conserje y los repinta cada enero.') },
    { id: 'lomo_11', bounds: [40, 18, 58, 82], isCorrect: true, failureDialogue: [] },
    { id: 'hueco_13', bounds: [59, 18, 77, 82], isCorrect: false, failureDialogue: ZONE_FAIL('Ese hueco lleva vacío desde 1971 y de él vamos a hablar dentro de un minuto, licenciado. Pero yo le pregunté qué hay de más, no qué falta.') },
    { id: 'zoclo', bounds: [78, 18, 98, 82], isCorrect: false, failureDialogue: ZONE_FAIL('Ahí no hay más que polvo de once años, licenciado, y el polvo no sube escaleras.') }
  ],
  successDialogue: CASE5_CLIMAX_STAGE3_POINT_SUCCESS
};
