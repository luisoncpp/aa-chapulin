// @Architecture(descriptionShort="Restores trial progression before resuming saved presentation")
import { i18n } from '../../i18n/index.js';
import type { TrialStateSnapshot } from '../../state/index.js';
import type { TrialController } from './TrialController.js';
import { rebindClimaxChoiceModal, restoreClimaxFromSnapshot } from './TrialClimax.js';
import { restorePendingPresent, resumePendingPresent } from './TrialPresent.js';
import { resetPresentPoint } from './PresentPoint.js';

export function restoreTrialFromSnapshot(ctrl: TrialController, snapshot?: TrialStateSnapshot, silent = false): void {
  ctrl.cancelDeduction();
  resetPresentPoint(ctrl.deps.dom);
  restorePendingPresent(ctrl);
  ctrl.deps.dom.investigationNavEl.classList.add('hidden');
  ctrl.deps.dom.examineNavEl.classList.add('hidden');
  ctrl.deps.dom.hotspotsContainerEl.innerHTML = '';
  ctrl.deps.dom.locationBannerEl.textContent = i18n.t.locationCourtroom;
  ctrl.resetPressedState(snapshot?.pressedStatementIds);
  ctrl.climaxResolved = false;
  if (snapshot?.trialDay) ctrl.deps.state.trialDay = snapshot.trialDay;
  if (snapshot?.phase === 'CLIMAX') return restoreClimax(ctrl, snapshot, silent);
  const index = savedTestimonyIndex(snapshot);
  if (index !== null && snapshot?.phase === 'TESTIMONY') return restoreTestimony(ctrl, { ...snapshot, testimonyIndex: index }, silent);
  if (silent || snapshot?.pendingPresent?.opening) return restoreOpening(ctrl, snapshot, silent);
  ctrl.startTrial(/*skipFade=*/ true);
}

function savedTestimonyIndex(snapshot?: TrialStateSnapshot): number | null {
  if (snapshot?.testimonyIndex !== undefined) return snapshot.testimonyIndex;
  if (snapshot?.testimonyKey === 'testimony1') return 0;
  if (snapshot?.testimonyKey === 'testimony2') return 1;
  return null;
}

function restoreClimax(ctrl: TrialController, snapshot: TrialStateSnapshot, silent: boolean): void {
  if (snapshot.deduction && ctrl.restoreDeduction(snapshot.deduction)) return;
  if (!silent && !snapshot.presentationKnown) {
    restoreClimaxFromSnapshot(/*ctrl=*/ ctrl, /*stageIdx=*/ snapshot.climaxStageIdx ?? 0,
      /*choiceIdx=*/ snapshot.climaxChoiceIdx ?? null, /*climaxResolved=*/ snapshot.climaxResolved ?? false);
    return;
  }
  ctrl.phase = 'CLIMAX';
  ctrl.currentTestimony = null;
  ctrl.climaxStageIdx = snapshot.climaxStageIdx ?? 0;
  ctrl.climaxChoiceIdx = snapshot.climaxChoiceIdx ?? null;
  ctrl.climaxResolved = snapshot.climaxResolved ?? false;
  ctrl.hideControls();
  if (silent || ctrl.climaxResolved) return;
  ctrl.deps.dom.bgEl.style.backgroundImage = "url('assets/bg_courtroom.webp')";
  ctrl.deps.midiComposer.playTrack('suspense');
  if (ctrl.climaxChoiceIdx != null) return rebindClimaxChoiceModal(ctrl);
  ctrl.deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
}

function restoreTestimony(ctrl: TrialController, snapshot: TrialStateSnapshot, silent: boolean): void {
  ctrl.startTestimony(snapshot.testimonyIndex!);
  ctrl.currentStatementIdx = snapshot.statementIdx;
  ctrl.renderCurrentStatement();
  restorePendingPresent(ctrl, snapshot.pendingPresent);
  if (silent) return ctrl.hideControls();
  if (snapshot.pendingPresent?.opening || snapshot.pendingPresent?.followUp) resumePendingPresent(ctrl);
}

function restoreOpening(ctrl: TrialController, snapshot: TrialStateSnapshot | undefined, silent: boolean): void {
  ctrl.phase = 'TESTIMONY';
  ctrl.clearActiveTestimony();
  restorePendingPresent(ctrl, snapshot?.pendingPresent);
  ctrl.hideControls();
  if (!silent) resumePendingPresent(ctrl);
}
