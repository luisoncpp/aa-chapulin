// @Architecture(descriptionShort="Loads a case module then starts investigation or debug trial", type="util", icon="bolt")
/**
 * Guards splash launch so a second click cannot start while the case module is in flight.
 */

import { ensureCasePair, type ScriptResolver } from '../../case/loadCaseScript.js';
import type { CaseId, TrialDay } from '../../types/index.js';

export interface PlayStartGate {
  resolveScript?: ScriptResolver;
  hasStarted: () => boolean;
  launching: () => boolean;
  caseId: () => CaseId;
  markLaunching: (busy: boolean) => void;
  clearHistory: () => void;
  launchGame: (caseId: CaseId) => void;
  launchTrial: (day?: TrialDay) => void;
}

export function requestStartGame(gate: PlayStartGate, caseId: CaseId): void {
  if (gate.hasStarted() || gate.launching()) return;
  gate.clearHistory();
  if (gate.resolveScript) {
    gate.launchGame(caseId);
    return;
  }
  gate.markLaunching(/*busy=*/ true);
  void startGameWhenLoaded(gate, caseId);
}

export function requestTrialDebug(gate: PlayStartGate, day?: TrialDay): void {
  if (gate.hasStarted() || gate.launching()) return;
  if (gate.resolveScript) {
    gate.launchTrial(day);
    return;
  }
  gate.markLaunching(/*busy=*/ true);
  void startTrialWhenLoaded(gate, day);
}

async function startGameWhenLoaded(gate: PlayStartGate, caseId: CaseId): Promise<void> {
  await ensureCasePair(caseId);
  gate.markLaunching(/*busy=*/ false);
  if (gate.hasStarted()) return;
  gate.clearHistory();
  gate.launchGame(caseId);
}

async function startTrialWhenLoaded(gate: PlayStartGate, day?: TrialDay): Promise<void> {
  await ensureCasePair(gate.caseId());
  gate.markLaunching(/*busy=*/ false);
  if (gate.hasStarted()) return;
  gate.launchTrial(day);
}
