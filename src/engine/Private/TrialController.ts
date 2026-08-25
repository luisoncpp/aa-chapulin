// @Architecture(descriptionShort="Controls testimony statements, pressing, and contradictions", type="controller", icon="panel")
/**
 * Courtroom Trial & Cross-Examination Controller
 * Drives cross-examinations and delegates UI to [[./ModalManager.ts]] and [[./VisualEffects.ts]].
 */

import type { MidiMusicComposer, SoundEngine } from '../../audio/index.js';
import type { GameStateManager } from '../../state/index.js';
import type { CaseScript, DialogueLine, EvidenceId, Testimony } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { ModalManager } from './ModalManager.js';
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
}

export class TrialController {
  public phase: TrialPhase = 'IDLE';
  public currentTestimony: Testimony | null = null;
  public currentStatementIdx = 0;

  constructor(private readonly deps: TrialControllerDeps) {}

  private get dom() { return this.deps.dom; }
  private get state() { return this.deps.state; }
  private get script() { return this.deps.script; }
  private get soundEngine() { return this.deps.soundEngine; }
  private get midiComposer() { return this.deps.midiComposer; }
  private get onQueueDialogue() { return this.deps.onQueueDialogue; }
  private get onRenderLine() { return this.deps.onRenderLine; }
  private get onOpenCourtRecord() { return this.deps.onOpenCourtRecord; }
  private hideControls(): void { this.dom.trialNavEl.classList.add('hidden'); }

  // @Section(Trial Launch & Intro)
  public startTrial(): void {
    this.state.mode = 'TRIAL';
    this.phase = 'TESTIMONY';
    this.dom.investigationNavEl.classList.add('hidden');
    this.dom.examineNavEl.classList.add('hidden');
    this.hideControls();
    this.dom.hotspotsContainerEl.innerHTML = '';
    this.dom.locationBannerEl.textContent = 'Tribunal Superior - Sala de Audiencias No. 1';

    this.onQueueDialogue(this.script.trial.intro, /*onComplete*/ () => {
      this.startTestimony('testimony1');
    });
  }

  // @Section(Testimony Navigation)
  public startTestimony(testimonyKey: 'testimony1' | 'testimony2'): void {
    this.phase = 'TESTIMONY';
    this.currentTestimony = this.script.trial[testimonyKey];
    this.currentStatementIdx = 0;
    this.midiComposer.playTrack(this.currentTestimony.bgm);
    this.dom.bgEl.style.backgroundImage = "url('assets/bg_witness.jpg')";
    VisualEffects.showNotification(this.dom.gameNotificationEl, this.currentTestimony.title);
    this.renderCurrentStatement();
  }

  public renderCurrentStatement(): void {
    if (!this.currentTestimony) return;
    this.dom.trialNavEl.classList.remove('hidden');
    const stmt = this.currentTestimony.statements[this.currentStatementIdx];
    this.onRenderLine({ speaker: stmt.speaker, pose: stmt.pose, text: stmt.text });
  }

  public nextStatement(): void {
    if (!this.currentTestimony) return;
    const len = this.currentTestimony.statements.length;
    this.currentStatementIdx = (this.currentStatementIdx + 1) % len;
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
    this.onQueueDialogue(stmt.pressText, /*onComplete*/ () => this.renderCurrentStatement());
  }

  public handlePresentEvidence(evidenceId: EvidenceId): void {
    if (this.phase === 'CLIMAX') {
      this.handleClimaxEvidence(evidenceId);
      return;
    }
    if (this.phase === 'TESTIMONY' && this.currentTestimony) {
      this.handleTestimonyEvidence(evidenceId);
    }
  }

  private handleTestimonyEvidence(evidenceId: EvidenceId): void {
    if (!this.currentTestimony) return;
    const stmt = this.currentTestimony.statements[this.currentStatementIdx];
    const isContradiction = stmt.contradiction?.evidence.includes(evidenceId);

    if (isContradiction && stmt.contradiction) {
      this.onSuccessContradiction(stmt.contradiction.successDialogue);
      return;
    }
    this.onPenaltyPenalty();
  }

  private onSuccessContradiction(dialogue: DialogueLine[]): void {
    this.hideControls();
    this.onQueueDialogue(dialogue, /*onComplete*/ () => {
      if (this.currentTestimony === this.script.trial.testimony1) {
        this.startTestimony('testimony2');
        return;
      }
      if (this.currentTestimony === this.script.trial.testimony2) {
        this.startClimax();
      }
    });
  }

  private applyPenaltyEffects(): void {
    this.state.takePenalty();
    ModalManager.updateHealthUI(this.dom.healthBarEl, this.state.health, this.state.maxHealth);
    this.soundEngine.playDamage();
    VisualEffects.shakeScreen(this.dom.gameScreen, /*durationMs=*/ 450);
    VisualEffects.flashScreen(this.dom.flashEl);
  }

  private onPenaltyPenalty(): void {
    this.applyPenaltyEffects();
    this.hideControls();

    const penaltyDialogue: DialogueLine[] = [
      { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'whoosh', pose: 'chapulin_point' },
      { speaker: 'SUPER SAM', text: 'Time is money, and you are wasting mine! Esa prueba no contradice en absoluto el testimonio.', pose: 'supersam_point' },
      { speaker: 'JUEZ', text: '¡La fiscalía tiene razón! Penalizaré a la defensa por presentar pruebas irrelevantes.', pose: 'judge_gavel', sfx: 'gavel' }
    ];
    if (this.state.gameOver) {
      penaltyDialogue.push(
        { speaker: 'JUEZ', pose: 'judge_gavel', text: '¡La defensa ha agotado sus oportunidades! Declaro al acusado... ¡CULPABLE!', sfx: 'gavel' },
        { speaker: 'DEFENSA', pose: 'chapulin_panic', text: '¡Oh, no! ¡Debo intentarlo de nuevo desde el principio del juicio!' }
      );
      this.onQueueDialogue(penaltyDialogue, /*onComplete*/ () => this.showGameOverModal());
      return;
    }
    this.onQueueDialogue(penaltyDialogue, /*onComplete*/ () => this.renderCurrentStatement());
  }

  // @Section(Climax & Verdict Confrontation)
  public startClimax(): void {
    this.phase = 'CLIMAX';
    this.currentTestimony = null;
    this.hideControls();
    this.dom.bgEl.style.backgroundImage = "url('assets/bg_courtroom.jpg')";
    this.midiComposer.playTrack('suspense');

    this.onQueueDialogue(this.script.trial.climax.dialogue, /*onComplete*/ () => {
      this.onOpenCourtRecord(/*isTrialPresent=*/ true);
    });
  }

  private handleClimaxEvidence(evidenceId: EvidenceId): void {
    this.hideControls();
    if (this.script.trial.climax.presentTarget.includes(evidenceId)) {
      this.onQueueDialogue(this.script.trial.climax.verdict, /*onComplete*/ () => {
        VisualEffects.triggerConfetti(this.dom.confettiContainerEl);
      });
      return;
    }

    this.applyPenaltyEffects();
    VisualEffects.showNotification(this.dom.gameNotificationEl, '¡Prueba incorrecta! Revisa tus pistas.');
    this.startClimax();
  }

  private showGameOverModal(): void {
    this.hideControls();
    this.state.resetHealth();
    ModalManager.updateHealthUI(this.dom.healthBarEl, this.state.health, this.state.maxHealth);
    this.startTrial();
  }
}
