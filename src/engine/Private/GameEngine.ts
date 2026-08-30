// @Architecture(descriptionShort="Main coordinator managing dialogue flow, scenes, and events", type="controller", icon="layout")
/**
 * Ace Attorney Game Engine Coordinator
 * Connects [[./DialogueFlow.ts]], [[./InvestigationController.ts]], and [[./TrialController.ts]].
 */

import { midiComposer as defaultMidiComposer, soundEngine as defaultSoundEngine, type MidiMusicComposer, type SoundEngine } from '../../audio/index.js';
import { CASE_SCRIPT as defaultCaseScript, getCaseScript } from '../../case/index.js';
import { i18n } from '../../i18n/index.js';
import { gameState as defaultGameState, type GameStateManager } from '../../state/index.js';
import type { CaseId, CaseScript, DialogueLine, EvidenceId, Language, LocationId } from '../../types/index.js';
import { handleAdjournment } from './AdjournmentHandler.js';
import { applyClimaxPresentPrompt } from './ClimaxPresentPrompt.js';
import { DialogueFlow } from './DialogueFlow.js';
import { getDomElements, type DomElements } from './DomElements.js';
import { applyDebugUrlParams } from './EngineDebugBootstrap.js';
import { EngineEventBinder } from './EngineEventBinder.js';
import { loadCase, startGame as launchGame, startTrialDebug as launchTrial } from './EngineLaunch.js';
import {
  loadGame as persistLoad,
  saveGame as persistSave,
  updateContinueButton as persistContinue,
  type PersistenceHost
} from './EnginePersistence.js';
import { InvestigationController } from './InvestigationController.js';
import { ModalManager } from './ModalManager.js';
import { TrialController } from './TrialController.js';
import { Typewriter } from './Typewriter.js';
import { UiLanguageUpdater } from './UiLanguageUpdater.js';

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
  private readonly investigation: InvestigationController;
  private readonly trial: TrialController;
  private readonly dialogue: DialogueFlow;
  private readonly storage?: Storage;
  private hasStarted = false;
  private selectedEvidenceId: EvidenceId | null = null;

  constructor(deps: GameEngineDeps = {}) {
    this.dom = deps.dom ?? getDomElements();
    this.state = deps.state ?? defaultGameState;
    this.script = deps.script ?? defaultCaseScript;
    this.soundEngine = deps.soundEngine ?? defaultSoundEngine;
    this.midiComposer = deps.midiComposer ?? defaultMidiComposer;
    this.storage = deps.storage;
    const typewriter = new Typewriter(this.dom.dialogueTextEl, this.soundEngine);
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
    this.dialogue = new DialogueFlow({
      dom: this.dom, state: this.state, getScript: () => this.script,
      soundEngine: this.soundEngine, midiComposer: this.midiComposer,
      typewriter, investigation: this.investigation
    });
  }

  private host(): PersistenceHost {
    return {
      dom: this.dom, state: this.state, trial: this.trial,
      investigation: this.investigation, dialogue: this.dialogue,
      soundEngine: this.soundEngine, storage: this.storage,
      hasStarted: this.hasStarted,
      getScript: () => this.script,
      setScript: (script) => { this.script = script; },
      markStarted: () => { this.hasStarted = true; },
      setLanguage: (lang) => this.setLanguage(lang)
    };
  }

  // @Section(Initialization & Bootstrapping)
  public init(): void {
    EngineEventBinder.bind({
      dom: this.dom, soundEngine: this.soundEngine,
      investigation: this.investigation, trial: this.trial,
      onStartGame: () => this.startGame('case1'),
      onStartCase2: () => this.startGame('case2'),
      onStartCase3: () => this.startGame('case3'),
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
    applyDebugUrlParams({
      setLanguage: (lang) => this.setLanguage(lang),
      loadCase: (caseId) => loadCase(this.host(), caseId),
      startTrialDebug: (day) => this.startTrialDebug(day)
    });
  }

  public setLanguage(lang: Language): void {
    i18n.setLanguage(lang);
    this.state.setLanguage(lang);
    this.script = getCaseScript(lang, this.state.caseId);
    this.state.applyProgressionRules(this.script);
    this.investigation.setScript(this.script);
    this.trial.setScript(this.script);
    UiLanguageUpdater.updateUi(this.dom, lang);
    applyClimaxPresentPrompt(this.dom, this.trial.getPresentPrompt());
  }

  public toggleLanguage(): void {
    this.setLanguage(i18n.toggleLanguage());
  }

  public startGame(caseId: CaseId = 'case1'): void {
    launchGame(this.host(), caseId);
  }

  public startTrialDebug(day?: import('../../types/index.js').TrialDay): void {
    launchTrial(this.host(), day);
  }

  private handleAdjournment(location: LocationId): void {
    handleAdjournment(this.investigation, location, /*flashEl=*/ this.dom.flashEl);
  }

  // @Section(Save & Load Management)
  public saveGame(storage?: Storage): boolean {
    return persistSave(this.host(), storage);
  }

  public loadGame(storage?: Storage): boolean {
    return persistLoad(this.host(), storage);
  }

  public updateContinueButton(storage?: Storage): void {
    persistContinue(this.host(), storage);
  }

  // @Section(Dialogue Flow & Queue)
  public handleAdvance(): void {
    if (!this.hasStarted) {
      this.startGame();
      return;
    }
    this.soundEngine.ensureActive();
    const advanced = this.dialogue.handleAdvance();
    if (!advanced && this.trial.isAwaitingEvidence()) {
      if (this.dom.courtRecordModalEl.classList.contains('hidden')) {
        this.openCourtRecord(/*isTrialPresent=*/ true);
      }
    }
  }

  public queueDialogue(dialogueArray: DialogueLine[], onComplete: (() => void) | null = null): void {
    this.dialogue.queueDialogue(dialogueArray, onComplete);
  }

  public renderDialogueLine(line: DialogueLine): void {
    this.dialogue.renderDialogueLine(line);
  }

  // @Section(Evidence Presentation Handling)
  private openCourtRecord(isTrialPresent: boolean): void {
    const shouldPresent = isTrialPresent || this.trial.isAwaitingEvidence();
    applyClimaxPresentPrompt(this.dom, shouldPresent ? this.trial.getPresentPrompt() : null);
    ModalManager.openCourtRecord({
      dom: this.dom, state: this.state, isTrialPresent: shouldPresent,
      onSelect: (id) => { this.selectedEvidenceId = id; }
    });
  }

  private handlePresentFromModal(): void {
    if (!this.selectedEvidenceId) return;
    const evId = this.selectedEvidenceId;
    ModalManager.closeCourtRecord(this.dom);
    applyClimaxPresentPrompt(this.dom, null);
    this.trial.handlePresentEvidence(evId);
  }
}
