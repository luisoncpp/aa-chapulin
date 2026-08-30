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
import {
  onPresentPenalty,
  onSuccessContradiction
} from './TrialOutcome.js';
import { getActiveTrial } from './TrialDayRouter.js';
import {
  handleClimaxEvidencePresent, isAwaitingClimaxEvidence, rebindClimaxChoiceModal,
  resolveClimaxChoiceFromController, startClimaxPhase
} from './TrialClimax.js';
import { visibleStatements } from './StatementUnlock.js';
import { restoreTrialFromSnapshot } from './TrialRestore.js';
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
  private readonly pressedStatementIds = new Set<string>();
  private failedPresentCount = 0;
  script: CaseScript;

  constructor(public readonly deps: TrialControllerDeps) {
    this.script = deps.script;
  }

  public bumpFailedPresentCount(): number {
    this.failedPresentCount++;
    return this.failedPresentCount;
  }

  public clearActiveTestimony(): void {
    this.testimonyKey = null;
    this.currentTestimony = null;
  }

  public getTestimonyKey(): 'testimony1' | 'testimony2' | null {
    return this.testimonyKey;
  }

  hideControls(): void { this.deps.dom.trialNavEl.classList.add('hidden'); }

  private visibleStatements(): Statement[] {
    if (!this.currentTestimony) return [];
    return visibleStatements(this.currentTestimony, this.pressedStatementIds);
  }

  public getTrialSnapshot(): TrialStateSnapshot {
    return {
      phase: this.phase, testimonyKey: this.testimonyKey, statementIdx: this.currentStatementIdx,
      trialDay: this.deps.state.trialDay, climaxStageIdx: this.climaxStageIdx,
      climaxChoiceIdx: this.climaxChoiceIdx ?? undefined,
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
    const intro = getActiveTrial(this.script, this.deps.state.trialDay).intro;
    const afterIntro = /*onComplete*/ () => this.startTestimony('testimony1');
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

  private enterCourtroom(): void {
    this.phase = 'TESTIMONY';
    paintCourtroomPlate(this.deps, this.script);
  }

  public startTestimony(testimonyKey: 'testimony1' | 'testimony2'): void {
    this.phase = 'TESTIMONY';
    this.testimonyKey = testimonyKey;
    this.currentTestimony = getActiveTrial(this.script, this.deps.state.trialDay)[testimonyKey];
    this.currentStatementIdx = 0;
    this.failedPresentCount = 0;
    this.deps.midiComposer.playTrack(this.currentTestimony.bgm);
    this.deps.dom.bgEl.style.backgroundImage = "url('assets/bg_witness.jpg')";
    VisualEffects.showNotification(this.deps.dom.gameNotificationEl, this.currentTestimony.title);
    this.renderCurrentStatement();
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
    const visible = this.visibleStatements();
    const stmt = visible[this.currentStatementIdx];
    if (!stmt || this.phase !== 'TESTIMONY') return;
    if (stmt.contradiction?.evidence.includes(evidenceId)) {
      return onSuccessContradiction(this, stmt.contradiction.successDialogue);
    }
    onPresentPenalty(this);
  }

  public startClimax(): void { startClimaxPhase(this, /*replayOpening=*/ true); }

  public isAwaitingEvidence(): boolean { return isAwaitingClimaxEvidence(this); }

  public handleSelectChoice(optionId: string): void {
    resolveClimaxChoiceFromController(this, optionId);
  }

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
