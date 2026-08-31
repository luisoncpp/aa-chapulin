// @Architecture(descriptionShort="Trial snapshot restore for TrialController", type="util", icon="panel")
/**
 * Restores trial phase from save snapshots for [[./TrialController.ts]].
 */

import { i18n } from '../../i18n/index.js';
import type { TrialStateSnapshot } from '../../state/index.js';
import type { TrialController } from './TrialController.js';
import { restoreClimaxFromSnapshot } from './TrialClimax.js';

export function restoreTrialFromSnapshot(ctrl: TrialController, snapshot?: TrialStateSnapshot): void {
  ctrl.deps.dom.investigationNavEl.classList.add('hidden');
  ctrl.deps.dom.examineNavEl.classList.add('hidden');
  ctrl.deps.dom.hotspotsContainerEl.innerHTML = '';
  ctrl.deps.dom.locationBannerEl.textContent = i18n.t.locationCourtroom;
  ctrl.resetPressedState(snapshot?.pressedStatementIds);
  if (snapshot?.phase === 'CLIMAX') {
    restoreClimaxFromSnapshot(ctrl, snapshot.climaxStageIdx ?? 0, snapshot.climaxChoiceIdx ?? null);
    return;
  }
  if (snapshot?.phase === 'TESTIMONY' && snapshot.testimonyKey) {
    if (snapshot.trialDay) ctrl.deps.state.trialDay = snapshot.trialDay;
    ctrl.startTestimony(snapshot.testimonyKey);
    ctrl.currentStatementIdx = snapshot.statementIdx || 0;
    ctrl.renderCurrentStatement();
    return;
  }
  ctrl.startTrial(/*skipFade=*/ true);
}
