// @Architecture(descriptionShort="Character record inventory, stages and case reset", type="test", icon="database")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { GameStateManager } from '../../src/state/index.js';

const case1 = getCaseScript('es', 'case1');
const case2 = getCaseScript('es', 'case2');

describe('Acta de Personajes inventory', () => {
  it('adds profiles only for a case that declares them', () => {
    const state = new GameStateManager();
    state.beginNewCase(case1);
    expect(state.addProfile('perfil_tripaseca')).toBe(true);
    expect(state.hasProfile('perfil_tripaseca')).toBe(true);
    // A second add is a no-op, exactly like evidence.
    expect(state.addProfile('perfil_tripaseca')).toBe(false);

    state.beginNewCase(case2);
    expect(state.addProfile('perfil_tripaseca')).toBe(false);
    expect(state.profiles.owned).toEqual([]);
  });

  it('advances description stages linearly and saturates', () => {
    const state = new GameStateManager();
    state.beginNewCase(case1);
    state.addProfile('perfil_tripaseca');
    const initial = state.getProfileDesc('perfil_tripaseca');

    expect(state.updateProfile('perfil_tripaseca')).toBe(true);
    expect(state.getProfileDesc('perfil_tripaseca')).not.toBe(initial);
    expect(state.updateProfile('perfil_tripaseca')).toBe(true);
    expect(state.updateProfile('perfil_tripaseca')).toBe(true);
    // Three stages declared: the fourth update is silently dropped.
    expect(state.updateProfile('perfil_tripaseca')).toBe(false);
    expect(state.profiles.getStage('perfil_tripaseca')).toBe(3);
  });

  it('adds the profile first when a script updates one it never handed out', () => {
    const state = new GameStateManager();
    state.beginNewCase(case1);
    expect(state.updateProfile('perfil_florinda')).toBe(true);
    expect(state.hasProfile('perfil_florinda')).toBe(true);
  });

  it('clears profiles when a new case begins', () => {
    const state = new GameStateManager();
    state.beginNewCase(case1);
    state.addProfile('perfil_donramon');
    state.updateProfile('perfil_florinda');

    state.beginNewCase(case1);
    expect(state.profiles.owned).toEqual([]);
    expect(state.profiles.updateStage).toEqual({});
  });

  it('saturates the debug profiles alongside debug evidence', () => {
    const state = new GameStateManager();
    state.beginNewCase(case1);
    state.populateTrialEvidence();
    expect(state.profiles.owned).toHaveLength(7);
    expect(state.profiles.getStage('perfil_tripaseca')).toBe(3);
  });
});
