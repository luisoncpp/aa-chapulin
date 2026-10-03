// @Architecture(descriptionShort="Completes investigation dialogue and restores exploration controls")
import type { SoundEngine } from '../../audio/index.js';
import type { GameStateManager } from '../../state/index.js';
import type { CaseScript } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import type { InvestigationController } from './InvestigationController.js';
import { notifyNewlyUnlocked } from './TalkOptionUnlock.js';

export interface InvestigationDialogueContext {
  dom: DomElements;
  state: GameStateManager;
  script: CaseScript;
  soundEngine: SoundEngine;
  controller: InvestigationController;
}
export function suspendForDialogue(ctx: InvestigationDialogueContext): void {
  ctx.controller.isFirstTimeDialogue = true;
  ctx.dom.investigationNavEl.classList.add('hidden');
  ctx.dom.examineNavEl.classList.add('hidden');
}
export function finishIntro(ctx: InvestigationDialogueContext): void {
  ctx.controller.isFirstTimeDialogue = false;
  ctx.dom.investigationNavEl.classList.remove('hidden');
  ctx.controller.restoreSceneIdlePose();
}
export function finishHotspot(ctx: InvestigationDialogueContext, id: string): void {
  ctx.controller.isFirstTimeDialogue = false;
  ctx.state.markHotspotExamined(id);
  ctx.controller.renderHotspots(ctx.script.investigation[ctx.state.currentLocation]?.hotspots ?? []);
  notifyNewlyUnlocked(ctx.script.investigation[ctx.state.currentLocation]?.talkOptions, ctx);
  ctx.controller.checkInvestigationProgress();
  ctx.controller.startExamineMode();
}
export function finishTalk(ctx: InvestigationDialogueContext): void {
  ctx.controller.finishIntro();
  notifyNewlyUnlocked(ctx.script.investigation[ctx.state.currentLocation]?.talkOptions, ctx);
  ctx.controller.checkInvestigationProgress();
  if (ctx.state.mode === 'INVESTIGATION' && !ctx.controller.isExamineActive) ctx.controller.openTalkMenu();
}
