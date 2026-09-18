// @Architecture(descriptionShort="Unit tests for Case 5 archive and grave MIDI tracks", type="test", icon="music")
import { describe, expect, it } from 'vitest';
import { TRACK_CATALOG } from '../../src/audio/Private/TrackCatalog.js';

describe('Case 5 soundtrack', () => {
  it('registers archive and grave tracks distinct from existing cross-exams', () => {
    const archivo = TRACK_CATALOG.archivo;
    const grave = TRACK_CATALOG.cross_exam_grave;
    const moderato = TRACK_CATALOG.cross_exam_moderato;
    expect(archivo.bpm).toBe(84);
    expect(archivo.drums?.[0]).toBe('H');
    expect(grave.bpm).toBeLessThan(moderato.bpm);
    expect(grave.bass?.[0]).not.toBe(moderato.bass?.[0]);
    expect(grave.lead?.[0]).toBeLessThan(Number(moderato.lead?.[0]));
  });
});
