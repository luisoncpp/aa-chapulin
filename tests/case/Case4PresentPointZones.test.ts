// @Architecture(descriptionShort="Pins Case 4 Present-and-Point boxes to painted examine plates", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { CASE4_CLIMAX_BOTTLE_POINT } from '../../src/case/case4/Private/climax_stage_success.js';
import { CASE4_FOTO_POINT_TARGET } from '../../src/case/case4/Private/trial_day1_success.js';
import { CASE4_PLANO_POINT_TARGET } from '../../src/case/case4/Private/trial_day2_success.js';
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
  it('covers the ice bucket including melted water, not only a side-wall patch', () => {
    expect(correctBounds(CASE4_FOTO_POINT_TARGET)).toEqual([50, 14, 88, 82]);
    // Water surface / rim (the melted-ice clue) sits above the old spec box [56,46,76,70].
    expect(hitsCorrect(CASE4_FOTO_POINT_TARGET, 66, 28)).toBe(true);
    expect(hitsCorrect(CASE4_FOTO_POINT_TARGET, 56, 22)).toBe(true);
    expect(hitsCorrect(CASE4_FOTO_POINT_TARGET, 82, 40)).toBe(true);
    expect(hitsCorrect(CASE4_FOTO_POINT_TARGET, 66, 58)).toBe(true);
    expect(hitsCorrect(CASE4_FOTO_POINT_TARGET, 36, 50)).toBe(false);
    expect(hitsCorrect(CASE4_FOTO_POINT_TARGET, 18, 45)).toBe(false);
  });

  it('covers the labeled vertical steam stack, not the side rooms or boiler fire', () => {
    expect(correctBounds(CASE4_PLANO_POINT_TARGET)).toEqual([40, 18, 62, 74]);
    expect(hitsCorrect(CASE4_PLANO_POINT_TARGET, 48, 48)).toBe(true);
    expect(hitsCorrect(CASE4_PLANO_POINT_TARGET, 56, 50)).toBe(true);
    expect(hitsCorrect(CASE4_PLANO_POINT_TARGET, 50, 30)).toBe(true);
    expect(hitsCorrect(CASE4_PLANO_POINT_TARGET, 20, 20)).toBe(false);
    expect(hitsCorrect(CASE4_PLANO_POINT_TARGET, 50, 88)).toBe(false);
  });

  it('covers the red wax dome including the needle hole, not the bottle label', () => {
    expect(correctBounds(CASE4_CLIMAX_BOTTLE_POINT)).toEqual([42, 2, 58, 30]);
    expect(hitsCorrect(CASE4_CLIMAX_BOTTLE_POINT, 50, 10)).toBe(true);
    expect(hitsCorrect(CASE4_CLIMAX_BOTTLE_POINT, 50, 26)).toBe(true);
    expect(hitsCorrect(CASE4_CLIMAX_BOTTLE_POINT, 50, 55)).toBe(false);
    expect(isInsideBounds([42, 2, 58, 30], 44, 4)).toBe(true);
  });
});
