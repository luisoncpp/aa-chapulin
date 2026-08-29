// @Architecture(descriptionShort="Persists and restores engine save payloads", type="service", icon="database")
/**
 * Save and load helpers for [[./GameEngine.ts]].
 */

import { i18n } from '../../i18n/index.js';
import { SaveManager, type SaveData } from '../../state/index.js';
import type { Language } from '../../types/index.js';
import type { DialogueFlow } from './DialogueFlow.js';
import { dismissSplash, loadCase, type LaunchHost } from './EngineLaunch.js';
import { applyTrialSnapshot, persistTrialSnapshot } from './TrialSnapshot.js';
import { ModalManager } from './ModalManager.js';
import { VisualEffects } from './VisualEffects.js';

export interface PersistenceHost extends LaunchHost {
  dialogue: DialogueFlow;
  storage?: Storage;
  setLanguage: (lang: Language) => void;
}

export function saveGame(host: PersistenceHost, storage?: Storage): boolean {
  const activeStorage = storage ?? host.storage;
  const trialSnapshot = host.state.mode === 'TRIAL' ? persistTrialSnapshot(host.trial) : undefined;
  const success = SaveManager.save(host.state.exportState(trialSnapshot), activeStorage);
  if (!success) return false;
  host.soundEngine.playRealization();
  VisualEffects.showNotification(host.dom.gameNotificationEl, i18n.t.notifGameSaved);
  updateContinueButton(host, activeStorage);
  return true;
}

export function loadGame(host: PersistenceHost, storage?: Storage): boolean {
  const data = SaveManager.load(storage ?? host.storage);
  if (!data) {
    VisualEffects.showNotification(host.dom.gameNotificationEl, i18n.t.notifNoSaveFound);
    return false;
  }
  restoreSaveData(host, data);
  VisualEffects.showNotification(host.dom.gameNotificationEl, i18n.t.notifGameLoaded);
  return true;
}

function restoreSaveData(host: PersistenceHost, data: SaveData): void {
  if (!host.hasStarted) dismissSplash(host.dom, host.soundEngine);
  host.markStarted();
  host.state.restoreState(data);
  loadCase(host, data.caseId ?? 'case1');
  host.setLanguage(data.language);
  ModalManager.updateHealthUI(host.dom.healthBarEl, host.state.health, host.state.maxHealth);
  host.dialogue.clear();
  if (data.mode === 'INVESTIGATION') {
    host.investigation.startInvestigation(data.currentLocation);
    host.investigation.checkInvestigationProgress();
    return;
  }
  applyTrialSnapshot(host.trial, data.trial);
}

export function updateContinueButton(host: PersistenceHost, storage?: Storage): void {
  const hasSave = SaveManager.hasSave(storage ?? host.storage);
  host.dom.btnContinueGame?.classList.toggle('hidden', !hasSave);
}
