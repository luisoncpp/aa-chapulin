import { describe, expect, it } from 'vitest';
import { TRACK_CATALOG } from '../../src/audio/Private/TrackCatalog.js';
import { listSoundtrack } from '../../src/audio/Private/SoundtrackPlaylist.js';

// Structural guard only. How the track sounds is a judgement call, not an assertion:
// musical intent belongs in the comments in FinalConfrontationTrack.ts, not here.
describe('Final cross-examination soundtrack', () => {
  it('keeps every channel aligned, in MIDI range, and on valid drum symbols', () => {
    const track = TRACK_CATALOG.cross_exam_final;
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

  it('loops long enough to avoid fatigue during a final cross-examination', () => {
    const entry = listSoundtrack().find((t) => t.id === 'cross_exam_final');
    expect(entry).toBeDefined();
    expect(entry!.durationMs).toBeGreaterThan(30_000);
  });

  it('is its own composition, not an alias of an existing cross-examination', () => {
    const final = TRACK_CATALOG.cross_exam_final;
    for (const id of ['cross_exam_moderato', 'cross_exam_allegro', 'cross_exam_presto'] as const) {
      expect(TRACK_CATALOG[id]).not.toBe(final);
      expect(TRACK_CATALOG[id].lead).not.toEqual(final.lead);
    }
  });
});
