// @Architecture(descriptionShort="Shared Case 3 four-stage climax present targets", type="util", icon="layers")
/**
 * Builds the Case 3 climax shell so ES/EN scripts share present targets.
 */

import type { ChoicePrompt, ClimaxDefinition, DialogueLine } from '../../../types/index.js';

const WAITING_ROOM_BG = 'assets/bg_waiting_room.webp';

export function assembleCase3Climax(lines: {
  dialogue: DialogueLine[];
  stage1: DialogueLine[];
  stage2: DialogueLine[];
  stage3: DialogueLine[];
  stage4: DialogueLine[];
  prompts: [string, string, string, string];
  choices: ChoicePrompt[];
  verdict: DialogueLine[];
  epilogue: DialogueLine[];
}): ClimaxDefinition {
  const p = lines.prompts;
  return {
    dialogue: lines.dialogue,
    presentTarget: ['programa_kermes'],
    stages: [
      { presentTarget: ['programa_kermes'], successDialogue: lines.stage1, prompt: p[0] },
      { presentTarget: ['cinta_salud'], successDialogue: lines.stage2, prompt: p[1] },
      { presentTarget: ['cinta_sketch'], successDialogue: lines.stage3, prompt: p[2] },
      {
        presentTarget: ['boleta_empeno', 'libro_verde', 'microfono_oro'],
        requiredUpdateStage: { microfono_oro: 2 },
        successDialogue: lines.stage4,
        prompt: p[3]
      }
    ],
    choices: lines.choices,
    verdict: lines.verdict,
    epilogue: { bg: WAITING_ROOM_BG, dialogue: lines.epilogue }
  };
}
