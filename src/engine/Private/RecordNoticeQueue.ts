// @Architecture(descriptionShort="Advanceable centered cards for Court Record changes", type="view", icon="dialog")
/**
 * Court Record and location changes granted by a dialogue line wait here until
 * the player advances past that line; each one then takes the screen as its own
 * card, over the background only. Driven by [[./DialogueFlow.ts]].
 */

import type { SoundEngine } from '../../audio/index.js';
import type { DomElements } from './DomElements.js';
import type { DialogueSnapshot } from '../../types/index.js';

export interface RecordNotice {
  iconSrc: string | null;
  message: string;
}

export class RecordNoticeQueue {
  private pending: RecordNotice[] = [];
  private showing = false;
  private spriteWasHidden = false;
  private boxWasHidden = false;
  private current?: RecordNotice;

  constructor(private readonly dom: DomElements, private readonly soundEngine: SoundEngine) {}

  public get hasPending(): boolean {
    return this.showing || this.pending.length > 0;
  }

  public push(notice: RecordNotice): void {
    this.pending.push(notice);
  }

  public snapshot(): DialogueSnapshot['notices'] {
    return { pending: [...this.pending], current: this.current };
  }

  public restore(snapshot: DialogueSnapshot['notices']): void {
    this.pending = [...snapshot.pending];
    if (!snapshot.current) return;
    this.coverStage();
    this.paint(snapshot.current);
  }

  /**
   * Returns false when it dismisses the last card, so the same press goes on to
   * the next line and the player never sees an empty stage in between.
   */
  public advance(): boolean {
    const next = this.pending.shift();
    if (next) {
      if (!this.showing) this.coverStage();
      this.paint(next);
      return true;
    }
    if (this.showing) this.restoreStage();
    return false;
  }

  public clear(): void {
    this.pending = [];
    if (this.showing) this.restoreStage();
  }

  private coverStage(): void {
    this.showing = true;
    this.spriteWasHidden = this.dom.charSpriteEl.classList.contains('hidden');
    this.boxWasHidden = this.dom.dialogueBoxEl.classList.contains('hidden');
    this.dom.charSpriteEl.classList.add('hidden');
    this.dom.dialogueBoxEl.classList.add('hidden');
    this.dom.recordNoticeEl.classList.remove('hidden');
  }

  private restoreStage(): void {
    this.current = undefined;
    this.showing = false;
    this.dom.recordNoticeEl.classList.add('hidden');
    this.dom.charSpriteEl.classList.toggle('hidden', this.spriteWasHidden);
    this.dom.dialogueBoxEl.classList.toggle('hidden', this.boxWasHidden);
  }

  private paint(notice: RecordNotice): void {
    this.current = notice;
    const icon = this.dom.recordNoticeEl.querySelector<HTMLImageElement>('#record-notice-icon')!;
    const text = this.dom.recordNoticeEl.querySelector<HTMLElement>('#record-notice-text')!;
    if (notice.iconSrc) icon.src = notice.iconSrc;
    else icon.removeAttribute('src');
    icon.classList.toggle('hidden', !notice.iconSrc);
    text.textContent = notice.message;
    this.soundEngine.playRealization();
  }
}
