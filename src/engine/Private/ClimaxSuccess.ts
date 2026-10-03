// @Architecture(descriptionShort="Advances climax presents into choices deductions and verdicts")
import type { ClimaxDefinition, ClimaxStage, DialogueQueue } from '../../types/index.js';
import { choiceOpenSession, openClimaxChoice, queueClimaxCelebration, type ClimaxSession } from './TrialChoice.js';
import type { ClimaxRunDeps, MatchedStage } from './TrialClimaxPresent.js';
interface ClimaxQueueDeps { onQueueDialogue: DialogueQueue; dom: ClimaxRunDeps['dom'] }

function isFinalClimaxStage(climax: ClimaxDefinition, stageIdx: number): boolean {
  return stageIdx >= getClimaxStages(climax).length - 1;
}

export function continueMatchedClimaxStage(matched: MatchedStage, deps: ClimaxRunDeps): ClimaxSession {
  const { climax, stageIdx, stage } = matched;
  if (!isFinalClimaxStage(climax, stageIdx)) {
    if (climax.choicesAfterStage === stageIdx && climax.choices?.length) {
      deps.onQueueDialogue(stage.successDialogue, /*openFirstChoice*/ () => {
        openClimaxChoice(choiceOpenSession(deps, climax, 0, matched.onChoiceSelect));
      }, { kind: 'choice' });
      return { stageIdx, choiceIdx: 0 };
    }
    deps.onQueueDialogue(stage.successDialogue, /*openNextPresent*/ () => {
      deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
    }, { kind: 'present' });
    return { stageIdx: stageIdx + 1, choiceIdx: null };
  }
  return finishFinalClimaxStage(matched, deps);
}

function finishFinalClimaxStage(matched: MatchedStage, deps: ClimaxRunDeps): ClimaxSession {
  const { climax, stageIdx, stage, onChoiceSelect } = matched;
  if (climax.deduction && deps.onStartDeduction) {
    deps.onQueueDialogue(stage.successDialogue, /*openPrivateDeduction*/ () => deps.onStartDeduction?.(),
      { kind: 'deduction', id: climax.deduction.id });
    return { stageIdx, choiceIdx: null };
  }
  if (climax.choices && climax.choices.length > 0 && climax.choicesAfterStage == null) {
    deps.onQueueDialogue(stage.successDialogue, /*openFirstChoice*/ () => {
      openClimaxChoice(choiceOpenSession(deps, climax, 0, onChoiceSelect));
    }, { kind: 'choice' });
    return { stageIdx, choiceIdx: 0 };
  }
  queueFinalStageVictory(climax, stage, deps);
  return { stageIdx, choiceIdx: null, settled: true };
}

function queueFinalStageVictory(
  climax: ClimaxDefinition,
  stage: ClimaxStage,
  deps: ClimaxQueueDeps
): void {
  if (!climax.stages?.length) {
    queueClimaxCelebration(climax.verdict, climax, deps);
    return;
  }
  deps.onQueueDialogue(stage.successDialogue, /*thenVerdict*/ () => {
    queueClimaxCelebration(climax.verdict, climax, deps);
  }, { kind: 'verdict' });
}

export function getClimaxStages(climax: ClimaxDefinition): ClimaxStage[] {
  if (climax.stages && climax.stages.length > 0) return climax.stages;
  return [{ presentTarget: climax.presentTarget, successDialogue: climax.verdict }];
}
