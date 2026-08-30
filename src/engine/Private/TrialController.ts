// @Architecture(descriptionShort="Controls testimony statements, pressing, and contradictions", type="controller", icon="panel")
import type { MidiMusicComposer, SoundEngine } from '../../audio/index.js';
import { i18n } from '../../i18n/index.js';
import type { GameStateManager, TrialStateSnapshot } from '../../state/index.js';
import type { CaseScript, DialogueLine, EvidenceId, LocationId, Testimony } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { ModalManager } from './ModalManager.js';
import { applyAdjournment, getActiveTrial, shouldAdjourn } from './TrialDayRouter.js';
import { applyPenaltyEffects, queuePenaltyDialogue } from './TrialPenalty.js';
import {
  handleClimaxEvidencePresent, isAwaitingClimaxEvidence, rebindClimaxChoiceModal,
  resolveClimaxChoiceFromController, restoreClimaxFromSnapshot, startClimaxPhase
} from './TrialClimax.js';
import { paintCourtroomPlate } from './TrialOpening.js';
import { fadeThroughBlack } from './SceneFade.js';
import { VisualEffects } from './VisualEffects.js';

export type TrialPhase = 'IDLE' | 'TESTIMONY' | 'CLIMAX';
export interface TrialControllerDeps {
  dom: DomElements;
  state: GameStateManager;
  script: CaseScript;
  soundEngine: SoundEngine;
  midiComposer: MidiMusicComposer;
  onQueueDialogue: (dialogue: DialogueLine[], onComplete?: () => void) => void;
  onRenderLine: (line: DialogueLine) => void;
  onOpenCourtRecord: (isTrialPresent: boolean) => void;
  onAdjourn?: (location: LocationId) => void;
}

export class TrialController {
  public phase: TrialPhase = 'IDLE';
  public currentTestimony: Testimony | null = null;
  public currentStatementIdx = 0;
  public climaxStageIdx = 0;
  public climaxChoiceIdx: number | null = null;
  private testimonyKey: 'testimony1' | 'testimony2' | null = null;
  script: CaseScript;

  constructor(public readonly deps: TrialControllerDeps) {
    this.script = deps.script;
  }

  hideControls(): void { this.deps.dom.trialNavEl.classList.add('hidden'); }

  public getTrialSnapshot(): TrialStateSnapshot {
    return {
      phase: this.phase, testimonyKey: this.testimonyKey, statementIdx: this.currentStatementIdx,
      trialDay: this.deps.state.trialDay, climaxStageIdx: this.climaxStageIdx,
      climaxChoiceIdx: this.climaxChoiceIdx ?? undefined
    };
  }

  // fallow-ignore-next-line complexity
  public restoreTrialSnapshot(snapshot?: TrialStateSnapshot): void {
    this.deps.dom.investigationNavEl.classList.add('hidden');
    this.deps.dom.examineNavEl.classList.add('hidden');
    this.deps.dom.hotspotsContainerEl.innerHTML = '';
    this.deps.dom.locationBannerEl.textContent = i18n.t.locationCourtroom;
    if (snapshot?.phase === 'CLIMAX') {
      return restoreClimaxFromSnapshot(this, snapshot.climaxStageIdx ?? 0, snapshot.climaxChoiceIdx ?? null);
    }
    if (snapshot?.phase === 'TESTIMONY' && snapshot.testimonyKey) {
      if (snapshot.trialDay) this.deps.state.trialDay = snapshot.trialDay;
      this.startTestimony(snapshot.testimonyKey);
      this.currentStatementIdx = snapshot.statementIdx || 0;
      return this.renderCurrentStatement();
    }
    this.startTrial(/*skipFade=*/ true);
  }

  public startTrial(skipFade = false): void {
    if (skipFade) {
      this.enterCourtroom();
      this.deps.onQueueDialogue(getActiveTrial(this.script, this.deps.state.trialDay).intro,
        /*onComplete*/ () => this.startTestimony('testimony1'));
      return;
    }
    fadeThroughBlack(
      this.deps.dom.flashEl,
      /*onCovered*/ () => this.enterCourtroom(),
      /*onRevealed*/ () => this.deps.onQueueDialogue(getActiveTrial(this.script, this.deps.state.trialDay).intro,
        /*onComplete*/ () => this.startTestimony('testimony1'))
    );
  }

  private enterCourtroom(): void {
    this.phase = 'TESTIMONY';
    paintCourtroomPlate(this.deps, this.script);
  }

  public startTestimony(testimonyKey: 'testimony1' | 'testimony2'): void {
    this.phase = 'TESTIMONY';
    this.testimonyKey = testimonyKey;
    this.currentTestimony = getActiveTrial(this.script, this.deps.state.trialDay)[testimonyKey];
    this.currentStatementIdx = 0;
    this.deps.midiComposer.playTrack(this.currentTestimony.bgm);
    this.deps.dom.bgEl.style.backgroundImage = "url('assets/bg_witness.jpg')";
    VisualEffects.showNotification(this.deps.dom.gameNotificationEl, this.currentTestimony.title);
    this.renderCurrentStatement();
  }

  public renderCurrentStatement(): void {
    if (!this.currentTestimony) return;
    this.deps.dom.trialNavEl.classList.remove('hidden');
    const stmt = this.currentTestimony.statements[this.currentStatementIdx];
    this.deps.onRenderLine({ speaker: stmt.speaker, pose: stmt.pose, text: stmt.text });
  }

  public nextStatement(): void {
    if (!this.currentTestimony) return;
    this.currentStatementIdx = (this.currentStatementIdx + 1) % this.currentTestimony.statements.length;
    this.renderCurrentStatement();
  }

  public prevStatement(): void {
    if (!this.currentTestimony) return;
    const len = this.currentTestimony.statements.length;
    this.currentStatementIdx = (this.currentStatementIdx - 1 + len) % len;
    this.renderCurrentStatement();
  }

  public handlePressStatement(): void {
    if (!this.currentTestimony) return;
    const stmt = this.currentTestimony.statements[this.currentStatementIdx];
    if (!stmt.pressText) return;
    this.hideControls();
    this.deps.onQueueDialogue(stmt.pressText, /*onComplete*/ () => this.renderCurrentStatement());
  }

  // fallow-ignore-next-line complexity
  public handlePresentEvidence(evidenceId: EvidenceId): void {
    if (this.phase === 'CLIMAX') return handleClimaxEvidencePresent(this, evidenceId);
    if (!this.currentTestimony || this.phase !== 'TESTIMONY') return;
    const stmt = this.currentTestimony.statements[this.currentStatementIdx];
    if (stmt.contradiction?.evidence.includes(evidenceId)) {
      return this.onSuccessContradiction(stmt.contradiction.successDialogue);
    }
    this.onPenaltyPenalty();
  }

  private onSuccessContradiction(dialogue: DialogueLine[]): void {
    this.hideControls();
    this.deps.onQueueDialogue(dialogue, /*onComplete*/ () => {
      if (this.testimonyKey === 'testimony1') return this.startTestimony('testimony2');
      if (shouldAdjourn(this.script, this.deps.state.trialDay)) return this.adjournToInvestigation();
      this.startClimax();
    });
  }

  private adjournToInvestigation(): void {
    const adjournment = applyAdjournment(this.deps.state, this.script);
    if (!adjournment) return this.startClimax();
    this.phase = 'IDLE';
    this.currentTestimony = null;
    this.testimonyKey = null;
    this.deps.onAdjourn?.(adjournment.nextLocation);
  }

  private onPenaltyPenalty(): void {
    applyPenaltyEffects(this.deps);
    this.hideControls();
    const resume = this.deps.state.gameOver
      ? () => this.showGameOverModal()
      : () => this.renderCurrentStatement();
    queuePenaltyDialogue(this.deps, /*onResume*/ resume);
  }

  public startClimax(): void { startClimaxPhase(this, /*replayOpening=*/ true); }

  public isAwaitingEvidence(): boolean { return isAwaitingClimaxEvidence(this); }

  // fallow-ignore-next-line unused-class-member
  public handleSelectChoice(optionId: string): void {
    resolveClimaxChoiceFromController(this, optionId);
  }

  private showGameOverModal(): void {
    this.hideControls();
    this.deps.state.resetHealth();
    ModalManager.updateHealthUI(this.deps.dom.healthBarEl, this.deps.state.health, this.deps.state.maxHealth);
    this.startTrial();
  }

  // fallow-ignore-next-line complexity
  public setScript(script: CaseScript): void {
    this.script = script;
    if (this.phase === 'CLIMAX' && this.climaxChoiceIdx != null) {
      rebindClimaxChoiceModal(this);
      return;
    }
    if (this.phase !== 'TESTIMONY' || !this.testimonyKey) return;
    this.currentTestimony = getActiveTrial(this.script, this.deps.state.trialDay)[this.testimonyKey];
    this.renderCurrentStatement();
  }
}
