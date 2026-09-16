// @Architecture(descriptionShort="Calculates Present-and-Point hits and evidence plate paths", type="util", icon="wrench")
import type { EvidenceItem, PointTargetContradiction, PointZone } from '../../types/index.js';

export const POINT_STAGE_WIDTH = 640;
export const POINT_STAGE_HEIGHT = 360;

// fallow-ignore-next-line unused-export -- hit contract asserted by tests/engine/PresentPoint.test.ts
export function isInsideBounds(
  bounds: [number, number, number, number],
  xPct: number,
  yPct: number
): boolean {
  const [minX, minY, maxX, maxY] = bounds;
  return xPct >= minX && xPct <= maxX && yPct >= minY && yPct <= maxY;
}

export function findHitZone(zones: PointZone[], xPct: number, yPct: number): PointZone | null {
  const correct = zones.find((zone) => zone.isCorrect && isInsideBounds(zone.bounds, xPct, yPct));
  if (correct) return correct;
  return zones.find((zone) => !zone.isCorrect && isInsideBounds(zone.bounds, xPct, yPct)) ?? null;
}

function normalizeStageAxis(origin: number, size: number, fallbackSize: number): { origin: number; size: number } {
  if (size > 0) return { origin, size };
  return { origin: 0, size: fallbackSize };
}

export function percentFromStageClick(
  clientX: number,
  clientY: number,
  rect: { left: number; top: number; width: number; height: number }
): { x: number; y: number } {
  const xAxis = normalizeStageAxis(rect.left, rect.width, POINT_STAGE_WIDTH);
  const yAxis = normalizeStageAxis(rect.top, rect.height, POINT_STAGE_HEIGHT);
  return {
    x: ((clientX - xAxis.origin) / xAxis.size) * 100,
    y: ((clientY - yAxis.origin) / yAxis.size) * 100
  };
}

export function resolvePointImage(target: PointTargetContradiction, item?: EvidenceItem): string {
  if (target.imageAsset) return target.imageAsset;
  if (item?.detailedView?.imageAsset) return item.detailedView.imageAsset;
  return `assets/examine_${target.targetEvidenceId}.webp`;
}
