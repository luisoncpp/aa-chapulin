// @Architecture(descriptionShort="Persists and restores engine save payloads", type="service", icon="database")
/**
 * Save and load helpers for [[./GameEngine.ts]].
 */

import { i18n } from '../../i18n/index.js';
import { SaveManager, type SaveData } from '../../state/index.js';
import type { Language } from '../../types/index.js';
import { ensureCasePair } from '../../case/loadCaseScript.js';
import type { DialogueFlow } from './DialogueFlow.js';
import { hideCaseComplete } from './CaseComplete.js';
import { dismissSplash, loadCase, type LaunchHost } from './EngineLaunch.js';
import { applyTrialSnapshot, persistTrialSnapshot } from './TrialSnapshot.js';
import { ModalManager } from './ModalManager.js';
import {
  closeSaveSlotModal,
  openSaveSlotModal,
  type SlotPickerMode
} from './SaveSlotModal.js';
import { VisualEffects } from './VisualEffects.js';
import { resumeDialogue } from './DialogueResume.js';
import { resetPresentPoint } from './PresentPoint.js';
import { resetFlashPlate } from './SceneFade.js';
import { invalidateSceneTasks } from './SceneTasks.js';
import { showCaseComplete } from './CaseComplete.js';

export interface PersistenceHost extends LaunchHost {
  dialogue: DialogueFlow;
  storage?: Storage;
  setLanguage: (lang: Language) => void;
}

export function saveGame(host: PersistenceHost, storage?: Storage): boolean {
  return commitSave(host, /*slotIndex=*/ 0, storage);
}

function commitSave(host: PersistenceHost, slotIndex: number, storage?: Storage): boolean {
  const activeStorage = storage ?? host.storage;
  const trialSnapshot = host.state.mode === 'TRIAL' ? persistTrialSnapshot(host.trial) : undefined;
  const payload = host.state.exportState(trialSnapshot);
  payload.investigationExamine = host.state.mode === 'INVESTIGATION' && host.investigation.isExamineActive;
  payload.caseComplete = !host.dom.caseCompleteOverlayEl?.classList.contains('hidden');
  if (!trialSnapshot?.deduction && !payload.investigationExamine) payload.dialogue = host.dialogue.snapshot();
  const success = SaveManager.saveToSlot(slotIndex, payload, activeStorage);
  if (!success) return false;
  host.soundEngine.playRealization();
  VisualEffects.showNotification(host.dom.gameNotificationEl, i18n.t.notifGameSaved);
  updateContinueButton(host, activeStorage);
  return true;
}

export function openSavePicker(host: PersistenceHost, mode: SlotPickerMode): void {
  presentPicker(host, mode);
}

function presentPicker(host: PersistenceHost, mode: SlotPickerMode): void {
  const storage = host.storage;
  openSaveSlotModal({
    dom: host.dom,
    mode,
    readSlots: () => SaveManager.listSlots(storage) ?? [],
    onPick: (index) => pickSlot(host, mode, index),
    onDelete: (index) => deleteAndRefresh(host, mode, index)
  });
}

function pickSlot(host: PersistenceHost, mode: SlotPickerMode, index: number): void {
  if (mode === 'save') {
    if (commitSave(host, index)) closeSaveSlotModal(host.dom);
    return;
  }
  if (host.resolveScript) {
    if (loadFromSlot(host, index)) closeSaveSlotModal(host.dom);
    return;
  }
  void pickLoadWhenReady(host, index);
}

async function pickLoadWhenReady(host: PersistenceHost, index: number): Promise<void> {
  const data = SaveManager.loadSlot(index, host.storage);
  if (!data) {
    finishLoad(host, null);
    return;
  }
  await ensureCasePair(data.caseId ?? 'case1');
  if (finishLoad(host, data)) closeSaveSlotModal(host.dom);
}

function deleteAndRefresh(host: PersistenceHost, mode: SlotPickerMode, index: number): void {
  if (!SaveManager.deleteSlot(index, host.storage)) return;
  updateContinueButton(host, host.storage);
  openSavePicker(host, mode);
}

function loadFromSlot(host: PersistenceHost, index: number, storage?: Storage): boolean {
  return finishLoad(host, SaveManager.loadSlot(index, storage ?? host.storage));
}

export function loadGame(host: PersistenceHost, storage?: Storage): boolean {
  return finishLoad(host, SaveManager.loadNewest(storage ?? host.storage));
}

function finishLoad(host: PersistenceHost, data: SaveData | null): boolean {
  if (!data) {
    VisualEffects.showNotification(host.dom.gameNotificationEl, i18n.t.notifNoSaveFound);
    return false;
  }
  restoreSaveData(host, data);
  VisualEffects.showNotification(host.dom.gameNotificationEl, i18n.t.notifGameLoaded);
  return true;
}

function restoreSaveData(host: PersistenceHost, data: SaveData): void {
  invalidateSceneTasks(host.dom.flashEl);
  resetFlashPlate(host.dom.flashEl);
  VisualEffects.clearConfetti(host.dom.confettiContainerEl);
  host.trial.cancelDeduction();
  resetPresentPoint(host.dom);
  host.dialogue.clear();
  host.trial.phase = 'IDLE';
  host.trial.clearActiveTestimony();
  host.dom.gameScreen.querySelectorAll('.game-modal').forEach((modal) => modal.classList.add('hidden'));
  hideCaseComplete(host.dom);
  if (!host.hasStarted) dismissSplash(host.dom, host.soundEngine);
  host.markStarted();
  host.state.restoreState(data);
  loadCase(host, data.caseId ?? 'case1');
  host.setLanguage(data.language);
  ModalManager.updateHealthUI(host.dom.healthBarEl, host.state.health, host.state.maxHealth);
  // A restored save resumes elsewhere; the previous session's backlog would not
  // line up with the lines the engine is about to re-queue.
  host.dialogue.clearHistory();
  restoreSavedPresentation(host, data);
}

function restoreSavedPresentation(host: PersistenceHost, data: SaveData): void {
  if (data.mode === 'INVESTIGATION') {
    host.investigation.startInvestigation(data.currentLocation, /*deferIntro=*/ Boolean(data.dialogue));
    host.investigation.checkInvestigationProgress();
  } else {
    applyTrialSnapshot(host.trial, data.trial, /*silent=*/ Boolean(data.dialogue || data.trial?.point));
  }
  if (data.dialogue) {
    host.dom.trialNavEl.classList.add('hidden');
    if (data.mode === 'INVESTIGATION') host.investigation.suspendForDialogue();
    host.dialogue.restore(data.dialogue, () => resumeDialogue(host, data.dialogue!.next));
  } else if (data.trial?.point) resumeDialogue(host, data.trial.point);
  if (data.investigationExamine) host.investigation.startExamineMode();
  if (data.caseComplete) showCaseComplete(host.dom);
}

export function updateContinueButton(host: PersistenceHost, storage?: Storage): void {
  const hasSave = SaveManager.hasSave(storage ?? host.storage);
  host.dom.btnContinueGame?.classList.toggle('hidden', !hasSave);
}
