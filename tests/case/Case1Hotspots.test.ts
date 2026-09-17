// @Architecture(descriptionShort="Pins Case 1 hotspot boxes to painted cover-crop objects", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';

const geom = (h: { id: string; x: number; y: number; w: number; h: number }) => (
  { id: h.id, x: h.x, y: h.y, w: h.w, h: h.h }
);

describe('Case 1 investigation hotspot geometry', () => {
  const es = getCaseScript('es', 'case1');
  const en = getCaseScript('en', 'case1');

  it('places boxes on the 16:9 cover crop of the gallery-2 background', () => {
    expect(es.investigation.museo_sala2.hotspots.map(geom)).toEqual([
      { id: 'hotspot_vitrina', x: 42, y: 28, w: 29, h: 43 },
      { id: 'hotspot_rejilla', x: 72, y: 55, w: 11, h: 17 },
      { id: 'hotspot_cedula', x: 38, y: 47, w: 12, h: 13 },
      { id: 'hotspot_jaula', x: 0, y: 58, w: 28, h: 31 },
      { id: 'hotspot_ventana', x: 8, y: 0, w: 18, h: 20 }
    ]);
    expect(es.investigation.cuarto_camaras.hotspots.map(geom)).toEqual([
      { id: 'hotspot_camara', x: 76, y: 1, w: 13, h: 16 },
      { id: 'hotspot_foto', x: 70, y: 75, w: 22, h: 21 },
      { id: 'hotspot_bitacora_rollo', x: 88, y: 16, w: 11, h: 48 },
      { id: 'hotspot_acceso_carga', x: 36, y: 13, w: 13, h: 50 },
      { id: 'hotspot_muro_ciego', x: 72, y: 22, w: 17, h: 53 },
      { id: 'hotspot_espejo', x: 49, y: 23, w: 21, h: 34 }
    ]);
    expect(es.investigation.clinica.hotspots.map(geom)).toEqual([
      { id: 'hotspot_expediente', x: 28, y: 72, w: 34, h: 19 },
      { id: 'hotspot_vendaje', x: 70, y: 24, w: 17, h: 23 },
      { id: 'hotspot_silla', x: 3, y: 33, w: 22, h: 45 }
    ]);
    expect(es.investigation.patio_carga.hotspots.map(geom)).toEqual([
      { id: 'hotspot_camioneta', x: 50, y: 24, w: 44, h: 49 },
      { id: 'hotspot_guantera', x: 51, y: 35, w: 12, h: 27 },
      { id: 'hotspot_bolsa', x: 86, y: 56, w: 14, h: 26 },
      { id: 'hotspot_puerta', x: 3, y: 7, w: 21, h: 61 },
      { id: 'hotspot_rejilla_exterior', x: 22, y: 74, w: 18, h: 8 },
      { id: 'hotspot_barda', x: 26, y: 16, w: 34, h: 25 }
    ]);
  });

  it('uses max coordinates for every Case 1 Present & Point zone', () => {
    const points = [
      ...es.adjournment!.trial.testimonies.flatMap((testimony) => testimony.statements),
    ].flatMap((statement) => [
      statement.contradiction?.pointTarget,
      statement.contradiction?.followUp?.pointTarget,
    ]).filter(Boolean);
    for (const target of points) {
      for (const zone of target!.zones) {
        expect(zone.bounds[2]).toBeGreaterThan(zone.bounds[0]);
        expect(zone.bounds[3]).toBeGreaterThan(zone.bounds[1]);
      }
    }
  });

  it('pins final-plate point geometry and keeps ES/EN identical', () => {
    const getPointZones = (script: typeof es, evidenceId: string) => script.adjournment!.trial.testimonies
      .flatMap((testimony) => testimony.statements)
      .flatMap((statement) => statement.contradiction?.pointTarget ?? [])
      .find((target) => target.targetEvidenceId === evidenceId)?.zones
      .map((zone) => ({ id: zone.id, bounds: zone.bounds }));
    expect(getPointZones(es, 'vitrina_rota')).toEqual([
      { id: 'cristal_afuera', bounds: [12, 58, 65, 98] },
      { id: 'pedestal', bounds: [42, 42, 73, 84] },
      { id: 'rejilla', bounds: [72, 48, 81, 63] },
      { id: 'jaula_perico', bounds: [0, 52, 25, 92] },
      { id: 'regla_testigo', bounds: [22, 85, 54, 97] },
      { id: 'vitrina_resto', bounds: [0, 0, 100, 100] }
    ]);
    expect(getPointZones(en, 'vitrina_rota')).toEqual(getPointZones(es, 'vitrina_rota'));
    expect(getPointZones(es, 'foto_crimen')).toEqual([
      { id: 'emblema_pecho', bounds: [42, 37, 53, 51] },
      { id: 'manos', bounds: [32, 46, 64, 64] },
      { id: 'marco_espejo', bounds: [0, 0, 18, 100] },
      { id: 'piso_pasillo', bounds: [18, 60, 100, 100] },
      { id: 'pasillo_reflejado', bounds: [18, 12, 100, 60] },
      { id: 'foto_resto', bounds: [0, 0, 100, 100] }
    ]);
    expect(getPointZones(en, 'foto_crimen')).toEqual(getPointZones(es, 'foto_crimen'));
  });

  it('keeps every box inside the 960×540 stage', () => {
    for (const scene of Object.values(es.investigation)) {
      for (const h of scene.hotspots) {
        expect(h.x + h.w).toBeLessThanOrEqual(100);
        expect(h.y + h.h).toBeLessThanOrEqual(100);
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
