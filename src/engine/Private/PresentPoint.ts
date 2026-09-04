// @Architecture(descriptionShort="Trial Present-and-Point overlay hit testing and penalties", type="controller", icon="dialog")
/**
 * After a matching present, the player clicks a zone on a 640×360 evidence plate.
 */

import type { EvidenceItem, PointTargetContradiction, PointZone } from '../../types/index.js';
import { applyPenaltyEffects, queuePenaltyOrRestart, type PenaltyHost } from './TrialPenalty.js';
import type { DomElements } from './DomElements.js';
import { ModalManager } from './ModalManager.js';

// fallow-ignore-next-line unused-export -- tests/engine/PresentPoint.test.ts
export const POINT_STAGE_WIDTH = 640;
// fallow-ignore-next-line unused-export -- tests/engine/PresentPoint.test.ts
export const POINT_STAGE_HEIGHT = 360;

export interface PresentPointStart {
  deps: PenaltyHost;
  pointTarget: PointTargetContradiction;
  onSuccess: () => void;
}

interface ActivePoint extends PresentPointStart {}

let active: ActivePoint | null = null;

// fallow-ignore-next-line unused-export -- tests/engine/PresentPoint.test.ts
export function isInsideBounds(
  bounds: [number, number, number, number],
  xPct: number,
  yPct: number
): boolean {
  const [minX, minY, maxX, maxY] = bounds;
  return xPct >= minX && xPct <= maxX && yPct >= minY && yPct <= maxY;
}

// fallow-ignore-next-line unused-export -- tests/engine/PresentPoint.test.ts
export function findHitZone(zones: PointZone[], xPct: number, yPct: number): PointZone | null {
  const correct = zones.find((z) => z.isCorrect && isInsideBounds(z.bounds, xPct, yPct));
  if (correct) return correct;
  return zones.find((z) => !z.isCorrect && isInsideBounds(z.bounds, xPct, yPct)) ?? null;
}

// fallow-ignore-next-line unused-export -- tests/engine/PresentPoint.test.ts
export function percentFromStageClick(
  clientX: number,
  clientY: number,
  rect: { left: number; top: number; width: number; height: number }
): { x: number; y: number } {
  const w = rect.width > 0 ? rect.width : POINT_STAGE_WIDTH;
  const h = rect.height > 0 ? rect.height : POINT_STAGE_HEIGHT;
  const left = rect.width > 0 ? rect.left : 0;
  const top = rect.height > 0 ? rect.top : 0;
  return { x: ((clientX - left) / w) * 100, y: ((clientY - top) / h) * 100 };
}

// fallow-ignore-next-line unused-export -- tests/engine/PresentPoint.test.ts
export function resolvePointImage(target: PointTargetContradiction, item?: EvidenceItem): string {
  if (target.imageAsset) return target.imageAsset;
  if (item?.detailedView?.imageAsset) return item.detailedView.imageAsset;
  return `assets/examine_${target.targetEvidenceId}.webp`;
}

export function isPresentPointOpen(dom: DomElements): boolean {
  const overlay = dom.presentPointOverlayEl;
  return Boolean(overlay && !overlay.classList.contains('hidden'));
}

export function closePresentPoint(dom: DomElements): void {
  dom.presentPointOverlayEl?.classList.add('hidden');
}

export function bindPresentPoint(dom: DomElements): void {
  dom.presentPointStageEl?.addEventListener('click', /*onPointStageClick*/ (e) => {
    e.stopPropagation();
    const pct = clickPercent(e, e.currentTarget as HTMLElement);
    resolvePointClick(pct.x, pct.y);
  });
}

export function startPresentPoint(config: PresentPointStart): void {
  ModalManager.closeCourtRecord(config.deps.dom);
  active = config;
  showOverlay(config.deps.dom, config.pointTarget, config.deps);
}

// fallow-ignore-next-line unused-export -- tests/engine/PresentPoint.test.ts
export function resolvePointClick(xPct: number, yPct: number): void {
  if (!active) return;
  const hit = findHitZone(active.pointTarget.zones, xPct, yPct);
  if (hit?.isCorrect) {
    completeCorrectPoint();
    return;
  }
  failPoint(hit);
}

function clickPercent(e: MouseEvent, stage: HTMLElement): { x: number; y: number } {
  const rect = stage.getBoundingClientRect();
  if (rect.width > 0 && rect.height > 0) {
    return percentFromStageClick(e.clientX, e.clientY, rect);
  }
  return { x: (e.offsetX / POINT_STAGE_WIDTH) * 100, y: (e.offsetY / POINT_STAGE_HEIGHT) * 100 };
}

function showOverlay(dom: DomElements, target: PointTargetContradiction, deps: PenaltyHost): void {
  if (dom.presentPointPromptEl) dom.presentPointPromptEl.textContent = target.promptQuestion;
  if (dom.presentPointImageEl) {
    const item = deps.state.allEvidence[target.targetEvidenceId];
    dom.presentPointImageEl.src = resolvePointImage(target, item);
  }
  dom.presentPointOverlayEl?.classList.remove('hidden');
}

function completeCorrectPoint(): void {
  if (!active) return;
  const { deps, onSuccess } = active;
  active = null;
  closePresentPoint(deps.dom);
  deps.soundEngine.playRealization();
  onSuccess();
}

function failPoint(hit: PointZone | null): void {
  if (!active) return;
  const { deps, pointTarget } = active;
  closePresentPoint(deps.dom);
  applyPenaltyEffects(deps);
  if (deps.state.gameOver) {
    active = null;
    queuePenaltyOrRestart(deps, /*noContinue*/ () => undefined);
    return;
  }
  replayPointFailure(pointTarget, hit);
}

function replayPointFailure(target: PointTargetContradiction, hit: PointZone | null): void {
  if (!active) return;
  const lines = failureLines(target, hit);
  const reopen = /*reopenPoint*/ () => showOverlay(active!.deps.dom, target, active!.deps);
  if (!lines.length) {
    reopen();
    return;
  }
  active.deps.onQueueDialogue(lines, reopen);
}

function failureLines(target: PointTargetContradiction, hit: PointZone | null) {
  if (hit && !hit.isCorrect && hit.failureDialogue.length > 0) return hit.failureDialogue;
  const firstWrong = target.zones.find((z) => !z.isCorrect);
  return firstWrong?.failureDialogue ?? [];
}
