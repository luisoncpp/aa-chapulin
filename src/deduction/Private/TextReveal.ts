// @Architecture(descriptionShort="Interruptible typewriter that preserves a separate advance action")
export class TextReveal {
  private timer: ReturnType<typeof setInterval> | null = null;
  private text = '';
  private target: HTMLElement | null = null;
  private index = 0;
  public get pending(): boolean { return this.index < this.text.length; }

  public show(target: HTMLElement, text: string, instant: boolean): void {
    this.dispose();
    this.target = target;
    this.text = text;
    this.index = instant ? text.length : 0;
    target.textContent = instant ? text : '';
    target.dataset.typing = String(this.pending);
    target.setAttribute('aria-label', text);
    if (!instant) this.resume();
  }

  public reveal(): boolean {
    if (!this.pending) return false;
    this.pause();
    this.index = this.text.length;
    if (this.target) { this.target.textContent = this.text; this.target.dataset.typing = 'false'; }
    return true;
  }

  public pause(): void { if (this.timer !== null) clearInterval(this.timer); this.timer = null; }
  public resume(): void {
    if (!this.pending || this.timer !== null) return;
    this.timer = setInterval(/*revealNextCharacters*/ () => {
      this.index = Math.min(this.index + 2, this.text.length);
      if (this.target) this.target.textContent = this.text.slice(0, this.index);
      if (!this.pending) { if (this.target) this.target.dataset.typing = 'false'; this.pause(); }
    }, /*delayInMs=*/24);
  }
  public dispose(): void { this.pause(); this.target = null; }
}
