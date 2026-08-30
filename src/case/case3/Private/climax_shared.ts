// @Architecture(descriptionShort="Shared Case 3 four-stage climax present targets", type="util", icon="layers")
/**
 * Builds the Case 3 climax shell so ES/EN scripts share present targets.
 */

import type { ChoicePrompt, ClimaxDefinition, DialogueLine } from '../../../types/index.js';

const WAITING_ROOM_BG = 'assets/bg_waiting_room.jpg';

export function assembleCase3Climax(lines: {
  dialogue: DialogueLine[];
  stage1: DialogueLine[];
  stage2: DialogueLine[];
  stage3: DialogueLine[];
  stage4: DialogueLine[];
  choices: ChoicePrompt[];
  verdict: DialogueLine[];
  epilogue: DialogueLine[];
}): ClimaxDefinition {
  return {
    dialogue: lines.dialogue,
    presentTarget: ['programa_kermes'],
    stages: [
      { presentTarget: ['programa_kermes'], successDialogue: lines.stage1 },
      { presentTarget: ['cinta_salud'], successDialogue: lines.stage2 },
      { presentTarget: ['cinta_sketch'], successDialogue: lines.stage3 },
      {
        presentTarget: ['boleta_empeno', 'libro_verde', 'microfono_oro'],
        requiredUpdateStage: { microfono_oro: 2 },
        successDialogue: lines.stage4
      }
    ],
    choices: lines.choices,
    verdict: lines.verdict,
    epilogue: { bg: WAITING_ROOM_BG, dialogue: lines.epilogue }
  };
}
