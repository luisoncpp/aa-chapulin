// @Architecture(descriptionShort="Unit tests for trial day routing and adjournment helpers", type="test", icon="gear")
import { describe, expect, it } from 'vitest';
import { CASE_SCRIPT, getCaseScript } from '../../src/case/index.js';
import {
  applyAdjournment,
  getAdjournmentForDay,
  getActiveTrial,
  shouldAdjourn
} from '../../src/engine/Private/TrialDayRouter.js';
import { GameStateManager } from '../../src/state/index.js';
import type { CaseScript } from '../../src/types/index.js';

const fakeDay3Script: CaseScript = {
  id: 'case3',
  startLocation: 'centro_detencion',
  requiredEvidence: ['lentes_barriga'],
  debugEvidence: ['lentes_barriga'],
  debugUnlockLocations: ['centro_detencion'],
  investigation: {},
  trial: {
    intro: [{ text: 'day1 intro' }],
    testimony1: { title: 'D1 T1', witness: 'A', bgm: 'cross_exam_moderato', statements: [] },
    testimony2: { title: 'D1 T2', witness: 'B', bgm: 'cross_exam_allegro', statements: [] },
    climax: { dialogue: [], presentTarget: [], verdict: [] }
  },
  adjournment: {
    nextLocation: 'despacho_barriga',
    unlockLocations: ['despacho_barriga'],
    requiredEvidence: ['bitacora_transmision'],
    trial: {
      intro: [{ text: 'day2 intro' }],
      testimony1: { title: 'D2 T1', witness: 'C', bgm: 'cross_exam_moderato', statements: [] },
      testimony2: { title: 'D2 T2', witness: 'D', bgm: 'cross_exam_allegro', statements: [] }
    },
    next: {
      nextLocation: 'bodega_radio',
      unlockLocations: ['bodega_radio'],
      requiredEvidence: ['ataduras_bodega'],
      trial: {
        intro: [{ text: 'day3 intro' }],
        testimony1: { title: 'D3 T1', witness: 'E', bgm: 'cross_exam_moderato', statements: [] },
        testimony2: { title: 'D3 T2', witness: 'F', bgm: 'cross_exam_presto', statements: [] }
      }
    }
  }
};

describe('TrialDayRouter', () => {
  const case2 = getCaseScript('es', 'case2');

  it('returns day-1 trial by default and day-2 trial after adjournment', () => {
    expect(getActiveTrial(case2, 1)).toBe(case2.trial);
    expect(getActiveTrial(case2, 2)).toBe(case2.adjournment?.trial);
    expect(getActiveTrial(CASE_SCRIPT, 2)).toBe(CASE_SCRIPT.trial);
  });

  it('walks adjournment.next for day 3', () => {
    expect(getActiveTrial(fakeDay3Script, 3).intro[0]?.text).toBe('day3 intro');
    expect(getActiveTrial(fakeDay3Script, 2).intro[0]?.text).toBe('day2 intro');
  });

  it('adjourns on day 1 and day 2 of a three-day case only', () => {
    expect(shouldAdjourn(case2, 1)).toBe(true);
    expect(shouldAdjourn(case2, 2)).toBe(false);
    expect(shouldAdjourn(CASE_SCRIPT, 1)).toBe(false);
    expect(shouldAdjourn(fakeDay3Script, 1)).toBe(true);
    expect(shouldAdjourn(fakeDay3Script, 2)).toBe(true);
    expect(shouldAdjourn(fakeDay3Script, 3)).toBe(false);
  });

  it('returns adjournment links per trial day', () => {
    expect(getAdjournmentForDay(fakeDay3Script, 1)?.nextLocation).toBe('despacho_barriga');
    expect(getAdjournmentForDay(fakeDay3Script, 2)?.nextLocation).toBe('bodega_radio');
    expect(getAdjournmentForDay(fakeDay3Script, 3)).toBeNull();
  });

  it('applies day-2 state or returns null when the case has no adjournment', () => {
    const state = new GameStateManager();
    expect(applyAdjournment(state, CASE_SCRIPT)).toBeNull();

    const moved = applyAdjournment(state, case2);
    expect(moved?.nextLocation).toBe('oficina_postal');
    expect(state.trialDay).toBe(2);
    expect(state.unlockedLocations).toContain('oficina_postal');
  });

  it('chains to day 3 via beginNextTrialDay', () => {
    const state = new GameStateManager();
    state.beginNewCase(fakeDay3Script);
    const day2 = applyAdjournment(state, fakeDay3Script);
    expect(day2?.nextLocation).toBe('despacho_barriga');
    expect(state.trialDay).toBe(2);

    const day3 = applyAdjournment(state, fakeDay3Script);
    expect(day3?.nextLocation).toBe('bodega_radio');
    expect(state.trialDay).toBe(3);
  });
});
