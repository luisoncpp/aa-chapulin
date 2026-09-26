import { describe, expect, it } from 'vitest';
import { TRACK_CATALOG } from '../../src/audio/Private/TrackCatalog.js';

// Structural guard only. How the track sounds is a judgement call, not an assertion:
// musical intent belongs in the comments in TruthTracks.ts, not in tests here.
describe('Truth reveal soundtrack', () => {
  it('keeps every channel aligned, in MIDI range, and on valid drum symbols', () => {
    const track = TRACK_CATALOG.truth;
    expect(track.length % 16).toBe(0); // written in 4/4: the loop seam must land on a bar line
    for (const channel of [track.bass!, track.lead!, track.chords!]) {
      expect(channel).toHaveLength(track.length);
      for (const note of channel.flat()) {
        expect(Number.isInteger(note) && note >= 0 && note <= 127).toBe(true);
      }
    }
    expect(track.drums).toHaveLength(track.length);
    expect(track.drums!.every((hit) => /^[KSHOPC0]+$/.test(hit))).toBe(true);
  });
});
