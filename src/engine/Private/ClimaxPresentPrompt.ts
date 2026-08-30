// @Architecture(descriptionShort="Shows climax present questions on HUD and court record", type="view", icon="panel")
/**
 * Stage question banner for climax evidence presents.
 */

import type { DomElements } from './DomElements.js';

export function applyClimaxPresentPrompt(dom: DomElements, prompt: string | null): void {
  const nodes = [dom.climaxPresentPromptEl, dom.courtRecordPresentPromptEl];
  for (const el of nodes) {
    el.textContent = prompt ?? '';
    el.classList.toggle('hidden', !prompt);
  }
}
