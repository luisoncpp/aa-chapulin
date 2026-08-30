// @Architecture(descriptionShort="Unit tests for pose sprite filename resolution", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { resolvePoseAsset } from '../../src/engine/Private/PoseAliases.js';

describe('PoseAliases', () => {
  it('resolves Case 2 poses to themselves, not Case 1 names', () => {
    expect(resolvePoseAsset('peterete_smug')).toBe('peterete_smug');
    expect(resolvePoseAsset('chompiras_crying')).toBe('chompiras_crying');
    expect(resolvePoseAsset('clotilde_flustered')).toBe('clotilde_flustered');
    expect(resolvePoseAsset('jirafales_smoking')).toBe('jirafales_smoking');
    expect(resolvePoseAsset('jaimito_proud')).toBe('jaimito_proud');
    expect(resolvePoseAsset('supersam_sweat')).toBe('supersam_sweat');
    expect(resolvePoseAsset('donramon_idle')).toBe('donramon_idle');
    expect(resolvePoseAsset(null)).toBeNull();
  });
});
