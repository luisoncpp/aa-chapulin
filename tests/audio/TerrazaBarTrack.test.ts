import { describe, expect, it } from 'vitest';
import { TRACK_CATALOG } from '../../src/audio/Private/TrackCatalog.js';

describe('Terraza Bar soundtrack', () => {
  it('provides a long loop with contrasting phrases and melodic breathing room', () => {
    const track = TRACK_CATALOG.terraza_bar;
    expect(track.length * 60 / track.bpm / 4).toBeGreaterThan(30);
    const phrases = [0, 64, 128, 192].map((start) => track.lead!.slice(start, start + 64));
    expect(new Set(phrases.map((phrase) => JSON.stringify(phrase))).size).toBe(4);
    for (const channel of [track.bass!, track.lead!, track.chords!]) {
      expect(channel).toHaveLength(track.length);
      for (const note of channel.flat()) {
        expect(Number.isInteger(note) && note >= 0 && note <= 127).toBe(true);
      }
    }
  });
});
