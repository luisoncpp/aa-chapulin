// @Architecture(descriptionShort="Main coordinator managing dialogue flow, scenes, and events", type="controller", icon="layout")
/**
 * Ace Attorney Game Engine Coordinator
 * Connects [[./DialogueFlow.ts]], [[./InvestigationController.ts]], and [[./TrialController.ts]].
 */

import { midiComposer as defaultMidiComposer, soundEngine as defaultSoundEngine, type MidiMusicComposer, type SoundEngine } from '../../audio/index.js';
import {
  EMPTY_CASE_SCRIPT, lookupBoundScript, type ScriptResolver
} from '../../case/loadCaseScript.js';
import { i18n } from '../../i18n/index.js';
import { gameState as defaultGameState, type GameStateManager } from '../../state/index.js';
import type {
  CaseId, CaseScript, DialogueLine, EvidenceId, Language, LocationId, ProfileId, TrialDay
} from '../../types/index.js';
import { handleAdjournment } from './AdjournmentHandler.js';
import { DialogueFlow } from './DialogueFlow.js';
import { DialogueHistory } from './DialogueHistory.js';
import { getDomElements, type DomElements } from './DomElements.js';
import { initGameEngine } from './EngineInit.js';
import { applyEngineLanguage } from './EngineLanguage.js';
import { loadCase, startGame as launchGame, startTrialDebug as launchTrial } from './EngineLaunch.js';
import { requestStartGame, requestTrialDebug } from './EnginePlayStart.js';
import { openEngineCourtRecord } from './EnginePresentModal.js';
import {
  loadGame as persistLoad,
  saveGame as persistSave,
  updateContinueButton as persistContinue,
  type PersistenceHost
} from './EnginePersistence.js';
import { InvestigationController } from './InvestigationController.js';
import { TrialController } from './TrialController.js';
import { Typewriter } from './Typewriter.js';

export interface GameEngineDeps {
  dom?: DomElements;
  state?: GameStateManager;
  script?: CaseScript;
  resolveScript?: ScriptResolver;
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
  private readonly resolveScript?: ScriptResolver;
  private hasStarted = false;
  private launching = false;
  private selectedEvidenceId: EvidenceId | null = null;
  private selectedProfileId: ProfileId | null = null;

  // fallow-ignore-next-line complexity
  constructor(deps: GameEngineDeps = {}) {
    this.dom = deps.dom ?? getDomElements();
    this.state = deps.state ?? defaultGameState;
    this.script = deps.script ?? EMPTY_CASE_SCRIPT;
    this.resolveScript = deps.resolveScript;
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
      onOpenCourtRecord: (isTrialPresent) => openEngineCourtRecord(this.presentHost(), isTrialPresent),
      onAdjourn: (location) => this.handleAdjournment(location),
      onStartDeduction: () => this.trial.startDeduction()
    });
    this.dialogue = new DialogueFlow({
      dom: this.dom, state: this.state, getScript: () => this.script,
      soundEngine: this.soundEngine, midiComposer: this.midiComposer,
      typewriter, investigation: this.investigation, history: new DialogueHistory()
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
      setLanguage: (lang) => this.setLanguage(lang),
      resolveScript: this.resolveScript
    };
  }

  public init(): void {
    initGameEngine({
      dom: this.dom, soundEngine: this.soundEngine, midiComposer: this.midiComposer,
      investigation: this.investigation, trial: this.trial, state: this.state,
      dialogue: this.dialogue, persist: () => this.host(), present: () => this.presentHost(),
      startGame: (caseId) => this.startGame(caseId),
      startTrialDebug: (day, deduction) => this.startTrialDebug(day, deduction),
      onAdvance: () => this.handleAdvance(),
      toggleLanguage: () => this.toggleLanguage(),
      setLanguage: (lang) => this.setLanguage(lang),
      updateContinue: () => this.updateContinueButton(),
      prepareDebugCase: (caseId) => this.prepareDebugCase(caseId)
    });
  }

  private prepareDebugCase(caseId: CaseId): void {
    this.state.caseId = caseId;
    if (this.resolveScript) loadCase(this.host(), caseId);
  }

  public setLanguage(lang: Language): void {
    applyEngineLanguage({
      lang,
      state: this.state,
      script: lookupBoundScript(lang, this.state.caseId, this.resolveScript),
      setScript: (script) => { this.script = script; },
      investigation: this.investigation,
      trial: this.trial,
      dom: this.dom
    });
  }

  public toggleLanguage(): void {
    this.setLanguage(i18n.toggleLanguage());
  }

  public startGame(caseId: CaseId = 'case1'): void {
    requestStartGame(this.playGate(), caseId);
  }

  public startTrialDebug(day?: TrialDay, deduction = false): void {
    requestTrialDebug(this.playGate(), day, deduction);
  }

  private playGate() {
    return {
      resolveScript: this.resolveScript,
      hasStarted: () => this.hasStarted,
      launching: () => this.launching,
      caseId: () => this.state.caseId,
      markLaunching: (busy: boolean) => { this.launching = busy; },
      clearHistory: () => this.dialogue.clearHistory(),
      launchGame: (id: CaseId) => launchGame(this.host(), id),
      launchTrial: (day?: TrialDay, deduction?: boolean) => launchTrial(this.host(), day, deduction)
    };
  }

  public saveGame(storage?: Storage): boolean { return persistSave(this.host(), storage); }
  public loadGame(storage?: Storage): boolean { return persistLoad(this.host(), storage); }
  public updateContinueButton(storage?: Storage): void { persistContinue(this.host(), storage); }

  private handleAdjournment(location: LocationId): void {
    handleAdjournment(this.investigation, location, /*flashEl=*/ this.dom.flashEl);
  }

  // fallow-ignore-next-line complexity
  public handleAdvance(): void {
    if (!this.hasStarted && this.state.mode !== 'TRIAL') {
      this.startGame();
      return;
    }
    this.soundEngine.ensureActive();
    const advanced = this.dialogue.handleAdvance();
    if (!advanced && this.trial.handleDeductionAdvance()) return;
    if (!advanced && this.trial.isAwaitingEvidence()) {
      if (this.dom.courtRecordModalEl.classList.contains('hidden')) {
        openEngineCourtRecord(this.presentHost(), /*isTrialPresent=*/ true);
      }
    }
  }

  public queueDialogue(dialogueArray: DialogueLine[], onComplete: (() => void) | null = null): void {
    this.dialogue.queueDialogue(dialogueArray, onComplete);
  }

  public renderDialogueLine(line: DialogueLine): void {
    this.dialogue.renderDialogueLine(line);
  }

  private presentHost() {
    return {
      dom: this.dom, state: this.state, trial: this.trial,
      selectedEvidenceId: this.selectedEvidenceId, selectedProfileId: this.selectedProfileId,
      setEvidenceId: (id: EvidenceId | null) => { this.selectedEvidenceId = id; },
      setProfileId: (id: ProfileId | null) => { this.selectedProfileId = id; }
    };
  }
}
