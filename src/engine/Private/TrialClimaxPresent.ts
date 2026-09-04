// @Architecture(descriptionShort="Climax present matching, point-target, and final-stage success", type="controller", icon="dialog")
/**
 * Correct-climax present resolution for [[./TrialClimax.ts]].
 */

import type { MidiMusicComposer } from '../../audio/index.js';
import { i18n } from '../../i18n/index.js';
import type {
  CaseScript, ClimaxDefinition, ClimaxStage, DialogueLine, EvidenceId, Testimony
} from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { startPresentPoint } from './PresentPoint.js';
import { choiceOpenSession, openClimaxChoice, queueClimaxCelebration, type ClimaxSession } from './TrialChoice.js';
import { applyPenaltyEffects, queuePenaltyOrRestart, type PenaltyHost } from './TrialPenalty.js';
import type { TrialControllerDeps, TrialPhase } from './TrialController.js';
import { VisualEffects } from './VisualEffects.js';

interface ClimaxRunDeps extends PenaltyHost {
  midiComposer: MidiMusicComposer;
  onOpenCourtRecord: (isTrialPresent: boolean) => void;
}

export interface ClimaxControllerPort {
  deps: TrialControllerDeps;
  script: CaseScript;
  phase: TrialPhase;
  climaxStageIdx: number;
  climaxChoiceIdx: number | null;
  climaxResolved: boolean;
  currentTestimony: Testimony | null;
  hideControls(): void;
  handleSelectChoice(optionId: string): void;
  restartAfterGameOver(): void;
}

interface ClimaxQueueDeps {
  dom: DomElements;
  onQueueDialogue: (dialogue: DialogueLine[], onComplete?: () => void) => void;
}

interface MatchedStage {
  climax: ClimaxDefinition;
  stageIdx: number;
  stage: ClimaxStage;
  onChoiceSelect: (optionId: string) => void;
}

export function getClimaxStages(climax: ClimaxDefinition): ClimaxStage[] {
  if (climax.stages && climax.stages.length > 0) return climax.stages;
  return [{ presentTarget: climax.presentTarget, successDialogue: climax.verdict }];
}

function applyClimaxSession(ctrl: ClimaxControllerPort, result: ClimaxSession): void {
  ctrl.climaxStageIdx = result.stageIdx;
  ctrl.climaxChoiceIdx = result.choiceIdx;
  if (result.settled) ctrl.climaxResolved = true;
}

export function presentClimaxEvidence(
  ctrl: ClimaxControllerPort,
  evidenceId: EvidenceId
): void {
  if (ctrl.climaxChoiceIdx != null) return;
  ctrl.hideControls();
  const climax = ctrl.script.trial.climax;
  const deps = climaxRunDeps(ctrl);
  const stageIdx = ctrl.climaxStageIdx;
  if (!climaxStageMatches({ climax, stageIdx, evidenceId }, deps.state.getEvidenceUpdateStage)) {
    applyWrongClimaxPresent(deps, stageIdx);
    return;
  }
  continueOrPoint(ctrl, { climax, stageIdx, stage: getClimaxStages(climax)[stageIdx], onChoiceSelect: (id) => ctrl.handleSelectChoice(id) }, deps);
}

function climaxRunDeps(ctrl: ClimaxControllerPort): ClimaxRunDeps {
  return { ...ctrl.deps, onRestartTrial: () => ctrl.restartAfterGameOver() };
}

function continueOrPoint(ctrl: ClimaxControllerPort, matched: MatchedStage, deps: ClimaxRunDeps): void {
  const apply = /*applyMatchedStage*/ () => {
    applyClimaxSession(ctrl, continueMatchedClimaxStage(matched, deps));
  };
  if (!matched.stage.pointTarget) {
    apply();
    return;
  }
  startPresentPoint({ deps, pointTarget: matched.stage.pointTarget, onSuccess: apply });
}

function climaxStageMatches(
  session: { climax: ClimaxDefinition; stageIdx: number; evidenceId: EvidenceId },
  getUpdateStage: (id: EvidenceId) => number
): boolean {
  const stages = getClimaxStages(session.climax);
  const idx = Math.min(Math.max(session.stageIdx, 0), stages.length - 1);
  const stage = stages[idx];
  if (!stage.presentTarget.includes(session.evidenceId)) return false;
  const minStage = stage.requiredUpdateStage?.[session.evidenceId];
  if (minStage != null && getUpdateStage(session.evidenceId) < minStage) return false;
  return true;
}

function applyWrongClimaxPresent(deps: ClimaxRunDeps, stageIdx: number): ClimaxSession {
  applyPenaltyEffects(deps);
  queuePenaltyOrRestart(deps, /*onContinue*/ () => {
    VisualEffects.showNotification(deps.dom.gameNotificationEl, i18n.t.notifIncorrectClue);
    deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
  });
  return { stageIdx, choiceIdx: null };
}

function isFinalClimaxStage(climax: ClimaxDefinition, stageIdx: number): boolean {
  return stageIdx >= getClimaxStages(climax).length - 1;
}

function continueMatchedClimaxStage(matched: MatchedStage, deps: ClimaxRunDeps): ClimaxSession {
  const { climax, stageIdx, stage } = matched;
  if (!isFinalClimaxStage(climax, stageIdx)) {
    deps.onQueueDialogue(stage.successDialogue, /*openNextPresent*/ () => {
      deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
    });
    return { stageIdx: stageIdx + 1, choiceIdx: null };
  }
  return finishFinalClimaxStage(matched, deps);
}

function finishFinalClimaxStage(matched: MatchedStage, deps: ClimaxRunDeps): ClimaxSession {
  const { climax, stageIdx, stage, onChoiceSelect } = matched;
  if (climax.choices && climax.choices.length > 0) {
    deps.onQueueDialogue(stage.successDialogue, /*openFirstChoice*/ () => {
      openClimaxChoice(choiceOpenSession(deps, climax, 0, onChoiceSelect));
    });
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
  });
}
