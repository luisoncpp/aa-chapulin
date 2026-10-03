// @Architecture(descriptionShort="Tracks opening and follow-up questions across save restores")
import type { ContradictionFollowUp, OpeningPresent, ProfileId, TrialPresentStep } from '../../types/index.js';
import type { TrialStateSnapshot } from '../../state/index.js';
import type { TrialController } from './TrialController.js';
import { getActiveTrial } from './TrialDayRouter.js';
import { currentVisibleStatement } from './TrialDeflect.js';
import { ModalManager } from './ModalManager.js';
export interface PresentPending {
  opening?: OpeningPresent;
  followUp?: ContradictionFollowUp;
  sequenceIndex?: number;
}

export const pending = new WeakMap<TrialController, PresentPending>();
export function snapshotPendingPresent(ctrl: TrialController): TrialStateSnapshot['pendingPresent'] {
  const p = pending.get(ctrl);
  return p ? { opening: Boolean(p.opening), followUp: Boolean(p.followUp), sequenceIndex: p.sequenceIndex } : undefined;
}

export function restorePendingPresent(ctrl: TrialController, snapshot?: TrialStateSnapshot['pendingPresent']): void {
  pending.set(ctrl, {});
  if (snapshot?.opening) slot(ctrl).opening = getActiveTrial(ctrl.script, ctrl.deps.state.trialDay).openingPresent;
  if (snapshot?.followUp) slot(ctrl).followUp = currentVisibleStatement(ctrl)?.contradiction?.followUp;
  slot(ctrl).sequenceIndex = snapshot?.sequenceIndex;
}

export function slot(ctrl: TrialController): PresentPending {
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

export function currentFollowUpStep(p: PresentPending): TrialPresentStep | undefined {
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
    if (choice) ModalManager.openChoiceModal(ctrl.deps.dom, choice, (id) => ctrl.handleSelectChoice(id));
  }
}

export function getPendingTrialProfile(ctrl: TrialController): ProfileId[] | undefined {
  const p = pending.get(ctrl);
  if (!p?.followUp) return undefined;
  return currentFollowUpStep(p)?.profileTarget ?? p.followUp.profileTarget;
}

export function getPendingOpening(ctrl: TrialController): OpeningPresent | undefined {
  return pending.get(ctrl)?.opening;
}
