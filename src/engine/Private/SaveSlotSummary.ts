// @Architecture(descriptionShort="Labels a save slot with case, place, and time", type="view", icon="database")
/**
 * Text shown on one row of [[./SaveSlotModal.ts]].
 */

import { getCaseScript } from '../../case/index.js';
import { i18n } from '../../i18n/index.js';
import type { SaveData } from '../../state/index.js';

export function buildSlotSummary(data: SaveData | null): HTMLElement {
  const box = document.createElement('span');
  box.className = 'save-slot-summary';
  if (!data) {
    box.textContent = i18n.t.slotEmpty;
    return box;
  }
  box.append(line('save-slot-case', caseLabel(data)), line('save-slot-place', placeLabel(data)));
  box.append(line('save-slot-time', new Date(data.timestamp).toLocaleString(i18n.getLanguage())));
  return box;
}

function line(className: string, text: string): HTMLElement {
  const span = document.createElement('span');
  span.className = className;
  span.textContent = text;
  return span;
}

function caseLabel(data: SaveData): string {
  return i18n.t.caseSlotLabel[data.caseId ?? 'case1'];
}

function placeLabel(data: SaveData): string {
  if (data.mode === 'TRIAL') return trialPlace(data);
  return investigationPlace(data);
}

function trialPlace(data: SaveData): string {
  const day = data.trialDay ?? data.trial?.trialDay ?? 1;
  return `${i18n.t.locationCourtroom} · ${i18n.t.slotDay(day)}`;
}

function investigationPlace(data: SaveData): string {
  const caseId = data.caseId ?? 'case1';
  const scene = getCaseScript(i18n.getLanguage(), caseId).investigation[data.currentLocation];
  return scene?.title ?? data.currentLocation;
}
