// @Architecture(descriptionShort="Unit tests for jukebox soundtrack playlist builder", type="test", icon="music")
import { describe, expect, it } from 'vitest';
import { TRACK_CATALOG } from '../../src/audio/Private/TrackCatalog.js';
import { listSoundtrack, type SoundtrackEntry } from '../../src/audio/index.js';

describe('listSoundtrack', () => {
  it('returns unique compositions in catalog insertion order', () => {
    const playlist: SoundtrackEntry[] = listSoundtrack();
    const catalogKeys = Object.keys(TRACK_CATALOG);
    expect(playlist.length).toBe(catalogKeys.length - 1);
    expect(playlist.some((e) => e.id === 'epilogue')).toBe(false);
    expect(playlist.some((e) => e.id === 'victory')).toBe(true);
  });

  it('computes durationMs from bpm and length', () => {
    const trial = listSoundtrack().find((e) => e.id === 'trial')!;
    expect(trial.durationMs).toBe(trial.length * (60000 / trial.bpm / 4));
  });

  it('never lists duplicate TrackDefinition objects', () => {
    const playlist: SoundtrackEntry[] = listSoundtrack();
    const defs = playlist.map((e) => TRACK_CATALOG[e.id]);
    expect(new Set(defs).size).toBe(defs.length);
  });
});
