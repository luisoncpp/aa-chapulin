// @Architecture(descriptionShort="Read-only record and history plus isolated save picker")
import type { DeductionSnapshot } from './Contract.js';
import { labels } from './Labels.js';
import { DeductionSaves } from './Saves.js';
import type { DeductionSession } from './Session.js';
import type { DeductionView } from './View.js';
type Menu = 'record' | 'history' | 'save' | 'load';
interface DialogHost { view: DeductionView; session: () => DeductionSession; restore: (snapshot: DeductionSnapshot) => void }

export class DeductionDialogs {
  private menu: Menu = 'record';
  private pendingSlot: number | null = null;
  private readonly saves: DeductionSaves;
  private readonly abort = new AbortController();
  constructor(private readonly host: DialogHost) {
    this.saves = new DeductionSaves(host.session().sequence);
    host.view.dialog.addEventListener('click', /*selectSaveSlot*/ event => {
      const button = (event.target as Element).closest<HTMLButtonElement>('[data-slot]');
      if (button) this.selectSlot(Number(button.dataset.slot));
    }, { signal: this.abort.signal });
  }

  public open(menu: Menu): void {
    this.menu = menu; this.pendingSlot = null; this.render(); this.host.view.dialog.showModal();
  }
  public refresh(): void { if (this.host.view.dialog.open) this.render(); }

  private render(): void {
    const session = this.host.session(), l = labels[session.language];
    const dialog = this.host.view.dialog;
    dialog.querySelector('h2')!.textContent = l[this.menu];
    dialog.querySelector('[data-action="close"]')!.textContent = l.close;
    const body = dialog.querySelector<HTMLElement>('.dialog-content')!; body.replaceChildren();
    if (session.phase === 'question' || session.phase === 'rejected') {
      const question = document.createElement('p'); question.className = 'consult-question';
      question.textContent = session.localize(session.step.question); body.append(question);
    }
    const language = document.createElement('button'); language.dataset.action = 'language'; language.textContent = l.language;
    body.append(language);
    if (this.menu === 'record') this.renderRecord(body);
    else if (this.menu === 'history') this.renderHistory(body);
    else this.renderSlots(body);
  }

  private renderRecord(body: HTMLElement): void {
    const session = this.host.session(), l = labels[session.language];
    for (const kind of ['evidence', 'person'] as const) {
      const heading = document.createElement('h3'); heading.textContent = kind === 'evidence' ? l.evidence : l.people; body.append(heading);
      for (const record of session.sequence.records.filter(r => r.kind === kind)) {
        const article = document.createElement('article');
        const title = document.createElement('h4'); title.textContent = session.localize(record.name);
        const text = document.createElement('p'); text.textContent = session.localize(record.description);
        article.append(title, text); body.append(article);
      }
    }
  }

  private renderHistory(body: HTMLElement): void {
    const session = this.host.session();
    const list = document.createElement('ol'); list.className = 'history-list';
    for (const entry of session.snapshot().history) {
      const item = document.createElement('li'); item.dataset.phase = entry.phase;
      item.textContent = session.text(entry); list.append(item);
    }
    body.append(list);
  }

  private renderSlots(body: HTMLElement): void {
    const session = this.host.session(), l = labels[session.language];
    this.saves.read().forEach((slot, i) => {
      const row = document.createElement('div'); row.className = 'save-row';
      const button = document.createElement('button'); button.dataset.slot = String(i);
      button.textContent = `${l.slot} ${i + 1} · ${slot ? new Date(slot.timestamp).toLocaleString(session.language) : l.empty}`;
      button.disabled = this.menu === 'load' && !slot; row.append(button);
      if (this.pendingSlot === i) {
        const prompt = document.createElement('span'); prompt.textContent = l.overwrite; row.append(prompt);
        for (const action of ['yes', 'no'] as const) {
          const confirm = document.createElement('button'); confirm.dataset.action = `overwrite-${action}`;
          confirm.textContent = l[action]; row.append(confirm);
        }
      }
      body.append(row);
    });
  }

  private selectSlot(index: number): void {
    const slot = this.saves.read()[index];
    if (this.menu === 'load') {
      if (!slot) { this.host.view.notify(labels[this.host.session().language].noSave); return; }
      this.host.view.dialog.close(); this.host.restore(slot.snapshot); return;
    }
    if (this.menu !== 'save') return;
    if (slot) { this.pendingSlot = index; this.render(); return; }
    this.save(index);
  }

  public overwrite(confirmed: boolean): void {
    if (this.pendingSlot === null) return;
    if (confirmed) { this.save(this.pendingSlot); return; }
    this.pendingSlot = null; this.render();
  }

  private save(index: number): void {
    const session = this.host.session(), l = labels[session.language];
    const saved = this.saves.write(index, session.snapshot()); this.host.view.notify(saved ? l.saved : l.failed);
    if (saved) this.host.view.dialog.close();
  }
  public dispose(): void { this.abort.abort(); }
}
