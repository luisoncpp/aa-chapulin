// @Architecture(descriptionShort="Climax present matching, point-target, and final-stage success", type="controller", icon="dialog")
/**
 * Correct-climax present resolution for [[./TrialClimax.ts]].
 */

import type { MidiMusicComposer } from '../../audio/index.js';
import { i18n } from '../../i18n/index.js';
import type {
  CaseScript, ClimaxDefinition, ClimaxStage, DialogueLine, EvidenceId, ProfileId, Testimony
} from '../../types/index.js';
import { startPresentPoint } from './PresentPoint.js';
import { type ClimaxSession } from './TrialChoice.js';
import { applyPenaltyEffects, queuePenaltyOrRestart, type PenaltyHost } from './TrialPenalty.js';
import type { TrialControllerDeps, TrialPhase } from './TrialController.js';
import { continueMatchedClimaxStage, getClimaxStages } from './ClimaxSuccess.js';
import { VisualEffects } from './VisualEffects.js';

export interface ClimaxRunDeps extends PenaltyHost {
  midiComposer: MidiMusicComposer;
  onOpenCourtRecord: (isTrialPresent: boolean) => void;
  onStartDeduction?: () => void;
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

export interface MatchedStage {
  climax: ClimaxDefinition;
  stageIdx: number;
  stage: ClimaxStage;
  onChoiceSelect: (optionId: string) => void;
}



export function currentClimaxStage(ctrl: ClimaxControllerPort): ClimaxStage {
  const stages = getClimaxStages(ctrl.script.trial.climax);
  const idx = Math.min(Math.max(ctrl.climaxStageIdx, 0), stages.length - 1);
  return stages[idx];
}

/**
 * Person-shaped climax stage (spec §13.1). A wrong person costs a point and
 * repeats the question without revealing the answer.
 */
export function presentClimaxProfile(ctrl: ClimaxControllerPort, profileId: ProfileId): void {
  if (ctrl.climaxChoiceIdx != null) return;
  ctrl.hideControls();
  const climax = ctrl.script.trial.climax;
  const deps = climaxRunDeps(ctrl);
  const stageIdx = ctrl.climaxStageIdx;
  const stage = getClimaxStages(climax)[stageIdx];
  if (!stage?.profileTarget?.includes(profileId)) {
    applyWrongClimax(deps, i18n.t.notifIncorrectProfile, stage?.failDialogue);
    return;
  }
  continueOrPoint(ctrl, { climax, stageIdx, stage, onChoiceSelect: (id) => ctrl.handleSelectChoice(id) }, deps);
}

function applyWrongClimax(deps: ClimaxRunDeps, notif: string, failDialogue?: DialogueLine[]): void {
  applyPenaltyEffects(deps);
  queuePenaltyOrRestart(deps, /*onContinue*/ () => {
    const reopen = /*reopenRecord*/ () => {
      VisualEffects.showNotification(deps.dom.gameNotificationEl, notif);
      deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
    };
    if (!failDialogue?.length) return reopen();
    deps.onQueueDialogue(failDialogue, reopen, { kind: 'present' });
  });
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
  const stage = getClimaxStages(climax)[stageIdx];
  const matches = climaxStageMatches({ climax, stageIdx, evidenceId }, (id) => deps.state.getEvidenceUpdateStage(id));
  if (matches) {
    continueOrPoint(ctrl, { climax, stageIdx, stage, onChoiceSelect: (id) => ctrl.handleSelectChoice(id) }, deps);
    return;
  }
  if (tryClimaxDeflect(deps, stage, evidenceId)) return;
  applyWrongClimax(deps, i18n.t.notifIncorrectClue, stage?.failDialogue);
}

function tryClimaxDeflect(
  deps: ClimaxRunDeps,
  stage: ClimaxStage | undefined,
  evidenceId: EvidenceId
): boolean {
  const deflect = stage?.deflects?.find((entry) => entry.evidence.includes(evidenceId));
  if (!deflect) return false;
  deps.onQueueDialogue(deflect.dialogue, /*reopenClimaxPresent*/ () => {
    deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
  }, { kind: 'present' });
  return true;
}

function climaxRunDeps(ctrl: ClimaxControllerPort): ClimaxRunDeps {
  return {
    ...ctrl.deps,
    testimony: ctrl.currentTestimony,
    onRestartTrial: () => ctrl.restartAfterGameOver(),
    guiltyDialogue: ctrl.script.trial.climax.guiltyDialogue
  };
}

function continueOrPoint(ctrl: ClimaxControllerPort, matched: MatchedStage, deps: ClimaxRunDeps): void {
  const apply = /*applyMatchedStage*/ () => {
    applyClimaxSession(ctrl, continueMatchedClimaxStage(matched, deps));
  };
  if (!matched.stage.pointTarget) {
    apply();
    return;
  }
  const startPoint = /*beginPointOverlay*/ () => {
    startPresentPoint({ deps, pointTarget: matched.stage.pointTarget!, onSuccess: apply,
      next: { kind: 'climax-point', index: matched.stageIdx } });
  };
  if (matched.stage.introDialogue?.length) {
    deps.onQueueDialogue(matched.stage.introDialogue, startPoint, {
      kind: 'point', target: matched.stage.pointTarget!, next: { kind: 'climax-point', index: matched.stageIdx }
    });
    return;
  }
  startPoint();
}

export function resumeClimaxPoint(ctrl: ClimaxControllerPort, stageIdx: number): void {
  const climax = ctrl.script.trial.climax;
  const stage = getClimaxStages(climax)[stageIdx];
  applyClimaxSession(ctrl, continueMatchedClimaxStage({ climax, stageIdx, stage,
    onChoiceSelect: (id) => ctrl.handleSelectChoice(id) }, climaxRunDeps(ctrl)));
}

// fallow-ignore-next-line complexity
function climaxStageMatches(
  session: { climax: ClimaxDefinition; stageIdx: number; evidenceId: EvidenceId },
  getUpdateStage: (id: EvidenceId) => number
): boolean {
  const stages = getClimaxStages(session.climax);
  const idx = Math.min(Math.max(session.stageIdx, 0), stages.length - 1);
  const stage = stages[idx];
  if (!stage.presentTarget?.includes(session.evidenceId)) return false;
  const minStage = stage.requiredUpdateStage?.[session.evidenceId];
  if (minStage != null && getUpdateStage(session.evidenceId) < minStage) return false;
  return true;
}

export { getClimaxStages } from './ClimaxSuccess.js';
