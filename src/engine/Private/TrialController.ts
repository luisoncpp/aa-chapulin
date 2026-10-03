// @Architecture(descriptionShort="Controls testimony statements, pressing, and contradictions", type="controller", icon="panel")
import type { MidiMusicComposer, SoundEngine } from '../../audio/index.js';
import type { GameStateManager, TrialStateSnapshot } from '../../state/index.js';
import type { CaseScript, DialogueLine, DialogueQueue, EvidenceId, ProfileId, LocationId, Statement, Testimony } from '../../types/index.js';
import type { DeductionSnapshot } from '../../deduction/index.js';
import { TrialDeductionLifecycle } from './TrialDeductionLifecycle.js';
import type { DomElements } from './DomElements.js';
import { indexInVisible, notifyWitnessAddedStatement, registerPress } from './TrialPressFlow.js';
import { showGameOverModal } from './TrialOutcome.js';
import { getTrialTestimony } from './TrialDayRouter.js';
import {
  handleClimaxEvidencePresent, isAwaitingClimaxEvidence, getClimaxPresentPrompt,
  rebindClimaxChoiceModal, resolveClimaxChoiceFromController, startClimaxPhase
} from './TrialClimax.js';
import {
  getTrialPresentPrompt, handleTestimonyPresent,
  hasPendingTrialPresent, rebindTrialPresentScript, resolveTrialChoice
} from './TrialPresent.js';
import { handleProfilePresent, isAwaitingProfile } from './ProfilePresent.js';
import { isPresentPointActive } from './PresentPoint.js';
import { visibleStatements } from './StatementUnlock.js';
import { restoreTrialFromSnapshot } from './TrialRestore.js';
import { VisualEffects } from './VisualEffects.js';
import { startTrialIntro } from './TrialIntro.js';
import { captureTrialSnapshot } from './TrialSnapshot.js';

export type TrialPhase = 'IDLE' | 'TESTIMONY' | 'CLIMAX';
export interface TrialControllerDeps {
  dom: DomElements;
  state: GameStateManager;
  script: CaseScript;
  soundEngine: SoundEngine;
  midiComposer: MidiMusicComposer;
  onQueueDialogue: DialogueQueue;
  onRenderLine: (line: DialogueLine) => void;
  onOpenCourtRecord: (isTrialPresent: boolean) => void;
  onAdjourn?: (location: LocationId) => void;
  onStartDeduction?: () => void;
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
  private readonly deduction = new TrialDeductionLifecycle(this);
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

  public bindTestimonyIndex(index: number): void { this.testimonyIndex = index; }
  public getTestimonyIndex(): number | null { return this.testimonyIndex; }
  hideControls(): void { this.deps.dom.trialNavEl.classList.add('hidden'); }

  private visibleStatements(): Statement[] {
    if (!this.currentTestimony) return [];
    return visibleStatements(this.currentTestimony, this.pressedStatementIds);
  }

  /** The statement the player is looking at, as [[./TrialPresent.ts]] resolves presents against it. */
  // fallow-ignore-next-line unused-class-member -- invoked through the TrialDeflect controller port
  public currentStatement(): Statement | undefined {
    return this.visibleStatements()[this.currentStatementIdx];
  }

  public getTrialSnapshot(): TrialStateSnapshot {
    return captureTrialSnapshot(this, { testimonyIndex: this.testimonyIndex,
      pressedIds: [...this.pressedStatementIds], deduction: this.deduction.snapshot() });
  }

  public restoreTrialSnapshot(snapshot?: TrialStateSnapshot, silent = false): void {
    restoreTrialFromSnapshot(this, snapshot, silent);
  }

  public startDeduction(sequenceId?: string): void { this.deduction.start(sequenceId); }
  public restoreDeduction(snapshot: DeductionSnapshot): boolean { return this.deduction.restore(snapshot); }

  public cancelDeduction(): void { this.deduction.cancel(); }
  public handleDeductionAdvance(): boolean { return this.deduction.advance(); }

  public resetPressedState(ids?: string[]): void {
    this.pressedStatementIds.clear();
    ids?.forEach((id) => this.pressedStatementIds.add(id));
    this.failedPresentCount = 0;
  }

  public startTrial(skipFade = false): void { startTrialIntro(this, skipFade); }

  public startTestimony(testimonyIndex: number | 'testimony1' | 'testimony2'): void {
    this.cancelDeduction();
    const normalizedIndex = typeof testimonyIndex === 'number'
      ? testimonyIndex
      : testimonyIndex === 'testimony1' ? 0 : 1;
    this.phase = 'TESTIMONY';
    this.testimonyIndex = normalizedIndex;
    this.currentTestimony = getTrialTestimony(this.script, this.deps.state.trialDay, normalizedIndex);
    if (!this.currentTestimony) return;
    this.currentStatementIdx = 0;
    this.failedPresentCount = 0;
    this.deps.midiComposer.playTrack(this.currentTestimony.bgm);
    VisualEffects.showNotification(this.deps.dom.gameNotificationEl, this.currentTestimony.title);
    this.renderCurrentStatement();
  }

  public renderCurrentStatement(): void {
    const visible = this.visibleStatements();
    if (!visible.length) return;
    this.deps.dom.trialNavEl.classList.remove('hidden');
    const stmt = visible[this.currentStatementIdx] ?? visible[0];
    const { speaker, pose, text, bg, furniture } = stmt;
    this.deps.onRenderLine({ speaker, pose, text, bg, furniture });
  }

  public nextStatement(): void { this.moveStatement(1); }
  public prevStatement(): void { this.moveStatement(-1); }
  private moveStatement(offset: number): void {
    const count = this.visibleStatements().length;
    if (!count) return;
    this.currentStatementIdx = (this.currentStatementIdx + offset + count) % count;
    this.renderCurrentStatement();
  }

  public handlePressStatement(): void {
    const visible = this.visibleStatements();
    const stmt = visible[this.currentStatementIdx];
    if (!stmt?.pressText) return;
    const pressedId = stmt.id;
    this.hideControls();
    this.deps.onQueueDialogue(stmt.pressText, /*onComplete*/ () => {
      this.finishPress(pressedId);
    }, { kind: 'press', id: pressedId });
  }

  public finishPress(statementId: string): void {
    const unlocked = registerPress(this.currentTestimony!, this.pressedStatementIds, statementId);
    if (unlocked) {
      notifyWitnessAddedStatement(this.deps.dom, this.deps.soundEngine);
      const idx = indexInVisible(this.currentTestimony!, this.pressedStatementIds, unlocked.id);
      if (idx >= 0) this.currentStatementIdx = idx;
    }
    this.renderCurrentStatement();
  }

  public handlePresentProfile(profileId: ProfileId): void {
    handleProfilePresent(this, profileId);
  }

  public isAwaitingProfile(): boolean { return isAwaitingProfile(this); }

  public handlePresentEvidence(evidenceId: EvidenceId): void {
    if (this.phase === 'CLIMAX') return handleClimaxEvidencePresent(this, evidenceId);
    handleTestimonyPresent(this, evidenceId);
  }

  public startClimax(): void { startClimaxPhase(this, /*replayOpening=*/ true); }
  public isAwaitingEvidence(): boolean {
    return !isPresentPointActive(this.deps.dom) && (hasPendingTrialPresent(this) || isAwaitingClimaxEvidence(this));
  }

  public getPresentPrompt(): string | null { return getTrialPresentPrompt(this) ?? getClimaxPresentPrompt(this); }

  public handleSelectChoice(optionId: string): void {
    if (resolveTrialChoice(this, optionId)) return;
    resolveClimaxChoiceFromController(this, optionId);
  }

  public restartAfterGameOver(): void { showGameOverModal(this); }

  // fallow-ignore-next-line complexity
  public setScript(script: CaseScript): void {
    this.script = script;
    this.deduction.setLanguage();
    if (this.phase === 'CLIMAX' && this.climaxChoiceIdx != null) {
      rebindClimaxChoiceModal(this);
      return;
    }
    if (this.phase !== 'TESTIMONY') return;
    if (this.testimonyIndex !== null) {
      this.currentTestimony = getTrialTestimony(this.script, this.deps.state.trialDay, this.testimonyIndex);
      this.renderCurrentStatement();
    }
    rebindTrialPresentScript(this);
  }
}
