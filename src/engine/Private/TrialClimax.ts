// @Architecture(descriptionShort="Queues climax verdict then waiting-room epilogue", type="controller", icon="dialog")
/**
 * Correct-climax victory: courtroom confetti, then a fade into the waiting room.
 */

import { i18n } from '../../i18n/index.js';
import type { ClimaxDefinition, ClimaxEpilogue, DialogueLine } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { COURTROOM_CELEBRATION_MS, fadeThroughBlack } from './SceneFade.js';
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
    VisualEffects.triggerConfetti(deps.dom.confettiContainerEl);
    if (!climax.epilogue) return;
    scheduleWaitingRoomFade(climax.epilogue, deps);
  });
}

function scheduleWaitingRoomFade(epilogue: ClimaxEpilogue, deps: ClimaxQueueDeps): void {
  setTimeout(/*leaveCourtroom*/ () => {
    fadeThroughBlack(
      deps.dom.flashEl,
      /*onCovered*/ () => cutToWaitingRoom(epilogue, deps),
      /*onRevealed*/ () => queueEpilogue(epilogue, deps)
    );
  }, /*delayInMs=*/ COURTROOM_CELEBRATION_MS);
}

function cutToWaitingRoom(epilogue: ClimaxEpilogue, deps: ClimaxQueueDeps): void {
  VisualEffects.clearConfetti(deps.dom.confettiContainerEl);
  VisualEffects.hideFurniture(deps.dom.courtFurnitureContainerEl);
  VisualEffects.hideCharacter(deps.dom.charSpriteEl);
  deps.dom.bgEl.style.backgroundImage = `url('${epilogue.bg}')`;
  deps.dom.locationBannerEl.textContent = i18n.t.locationWaitingRoom;
}

function queueEpilogue(epilogue: ClimaxEpilogue, deps: ClimaxQueueDeps): void {
  const lines = stampEpilogueLines(epilogue.bg, epilogue.dialogue);
  deps.onQueueDialogue(lines);
}
