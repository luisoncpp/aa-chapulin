// @Architecture(descriptionShort="Pins Case 1 hotspot boxes to painted cover-crop objects", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';

const geom = (h: { id: string; x: number; y: number; w: number; h: number }) => (
  { id: h.id, x: h.x, y: h.y, w: h.w, h: h.h }
);

describe('Case 1 investigation hotspot geometry', () => {
  const es = getCaseScript('es', 'case1');
  const en = getCaseScript('en', 'case1');

  it('places boxes on the 16:9 cover crop of museum background', () => {
    expect(es.investigation.museum.hotspots.map(geom)).toEqual([
      { id: 'pedestal', x: 42, y: 33, w: 30, h: 58 },
      { id: 'armor', x: 2, y: 20, w: 36, h: 72 },
      { id: 'security_cam', x: 54, y: 2, w: 22, h: 26 },
      { id: 'treasure_chest', x: 75, y: 64, w: 23, h: 30 }
    ]);
  });

  it('keeps Spanish and English geometry identical', () => {
    for (const loc of Object.keys(es.investigation)) {
      expect(en.investigation[loc].hotspots.map(geom)).toEqual(
        es.investigation[loc].hotspots.map(geom)
      );
    }
  });
});
