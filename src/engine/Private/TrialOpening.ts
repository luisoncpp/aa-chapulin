// @Architecture(descriptionShort="Paints the first courtroom shot under a black cover", type="util", icon="layers")
/**
 * Courtroom plate used by [[./TrialController.ts]] while fading out of investigation.
 */

import { i18n } from '../../i18n/index.js';
import type { GameStateManager } from '../../state/index.js';
import type { CaseScript, TrialDay } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { getActiveTrial } from './TrialDayRouter.js';
import { presentDialogueVisuals } from './StageCommit.js';

interface CourtroomPaintDeps {
  dom: DomElements;
  state: GameStateManager;
}

export function paintCourtroomPlate(deps: CourtroomPaintDeps, script: CaseScript): void | Promise<void> {
  deps.state.mode = 'TRIAL';
  deps.dom.investigationNavEl.classList.add('hidden');
  deps.dom.examineNavEl.classList.add('hidden');
  deps.dom.trialNavEl.classList.add('hidden');
  deps.dom.hotspotsContainerEl.innerHTML = '';
  deps.dom.locationBannerEl.textContent = i18n.t.locationCourtroom;
  return paintOpeningShot(deps.dom, script, deps.state.trialDay);
}

function paintOpeningShot(dom: DomElements, script: CaseScript, trialDay: TrialDay): void | Promise<void> {
  const first = getActiveTrial(script, trialDay).intro[0];
  if (!first) return;
  const ready = presentDialogueVisuals(dom, first, /*isTrialMode=*/ true);
  if (!ready) {
    dom.speakerBoxEl.textContent = first.speaker || '';
    dom.dialogueTextEl.textContent = '';
    return;
  }
  return ready.then(() => {
    dom.speakerBoxEl.textContent = first.speaker || '';
    dom.dialogueTextEl.textContent = '';
  });
}
