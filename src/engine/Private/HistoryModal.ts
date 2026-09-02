// @Architecture(descriptionShort="Renders the scrollable dialogue backlog modal", type="view", icon="dialog")
/**
 * Message History modal rendering.
 * Reads the backlog collected by [[./DialogueHistory.ts]]; opened from
 * [[./EngineEventBinder.ts]] via [[./GameEngine.ts]].
 */

import { i18n } from '../../i18n/index.js';
import type { HistoryEntry } from './DialogueHistory.js';
import type { DomElements } from './DomElements.js';

function buildHistoryRow(entry: HistoryEntry): HTMLElement {
  const row = document.createElement('div');
  row.className = 'history-entry';
  if (entry.speaker) {
    const speaker = document.createElement('span');
    speaker.className = 'history-speaker';
    speaker.textContent = entry.speaker;
    row.appendChild(speaker);
  }
  const text = document.createElement('p');
  text.className = 'history-text';
  text.textContent = entry.text;
  row.appendChild(text);
  return row;
}

export function openHistoryModal(dom: DomElements, entries: readonly HistoryEntry[]): void {
  const listEl = dom.historyListEl;
  if (!listEl || !dom.historyModalEl) return;
  listEl.innerHTML = '';
  if (entries.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'history-empty';
    empty.textContent = i18n.t.historyEmpty;
    listEl.appendChild(empty);
  }
  entries.forEach((entry) => listEl.appendChild(buildHistoryRow(entry)));
  dom.historyModalEl.classList.remove('hidden');
  // The newest line is the one the player just missed, so open at the bottom.
  listEl.scrollTop = listEl.scrollHeight;
}

export function closeHistoryModal(dom: DomElements): void {
  dom.historyModalEl?.classList.add('hidden');
}

/**
 * An open modal owns the keyboard. Any `.game-modal` counts, so the court
 * record and talk menus stop swallowing Space/Enter into a scene advance too.
 */
export function isAnyModalOpen(): boolean {
  return document.querySelector('.game-modal:not(.hidden)') !== null;
}
