// @Architecture(descriptionShort="Trial contradiction outcomes and penalties", type="util", icon="panel")
/**
 * Contradiction success and penalty flows for [[./TrialController.ts]].
 */

import { ModalManager } from './ModalManager.js';
import { applyAdjournment, getActiveTrial, shouldAdjourn } from './TrialDayRouter.js';
import { applyPenaltyEffects, queuePenaltyDialogue } from './TrialPenalty.js';
import { maybeQueuePressHint } from './TrialPressFlow.js';
import type { TrialController } from './TrialController.js';

export function advanceAfterContradiction(ctrl: TrialController): void {
  const current = ctrl.getTestimonyIndex();
  const testimonies = getActiveTrial(ctrl.script, ctrl.deps.state.trialDay).testimonies;
  if (current !== null && current + 1 < testimonies.length) return ctrl.startTestimony(current + 1);
  if (shouldAdjourn(ctrl.script, ctrl.deps.state.trialDay)) return adjournToInvestigation(ctrl);
  ctrl.startClimax();
}

function adjournToInvestigation(ctrl: TrialController): void {
  const adjournment = applyAdjournment(ctrl.deps.state, ctrl.script);
  if (!adjournment) return ctrl.startClimax();
  refreshHealthUI(ctrl);
  ctrl.phase = 'IDLE';
  ctrl.clearActiveTestimony();
  ctrl.deps.onAdjourn?.(adjournment.nextLocation);
}

function refreshHealthUI(ctrl: TrialController): void {
  ModalManager.updateHealthUI(
    ctrl.deps.dom.healthBarEl,
    ctrl.deps.state.health,
    ctrl.deps.state.maxHealth
  );
}

export function onPresentPenalty(ctrl: TrialController, onResume?: () => void): void {
  const failedCount = ctrl.bumpFailedPresentCount();
  applyPenaltyEffects(ctrl.deps);
  ctrl.hideControls();
  if (ctrl.deps.state.gameOver) return queueGuiltyVerdict(ctrl);
  const resume = onResume ?? (() => ctrl.renderCurrentStatement());
  if (maybeQueuePressHint(
    ctrl.currentTestimony,
    failedCount,
    ctrl.deps.onQueueDialogue,
    resume
  )) return;
  queuePenaltyDialogue(
    { ...ctrl.deps, guiltyDialogue: ctrl.script.trial.climax.guiltyDialogue },
    /*onResume*/ resume
  );
}

/** A press hint must never replace the verdict: game over always plays the guilty block. */
function queueGuiltyVerdict(ctrl: TrialController): void {
  queuePenaltyDialogue(
    { ...ctrl.deps, guiltyDialogue: ctrl.script.trial.climax.guiltyDialogue },
    /*onResume*/ () => showGameOverModal(ctrl)
  );
}

export function showGameOverModal(ctrl: TrialController): void {
  ctrl.hideControls();
  ctrl.deps.state.resetHealth();
  refreshHealthUI(ctrl);
  ctrl.startTrial();
}
