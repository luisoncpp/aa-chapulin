// @Architecture(descriptionShort="Controls testimony statements, pressing, and contradictions", type="controller", icon="panel")
/**
 * Courtroom Trial & Cross-Examination Controller
 * Drives cross-examinations and delegates UI to [[./ModalManager.ts]] and [[./VisualEffects.ts]].
 */
import type { MidiMusicComposer, SoundEngine } from '../../audio/index.js';
import { i18n } from '../../i18n/index.js';
import type { GameStateManager, TrialStateSnapshot } from '../../state/index.js';
import type { CaseScript, DialogueLine, EvidenceId, LocationId, Testimony } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { ModalManager } from './ModalManager.js';
import { applyAdjournment, getActiveTrial, shouldAdjourn } from './TrialDayRouter.js';
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
  private testimonyKey: 'testimony1' | 'testimony2' | null = null;
  private script: CaseScript;

  constructor(private readonly deps: TrialControllerDeps) {
    this.script = deps.script;
  }

  private hideControls(): void { this.deps.dom.trialNavEl.classList.add('hidden'); }

  // @Section(Trial State Snapshot)
  public getTrialSnapshot(): TrialStateSnapshot {
    return {
      phase: this.phase,
      testimonyKey: this.testimonyKey,
      statementIdx: this.currentStatementIdx,
      trialDay: this.deps.state.trialDay
    };
  }

  // fallow-ignore-next-line complexity
  public restoreTrialSnapshot(snapshot?: TrialStateSnapshot): void {
    this.deps.dom.investigationNavEl.classList.add('hidden');
    this.deps.dom.examineNavEl.classList.add('hidden');
    this.deps.dom.hotspotsContainerEl.innerHTML = '';
    this.deps.dom.locationBannerEl.textContent = i18n.t.locationCourtroom;

    if (snapshot?.phase === 'CLIMAX') return this.startClimax();
    if (snapshot?.phase === 'TESTIMONY' && snapshot.testimonyKey) {
      if (snapshot.trialDay) this.deps.state.trialDay = snapshot.trialDay;
      this.startTestimony(snapshot.testimonyKey);
      this.currentStatementIdx = snapshot.statementIdx || 0;
      return this.renderCurrentStatement();
    }
    this.startTrial();
  }
  // @Section(Trial Launch & Intro)
  public startTrial(): void {
    this.deps.state.mode = 'TRIAL';
    this.phase = 'TESTIMONY';
    this.deps.dom.investigationNavEl.classList.add('hidden');
    this.deps.dom.examineNavEl.classList.add('hidden');
    this.hideControls();
    this.deps.dom.hotspotsContainerEl.innerHTML = '';
    this.deps.dom.locationBannerEl.textContent = i18n.t.locationCourtroom;
    this.deps.onQueueDialogue(getActiveTrial(this.script, this.deps.state.trialDay).intro, /*onComplete*/ () => this.startTestimony('testimony1'));
  }
  // @Section(Testimony Navigation)
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

  // @Section(Statement Pressing & Contradictions)
  public handlePressStatement(): void {
    if (!this.currentTestimony) return;
    const stmt = this.currentTestimony.statements[this.currentStatementIdx];
    if (!stmt.pressText) return;
    this.hideControls();
    this.deps.onQueueDialogue(stmt.pressText, /*onComplete*/ () => this.renderCurrentStatement());
  }

  public handlePresentEvidence(evidenceId: EvidenceId): void {
    if (this.phase === 'CLIMAX') return this.handleClimaxEvidence(evidenceId);
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

  private applyPenaltyEffects(): void {
    this.deps.state.takePenalty();
    ModalManager.updateHealthUI(this.deps.dom.healthBarEl, this.deps.state.health, this.deps.state.maxHealth);
    this.deps.soundEngine.playDamage();
    VisualEffects.shakeScreen(this.deps.dom.gameScreen, /*durationMs=*/ 450);
    VisualEffects.flashScreen(this.deps.dom.flashEl);
  }

  private onPenaltyPenalty(): void {
    this.applyPenaltyEffects();
    this.hideControls();
    const isEn = i18n.getLanguage() === 'en';
    const lines: DialogueLine[] = [
      { cutin: 'objection_protesto', speaker: 'DEFENSA', text: isEn ? 'OBJECTION!' : '¡PROTESTO!', sfx: 'whoosh', pose: 'chapulin_point' },
      { speaker: 'SUPER SAM', text: i18n.t.penaltyProsecutionText, pose: 'supersam_point' },
      { speaker: 'JUEZ', text: i18n.t.penaltyJudgeText, pose: 'judge_gavel', sfx: 'gavel' }
    ];
    if (this.deps.state.gameOver) {
      lines.push(
        { speaker: 'JUEZ', pose: 'judge_gavel', text: i18n.t.gameOverJudgeText, sfx: 'gavel' },
        { speaker: 'DEFENSA', pose: 'chapulin_panic', text: i18n.t.gameOverDefenseText }
      );
      return this.deps.onQueueDialogue(lines, /*onComplete*/ () => this.showGameOverModal());
    }
    this.deps.onQueueDialogue(lines, /*onComplete*/ () => this.renderCurrentStatement());
  }

  // @Section(Climax & Verdict Confrontation)
  public startClimax(): void {
    this.phase = 'CLIMAX';
    this.currentTestimony = null;
    this.hideControls();
    this.deps.dom.bgEl.style.backgroundImage = "url('assets/bg_courtroom.jpg')";
    this.deps.midiComposer.playTrack('suspense');
    this.deps.onQueueDialogue(this.script.trial.climax.dialogue, /*onComplete*/ () => {
      this.deps.onOpenCourtRecord(/*isTrialPresent=*/ true);
    });
  }

  private handleClimaxEvidence(evidenceId: EvidenceId): void {
    this.hideControls();
    if (this.script.trial.climax.presentTarget.includes(evidenceId)) {
      this.deps.onQueueDialogue(this.script.trial.climax.verdict, /*onComplete*/ () => {
        VisualEffects.triggerConfetti(this.deps.dom.confettiContainerEl);
      });
      return;
    }
    this.applyPenaltyEffects();
    VisualEffects.showNotification(this.deps.dom.gameNotificationEl, i18n.t.notifIncorrectClue);
    this.startClimax();
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
    if (this.phase !== 'TESTIMONY' || !this.testimonyKey) return;
    this.currentTestimony = getActiveTrial(this.script, this.deps.state.trialDay)[this.testimonyKey];
    this.renderCurrentStatement();
  }
}
