// @Architecture(descriptionShort="Case 5 climax stage 3 estante point zones", type="data", icon="layers")
/**
 * Case 5 climax — Señalamiento 2 on estante_consulta (spec §18.3).
 * Point-zone bounds measured on `examine_estante_consulta.webp` (spines, gap, base).
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
    { id: 'tomo_i', bounds: [3, 16, 18, 72], isCorrect: false, failureDialogue: ZONE_FAIL('Ése es el Tomo I, licenciado, y está donde debe. Mire la fila entera antes de señalar.') },
    { id: 'cartoncitos', bounds: [19, 16, 40, 72], isCorrect: false, failureDialogue: ZONE_FAIL('Los cartoncitos llevan ahí once años, licenciado. Los puso el conserje y los repinta cada enero.') },
    { id: 'lomo_11', bounds: [42, 12, 52, 74], isCorrect: true, failureDialogue: [] },
    { id: 'hueco_13', bounds: [52, 16, 57, 70], isCorrect: false, failureDialogue: ZONE_FAIL('Ese hueco lleva vacío desde 1971 y de él vamos a hablar dentro de un minuto, licenciado. Pero yo le pregunté qué hay de más, no qué falta.') },
    { id: 'zoclo', bounds: [4, 74, 96, 88], isCorrect: false, failureDialogue: ZONE_FAIL('Ahí no hay más que polvo de once años, licenciado, y el polvo no sube escaleras.') }
  ],
  successDialogue: CASE5_CLIMAX_STAGE3_POINT_SUCCESS
};
