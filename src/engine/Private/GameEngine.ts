/**
 * Ace Attorney Game Engine Coordinator
 */

import { midiComposer, soundEngine } from '../../audio/index.js';
import { CASE_SCRIPT } from '../../case/index.js';
import { gameState } from '../../state/index.js';
import type { DialogueLine, EvidenceId, SFXName } from '../../types/index.js';
import { getDomElements, type DomElements } from './DomElements.js';
import { EngineEventBinder } from './EngineEventBinder.js';
import { InvestigationController } from './InvestigationController.js';
import { ModalManager } from './ModalManager.js';
import { TrialController } from './TrialController.js';
import { Typewriter } from './Typewriter.js';
import { VisualEffects } from './VisualEffects.js';

export class GameEngine {
  private readonly dom: DomElements;
  private readonly typewriter: Typewriter;
  private readonly investigation: InvestigationController;
  private readonly trial: TrialController;
  private dialogueQueue: DialogueLine[] = [];
  private onQueueFinish: (() => void) | null = null;
  private hasStarted = false;
  private selectedEvidenceId: EvidenceId | null = null;

  constructor() {
    this.dom = getDomElements();
    this.typewriter = new Typewriter(this.dom.dialogueTextEl, soundEngine);

    this.investigation = new InvestigationController(
      this.dom, gameState, CASE_SCRIPT, soundEngine, midiComposer,
      (dlg, cb) => this.queueDialogue(dlg, cb)
    );

    this.trial = new TrialController(
      this.dom, gameState, CASE_SCRIPT, soundEngine, midiComposer,
      (dlg, cb) => this.queueDialogue(dlg, cb),
      (line) => this.renderDialogueLine(line),
      (isTrialPresent) => this.openCourtRecord(isTrialPresent)
    );
  }

  public init(): void {
    EngineEventBinder.bind({
      dom: this.dom,
      investigation: this.investigation,
      trial: this.trial,
      onStartGame: () => this.startGame(),
      onAdvance: () => this.handleAdvance(),
      onOpenCourtRecord: (isTrial) => this.openCourtRecord(isTrial),
      onPresentFromModal: () => this.handlePresentFromModal()
    });
    ModalManager.updateHealthUI(this.dom.healthBarEl, gameState.health, gameState.maxHealth);
  }

  private startGame(): void {
    if (this.hasStarted) return;
    this.hasStarted = true;
    soundEngine.init();
    soundEngine.resume();
    soundEngine.playGavel();

    this.dom.startSplashOverlayEl.style.opacity = '0';
    setTimeout(/*hideSplash*/ () => {
      this.dom.startSplashOverlayEl.classList.add('hidden');
    }, /*delayInMs=*/ 400);
    this.investigation.startInvestigation('museum');
  }

  public handleAdvance(): void {
    if (!this.hasStarted) {
      this.startGame();
      return;
    }
    soundEngine.ensureActive();
    if (this.typewriter.isTyping) {
      this.typewriter.completeImmediately();
      return;
    }
    if (this.dialogueQueue.length > 0) {
      const nextLine = this.dialogueQueue.shift()!;
      this.renderDialogueLine(nextLine);
      return;
    }
    if (this.onQueueFinish) {
      const cb = this.onQueueFinish;
      this.onQueueFinish = null;
      cb();
    }
  }

  public queueDialogue(dialogueArray: DialogueLine[], onComplete: (() => void) | null = null): void {
    this.dialogueQueue = [...dialogueArray];
    this.onQueueFinish = onComplete;
    if (this.dialogueQueue.length > 0) {
      const first = this.dialogueQueue.shift()!;
      this.renderDialogueLine(first);
    }
  }

  public renderDialogueLine(line: DialogueLine): void {
    if (!line) return;
    if (line.bg) this.dom.bgEl.style.backgroundImage = `url('${line.bg}')`;
    if (line.bgm) midiComposer.playTrack(line.bgm);
    if (line.sfx) this.triggerSFX(line.sfx);
    if (line.cutin) VisualEffects.showCutin(this.dom, line.cutin);
    this.applyLineSpeakerAndPose(line);
    this.grantEvidenceIfPresent(line.addEvidence);
    this.typewriter.start(line.text || '');
  }

  private applyLineSpeakerAndPose(line: DialogueLine): void {
    if (line.pose) {
      this.investigation.currentLocationCharPose = line.pose;
      VisualEffects.setPose(this.dom.charSpriteEl, line.pose);
    } else if (line.speaker === 'DEFENSA' || line.speaker === 'NARRADOR') {
      VisualEffects.hideCharacter(this.dom.charSpriteEl);
    }
    this.dom.speakerBoxEl.textContent = line.speaker || '';
  }

  private grantEvidenceIfPresent(evidenceId?: EvidenceId): void {
    if (!evidenceId) return;
    const added = gameState.addEvidence(evidenceId);
    if (added) {
      const item = gameState.allEvidence[evidenceId];
      VisualEffects.showNotification(this.dom.gameNotificationEl, `¡Añadido al Acta del Juicio: ${item.name}!`);
    }
  }

  private triggerSFX(sfx: SFXName): void {
    soundEngine.playSFX(sfx);
    if (sfx === 'gavel') VisualEffects.shakeScreen(this.dom.gameScreen, /*durationMs=*/ 300);
    if (sfx === 'desk_slam') VisualEffects.shakeScreen(this.dom.gameScreen, /*durationMs=*/ 250);
    if (sfx === 'realization' || sfx === 'chicharra') VisualEffects.flashScreen(this.dom.flashEl);
    if (sfx === 'damage') {
      VisualEffects.shakeScreen(this.dom.gameScreen, /*durationMs=*/ 450);
      VisualEffects.flashScreen(this.dom.flashEl);
    }
  }

  private openCourtRecord(isTrialPresent: boolean): void {
    ModalManager.openCourtRecord({
      dom: this.dom,
      state: gameState,
      isTrialPresent,
      onSelect: (id) => {
        this.selectedEvidenceId = id;
        (this.dom.presentBtnEl as any).dataset.selectedId = id;
      }
    });
  }

  private handlePresentFromModal(): void {
    if (!this.selectedEvidenceId) return;
    const evId = this.selectedEvidenceId;
    ModalManager.closeCourtRecord(this.dom);
    this.trial.handlePresentEvidence(evId);
  }
}
