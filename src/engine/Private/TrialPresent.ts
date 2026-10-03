// @Architecture(descriptionShort="Opening presents, follow-up presents, and point-target contradictions", type="controller", icon="panel")
/**
 * Testimony present routing for [[./TrialController.ts]]: openingPresent, followUp, deflects.
 */

import type { ContradictionRule, EvidenceId, OpeningPresent } from '../../types/index.js';
import { i18n } from '../../i18n/index.js';
import { closePresentPoint } from './PresentPoint.js';
import { getActiveTrial } from './TrialDayRouter.js';
import { currentVisibleStatement, tryDeflect, tryPresentDeflect } from './TrialDeflect.js';
import { advanceAfterContradiction, onPresentPenalty } from './TrialOutcome.js';
import type { TrialController } from './TrialController.js';
import { pending, slot } from './TrialPresentPending.js';
import { beginRuleSuccess, reopenRecord } from './TrialRuleSuccess.js';
import { tryFollowUpPresent, resumePendingPresent } from './TrialFollowUp.js';
export { snapshotPendingPresent, restorePendingPresent, hasPendingTrialPresent, getTrialPresentPrompt,
  rebindTrialPresentScript, getPendingTrialProfile, getPendingOpening } from './TrialPresentPending.js';
export { resumeSequence, resumePendingPresent, resolveTrialProfile, resolveTrialChoice } from './TrialFollowUp.js';

export function resumeContradiction(ctrl: TrialController): void {
  const rule = currentVisibleStatement(ctrl)?.contradiction;
  if (rule) afterContradictionSuccess(ctrl, rule);
}

/** The opening slot the court is waiting on, if any. Used by [[./ProfilePresent.ts]]. */

/** Accepts the opening present and moves on to the day's first testimony. */
export function resolveOpeningPresent(ctrl: TrialController, opening: OpeningPresent): void {
  delete slot(ctrl).opening;
  ctrl.hideControls();
  ctrl.deps.onQueueDialogue(opening.successDialogue, /*startT1*/ () => {
    ctrl.startTestimony(0);
  }, { kind: 'testimony', index: 0 });
}

export function openingPenalty(ctrl: TrialController): void {
  onPresentPenalty(ctrl, reopenRecord(ctrl), { allowPressHint: false });
}

export function afterTrialIntro(ctrl: TrialController): void {
  closePresentPoint(ctrl.deps.dom);
  pending.set(ctrl, {});
  const opening = getActiveTrial(ctrl.script, ctrl.deps.state.trialDay).openingPresent;
  if (!opening) {
    ctrl.startTestimony(0);
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

function tryOpeningPresent(ctrl: TrialController, evidenceId: EvidenceId): boolean {
  const opening = pending.get(ctrl)?.opening;
  if (!opening) return false;
  if (!opening.evidence?.includes(evidenceId)) {
    onPresentPenalty(ctrl, reopenRecord(ctrl), { allowPressHint: false });
    return true;
  }
  resolveOpeningPresent(ctrl, opening);
  return true;
}

function presentCurrentContradiction(ctrl: TrialController, evidenceId: EvidenceId): void {
  const statement = currentVisibleStatement(ctrl);
  const rule = statement?.contradiction;
  if (rule?.evidence?.includes(evidenceId)) {
    if (rule.requiresExamine && !ctrl.deps.state.isEvidenceExamined(rule.requiresExamine)) {
      queueExamineRequirement(ctrl);
      return;
    }
    beginRuleSuccess(ctrl, {
      successDialogue: rule.successDialogue,
      pointTarget: rule.pointTarget,
      afterDone: () => afterContradictionSuccess(ctrl, rule),
      next: { kind: 'contradiction' }
    });
    return;
  }
  // A plausible present can either be harmlessly premature or a scripted
  // witness denial that still costs a penalty.
  if (tryDeflect(ctrl, statement, evidenceId)) return;
  if (tryPresentDeflect(ctrl, evidenceId)) return;
  onPresentPenalty(ctrl);
}

function queueExamineRequirement(ctrl: TrialController): void {
  ctrl.hideControls();
  const speaker = i18n.getLanguage() === 'en' ? 'EXAMINE MODE' : 'MODO EXAMINAR';
  ctrl.deps.onQueueDialogue(
    [{ speaker, text: i18n.t.trialExamineRequired, instant: true }],
    reopenRecord(ctrl), { kind: 'present' }
  );
}

function afterContradictionSuccess(ctrl: TrialController, rule: ContradictionRule): void {
  if (rule.followUp?.deduction) {
    pending.set(ctrl, {});
    ctrl.startDeduction(rule.followUp.deduction.id);
    return;
  }
  if (!rule.followUp) {
    advanceAfterContradiction(ctrl);
    return;
  }
  slot(ctrl).followUp = rule.followUp;
  slot(ctrl).sequenceIndex = 0;
  ctrl.hideControls();
  if (rule.followUp.sequence?.[0]?.choice) {
    resumePendingPresent(ctrl);
  } else {
    ctrl.deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
  }
}
