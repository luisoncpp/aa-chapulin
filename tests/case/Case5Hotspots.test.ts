// @Architecture(descriptionShort="Pins Case 5 hotspot boxes to painted cover-crop objects", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';

const geom = (h: { id: string; x: number; y: number; w: number; h: number }) => (
  { id: h.id, x: h.x, y: h.y, w: h.w, h: h.h }
);

describe('Case 5 investigation hotspot geometry', () => {
  const es = getCaseScript('es', 'case5');
  const en = getCaseScript('en', 'case5');

  it('places boxes on the 16:9 cover crop of each background', () => {
    const expected: Record<string, ReturnType<typeof geom>[]> = {
      celda_c5: [
        { id: 'hotspot_cristal', x: 8, y: 8, w: 58, h: 58 },
        { id: 'hotspot_donramon', x: 52, y: 38, w: 22, h: 28 }
      ],
      archivo_vestibulo: [
        { id: 'hotspot_libro', x: 58, y: 26, w: 26, h: 24 },
        { id: 'hotspot_plano', x: 0, y: 0, w: 22, h: 36 },
        { id: 'hotspot_carrito', x: 0, y: 48, w: 22, h: 42 }
      ],
      archivo_pasillo7: [
        { id: 'hotspot_cuerpo', x: 38, y: 54, w: 26, h: 26 },
        { id: 'hotspot_tomo', x: 54, y: 82, w: 18, h: 16 },
        { id: 'hotspot_estante', x: 54, y: 6, w: 46, h: 72 },
        { id: 'hotspot_mesa', x: 0, y: 4, w: 34, h: 58 }
      ],
      vecindad_c5: [
        { id: 'hotspot_puerta', x: 10, y: 2, w: 20, h: 40 },
        { id: 'hotspot_sobre', x: 62, y: 40, w: 24, h: 22 }
      ],
      correspondencia: [
        { id: 'hotspot_libro_acuses', x: 56, y: 62, w: 38, h: 34 }
      ],
      despacho_berrondo: [
        { id: 'hotspot_vitrina', x: 0, y: 28, w: 28, h: 42 },
        { id: 'hotspot_retrato', x: 0, y: 4, w: 16, h: 28 }
      ],
      delegacion_c5: [
        { id: 'hotspot_legajos', x: 84, y: 50, w: 16, h: 26 }
      ],
      bodega_masa: [
        { id: 'hotspot_huacal', x: 70, y: 56, w: 24, h: 38 },
        { id: 'hotspot_cajones', x: 44, y: 46, w: 28, h: 24 },
        { id: 'hotspot_maquina', x: 56, y: 70, w: 22, h: 18 }
      ],
      fiscalia_c5: [
        { id: 'hotspot_bolsa', x: 72, y: 52, w: 22, h: 34 }
      ],
      penal_efectos: [
        { id: 'hotspot_caja', x: 8, y: 42, w: 34, h: 40 }
      ],
      celda_c5_d4: [],
      archivo_caldera: [
        { id: 'hotspot_caldera', x: 16, y: 2, w: 48, h: 78 },
        { id: 'hotspot_termografo', x: 70, y: 16, w: 28, h: 52 }
      ]
    };

    for (const [location, hotspots] of Object.entries(expected)) {
      expect(es.investigation[location].hotspots.map(geom), location).toEqual(hotspots);
    }
  });

  it('keeps every box inside the 960×540 stage', () => {
    for (const [loc, scene] of Object.entries(es.investigation)) {
      for (const h of scene.hotspots) {
        expect(h.x + h.w, `${loc}:${h.id}`).toBeLessThanOrEqual(100);
        expect(h.y + h.h, `${loc}:${h.id}`).toBeLessThanOrEqual(100);
      }
    }
  });

  it('keeps Spanish and English geometry identical', () => {
    for (const loc of Object.keys(es.investigation)) {
      expect(en.investigation[loc].hotspots.map(geom)).toEqual(
        es.investigation[loc].hotspots.map(geom)
      );
    }
  });
});
