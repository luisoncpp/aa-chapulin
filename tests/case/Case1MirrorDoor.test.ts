// @Architecture(descriptionShort="Verifies mirror corridor gallery door hotspot dialogue and labels", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';

describe('Case 1 mirror corridor gallery door hotspot', () => {
  const es = getCaseScript('es', 'case1');
  const en = getCaseScript('en', 'case1');

  it('states that the door leads to the gallery and not the yard in Spanish', () => {
    const doorHotspot = es.investigation.cuarto_camaras.hotspots.find(
      (h) => h.id === 'hotspot_acceso_carga'
    );
    expect(doorHotspot).toBeDefined();
    expect(doorHotspot?.label).toBe('Puerta a la galería');

    const florindaLine = doorHotspot?.dialogue.find((l) => l.speaker === 'FLORINDA');
    expect(florindaLine?.text).toContain('A la galería');
    expect(florindaLine?.text).not.toContain('Al patio');
  });

  it('states that the door leads to the gallery and not the yard in English', () => {
    const doorHotspot = en.investigation.cuarto_camaras.hotspots.find(
      (h) => h.id === 'hotspot_acceso_carga'
    );
    expect(doorHotspot).toBeDefined();
    expect(doorHotspot?.label).toBe('Door to the gallery');

    const florindaLine = doorHotspot?.dialogue.find((l) => l.speaker === 'FLORINDA');
    expect(florindaLine?.text).toContain('To the gallery');
    expect(florindaLine?.text).not.toContain('To the yard');
  });
});
