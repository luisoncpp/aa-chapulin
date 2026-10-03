// @Architecture(descriptionShort="Routes follow-up answers and advances question sequences")
import type { EvidenceId, ProfileId, TrialPresentStep } from '../../types/index.js';
import type { TrialController } from './TrialController.js';
import { pending, slot, currentFollowUpStep, type PresentPending } from './TrialPresentPending.js';
import { beginRuleSuccess, reopenRecord } from './TrialRuleSuccess.js';
import { advanceAfterContradiction, onPresentPenalty } from './TrialOutcome.js';
import { ModalManager } from './ModalManager.js';

export function resumeSequence(ctrl: TrialController): void {
  const p = slot(ctrl);
  p.sequenceIndex = (p.sequenceIndex ?? 0) + 1;
  if (p.sequenceIndex < (p.followUp?.sequence?.length ?? 0)) return beginSequenceStep(ctrl);
  pending.set(ctrl, {});
  advanceAfterContradiction(ctrl);
}

export function resumePendingPresent(ctrl: TrialController): void {
  if (slot(ctrl).followUp?.sequence) return beginSequenceStep(ctrl);
  ctrl.hideControls();
  ctrl.deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
}

export function tryFollowUpPresent(ctrl: TrialController, evidenceId: EvidenceId): boolean {
  const p = pending.get(ctrl);
  const followUp = p?.followUp;
  if (!followUp) return false;
  const step = currentFollowUpStep(p!);
  const accepted = step ? step.evidence?.includes(evidenceId) : followUp.evidence?.includes(evidenceId);
  if (!accepted) {
    onPresentPenalty(ctrl, reopenRecord(ctrl), { allowPressHint: false });
    return true;
  }
  if (step) {
    completeSequenceStep(ctrl, p!, step);
    return true;
  }
  delete slot(ctrl).followUp;
  beginRuleSuccess(ctrl, {
    successDialogue: followUp.successDialogue,
    pointTarget: followUp.pointTarget,
    afterDone: () => advanceAfterContradiction(ctrl),
    next: { kind: 'advance' }
  });
  return true;
}

function completeSequenceStep(ctrl: TrialController, p: PresentPending, step: TrialPresentStep): void {
  const followUp = p.followUp!;
  const next = (p.sequenceIndex ?? 0) + 1;
  const isLast = next >= (followUp.sequence?.length ?? 0);
  beginRuleSuccess(ctrl, {
    successDialogue: step.successDialogue,
    afterDone: () => {
      if (isLast) {
        delete slot(ctrl).followUp;
        delete slot(ctrl).sequenceIndex;
        advanceAfterContradiction(ctrl);
        return;
      }
      slot(ctrl).sequenceIndex = next;
      beginSequenceStep(ctrl);
    },
    next: { kind: 'sequence' }
  });
}

function beginSequenceStep(ctrl: TrialController): void {
  const p = pending.get(ctrl);
  const step = p ? currentFollowUpStep(p) : undefined;
  if (!step) return;
  if (step.choice) {
    ctrl.hideControls();
    ModalManager.openChoiceModal(ctrl.deps.dom, step.choice, (id) => resolveTrialChoice(ctrl, id));
    return;
  }
  ctrl.hideControls();
  ctrl.deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
}

export function resolveTrialProfile(ctrl: TrialController, profileId: ProfileId): boolean {
  const p = pending.get(ctrl);
  const step = p ? currentFollowUpStep(p) : undefined;
  const target = step?.profileTarget ?? p?.followUp?.profileTarget;
  if (!target) return false;
  if (!target.includes(profileId)) {
    onPresentPenalty(ctrl, reopenRecord(ctrl), { allowPressHint: false });
    return true;
  }
  if (!step) {
    const followUp = p!.followUp!;
    delete slot(ctrl).followUp;
    beginRuleSuccess(ctrl, {
      successDialogue: followUp.successDialogue,
      pointTarget: followUp.pointTarget,
      afterDone: () => advanceAfterContradiction(ctrl),
      next: { kind: 'advance' }
    });
    return true;
  }
  completeSequenceStep(ctrl, p!, step);
  return true;
}

export function resolveTrialChoice(ctrl: TrialController, optionId: string): boolean {
  const p = pending.get(ctrl);
  const step = p ? currentFollowUpStep(p) : undefined;
  const choice = step?.choice;
  if (!choice) return false;
  if (optionId !== choice.correctId) {
    ctrl.deps.onQueueDialogue(choice.failDialogue, () => {
      ModalManager.openChoiceModal(ctrl.deps.dom, choice, (id) => resolveTrialChoice(ctrl, id));
    }, { kind: 'present' });
    return true;
  }
  ctrl.deps.onQueueDialogue(choice.successDialogue, () => {
    const followUp = pending.get(ctrl)?.followUp;
    if (!followUp?.sequence) return;
    const next = (pending.get(ctrl)?.sequenceIndex ?? 0) + 1;
    pending.get(ctrl)!.sequenceIndex = next;
    beginSequenceStep(ctrl);
  }, { kind: 'sequence' });
  return true;
}
