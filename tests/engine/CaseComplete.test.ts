// @Architecture(descriptionShort="Unit tests for Case 5 complete-plate copy", type="test", icon="dialog")
import { describe, expect, it, beforeEach } from 'vitest';
import { fillCaseCompleteCopy } from '../../src/engine/Private/CaseComplete.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { UI_EN, UI_ES } from '../../src/i18n/index.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('Case complete overlay copy', () => {
  let dom: DomElements;

  beforeEach(() => {
    dom = setupDomHarness();
  });

  it('keeps generic copy for cases other than Case 5', () => {
    fillCaseCompleteCopy(dom, 'es', 'case2');
    expect(dom.caseCompleteTitleEl.textContent).toBe(UI_ES.caseCompleteTitle);
    expect(dom.caseCompleteBodyEl.textContent).toBe(UI_ES.caseCompleteBody);
  });

  it('shows the episode title and seventeen months for Case 5', () => {
    fillCaseCompleteCopy(dom, 'es', 'case5');
    expect(dom.caseCompleteTitleEl.textContent).toBe('El Tomo Trece');
    expect(dom.caseCompleteBodyEl.textContent).toBe('DIECISIETE MESES');
    fillCaseCompleteCopy(dom, 'en', 'case5');
    expect(dom.caseCompleteTitleEl.textContent).toBe('The Thirteenth Volume');
    expect(dom.caseCompleteBodyEl.textContent).toBe('SEVENTEEN MONTHS');
  });
});
