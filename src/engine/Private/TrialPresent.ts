// @Architecture(descriptionShort="Opening presents, follow-up presents, and point-target contradictions", type="controller", icon="panel")
/**
 * Testimony present routing for [[./TrialController.ts]]: openingPresent, followUp, deflects.
 */

import type {
  ContradictionFollowUp, ContradictionRule, DialogueLine, EvidenceId, OpeningPresent,
  PointTargetContradiction, ProfileId, TrialPresentStep
} from '../../types/index.js';
import { i18n } from '../../i18n/index.js';
import { closePresentPoint, startPresentPoint } from './PresentPoint.js';
import { getActiveTrial } from './TrialDayRouter.js';
import { currentVisibleStatement, tryDeflect, tryPresentDeflect } from './TrialDeflect.js';
import { advanceAfterContradiction, onPresentPenalty } from './TrialOutcome.js';
import type { PenaltyHost } from './TrialPenalty.js';
import type { TrialController } from './TrialController.js';
import { ModalManager } from './ModalManager.js';

interface PresentPending {
  opening?: OpeningPresent;
  followUp?: ContradictionFollowUp;
  sequenceIndex?: number;
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
  return Boolean(p?.opening || (p?.followUp && !currentFollowUpStep(p)?.choice));
}

export function getTrialPresentPrompt(ctrl: TrialController): string | null {
  const p = pending.get(ctrl);
  if (!p) return null;
  if (p.opening) return p.opening.prompt ?? null;
  if (p.followUp) {
    const step = currentFollowUpStep(p);
    return step?.prompt ?? step?.choice?.question ?? p.followUp.prompt ?? null;
  }
  return null;
}

function currentFollowUpStep(p: PresentPending): TrialPresentStep | undefined {
  if (!p.followUp?.sequence) return undefined;
  return p.followUp.sequence[p.sequenceIndex ?? 0];
}

function rebindOpeningScript(ctrl: TrialController, p: PresentPending): void {
  const active = getActiveTrial(ctrl.script, ctrl.deps.state.trialDay).openingPresent;
  if (active) p.opening = active;
}

function rebindFollowUpScript(ctrl: TrialController, p: PresentPending): void {
  const rule = currentVisibleStatement(ctrl)?.contradiction;
  if (rule?.followUp) p.followUp = rule.followUp;
}

export function rebindTrialPresentScript(ctrl: TrialController): void {
  const p = pending.get(ctrl);
  if (!p) return;
  if (p.opening) rebindOpeningScript(ctrl, p);
  if (p.followUp) {
    rebindFollowUpScript(ctrl, p);
    const choice = currentFollowUpStep(p)?.choice;
    if (choice) ModalManager.openChoiceModal(ctrl.deps.dom, choice, (id) => resolveTrialChoice(ctrl, id));
  }
}

export function getPendingTrialProfile(ctrl: TrialController): ProfileId[] | undefined {
  const p = pending.get(ctrl);
  if (!p?.followUp) return undefined;
  return currentFollowUpStep(p)?.profileTarget ?? p.followUp.profileTarget;
}

/** The opening slot the court is waiting on, if any. Used by [[./ProfilePresent.ts]]. */
export function getPendingOpening(ctrl: TrialController): OpeningPresent | undefined {
  return pending.get(ctrl)?.opening;
}

/** Accepts the opening present and moves on to the day's first testimony. */
export function resolveOpeningPresent(ctrl: TrialController, opening: OpeningPresent): void {
  delete slot(ctrl).opening;
  ctrl.hideControls();
  ctrl.deps.onQueueDialogue(opening.successDialogue, /*startT1*/ () => {
    ctrl.startTestimony(0);
  });
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

function reopenRecord(ctrl: TrialController): () => void {
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

function tryFollowUpPresent(ctrl: TrialController, evidenceId: EvidenceId): boolean {
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
    afterDone: () => advanceAfterContradiction(ctrl)
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
    }
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
      afterDone: () => advanceAfterContradiction(ctrl)
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
    });
    return true;
  }
  ctrl.deps.onQueueDialogue(choice.successDialogue, () => {
    const followUp = pending.get(ctrl)?.followUp;
    if (!followUp?.sequence) return;
    const next = (pending.get(ctrl)?.sequenceIndex ?? 0) + 1;
    pending.get(ctrl)!.sequenceIndex = next;
    beginSequenceStep(ctrl);
  });
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
      afterDone: () => afterContradictionSuccess(ctrl, rule)
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
    reopenRecord(ctrl)
  );
}

function afterContradictionSuccess(ctrl: TrialController, rule: ContradictionRule): void {
  if (!rule.followUp) {
    advanceAfterContradiction(ctrl);
    return;
  }
  slot(ctrl).followUp = rule.followUp;
  slot(ctrl).sequenceIndex = 0;
  ctrl.hideControls();
  if (rule.followUp.sequence?.[0]?.choice) {
    beginSequenceStep(ctrl);
  } else {
    ctrl.deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
  }
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
