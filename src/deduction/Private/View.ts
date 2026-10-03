// @Architecture(descriptionShort="Accessible dialogue and targets for spatial deduction choices")
import type { DeductionSession } from './Session.js';
import { labels } from './Labels.js';
import { TextReveal } from './TextReveal.js';
import { choiceLayout } from './ChoiceLayout.js';
import type { DeductionSequence } from './Contract.js';
import { defenders } from './Defenders.js';

export class DeductionView {
  public readonly stage: HTMLElement;
  public readonly backdrop: HTMLElement;
  public readonly content: HTMLElement;
  public readonly dialog: HTMLDialogElement;
  public readonly reveal = new TextReveal();
  constructor(public readonly root: HTMLElement, defender: DeductionSequence['defender']) {
    root.innerHTML = `<header class="demo-heading"><h1></h1><span data-label="demo"></span></header>
      <nav class="utilities" aria-label="Demo"><button data-action="record"></button><details class="demo-menu"><summary data-label="menu"></summary><div class="menu-panel"><button data-action="history"></button>
      <button data-action="save"></button><button data-action="load"></button><button data-action="language"></button>
      <button data-action="sound" aria-pressed="true"></button><button data-action="restart"></button>
      <div class="preferences"><label><input type="checkbox" data-setting="motion"><span data-label="motion"></span></label>
      <label><input type="checkbox" data-setting="flat"><span data-label="flat"></span></label><span class="render-status"></span></div></div></details></nav>
      <section class="deduction-stage" aria-label="Deducción final"><div class="court" aria-hidden="true">
      <img class="defender" src="${defenders[defender].sprite}" alt=""><img class="bench" src="assets/court_bench.webp" alt=""></div>
      <div class="thought-space" aria-hidden="true"></div><div class="deduction-content"></div></section>
      <footer><p data-label="footer"></p></footer>
      <p class="notice" role="status"></p><dialog class="deduction-dialog"><div class="dialog-heading"><h2></h2>
      <button data-action="close"></button></div><div class="dialog-content"></div></dialog>`;
    this.stage = root.querySelector('.deduction-stage')!;
    this.backdrop = root.querySelector('.thought-space')!;
    this.content = root.querySelector('.deduction-content')!;
    this.dialog = root.querySelector('dialog')!;
  }

  public render(session: DeductionSession, instant = false): void {
    const l = labels[session.language];
    const phase = session.phase;
    const question = phase === 'question';
    this.stage.dataset.phase = phase;
    this.root.ownerDocument.documentElement.lang = session.language;
    this.root.querySelector('h1')!.textContent = l.title;
    for (const el of this.root.querySelectorAll<HTMLElement>('[data-label]')) {
      el.textContent = l[el.dataset.label as keyof typeof l];
    }
    for (const el of this.root.querySelectorAll<HTMLElement>('[data-action]')) {
      const key = el.dataset.action as keyof typeof l;
      if (key in l) el.textContent = l[key];
    }
    this.content.innerHTML = `<div class="sequence-heading"><span class="state-label"></span><span class="health" aria-label="${l.health}">◆ ◆ ◆ ◆ ◆</span></div>
      <aside class="memory" hidden></aside><div class="reading"><p class="author"></p><h2 id="deduction-question"></h2>
      <p class="thought-text"></p><button class="dialogue-advance" data-action="advance"></button></div>
      <div class="answers" role="radiogroup" aria-labelledby="deduction-question"></div>`;
    this.content.querySelector('.author')!.textContent = session.localize(session.sequence.author);
    const heading = question ? l.question : phase === 'travel' ? l.connection : l[phase as keyof typeof l] || l.thought;
    this.content.querySelector('.state-label')!.textContent = heading;
    this.renderText(session, instant);
    this.renderOptions(session);
    this.renderMemory(session);
    this.renderAdvance(session);
  }

  public positionOptions(): void {
    const answers = this.content.querySelector<HTMLElement>('.answers');
    if (!answers || answers.hidden) return;
    const rect = this.stage.getBoundingClientRect();
    const layout = choiceLayout(Number(answers.dataset.count), rect.width / rect.height < 1.2);
    this.content.querySelectorAll<HTMLButtonElement>('[data-option]').forEach((button, i) => {
      const place = layout[i];
      Object.assign(button.style, { left: `${place.x * 100}%`, top: `${place.y * 100}%`, width: `${place.width * 100}%`, height: `${place.height * 100}%` });
    });
  }

  private renderText(session: DeductionSession, instant: boolean): void {
    const heading = this.content.querySelector<HTMLElement>('h2')!;
    const text = this.content.querySelector<HTMLElement>('.thought-text')!;
    const isHeading = ['question', 'conclusion', 'travel'].includes(session.phase);
    heading.hidden = !isHeading;
    text.hidden = isHeading;
    if (isHeading) { this.reveal.dispose(); heading.textContent = session.text(); return; }
    this.reveal.show(text, session.text(), instant);
  }

  private renderOptions(session: DeductionSession): void {
    const answers = this.content.querySelector<HTMLElement>('.answers')!;
    answers.hidden = session.phase !== 'question';
    answers.dataset.count = String(session.step.options.length);
    if (answers.hidden) return;
    const focus = session.snapshot().focusId;
    session.step.options.forEach((option, i) => {
      const button = document.createElement('button');
      button.dataset.option = option.id;
      button.setAttribute('aria-label', session.localize(option.label));
      button.setAttribute('role', 'radio');
      button.setAttribute('aria-checked', String(focus === option.id));
      button.tabIndex = focus === option.id ? 0 : -1;
      const mark = document.createElement('span');
      mark.className = 'option-mark'; mark.textContent = String.fromCharCode(65 + i);
      const text = document.createElement('span'); text.textContent = session.localize(option.label);
      button.append(mark, text); answers.append(button);
    });
    this.positionOptions();
  }

  public focus(session: DeductionSession, moveKeyboard: boolean): void {
    for (const button of this.content.querySelectorAll<HTMLButtonElement>('[data-option]')) {
      const selected = button.dataset.option === session.snapshot().focusId;
      button.setAttribute('aria-checked', String(selected)); button.tabIndex = selected ? 0 : -1;
      if (selected && moveKeyboard) button.focus();
    }
  }

  private renderMemory(session: DeductionSession): void {
    const memory = session.step.memory;
    const el = this.content.querySelector<HTMLElement>('.memory')!;
    el.hidden = !memory || ['entry', 'conclusion', 'returned', 'question', 'rejected'].includes(session.phase);
    if (el.hidden || !memory) return;
    const record = session.sequence.records.find(r => r.id === memory.recordId)!;
    const name = document.createElement('strong'); name.textContent = session.localize(record.name);
    const aspect = document.createElement('p'); aspect.textContent = session.localize(memory.aspect);
    if (record.image) {
      const image = document.createElement('img'); image.src = record.image; image.alt = session.localize(record.name);
      image.addEventListener('error', /*keepTextFallback*/ () => image.remove(), { once: true }); el.append(image);
    }
    el.append(name, aspect);
  }

  private renderAdvance(session: DeductionSession): void {
    const l = labels[session.language];
    const button = this.content.querySelector<HTMLButtonElement>('[data-action="advance"]')!;
    const phase = session.phase;
    button.setAttribute('aria-label', phase === 'entry' ? l.start
      : phase === 'rejected' ? l.retry : phase === 'conclusion' ? l.return : l.next);
    button.hidden = phase === 'returned' || phase === 'question' || phase === 'travel';
    button.disabled = phase === 'travel';
  }

  public notify(text: string): void { this.root.querySelector('.notice')!.textContent = text; }
  public dispose(): void { this.reveal.dispose(); if (this.dialog.open) this.dialog.close(); this.root.replaceChildren(); }
}
