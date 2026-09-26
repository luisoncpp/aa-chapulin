// @Architecture(descriptionShort="Shared Case 5 five-stage climax assembly", type="util", icon="layers")
/**
 * Builds the Case 5 climax shell so ES/EN scripts share present targets and stage order.
 */

import type {
  ChoicePrompt, ClimaxDefinition, ClimaxStage, DialogueLine
} from '../../../types/index.js';

const WAITING_ROOM_BG = 'assets/bg_waiting_room.webp';

export function assembleCase5Climax(lines: {
  dialogue: DialogueLine[];
  stage1: ClimaxStage;
  stage2: ClimaxStage;
  stage3: ClimaxStage;
  stage4: ClimaxStage;
  stage5: ClimaxStage;
  choices: ChoicePrompt[];
  verdict: DialogueLine[];
  epilogue: DialogueLine[];
}): ClimaxDefinition {
  return {
    dialogue: lines.dialogue,
    presentTarget: ['credencial_sindico'],
    stages: [
      lines.stage1,
      lines.stage2,
      lines.stage3,
      lines.stage4,
      lines.stage5
    ],
    choicesAfterStage: 2,
    choices: lines.choices,
    verdict: lines.verdict,
    epilogue: { bg: WAITING_ROOM_BG, dialogue: lines.epilogue }
  };
}
