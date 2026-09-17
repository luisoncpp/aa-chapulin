// @Architecture(descriptionShort="Renders court record evidence modal and talk dialogs", type="view", icon="dialog")
/**
 * Court Record, Talk Options, and HUD Health UI Modal Manager
 * Interacts with [[src/state/Private/GameStateManager.ts]].
 */

import { i18n } from '../../i18n/index.js';
import type { GameStateManager } from '../../state/index.js';
import type { EvidenceId, LocationId, ProfileId, TalkOption, ChoicePrompt } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { renderRecordTab } from './CourtRecordTabs.js';
import { applyClimaxPresentPrompt } from './ClimaxPresentPrompt.js';

export interface CourtRecordConfig {
  dom: DomElements;
  state: GameStateManager;
  isTrialPresent: boolean;
  /** The court demanded a person: the Acta opens on PERSONAS (spec §6.1). */
  isProfilePresent?: boolean;
  onSelect: (id: EvidenceId) => void;
  onSelectProfile?: (id: ProfileId) => void;
}

export interface MoveDestination {
  id: LocationId;
  name: string;
  isCurrent: boolean;
}

export class ModalManager {
  private static appendMenuButton(
    listEl: HTMLElement,
    config: { label: string; onClose: () => void; onSelect: () => void }
  ): void {
    const btn = document.createElement('button');
    btn.className = 'menu-btn talk-btn';
    btn.textContent = config.label;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      config.onClose();
      config.onSelect();
    });
    listEl.appendChild(btn);
  }

  // @Section(Court Record Evidence Modal)
  public static openCourtRecord(config: CourtRecordConfig): void {
    const isProfilePresent = Boolean(config.isProfilePresent);
    config.dom.courtRecordModalEl.classList.remove('hidden');
    renderRecordTab(
      {
        dom: config.dom,
        state: config.state,
        isTrialPresent: config.isTrialPresent,
        isProfilePresent,
        onSelect: config.onSelect,
        onSelectProfile: config.onSelectProfile ?? (() => undefined)
      },
      isProfilePresent ? 'profiles' : 'evidence'
    );
  }

  public static closeCourtRecord(dom: DomElements): void {
    dom.courtRecordModalEl.classList.add('hidden');
    dom.presentProfileBtnEl.style.display = 'none';
    applyClimaxPresentPrompt(dom, null);
  }

  // @Section(Talk Options Dialog)
  public static openTalkModal(
    dom: DomElements,
    options: TalkOption[],
    onSelect: (opt: TalkOption) => void
  ): void {
    dom.talkListEl.innerHTML = '';
    options.forEach((opt) => {
      ModalManager.appendMenuButton(dom.talkListEl, {
        label: opt.label,
        onClose: () => ModalManager.closeTalkModal(dom),
        onSelect: () => onSelect(opt)
      });
    });
    dom.talkOptionsModalEl.classList.remove('hidden');
  }

  public static closeTalkModal(dom: DomElements): void {
    dom.talkOptionsModalEl.classList.add('hidden');
  }

  // @Section(Move Locations Dialog)
  public static openMoveModal(
    dom: DomElements,
    destinations: MoveDestination[],
    onSelect: (id: LocationId) => void
  ): void {
    dom.moveLocationsListEl.innerHTML = '';
    destinations.forEach((dest) => {
      const btn = document.createElement('button');
      btn.className = 'menu-btn talk-btn' + (dest.isCurrent ? ' disabled' : '');
      btn.textContent = dest.name + (dest.isCurrent ? ` (${i18n.t.currentLocationBadge})` : '');
      if (!dest.isCurrent) {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          ModalManager.closeMoveModal(dom);
          onSelect(dest.id);
        });
      }
      dom.moveLocationsListEl.appendChild(btn);
    });
    dom.moveLocationsModalEl.classList.remove('hidden');
  }

  public static closeMoveModal(dom: DomElements): void {
    dom.moveLocationsModalEl.classList.add('hidden');
  }

  // @Section(Climax Choice Prompt)
  public static openChoiceModal(
    dom: DomElements,
    prompt: ChoicePrompt,
    onSelect: (optionId: string) => void
  ): void {
    dom.choicePromptQuestionEl.textContent = prompt.question;
    dom.choicePromptListEl.innerHTML = '';
    prompt.options.forEach((opt) => {
      ModalManager.appendMenuButton(dom.choicePromptListEl, {
        label: opt.label,
        onClose: () => ModalManager.closeChoiceModal(dom),
        onSelect: () => onSelect(opt.id)
      });
    });
    dom.choicePromptModalEl.classList.remove('hidden');
  }

  public static closeChoiceModal(dom: DomElements): void {
    dom.choicePromptModalEl.classList.add('hidden');
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
