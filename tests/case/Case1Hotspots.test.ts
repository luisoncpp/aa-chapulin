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
      { id: 'hotspot_camara', x: 4, y: 3, w: 13, h: 20 },
      { id: 'hotspot_foto', x: 4, y: 66, w: 20, h: 22 },
      { id: 'hotspot_bitacora_rollo', x: 0, y: 23, w: 15, h: 28 },
      { id: 'hotspot_espejo', x: 72, y: 0, w: 28, h: 90 }
    ]);
    expect(es.investigation.clinica.hotspots.map(geom)).toEqual([
      { id: 'hotspot_expediente', x: 28, y: 72, w: 34, h: 19 },
      { id: 'hotspot_vendaje', x: 70, y: 24, w: 17, h: 23 },
      { id: 'hotspot_silla', x: 3, y: 33, w: 22, h: 45 }
    ]);
    expect(es.investigation.patio_carga.hotspots.find((hotspot) => hotspot.id === 'hotspot_rejilla_exterior'))
      .toMatchObject({ x: 22, y: 76, w: 17, h: 12 });
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
      { id: 'emblema_pecho', bounds: [43, 30, 63, 50] },
      { id: 'manos', bounds: [35, 50, 68, 67] },
      { id: 'puerta_fondo', bounds: [25, 20, 45, 58] },
      { id: 'marco_espejo', bounds: [0, 0, 100, 10] },
      { id: 'piso_pasillo', bounds: [0, 68, 100, 100] },
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
