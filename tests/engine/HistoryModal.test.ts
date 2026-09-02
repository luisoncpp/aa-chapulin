// @Architecture(descriptionShort="Unit tests for the message history modal rendering", type="test", icon="dialog")
import { describe, expect, it, beforeEach } from 'vitest';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { closeHistoryModal, isAnyModalOpen, openHistoryModal } from '../../src/engine/Private/HistoryModal.js';
import { i18n } from '../../src/i18n/index.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('HistoryModal', () => {
  let dom: DomElements;

  beforeEach(() => {
    dom = setupDomHarness();
    i18n.setLanguage('es');
  });

  it('renders one row per entry in display order', () => {
    openHistoryModal(dom, [
      { speaker: 'DEFENSA', text: 'Uno.' },
      { speaker: 'FISCAL', text: 'Dos.' }
    ]);
    const rows = dom.historyListEl!.querySelectorAll('.history-entry');
    expect(rows).toHaveLength(2);
    expect(rows[0].querySelector('.history-speaker')?.textContent).toBe('DEFENSA');
    expect(rows[1].querySelector('.history-text')?.textContent).toBe('Dos.');
    expect(dom.historyModalEl!.classList.contains('hidden')).toBe(false);
  });

  it('omits the speaker plate for narration lines', () => {
    openHistoryModal(dom, [{ speaker: '', text: 'Narración.' }]);
    expect(dom.historyListEl!.querySelector('.history-speaker')).toBeNull();
  });

  it('shows the empty state when nothing has been said yet', () => {
    openHistoryModal(dom, []);
    expect(dom.historyListEl!.querySelector('.history-empty')?.textContent).toBe(i18n.t.historyEmpty);
  });

  it('rebuilds the list on each open instead of appending', () => {
    openHistoryModal(dom, [{ speaker: 'DEFENSA', text: 'Uno.' }]);
    openHistoryModal(dom, [{ speaker: 'DEFENSA', text: 'Uno.' }]);
    expect(dom.historyListEl!.querySelectorAll('.history-entry')).toHaveLength(1);
  });

  it('opens scrolled to the newest line', () => {
    const listEl = dom.historyListEl!;
    Object.defineProperty(listEl, 'scrollHeight', { value: 800, configurable: true });
    openHistoryModal(dom, [{ speaker: 'DEFENSA', text: 'Uno.' }]);
    expect(listEl.scrollTop).toBe(800);
  });

  it('hides the modal on close', () => {
    openHistoryModal(dom, [{ speaker: 'DEFENSA', text: 'Uno.' }]);
    closeHistoryModal(dom);
    expect(dom.historyModalEl!.classList.contains('hidden')).toBe(true);
  });

  it('reports whether any modal is open', () => {
    expect(isAnyModalOpen()).toBe(false);
    openHistoryModal(dom, []);
    expect(isAnyModalOpen()).toBe(true);
    closeHistoryModal(dom);
    expect(isAnyModalOpen()).toBe(false);
  });

  it('no-ops when the host page has no history modal markup', () => {
    const bare = { ...dom, historyModalEl: undefined, historyListEl: undefined };
    expect(() => openHistoryModal(bare, [{ speaker: 'A', text: 'B' }])).not.toThrow();
    expect(() => closeHistoryModal(bare)).not.toThrow();
  });
});
