// @Architecture(descriptionShort="Opening presents, follow-up presents, and point-target contradictions", type="controller", icon="panel")
/**
 * Testimony present routing for [[./TrialController.ts]]: openingPresent, followUp, pointTarget.
 */

import type {
  ContradictionFollowUp, ContradictionRule, DialogueLine, EvidenceId, OpeningPresent,
  PointTargetContradiction
} from '../../types/index.js';
import { closePresentPoint, startPresentPoint } from './PresentPoint.js';
import { visibleStatements } from './StatementUnlock.js';
import { getActiveTrial } from './TrialDayRouter.js';
import { advanceAfterContradiction, onPresentPenalty } from './TrialOutcome.js';
import type { PenaltyHost } from './TrialPenalty.js';
import type { TrialController } from './TrialController.js';

interface PresentPending {
  opening?: OpeningPresent;
  followUp?: ContradictionFollowUp;
}

interface RuleSuccessConfig {
  successDialogue: DialogueLine[];
  pointTarget?: PointTargetContradiction;
  afterDone: () => void;
}

const pending = new WeakMap<TrialController, PresentPending>();

function slot(ctrl: TrialController): PresentPending {
  let p = pending.get(ctrl);
  if (!p) {
    p = {};
    pending.set(ctrl, p);
  }
  return p;
}

export function hasPendingTrialPresent(ctrl: TrialController): boolean {
  const p = pending.get(ctrl);
  return Boolean(p?.opening || p?.followUp);
}

export function getTrialPresentPrompt(ctrl: TrialController): string | null {
  return pending.get(ctrl)?.opening?.prompt ?? null;
}

export function afterTrialIntro(ctrl: TrialController): void {
  closePresentPoint(ctrl.deps.dom);
  pending.set(ctrl, {});
  const opening = getActiveTrial(ctrl.script, ctrl.deps.state.trialDay).openingPresent;
  if (!opening) {
    ctrl.startTestimony('testimony1');
    return;
  }
  slot(ctrl).opening = opening;
  ctrl.hideControls();
  ctrl.deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
}

export function handleTestimonyPresent(ctrl: TrialController, evidenceId: EvidenceId): void {
  if (tryOpeningPresent(ctrl, evidenceId)) return;
  if (tryFollowUpPresent(ctrl, evidenceId)) return;
  if (ctrl.phase !== 'TESTIMONY') return;
  presentCurrentContradiction(ctrl, evidenceId);
}

function reopenRecord(ctrl: TrialController): () => void {
  return /*reopenCourtRecord*/ () => ctrl.deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
}

function penaltyHost(ctrl: TrialController): PenaltyHost {
  return { ...ctrl.deps, onRestartTrial: () => ctrl.restartAfterGameOver() };
}

function tryOpeningPresent(ctrl: TrialController, evidenceId: EvidenceId): boolean {
  const opening = pending.get(ctrl)?.opening;
  if (!opening) return false;
  if (!opening.evidence.includes(evidenceId)) {
    onPresentPenalty(ctrl, reopenRecord(ctrl));
    return true;
  }
  delete slot(ctrl).opening;
  ctrl.hideControls();
  ctrl.deps.onQueueDialogue(opening.successDialogue, /*startT1*/ () => {
    ctrl.startTestimony('testimony1');
  });
  return true;
}

function tryFollowUpPresent(ctrl: TrialController, evidenceId: EvidenceId): boolean {
  const followUp = pending.get(ctrl)?.followUp;
  if (!followUp) return false;
  if (!followUp.evidence.includes(evidenceId)) {
    onPresentPenalty(ctrl, reopenRecord(ctrl));
    return true;
  }
  delete slot(ctrl).followUp;
  beginRuleSuccess(ctrl, {
    successDialogue: followUp.successDialogue,
    pointTarget: followUp.pointTarget,
    afterDone: () => advanceAfterContradiction(ctrl)
  });
  return true;
}

function presentCurrentContradiction(ctrl: TrialController, evidenceId: EvidenceId): void {
  const rule = currentContradiction(ctrl);
  if (!rule?.evidence.includes(evidenceId)) {
    onPresentPenalty(ctrl);
    return;
  }
  beginRuleSuccess(ctrl, {
    successDialogue: rule.successDialogue,
    pointTarget: rule.pointTarget,
    afterDone: () => afterContradictionSuccess(ctrl, rule)
  });
}

function afterContradictionSuccess(ctrl: TrialController, rule: ContradictionRule): void {
  if (!rule.followUp) {
    advanceAfterContradiction(ctrl);
    return;
  }
  slot(ctrl).followUp = rule.followUp;
  ctrl.hideControls();
  ctrl.deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
}

function currentContradiction(ctrl: TrialController): ContradictionRule | undefined {
  if (!ctrl.currentTestimony) return undefined;
  const pressed = new Set(ctrl.getTrialSnapshot().pressedStatementIds);
  const visible = visibleStatements(ctrl.currentTestimony, pressed);
  return visible[ctrl.currentStatementIdx]?.contradiction;
}

function beginRuleSuccess(ctrl: TrialController, config: RuleSuccessConfig): void {
  ctrl.hideControls();
  const play = /*queueParentSuccess*/ () => {
    ctrl.deps.onQueueDialogue(config.successDialogue, config.afterDone);
  };
  if (!config.pointTarget) {
    play();
    return;
  }
  startPresentPoint({ deps: penaltyHost(ctrl), pointTarget: config.pointTarget, onSuccess: play });
}
