// @Architecture(descriptionShort="Unit tests for court record, talk modal, and health HUD UI", type="test", icon="dialog")
import { describe, expect, it, beforeEach } from 'vitest';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { ModalManager } from '../../src/engine/Private/ModalManager.js';
import { GameStateManager } from '../../src/state/index.js';
import type { EvidenceId, TalkOption } from '../../src/types/index.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('ModalManager Subsystem', () => {
  let dom: DomElements;
  let state: GameStateManager;

  beforeEach(() => {
    dom = setupDomHarness();
    state = new GameStateManager();
  });

  it('renders court record inventory and selects first evidence by default', () => {
    state.addEvidence('chipote_chillon');
    let selectedId: EvidenceId | null = null;

    ModalManager.openCourtRecord({
      dom,
      state,
      isTrialPresent: /*isTrialPresent=*/ true,
      onSelect: (id) => {
        selectedId = id;
      }
    });

    expect(dom.courtRecordModalEl.classList.contains('hidden')).toBe(false);
    expect(dom.presentBtnEl.style.display).toBe('block');
    expect(dom.evidenceListEl.children).toHaveLength(2);
    expect(selectedId).toBe('insignia_abogado');
    expect(dom.evidenceTitleEl.textContent).toBe('Insignia de Abogado CH');
  });

  it('handles empty inventory in openCourtRecord', () => {
    state.inventory = [];
    expect(() => {
      ModalManager.openCourtRecord({
        dom,
        state,
        isTrialPresent: /*isTrialPresent=*/ false,
        onSelect: () => {}
      });
    }).not.toThrow();
  });

  it('selects new evidence item on card click and ignores invalid ids', () => {
    state.addEvidence('chipote_chillon');
    let selectedId: EvidenceId | null = null;

    ModalManager.openCourtRecord({
      dom,
      state,
      isTrialPresent: /*isTrialPresent=*/ false,
      onSelect: (id) => {
        selectedId = id;
      }
    });

    expect(dom.presentBtnEl.style.display).toBe('none');

    const secondCard = dom.evidenceListEl.children[1] as HTMLElement;
    secondCard.click();

    expect(selectedId).toBe('chipote_chillon');
    expect(dom.evidenceTitleEl.textContent).toBe('Chipote Chillón');
    expect(dom.evidenceDescEl.textContent).toContain('Arma supuestamente letal');

    state.updateEvidence('chipote_chillon');
    ModalManager.selectEvidence(dom, state, 'chipote_chillon');
    expect(dom.evidenceDescEl.textContent).toContain('chillido');

    // Invalid id selection does nothing
    expect(() => ModalManager.selectEvidence(dom, state, 'invalid_item' as any)).not.toThrow();
  });

  it('closes court record modal', () => {
    ModalManager.closeCourtRecord(dom);
    expect(dom.courtRecordModalEl.classList.contains('hidden')).toBe(true);
  });

  it('renders talk options and handles option selection', () => {
    const options: TalkOption[] = [
      { id: 'opt_1', label: 'Opción 1', dialogue: [] },
      { id: 'opt_2', label: 'Opción 2', dialogue: [] }
    ];

    let chosenOpt: TalkOption | null = null;
    ModalManager.openTalkModal(dom, options, (opt) => {
      chosenOpt = opt;
    });

    expect(dom.talkOptionsModalEl.classList.contains('hidden')).toBe(false);
    expect(dom.talkListEl.children).toHaveLength(2);

    const firstBtn = dom.talkListEl.children[0] as HTMLButtonElement;
    firstBtn.click();

    expect(chosenOpt).toBe(options[0]);
    expect(dom.talkOptionsModalEl.classList.contains('hidden')).toBe(true);
  });

  it('updates health penalty HUD markers correctly', () => {
    ModalManager.updateHealthUI(dom.healthBarEl, /*health=*/ 3, /*maxHealth=*/ 5);
    expect(dom.healthBarEl.children).toHaveLength(5);

    const marks = Array.from(dom.healthBarEl.children);
    expect(marks[0].classList.contains('active')).toBe(true);
    expect(marks[1].classList.contains('active')).toBe(true);
    expect(marks[2].classList.contains('active')).toBe(true);
    expect(marks[3].classList.contains('empty')).toBe(true);
    expect(marks[4].classList.contains('empty')).toBe(true);
  });

  it('renders move destinations and handles location selection', () => {
    const destinations = [
      { id: 'museum', name: 'Museo de Curiosidades', isCurrent: true },
      { id: 'detention', name: 'Centro de Detención', isCurrent: false }
    ];

    let selectedLoc: string | null = null;
    ModalManager.openMoveModal(dom, destinations, (locId) => {
      selectedLoc = locId;
    });

    expect(dom.moveLocationsModalEl.classList.contains('hidden')).toBe(false);
    expect(dom.moveLocationsListEl.children).toHaveLength(2);

    const currentBtn = dom.moveLocationsListEl.children[0] as HTMLButtonElement;
    expect(currentBtn.textContent).toContain('Actual');
    expect(currentBtn.classList.contains('disabled')).toBe(true);
    // Clicking disabled current button does nothing
    currentBtn.click();
    expect(selectedLoc).toBeNull();
    expect(dom.moveLocationsModalEl.classList.contains('hidden')).toBe(false);

    const destBtn = dom.moveLocationsListEl.children[1] as HTMLButtonElement;
    expect(destBtn.classList.contains('disabled')).toBe(false);
    destBtn.click();

    expect(selectedLoc).toBe('detention');
    expect(dom.moveLocationsModalEl.classList.contains('hidden')).toBe(true);

    ModalManager.closeMoveModal(dom);
    expect(dom.moveLocationsModalEl.classList.contains('hidden')).toBe(true);
  });

  it('renders choice prompt and handles option selection without close button', () => {
    const prompt = {
      id: 'test_choice',
      question: '¿Cuál es la respuesta correcta?',
      options: [
        { id: 'wrong', label: 'Opción incorrecta' },
        { id: 'right', label: 'Opción correcta' }
      ],
      correctId: 'right',
      successDialogue: [],
      failDialogue: []
    };
    let selectedId: string | null = null;
    ModalManager.openChoiceModal(dom, prompt, (id) => { selectedId = id; });

    expect(dom.choicePromptModalEl.classList.contains('hidden')).toBe(false);
    expect(dom.choicePromptQuestionEl.textContent).toBe(prompt.question);
    expect(dom.choicePromptListEl.children).toHaveLength(2);
    expect(dom.choicePromptModalEl.querySelector('.close-btn')).toBeNull();

    const firstBtn = dom.choicePromptListEl.children[0] as HTMLButtonElement;
    firstBtn.click();
    expect(selectedId).toBe('wrong');
    expect(dom.choicePromptModalEl.classList.contains('hidden')).toBe(true);
  });
});
