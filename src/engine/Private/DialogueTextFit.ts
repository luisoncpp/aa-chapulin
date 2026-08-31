// @Architecture(descriptionShort="Shrinks dialogue font until long lines fit the box", type="util", icon="wrench")
/**
 * Dialogue Text Auto-Fit
 * The dialogue box has a fixed height (see `#dialogue-box` in [[style.css]]), so long
 * Case 3 lines overflowed and got clipped mid-sentence. Instead of scrolling or growing
 * the box (the controls bar sits right above it), the font steps down until the whole
 * line fits. Applied through the `--dialogue-font-size` custom property so the literal
 * `examine-mode` font-size rule keeps winning for the examine plate.
 */

const FONT_STEPS_PX = [24, 22, 20, 18, 16, 14];

export function fitDialogueFontSize(targetEl: HTMLElement, text: string): number {
  const previous = targetEl.textContent;
  targetEl.textContent = text;

  let chosen = FONT_STEPS_PX[FONT_STEPS_PX.length - 1];
  for (const size of FONT_STEPS_PX) {
    targetEl.style.setProperty('--dialogue-font-size', `${size}px`);
    if (targetEl.scrollHeight <= targetEl.clientHeight) {
      chosen = size;
      break;
    }
  }

  targetEl.style.setProperty('--dialogue-font-size', `${chosen}px`);
  targetEl.textContent = previous;
  return chosen;
}
