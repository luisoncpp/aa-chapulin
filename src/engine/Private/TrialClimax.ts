// @Architecture(descriptionShort="Queues climax verdict then waiting-room epilogue", type="controller", icon="dialog")
/**
 * Correct-climax victory: courtroom confetti, then a fade into the waiting room.
 */

import type { MidiMusicComposer } from '../../audio/index.js';
import { i18n } from '../../i18n/index.js';
import type {
  ClimaxDefinition, ClimaxEpilogue, ClimaxStage, DialogueLine, EvidenceId
} from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { COURTROOM_CELEBRATION_MS, fadeThroughBlack } from './SceneFade.js';
import { applyPenaltyEffects, type PenaltyHost } from './TrialPenalty.js';
import { VisualEffects } from './VisualEffects.js';

interface ClimaxQueueDeps {
  dom: DomElements;
  onQueueDialogue: (dialogue: DialogueLine[], onComplete?: () => void) => void;
}

interface ClimaxRunDeps extends PenaltyHost {
  midiComposer: MidiMusicComposer;
  onOpenCourtRecord: (isTrialPresent: boolean) => void;
}

function getClimaxStages(climax: ClimaxDefinition): ClimaxStage[] {
  if (climax.stages && climax.stages.length > 0) return climax.stages;
  return [{ presentTarget: climax.presentTarget, successDialogue: climax.verdict }];
}

function climaxStageMatches(
  climax: ClimaxDefinition,
  stageIdx: number,
  evidenceId: EvidenceId
): boolean {
  const stages = getClimaxStages(climax);
  const idx = Math.min(Math.max(stageIdx, 0), stages.length - 1);
  return stages[idx].presentTarget.includes(evidenceId);
}

function isFinalClimaxStage(climax: ClimaxDefinition, stageIdx: number): boolean {
  return stageIdx >= getClimaxStages(climax).length - 1;
}

export function openClimaxPresent(
  deps: ClimaxRunDeps,
  climax: ClimaxDefinition,
  replayOpening: boolean
): void {
  deps.dom.bgEl.style.backgroundImage = "url('assets/bg_courtroom.jpg')";
  deps.midiComposer.playTrack('suspense');
  if (!replayOpening) {
    deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
    return;
  }
  deps.onQueueDialogue(climax.dialogue, /*onComplete*/ () => {
    deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
  });
}

export function presentClimaxEvidence(
  session: { climax: ClimaxDefinition; stageIdx: number; evidenceId: EvidenceId },
  deps: ClimaxRunDeps
): number {
  const { climax, stageIdx, evidenceId } = session;
  if (!climaxStageMatches(climax, stageIdx, evidenceId)) {
    applyPenaltyEffects(deps);
    VisualEffects.showNotification(deps.dom.gameNotificationEl, i18n.t.notifIncorrectClue);
    deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
    return stageIdx;
  }
  if (isFinalClimaxStage(climax, stageIdx)) {
    queueClimaxVictory(climax, deps);
    return stageIdx;
  }
  const stage = getClimaxStages(climax)[stageIdx];
  deps.onQueueDialogue(stage.successDialogue, /*openNextPresent*/ () => {
    deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
  });
  return stageIdx + 1;
}

function stampEpilogueLines(bg: string, lines: DialogueLine[]): DialogueLine[] {
  return lines.map((line) => ({
    ...line,
    bg: line.bg ?? bg,
    furniture: line.furniture ?? 'none'
  }));
}

// fallow-ignore-next-line unused-export
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
