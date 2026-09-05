// @Architecture(descriptionShort="Pins Case 4 hotspot boxes to painted cover-crop objects", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';

const geom = (h: { id: string; x: number; y: number; w: number; h: number }) => (
  { id: h.id, x: h.x, y: h.y, w: h.w, h: h.h }
);

describe('Case 4 investigation hotspot geometry', () => {
  const es = getCaseScript('es', 'case4');
  const en = getCaseScript('en', 'case4');

  it('places boxes on the 16:9 cover crop of each hotel background', () => {
    expect(es.investigation.hotel_lobby.hotspots.map(geom)).toEqual([
      { id: 'hotspot_recepcion', x: 46, y: 40, w: 44, h: 42 },
      { id: 'hotspot_candelabro', x: 42, y: 8, w: 16, h: 20 }
    ]);
    expect(es.investigation.hotel_suite.hotspots.map(geom)).toEqual([
      { id: 'hotspot_cuerpo', x: 28, y: 72, w: 36, h: 26 },
      { id: 'hotspot_puerta', x: 2, y: 6, w: 24, h: 68 },
      { id: 'hotspot_radiador', x: 34, y: 42, w: 16, h: 36 },
      { id: 'hotspot_cesto', x: 86, y: 52, w: 14, h: 32 },
      { id: 'hotspot_almohada', x: 64, y: 54, w: 20, h: 26 }
    ]);
    expect(es.investigation.hotel_terraza.hotspots.map(geom)).toEqual([
      { id: 'hotspot_barra', x: 2, y: 36, w: 60, h: 40 }
    ]);
    expect(es.investigation.hotel_sotano.hotspots.map(geom)).toEqual([
      { id: 'hotspot_caldera', x: 54, y: 32, w: 38, h: 52 }
    ]);
    expect(es.investigation.hotel_suite204.hotspots.map(geom)).toEqual([
      { id: 'hotspot_radiador204', x: 62, y: 46, w: 26, h: 48 },
      { id: 'hotspot_armario', x: 6, y: 8, w: 52, h: 78 }
    ]);
    expect(es.investigation.hotel_cava.hotspots.map(geom)).toEqual([
      { id: 'hotspot_estanteria', x: 8, y: 16, w: 90, h: 72 }
    ]);
    expect(es.investigation.hotel_azotea.hotspots.map(geom)).toEqual([
      { id: 'hotspot_baul', x: 38, y: 52, w: 22, h: 34 }
    ]);
  });

  it('reuses day-rotated lobby and terrace geometry', () => {
    expect(es.investigation.hotel_lobby_d3.hotspots.map(geom)).toEqual(
      es.investigation.hotel_lobby.hotspots.map(geom)
    );
    expect(es.investigation.hotel_terraza_d2.hotspots.map(geom)).toEqual(
      es.investigation.hotel_terraza.hotspots.map(geom)
    );
  });

  it('keeps Spanish and English geometry identical', () => {
    for (const loc of Object.keys(es.investigation)) {
      expect(en.investigation[loc].hotspots.map(geom)).toEqual(
        es.investigation[loc].hotspots.map(geom)
      );
    }
  });
});
