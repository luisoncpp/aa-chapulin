// @Architecture(descriptionShort="Trial Present-and-Point overlay hit testing and penalties", type="controller", icon="dialog")
/**
 * After a matching present, the player clicks a zone on a 640×360 evidence plate.
 */

import type { CaseScript, PointTargetContradiction, PointZone } from '../../types/index.js';
import { applyPenaltyEffects, queuePenaltyOrRestart, type PenaltyHost } from './TrialPenalty.js';
import type { DomElements } from './DomElements.js';
import { findPointTarget } from './PointTargets.js';
import { ModalManager } from './ModalManager.js';
import type { DialogueContinuation } from '../../types/index.js';
import {
  findHitZone, percentFromStageClick, POINT_STAGE_HEIGHT, POINT_STAGE_WIDTH, resolvePointImage
} from './PresentPointGeometry.js';

export interface PresentPointStart {
  deps: PenaltyHost;
  pointTarget: PointTargetContradiction;
  onSuccess: () => void;
  next?: DialogueContinuation;
}

interface ActivePoint extends PresentPointStart {}

let active: ActivePoint | null = null;
let suspendedForCourtRecord = false;

export function isPresentPointOpen(dom: DomElements): boolean {
  const overlay = dom.presentPointOverlayEl;
  return Boolean(overlay && !overlay.classList.contains('hidden'));
}

export function isPresentPointActive(dom: DomElements): boolean {
  return active?.deps.dom === dom;
}

export function suspendPresentPointForCourtRecord(dom: DomElements): void {
  if (!active || !isPresentPointOpen(dom)) return;
  suspendedForCourtRecord = true;
  closePresentPoint(dom);
}

export function resumePresentPointAfterCourtRecord(dom: DomElements): void {
  if (!active || !suspendedForCourtRecord) return;
  suspendedForCourtRecord = false;
  showOverlay(dom, active.pointTarget, active.deps);
}

export function closePresentPoint(dom: DomElements): void {
  dom.presentPointOverlayEl?.classList.add('hidden');
}

export function resetPresentPoint(dom: DomElements): void {
  active = null;
  suspendedForCourtRecord = false;
  closePresentPoint(dom);
}

export function snapshotPresentPoint(dom: DomElements): Extract<DialogueContinuation, { kind: 'point' }> | undefined {
  if (active?.deps.dom !== dom || !active.next || (!isPresentPointOpen(dom) && !suspendedForCourtRecord)) return;
  return { kind: 'point', target: active.pointTarget, next: active.next };
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
  suspendedForCourtRecord = false;
  showOverlay(config.deps.dom, config.pointTarget, config.deps);
}

export function rebindPresentPointScript(script: CaseScript): void {
  if (!active) return;
  const target = findPointTarget(script, active.pointTarget.targetEvidenceId, active.pointTarget.id);
  if (!target) return;
  active = { ...active, pointTarget: target };
  if (!suspendedForCourtRecord) showOverlay(active.deps.dom, target, active.deps);
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
  const current = active;
  const { deps, pointTarget } = current;
  active = null;
  suspendedForCourtRecord = false;
  closePresentPoint(deps.dom);
  deps.soundEngine.playRealization();
  const continueSequence = nextPointContinuation(current);
  const successDialogue = pointTarget.successDialogue;
  if (!successDialogue?.length) return continueSequence();
  const next = pointTarget.next ? { kind: 'point' as const, target: pointTarget.next,
    next: current.next ?? { kind: 'none' as const } } : current.next;
  deps.onQueueDialogue(successDialogue, continueSequence, next);
}

function nextPointContinuation(current: ActivePoint): () => void {
  const { pointTarget, onSuccess } = current;
  const next = pointTarget.next;
  if (!next) return onSuccess;
  return /*openNextPoint*/ () => startPresentPoint({ ...current, pointTarget: next });
}

function failPoint(hit: PointZone | null): void {
  if (!active) return;
  const { deps, pointTarget } = active;
  suspendedForCourtRecord = false;
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
  active.deps.onQueueDialogue(lines, reopen, { kind: 'point', target,
    next: active.next ?? { kind: 'none' } });
}

function failureLines(target: PointTargetContradiction, hit: PointZone | null) {
  const hitFailure = hit?.isCorrect === false ? hit.failureDialogue : undefined;
  if (hitFailure?.length) return hitFailure;
  const firstWrong = target.zones.find((z) => !z.isCorrect);
  return firstWrong?.failureDialogue ?? [];
}
