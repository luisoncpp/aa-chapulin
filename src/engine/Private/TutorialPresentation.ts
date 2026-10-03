// @Architecture(descriptionShort="Centers illustrated tutorial lines over a dimmed stage", type="view", icon="dialog")
import type { CaseId, DialogueLine } from '../../types/index.js';
import type { DomElements } from './DomElements.js';

function isTutorialLine(line: DialogueLine, caseId: CaseId): boolean {
  if (line.speaker === 'MODO TUTORIAL' || line.speaker === 'TUTORIAL MODE') return true;
  return caseId === 'case0'
    && (line.speaker === 'MODO EXAMINAR' || line.speaker === 'EXAMINE MODE');
}

/** Owns only the tutorial layout and illustration; dialogue still owns advance and history. */
export class TutorialPresentation {
  private generation = 0;
  private active = false;
  private pendingImage: HTMLImageElement | null = null;

  constructor(private readonly dom: DomElements) {}

  public render(line: DialogueLine, caseId: CaseId): boolean {
    this.clear();
    this.active = isTutorialLine(line, caseId);
    if (!this.active) return false;
    this.dom.gameScreen.classList.add('tutorial-visible');
    this.dom.charSpriteEl.classList.add('hidden');
    if (line.tutorialImage) this.loadImage(line.tutorialImage);
    return true;
  }

  public clear(): void {
    this.generation += 1;
    if (this.pendingImage) {
      this.pendingImage.onload = null;
      this.pendingImage.onerror = null;
      this.pendingImage = null;
    }
    this.dom.tutorialImageEl.classList.add('hidden');
    this.dom.tutorialImageEl.removeAttribute('src');
    this.dom.tutorialImageEl.alt = '';
    this.dom.gameScreen.classList.remove('tutorial-visible');
    if (this.active) {
      this.dom.dialogueTextEl.textContent = '';
      this.dom.speakerBoxEl.textContent = '';
    }
    this.active = false;
  }

  private loadImage(image: NonNullable<DialogueLine['tutorialImage']>): void {
    const generation = this.generation;
    const pending = new Image();
    this.pendingImage = pending;
    pending.onload = /*showCurrentTutorialImage*/ () => {
      if (generation !== this.generation || !this.active) return;
      this.dom.tutorialImageEl.src = image.src;
      this.dom.tutorialImageEl.alt = image.alt;
      this.dom.tutorialImageEl.classList.remove('hidden');
      this.pendingImage = null;
    };
    pending.onerror = /*keepTextOnlyTutorial*/ () => {
      if (generation === this.generation) this.pendingImage = null;
    };
    pending.src = image.src;
  }
}
