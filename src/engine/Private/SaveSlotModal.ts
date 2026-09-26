// @Architecture(descriptionShort="Renders the eight-slot save and load list", type="view", icon="database")
/**
 * Save / load slot modal.
 * Opened from the HUD; Continue on the title does not use this list.
 */

import { i18n } from '../../i18n/index.js';
import type { SaveData } from '../../state/index.js';
import type { DomElements } from './DomElements.js';
import { buildSlotSummary } from './SaveSlotSummary.js';

export type SlotPickerMode = 'save' | 'load';

interface SlotModalSession {
  dom: DomElements;
  mode: SlotPickerMode;
  readSlots: () => (SaveData | null)[];
  onPick: (index: number) => void;
  onDelete: (index: number) => void;
}

type Pending = { index: number; kind: 'overwrite' | 'delete' };

let session: SlotModalSession | null = null;
let pending: Pending | null = null;

export function openSaveSlotModal(next: SlotModalSession): void {
  session = next;
  pending = null;
  renderSession();
  next.dom.saveSlotModalEl?.classList.remove('hidden');
}

export function closeSaveSlotModal(dom: DomElements): void {
  session = null;
  pending = null;
  dom.saveSlotModalEl?.classList.add('hidden');
}

export function refreshSaveSlotModal(): void {
  if (!sessionStillOpen()) return;
  renderSession();
}

function sessionStillOpen(): boolean {
  const modal = session?.dom.saveSlotModalEl;
  if (!modal?.isConnected) {
    session = null;
    pending = null;
    return false;
  }
  return !modal.classList.contains('hidden');
}

function renderSession(): void {
  const list = session?.dom.saveSlotListEl;
  if (!session || !list) return;
  writeTitle(session);
  list.replaceChildren();
  session.readSlots().forEach((data, index) => list.appendChild(buildRow(index, data)));
}

function writeTitle(current: SlotModalSession): void {
  const title = current.dom.saveSlotTitleEl;
  if (!title) return;
  title.textContent = current.mode === 'save' ? i18n.t.slotSaveTitle : i18n.t.slotLoadTitle;
}

function buildRow(index: number, data: SaveData | null): HTMLElement {
  const row = document.createElement('div');
  row.className = 'save-slot-row';
  row.append(buildMain(index, data), buildSide(index, data));
  return row;
}

function buildMain(index: number, data: SaveData | null): HTMLButtonElement {
  const main = document.createElement('button');
  main.type = 'button';
  main.className = 'save-slot-main';
  main.disabled = session?.mode === 'load' && !data;
  const number = document.createElement('span');
  number.className = 'save-slot-index';
  number.textContent = String(index + 1);
  main.append(number, buildSlotSummary(data));
  main.addEventListener('click', /*chooseSlot*/ (event) => {
    event.stopPropagation();
    chooseSlot(index, data);
  });
  return main;
}

function chooseSlot(index: number, data: SaveData | null): void {
  if (choiceBlocked(index)) return;
  if (session?.mode === 'load') {
    pickOccupied(index, data);
    return;
  }
  stageSave(index, data);
}

function choiceBlocked(index: number): boolean {
  return !session || pending?.index === index;
}

function pickOccupied(index: number, data: SaveData | null): void {
  if (data) session?.onPick(index);
}

function stageSave(index: number, data: SaveData | null): void {
  if (!session) return;
  if (!data) {
    session.onPick(index);
    return;
  }
  pending = { index, kind: 'overwrite' };
  renderSession();
}

function buildSide(index: number, data: SaveData | null): HTMLElement {
  if (pending?.index === index) return buildConfirm(pending.kind);
  const side = document.createElement('div');
  side.className = 'save-slot-side';
  if (!data) return side;
  const del = document.createElement('button');
  del.type = 'button';
  del.className = 'save-slot-delete';
  del.textContent = i18n.t.slotDelete;
  del.addEventListener('click', /*askDelete*/ (event) => {
    event.stopPropagation();
    pending = { index, kind: 'delete' };
    renderSession();
  });
  side.appendChild(del);
  return side;
}

function buildConfirm(kind: Pending['kind']): HTMLElement {
  const side = document.createElement('div');
  side.className = 'save-slot-confirm';
  const question = document.createElement('p');
  question.textContent = kind === 'delete' ? i18n.t.slotDeleteAsk : i18n.t.slotOverwrite;
  side.append(question, confirmButton('save-slot-yes', i18n.t.slotYes, /*accept=*/ true));
  side.append(confirmButton('save-slot-no', i18n.t.slotNo, /*accept=*/ false));
  return side;
}

function confirmButton(className: string, label: string, accept: boolean): HTMLButtonElement {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = className;
  button.textContent = label;
  button.addEventListener('click', /*answerConfirm*/ (event) => {
    event.stopPropagation();
    answerConfirm(accept);
  });
  return button;
}

function answerConfirm(accept: boolean): void {
  const action = takePending();
  if (!accept || !action) {
    renderSession();
    return;
  }
  applyConfirm(action);
}

function takePending(): Pending | null {
  const action = pending;
  pending = null;
  if (!session) return null;
  return action;
}

function applyConfirm(action: Pending): void {
  if (!session) return;
  if (action.kind === 'delete') session.onDelete(action.index);
  else session.onPick(action.index);
}
