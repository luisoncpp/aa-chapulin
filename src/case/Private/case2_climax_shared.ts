// @Architecture(descriptionShort="Shared Case 2 three-stage climax present targets", type="util", icon="layers")
/**
 * Builds the Case 2 climax shell so ES/EN scripts share present targets.
 */

import type { ClimaxDefinition, DialogueLine } from '../../types/index.js';

const WAITING_ROOM_BG = 'assets/bg_waiting_room.jpg';

export function assembleCase2Climax(lines: {
  dialogue: DialogueLine[];
  goldReveal: DialogueLine[];
  chompirasAsleep: DialogueLine[];
  verdict: DialogueLine[];
  epilogue: DialogueLine[];
}): ClimaxDefinition {
  return {
    dialogue: lines.dialogue,
    presentTarget: ['lata_grasa', 'antenitas_vinil'],
    stages: [
      { presentTarget: ['lata_grasa', 'antenitas_vinil'], successDialogue: lines.goldReveal },
      { presentTarget: ['frasco_valeriana', 'aroma_dulce'], successDialogue: lines.chompirasAsleep },
      { presentTarget: ['molde_cera'], successDialogue: lines.verdict }
    ],
    verdict: lines.verdict,
    epilogue: { bg: WAITING_ROOM_BG, dialogue: lines.epilogue }
  };
}
