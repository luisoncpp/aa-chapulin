// @Architecture(descriptionShort="Evidence update stages and description resolution", type="util", icon="database")
/**
 * Evidence multi-stage update logic for [[./GameStateManager.ts]].
 */

import type { EvidenceCatalogMap, EvidenceId } from '../../types/index.js';

export type EvidenceStageMap = Record<string, number>;

export function getEvidenceUpdateStage(stages: EvidenceStageMap, evidenceId: EvidenceId): number {
  return stages[evidenceId] ?? 0;
}

export function getMaxEvidenceStage(item: EvidenceCatalogMap[EvidenceId]): number {
  if (!item) return 0;
  if (item.updates?.length) return item.updates.length;
  return item.updatedDesc ? 1 : 0;
}

export function resolveEvidenceDescription(
  item: EvidenceCatalogMap[EvidenceId],
  stage: number
): string {
  if (!item) return '';
  // `updates[]` entries are written as addenda, so the Acta shows the original
  // description plus every addendum unlocked so far. Legacy `updatedDesc` is a
  // full rewrite and still replaces the original.
  if (item.updates?.length && stage > 0) {
    const revealed = item.updates.slice(0, Math.min(stage, item.updates.length));
    return [item.desc, ...revealed].join('\n\n');
  }
  if (stage > 0 && item.updatedDesc) return item.updatedDesc;
  return item.desc;
}

export function advanceEvidenceStage(
  stages: EvidenceStageMap,
  item: EvidenceCatalogMap[EvidenceId]
): boolean {
  if (!item) return false;
  const maxStage = getMaxEvidenceStage(item);
  if (maxStage === 0) return false;
  const current = getEvidenceUpdateStage(stages, item.id);
  if (current >= maxStage) return false;
  stages[item.id] = current + 1;
  return true;
}
