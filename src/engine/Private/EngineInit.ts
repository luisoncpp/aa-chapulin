// @Architecture(descriptionShort="Binds splash clicks, music player, and debug URL on boot", type="util", icon="plug")
/**
 * Splash and HUD wiring for [[./GameEngine.ts]].
 */

import type { MidiMusicComposer, SoundEngine } from '../../audio/index.js';
import type { GameStateManager } from '../../state/index.js';
import type { CaseId, Language, TrialDay } from '../../types/index.js';
import type { DialogueFlow } from './DialogueFlow.js';
import type { DomElements } from './DomElements.js';
import { applyDebugUrlParams } from './EngineDebugBootstrap.js';
import { EngineEventBinder } from './EngineEventBinder.js';
import type { PersistenceHost } from './EnginePersistence.js';
import { openSavePicker } from './EnginePersistence.js';
import type { PresentModalHost } from './EnginePresentModal.js';
import { openEngineCourtRecord, presentEvidenceFromModal, presentProfileFromModal } from './EnginePresentModal.js';
import { openHistoryModal } from './HistoryModal.js';
import type { InvestigationController } from './InvestigationController.js';
import { bindMusicPlayer } from './MusicPlayer/index.js';
import { ModalManager } from './ModalManager.js';
import type { TrialController } from './TrialController.js';

export interface EngineBootApi {
  dom: DomElements;
  soundEngine: SoundEngine;
  midiComposer: MidiMusicComposer;
  investigation: InvestigationController;
  trial: TrialController;
  state: GameStateManager;
  dialogue: DialogueFlow;
  persist: () => PersistenceHost;
  present: () => PresentModalHost;
  startGame: (caseId: CaseId) => void;
  startTrialDebug: (day?: TrialDay) => void;
  onAdvance: () => void;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  updateContinue: () => void;
  prepareDebugCase: (caseId: CaseId) => void;
}

export function initGameEngine(api: EngineBootApi): void {
  bindSplash(api);
  bindMusicPlayer(api.dom, { composer: api.midiComposer, soundEngine: api.soundEngine });
  ModalManager.updateHealthUI(api.dom.healthBarEl, api.state.health, api.state.maxHealth);
  api.setLanguage(api.state.language);
  api.updateContinue();
  applyDebugUrlParams({
    setLanguage: (lang) => api.setLanguage(lang),
    loadCase: (caseId) => api.prepareDebugCase(caseId),
    startTrialDebug: (day) => api.startTrialDebug(day)
  });
}

function bindSplash(api: EngineBootApi): void {
  EngineEventBinder.bind({
    dom: api.dom, soundEngine: api.soundEngine,
    investigation: api.investigation, trial: api.trial,
    onStartGame: () => api.startGame('case1'),
    onStartCase0: () => api.startGame('case0'),
    onStartCase2: () => api.startGame('case2'),
    onStartCase3: () => api.startGame('case3'),
    onStartCase4: () => api.startGame('case4'),
    onStartCase5: () => api.startGame('case5'),
    onStartTrialDebug: () => api.startTrialDebug(),
    onAdvance: () => api.onAdvance(),
    onOpenCourtRecord: (isTrial) => openEngineCourtRecord(api.present(), isTrial),
    onOpenHistory: () => openHistoryModal(api.dom, api.dialogue.getHistory()),
    onPresentFromModal: () => presentEvidenceFromModal(api.present()),
    onPresentProfileFromModal: () => presentProfileFromModal(api.present()),
    onToggleLanguage: () => api.toggleLanguage(),
    onSaveGame: () => openSavePicker(api.persist(), 'save'),
    onLoadGame: () => openSavePicker(api.persist(), 'load'),
    onContinueGame: () => openSavePicker(api.persist(), 'load')
  });
}
