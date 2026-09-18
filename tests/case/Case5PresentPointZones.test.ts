// @Architecture(descriptionShort="Pins Case 5 Present-and-Point boxes to examine plates", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { CASE5_CLIMAX_STAGE3_POINT } from '../../src/case/case5/Private/climax_stage3_point.js';
import { CASE5_CLIMAX_STAGE3_POINT_EN } from '../../src/case/case5/Private/climax_stage3_point_en.js';
import { POINT_EXPEDIENTE_SERIE } from '../../src/case/case5/Private/trial_day2_success.js';
import { POINT_EXPEDIENTE_SERIE_EN } from '../../src/case/case5/Private/trial_day2_success_en.js';
import { findHitZone, isInsideBounds } from '../../src/engine/Private/PresentPointGeometry.js';
import type { PointTargetContradiction } from '../../src/types/index.js';

function correctBounds(target: PointTargetContradiction): [number, number, number, number] {
  const zone = target.zones.find((z) => z.isCorrect);
  if (!zone) throw new Error(`no correct zone on ${target.targetEvidenceId}`);
  return zone.bounds;
}

function hitsCorrect(target: PointTargetContradiction, x: number, y: number): boolean {
  return findHitZone(target.zones, x, y)?.isCorrect === true;
}

describe('Case 5 Present & Point zones vs examine plates', () => {
  it('covers each dated panel on expediente_serie', () => {
    expect(POINT_EXPEDIENTE_SERIE.zones.map((z) => ({ id: z.id, bounds: z.bounds }))).toEqual([
      { id: 'panel_a', bounds: [1, 12, 20, 92] },
      { id: 'panel_b', bounds: [20, 12, 39, 92] },
      { id: 'panel_c', bounds: [39, 12, 58, 92] },
      { id: 'panel_d', bounds: [58, 12, 78, 92] },
      { id: 'panel_e', bounds: [78, 12, 99, 92] }
    ]);
    expect(correctBounds(POINT_EXPEDIENTE_SERIE)).toEqual([20, 12, 39, 92]);
    expect(hitsCorrect(POINT_EXPEDIENTE_SERIE, 30, 50)).toBe(true);
    expect(hitsCorrect(POINT_EXPEDIENTE_SERIE, 10, 50)).toBe(false);
    expect(isInsideBounds([20, 12, 39, 92], 25, 20)).toBe(true);
    expect(POINT_EXPEDIENTE_SERIE_EN.zones.map((z) => z.bounds))
      .toEqual(POINT_EXPEDIENTE_SERIE.zones.map((z) => z.bounds));
  });

  it('points the extra luxury spine, not the gap or dust strip', () => {
    expect(CASE5_CLIMAX_STAGE3_POINT.zones.map((z) => ({ id: z.id, bounds: z.bounds }))).toEqual([
      { id: 'tomo_i', bounds: [3, 16, 18, 72] },
      { id: 'cartoncitos', bounds: [19, 16, 40, 72] },
      { id: 'lomo_11', bounds: [42, 12, 52, 74] },
      { id: 'hueco_13', bounds: [53, 16, 60, 72] },
      { id: 'zoclo', bounds: [4, 74, 96, 88] }
    ]);
    expect(correctBounds(CASE5_CLIMAX_STAGE3_POINT)).toEqual([42, 12, 52, 74]);
    expect(hitsCorrect(CASE5_CLIMAX_STAGE3_POINT, 47, 40)).toBe(true);
    expect(hitsCorrect(CASE5_CLIMAX_STAGE3_POINT, 56, 40)).toBe(false);
    expect(hitsCorrect(CASE5_CLIMAX_STAGE3_POINT, 47, 80)).toBe(false);
    expect(CASE5_CLIMAX_STAGE3_POINT_EN.zones.map((z) => z.bounds))
      .toEqual(CASE5_CLIMAX_STAGE3_POINT.zones.map((z) => z.bounds));
  });
});
