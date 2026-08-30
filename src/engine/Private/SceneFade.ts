// @Architecture(descriptionShort="Fades the stage through black between locations", type="util", icon="layers")
/**
 * Timed black-cover used when leaving the courtroom after a verdict.
 */

export const COURTROOM_CELEBRATION_MS = 1600;
const SCENE_FADE_MS = 500;

export function fadeThroughBlack(
  flashEl: HTMLElement,
  onCovered: () => void,
  onRevealed: () => void
): void {
  coverWithBlack(flashEl);
  setTimeout(/*swapWhileCovered*/ () => {
    onCovered();
    uncoverFromBlack(flashEl, onRevealed);
  }, /*delayInMs=*/ SCENE_FADE_MS);
}

function coverWithBlack(flashEl: HTMLElement): void {
  flashEl.style.backgroundColor = '#000000';
  flashEl.style.transition = `opacity ${SCENE_FADE_MS}ms ease`;
  flashEl.style.opacity = '0';
  flashEl.classList.remove('hidden');
  void flashEl.offsetWidth;
  flashEl.style.opacity = '1';
}

function uncoverFromBlack(flashEl: HTMLElement, onRevealed: () => void): void {
  flashEl.style.opacity = '0';
  setTimeout(/*resetFlashPlate*/ () => {
    flashEl.classList.add('hidden');
    flashEl.style.backgroundColor = '#ffffff';
    flashEl.style.transition = '';
    onRevealed();
  }, /*delayInMs=*/ SCENE_FADE_MS);
}
