/**
 * Typewriter Text Animation Subsystem
 */

import type { SoundEngine } from '../../audio/index.js';

export class Typewriter {
  public isTyping = false;
  private timer: ReturnType<typeof setInterval> | null = null;
  private fullText = '';
  private typeIdx = 0;
  private onCompleteCallback: (() => void) | null = null;

  constructor(
    private readonly targetEl: HTMLElement,
    private readonly soundEngine: SoundEngine
  ) {}

  public start(text: string, onComplete?: () => void): void {
    this.stop();
    this.isTyping = true;
    this.fullText = text;
    this.typeIdx = 0;
    this.targetEl.textContent = '';
    this.onCompleteCallback = onComplete ?? null;

    let count = 0;
    this.timer = setInterval(/*onCharTick*/ () => {
      if (this.typeIdx < this.fullText.length) {
        this.targetEl.textContent += this.fullText[this.typeIdx];
        if (count % 2 === 0 && this.fullText[this.typeIdx] !== ' ') {
          this.soundEngine.playTextBlip();
        }
        this.typeIdx++;
        count++;
        return;
      }
      this.finish();
    }, /*delayInMs=*/ 28);
  }

  public completeImmediately(): void {
    if (!this.isTyping) return;
    this.stop();
    this.targetEl.textContent = this.fullText;
    this.isTyping = false;
    if (this.onCompleteCallback) {
      const cb = this.onCompleteCallback;
      this.onCompleteCallback = null;
      cb();
    }
  }

  public stop(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.isTyping = false;
  }

  private finish(): void {
    this.stop();
    if (this.onCompleteCallback) {
      const cb = this.onCompleteCallback;
      this.onCompleteCallback = null;
      cb();
    }
  }
}
