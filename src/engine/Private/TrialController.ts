/**
 * Courtroom Trial & Cross-Examination Controller
 */

import type { MidiMusicComposer, SoundEngine } from '../../audio/index.js';
import type { GameStateManager } from '../../state/index.js';
import type { CaseScript, DialogueLine, EvidenceId, Testimony } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { ModalManager } from './ModalManager.js';
import { VisualEffects } from './VisualEffects.js';

export class TrialController {
  public currentTestimony: Testimony | null = null;
  public currentStatementIdx = 0;

  constructor(
    private readonly dom: DomElements,
    private readonly state: GameStateManager,
    private readonly script: CaseScript,
    private readonly soundEngine: SoundEngine,
    private readonly midiComposer: MidiMusicComposer,
    private readonly onQueueDialogue: (dialogue: DialogueLine[], onComplete?: () => void) => void,
    private readonly onRenderLine: (line: DialogueLine) => void,
    private readonly onOpenCourtRecord: (isTrialPresent: boolean) => void
  ) {}

  public startTrial(): void {
    this.state.mode = 'TRIAL';
    this.dom.investigationNavEl.classList.add('hidden');
    this.dom.examineNavEl.classList.add('hidden');
    this.dom.trialNavEl.classList.remove('hidden');
    this.dom.hotspotsContainerEl.innerHTML = '';
    this.dom.locationBannerEl.textContent = 'Tribunal Superior - Sala de Audiencias No. 1';

    this.onQueueDialogue(this.script.trial.intro, /*onComplete*/ () => {
      this.startTestimony('testimony1');
    });
  }

  public startTestimony(testimonyKey: 'testimony1' | 'testimony2'): void {
    this.currentTestimony = this.script.trial[testimonyKey];
    this.currentStatementIdx = 0;
    this.midiComposer.playTrack(this.currentTestimony.bgm);
    this.dom.bgEl.style.backgroundImage = "url('assets/bg_witness.jpg')";

    VisualEffects.showNotification(this.dom.gameNotificationEl, this.currentTestimony.title);
    this.renderCurrentStatement();
  }

  public renderCurrentStatement(): void {
    if (!this.currentTestimony) return;
    const stmt = this.currentTestimony.statements[this.currentStatementIdx];
    this.onRenderLine({
      speaker: stmt.speaker,
      pose: stmt.pose,
      text: stmt.text
    });
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

  public handlePressStatement(): void {
    if (!this.currentTestimony) return;
    const stmt = this.currentTestimony.statements[this.currentStatementIdx];
    if (!stmt.pressText) return;

    this.onQueueDialogue(stmt.pressText, /*onComplete*/ () => {
      this.renderCurrentStatement();
    });
  }

  public handlePresentEvidence(evidenceId: EvidenceId): void {
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

  private onPenaltyPenalty(): void {
    this.state.takePenalty();
    ModalManager.updateHealthUI(this.dom.healthBarEl, this.state.health, this.state.maxHealth);
    this.soundEngine.playDamage();
    VisualEffects.shakeScreen(this.dom.gameScreen, /*durationMs=*/ 450);
    VisualEffects.flashScreen(this.dom.flashEl);

    const penaltyDialogue: DialogueLine[] = [
      { cutin: 'objection_protesto', speaker: 'DEFENSA', text: '¡PROTESTO!', sfx: 'whoosh' },
      { speaker: 'SUPER SAM', text: 'Time is money, and you are wasting mine! Esa prueba no contradice en absoluto el testimonio.', pose: 'supersam_point' },
      { speaker: 'JUEZ', text: '¡La fiscalía tiene razón! Penalizaré a la defensa por presentar pruebas irrelevantes.', pose: 'judge_gavel', sfx: 'gavel' }
    ];

    if (this.state.gameOver) {
      penaltyDialogue.push({ speaker: 'JUEZ', pose: 'judge_gavel', text: '¡La defensa ha agotado sus oportunidades! Declaro al acusado... ¡CULPABLE!', sfx: 'gavel' });
      this.onQueueDialogue(penaltyDialogue, /*onComplete*/ () => this.showGameOverModal());
      return;
    }
    this.onQueueDialogue(penaltyDialogue, /*onComplete*/ () => this.renderCurrentStatement());
  }

  public startClimax(): void {
    this.dom.bgEl.style.backgroundImage = "url('assets/bg_courtroom.jpg')";
    this.midiComposer.playTrack('suspense');

    this.onQueueDialogue(this.script.trial.climax.dialogue, /*onComplete*/ () => {
      this.onOpenCourtRecord(/*isTrialPresent=*/ true);
      this.dom.presentBtnEl.onclick = () => {
        this.handleClimaxSubmit();
      };
    });
  }

  private handleClimaxSubmit(): void {
    const evId = (this.dom.presentBtnEl as any).dataset.selectedId as EvidenceId;
    ModalManager.closeCourtRecord(this.dom);

    if (this.script.trial.climax.presentTarget.includes(evId)) {
      this.onQueueDialogue(this.script.trial.climax.verdict, /*onComplete*/ () => {
        VisualEffects.triggerConfetti(this.dom.confettiContainerEl);
      });
      return;
    }

    this.state.takePenalty();
    ModalManager.updateHealthUI(this.dom.healthBarEl, this.state.health, this.state.maxHealth);
    this.soundEngine.playDamage();
    VisualEffects.shakeScreen(this.dom.gameScreen, /*durationMs=*/ 450);
    VisualEffects.flashScreen(this.dom.flashEl);
    VisualEffects.showNotification(this.dom.gameNotificationEl, '¡Prueba incorrecta! Revisa tus pistas.');
    this.startClimax();
  }

  private showGameOverModal(): void {
    alert('¡FIN DEL JUEGO! El Chapulín fue declarado culpable. Presiona Aceptar para reintentar el Juicio.');
    this.state.resetHealth();
    ModalManager.updateHealthUI(this.dom.healthBarEl, this.state.health, this.state.maxHealth);
    this.startTrial();
  }
}
