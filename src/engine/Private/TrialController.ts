// @Architecture(descriptionShort="Controls testimony statements, pressing, and contradictions", type="controller", icon="panel")
import type { MidiMusicComposer, SoundEngine } from '../../audio/index.js';
import type { GameStateManager, TrialStateSnapshot } from '../../state/index.js';
import type { CaseScript, DialogueLine, EvidenceId, LocationId, Statement, Testimony } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import {
  indexInVisible,
  notifyWitnessAddedStatement,
  registerPress
} from './TrialPressFlow.js';
import { showGameOverModal } from './TrialOutcome.js';
import { getActiveTrial } from './TrialDayRouter.js';
import {
  handleClimaxEvidencePresent, isAwaitingClimaxEvidence, getClimaxPresentPrompt,
  rebindClimaxChoiceModal,
  resolveClimaxChoiceFromController, startClimaxPhase
} from './TrialClimax.js';
import {
  afterTrialIntro, getTrialPresentPrompt, handleTestimonyPresent,
  hasPendingTrialPresent, rebindTrialPresentScript
} from './TrialPresent.js';
import { isPresentPointOpen } from './PresentPoint.js';
import { visibleStatements } from './StatementUnlock.js';
import { restoreTrialFromSnapshot } from './TrialRestore.js';
import { paintCourtroomPlate } from './TrialOpening.js';
import { fadeThroughBlack } from './SceneFade.js';
import { VisualEffects } from './VisualEffects.js';
import { warmTrialVisuals } from './VisualWarmup.js';

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
  public climaxResolved = false;
  private testimonyIndex: number | null = null;
  private readonly pressedStatementIds = new Set<string>();
  private failedPresentCount = 0;
  script: CaseScript;
  constructor(public readonly deps: TrialControllerDeps) {
    this.script = deps.script;
  }

  public bumpFailedPresentCount(): number {
    return ++this.failedPresentCount;
  }

  public clearActiveTestimony(): void {
    this.testimonyIndex = null;
    this.currentTestimony = null;
  }

  public getTestimonyIndex(): number | null { return this.testimonyIndex; }

  hideControls(): void { this.deps.dom.trialNavEl.classList.add('hidden'); }

  private visibleStatements(): Statement[] {
    if (!this.currentTestimony) return [];
    return visibleStatements(this.currentTestimony, this.pressedStatementIds);
  }

  public getTrialSnapshot(): TrialStateSnapshot {
    return {
      phase: this.phase,
      testimonyIndex: this.testimonyIndex,
      testimonyKey: this.testimonyIndex === 0 ? 'testimony1' : this.testimonyIndex === 1 ? 'testimony2' : null,
      statementIdx: this.currentStatementIdx,
      trialDay: this.deps.state.trialDay, climaxStageIdx: this.climaxStageIdx,
      climaxChoiceIdx: this.climaxChoiceIdx ?? undefined,
      climaxResolved: this.climaxResolved,
      pressedStatementIds: [...this.pressedStatementIds]
    };
  }

  public restoreTrialSnapshot(snapshot?: TrialStateSnapshot): void {
    restoreTrialFromSnapshot(this, snapshot);
  }

  public resetPressedState(ids?: string[]): void {
    this.pressedStatementIds.clear();
    ids?.forEach((id) => this.pressedStatementIds.add(id));
    this.failedPresentCount = 0;
  }

  public startTrial(skipFade = false): void {
    warmTrialVisuals(this.script, this.deps.state.trialDay);
    const intro = getActiveTrial(this.script, this.deps.state.trialDay).intro;
    const afterIntro = /*onComplete*/ () => afterTrialIntro(this);
    if (skipFade) {
      this.enterCourtroom();
      this.deps.onQueueDialogue(intro, afterIntro);
      return;
    }
    fadeThroughBlack(
      this.deps.dom.flashEl,
      /*onCovered*/ () => this.enterCourtroom(),
      /*onRevealed*/ () => this.deps.onQueueDialogue(intro, afterIntro)
    );
  }

  private enterCourtroom(): void | Promise<void> {
    this.phase = 'TESTIMONY';
    return paintCourtroomPlate(this.deps, this.script);
  }

  public startTestimony(testimonyIndex: number | 'testimony1' | 'testimony2'): void {
    const normalizedIndex = typeof testimonyIndex === 'number'
      ? testimonyIndex
      : testimonyIndex === 'testimony1' ? 0 : 1;
    this.phase = 'TESTIMONY';
    this.testimonyIndex = normalizedIndex;
    this.currentTestimony = this.resolveTestimony(normalizedIndex);
    if (!this.currentTestimony) return;
    this.currentStatementIdx = 0;
    this.failedPresentCount = 0;
    this.deps.midiComposer.playTrack(this.currentTestimony.bgm);
    VisualEffects.showNotification(this.deps.dom.gameNotificationEl, this.currentTestimony.title);
    this.renderCurrentStatement();
  }

  private resolveTestimony(index: number): Testimony | null {
    const trial = getActiveTrial(this.script, this.deps.state.trialDay);
    if (index === 0 && trial.testimony1) return trial.testimony1;
    if (index === 1 && trial.testimony2) return trial.testimony2;
    return trial.testimonies[index] ?? null;
  }

  public renderCurrentStatement(): void {
    const visible = this.visibleStatements();
    if (!visible.length) return;
    this.deps.dom.trialNavEl.classList.remove('hidden');
    const stmt = visible[this.currentStatementIdx] ?? visible[0];
    this.deps.onRenderLine({ speaker: stmt.speaker, pose: stmt.pose, text: stmt.text });
  }

  public nextStatement(): void {
    const visible = this.visibleStatements();
    if (!visible.length) return;
    this.currentStatementIdx = (this.currentStatementIdx + 1) % visible.length;
    this.renderCurrentStatement();
  }

  public prevStatement(): void {
    const visible = this.visibleStatements();
    if (!visible.length) return;
    this.currentStatementIdx = (this.currentStatementIdx - 1 + visible.length) % visible.length;
    this.renderCurrentStatement();
  }

  public handlePressStatement(): void {
    const visible = this.visibleStatements();
    const stmt = visible[this.currentStatementIdx];
    if (!stmt?.pressText) return;
    const pressedId = stmt.id;
    this.hideControls();
    this.deps.onQueueDialogue(stmt.pressText, /*onComplete*/ () => {
      const unlocked = registerPress(this.currentTestimony!, this.pressedStatementIds, pressedId);
      if (unlocked) {
        notifyWitnessAddedStatement(this.deps.dom, this.deps.soundEngine);
        const idx = indexInVisible(this.currentTestimony!, this.pressedStatementIds, unlocked.id);
        if (idx >= 0) this.currentStatementIdx = idx;
      }
      this.renderCurrentStatement();
    });
  }

  public handlePresentEvidence(evidenceId: EvidenceId): void {
    if (this.phase === 'CLIMAX') return handleClimaxEvidencePresent(this, evidenceId);
    handleTestimonyPresent(this, evidenceId);
  }

  public startClimax(): void { startClimaxPhase(this, /*replayOpening=*/ true); }
  public isAwaitingEvidence(): boolean {
    return !isPresentPointOpen(this.deps.dom) && (hasPendingTrialPresent(this) || isAwaitingClimaxEvidence(this));
  }

  public getPresentPrompt(): string | null { return getTrialPresentPrompt(this) ?? getClimaxPresentPrompt(this); }

  // fallow-ignore-next-line unused-class-member
  public handleSelectChoice(optionId: string): void { resolveClimaxChoiceFromController(this, optionId); }

  public restartAfterGameOver(): void { showGameOverModal(this); }

  // fallow-ignore-next-line complexity
  public setScript(script: CaseScript): void {
    this.script = script;
    if (this.phase === 'CLIMAX' && this.climaxChoiceIdx != null) {
      rebindClimaxChoiceModal(this);
      return;
    }
    if (this.phase !== 'TESTIMONY') return;
    if (this.testimonyIndex !== null) {
      this.currentTestimony = this.resolveTestimony(this.testimonyIndex);
      this.renderCurrentStatement();
    }
    rebindTrialPresentScript(this);
  }
}
