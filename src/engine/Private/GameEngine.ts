// @Architecture(descriptionShort="Main coordinator managing dialogue flow, scenes, and events", type="controller", icon="layout")
/**
 * Ace Attorney Game Engine Coordinator
 * Connects [[./Typewriter.ts]], [[./InvestigationController.ts]], and [[./TrialController.ts]].
 */

import { midiComposer as defaultMidiComposer, soundEngine as defaultSoundEngine, type MidiMusicComposer, type SoundEngine } from '../../audio/index.js';
import { CASE_SCRIPT as defaultCaseScript, getCaseScript } from '../../case/index.js';
import { i18n } from '../../i18n/index.js';
import { gameState as defaultGameState, type GameStateManager, SaveManager, type SaveData } from '../../state/index.js';
import type { CaseId, CaseScript, DialogueLine, EvidenceId, Language, LocationId, SFXName } from '../../types/index.js';
import { getDomElements, type DomElements } from './DomElements.js';
import { EngineEventBinder } from './EngineEventBinder.js';
import { InvestigationController } from './InvestigationController.js';
import { ModalManager } from './ModalManager.js';
import { TrialController } from './TrialController.js';
import { Typewriter } from './Typewriter.js';
import { UiLanguageUpdater } from './UiLanguageUpdater.js';
import { VisualEffects } from './VisualEffects.js';

export interface GameEngineDeps {
  dom?: DomElements;
  state?: GameStateManager;
  script?: CaseScript;
  soundEngine?: SoundEngine;
  midiComposer?: MidiMusicComposer;
  storage?: Storage;
}

export class GameEngine {
  private readonly dom: DomElements;
  private readonly state: GameStateManager;
  private script: CaseScript;
  private readonly soundEngine: SoundEngine;
  private readonly midiComposer: MidiMusicComposer;
  private readonly typewriter: Typewriter;
  private readonly investigation: InvestigationController;
  private readonly trial: TrialController;
  private readonly storage?: Storage;
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
    this.storage = deps.storage;
    this.typewriter = new Typewriter(this.dom.dialogueTextEl, this.soundEngine);

    this.investigation = new InvestigationController({
      dom: this.dom, state: this.state, script: this.script, soundEngine: this.soundEngine,
      midiComposer: this.midiComposer, onQueueDialogue: (dlg, cb) => this.queueDialogue(dlg, cb)
    });

    this.trial = new TrialController({
      dom: this.dom, state: this.state, script: this.script, soundEngine: this.soundEngine,
      midiComposer: this.midiComposer, onQueueDialogue: (dlg, cb) => this.queueDialogue(dlg, cb),
      onRenderLine: (line) => this.renderDialogueLine(line),
      onOpenCourtRecord: (isTrialPresent) => this.openCourtRecord(isTrialPresent),
      onAdjourn: (location) => this.handleAdjournment(location)
    });
  }

  // @Section(Initialization & Bootstrapping)
  public init(): void {
    EngineEventBinder.bind({
      dom: this.dom, soundEngine: this.soundEngine,
      investigation: this.investigation, trial: this.trial,
      onStartGame: () => this.startGame('case1'),
      onStartCase2: () => this.startGame('case2'),
      onStartTrialDebug: () => this.startTrialDebug(),
      onAdvance: () => this.handleAdvance(),
      onOpenCourtRecord: (isTrial) => this.openCourtRecord(isTrial),
      onPresentFromModal: () => this.handlePresentFromModal(),
      onToggleLanguage: () => this.toggleLanguage(),
      onSaveGame: () => this.saveGame(),
      onLoadGame: () => this.loadGame(),
      onContinueGame: () => this.loadGame()
    });
    ModalManager.updateHealthUI(this.dom.healthBarEl, this.state.health, this.state.maxHealth);
    this.setLanguage(this.state.language);
    this.updateContinueButton();
    this.checkDebugUrlParams();
  }

  public setLanguage(lang: Language): void {
    i18n.setLanguage(lang);
    this.state.setLanguage(lang);
    this.script = getCaseScript(lang, this.state.caseId);
    this.state.applyProgressionRules(this.script);
    this.investigation.setScript(this.script);
    this.trial.setScript(this.script);
    UiLanguageUpdater.updateUi(this.dom, lang);
  }

  public toggleLanguage(): void {
    this.setLanguage(i18n.toggleLanguage());
  }

  private checkDebugUrlParams(): void {
    if (typeof window === 'undefined' || !window.location) return;
    const url = `${window.location.search} ${window.location.hash}`.toLowerCase();
    if (url.includes('lang=en')) this.setLanguage('en');
    if (url.includes('case=2')) this.loadCase('case2');
    if (url.includes('trial')) this.startTrialDebug();
  }

  private loadCase(caseId: CaseId): void {
    this.state.caseId = caseId;
    this.script = getCaseScript(this.state.language, caseId);
    this.investigation.setScript(this.script);
    this.trial.setScript(this.script);
    this.state.applyProgressionRules(this.script);
  }

  private dismissSplashAndInitAudio(): void {
    this.soundEngine.init();
    this.soundEngine.resume();
    this.soundEngine.playGavel();
    this.dom.startSplashOverlayEl.style.opacity = '0';
    setTimeout(/*hideSplash*/ () => {
      this.dom.startSplashOverlayEl.classList.add('hidden');
    }, /*delayInMs=*/ 400);
  }

  public startGame(caseId: CaseId = 'case1'): void {
    if (this.hasStarted) return;
    this.hasStarted = true;
    this.loadCase(caseId);
    this.state.beginNewCase(this.script);
    this.dismissSplashAndInitAudio();
    this.investigation.startInvestigation(this.script.startLocation);
  }

  public startTrialDebug(): void {
    if (this.hasStarted) return;
    this.hasStarted = true;
    this.loadCase(this.state.caseId);
    this.state.beginNewCase(this.script);
    this.dismissSplashAndInitAudio();
    this.state.populateTrialEvidence();
    this.trial.startTrial();
  }

  private handleAdjournment(location: LocationId): void {
    this.investigation.resetTrialLaunchButton();
    this.investigation.startInvestigation(location);
  }

  // @Section(Save & Load Management)
  public saveGame(storage?: Storage): boolean {
    const activeStorage = storage ?? this.storage;
    const trialSnapshot = this.state.mode === 'TRIAL' ? this.trial.getTrialSnapshot() : undefined;
    const data = this.state.exportState(trialSnapshot);
    const success = SaveManager.save(data, activeStorage);
    if (success) {
      this.soundEngine.playRealization();
      VisualEffects.showNotification(this.dom.gameNotificationEl, i18n.t.notifGameSaved);
      this.updateContinueButton(activeStorage);
    }
    return success;
  }

  public loadGame(storage?: Storage): boolean {
    const activeStorage = storage ?? this.storage;
    const data = SaveManager.load(activeStorage);
    if (!data) {
      VisualEffects.showNotification(this.dom.gameNotificationEl, i18n.t.notifNoSaveFound);
      return false;
    }
    this.restoreSaveData(data);
    VisualEffects.showNotification(this.dom.gameNotificationEl, i18n.t.notifGameLoaded);
    return true;
  }

  private restoreSaveData(data: SaveData): void {
    if (!this.hasStarted) this.dismissSplashAndInitAudio();
    this.hasStarted = true;
    this.state.restoreState(data);
    this.loadCase(data.caseId ?? 'case1');
    this.setLanguage(data.language);
    ModalManager.updateHealthUI(this.dom.healthBarEl, this.state.health, this.state.maxHealth);
    this.dialogueQueue = [];
    this.onQueueFinish = null;

    if (data.mode === 'INVESTIGATION') {
      this.investigation.startInvestigation(data.currentLocation);
      this.investigation.checkInvestigationProgress();
      return;
    }
    this.trial.restoreTrialSnapshot(data.trial);
  }

  public updateContinueButton(storage?: Storage): void {
    const hasSave = SaveManager.hasSave(storage ?? this.storage);
    if (this.dom.btnContinueGame) {
      this.dom.btnContinueGame.classList.toggle('hidden', !hasSave);
    }
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
    this.unlockLocationIfPresent(line.unlockLocation);
    this.typewriter.start(line.text || '');
  }

  private applyLineSpeakerAndPose(line: DialogueLine): void {
    const isTrial = this.state.mode === 'TRIAL';
    const effectivePose = VisualEffects.resolveEffectivePose(line, isTrial);
    if (effectivePose) {
      this.investigation.currentLocationCharPose = effectivePose;
      VisualEffects.setPose(this.dom.charSpriteEl, effectivePose);
    } else if (line.speaker === 'DEFENSA' || line.speaker === 'NARRADOR') {
      VisualEffects.hideCharacter(this.dom.charSpriteEl);
    }
    VisualEffects.updateStagingForLine(this.dom, line, isTrial);
    this.dom.speakerBoxEl.textContent = line.speaker || '';
  }

  private grantEvidenceIfPresent(evidenceId?: EvidenceId): void {
    if (!evidenceId) return;
    const added = this.state.addEvidence(evidenceId);
    if (added) {
      const item = this.state.allEvidence[evidenceId];
      VisualEffects.showNotification(this.dom.gameNotificationEl, i18n.t.notifEvidenceAdded(item.name));
    }
  }

  // fallow-ignore-next-line complexity
  private unlockLocationIfPresent(locationId?: LocationId): void {
    if (!locationId) return;
    const unlocked = this.state.unlockLocation(locationId);
    if (!unlocked) return;
    this.soundEngine.playRealization();
    const scene = this.script.investigation[locationId];
    const locName = scene?.name ?? scene?.title ?? locationId;
    VisualEffects.showNotification(
      this.dom.gameNotificationEl,
      i18n.t.notifLocationUnlocked(locName)
    );
  }

  private triggerSFX(sfx: SFXName): void {
    this.soundEngine.playSFX(sfx);
    if (sfx === 'gavel' || sfx === 'desk_slam' || sfx === 'damage') {
      VisualEffects.shakeScreen(this.dom.gameScreen, /*durationMs=*/ sfx === 'damage' ? 450 : 300);
    }
    if (sfx === 'realization' || sfx === 'chicharra' || sfx === 'damage') {
      VisualEffects.flashScreen(this.dom.flashEl);
    }
  }

  // @Section(Evidence Presentation Handling)
  private openCourtRecord(isTrialPresent: boolean): void {
    ModalManager.openCourtRecord({
      dom: this.dom, state: this.state, isTrialPresent,
      onSelect: (id) => { this.selectedEvidenceId = id; }
    });
  }

  private handlePresentFromModal(): void {
    if (!this.selectedEvidenceId) return;
    const evId = this.selectedEvidenceId;
    ModalManager.closeCourtRecord(this.dom);
    this.trial.handlePresentEvidence(evId);
  }
}
