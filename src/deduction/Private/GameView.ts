// @Architecture(descriptionShort="Renders deduction options over the live courtroom scene")
import type { DeductionSequence } from './Contract.js';
import type { DeductionSession } from './Session.js';
import { DeductionSurface, type PresentationState } from './Surface.js';
import { choiceLayout } from './ChoiceLayout.js';
import { labels } from './Labels.js';

export class GameDeductionView {
  public readonly overlay: HTMLElement;
  public readonly courtZoom: HTMLElement;
  public readonly cleanupCourt: () => void;
  private readonly visual: HTMLElement;
  private readonly buttons: HTMLElement;
  private readonly memory: HTMLElement;
  private readonly conclusion: HTMLButtonElement;
  private readonly surface: DeductionSurface;
  private readonly abort = new AbortController();
  private choose: (() => void) | null = null;
  private focusChoice: ((id: string) => void) | null = null;
  private state: PresentationState = { count: 1, selected: -1, focus: 0, phase: 'entry', paused: false, reduced: false, labels: [] };
  private resize: ResizeObserver;

  constructor(private readonly root: HTMLElement, sequence: DeductionSequence, private readonly advance: () => void) {
    this.courtZoom = wrapCourtScene(root);
    this.cleanupCourt = () => unwrapCourtScene(this.courtZoom);
    this.overlay = document.createElement('div'); this.overlay.className = 'deduction-overlay';
    this.visual = document.createElement('div'); this.visual.className = 'deduction-visual';
    this.buttons = document.createElement('div'); this.buttons.className = 'deduction-targets';
    this.memory = document.createElement('aside'); this.memory.className = 'deduction-memory';
    this.conclusion = document.createElement('button'); this.conclusion.type = 'button';
    this.conclusion.className = 'deduction-conclusion'; this.conclusion.dataset.deductionReturn = 'true';
    this.memory.hidden = true; this.conclusion.hidden = true;
    this.overlay.append(this.visual, this.buttons, this.memory, this.conclusion); root.append(this.overlay);
    this.surface = new DeductionSurface(this.visual, mode => { this.overlay.dataset.renderer = mode.toLowerCase(); });
    void this.surface.setFlat(false);
    this.resize = new ResizeObserver(/*repositionIdeaHitTargets*/ () => this.positionTargets());
    this.resize.observe(this.visual);
    this.overlay.addEventListener('click', event => this.onClick(event), { signal: this.abort.signal });
    this.overlay.addEventListener('pointerover', event => this.onPointerOver(event), { signal: this.abort.signal });
    this.overlay.addEventListener('keydown', event => this.onKey(event), { signal: this.abort.signal });
    this.root.dataset.deduction = sequence.id;
  }

  public render(session: DeductionSession, choose: () => void, focus: (id: string) => void, optionsReady = true): void {
    const state = session.snapshot(), options = session.step.options;
    this.choose = choose; this.focusChoice = focus;
    const active = session.phase === 'question' && optionsReady;
    this.buttons.replaceChildren(); this.buttons.hidden = !active;
    this.buttons.setAttribute('role', 'radiogroup');
    this.buttons.setAttribute('aria-label', session.text());
    this.overlay.dataset.phase = session.phase;
    this.renderMemory(session); this.renderConclusion(session);
    const labels = options.map(option => session.localize(option.label));
    this.state = { count: options.length, selected: options.findIndex(option => option.id === state.selectedId),
      focus: options.findIndex(option => option.id === state.focusId),
      phase: session.phase === 'question' && !active ? 'premise' : session.phase,
      paused: this.paused(), reduced: matchMedia('(prefers-reduced-motion: reduce)').matches, labels };
    this.surface.update(this.state);
    if (!active) return;
    options.forEach((option, index) => {
      const target = document.createElement('button');
      target.type = 'button'; target.dataset.option = option.id;
      target.setAttribute('role', 'radio'); target.setAttribute('aria-checked', String(option.id === state.focusId));
      target.setAttribute('aria-label', session.localize(option.label));
      target.textContent = session.localize(option.label);
      target.tabIndex = option.id === state.focusId ? 0 : -1; this.buttons.append(target);
      target.style.setProperty('--deduction-target-index', String(index));
    });
    this.positionTargets();
  }

  private renderMemory(session: DeductionSession): void {
    const memory = session.step.memory;
    this.memory.hidden = session.phase !== 'connection' || !memory;
    this.memory.replaceChildren();
    if (this.memory.hidden || !memory) return;
    const record = session.sequence.records.find(item => item.id === memory.recordId)!;
    const title = document.createElement('strong'); title.textContent = session.localize(record.name);
    const aspect = document.createElement('p'); aspect.textContent = session.localize(memory.aspect);
    this.memory.append(title, aspect);
  }

  private renderConclusion(session: DeductionSession): void {
    const entering = session.phase === 'conclusion' && this.conclusion.hidden;
    this.root.dataset.deductionPhase = session.phase;
    this.conclusion.hidden = session.phase !== 'conclusion';
    this.conclusion.textContent = session.localize(session.sequence.conclusion);
    this.conclusion.setAttribute('aria-label', `${this.conclusion.textContent}. ${labels[session.language].return}`);
    if (entering) this.conclusion.focus({ preventScroll: true });
  }

  private positionTargets(): void {
    const rect = this.visual.getBoundingClientRect();
    const layout = choiceLayout(this.buttons.children.length, rect.width / Math.max(1, rect.height) < 1.2);
    this.buttons.querySelectorAll<HTMLButtonElement>('[data-option]').forEach((button, index) => {
      const item = layout[index]; if (!item) return;
      Object.assign(button.style, { left: `${item.x * 100}%`, top: `${item.y * 100}%`,
        width: `${item.width * 100}%`, height: `${item.height * 100}%` });
    });
  }

  public focus(session: DeductionSession, id: string): void {
    if (!session.focus(id)) return;
    const focus = session.snapshot().focusId;
    this.buttons.querySelectorAll<HTMLButtonElement>('[data-option]').forEach(button => {
      const active = button.dataset.option === focus;
      button.setAttribute('aria-checked', String(active)); button.tabIndex = active ? 0 : -1;
    });
    const options = session.step.options;
    this.state = { count: options.length, selected: -1, focus: options.findIndex(option => option.id === focus),
      phase: session.phase, paused: this.paused(), reduced: matchMedia('(prefers-reduced-motion: reduce)').matches,
      labels: options.map(option => session.localize(option.label)) };
    this.surface.update(this.state);
  }

  public pause(paused: boolean): void { this.state = { ...this.state, paused }; this.surface.update(this.state); }

  private onClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).closest('[data-deduction-return]')) {
      event.stopPropagation(); this.advance(); return;
    }
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-option]');
    if (!button) return;
    event.stopPropagation(); this.focusChoice?.(button.dataset.option!); this.choose?.();
  }

  private onPointerOver(event: PointerEvent): void {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-option]');
    if (!button) return;
    const id = button.dataset.option;
    if (id) this.focusChoice?.(id);
  }

  private onKey(event: KeyboardEvent): void {
    if (event.target === this.conclusion && ['Enter', ' '].includes(event.key)) {
      event.preventDefault(); event.stopPropagation(); this.advance(); return;
    }
    const buttons = [...this.buttons.querySelectorAll<HTMLButtonElement>('[data-option]')];
    const current = buttons.findIndex(button => button === document.activeElement);
    if (current < 0 || !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Enter', ' '].includes(event.key)) return;
    event.preventDefault(); event.stopPropagation();
    if (event.key === 'Enter' || event.key === ' ') { this.focusChoice?.(buttons[current].dataset.option!); this.choose?.(); return; }
    const delta = ['ArrowLeft', 'ArrowUp'].includes(event.key) ? -1 : 1;
    const next = buttons[(current + delta + buttons.length) % buttons.length];
    this.focusChoice?.(next.dataset.option!); next.focus();
  }

  private paused(): boolean { return document.hidden || this.root.querySelector('.game-modal:not(.hidden)') !== null; }
  public dispose(): void {
    this.abort.abort(); this.resize.disconnect(); this.surface.dispose(); this.overlay.remove();
    delete this.root.dataset.deduction; delete this.root.dataset.deductionPhase; this.cleanupCourt();
  }
}

function wrapCourtScene(root: HTMLElement): HTMLElement {
  const scene = root.querySelector<HTMLElement>('#scene-bg')!;
  const parent = scene.parentElement!;
  const frame = document.createElement('div'); frame.id = 'deduction-court-zoom';
  parent.insertBefore(frame, scene);
  for (const selector of ['#scene-bg', '#character-container', '#court-furniture-container']) {
    const layer = root.querySelector<HTMLElement>(selector); if (layer) frame.append(layer);
  }
  return frame;
}

function unwrapCourtScene(frame: HTMLElement): void {
  const parent = frame.parentElement; if (!parent) return;
  for (const child of [...frame.children]) parent.insertBefore(child, frame);
  frame.remove();
}
