// @Architecture(descriptionShort="Lists unique soundtrack entries for the jukebox UI", type="catalog", icon="music")
/**
 * Soundtrack playlist builder for the title-screen music player.
 * Walks [[./TrackCatalog.ts]] in insertion order and skips alias duplicates.
 */

import type { SoundtrackEntry, TrackDefinition, TrackName } from '../../types/index.js';
import { TRACK_CATALOG } from './TrackCatalog.js';

export function listSoundtrack(): SoundtrackEntry[] {
  const seen = new Set<TrackDefinition>();
  const entries: SoundtrackEntry[] = [];

  for (const [rawId, def] of Object.entries(TRACK_CATALOG)) {
    if (seen.has(def)) continue;
    seen.add(def);
    const id = rawId as TrackName;
    entries.push({
      id,
      bpm: def.bpm,
      length: def.length,
      durationMs: def.length * (60000 / def.bpm / 4)
    });
  }
  return entries;
}
