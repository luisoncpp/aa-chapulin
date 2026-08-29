// @Architecture(descriptionShort="Unit tests for trial day routing and adjournment helpers", type="test", icon="gear")
import { describe, expect, it } from 'vitest';
import { CASE_SCRIPT, getCaseScript } from '../../src/case/index.js';
import { applyAdjournment, getActiveTrial, shouldAdjourn } from '../../src/engine/Private/TrialDayRouter.js';
import { GameStateManager } from '../../src/state/index.js';

describe('TrialDayRouter', () => {
  const case2 = getCaseScript('es', 'case2');

  it('returns day-1 trial by default and day-2 trial after adjournment', () => {
    expect(getActiveTrial(case2, 1)).toBe(case2.trial);
    expect(getActiveTrial(case2, 2)).toBe(case2.adjournment?.trial);
    expect(getActiveTrial(CASE_SCRIPT, 2)).toBe(CASE_SCRIPT.trial);
  });

  it('adjourns only on day 1 of a two-day case', () => {
    expect(shouldAdjourn(case2, 1)).toBe(true);
    expect(shouldAdjourn(case2, 2)).toBe(false);
    expect(shouldAdjourn(CASE_SCRIPT, 1)).toBe(false);
  });

  it('applies day-2 state or returns null when the case has no adjournment', () => {
    const state = new GameStateManager();
    expect(applyAdjournment(state, CASE_SCRIPT)).toBeNull();

    const moved = applyAdjournment(state, case2);
    expect(moved?.nextLocation).toBe('oficina_postal');
    expect(state.trialDay).toBe(2);
    expect(state.unlockedLocations).toContain('oficina_postal');
  });
});
