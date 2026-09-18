// @Architecture(descriptionShort="English Case 5 climax stage 3 shelf point zones", type="data", icon="layers")
/**
 * Case 5 climax EN — Point 2 on estante_consulta (spec §18.3).
 * Point-zone bounds are five equal columns on 960x540 until examine_estante_consulta.webp is calibrated.
 */

import type { DialogueLine, PointTargetContradiction } from '../../../types/index.js';
import { CASE5_CLIMAX_STAGE3_POINT_SUCCESS_EN } from './climax_stage3_success_en.js';

const ZONE_FAIL = (text: string): DialogueLine[] => [
  { speaker: 'JUEZ', pose: 'judge_thinking', text, sfx: 'damage' }
];

export const CASE5_CLIMAX_STAGE3_POINT_EN: PointTargetContradiction = {
  targetEvidenceId: 'estante_consulta',
  promptQuestion: 'Point to what should not be on that shelf.',
  imageAsset: 'assets/examine_estante_consulta.webp',
  zones: [
    { id: 'tomo_i', bounds: [2, 18, 20, 82], isCorrect: false, failureDialogue: ZONE_FAIL('That is Volume I, counselor, and it is where it belongs. Look at the whole row before you point.') },
    { id: 'cartoncitos', bounds: [21, 18, 39, 82], isCorrect: false, failureDialogue: ZONE_FAIL('Those cardboard tabs have been there eleven years, counselor. The janitor put them up and repaints them every January.') },
    { id: 'lomo_11', bounds: [40, 18, 58, 82], isCorrect: true, failureDialogue: [] },
    { id: 'hueco_13', bounds: [59, 18, 77, 82], isCorrect: false, failureDialogue: ZONE_FAIL('That gap has been empty since 1971 and we will talk about it in a minute, counselor. But I asked what is extra, not what is missing.') },
    { id: 'zoclo', bounds: [78, 18, 98, 82], isCorrect: false, failureDialogue: ZONE_FAIL('There is nothing there but eleven years of dust, counselor, and dust does not climb stairs.') }
  ],
  successDialogue: CASE5_CLIMAX_STAGE3_POINT_SUCCESS_EN
};
