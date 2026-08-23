// @Architecture(descriptionShort="Main coordinator managing dialogue flow, scenes, and events", type="controller", icon="layout")
/**
 * Ace Attorney Game Engine Coordinator
 * Connects [[./Typewriter.ts]], [[./InvestigationController.ts]], and [[./TrialController.ts]].
 */

import type { MidiMusicComposer, SoundEngine } from '../../audio/index.js';
import { midiComposer as defaultMidiComposer, soundEngine as defaultSoundEngine } from '../../audio/index.js';
import { CASE_SCRIPT as defaultCaseScript } from '../../case/index.js';
import type { GameStateManager } from '../../state/index.js';
import { gameState as defaultGameState } from '../../state/index.js';
import type { CaseScript, DialogueLine, EvidenceId, SFXName } from '../../types/index.js';
import { getDomElements, type DomElements } from './DomElements.js';
import { EngineEventBinder } from './EngineEventBinder.js';
import { InvestigationController } from './InvestigationController.js';
import { ModalManager } from './ModalManager.js';
import { TrialController } from './TrialController.js';
import { Typewriter } from './Typewriter.js';
import { VisualEffects } from './VisualEffects.js';

export interface GameEngineDeps {
  dom?: DomElements;
  state?: GameStateManager;
  script?: CaseScript;
  soundEngine?: SoundEngine;
  midiComposer?: MidiMusicComposer;
}

export class GameEngine {
  private readonly dom: DomElements;
  private readonly state: GameStateManager;
  private readonly script: CaseScript;
  private readonly soundEngine: SoundEngine;
  private readonly midiComposer: MidiMusicComposer;
  private readonly typewriter: Typewriter;
  private readonly investigation: InvestigationController;
  private readonly trial: TrialController;
  private dialogueQueue: DialogueLine[] = [];
  private onQueueFinish: (() => void) | null = null;
  private hasStarted = false;
  private selectedEvidenceId: EvidenceId | null = null;

  constructor(deps: GameEngineDeps = {}) {
    this.dom = deps.dom ?? getDomElements();
    this.state = deps.state ?? defaultGameState;
    this.script = deps.script ?? defaultCaseScript;
    this.soundEngine = deps.soundEngine ?? defaultSoundEngine;
    this.midiComposer = deps.midiComposer ?? defaultMidiComposer;

    this.typewriter = new Typewriter(this.dom.dialogueTextEl, this.soundEngine);

    this.investigation = new InvestigationController(
      this.dom, this.state, this.script, this.soundEngine, this.midiComposer,
      (dlg, cb) => this.queueDialogue(dlg, cb)
    );

    this.trial = new TrialController(
      this.dom, this.state, this.script, this.soundEngine, this.midiComposer,
      (dlg, cb) => this.queueDialogue(dlg, cb),
      (line) => this.renderDialogueLine(line),
      (isTrialPresent) => this.openCourtRecord(isTrialPresent)
    );
  }

  // @Section(Initialization & Bootstrapping)
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
    ModalManager.updateHealthUI(this.dom.healthBarEl, this.state.health, this.state.maxHealth);
  }

  private startGame(): void {
    if (this.hasStarted) return;
    this.hasStarted = true;
    this.soundEngine.init();
    this.soundEngine.resume();
    this.soundEngine.playGavel();

    this.dom.startSplashOverlayEl.style.opacity = '0';
    setTimeout(/*hideSplash*/ () => {
      this.dom.startSplashOverlayEl.classList.add('hidden');
    }, /*delayInMs=*/ 400);
    this.investigation.startInvestigation('museum');
  }

  // @Section(Dialogue Flow & Queue)
  public handleAdvance(): void {
    if (!this.hasStarted) {
      this.startGame();
      return;
    }
    this.soundEngine.ensureActive();
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

  // @Section(Line Rendering & Staging)
  public renderDialogueLine(line: DialogueLine): void {
    if (!line) return;
    if (line.bg) this.dom.bgEl.style.backgroundImage = `url('${line.bg}')`;
    if (line.bgm) this.midiComposer.playTrack(line.bgm);
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
    const added = this.state.addEvidence(evidenceId);
    if (added) {
      const item = this.state.allEvidence[evidenceId];
      VisualEffects.showNotification(this.dom.gameNotificationEl, `¡Añadido al Acta del Juicio: ${item.name}!`);
    }
  }

  private triggerSFX(sfx: SFXName): void {
    this.soundEngine.playSFX(sfx);
    if (sfx === 'gavel') VisualEffects.shakeScreen(this.dom.gameScreen, /*durationMs=*/ 300);
    if (sfx === 'desk_slam') VisualEffects.shakeScreen(this.dom.gameScreen, /*durationMs=*/ 250);
    if (sfx === 'realization' || sfx === 'chicharra') VisualEffects.flashScreen(this.dom.flashEl);
    if (sfx === 'damage') {
      VisualEffects.shakeScreen(this.dom.gameScreen, /*durationMs=*/ 450);
      VisualEffects.flashScreen(this.dom.flashEl);
    }
  }

  // @Section(Evidence Presentation Handling)
  private openCourtRecord(isTrialPresent: boolean): void {
    ModalManager.openCourtRecord({
      dom: this.dom,
      state: this.state,
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
