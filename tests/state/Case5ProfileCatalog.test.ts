// @Architecture(descriptionShort="Unit tests for isolated Case 5 profile catalog", type="test", icon="database")
import { describe, expect, it } from 'vitest';
import { getProfileCatalog } from '../../src/state/index.js';

function joinEnProfiles(catalog: ReturnType<typeof getProfileCatalog>): string {
  return Object.values(catalog)
    .flatMap((item) => [item?.role ?? '', item?.desc ?? '', ...(item?.updates ?? [])])
    .join(' ');
}

describe('Case5ProfileCatalog', () => {
  it('returns empty maps for cases without profiles', () => {
    expect(getProfileCatalog('es', 'case0')).toEqual({});
    expect(getProfileCatalog('es', 'case2')).toEqual({});
    expect(getProfileCatalog('es', 'case3')).toEqual({});
    expect(getProfileCatalog('es', 'case4')).toEqual({});
  });

  it('keeps English profile copy free of Spanish leakage', () => {
    const enText = joinEnProfiles(getProfileCatalog('en', 'case5'));
    expect(enText).not.toMatch(/\bocciso\b/i);
    expect(enText).not.toMatch(/\bfoja\b/i);
  });
});
