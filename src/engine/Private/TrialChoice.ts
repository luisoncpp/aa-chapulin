// @Architecture(descriptionShort="Climax multiple-choice prompts after final present", type="controller", icon="dialog")
/**
 * Choice modal, resolve logic, and celebration for trial climax.
 */

import type { MidiMusicComposer } from '../../audio/index.js';
import { i18n } from '../../i18n/index.js';
import type { ClimaxDefinition, ClimaxEpilogue, DialogueLine } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { ModalManager } from './ModalManager.js';
import { showCaseComplete } from './CaseComplete.js';
import { COURTROOM_CELEBRATION_MS, fadeToBlack, fadeThroughBlack } from './SceneFade.js';
import { applyPenaltyEffects, type PenaltyHost } from './TrialPenalty.js';
import { VisualEffects } from './VisualEffects.js';

export interface ClimaxSession {
  stageIdx: number;
  choiceIdx: number | null;
  settled?: boolean;
}

export interface ChoiceOpenSession {
  deps: { dom: DomElements };
  climax: ClimaxDefinition;
  choiceIdx: number;
  onSelect: (optionId: string) => void;
}

interface ClimaxQueueDeps {
  dom: DomElements;
  onQueueDialogue: (dialogue: DialogueLine[], onComplete?: () => void) => void;
}

export interface ClimaxRestoreCtx extends ClimaxQueueDeps, PenaltyHost {
  climax: ClimaxDefinition;
  stageIdx: number;
  choiceIdx: number | null;
  onSelect: (optionId: string) => void;
  setStageIdx: (idx: number) => void;
  setChoiceIdx: (idx: number | null) => void;
  enterClimaxPhase: () => void;
  midiComposer: MidiMusicComposer;
  onOpenCourtRecord: (isTrialPresent: boolean) => void;
}

// fallow-ignore-next-line unused-export
export function hasClimaxChoices(climax: ClimaxDefinition): boolean {
  return (climax.choices?.length ?? 0) > 0;
}

export function openClimaxChoice(session: ChoiceOpenSession): void {
  const prompt = session.climax.choices?.[session.choiceIdx];
  if (!prompt) return;
  ModalManager.openChoiceModal(session.deps.dom, prompt, session.onSelect);
}

export function choiceOpenSession(
  deps: ClimaxQueueDeps,
  climax: ClimaxDefinition,
  choiceIdx: number,
  onSelect: (optionId: string) => void
): ChoiceOpenSession {
  return { deps, climax, choiceIdx, onSelect };
}

export function resolveClimaxChoice(
  session: { climax: ClimaxDefinition; choiceIdx: number; optionId: string },
  ctx: ClimaxRestoreCtx,
  onSelect: (optionId: string) => void
): number | null {
  const { climax, choiceIdx, optionId } = session;
  const prompt = climax.choices![choiceIdx];
  if (optionId !== prompt.correctId) {
    applyPenaltyEffects(ctx);
    ctx.onQueueDialogue(prompt.failDialogue, /*reopenChoice*/ () => {
      openClimaxChoice(choiceOpenSession(ctx, climax, choiceIdx, onSelect));
    });
    return choiceIdx;
  }
  const isLast = choiceIdx >= climax.choices!.length - 1;
  if (!isLast) {
    ctx.onQueueDialogue(prompt.successDialogue, /*openNextChoice*/ () => {
      openClimaxChoice(choiceOpenSession(ctx, climax, choiceIdx + 1, onSelect));
    });
    return choiceIdx + 1;
  }
  queueClimaxCelebration(prompt.successDialogue, climax, ctx);
  return null;
}

export function restoreClimaxSession(ctx: ClimaxRestoreCtx): void {
  ctx.setStageIdx(ctx.stageIdx);
  ctx.setChoiceIdx(ctx.choiceIdx);
  ctx.enterClimaxPhase();
  ctx.dom.bgEl.style.backgroundImage = "url('assets/bg_courtroom.jpg')";
  ctx.midiComposer.playTrack('suspense');
  if (ctx.choiceIdx != null) {
    openClimaxChoice(choiceOpenSession(ctx, ctx.climax, ctx.choiceIdx, ctx.onSelect));
    return;
  }
  if (ctx.stageIdx === 0) {
    ctx.onQueueDialogue(ctx.climax.dialogue, /*onComplete*/ () => {
      ctx.onOpenCourtRecord(/*isTrialPresent=*/ true);
    });
    return;
  }
  ctx.onOpenCourtRecord(/*isTrialPresent=*/ true);
}

function stampEpilogueLines(bg: string, lines: DialogueLine[]): DialogueLine[] {
  return lines.map((line) => ({
    ...line,
    bg: line.bg ?? bg,
    furniture: line.furniture ?? 'none'
  }));
}

// fallow-ignore-next-line unused-export
export function celebrateClimax(climax: ClimaxDefinition, deps: ClimaxQueueDeps): void {
  VisualEffects.triggerConfetti(deps.dom.confettiContainerEl);
  if (!climax.epilogue) {
    scheduleCaseComplete(deps);
    return;
  }
  scheduleWaitingRoomFade(climax.epilogue, deps);
}

export function queueClimaxCelebration(
  verdictLines: DialogueLine[],
  climax: ClimaxDefinition,
  deps: ClimaxQueueDeps
): void {
  deps.onQueueDialogue(verdictLines, /*onVerdictDone*/ () => {
    celebrateClimax(climax, deps);
  });
}

function scheduleWaitingRoomFade(epilogue: ClimaxEpilogue, deps: ClimaxQueueDeps): void {
  setTimeout(/*leaveCourtroom*/ () => {
    fadeThroughBlack(
      deps.dom.flashEl,
      /*onCovered*/ () => cutToWaitingRoom(epilogue, deps),
      /*onRevealed*/ () => queueEpilogue(epilogue, deps)
    );
  }, /*delayInMs=*/ COURTROOM_CELEBRATION_MS);
}

function cutToWaitingRoom(epilogue: ClimaxEpilogue, deps: ClimaxQueueDeps): void {
  VisualEffects.clearConfetti(deps.dom.confettiContainerEl);
  VisualEffects.hideFurniture(deps.dom.courtFurnitureContainerEl);
  VisualEffects.hideCharacter(deps.dom.charSpriteEl);
  deps.dom.bgEl.style.backgroundImage = `url('${epilogue.bg}')`;
  deps.dom.locationBannerEl.textContent = i18n.t.locationWaitingRoom;
}

function queueEpilogue(epilogue: ClimaxEpilogue, deps: ClimaxQueueDeps): void {
  const lines = stampEpilogueLines(epilogue.bg, epilogue.dialogue);
  deps.onQueueDialogue(lines, /*onEpilogueDone*/ () => fadeToCaseComplete(deps));
}

function scheduleCaseComplete(deps: ClimaxQueueDeps): void {
  setTimeout(/*leaveVerdictShot*/ () => fadeToCaseComplete(deps), /*delayInMs=*/ COURTROOM_CELEBRATION_MS);
}

function fadeToCaseComplete(deps: ClimaxQueueDeps): void {
  fadeToBlack(deps.dom.flashEl, /*onCovered*/ () => showCaseComplete(deps.dom));
}
