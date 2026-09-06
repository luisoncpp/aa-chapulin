import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { TRACK_CATALOG } from '../../src/audio/Private/TrackCatalog.js';

describe('Terraza Bar soundtrack', () => {
  it.each(['es', 'en'] as const)('selects the dedicated theme on both days in %s', (language) => {
    const scenes = getCaseScript(language, 'case4').investigation;
    expect(scenes.hotel_terraza.bgm).toBe('terraza_bar');
    expect(scenes.hotel_terraza_d2.bgm).toBe('terraza_bar');
    expect(TRACK_CATALOG[scenes.hotel_terraza.bgm]).toBeDefined();
  });

  it('provides a long loop with contrasting phrases and melodic breathing room', () => {
    const track = TRACK_CATALOG.terraza_bar;
    expect(track.length * 60 / track.bpm / 4).toBeGreaterThan(30);
    const phrases = [0, 64, 128, 192].map((start) => track.lead!.slice(start, start + 64));
    expect(new Set(phrases.map((phrase) => JSON.stringify(phrase))).size).toBe(4);
    for (const phrase of phrases) {
      expect(phrase.filter((note) => note === 0).length).toBeGreaterThan(32);
    }
    for (const channel of [track.bass!, track.lead!, track.chords!]) {
      expect(channel).toHaveLength(track.length);
      for (const note of channel.flat()) {
        expect(Number.isInteger(note) && note >= 0 && note <= 127).toBe(true);
      }
    }
  });
});
