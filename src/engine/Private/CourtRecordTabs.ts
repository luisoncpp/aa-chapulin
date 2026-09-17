// @Architecture(descriptionShort="Renders the Acta evidence/profile tabs and their cards", type="view", icon="dialog")
/**
 * Court Record tab bar and card lists for [[./ModalManager.ts]].
 * The tab bar exists only while reading an Acta whose active case declares
 * profiles. A court present prompt opens the relevant list directly so the
 * player can focus on the requested evidence or person (spec §6.1).
 */

import { i18n } from '../../i18n/index.js';
import type { GameStateManager } from '../../state/index.js';
import type { EvidenceId, ProfileId } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { syncExamineButton } from './EvidenceExamine.js';

export type RecordTab = 'evidence' | 'profiles';

export interface RecordSession {
  dom: DomElements;
  state: GameStateManager;
  /** Evidence may be presented (a normal cross-examination present slot). */
  isTrialPresent: boolean;
  /** The court demanded a person: only profiles carry a button. */
  isProfilePresent: boolean;
  onSelect: (id: EvidenceId) => void;
  onSelectProfile: (id: ProfileId) => void;
}

function card(iconSrc: string, name: string, role?: string): HTMLDivElement {
  const el = document.createElement('div');
  el.className = 'evidence-card';
  const roleHtml = role ? `<p class="profile-role">${role}</p>` : '';
  el.innerHTML = `<img src="${iconSrc}" alt="${name}"><p>${name}</p>${roleHtml}`;
  return el;
}

function markSelected(el: HTMLElement): void {
  document.querySelectorAll('.evidence-card').forEach(/*clearSelection*/ (c) => c.classList.remove('selected'));
  el.classList.add('selected');
}

// fallow-ignore-next-line unused-export
export function selectEvidence(dom: DomElements, state: GameStateManager, id: EvidenceId): void {
  const item = state.allEvidence[id];
  if (!item) return;
  dom.evidenceTitleEl.textContent = item.name;
  dom.evidenceRoleLineEl.classList.add('hidden');
  dom.evidenceDescEl.textContent = state.getEvidenceDesc(id);
  dom.evidenceIconPreviewEl.src = item.icon;
  dom.evidenceIconPreviewEl.classList.remove('hidden');
  syncExamineButton(dom, item);
}

function selectProfile(dom: DomElements, state: GameStateManager, id: ProfileId): void {
  const item = state.profiles.catalog[id];
  if (!item) return;
  dom.evidenceTitleEl.textContent = item.name;
  dom.evidenceRoleLineEl.textContent = item.role;
  dom.evidenceRoleLineEl.classList.remove('hidden');
  dom.evidenceDescEl.textContent = state.getProfileDesc(id);
  dom.evidenceIconPreviewEl.src = item.icon;
  dom.evidenceIconPreviewEl.classList.remove('hidden');
  syncExamineButton(dom, null);
}

function applyButtons(session: RecordSession, tab: RecordTab): void {
  const { dom } = session;
  dom.presentBtnEl.textContent = i18n.t.modalPresentBtn;
  dom.presentProfileBtnEl.textContent = i18n.t.modalPresentProfileBtn;
  const showEvidenceBtn = tab === 'evidence' && session.isTrialPresent && !session.isProfilePresent;
  dom.presentBtnEl.style.display = showEvidenceBtn ? 'block' : 'none';
  dom.presentProfileBtnEl.style.display =
    tab === 'profiles' && session.isProfilePresent ? 'block' : 'none';
}

function renderEvidenceList(session: RecordSession): void {
  const { dom, state } = session;
  state.inventory.forEach(/*appendEvidenceCard*/ (id) => {
    const item = state.allEvidence[id];
    if (!item) return;
    const el = card(item.icon, item.name);
    el.addEventListener('click', /*selectThisEvidence*/ () => {
      markSelected(el);
      selectEvidence(dom, state, id);
      session.onSelect(id);
    });
    dom.evidenceListEl.appendChild(el);
  });
  const first = state.inventory[0];
  if (!first) {
    syncExamineButton(dom, null);
    return;
  }
  dom.evidenceListEl.firstElementChild?.classList.add('selected');
  selectEvidence(dom, state, first);
  session.onSelect(first);
}

function renderProfileList(session: RecordSession): void {
  const { dom, state } = session;
  state.profiles.owned.forEach(/*appendProfileCard*/ (id) => {
    const item = state.profiles.catalog[id];
    if (!item) return;
    const el = card(item.icon, item.name, item.role);
    el.addEventListener('click', /*selectThisProfile*/ () => {
      markSelected(el);
      selectProfile(dom, state, id);
      session.onSelectProfile(id);
    });
    dom.evidenceListEl.appendChild(el);
  });
  const first = state.profiles.owned[0];
  if (!first) return;
  dom.evidenceListEl.firstElementChild?.classList.add('selected');
  selectProfile(dom, state, first);
  session.onSelectProfile(first);
}

function syncTabBar(session: RecordSession, tab: RecordTab): void {
  const { dom, state } = session;
  const hasProfiles = state.profiles.owned.length > 0;
  const showTabs = hasProfiles && !session.isTrialPresent;
  dom.recordTabsEl.classList.toggle('hidden', !showTabs);
  if (!hasProfiles) return;
  dom.tabEvidenceEl.textContent = i18n.t.tabEvidence;
  dom.tabProfilesEl.textContent = i18n.t.tabProfiles;
  dom.tabEvidenceEl.classList.toggle('active', tab === 'evidence');
  dom.tabProfilesEl.classList.toggle('active', tab === 'profiles');
  dom.tabEvidenceEl.onclick = /*showEvidenceTab*/ () => renderRecordTab(session, 'evidence');
  dom.tabProfilesEl.onclick = /*showProfilesTab*/ () => renderRecordTab(session, 'profiles');
}

export function renderRecordTab(session: RecordSession, tab: RecordTab): void {
  const usableTab: RecordTab = session.state.profiles.owned.length > 0 ? tab : 'evidence';
  session.dom.evidenceListEl.innerHTML = '';
  syncTabBar(session, usableTab);
  applyButtons(session, usableTab);
  if (usableTab === 'profiles') {
    renderProfileList(session);
    return;
  }
  renderEvidenceList(session);
}
