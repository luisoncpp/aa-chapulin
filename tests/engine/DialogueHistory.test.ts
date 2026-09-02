// @Architecture(descriptionShort="Unit tests for the capped dialogue backlog", type="test", icon="layers")
import { describe, expect, it, beforeEach } from 'vitest';
import { DialogueHistory } from '../../src/engine/Private/DialogueHistory.js';

describe('DialogueHistory', () => {
  let history: DialogueHistory;

  beforeEach(() => {
    history = new DialogueHistory();
  });

  it('appends entries in display order', () => {
    history.record({ speaker: 'DEFENSA', text: 'Uno.' });
    history.record({ speaker: 'FISCAL', text: 'Dos.' });
    expect(history.entries()).toEqual([
      { speaker: 'DEFENSA', text: 'Uno.' },
      { speaker: 'FISCAL', text: 'Dos.' }
    ]);
  });

  it('defaults a missing speaker to an empty plate', () => {
    history.record({ text: 'Narración.' });
    expect(history.entries()).toEqual([{ speaker: '', text: 'Narración.' }]);
  });

  it('ignores lines with no text', () => {
    history.record({ speaker: 'DEFENSA' });
    history.record({ speaker: 'DEFENSA', text: '' });
    expect(history.entries()).toHaveLength(0);
  });

  it('skips an identical consecutive line so re-viewed statements do not duplicate', () => {
    history.record({ speaker: 'PETERETE', text: 'Yo no estaba ahí.' });
    history.record({ speaker: 'PETERETE', text: 'Yo no estaba ahí.' });
    expect(history.entries()).toHaveLength(1);
  });

  it('records the same text again when it comes back after another speaker', () => {
    history.record({ speaker: 'PETERETE', text: 'Yo no estaba ahí.' });
    history.record({ speaker: 'DEFENSA', text: '¿Seguro?' });
    history.record({ speaker: 'PETERETE', text: 'Yo no estaba ahí.' });
    expect(history.entries()).toHaveLength(3);
  });

  it('evicts the oldest entry past the 150 line cap', () => {
    for (let i = 0; i < 155; i++) {
      history.record({ speaker: 'DEFENSA', text: `Línea ${i}.` });
    }
    const entries = history.entries();
    expect(entries).toHaveLength(150);
    expect(entries[0].text).toBe('Línea 5.');
    expect(entries[149].text).toBe('Línea 154.');
  });

  it('returns a copy so callers cannot mutate the log', () => {
    history.record({ speaker: 'DEFENSA', text: 'Uno.' });
    (history.entries() as { speaker: string; text: string }[]).push({ speaker: 'X', text: 'Y' });
    expect(history.entries()).toHaveLength(1);
  });

  it('empties the log on clear', () => {
    history.record({ speaker: 'DEFENSA', text: 'Uno.' });
    history.clear();
    expect(history.entries()).toHaveLength(0);
  });
});
