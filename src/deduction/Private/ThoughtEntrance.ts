// @Architecture(descriptionShort="Cancellable court zoom before entering the defender's thought")
import type { DeductionSequence } from './Contract.js';
import { defenders } from './Defenders.js';

export class ThoughtEntrance {
  private animations: Animation[] = [];
  private complete: (() => void) | null = null;
  public get active(): boolean { return this.complete !== null; }
  constructor(
    private readonly stage: HTMLElement,
    private readonly defender: DeductionSequence['defender'],
    private readonly targets = { court: '.court', sprite: '.defender', thought: '.thought-space' }
  ) {}

  public play(reduced: boolean, complete: () => void): void {
    this.cancel();
    const court = this.stage.querySelector<HTMLElement>(this.targets.court)!;
    if (reduced || typeof court.animate !== 'function') { complete(); return; }
    this.complete = complete; this.stage.dataset.entering = 'true';
    const sprite = this.stage.querySelector<HTMLImageElement>(this.targets.sprite)!.getBoundingClientRect();
    const frame = court.getBoundingClientRect(), anchor = defenders[this.defender].forehead;
    const x = sprite.left - frame.left + sprite.width * anchor[0];
    const y = sprite.top - frame.top + sprite.height * anchor[1];
    court.style.transformOrigin = `${x}px ${y}px`;
    const zoom = `translate(${frame.width / 2 - x}px, ${frame.height * 0.45 - y}px) scale(8)`;
    const timing = { duration: 1400, fill: 'forwards' as FillMode };
    const camera = court.animate([{ transform: 'none', easing: 'cubic-bezier(0.65, 0, 0.35, 1)' },
      { transform: zoom, offset: 0.72 }, { transform: zoom }], timing);
    const thought = this.stage.querySelector<HTMLElement>(this.targets.thought)!.animate([
      { opacity: 0 }, { opacity: 0, offset: 0.68 }, { opacity: 1 }
    ], timing);
    this.animations = [camera, thought];
    thought.onfinish = /*enterThoughtAfterForeheadZoom*/ () => { if (this.animations.includes(thought)) this.finish(); };
  }

  public pause(paused: boolean): void {
    for (const animation of this.animations) { if (paused) animation.pause(); else animation.play(); }
  }
  public reduce(): void { if (this.active) this.finish(); }
  private finish(): void { const complete = this.complete; this.cancel(); complete?.(); }
  public cancel(): void {
    this.complete = null;
    for (const animation of this.animations) { animation.onfinish = null; animation.cancel(); }
    this.animations = []; delete this.stage.dataset.entering;
    this.stage.querySelector<HTMLElement>(this.targets.court)!.style.removeProperty('transform-origin');
  }
}
