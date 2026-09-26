// @Architecture(descriptionShort="Routes premature and witness deflect presents", type="util", icon="panel")
/**
 * Present outcomes that are related to the current statement but are not the
 * resolving contradiction. A scripted premature answer is harmless; a
 * witness denial is a penalty with its own dialogue.
 */

import type { DialogueLine, EvidenceDeflect, EvidenceId, Statement } from '../../types/index.js';
import { visibleStatements } from './StatementUnlock.js';
import { applyPenaltyEffects, queuePenaltyOrRestart } from './TrialPenalty.js';
import type { TrialController } from './TrialController.js';

/** True when the statement answers this item without a penalty. */
export function tryDeflect(
  ctrl: TrialController,
  statement: Statement | undefined,
  evidenceId: EvidenceId
): boolean {
  const deflect = statement?.deflect;
  if (!deflect?.evidence.includes(evidenceId)) return false;
  ctrl.hideControls();
  ctrl.deps.onQueueDialogue(
    deflect.dialogue,
    /*resumeStatement*/ () => ctrl.renderCurrentStatement()
  );
  return true;
}

export function currentVisibleStatement(ctrl: TrialController): Statement | undefined {
  if (!ctrl.currentTestimony) return undefined;
  const pressed = new Set(ctrl.getTrialSnapshot().pressedStatementIds);
  return visibleStatements(ctrl.currentTestimony, pressed)[ctrl.currentStatementIdx];
}

/** Queues a scripted witness denial and applies the ordinary penalty. */
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
    {
      ...ctrl.deps,
      script: ctrl.script,
      testimony: ctrl.currentTestimony,
      onRestartTrial: () => ctrl.restartAfterGameOver(),
      guiltyDialogue: ctrl.script.trial.climax.guiltyDialogue
    },
    /*onContinue*/ () => ctrl.renderCurrentStatement()
  );
  ctrl.deps.onQueueDialogue(dialogue, resume);
}
