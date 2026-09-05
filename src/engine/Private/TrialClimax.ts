// @Architecture(descriptionShort="Queues climax verdict then waiting-room epilogue", type="controller", icon="dialog")
/**
 * Correct-climax victory: courtroom confetti, then a fade into the waiting room.
 */

import type { ClimaxDefinition, DialogueLine, EvidenceId } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { applyClimaxPresentPrompt } from './ClimaxPresentPrompt.js';
import { isPresentPointOpen } from './PresentPoint.js';
import {
  choiceOpenSession, openClimaxChoice, queueClimaxCelebration,
  resolveClimaxChoice, restoreClimaxSession, type ClimaxRestoreCtx
} from './TrialChoice.js';
import {
  getClimaxStages, presentClimaxEvidence,
  type ClimaxControllerPort
} from './TrialClimaxPresent.js';
import type { TrialControllerDeps } from './TrialController.js';

export type { ClimaxControllerPort } from './TrialClimaxPresent.js';

interface ClimaxQueueDeps {
  dom: DomElements;
  onQueueDialogue: (dialogue: DialogueLine[], onComplete?: () => void) => void;
}

function buildClimaxCtx(ctrl: ClimaxControllerPort): ClimaxRestoreCtx {
  return {
    ...ctrl.deps,
    climax: ctrl.script.trial.climax,
    stageIdx: ctrl.climaxStageIdx,
    choiceIdx: ctrl.climaxChoiceIdx,
    onSelect: (id) => ctrl.handleSelectChoice(id),
    setStageIdx: (n) => { ctrl.climaxStageIdx = n; },
    setChoiceIdx: (n) => { ctrl.climaxChoiceIdx = n; },
    enterClimaxPhase: () => {
      ctrl.phase = 'CLIMAX';
      ctrl.currentTestimony = null;
      ctrl.hideControls();
    },
    onRestartTrial: () => ctrl.restartAfterGameOver()
  };
}

function openClimaxPresent(
  deps: TrialControllerDeps,
  climax: ClimaxDefinition,
  replayOpening: boolean
): void {
  deps.dom.bgEl.style.backgroundImage = "url('assets/bg_courtroom.webp')";
  deps.midiComposer.playTrack('suspense');
  if (!replayOpening) {
    deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
    return;
  }
  deps.onQueueDialogue(climax.dialogue, /*onComplete*/ () => {
    deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
  });
}

export function restoreClimaxFromSnapshot(
  ctrl: ClimaxControllerPort,
  stageIdx: number,
  choiceIdx: number | null
): void {
  restoreClimaxSession({ ...buildClimaxCtx(ctrl), stageIdx, choiceIdx });
}

export function startClimaxPhase(ctrl: ClimaxControllerPort, replayOpening: boolean): void {
  ctrl.climaxStageIdx = 0;
  ctrl.climaxChoiceIdx = null;
  ctrl.climaxResolved = false;
  ctrl.phase = 'CLIMAX';
  ctrl.currentTestimony = null;
  ctrl.hideControls();
  applyClimaxPresentPrompt(ctrl.deps.dom, null);
  openClimaxPresent(ctrl.deps, ctrl.script.trial.climax, replayOpening);
}

export function handleClimaxEvidencePresent(ctrl: ClimaxControllerPort, evidenceId: EvidenceId): void {
  presentClimaxEvidence(ctrl, evidenceId);
}

export function resolveClimaxChoiceFromController(ctrl: ClimaxControllerPort, optionId: string): void {
  if (ctrl.phase !== 'CLIMAX' || ctrl.climaxChoiceIdx == null) return;
  ctrl.climaxChoiceIdx = resolveClimaxChoice(
    { climax: ctrl.script.trial.climax, choiceIdx: ctrl.climaxChoiceIdx, optionId },
    buildClimaxCtx(ctrl),
    (id) => ctrl.handleSelectChoice(id)
  );
  if (ctrl.climaxChoiceIdx == null) ctrl.climaxResolved = true;
}

export function rebindClimaxChoiceModal(ctrl: ClimaxControllerPort): void {
  if (ctrl.phase !== 'CLIMAX' || ctrl.climaxChoiceIdx == null) return;
  openClimaxChoice(choiceOpenSession(
    ctrl.deps,
    ctrl.script.trial.climax,
    ctrl.climaxChoiceIdx,
    (id) => ctrl.handleSelectChoice(id)
  ));
}

// fallow-ignore-next-line unused-export
export { celebrateClimax, queueClimaxCelebration } from './TrialChoice.js';

export function isAwaitingClimaxEvidence(ctrl: ClimaxControllerPort): boolean {
  if (isPresentPointOpen(ctrl.deps.dom)) return false;
  return ctrl.phase === 'CLIMAX' && ctrl.climaxChoiceIdx == null && !ctrl.climaxResolved;
}

export function getClimaxPresentPrompt(ctrl: ClimaxControllerPort): string | null {
  if (!isAwaitingClimaxEvidence(ctrl)) return null;
  const stages = getClimaxStages(ctrl.script.trial.climax);
  return stages[ctrl.climaxStageIdx]?.prompt ?? null;
}

// fallow-ignore-next-line unused-export
export function queueClimaxVictory(climax: ClimaxDefinition, deps: ClimaxQueueDeps): void {
  queueClimaxCelebration(climax.verdict, climax, deps);
}
