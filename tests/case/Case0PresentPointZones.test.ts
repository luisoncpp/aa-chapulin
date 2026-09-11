// @Architecture(descriptionShort="Case 0 point-zone geometry checks", type="test", icon="target")
import { describe, expect, it } from 'vitest';
import { CASE0_FOTO_POINT_TARGET, CASE0_FOTO_POINT_TARGET_EN, CASE0_PLANCHA_POINT_TARGET } from '../../src/case/case0/Private/point_targets.js';

describe('Case 0 Present & Point zones', () => {
  it('has one correct and four incorrect zones per plate', () => {
    for (const target of [CASE0_FOTO_POINT_TARGET, CASE0_PLANCHA_POINT_TARGET]) {
      expect(target.zones.filter((zone) => zone.isCorrect)).toHaveLength(1);
      expect(target.zones).toHaveLength(5);
      for (const zone of target.zones) {
        expect(zone.bounds.every((value) => value >= 0 && value <= 100)).toBe(true);
      }
    }
  });

  it('reuses exact geometry for English', () => {
    expect(CASE0_FOTO_POINT_TARGET_EN.zones.map((zone) => zone.bounds)).toEqual(CASE0_FOTO_POINT_TARGET.zones.map((zone) => zone.bounds));
    expect(CASE0_FOTO_POINT_TARGET_EN.imageAsset).toBe(CASE0_FOTO_POINT_TARGET.imageAsset);
  });

  it('keeps the soot clue in the iron handle point zone', () => {
    const zone = CASE0_PLANCHA_POINT_TARGET.zones.find((candidate) => candidate.isCorrect);
    expect(zone?.id).toBe('mango_tizne');
    expect(zone?.bounds).toEqual([31, 5, 74, 45]);
  });
});
