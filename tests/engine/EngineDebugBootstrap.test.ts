// @Architecture(descriptionShort="Unit tests for URL debug bootstrap flags", type="test", icon="bolt")
import { describe, expect, it } from 'vitest';
import { applyDebugUrlParams } from '../../src/engine/Private/EngineDebugBootstrap.js';
import type { CaseId, Language, TrialDay } from '../../src/types/index.js';

describe('EngineDebugBootstrap', () => {
  it('applies language, case, and trial flags from the query string', () => {
    const originalLocation = window.location;
    delete (window as { location?: Location }).location;
    window.location = { search: '?lang=en&case=2&trial', hash: '' } as Location;

    const actions = {
      language: null as Language | null,
      caseId: null as CaseId | null,
      trialDay: null as TrialDay | null
    };
    applyDebugUrlParams({
      setLanguage: (lang) => { actions.language = lang; },
      loadCase: (caseId) => { actions.caseId = caseId; },
      startTrialDebug: (day) => { actions.trialDay = day ?? 1; }
    });

    expect(actions.language).toBe('en');
    expect(actions.caseId).toBe('case2');
    expect(actions.trialDay).toBe(1);
    window.location = originalLocation;
  });

  it('loads case 3 and parses trial=2 without generic trial fallback', () => {
    const originalLocation = window.location;
    delete (window as { location?: Location }).location;
    window.location = { search: '?case=3&trial=2', hash: '' } as Location;

    const actions = {
      caseId: null as CaseId | null,
      trialDay: null as TrialDay | null
    };
    applyDebugUrlParams({
      setLanguage: () => undefined,
      loadCase: (caseId) => { actions.caseId = caseId; },
      startTrialDebug: (day) => { actions.trialDay = day ?? 1; }
    });

    expect(actions.caseId).toBe('case3');
    expect(actions.trialDay).toBe(2);
    window.location = originalLocation;
  });

  it('does nothing when location is missing', () => {
    const originalLocation = window.location;
    delete (window as { location?: Location }).location;
    applyDebugUrlParams({
      setLanguage: () => { throw new Error('should not run'); },
      loadCase: () => { throw new Error('should not run'); },
      startTrialDebug: () => { throw new Error('should not run'); }
    });
    window.location = originalLocation;
  });
});
