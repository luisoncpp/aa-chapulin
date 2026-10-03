// @Architecture(descriptionShort="Resolves deduction origins and resumes their trial flow")
import type { DeductionSequence } from '../../deduction/index.js';
import type { DialogueLine } from '../../types/index.js';
import type { TrialController } from './TrialController.js';
import { getActiveTrial } from './TrialDayRouter.js';
import { advanceAfterContradiction } from './TrialOutcome.js';
import { queueClimaxVictory } from './TrialClimax.js';

export interface TrialDeductionRoute {
  sequence: DeductionSequence;
  continuation: DialogueLine[];
  testimonyIndex?: number;
}

export function findTrialDeduction(ctrl: TrialController, sequenceId?: string): TrialDeductionRoute | undefined {
  const day = getActiveTrial(ctrl.script, ctrl.deps.state.trialDay);
  for (const [testimonyIndex, testimony] of day.testimonies.entries()) {
    for (const statement of testimony.statements) {
      const followUp = statement.contradiction?.followUp;
      if (!followUp?.deduction || (sequenceId && followUp.deduction.id !== sequenceId)) continue;
      return { sequence: followUp.deduction, continuation: followUp.successDialogue, testimonyIndex };
    }
  }
  const climax = ctrl.script.trial.climax;
  if (!climax.deduction || (sequenceId && climax.deduction.id !== sequenceId)) return;
  return { sequence: climax.deduction, continuation: climax.deductionOpening ?? [] };
}

export function finishTrialDeduction(ctrl: TrialController, route: TrialDeductionRoute): void {
  ctrl.deps.onQueueDialogue(route.continuation, /*resumeAuthoredTrial*/ () => {
    if (route.testimonyIndex !== undefined) {
      advanceAfterContradiction(ctrl);
      return;
    }
    queueClimaxVictory(ctrl.script.trial.climax, ctrl.deps);
  }, { kind: route.testimonyIndex !== undefined ? 'advance' : 'verdict' });
}
