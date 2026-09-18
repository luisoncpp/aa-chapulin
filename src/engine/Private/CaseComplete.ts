// @Architecture(descriptionShort="Shows a black case-complete plate after the last line", type="util", icon="dialog")
/**
 * End-of-case overlay. Stays up so the last trial line is not left hanging.
 */

import { i18n } from '../../i18n/index.js';
import { gameState } from '../../state/index.js';
import type { CaseId, Language } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { resetFlashPlate } from './SceneFade.js';
import { VisualEffects } from './VisualEffects.js';

export function fillCaseCompleteCopy(dom: DomElements, lang?: Language, caseId?: CaseId): void {
  if (!dom.caseCompleteTitleEl || !dom.caseCompleteBodyEl) return;
  const t = lang ? i18n.getUI(lang) : i18n.t;
  const id = caseId ?? gameState.caseId;
  if (id === 'case5') {
    dom.caseCompleteTitleEl.textContent = t.case5CompleteTitle;
    dom.caseCompleteBodyEl.textContent = t.case5CompleteBody;
    return;
  }
  dom.caseCompleteTitleEl.textContent = t.caseCompleteTitle;
  dom.caseCompleteBodyEl.textContent = t.caseCompleteBody;
}

export function showCaseComplete(dom: DomElements): void {
  VisualEffects.clearConfetti(dom.confettiContainerEl);
  VisualEffects.hideCharacter(dom.charSpriteEl);
  VisualEffects.hideFurniture(dom.courtFurnitureContainerEl);
  hidePlayHud(dom);
  fillCaseCompleteCopy(dom);
  dom.caseCompleteOverlayEl.classList.remove('hidden');
}

export function hideCaseComplete(dom: DomElements): void {
  if (!dom.caseCompleteOverlayEl) return;
  dom.caseCompleteOverlayEl.classList.add('hidden');
  dom.dialogueBoxEl.classList.remove('hidden');
  resetFlashPlate(dom.flashEl);
}

function hidePlayHud(dom: DomElements): void {
  dom.trialNavEl.classList.add('hidden');
  dom.investigationNavEl.classList.add('hidden');
  dom.dialogueBoxEl.classList.add('hidden');
}
