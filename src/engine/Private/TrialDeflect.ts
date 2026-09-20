// @Architecture(descriptionShort="Answers plausible but premature presents without a penalty", type="util", icon="panel")
/**
 * The third outcome of a present, next to success and penalty, for [[./TrialPresent.ts]]:
 * the evidence really does bear on the statement, just not yet. The court answers,
 * the health bar does not move, and the player stays on the same statement.
 */

import type { EvidenceId, Statement } from '../../types/index.js';
import type { TrialController } from './TrialController.js';

/** True when the statement deflects this item, in which case the court has answered. */
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
