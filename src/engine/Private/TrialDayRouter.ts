// @Architecture(descriptionShort="Selects active trial day script and adjournment rules", type="util", icon="gear")
/**
 * Trial day routing for multi-day cases and adjournment chains.
 * Used by [[./TrialController.ts]].
 */

import type { GameStateManager } from '../../state/index.js';
import type {
  AdjournmentDefinition,
  CaseScript,
  TrialDay,
  TrialDayScript
} from '../../types/index.js';

export function getAdjournmentForDay(script: CaseScript, fromDay: TrialDay): AdjournmentDefinition | null {
  if (fromDay === 1) return script.adjournment ?? null;
  if (fromDay === 2) return script.adjournment?.next ?? null;
  return null;
}

export function getActiveTrial(script: CaseScript, trialDay: TrialDay): TrialDayScript {
  if (trialDay <= 1) return script.trial;
  let adj = script.adjournment;
  for (let d = 2; d < trialDay; d++) {
    if (!adj) return script.trial;
    adj = adj.next ?? adj;
  }
  return adj?.trial ?? script.trial;
}

export function shouldAdjourn(script: CaseScript, trialDay: TrialDay): boolean {
  return getAdjournmentForDay(script, trialDay) !== null;
}

export function applyAdjournment(state: GameStateManager, script: CaseScript): AdjournmentDefinition | null {
  const adjournment = getAdjournmentForDay(script, state.trialDay);
  if (!adjournment) return null;
  state.beginNextTrialDay(adjournment);
  state.applyProgressionRules(script);
  return adjournment;
}
