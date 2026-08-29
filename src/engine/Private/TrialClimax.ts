// @Architecture(descriptionShort="Queues climax verdict then waiting-room epilogue", type="controller", icon="dialog")
/**
 * Correct-climax victory sequence: courtroom verdict, optional location epilogue, confetti.
 */

import { i18n } from '../../i18n/index.js';
import type { ClimaxDefinition, ClimaxEpilogue, DialogueLine } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { VisualEffects } from './VisualEffects.js';

interface ClimaxQueueDeps {
  dom: DomElements;
  onQueueDialogue: (dialogue: DialogueLine[], onComplete?: () => void) => void;
}

function stampEpilogueLines(bg: string, lines: DialogueLine[]): DialogueLine[] {
  return lines.map((line) => ({
    ...line,
    bg: line.bg ?? bg,
    furniture: line.furniture ?? 'none'
  }));
}

export function queueClimaxVictory(climax: ClimaxDefinition, deps: ClimaxQueueDeps): void {
  deps.onQueueDialogue(climax.verdict, /*onVerdictDone*/ () => {
    if (!climax.epilogue) {
      VisualEffects.triggerConfetti(deps.dom.confettiContainerEl);
      return;
    }
    playWaitingRoomEpilogue(climax.epilogue, deps);
  });
}

function playWaitingRoomEpilogue(epilogue: ClimaxEpilogue, deps: ClimaxQueueDeps): void {
  deps.dom.bgEl.style.backgroundImage = `url('${epilogue.bg}')`;
  deps.dom.locationBannerEl.textContent = i18n.t.locationWaitingRoom;
  const lines = stampEpilogueLines(epilogue.bg, epilogue.dialogue);
  deps.onQueueDialogue(lines, /*onEpilogueDone*/ () => {
    VisualEffects.triggerConfetti(deps.dom.confettiContainerEl);
  });
}
