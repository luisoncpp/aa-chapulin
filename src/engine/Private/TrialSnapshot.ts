// @Architecture(descriptionShort="Save-load adapters for trial controller snapshots", type="util", icon="database")
/**
 * Persistence entry points so EnginePersistence can capture trial phase without
 * fallow treating class methods as unused through host.trial.
 */

import type { TrialStateSnapshot } from '../../state/index.js';
import type { TrialController } from './TrialController.js';

export function persistTrialSnapshot(trial: TrialController): TrialStateSnapshot {
  return trial.getTrialSnapshot();
}

export function applyTrialSnapshot(trial: TrialController, snapshot?: TrialStateSnapshot): void {
  trial.restoreTrialSnapshot(snapshot);
}
