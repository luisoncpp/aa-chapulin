// @Architecture(descriptionShort="Case 3 climax, breakdown, verdict, and epilogue", type="data", icon="layers")
/**
 * Case 3 Final Climax, Verdict, and Waiting-Room Epilogue.
 */

import type { ClimaxDefinition } from '../../../types/index.js';
import { CASE3_CLIMAX_CHOICES } from './climax_choices.js';
import { CASE3_EPILOGUE } from './climax_epilogue.js';
import { assembleCase3Climax } from './climax_shared.js';
import {
  CASE3_CLIMAX_STAGE1,
  CASE3_CLIMAX_STAGE2,
  CASE3_CLIMAX_STAGE3,
  CASE3_CLIMAX_STAGE4
} from './climax_stage_success.js';

const VERDICT_LINES: typeof CASE3_CLIMAX_CHOICES[number]['successDialogue'] =
  CASE3_CLIMAX_CHOICES[1].successDialogue;

export const CASE3_CLIMAX: ClimaxDefinition = assembleCase3Climax({
  dialogue: [
    { speaker: 'JUEZ', text: 'Licenciado Monchito, este tribunal ya no discute si su cliente es inocente. Discute quién es culpable. Y para eso hacen falta cuatro cosas: cuándo se grabó, dónde se grabó, quién podía grabarlo y por qué.', bgm: 'suspense', pose: 'judge_thinking' },
    { speaker: 'DEFENSA', text: '(Cuatro clavos, Monchito. Uno por uno, y sin fallar ninguno.)', pose: 'donramon_idle' },
    { speaker: 'CHAPULIN', text: '¡Ánimo, Monchito! ¡Que no panda el cúnico!', pose: 'chapulin_point' }
  ],
  stage1: CASE3_CLIMAX_STAGE1,
  stage2: CASE3_CLIMAX_STAGE2,
  stage3: CASE3_CLIMAX_STAGE3,
  stage4: CASE3_CLIMAX_STAGE4,
  prompts: [
    '¿CUÁNDO se grabó el grito?',
    '¿DÓNDE se grabó? (y por qué no pudo ser el acusado)',
    '¿QUIÉN podía hacer esa voz?',
    '¿POR QUÉ?'
  ],
  choices: CASE3_CLIMAX_CHOICES,
  verdict: VERDICT_LINES,
  epilogue: CASE3_EPILOGUE
});
