import { describe, expect, it } from 'vitest';
import { TRACK_CATALOG } from '../../src/audio/Private/TrackCatalog.js';

describe('Truth reveal soundtrack', () => {
  it('provides a long multi-phrase loop with four contrasting sections', () => {
    const track = TRACK_CATALOG.truth;
    expect((track.length * 60) / track.bpm / 4).toBeGreaterThan(30);
    const phrases = [0, 64, 128, 192].map((start) => track.lead!.slice(start, start + 64));
    expect(new Set(phrases.map((phrase) => JSON.stringify(phrase))).size).toBe(4);
  });

  it('resolves the dominant leading tone into the minor opening across the loop', () => {
    const track = TRACK_CATALOG.truth;
    const melody = track.lead!.flat().filter((note) => note > 0);
    expect(melody[0] - melody.at(-1)!).toBe(1);
    const root = (track.bass![0] as number) % 12;
    const opening = (track.chords![0] as number[]).map((note) => note % 12);
    expect(opening).toContain((root + 3) % 12);
    expect(opening).not.toContain((root + 4) % 12);
  });

  it('leaves melodic space and reserves the fullest percussion for the climax', () => {
    const track = TRACK_CATALOG.truth;
    const revealLead = track.lead!.slice(128, 256);
    expect(revealLead.filter((note) => note === 0).length).toBeGreaterThan(48);
    const snares = (start: number) => track.drums!.slice(start, start + 64)
      .filter((hit) => hit.includes('S')).length;
    expect(snares(128)).toBeGreaterThan(snares(0));
    expect(snares(128)).toBeGreaterThan(snares(192));
  });

  it('keeps every channel aligned and in MIDI range', () => {
    const track = TRACK_CATALOG.truth;
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
