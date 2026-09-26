import { describe, expect, it } from 'vitest';
import { TRACK_CATALOG } from '../../src/audio/Private/TrackCatalog.js';
import { listSoundtrack } from '../../src/audio/Private/SoundtrackPlaylist.js';

// Structural guard only. Musical intent lives in the comments in CareoTrack.ts.
describe('Careo final cross-examination soundtrack', () => {
  it('keeps every channel aligned, in MIDI range, and on valid drum symbols', () => {
    const track = TRACK_CATALOG.cross_exam_careo;
    expect(track.length % 16).toBe(0); // written in 4/4: 16-step bars
    for (const channel of [track.bass!, track.lead!, track.chords!]) {
      expect(channel).toHaveLength(track.length);
      for (const note of channel.flat()) {
        expect(Number.isInteger(note) && note >= 0 && note <= 127).toBe(true);
      }
    }
    expect(track.drums).toHaveLength(track.length);
    expect(track.drums!.every((hit) => /^[KSHOPC0]+$/.test(hit))).toBe(true);
  });

  it('loops long enough to avoid fatigue and appears in the jukebox', () => {
    const entry = listSoundtrack().find((t) => t.id === 'cross_exam_careo');
    expect(entry).toBeDefined();
    expect(entry!.durationMs).toBeGreaterThan(30_000);
  });

  it('is its own composition, not an alias of another cross-examination', () => {
    const careo = TRACK_CATALOG.cross_exam_careo;
    for (const id of ['cross_exam_moderato', 'cross_exam_allegro', 'cross_exam_presto', 'cross_exam_final'] as const) {
      expect(TRACK_CATALOG[id]).not.toBe(careo);
      expect(TRACK_CATALOG[id].lead).not.toEqual(careo.lead);
    }
  });
});
