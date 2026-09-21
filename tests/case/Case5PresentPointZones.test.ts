// @Architecture(descriptionShort="Pins Case 5 Present-and-Point boxes to examine plates", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { CASE5_CLIMAX_STAGE3_POINT } from '../../src/case/case5/Private/climax_stage3_point.js';
import { POINT_EXPEDIENTE_SERIE } from '../../src/case/case5/Private/trial_day2_success.js';
import { POINT_EXPEDIENTE_SERIE_EN } from '../../src/case/case5/Private/trial_day2_success_en.js';
import { findHitZone } from '../../src/engine/Private/PresentPointGeometry.js';
import type { PointTargetContradiction } from '../../src/types/index.js';

function hitsCorrect(target: PointTargetContradiction, x: number, y: number): boolean {
  return findHitZone(target.zones, x, y)?.isCorrect === true;
}

describe('Case 5 Present & Point zones vs examine plates', () => {
  it('covers each dated panel on expediente_serie', () => {
    expect(hitsCorrect(POINT_EXPEDIENTE_SERIE, 30, 50)).toBe(true);
    expect(hitsCorrect(POINT_EXPEDIENTE_SERIE, 10, 50)).toBe(false);
    expect(POINT_EXPEDIENTE_SERIE.imageAsset).toBe('assets/examine_expediente_serie.webp');
    expect(POINT_EXPEDIENTE_SERIE_EN.imageAsset).toBe('assets/examine_expediente_serie_en.webp');
  });

  it('points the extra luxury spine, not the gap or dust strip', () => {
    expect(hitsCorrect(CASE5_CLIMAX_STAGE3_POINT, 44, 40)).toBe(true);
    expect(hitsCorrect(CASE5_CLIMAX_STAGE3_POINT, 52, 40)).toBe(false);
    expect(hitsCorrect(CASE5_CLIMAX_STAGE3_POINT, 47, 80)).toBe(false);
  });
});
