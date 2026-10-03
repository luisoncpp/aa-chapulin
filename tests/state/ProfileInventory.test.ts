// @Architecture(descriptionShort="Character record inventory, stages and case reset", type="test", icon="database")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { GameStateManager } from '../../src/state/index.js';

const case1 = getCaseScript('es', 'case1');
const case2 = getCaseScript('es', 'case2');
const case3 = getCaseScript('es', 'case3');

describe('Acta de Personajes inventory', () => {
  it('adds profiles only for a case that declares them', () => {
    const state = new GameStateManager();
    state.beginNewCase(case1);
    expect(state.hasProfile('perfil_florinda')).toBe(true);
    expect(state.hasProfile('perfil_jirafales')).toBe(true);
    expect(state.addProfile('perfil_tripaseca')).toBe(true);
    expect(state.hasProfile('perfil_tripaseca')).toBe(true);
    // A second add is a no-op, exactly like evidence.
    expect(state.addProfile('perfil_tripaseca')).toBe(false);

    state.beginNewCase(case2);
    expect(state.addProfile('perfil_tripaseca')).toBe(false);
    expect(state.hasProfile('perfil_donramon')).toBe(true);
    expect(state.hasProfile('perfil_chapulin')).toBe(true);
    expect(state.hasProfile('perfil_supersam')).toBe(true);
    expect(state.hasProfile('perfil_chompiras')).toBe(false);
  });

  it('starts later acts with returning characters already on the record', () => {
    const state = new GameStateManager();
    state.beginNewCase(case3);

    expect(state.hasProfile('perfil_donramon')).toBe(true);
    expect(state.hasProfile('perfil_chapulin')).toBe(true);
    expect(state.getProfileDesc('perfil_donramon')).toContain('Doctor Chapatín');
    expect(state.getProfileDesc('perfil_chapulin')).toContain('Co-defensor');
    expect(state.profiles.getStage('perfil_donramon')).toBe(0);
    expect(state.addProfile('perfil_donramon')).toBe(false);
    expect(state.addProfile('perfil_chapulin')).toBe(false);
  });

  it.each(['es', 'en'] as const)('advances description stages linearly and saturates (%s)', (language) => {
    const state = new GameStateManager();
    state.setLanguage(language);
    state.beginNewCase(getCaseScript(language, 'case1'));
    state.addProfile('perfil_tripaseca');
    const profile = state.profiles.catalog.perfil_tripaseca!;
    const updates = profile.updates ?? [];
    expect(updates.length).toBeGreaterThan(0);
    expect(state.getProfileDesc('perfil_tripaseca')).toBe(profile.desc);

    for (const [index, description] of updates.entries()) {
      expect(state.updateProfile('perfil_tripaseca')).toBe(true);
      expect(state.profiles.getStage('perfil_tripaseca')).toBe(index + 1);
      expect(state.getProfileDesc('perfil_tripaseca')).toBe(description);
    }
    expect(state.updateProfile('perfil_tripaseca')).toBe(false);
    expect(state.profiles.getStage('perfil_tripaseca')).toBe(updates.length);
    expect(state.getProfileDesc('perfil_tripaseca')).toBe(updates.at(-1));
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
    state.addProfile('perfil_tripaseca');
    state.updateProfile('perfil_florinda');

    state.beginNewCase(case1);
    expect(state.hasProfile('perfil_donramon')).toBe(true);
    expect(state.hasProfile('perfil_tripaseca')).toBe(false);
    expect(state.profiles.updateStage).toEqual({});
  });

  it.each(['es', 'en'] as const)('saturates the debug profiles alongside debug evidence (%s)', (language) => {
    const state = new GameStateManager();
    const script = getCaseScript(language, 'case1');
    state.setLanguage(language);
    state.beginNewCase(script);
    const previouslyKnown = [...state.profiles.owned];
    const debugProfiles = script.debugProfiles ?? [];
    expect(debugProfiles.length).toBeGreaterThan(0);
    state.populateTrialEvidence();
    expect(new Set(state.profiles.owned)).toEqual(new Set([...previouslyKnown, ...debugProfiles]));
    for (const id of debugProfiles) {
      const profile = state.profiles.catalog[id]!;
      expect(state.profiles.getStage(id)).toBe(profile.updates?.length ?? 0);
      expect(state.getProfileDesc(id)).toBe(profile.updates?.at(-1) ?? profile.desc);
      expect(state.updateProfile(id)).toBe(false);
    }
  });
});
