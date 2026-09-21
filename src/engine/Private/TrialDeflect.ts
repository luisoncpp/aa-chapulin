// @Architecture(descriptionShort="Queues witness deflect dialogue on a mismatched present", type="util", icon="panel")
/**
 * Statement/testimony evidence deflects for [[./TrialPresent.ts]].
 */

import type { DialogueLine, EvidenceDeflect, EvidenceId, Statement } from '../../types/index.js';
import { visibleStatements } from './StatementUnlock.js';
import { applyPenaltyEffects, queuePenaltyOrRestart } from './TrialPenalty.js';
import type { TrialController } from './TrialController.js';

export function currentVisibleStatement(ctrl: TrialController): Statement | undefined {
  if (!ctrl.currentTestimony) return undefined;
  const pressed = new Set(ctrl.getTrialSnapshot().pressedStatementIds);
  return visibleStatements(ctrl.currentTestimony, pressed)[ctrl.currentStatementIdx];
}

export function tryPresentDeflect(ctrl: TrialController, evidenceId: EvidenceId): boolean {
  const deflect = resolveDeflect(ctrl, evidenceId);
  if (!deflect) return false;
  queueDeflectMiss(ctrl, deflect.dialogue);
  return true;
}

function resolveDeflect(ctrl: TrialController, evidenceId: EvidenceId): EvidenceDeflect | undefined {
  const stmt = currentVisibleStatement(ctrl);
  return matchDeflect(stmt?.deflects, evidenceId)
    ?? matchDeflect(ctrl.currentTestimony?.deflects, evidenceId);
}

function matchDeflect(
  deflects: EvidenceDeflect[] | undefined,
  evidenceId: EvidenceId
): EvidenceDeflect | undefined {
  return deflects?.find((entry) => entry.evidence.includes(evidenceId));
}

function queueDeflectMiss(ctrl: TrialController, dialogue: DialogueLine[]): void {
  ctrl.bumpFailedPresentCount();
  applyPenaltyEffects(ctrl.deps);
  ctrl.hideControls();
  const resume = /*afterDeflect*/ () => queuePenaltyOrRestart(
    { ...ctrl.deps, testimony: ctrl.currentTestimony, onRestartTrial: () => ctrl.restartAfterGameOver() },
    /*onContinue*/ () => ctrl.renderCurrentStatement()
  );
  ctrl.deps.onQueueDialogue(dialogue, resume);
}
