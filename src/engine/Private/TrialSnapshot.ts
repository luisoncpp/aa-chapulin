// @Architecture(descriptionShort="Save-load adapters for trial controller snapshots", type="util", icon="database")
/**
 * Persistence entry points so EnginePersistence can capture trial phase without
 * fallow treating class methods as unused through host.trial.
 */

import type { TrialStateSnapshot } from '../../state/index.js';
import type { DeductionSnapshot } from '../../deduction/index.js';
import { snapshotPendingPresent } from './TrialPresent.js';
import { snapshotPresentPoint } from './PresentPoint.js';
import type { TrialController } from './TrialController.js';

export function persistTrialSnapshot(trial: TrialController): TrialStateSnapshot {
  return trial.getTrialSnapshot();
}

export function applyTrialSnapshot(trial: TrialController, snapshot?: TrialStateSnapshot, silent = false): void {
  trial.restoreTrialSnapshot(snapshot, silent);
}

export function captureTrialSnapshot(ctrl: TrialController, runtime: {
  testimonyIndex: number | null; pressedIds: string[]; deduction?: DeductionSnapshot
}): TrialStateSnapshot {
  return {
    phase: ctrl.phase,
    testimonyIndex: runtime.testimonyIndex,
    testimonyKey: runtime.testimonyIndex === 0 ? 'testimony1' : runtime.testimonyIndex === 1 ? 'testimony2' : null,
    statementIdx: ctrl.currentStatementIdx,
    trialDay: ctrl.deps.state.trialDay, climaxStageIdx: ctrl.climaxStageIdx,
    climaxChoiceIdx: ctrl.climaxChoiceIdx ?? undefined,
    climaxResolved: ctrl.climaxResolved,
    deduction: runtime.deduction,
    pressedStatementIds: runtime.pressedIds,
    pendingPresent: snapshotPendingPresent(ctrl), point: snapshotPresentPoint(ctrl.deps.dom),
    presentationKnown: true
  };
}
