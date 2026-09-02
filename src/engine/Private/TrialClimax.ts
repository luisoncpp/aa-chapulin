// @Architecture(descriptionShort="Queues climax verdict then waiting-room epilogue", type="controller", icon="dialog")
/**
 * Correct-climax victory: courtroom confetti, then a fade into the waiting room.
 */

import type { MidiMusicComposer } from '../../audio/index.js';
import { i18n } from '../../i18n/index.js';
import type {
  CaseScript, ClimaxDefinition, ClimaxStage, DialogueLine, EvidenceId, Testimony
} from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import {
  choiceOpenSession, openClimaxChoice, queueClimaxCelebration,
  resolveClimaxChoice, restoreClimaxSession, type ClimaxRestoreCtx, type ClimaxSession
} from './TrialChoice.js';
import { applyClimaxPresentPrompt } from './ClimaxPresentPrompt.js';
import { applyPenaltyEffects, queuePenaltyOrRestart, type PenaltyHost } from './TrialPenalty.js';
import type { TrialControllerDeps, TrialPhase } from './TrialController.js';
import { VisualEffects } from './VisualEffects.js';

interface ClimaxQueueDeps {
  dom: DomElements;
  onQueueDialogue: (dialogue: DialogueLine[], onComplete?: () => void) => void;
}

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

function getClimaxStages(climax: ClimaxDefinition): ClimaxStage[] {
  if (climax.stages && climax.stages.length > 0) return climax.stages;
  return [{ presentTarget: climax.presentTarget, successDialogue: climax.verdict }];
}

function climaxStageMatches(
  climax: ClimaxDefinition,
  stageIdx: number,
  evidenceId: EvidenceId,
  getUpdateStage: (id: EvidenceId) => number
): boolean {
  const stages = getClimaxStages(climax);
  const idx = Math.min(Math.max(stageIdx, 0), stages.length - 1);
  const stage = stages[idx];
  if (!stage.presentTarget.includes(evidenceId)) return false;
  const minStage = stage.requiredUpdateStage?.[evidenceId];
  if (minStage != null && getUpdateStage(evidenceId) < minStage) return false;
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

function buildClimaxCtx(ctrl: ClimaxControllerPort): ClimaxRestoreCtx {
  return {
    ...ctrl.deps,
    climax: ctrl.script.trial.climax,
    stageIdx: ctrl.climaxStageIdx,
    choiceIdx: ctrl.climaxChoiceIdx,
    onSelect: (id) => ctrl.handleSelectChoice(id),
    setStageIdx: (n) => { ctrl.climaxStageIdx = n; },
    setChoiceIdx: (n) => { ctrl.climaxChoiceIdx = n; },
    enterClimaxPhase: () => {
      ctrl.phase = 'CLIMAX';
      ctrl.currentTestimony = null;
      ctrl.hideControls();
    },
    onRestartTrial: () => ctrl.restartAfterGameOver()
  };
}

function openClimaxPresent(
  deps: ClimaxRunDeps,
  climax: ClimaxDefinition,
  replayOpening: boolean
): void {
  deps.dom.bgEl.style.backgroundImage = "url('assets/bg_courtroom.webp')";
  deps.midiComposer.playTrack('suspense');
  if (!replayOpening) {
    deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
    return;
  }
  deps.onQueueDialogue(climax.dialogue, /*onComplete*/ () => {
    deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
  });
}

function presentClimaxEvidence(
  session: { climax: ClimaxDefinition; stageIdx: number; evidenceId: EvidenceId },
  deps: ClimaxRunDeps,
  onChoiceSelect: (optionId: string) => void
): ClimaxSession {
  const { climax, stageIdx, evidenceId } = session;
  if (!climaxStageMatches(climax, stageIdx, evidenceId, deps.state.getEvidenceUpdateStage)) {
    return applyWrongClimaxPresent(deps, stageIdx);
  }
  if (isFinalClimaxStage(climax, stageIdx)) {
    if (climax.choices && climax.choices.length > 0) {
      const stage = getClimaxStages(climax)[stageIdx];
      deps.onQueueDialogue(stage.successDialogue, /*openFirstChoice*/ () => {
        openClimaxChoice(choiceOpenSession(deps, climax, 0, onChoiceSelect));
      });
      return { stageIdx, choiceIdx: 0 };
    }
    queueClimaxVictory(climax, deps);
    return { stageIdx, choiceIdx: null, settled: true };
  }
  const stage = getClimaxStages(climax)[stageIdx];
  deps.onQueueDialogue(stage.successDialogue, /*openNextPresent*/ () => {
    deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
  });
  return { stageIdx: stageIdx + 1, choiceIdx: null };
}

export function restoreClimaxFromSnapshot(
  ctrl: ClimaxControllerPort,
  stageIdx: number,
  choiceIdx: number | null
): void {
  restoreClimaxSession({ ...buildClimaxCtx(ctrl), stageIdx, choiceIdx });
}

export function startClimaxPhase(ctrl: ClimaxControllerPort, replayOpening: boolean): void {
  ctrl.climaxStageIdx = 0;
  ctrl.climaxChoiceIdx = null;
  ctrl.climaxResolved = false;
  ctrl.phase = 'CLIMAX';
  ctrl.currentTestimony = null;
  ctrl.hideControls();
  applyClimaxPresentPrompt(ctrl.deps.dom, null);
  openClimaxPresent(ctrl.deps, ctrl.script.trial.climax, replayOpening);
}

export function handleClimaxEvidencePresent(ctrl: ClimaxControllerPort, evidenceId: EvidenceId): void {
  if (ctrl.climaxChoiceIdx != null) return;
  ctrl.hideControls();
  const result = presentClimaxEvidence(
    { climax: ctrl.script.trial.climax, stageIdx: ctrl.climaxStageIdx, evidenceId },
    { ...ctrl.deps, onRestartTrial: () => ctrl.restartAfterGameOver() },
    (id) => ctrl.handleSelectChoice(id)
  );
  ctrl.climaxStageIdx = result.stageIdx;
  ctrl.climaxChoiceIdx = result.choiceIdx;
  if (result.settled) ctrl.climaxResolved = true;
}

export function resolveClimaxChoiceFromController(ctrl: ClimaxControllerPort, optionId: string): void {
  if (ctrl.phase !== 'CLIMAX' || ctrl.climaxChoiceIdx == null) return;
  ctrl.climaxChoiceIdx = resolveClimaxChoice(
    { climax: ctrl.script.trial.climax, choiceIdx: ctrl.climaxChoiceIdx, optionId },
    buildClimaxCtx(ctrl),
    (id) => ctrl.handleSelectChoice(id)
  );
  if (ctrl.climaxChoiceIdx == null) ctrl.climaxResolved = true;
}

export function rebindClimaxChoiceModal(ctrl: ClimaxControllerPort): void {
  if (ctrl.phase !== 'CLIMAX' || ctrl.climaxChoiceIdx == null) return;
  openClimaxChoice(choiceOpenSession(
    ctrl.deps,
    ctrl.script.trial.climax,
    ctrl.climaxChoiceIdx,
    (id) => ctrl.handleSelectChoice(id)
  ));
}

// fallow-ignore-next-line unused-export
export { celebrateClimax, queueClimaxCelebration } from './TrialChoice.js';

export function isAwaitingClimaxEvidence(ctrl: ClimaxControllerPort): boolean {
  return ctrl.phase === 'CLIMAX' && ctrl.climaxChoiceIdx == null && !ctrl.climaxResolved;
}

export function getClimaxPresentPrompt(ctrl: ClimaxControllerPort): string | null {
  if (!isAwaitingClimaxEvidence(ctrl)) return null;
  const stages = getClimaxStages(ctrl.script.trial.climax);
  return stages[ctrl.climaxStageIdx]?.prompt ?? null;
}

// fallow-ignore-next-line unused-export
export function queueClimaxVictory(climax: ClimaxDefinition, deps: ClimaxQueueDeps): void {
  queueClimaxCelebration(climax.verdict, climax, deps);
}

