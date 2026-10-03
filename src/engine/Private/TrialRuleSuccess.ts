// @Architecture(descriptionShort="Runs contradiction dialogue and optional point-target sequences")
import type { DialogueContinuation, DialogueLine, PointTargetContradiction } from '../../types/index.js';
import { startPresentPoint } from './PresentPoint.js';
import type { PenaltyHost } from './TrialPenalty.js';
import type { TrialController } from './TrialController.js';

export interface RuleSuccessConfig {
  successDialogue: DialogueLine[];
  pointTarget?: PointTargetContradiction;
  afterDone: () => void;
  next: DialogueContinuation;
}

export function reopenRecord(ctrl: TrialController): () => void {
  return /*reopenCourtRecord*/ () => ctrl.deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
}

function penaltyHost(ctrl: TrialController): PenaltyHost {
  return {
    ...ctrl.deps,
    testimony: ctrl.currentTestimony,
    onRestartTrial: () => ctrl.restartAfterGameOver(),
    guiltyDialogue: ctrl.script.trial.climax.guiltyDialogue
  };
}

export function beginRuleSuccess(ctrl: TrialController, config: RuleSuccessConfig): void {
  ctrl.hideControls();
  const play = /*queueParentSuccess*/ () => {
    ctrl.deps.onQueueDialogue(config.successDialogue, config.afterDone, config.next);
  };
  if (!config.pointTarget) {
    play();
    return;
  }
  startPresentPoint({ deps: penaltyHost(ctrl), pointTarget: config.pointTarget, onSuccess: play,
    next: { kind: 'dialogue', lines: config.successDialogue, next: config.next } });
}
