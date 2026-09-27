// @Architecture(descriptionShort="Unit tests for on-demand case script loading and cache", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { loadCaseScript, peekCaseScript } from '../../src/case/loadCaseScript.js';

describe('loadCaseScript', () => {
  it('loads the requested case and serves the second call from cache', async () => {
    const first = await loadCaseScript('es', 'case0');
    expect(first.id).toBe('case0');
    expect(peekCaseScript('es', 'case0')).toBe(first);
    const second = await loadCaseScript('es', 'case0');
    expect(second).toBe(first);
    const english = await loadCaseScript('en', 'case0');
    expect(english.id).toBe('case0');
    expect(english).not.toBe(first);
  });
});
