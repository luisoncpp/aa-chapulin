import type { NoteEntry } from '../../../types/index.js';

/** Keep sounding the previous note for one more 16th. */
export const HOLD = -1;

// fallow-ignore-next-line unused-export
export function repeat(pattern: NoteEntry[], times: number): NoteEntry[] {
  const out: NoteEntry[] = [];
  for (let i = 0; i < times; i++) out.push(...pattern);
  return out;
}

/** Octave-down echo between steps `[from, to)`. */
export function echoRange(notes: NoteEntry[], from: number, to: number): NoteEntry[] {
  return notes.map((note, index) => echoAt(note, index, { from, to }));
}

function echoAt(note: NoteEntry, index: number, span: { from: number; to: number }): NoteEntry {
  if (outside(index, span)) return 0;
  if (typeof note !== 'number') return 0;
  if (note <= 0) return 0;
  return note - 12;
}

function outside(index: number, span: { from: number; to: number }): boolean {
  return index < span.from || index >= span.to;
}
