// @Architecture(descriptionShort="Case progression rules for GameStateManager", type="util", icon="database")
/**
 * Trial-day progression helpers for [[./GameStateManager.ts]].
 */

import type { AdjournmentDefinition, CaseScript, EvidenceId } from '../../types/index.js';
import type { GameStateManager } from './GameStateManager.js';

export function resolveRequiredEvidence(state: GameStateManager, script: CaseScript): EvidenceId[] {
  if (state.trialDay === 1) return [...script.requiredEvidence];
  let adj = script.adjournment;
  for (let d = 2; d < state.trialDay && adj; d++) {
    adj = adj.next ?? adj;
  }
  return adj ? [...adj.requiredEvidence] : [...script.requiredEvidence];
}

export function applyCaseProgressionRules(state: GameStateManager, script: CaseScript): void {
  state.debugEvidence = [...script.debugEvidence];
  state.debugUnlockLocations = [...script.debugUnlockLocations];
  state.requiredEvidence = resolveRequiredEvidence(state, script);
}

export function beginNextTrialDayState(
  state: GameStateManager,
  adjournment: AdjournmentDefinition
): void {
  state.trialDay = (state.trialDay + 1) as import('../../types/index.js').TrialDay;
  if (state.trialDay === 2) state.flags.completed_trial_day1 = true;
  state.flags.ready_for_trial = false;
  state.requiredEvidence = [...adjournment.requiredEvidence];
  state.mode = 'INVESTIGATION';
  state.resetHealth();
  state.currentLocation = adjournment.nextLocation;
  state.unlockedLocations = [...adjournment.unlockLocations];
}
