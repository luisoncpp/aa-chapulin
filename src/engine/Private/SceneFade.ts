// @Architecture(descriptionShort="Fades the stage through black between locations", type="util", icon="layers")
/**
 * Timed black-cover used when leaving the courtroom after a verdict.
 */
import { guardSceneTask, scheduleSceneTask } from './SceneTasks.js';

export const COURTROOM_CELEBRATION_MS = 1600;
// fallow-ignore-next-line unused-export
export const SCENE_FADE_MS = 500;
const GALLERY_FADE_MS = 1000;

interface FadeCallbacks {
  onCovered: () => void | Promise<void>;
  onRevealed: () => void;
}

interface FadeTransition extends FadeCallbacks {
  durationMs: number;
}

export function fadeThroughBlack(
  flashEl: HTMLElement,
  onCovered: () => void | Promise<void>,
  onRevealed: () => void
): void {
  swapUnderBlack(flashEl, { onCovered, onRevealed, durationMs: SCENE_FADE_MS });
}

export function fadeToGalleryShot(flashEl: HTMLElement, callbacks: FadeCallbacks): void {
  swapUnderBlack(flashEl, { ...callbacks, durationMs: GALLERY_FADE_MS });
}

export function fadeToBlack(flashEl: HTMLElement, onCovered: () => void): void {
  coverWithBlack(flashEl, SCENE_FADE_MS);
  scheduleSceneTask(flashEl, /*stayCovered*/ onCovered, /*delayInMs=*/ SCENE_FADE_MS);
}

function swapUnderBlack(flashEl: HTMLElement, transition: FadeTransition): void {
  coverWithBlack(flashEl, transition.durationMs);
  scheduleSceneTask(flashEl, /*swapWhileCovered*/ () => {
    const plateReady = transition.onCovered();
    if (!plateReady) {
      uncoverFromBlack(flashEl, transition.onRevealed, transition.durationMs);
      return;
    }
    void plateReady.then(guardSceneTask(flashEl, /*revealWhenReady*/ () => {
      uncoverFromBlack(flashEl, transition.onRevealed, transition.durationMs);
    }));
  }, /*delayInMs=*/ transition.durationMs);
}

function coverWithBlack(flashEl: HTMLElement, durationMs: number): void {
  flashEl.style.backgroundColor = '#000000';
  flashEl.style.transition = `opacity ${durationMs}ms ease`;
  flashEl.style.opacity = '0';
  flashEl.classList.remove('hidden');
  void flashEl.offsetWidth;
  flashEl.style.opacity = '1';
}

function uncoverFromBlack(
  flashEl: HTMLElement,
  onRevealed: () => void,
  durationMs: number
): void {
  flashEl.style.opacity = '0';
  scheduleSceneTask(flashEl, /*resetFlashPlate*/ () => {
    resetFlashPlate(flashEl);
    onRevealed();
  }, /*delayInMs=*/ durationMs);
}

export function resetFlashPlate(flashEl: HTMLElement): void {
  flashEl.classList.add('hidden');
  flashEl.style.backgroundColor = '#ffffff';
  flashEl.style.transition = '';
  flashEl.style.opacity = '';
}
