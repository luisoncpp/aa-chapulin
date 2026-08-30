// @Architecture(descriptionShort="Selects active trial day script and adjournment rules", type="util", icon="gear")
/**
 * Trial day routing for one-day cases and Case 2 adjournment.
 * Used by [[./TrialController.ts]].
 */

import type { GameStateManager } from '../../state/index.js';
import type { AdjournmentDefinition, CaseScript, TrialDayScript } from '../../types/index.js';

export function getActiveTrial(script: CaseScript, trialDay: number): TrialDayScript {
  if (trialDay === 2 && script.adjournment) return script.adjournment.trial;
  return script.trial;
}

export function shouldAdjourn(script: CaseScript, trialDay: number): boolean {
  return Boolean(script.adjournment && trialDay === 1);
}

export function applyAdjournment(state: GameStateManager, script: CaseScript): AdjournmentDefinition | null {
  const adjournment = script.adjournment;
  if (!adjournment) return null;
  state.beginTrialDay2(adjournment);
  return adjournment;
}
