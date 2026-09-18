// @Architecture(descriptionShort="Unit tests for isolated Case 5 profile catalog", type="test", icon="database")
import { describe, expect, it } from 'vitest';
import { CASE5_DEBUG_PROFILES } from '../../src/case/case5/Private/progress.js';
import { getProfileCatalog } from '../../src/state/index.js';

const UPDATE_LENGTHS: Record<string, number> = {
  perfil_donramon: 2,
  perfil_chapulin: 1,
  perfil_casimiro: 2,
  perfil_supersam: 1,
  perfil_berrondo: 3,
  perfil_nicanor: 1,
  perfil_genoveva: 1,
  perfil_chompiras: 1
};

function joinEnProfiles(catalog: ReturnType<typeof getProfileCatalog>): string {
  return Object.values(catalog)
    .flatMap((item) => [item?.role ?? '', item?.desc ?? '', ...(item?.updates ?? [])])
    .join(' ');
}

describe('Case5ProfileCatalog', () => {
  it('returns exactly the debug profile ids for case5', () => {
    const es = getProfileCatalog('es', 'case5');
    const en = getProfileCatalog('en', 'case5');
    const ids = Object.keys(es).sort();

    expect(ids).toHaveLength(10);
    expect(ids).toEqual([...CASE5_DEBUG_PROFILES].sort());
    expect(Object.keys(en).sort()).toEqual(ids);
  });

  it('uses English roles in the en catalog', () => {
    const en = getProfileCatalog('en', 'case5');
    expect(en.perfil_donramon?.role).toBe('The defendant');
    expect(en.perfil_chapulin?.role).toBe('Lead defense');
    expect(en.perfil_berrondo?.role).toBe('Assisting accuser');
    expect(en.perfil_genoveva?.role).toBe('Badge window clerk');
  });

  it('returns empty maps for cases without profiles', () => {
    expect(getProfileCatalog('es', 'case0')).toEqual({});
    expect(getProfileCatalog('es', 'case2')).toEqual({});
    expect(getProfileCatalog('es', 'case3')).toEqual({});
    expect(getProfileCatalog('es', 'case4')).toEqual({});
  });

  it('still serves Case 1 profiles unchanged', () => {
    const c1 = getProfileCatalog('es', 'case1');
    expect(Object.keys(c1).sort()).toHaveLength(7);
    expect(c1.perfil_tripaseca).toBeDefined();
    expect(c1.perfil_berrondo).toBeUndefined();
  });

  it('defines expected updates array lengths', () => {
    const catalog = getProfileCatalog('es', 'case5');
    for (const [id, length] of Object.entries(UPDATE_LENGTHS)) {
      expect(catalog[id as keyof typeof catalog]?.updates).toHaveLength(length);
    }
    expect(catalog.perfil_sargento?.updates).toBeUndefined();
    expect(catalog.perfil_barriga?.updates).toBeUndefined();
  });

  it('keeps English profile copy free of Spanish leakage', () => {
    const enText = joinEnProfiles(getProfileCatalog('en', 'case5'));
    expect(enText).not.toMatch(/\bocciso\b/i);
    expect(enText).not.toMatch(/\bfoja\b/i);
  });
});
