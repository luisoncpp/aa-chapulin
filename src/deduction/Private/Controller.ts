// @Architecture(descriptionShort="Coordinates deduction input lifecycle and presentation adapters")
import type { DeductionSequence, DeductionSnapshot } from './Contract.js';
import { DeductionAudio } from './Audio.js';
import { DeductionDialogs } from './Dialogs.js';
import { labels } from './Labels.js';
import { DeductionSession } from './Session.js';
import { DeductionSurface } from './Surface.js';
import { DeductionView } from './View.js';
import { ThoughtEntrance } from './ThoughtEntrance.js';

class DeductionController {
  public session: DeductionSession;
  private readonly view: DeductionView;
  private readonly surface: DeductionSurface;
  private readonly dialogs: DeductionDialogs;
  private readonly entrance: ThoughtEntrance;
  private audio = new DeductionAudio();
  private readonly abort = new AbortController();
  private readonly media = matchMedia('(prefers-reduced-motion: reduce)');
  private reduced = this.media.matches;
  private timer: ReturnType<typeof setTimeout> | null = null;
  private travelRemaining = 0;
  private travelStarted = 0;
  private lastAction = -Infinity;
  private disposed = false;
  private continued = false;
  private readonly resize: ResizeObserver;

  constructor(root: HTMLElement, sequence: DeductionSequence, private readonly onContinue: () => void) {
    this.session = new DeductionSession(sequence); this.view = new DeductionView(root, sequence.defender);
    this.entrance = new ThoughtEntrance(this.view.stage, sequence.defender);
    this.surface = new DeductionSurface(this.view.backdrop, mode => { root.querySelector('.render-status')!.textContent = mode; this.view.stage.dataset.renderer = mode; });
    this.dialogs = new DeductionDialogs({ view: this.view, session: () => this.session, restore: snapshot => this.restore(snapshot) });
    root.querySelector<HTMLInputElement>('[data-setting="motion"]')!.checked = this.reduced;
    this.bind(); this.render(/*instant=*/true); void this.surface.setFlat(/*flat=*/false);
    this.resize = new ResizeObserver(/*alignAccessibleIdeaTargets*/ () => this.view.positionOptions()); this.resize.observe(this.view.stage);
  }

  private bind(): void {
    const signal = this.abort.signal;
    this.view.root.addEventListener('click', event => this.click(event), { signal });
    this.view.root.addEventListener('change', event => this.setting(event), { signal });
    this.view.root.addEventListener('focusin', event => this.focus(event), { signal });
    this.view.root.addEventListener('pointerover', event => this.focus(event), { signal });
    document.addEventListener('keydown', event => this.key(event), { signal });
    document.addEventListener('visibilitychange', /*pauseHiddenSession*/ () => {
      this.audio.visibility(document.hidden); this.suspend();
    }, { signal });
    this.view.dialog.addEventListener('close', /*restoreBackgroundInteraction*/ () => this.suspend(), { signal });
    this.view.dialog.addEventListener('cancel', /*restoreBackgroundInteraction*/ () => queueMicrotask(() => this.suspend()), { signal });
    this.view.root.querySelector('details')!.addEventListener('toggle', /*pauseUtilityMenu*/ () => this.suspend(), { signal });
    this.media.addEventListener('change', event => {
      this.reduced = event.matches; this.view.root.querySelector<HTMLInputElement>('[data-setting="motion"]')!.checked = this.reduced;
      if (this.reduced) this.entrance.reduce();
      this.render(/*instant=*/true);
    }, { signal });
  }

  private click(event: MouseEvent): void {
    const button = (event.target as Element).closest<HTMLButtonElement>('button');
    if (!button || button.disabled) return;
    if (this.view.dialog.open && !this.view.dialog.contains(button)) return;
    this.audio.unlock();
    if (button.dataset.option) {
      if (this.menuOpen()) return;
      this.select(button.dataset.option, /*keyboard=*/false); this.advance(); return;
    }
    const action = button.dataset.action;
    if (action && action !== 'advance') this.view.root.querySelector<HTMLDetailsElement>('details')!.open = false;
    if (['record', 'history', 'save', 'load'].includes(action ?? '')) {
      this.dialogs.open(action as 'record' | 'history' | 'save' | 'load'); this.suspend(); return;
    }
    if (action === 'advance') this.advance();
    if (action === 'close') this.view.dialog.close();
    if (action === 'language') this.language();
    if (action === 'sound') { this.audio.toggle(); button.setAttribute('aria-pressed', String(!this.audio.muted)); }
    if (action === 'restart' && window.confirm(labels[this.session.language].reset)) this.restore();
    if (action === 'overwrite-yes' || action === 'overwrite-no') this.dialogs.overwrite(action === 'overwrite-yes');
  }

  private key(event: KeyboardEvent): void {
    if (event.repeat || this.view.dialog.open || document.hidden || this.menuOpen()) return;
    const target = event.target as Element;
    if (target.closest('.utilities, .preferences, dialog')) return;
    if (this.session.phase === 'question' && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
      event.preventDefault(); const options = this.session.step.options;
      const index = options.findIndex(o => o.id === this.session.snapshot().focusId);
      const delta = ['ArrowLeft', 'ArrowUp'].includes(event.key) ? -1 : 1;
      this.select(options[(index + delta + options.length) % options.length].id, /*keyboard=*/true); return;
    }
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); this.audio.unlock(); this.advance(); }
  }

  private focus(event: Event): void {
    const id = (event.target as HTMLElement).closest<HTMLElement>('[data-option]')?.dataset.option;
    if (id && !this.view.dialog.open) this.select(id, /*keyboard=*/false);
  }
  private select(id: string, keyboard: boolean): void {
    if (this.session.focus(id)) this.audio.focus();
    this.view.focus(this.session, keyboard); this.updateSurface();
  }

  private advance(): void {
    if (this.disposed || this.entrance.active || this.view.dialog.open || document.hidden || this.menuOpen()) return;
    if (performance.now() - this.lastAction < 220) return;
    this.lastAction = performance.now();
    if (this.view.reveal.reveal()) return;
    if (this.session.phase === 'entry') {
      this.entrance.play(this.reduced, /*beginFirstPremiseAfterZoom*/ () => {
        this.lastAction = performance.now(); this.session.advance(); this.render(/*instant=*/false);
      }); this.updateSurface(); return;
    }
    if (this.session.phase === 'travel') return;
    const changed = this.session.phase === 'question' ? this.session.choose() : this.session.advance();
    if (!changed) return;
    if (this.session.phase === 'returned' && !this.continued) { this.continued = true; this.onContinue(); }
    this.render(/*instant=*/false);
  }

  private language(): void {
    const focus = (document.activeElement as HTMLElement)?.dataset.action;
    this.session.setLanguage(this.session.language === 'es' ? 'en' : 'es');
    this.render(/*instant=*/true, /*restored=*/true); this.dialogs.refresh();
    this.view.root.querySelector<HTMLButtonElement>(`[data-action="${focus ?? 'language'}"]`)?.focus();
  }

  private setting(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.dataset.setting === 'motion') { this.reduced = input.checked; this.view.reveal.reveal(); if (this.reduced) this.entrance.reduce(); }
    if (input.dataset.setting === 'flat') void this.surface.setFlat(input.checked);
    this.updateSurface();
  }

  private render(instant: boolean, restored = false): void {
    this.clearTimer(); this.view.render(this.session, instant || this.reduced);
    this.audio.sync(this.session.phase, restored);
    this.updateSurface();
    if (this.session.phase === 'travel') {
      this.travelRemaining = this.reduced ? 120 : 1100; this.scheduleTravel();
    }
    const target = this.session.phase === 'question' ? '[aria-checked="true"]' : '[data-action="advance"]';
    if (!this.view.dialog.open) this.view.content.querySelector<HTMLButtonElement>(target)?.focus({ preventScroll: true });
  }

  private updateSurface(): void {
    const s = this.session.snapshot(), options = this.session.step.options;
    this.surface.update({ count: options.length, phase: s.phase,
      selected: options.findIndex(o => o.id === s.selectedId), focus: options.findIndex(o => o.id === s.focusId),
      reduced: this.reduced, paused: this.entrance.active || this.view.dialog.open || document.hidden || this.menuOpen(), labels: options.map(o => this.session.localize(o.label)) });
    this.view.stage.dataset.reduced = String(this.reduced);
  }

  private scheduleTravel(): void {
    if (this.view.dialog.open || document.hidden || this.menuOpen() || this.session.phase !== 'travel') return;
    this.travelStarted = performance.now();
    this.timer = setTimeout(/*finishAcceptedConnection*/ () => {
      this.timer = null;
      if (this.disposed || this.session.phase !== 'travel') return;
      this.session.advance(); this.render(/*instant=*/false);
    }, /*delayInMs=*/this.travelRemaining);
  }

  private suspend(): void {
    const paused = this.view.dialog.open || document.hidden || this.menuOpen();
    this.entrance.pause(paused);
    if (paused) {
      this.view.reveal.pause();
      if (this.timer !== null) { this.travelRemaining = Math.max(0, this.travelRemaining - (performance.now() - this.travelStarted)); this.clearTimer(); }
    } else { this.view.reveal.resume(); if (this.timer === null) this.scheduleTravel(); }
    this.updateSurface();
  }
  private clearTimer(): void { if (this.timer !== null) clearTimeout(this.timer); this.timer = null; }
  private menuOpen(): boolean { return this.view.root.querySelector<HTMLDetailsElement>('details')?.open ?? false; }

  private restore(snapshot?: DeductionSnapshot): void {
    this.entrance.cancel();
    const muted = this.audio.muted;
    this.clearTimer(); this.audio.dispose(); this.audio = new DeductionAudio(); this.audio.unlock();
    if (muted) this.audio.toggle();
    this.session = new DeductionSession(this.session.sequence, snapshot);
    this.continued = this.session.phase === 'returned'; this.lastAction = performance.now();
    this.render(/*instant=*/true, /*restored=*/true);
    this.view.root.querySelector('[data-action="sound"]')!.setAttribute('aria-pressed', String(!muted));
  }
  public dispose(): void {
    if (this.disposed) return;
    this.disposed = true; this.entrance.cancel(); this.clearTimer(); this.abort.abort(); this.resize.disconnect(); this.dialogs.dispose();
    this.surface.dispose(); this.audio.dispose(); this.view.dispose();
  }
}

export function mountDeduction(root: HTMLElement, sequence: DeductionSequence, onContinue: () => void): DeductionController {
  return new DeductionController(root, sequence, onContinue);
}
