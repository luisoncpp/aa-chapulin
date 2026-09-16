// @Architecture(descriptionShort="Pins Case 1 Present-and-Point boxes to evidence plates", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { CASE1_REJILLA_POINT_TARGET } from '../../src/case/case1/Private/climax_stage3_points.js';
import { CASE1_REJILLA_POINT_TARGET_EN } from '../../src/case/case1/Private/climax_stage3_points_en.js';
import { CASE1_FOTO_POINT_TARGET, CROQUIS_PINTURA_POINT_TARGET } from '../../src/case/case1/Private/trial_day2_t3_points.js';
import { CASE1_FOTO_POINT_TARGET_EN, CROQUIS_PINTURA_POINT_TARGET_EN } from '../../src/case/case1/Private/trial_day2_t3_points_en.js';
import { findHitZone, isInsideBounds } from '../../src/engine/Private/PresentPointGeometry.js';

describe('Case 1 Present & Point chained targets', () => {
  it('chains 3 successive point targets in Spanish', () => {
    expect(CASE1_FOTO_POINT_TARGET.id).toBe('foto_emblema_invertido');
    const second = CASE1_FOTO_POINT_TARGET.next;
    expect(second?.id).toBe('foto_pintura_espejo');
    expect(second?.successDialogue?.length).toBeGreaterThan(0);
    const third = second?.next;
    expect(third?.id).toBe('croquis_ubicacion_pintura');
    expect(third?.targetEvidenceId).toBe('plano_pasillo');
  });

  it('chains 3 successive point targets in English', () => {
    expect(CASE1_FOTO_POINT_TARGET_EN.id).toBe('foto_emblema_invertido');
    const second = CASE1_FOTO_POINT_TARGET_EN.next;
    expect(second?.id).toBe('foto_pintura_espejo');
    expect(second?.successDialogue?.length).toBeGreaterThan(0);
    const third = second?.next;
    expect(third?.id).toBe('croquis_ubicacion_pintura');
    expect(third?.targetEvidenceId).toBe('plano_pasillo');
  });

  it('verifies the corridor sketch point target geometry matches in both languages', () => {
    expect(CROQUIS_PINTURA_POINT_TARGET.zones.map((z) => z.bounds))
      .toEqual(CROQUIS_PINTURA_POINT_TARGET_EN.zones.map((z) => z.bounds));
    expect(CROQUIS_PINTURA_POINT_TARGET.imageAsset)
      .toBe('assets/examine_plano_pasillo.webp');
  });

  it('hits the correct end wall zone for the painting location in the sketch', () => {
    const correctZone = CROQUIS_PINTURA_POINT_TARGET.zones.find((z) => z.isCorrect);
    expect(correctZone?.id).toBe('pared_fondo_pintura');
    expect(correctZone?.bounds).toEqual([14, 50, 21, 81]);

    expect(isInsideBounds([14, 50, 21, 81], 17, 65)).toBe(true);
    expect(findHitZone(CROQUIS_PINTURA_POINT_TARGET.zones, 17, 65)?.isCorrect).toBe(true);

    // Outside bounds / wrong zones
    expect(findHitZone(CROQUIS_PINTURA_POINT_TARGET.zones, 10, 65)?.isCorrect).toBe(false);
    expect(findHitZone(CROQUIS_PINTURA_POINT_TARGET.zones, 27, 30)?.isCorrect).toBe(false);
    expect(findHitZone(CROQUIS_PINTURA_POINT_TARGET.zones, 80, 65)?.isCorrect).toBe(false);
  });

  it('chains 3 successive duct grate point targets in both languages', () => {
    for (const target of [CASE1_REJILLA_POINT_TARGET, CASE1_REJILLA_POINT_TARGET_EN]) {
      expect(target.id).toBe('rejilla_esquina_abierta');
      expect(target.targetEvidenceId).toBe('rejilla_ducto');
      expect(target.imageAsset).toBe('assets/examine_rejilla_ducto.webp');

      const second = target.next;
      expect(second?.id).toBe('rejilla_marcas_cinta');
      expect(second?.targetEvidenceId).toBe('rejilla_ducto');
      expect(second?.successDialogue?.length).toBeGreaterThan(0);

      const third = second?.next;
      expect(third?.id).toBe('rejilla_hilo_traje');
      expect(third?.targetEvidenceId).toBe('rejilla_ducto');
      expect(third?.next).toBeUndefined();
    }
  });

  it('verifies duct grate point target geometry and hit zones match', () => {
    // 1. Bent mesh corner
    expect(findHitZone(CASE1_REJILLA_POINT_TARGET.zones, 68, 50)?.isCorrect).toBe(true);
    expect(findHitZone(CASE1_REJILLA_POINT_TARGET.zones, 20, 10)?.isCorrect).toBe(false);

    // 2. Tape measure marks (left or right inner lip)
    const tape = CASE1_REJILLA_POINT_TARGET.next!;
    expect(findHitZone(tape.zones, 22, 38)?.isCorrect).toBe(true);
    expect(findHitZone(tape.zones, 77, 38)?.isCorrect).toBe(true);
    expect(findHitZone(tape.zones, 50, 50)?.isCorrect).toBe(false);

    // 3. Fabric thread
    const thread = tape.next!;
    expect(findHitZone(thread.zones, 67, 63)?.isCorrect).toBe(true);
    expect(findHitZone(thread.zones, 20, 38)?.isCorrect).toBe(false);
  });
});

