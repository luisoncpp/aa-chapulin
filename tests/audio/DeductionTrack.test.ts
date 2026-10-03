import { describe, expect, it } from 'vitest';
import { TRACK_CATALOG } from '../../src/audio/Private/TrackCatalog.js';
import { listSoundtrack } from '../../src/audio/index.js';
import { DRUM_SYMBOLS } from '../../src/audio/Private/Instruments/index.js';
import { HOLD } from '../../src/audio/Private/tracks/Notation.js';
import type { ChannelName } from '../../src/types/index.js';

describe.each(['deduccion_final', 'deduccion_anticipacion'] as const)('%s soundtrack', (id) => {
  it('offers a separate, sustained thinking loop in the jukebox', () => {
    const entry = listSoundtrack().find((item) => item.id === id);
    expect(entry).toBeDefined();
    expect(entry!.durationMs).toBeGreaterThanOrEqual(30_000);
    expect(TRACK_CATALOG[id]).not.toBe(TRACK_CATALOG.truth);
  });

  it('keeps sounding channels, holds and dynamics aligned across the loop', () => {
    const track = TRACK_CATALOG[id];
    for (const channel of ['bass', 'lead', 'chords', 'counter'] as ChannelName[]) {
      const notes = track[channel]!;
      expect(notes).toHaveLength(track.length);
      expect(notes.flat().some((note) => note > 0)).toBe(true);
      for (const note of notes.flat()) {
        expect(note === HOLD || (Number.isInteger(note) && note >= 0 && note <= 127)).toBe(true);
      }
      expect(notes[0]).not.toBe(HOLD);
      expect(track.accents![channel]).toHaveLength(track.length);
      expect(track.accents![channel]!.every((gain) => Number.isFinite(gain) && gain >= 0 && gain <= 1)).toBe(true);
    }
    expect(track.drums).toHaveLength(track.length);
    expect(track.drums!.every((hit) => [...hit].every((symbol) => DRUM_SYMBOLS.has(symbol)))).toBe(true);
  });
});
