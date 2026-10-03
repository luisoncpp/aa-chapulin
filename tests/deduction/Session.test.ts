import { describe, it, expect } from 'vitest';
import { DeductionSession, validateSequence } from '../../src/deduction/index.js';
import { demoSequence } from '../../src/demos/DeductionStory.js';

function question(session = new DeductionSession(demoSequence)) {
  session.advance(); session.advance(); return session;
}
function solve(session: DeductionSession) {
  session.focus(session.step.correctId); session.choose();
}

describe('final deduction progression', () => {
  it('keeps a rejected hypothesis on the same question without losing connections', () => {
    const session = question(); solve(session); session.advance(); session.advance(); session.advance();
    const before = session.snapshot();
    session.focus(session.step.options.find(o => o.id !== session.step.correctId)!.id); session.choose();
    expect(session.phase).toBe('rejected'); expect(session.text()).toBeTruthy();
    expect(session.snapshot().accepted).toEqual(before.accepted);
    session.advance(); expect(session.phase).toBe('question');
    expect(session.snapshot().step).toBe(before.step);
    expect(session.choose()).toBe(true);
  });

  it('accepts once and requires a separate action for the connection and conclusion', () => {
    const session = question();
    while (session.phase !== 'conclusion') {
      if (session.phase === 'question') {
        solve(session); const accepted = session.snapshot().accepted;
        expect(session.choose()).toBe(false); expect(session.snapshot().accepted).toEqual(accepted);
        session.advance(); expect(session.phase).toBe('connection');
      } else session.advance();
    }
    expect(session.snapshot().accepted).toHaveLength(demoSequence.steps.length);
    expect(session.choose()).toBe(false); expect(session.phase).toBe('conclusion');
    session.advance(); expect(session.phase).toBe('returned'); expect(session.advance()).toBe(false);
  });

  it('round-trips every reading phase without duplicate history', () => {
    const session = new DeductionSession(demoSequence);
    for (const phase of ['entry', 'premise', 'question'] as const) {
      expect(session.phase).toBe(phase);
      const restored = new DeductionSession(demoSequence, session.snapshot());
      expect(restored.snapshot()).toEqual(session.snapshot()); session.advance();
    }
    session.focus(session.step.options.find(o => o.id !== session.step.correctId)!.id); session.choose();
    expect(new DeductionSession(demoSequence, session.snapshot()).snapshot()).toEqual(session.snapshot());
    session.advance(); solve(session);
    const restored = new DeductionSession(demoSequence, session.snapshot());
    expect(restored.phase).toBe('connection'); expect(restored.snapshot().accepted).toEqual(session.snapshot().accepted);
    expect(new DeductionSession(demoSequence, restored.snapshot()).snapshot()).toEqual(restored.snapshot());
  });

  it('changes language without changing option identity, progress or selected hypothesis', () => {
    const session = question(); solve(session); session.advance();
    const before = session.snapshot(); session.setLanguage('en');
    expect(session.snapshot()).toEqual({ ...before, language: 'en' });
    expect(session.text()).toBe(session.step.connection.en);
  });

  it('rejects incompatible saves and impossible progress', () => {
    const snapshot = question().snapshot();
    for (const bad of [null, {}, { ...snapshot, accepted: ['fake'] }, { ...snapshot, selectedId: 'fake' },
      { ...snapshot, phase: 'conclusion' }, { ...snapshot, history: [{ phase: 'rejected', step: 0, optionId: null }] }]) {
      expect(() => new DeductionSession(demoSequence, bad)).toThrow();
    }
  });

  it('validates bilingual copy, option uniqueness and feedback before play', () => {
    expect(() => validateSequence(demoSequence)).not.toThrow();
    for (const mutation of ['feedback', 'translation', 'identity', 'image']) {
      const sequence = structuredClone(demoSequence);
      const step = sequence.steps[0];
      if (mutation === 'feedback') delete step.options.find(o => o.id !== step.correctId)!.rejection;
      if (mutation === 'translation') step.question.en = '';
      if (mutation === 'identity') step.options[1].id = step.options[0].id;
      if (mutation === 'image') step.memory!.indispensable = true;
      expect(() => validateSequence(sequence)).toThrow();
    }
  });
});
