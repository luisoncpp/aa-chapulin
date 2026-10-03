// @Architecture(descriptionShort="Paints the first courtroom shot under a black cover", type="util", icon="layers")
/**
 * Courtroom plate used by [[./TrialController.ts]] while fading out of investigation.
 */

import { i18n } from '../../i18n/index.js';
import type { GameStateManager } from '../../state/index.js';
import type { CaseScript, DialogueLine, TrialDay } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { getActiveTrial } from './TrialDayRouter.js';
import { fadeToGalleryShot } from './SceneFade.js';
import { presentDialogueVisuals } from './StageCommit.js';
import { setStagingCaseId } from './TrialCaseStaging.js';
import { scheduleSceneTask } from './SceneTasks.js';

const WAITING_ROOM_BG = 'assets/bg_waiting_room.webp';
const GALLERY_BG = 'assets/bg_gallery_characters.webp';
const GALLERY_HOLD_MS = 1000;

/** Opening gallery plate: the day's `galleryBg` (case content), else the shared populated gallery. */
export function getTrialGalleryBackground(script: CaseScript, trialDay: TrialDay): string {
  return getActiveTrial(script, trialDay).galleryBg ?? GALLERY_BG;
}

export interface TrialIntroParts {
  waitingRoom: DialogueLine[];
  courtroom: DialogueLine[];
}

export function splitTrialIntroAtGallery(
  script: CaseScript,
  trialDay: TrialDay
): TrialIntroParts | null {
  const intro = getActiveTrial(script, trialDay).intro;
  const lobbyEnd = intro.findIndex((line) => line.bg !== WAITING_ROOM_BG);
  if (lobbyEnd <= 0) return null;
  return { waitingRoom: intro.slice(0, lobbyEnd), courtroom: intro.slice(lobbyEnd) };
}

export function fadeAcrossGallery(
  dom: DomElements,
  onComplete: () => void,
  trial: { script: CaseScript; trialDay: TrialDay }
): void {
  const bg = getTrialGalleryBackground(trial.script, trial.trialDay);
  const shot: DialogueLine = { text: '', bg, furniture: 'none' };
  fadeToGalleryShot(dom.flashEl, {
    onCovered: () => {
      dom.dialogueBoxEl.classList.add('hidden');
      dom.dialogueArrowEl.classList.add('hidden');
      dom.speakerBoxEl.textContent = '';
      dom.dialogueTextEl.textContent = '';
      return presentDialogueVisuals(dom, shot, /*isTrialMode=*/ true);
    },
    onRevealed: () => {
      scheduleSceneTask(dom.flashEl, /*continueAfterGalleryShot*/ () => {
        dom.dialogueBoxEl.classList.remove('hidden');
        onComplete();
      }, /*delayInMs=*/ GALLERY_HOLD_MS);
    }
  });
}

interface CourtroomPaintDeps {
  dom: DomElements;
  state: GameStateManager;
}

export function paintCourtroomPlate(deps: CourtroomPaintDeps, script: CaseScript): void | Promise<void> {
  setStagingCaseId(deps.state.caseId, deps.state.trialDay);
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
    dom.speakerBoxEl.textContent = '';
    dom.dialogueTextEl.textContent = '';
    return;
  }
  return ready.then(() => {
    dom.speakerBoxEl.textContent = '';
    dom.dialogueTextEl.textContent = '';
  });
}
