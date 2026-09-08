// @Architecture(descriptionShort="Pins Case 4 hotspot boxes to painted cover-crop objects", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';

const geom = (h: { id: string; x: number; y: number; w: number; h: number }) => (
  { id: h.id, x: h.x, y: h.y, w: h.w, h: h.h }
);

describe('Case 4 investigation hotspot geometry', () => {
  const es = getCaseScript('es', 'case4');
  const en = getCaseScript('en', 'case4');

  it('places every box on the painted object in the cover-cropped scene', () => {
    const expected: Record<string, ReturnType<typeof geom>[]> = {
      detention: [
        { id: 'botija_spot', x: 20, y: 10, w: 60, h: 65 },
        { id: 'phone_spot', x: 88, y: 15, w: 10, h: 45 }
      ],
      hotel_lobby: [
        { id: 'hotspot_libro', x: 52, y: 58, w: 15, h: 16 },
        { id: 'hotspot_plano', x: 64, y: 58, w: 27, h: 24 },
        { id: 'hotspot_programa', x: 47, y: 53, w: 8, h: 15 }
      ],
      hotel_suite: [
        { id: 'hotspot_cuerpo', x: 54, y: 56, w: 35, h: 38 },
        { id: 'hotspot_almohada', x: 68, y: 64, w: 15, h: 17 },
        { id: 'hotspot_recibidor', x: 10, y: 4, w: 29, h: 64 },
        { id: 'hotspot_cierre', x: 2, y: 28, w: 9, h: 21 },
        { id: 'hotspot_radiador', x: 72, y: 27, w: 14, h: 26 },
        { id: 'hotspot_cesto', x: 84, y: 43, w: 15, h: 29 },
        { id: 'hotspot_cubeta', x: 89, y: 77, w: 11, h: 22 }
      ],
      hotel_terraza: [
        { id: 'hotspot_barra', x: 0, y: 43, w: 67, h: 36 },
        { id: 'hotspot_sombrillas', x: 58, y: 12, w: 42, h: 35 }
      ],
      hotel_sotano: [
        { id: 'hotspot_conducto', x: 38, y: 0, w: 17, h: 60 },
        { id: 'hotspot_inventario', x: 5, y: 23, w: 30, h: 32 },
        { id: 'hotspot_banco', x: 6, y: 59, w: 41, h: 31 },
        { id: 'hotspot_cenizas', x: 50, y: 71, w: 50, h: 29 }
      ],
      hotel_suite204: [
        { id: 'hotspot_radiador204', x: 64, y: 47, w: 24, h: 53 },
        { id: 'hotspot_mesa', x: 5, y: 67, w: 30, h: 33 },
        { id: 'hotspot_armario', x: 16, y: 0, w: 46, h: 67 },
        { id: 'hotspot_recibo', x: 15, y: 72, w: 9, h: 9 }
      ],
      delegacion: [
        { id: 'hotspot_expediente', x: 10, y: 24, w: 18, h: 32 }
      ],
      hotel_cava: [
        { id: 'hotspot_libro', x: 0, y: 63, w: 28, h: 20 },
        { id: 'hotspot_botella', x: 40, y: 47, w: 12, h: 42 },
        { id: 'hotspot_cierre', x: 50, y: 83, w: 8, h: 8 },
        { id: 'hotspot_lacre', x: 41, y: 45, w: 11, h: 12 },
        { id: 'hotspot_estanteria', x: 70, y: 0, w: 30, h: 65 }
      ],
      hotel_lobby_d3: [
        { id: 'hotspot_libro_d3', x: 52, y: 58, w: 15, h: 16 },
        { id: 'hotspot_plano_d3', x: 64, y: 58, w: 27, h: 24 }
      ],
      detention_d3: [
        { id: 'botija_spot', x: 20, y: 10, w: 60, h: 65 },
        { id: 'phone_spot', x: 88, y: 15, w: 10, h: 45 }
      ],
      delegacion_d3: [
        { id: 'hotspot_maletin', x: 73, y: 17, w: 11, h: 9 }
      ],
      hotel_terraza_d2: [
        { id: 'hotspot_lamina', x: 14, y: 49, w: 24, h: 18 },
        { id: 'hotspot_sombrillas2', x: 58, y: 12, w: 42, h: 35 }
      ],
      hotel_azotea: [
        { id: 'hotspot_etiqueta', x: 41, y: 63, w: 8, h: 11 },
        { id: 'hotspot_faja', x: 44, y: 54, w: 8, h: 43 },
        { id: 'hotspot_forro', x: 38, y: 86, w: 20, h: 12 },
        { id: 'hotspot_compartimiento', x: 38, y: 54, w: 18, h: 9 },
        { id: 'hotspot_motor', x: 32, y: 8, w: 43, h: 45 }
      ]
    };

    for (const [location, hotspots] of Object.entries(expected)) {
      expect(es.investigation[location].hotspots.map(geom), location).toEqual(hotspots);
    }
  });

  it('uses the daytime rooftop plate in both languages', () => {
    expect(es.investigation.hotel_azotea.bg).toBe('assets/bg_hotel_azotea_day.webp');
    expect(en.investigation.hotel_azotea.bg).toBe('assets/bg_hotel_azotea_day.webp');
  });

  it('keeps audited boxes inside the stage and tappable', () => {
    for (const [loc, scene] of Object.entries(es.investigation)) {
      for (const h of scene.hotspots) {
        expect(h.x + h.w, `${loc}:${h.id}`).toBeLessThanOrEqual(100);
        expect(h.y + h.h, `${loc}:${h.id}`).toBeLessThanOrEqual(100);
        expect(h.w, h.id).toBeGreaterThanOrEqual(8);
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
