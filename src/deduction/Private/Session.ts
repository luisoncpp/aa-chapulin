// @Architecture(descriptionShort="Owns deduction progression without courtroom side effects")
import type { DeductionSequence, DeductionSnapshot, HistoryEntry, Localized, Phase } from './Contract.js';
import { validateSequence, validSnapshot } from './Validation.js';

export class DeductionSession {
  private state: DeductionSnapshot;
  constructor(public readonly sequence: DeductionSequence, snapshot?: unknown) {
    validateSequence(sequence);
    if (snapshot !== undefined && !validSnapshot(snapshot, sequence)) throw Error('Invalid deduction save');
    this.state = snapshot === undefined ? this.initial() : structuredClone(snapshot as DeductionSnapshot);
    if (this.state.phase === 'travel') this.enter('connection');
  }

  private initial(): DeductionSnapshot {
    return { version: 1, sequenceId: this.sequence.id, phase: 'entry', step: 0, accepted: [],
      selectedId: null, focusId: this.sequence.steps[0].options[0].id, language: 'es',
      history: [{ phase: 'entry', step: 0, optionId: null }] };
  }

  public snapshot(): DeductionSnapshot { return structuredClone(this.state); }
  public get phase(): Phase { return this.state.phase; }
  public get step() { return this.sequence.steps[this.state.step]; }
  public get language() { return this.state.language; }
  public localize(text: Localized): string { return text[this.state.language]; }
  public setLanguage(language: 'es' | 'en'): void { this.state.language = language; }

  public focus(id: string): boolean {
    if (this.phase !== 'question' || !this.step.options.some(o => o.id === id)) return false;
    const changed = this.state.focusId !== id;
    this.state.focusId = id;
    return changed;
  }

  public choose(): boolean {
    if (this.phase !== 'question') return false;
    this.state.selectedId = this.state.focusId;
    this.record('hypothesis');
    if (this.state.selectedId !== this.step.correctId) { this.enter('rejected'); return true; }
    this.state.accepted.push(this.step.correctId);
    this.enter('travel');
    return true;
  }

  public advance(): boolean {
    switch (this.phase) {
      case 'entry': this.enter('premise'); break;
      case 'premise': this.enter('question'); break;
      case 'rejected': this.state.selectedId = null; this.enter('question'); break;
      case 'travel': this.enter('connection'); break;
      case 'connection': this.nextConnection(); break;
      case 'conclusion': this.enter('returned'); break;
      default: return false;
    }
    return true;
  }

  private nextConnection(): void {
    if (this.state.step === this.sequence.steps.length - 1) { this.enter('conclusion'); return; }
    this.state.step++;
    this.state.selectedId = null;
    this.state.focusId = this.step.options[0].id;
    this.enter('premise');
  }

  private enter(phase: Phase): void {
    this.state.phase = phase;
    if (phase !== 'travel' && phase !== 'question') this.record(phase);
    if (phase === 'question' && !this.state.history.some(h => h.phase === phase && h.step === this.state.step)) this.record(phase);
  }

  private record(phase: HistoryEntry['phase']): void {
    this.state.history.push({ phase, step: this.state.step, optionId: this.state.selectedId });
    if (this.state.history.length > 2000) this.state.history.shift();
  }

  public text(entry?: HistoryEntry): string {
    const phase = entry?.phase ?? this.phase;
    const step = this.sequence.steps[entry?.step ?? this.state.step];
    const option = step.options.find(o => o.id === (entry ? entry.optionId : this.state.selectedId));
    if (phase === 'entry') return this.localize(this.sequence.entry);
    if (phase === 'conclusion') return this.localize(this.sequence.conclusion);
    if (phase === 'returned') return this.localize(this.sequence.continuation);
    if (phase === 'question') return this.localize(step.question);
    if (phase === 'rejected') return this.localize(option!.rejection!);
    if (phase === 'travel' || phase === 'hypothesis') return this.localize(option!.label);
    return this.localize(phase === 'premise' ? step.premise : step.connection);
  }
}
