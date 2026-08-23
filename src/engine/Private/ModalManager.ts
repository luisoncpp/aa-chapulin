// @Architecture(descriptionShort="Renders court record evidence modal and talk dialogs", type="view", icon="dialog")
/**
 * Court Record, Talk Options, and HUD Health UI Modal Manager
 * Interacts with [[src/state/Private/GameStateManager.ts]].
 */

import type { GameStateManager } from '../../state/index.js';
import type { EvidenceId, TalkOption } from '../../types/index.js';
import type { DomElements } from './DomElements.js';

export interface CourtRecordConfig {
  dom: DomElements;
  state: GameStateManager;
  isTrialPresent: boolean;
  onSelect: (id: EvidenceId) => void;
}

export class ModalManager {
  // @Section(Court Record Evidence Modal)
  public static openCourtRecord(config: CourtRecordConfig): void {
    const { dom, state, isTrialPresent, onSelect } = config;
    dom.courtRecordModalEl.classList.remove('hidden');
    dom.evidenceListEl.innerHTML = '';
    dom.presentBtnEl.style.display = isTrialPresent ? 'block' : 'none';

    state.inventory.forEach((id, idx) => {
      const item = state.allEvidence[id];
      if (!item) return;

      const card = document.createElement('div');
      card.className = 'evidence-card' + (idx === 0 ? ' selected' : '');
      card.innerHTML = `<img src="${item.icon}" alt="${item.name}"><p>${item.name}</p>`;

      card.addEventListener('click', () => {
        document.querySelectorAll('.evidence-card').forEach((c) => c.classList.remove('selected'));
        card.classList.add('selected');
        ModalManager.selectEvidence(dom, state, id);
        onSelect(id);
      });
      dom.evidenceListEl.appendChild(card);
    });

    if (state.inventory.length > 0) {
      const firstId = state.inventory[0];
      ModalManager.selectEvidence(dom, state, firstId);
      onSelect(firstId);
    }
  }

  public static selectEvidence(dom: DomElements, state: GameStateManager, id: EvidenceId): void {
    const item = state.allEvidence[id];
    if (!item) return;
    dom.evidenceTitleEl.textContent = item.name;
    dom.evidenceDescEl.textContent = item.desc;
    dom.evidenceIconPreviewEl.src = item.icon;
    dom.evidenceIconPreviewEl.classList.remove('hidden');
  }

  public static closeCourtRecord(dom: DomElements): void {
    dom.courtRecordModalEl.classList.add('hidden');
  }

  // @Section(Talk Options Dialog)
  public static openTalkModal(
    dom: DomElements,
    options: TalkOption[],
    onSelect: (opt: TalkOption) => void
  ): void {
    dom.talkListEl.innerHTML = '';
    options.forEach((opt) => {
      const btn = document.createElement('button');
      btn.className = 'menu-btn talk-btn';
      btn.textContent = opt.label;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        ModalManager.closeTalkModal(dom);
        onSelect(opt);
      });
      dom.talkListEl.appendChild(btn);
    });
    dom.talkOptionsModalEl.classList.remove('hidden');
  }

  public static closeTalkModal(dom: DomElements): void {
    dom.talkOptionsModalEl.classList.add('hidden');
  }

  // @Section(Penalty Health Bar UI)
  public static updateHealthUI(healthBarEl: HTMLElement, health: number, maxHealth: number): void {
    healthBarEl.innerHTML = '';
    for (let i = 0; i < maxHealth; i++) {
      const mark = document.createElement('span');
      mark.className = 'penalty-mark' + (i < health ? ' active' : ' empty');
      mark.textContent = '!';
      healthBarEl.appendChild(mark);
    }
  }
}
