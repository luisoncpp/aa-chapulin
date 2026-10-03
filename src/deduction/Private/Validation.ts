// @Architecture(descriptionShort="Validates authored deductions and untrusted saved sessions")
import type { DeductionSequence, DeductionSnapshot, Localized } from './Contract.js';

function bilingual(text: Localized): boolean {
  return !!text && typeof text.es === 'string' && !!text.es.trim()
    && typeof text.en === 'string' && !!text.en.trim();
}

export function validateSequence(sequence: DeductionSequence): void {
  if (!['donramon', 'chapulin'].includes(sequence.defender)) throw Error('Unknown deduction defender');
  if (!sequence.id || sequence.steps.length < 2 || sequence.steps.length > 5) throw Error('Invalid deduction length or identity');
  const texts = [sequence.author, sequence.entry, sequence.conclusion, sequence.continuation];
  const ids = new Set<string>();
  for (const record of sequence.records) {
    if (!record.id || ids.has(record.id)) throw Error('Duplicate record identity');
    ids.add(record.id);
    texts.push(record.name, record.description);
  }
  const steps = new Set<string>();
  for (const step of sequence.steps) {
    if (!step.id || steps.has(step.id)) throw Error('Duplicate step identity');
    steps.add(step.id);
    validateStep(step, sequence);
    texts.push(step.premise, step.question, step.connection, ...step.options.map(o => o.label));
    texts.push(...step.options.flatMap(o => o.rejection ? [o.rejection] : []));
    if (step.memory) texts.push(step.memory.aspect);
  }
  if (!texts.every(bilingual)) throw Error('Missing Spanish or English copy');
}

function validateStep(step: DeductionSequence['steps'][number], sequence: DeductionSequence): void {
  if (step.options.length < 2 || step.options.length > 4) throw Error('Expected two to four options');
  if (new Set(step.options.map(o => o.id)).size !== step.options.length) throw Error('Duplicate option identity');
  if (!step.options.some(o => o.id === step.correctId)) throw Error('Missing correct option');
  if (step.options.some(o => !o.id || (o.id !== step.correctId && !o.rejection))) throw Error('Missing distractor feedback');
  if (!step.memory) return;
  const record = sequence.records.find(r => r.id === step.memory!.recordId);
  if (!record || (step.memory.indispensable && !record.image)) throw Error('Missing memory resource');
}

export function validSnapshot(value: unknown, sequence: DeductionSequence): value is DeductionSnapshot {
  if (!value || typeof value !== 'object') return false;
  const s = value as DeductionSnapshot;
  const phases = ['entry', 'premise', 'question', 'rejected', 'travel', 'connection', 'conclusion', 'returned'];
  if (s.version !== 1 || s.sequenceId !== sequence.id || !phases.includes(s.phase)) return false;
  if (!Number.isInteger(s.step) || s.step < 0 || s.step >= sequence.steps.length) return false;
  if (s.language !== 'es' && s.language !== 'en') return false;
  if (!Array.isArray(s.accepted) || !Array.isArray(s.history) || s.history.length > 2000) return false;
  const step = sequence.steps[s.step];
  const completed = ['travel', 'connection', 'conclusion', 'returned'].includes(s.phase);
  const expected = s.step + Number(completed);
  if (s.accepted.length !== expected || s.accepted.some((id, i) => id !== sequence.steps[i]?.correctId)) return false;
  if (!step.options.some(o => o.id === s.focusId)) return false;
  if (s.phase === 'entry' && s.step !== 0) return false;
  if (['conclusion', 'returned'].includes(s.phase) && s.step !== sequence.steps.length - 1) return false;
  if (completed && s.selectedId !== step.correctId) return false;
  if (s.phase === 'rejected' && (!step.options.some(o => o.id === s.selectedId) || s.selectedId === step.correctId)) return false;
  if (!completed && s.phase !== 'rejected' && s.selectedId !== null) return false;
  return s.history.every(h => validHistory(h, sequence, phases));
}

function validHistory(h: DeductionSnapshot['history'][number], sequence: DeductionSequence, phases: string[]): boolean {
  if (!h || !Number.isInteger(h.step) || h.step < 0 || h.step >= sequence.steps.length) return false;
  if (![...phases, 'hypothesis'].includes(h.phase)) return false;
  if (['hypothesis', 'rejected', 'travel'].includes(h.phase) && h.optionId === null) return false;
  if (h.phase === 'rejected' && h.optionId === sequence.steps[h.step].correctId) return false;
  return h.optionId === null || sequence.steps[h.step].options.some(o => o.id === h.optionId);
}
