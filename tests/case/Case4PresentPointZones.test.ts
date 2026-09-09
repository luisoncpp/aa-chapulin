// @Architecture(descriptionShort="Pins Case 4 Present-and-Point boxes to spec plates", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { CASE4_CLIMAX_BOTTLE_POINT, CASE4_ANILLO_POINT_TARGET } from '../../src/case/case4/Private/climax_stage_success.js';
import { CASE4_CADENA_POINT_TARGET } from '../../src/case/case4/Private/trial_day1_success.js';
import { CASE4_TESTIMONY_1_EN } from '../../src/case/case4/Private/trial_day1_en.js';
import { CASE4_TESTIMONY_3_EN } from '../../src/case/case4/Private/trial_day2_en.js';
import { CASE4_TESTIMONY_4_EN } from '../../src/case/case4/Private/trial_day2_t2_en.js';
import { CASE4_PLANO_POINT_TARGET, CASE4_REGISTRO_POINT_TARGET } from '../../src/case/case4/Private/trial_day2_success.js';
import { CASE4_ORDEN_POINT_TARGET, CASE4_TELEGRAMA_POINT_TARGET } from '../../src/case/case4/Private/trial_day3_success.js';
import { findHitZone, isInsideBounds } from '../../src/engine/Private/PresentPoint.js';
import type { PointTargetContradiction } from '../../src/types/index.js';

function correctBounds(target: PointTargetContradiction): [number, number, number, number] {
  const zone = target.zones.find((z) => z.isCorrect);
  if (!zone) throw new Error(`no correct zone on ${target.targetEvidenceId}`);
  return zone.bounds;
}

function hitsCorrect(target: PointTargetContradiction, x: number, y: number): boolean {
  return findHitZone(target.zones, x, y)?.isCorrect === true;
}

describe('Case 4 Present & Point zones vs examine plates', () => {
  it('points the chain loop route from corridor to edge', () => {
    expect(correctBounds(CASE4_CADENA_POINT_TARGET)).toEqual([49, 40, 63, 68]);
    expect(hitsCorrect(CASE4_CADENA_POINT_TARGET, 55, 50)).toBe(true);
    expect(hitsCorrect(CASE4_CADENA_POINT_TARGET, 48, 50)).toBe(false);
    expect(hitsCorrect(CASE4_CADENA_POINT_TARGET, 64, 50)).toBe(false);
    expect(hitsCorrect(CASE4_CADENA_POINT_TARGET, 55, 69)).toBe(false);
    expect(hitsCorrect(CASE4_CADENA_POINT_TARGET, 10, 80)).toBe(false);
    expect(isInsideBounds([49, 40, 63, 68], 50, 42)).toBe(true);

    const english = CASE4_TESTIMONY_1_EN.statements.find((s) => s.id === 'd1_t1_3');
    expect(english?.contradiction?.pointTarget?.zones.find((z) => z.isCorrect)?.bounds)
      .toEqual([49, 40, 63, 68]);
  });

  it('covers the labeled vertical steam stack, not the side rooms or boiler fire', () => {
    expect(correctBounds(CASE4_PLANO_POINT_TARGET)).toEqual([42, 14, 50, 88]);
    expect(hitsCorrect(CASE4_PLANO_POINT_TARGET, 46, 48)).toBe(true);
    expect(hitsCorrect(CASE4_PLANO_POINT_TARGET, 49, 42)).toBe(true);
    expect(hitsCorrect(CASE4_PLANO_POINT_TARGET, 51, 50)).toBe(false);
    expect(hitsCorrect(CASE4_PLANO_POINT_TARGET, 20, 20)).toBe(false);
    expect(hitsCorrect(CASE4_PLANO_POINT_TARGET, 72, 50)).toBe(false);
    expect(hitsCorrect(CASE4_PLANO_POINT_TARGET, 51, 88)).toBe(false);
  });

  it('keeps both English plan moments on the same cutaway ramal', () => {
    const routeA = CASE4_TESTIMONY_3_EN.statements.find((s) => s.id === 'd2_t1_3');
    const routeB = CASE4_TESTIMONY_3_EN.statements.find((s) => s.id === 'd2_t1_4');
    expect(routeA?.contradiction?.pointTarget?.zones.find((z) => z.isCorrect)?.bounds).toEqual([42, 14, 50, 88]);
    expect(routeB?.contradiction?.followUp?.pointTarget?.zones.find((z) => z.isCorrect)?.bounds).toEqual([42, 14, 50, 88]);
  });

  it('points the B-17 discharge rows on the freight log', () => {
    expect(correctBounds(CASE4_REGISTRO_POINT_TARGET)).toEqual([4, 40, 96, 57]);
    expect(hitsCorrect(CASE4_REGISTRO_POINT_TARGET, 8, 42)).toBe(true);
    expect(hitsCorrect(CASE4_REGISTRO_POINT_TARGET, 94, 56)).toBe(true);
    expect(hitsCorrect(CASE4_REGISTRO_POINT_TARGET, 10, 10)).toBe(false);

    const english = CASE4_TESTIMONY_4_EN.statements.find((s) => s.id === 'd2_t2_3');
    expect(english?.contradiction?.pointTarget?.zones.find((z) => z.isCorrect)?.bounds)
      .toEqual([4, 40, 96, 57]);
  });

  it('points the handwritten employee name on the folio', () => {
    expect(correctBounds(CASE4_ORDEN_POINT_TARGET)).toEqual([18, 58, 80, 82]);
    expect(hitsCorrect(CASE4_ORDEN_POINT_TARGET, 50, 70)).toBe(true);
    expect(hitsCorrect(CASE4_ORDEN_POINT_TARGET, 50, 10)).toBe(false);
  });

  it('points the signed receipt on the telegram', () => {
    expect(correctBounds(CASE4_TELEGRAMA_POINT_TARGET)).toEqual([10, 64, 94, 86]);
    expect(hitsCorrect(CASE4_TELEGRAMA_POINT_TARGET, 70, 74)).toBe(true);
    expect(hitsCorrect(CASE4_TELEGRAMA_POINT_TARGET, 20, 50)).toBe(false);
  });

  it('points the fine channel through the cork', () => {
    expect(correctBounds(CASE4_CLIMAX_BOTTLE_POINT)).toEqual([34, 48, 70, 79]);
    expect(hitsCorrect(CASE4_CLIMAX_BOTTLE_POINT, 50, 55)).toBe(true);
    expect(hitsCorrect(CASE4_CLIMAX_BOTTLE_POINT, 50, 10)).toBe(false);
  });

  it('points the truncated tip on the ring plate', () => {
    expect(correctBounds(CASE4_ANILLO_POINT_TARGET)).toEqual([50, 37, 80, 88]);
    expect(hitsCorrect(CASE4_ANILLO_POINT_TARGET, 66, 70)).toBe(true);
    expect(hitsCorrect(CASE4_ANILLO_POINT_TARGET, 20, 20)).toBe(false);
  });
});
