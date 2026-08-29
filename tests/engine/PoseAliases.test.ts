// @Architecture(descriptionShort="Unit tests for Case 2 pose sprite aliases", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { resolvePoseAsset } from '../../src/engine/Private/PoseAliases.js';

describe('PoseAliases', () => {
  it('maps Case 2 character poses onto existing sprite files', () => {
    expect(resolvePoseAsset('peterete_smug')).toBe('tripaseca_smug');
    expect(resolvePoseAsset('chompiras_crying')).toBe('chapulin_panic');
    expect(resolvePoseAsset('clotilde_flustered')).toBe('florinda_fanning');
    expect(resolvePoseAsset('donramon_idle')).toBe('donramon_idle');
    expect(resolvePoseAsset(null)).toBeNull();
  });
});
