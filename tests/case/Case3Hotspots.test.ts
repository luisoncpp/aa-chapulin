// @Architecture(descriptionShort="Pins Case 3 hotspot boxes to painted cover-crop objects", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';

const geom = (h: { id: string; x: number; y: number; w: number; h: number }) => (
  { id: h.id, x: h.x, y: h.y, w: h.w, h: h.h }
);

describe('Case 3 investigation hotspot geometry', () => {
  const es = getCaseScript('es', 'case3');
  const en = getCaseScript('en', 'case3');

  it('places boxes on the 16:9 cover crop of each background', () => {
    expect(es.investigation.detention.hotspots.map(geom)).toEqual([
      { id: 'chapatin_spot', x: 32, y: 10, w: 36, h: 58 },
      { id: 'phone_spot', x: 86, y: 16, w: 12, h: 40 }
    ]);
    expect(es.investigation.cabina_radio.hotspots.map(geom)).toEqual([
      { id: 'hotspot_trofeo', x: 30, y: 28, w: 24, h: 30 },
      { id: 'hotspot_piso', x: 50, y: 60, w: 42, h: 32 },
      { id: 'hotspot_micro', x: 52, y: 24, w: 16, h: 40 },
      { id: 'hotspot_ventana', x: 70, y: 2, w: 28, h: 50 },
      { id: 'hotspot_cintas', x: 16, y: 8, w: 16, h: 44 },
      { id: 'hotspot_pasillo', x: 0, y: 54, w: 22, h: 32 }
    ]);
    expect(es.investigation.plaza_kermes.hotspots.map(geom)).toEqual([
      { id: 'hotspot_bocinas', x: 82, y: 6, w: 16, h: 52 },
      { id: 'hotspot_kiosco', x: 2, y: 8, w: 30, h: 56 }
    ]);
    expect(es.investigation.despacho_barriga.hotspots.map(geom)).toEqual([
      { id: 'hotspot_escritorio', x: 42, y: 56, w: 38, h: 32 },
      { id: 'hotspot_pedestal', x: 2, y: 50, w: 24, h: 34 },
      { id: 'hotspot_caja', x: 2, y: 14, w: 24, h: 36 }
    ]);
    expect(es.investigation.clinica_chapatin.hotspots.map(geom)).toEqual([
      { id: 'hotspot_libreta', x: 10, y: 68, w: 28, h: 24 },
      { id: 'hotspot_camilla', x: 68, y: 48, w: 32, h: 42 }
    ]);
    expect(es.investigation.delegacion.hotspots.map(geom)).toEqual([
      { id: 'hotspot_archivo', x: 8, y: 16, w: 18, h: 50 },
      { id: 'hotspot_torta', x: 42, y: 68, w: 24, h: 26 }
    ]);
    expect(es.investigation.bodega_radio.hotspots.map(geom)).toEqual([
      { id: 'hotspot_ataduras', x: 58, y: 72, w: 36, h: 22 },
      { id: 'hotspot_polvo', x: 28, y: 62, w: 28, h: 22 },
      { id: 'hotspot_discos', x: 0, y: 6, w: 26, h: 70 },
      { id: 'hotspot_cabina_a', x: 42, y: 10, w: 22, h: 26 },
      { id: 'hotspot_sketch', x: 52, y: 30, w: 20, h: 26 }
    ]);
    expect(es.investigation.delegacion_d3.hotspots.map(geom)).toEqual([
      { id: 'hotspot_reproductor', x: 74, y: 68, w: 24, h: 28 }
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
