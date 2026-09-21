import { describe, expect, it } from 'vitest';
import { CASE4_CLIMAX_BOTTLE_POINT, CASE4_ANILLO_POINT_TARGET } from '../../src/case/case4/Private/climax_stage_success.js';
import { CASE4_CADENA_POINT_TARGET } from '../../src/case/case4/Private/trial_day1_success.js';
import { CASE4_PLANO_POINT_TARGET, CASE4_REGISTRO_POINT_TARGET } from '../../src/case/case4/Private/trial_day2_success.js';
import { CASE4_ORDEN_POINT_TARGET, CASE4_TELEGRAMA_POINT_TARGET } from '../../src/case/case4/Private/trial_day3_success.js';
import { findHitZone } from '../../src/engine/Private/PresentPointGeometry.js';
import type { PointTargetContradiction } from '../../src/types/index.js';

function hitsCorrect(target: PointTargetContradiction, x: number, y: number): boolean {
  return findHitZone(target.zones, x, y)?.isCorrect === true;
}

describe('Case 4 Present & Point zones vs examine plates', () => {
  it('points the chain loop route from corridor to edge', () => {
    expect(hitsCorrect(CASE4_CADENA_POINT_TARGET, 55, 50)).toBe(true);
    expect(hitsCorrect(CASE4_CADENA_POINT_TARGET, 48, 50)).toBe(false);
    expect(hitsCorrect(CASE4_CADENA_POINT_TARGET, 64, 50)).toBe(false);
    expect(hitsCorrect(CASE4_CADENA_POINT_TARGET, 55, 69)).toBe(false);
    expect(hitsCorrect(CASE4_CADENA_POINT_TARGET, 10, 80)).toBe(false);
  });

  it('covers the labeled vertical steam stack, not the side rooms or boiler fire', () => {
    expect(hitsCorrect(CASE4_PLANO_POINT_TARGET, 46, 48)).toBe(true);
    expect(hitsCorrect(CASE4_PLANO_POINT_TARGET, 49, 42)).toBe(true);
    expect(hitsCorrect(CASE4_PLANO_POINT_TARGET, 51, 50)).toBe(false);
    expect(hitsCorrect(CASE4_PLANO_POINT_TARGET, 20, 20)).toBe(false);
    expect(hitsCorrect(CASE4_PLANO_POINT_TARGET, 72, 50)).toBe(false);
    expect(hitsCorrect(CASE4_PLANO_POINT_TARGET, 51, 88)).toBe(false);
  });

  it('points the B-17 discharge rows on the freight log', () => {
    expect(hitsCorrect(CASE4_REGISTRO_POINT_TARGET, 8, 42)).toBe(true);
    expect(hitsCorrect(CASE4_REGISTRO_POINT_TARGET, 94, 56)).toBe(true);
    expect(hitsCorrect(CASE4_REGISTRO_POINT_TARGET, 10, 10)).toBe(false);
  });

  it('points the handwritten employee name on the folio', () => {
    expect(hitsCorrect(CASE4_ORDEN_POINT_TARGET, 50, 70)).toBe(true);
    expect(hitsCorrect(CASE4_ORDEN_POINT_TARGET, 50, 10)).toBe(false);
  });

  it('points the signed receipt on the telegram', () => {
    expect(hitsCorrect(CASE4_TELEGRAMA_POINT_TARGET, 70, 74)).toBe(true);
    expect(hitsCorrect(CASE4_TELEGRAMA_POINT_TARGET, 20, 50)).toBe(false);
  });

  it('points the fine channel through the cork', () => {
    expect(hitsCorrect(CASE4_CLIMAX_BOTTLE_POINT, 50, 55)).toBe(true);
    expect(hitsCorrect(CASE4_CLIMAX_BOTTLE_POINT, 50, 10)).toBe(false);
  });

  it('points the truncated tip on the ring plate', () => {
    expect(hitsCorrect(CASE4_ANILLO_POINT_TARGET, 66, 70)).toBe(true);
    expect(hitsCorrect(CASE4_ANILLO_POINT_TARGET, 20, 20)).toBe(false);
  });
});
