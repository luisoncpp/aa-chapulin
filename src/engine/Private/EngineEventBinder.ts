// @Architecture(descriptionShort="Binds DOM click listeners and keyboard shortcuts", type="binder", icon="plug")
/**
 * Engine DOM & Keyboard Event Binder
 * Dispatches UI interactions to [[./InvestigationController.ts]] and [[./TrialController.ts]].
 */

import type { SoundEngine } from '../../audio/index.js';
import type { DomElements } from './DomElements.js';
import type { InvestigationController } from './InvestigationController.js';
import { ModalManager } from './ModalManager.js';
import type { TrialController } from './TrialController.js';

export interface EventBinderConfig {
  dom: DomElements;
  soundEngine: SoundEngine;
  investigation: InvestigationController;
  trial: TrialController;
  onStartGame: () => void;
  onStartCase2?: () => void;
  onStartTrialDebug?: () => void;
  onAdvance: () => void;
  onOpenCourtRecord: (isTrialPresent: boolean) => void;
  onPresentFromModal: () => void;
  onToggleLanguage?: () => void;
  onSaveGame?: () => void;
  onLoadGame?: () => void;
  onContinueGame?: () => void;
}

export class EngineEventBinder {
  public static bind(config: EventBinderConfig): void {
    EngineEventBinder.bindStartAndAudio(config);
    EngineEventBinder.bindSaveAndLoad(config);
    EngineEventBinder.bindDialogueAdvance(config);
    EngineEventBinder.bindCourtRecord(config);
    EngineEventBinder.bindInvestigation(config);
    EngineEventBinder.bindTrial(config);
  }

  // @Section(Audio & Splash Bindings)
  private static bindStartAndAudio(config: EventBinderConfig): void {
    const { dom, soundEngine, onStartGame, onStartCase2, onStartTrialDebug, onToggleLanguage } = config;
    dom.btnStartGame?.addEventListener('click', /*onStartClick*/ () => onStartGame());
    dom.btnStartCase2?.addEventListener('click', /*onStartCase2Click*/ () => {
      onStartCase2?.();
    });
    dom.btnStartTrialDebug?.addEventListener('click', /*onStartTrialDebugClick*/ () => {
      onStartTrialDebug?.();
    });
    dom.btnLangToggleEl?.addEventListener('click', /*onToggleLangClick*/ (e) => {
      e.stopPropagation();
      onToggleLanguage?.();
    });
    dom.btnLangSplashEl?.addEventListener('click', /*onToggleSplashLangClick*/ (e) => {
      e.stopPropagation();
      onToggleLanguage?.();
    });
    dom.btnAudioToggleEl.addEventListener('click', /*onToggleAudioClick*/ (e) => {
      e.stopPropagation();
      const isMuted = soundEngine.toggleMute();
      dom.btnAudioToggleEl.textContent = isMuted ? '🔇' : '🔊';
    });
    document.addEventListener('click', /*onGlobalClick*/ () => soundEngine.ensureActive(), { once: false });
  }

  // @Section(Save & Load Bindings)
  private static bindSaveAndLoad(config: EventBinderConfig): void {
    const { dom, onSaveGame, onLoadGame, onContinueGame } = config;
    dom.btnSaveGame?.addEventListener('click', /*onSaveClick*/ (e) => {
      e.stopPropagation();
      onSaveGame?.();
    });
    dom.btnLoadGame?.addEventListener('click', /*onLoadClick*/ (e) => {
      e.stopPropagation();
      onLoadGame?.();
    });
    dom.btnContinueGame?.addEventListener('click', /*onContinueClick*/ () => {
      onContinueGame?.();
    });
  }

  // @Section(Dialogue Advance Bindings)
  private static bindDialogueAdvance(config: EventBinderConfig): void {
    const { dom, onAdvance } = config;
    dom.dialogueBoxEl.addEventListener('click', /*onDialogueBoxClick*/ (e) => {
      e.stopPropagation();
      onAdvance();
    });
    document.addEventListener('keydown', /*onKeyDown*/ (e) => {
      if (e.code === 'Space' || e.code === 'Enter') onAdvance();
    });
  }

  // @Section(Court Record Bindings)
  private static bindCourtRecord(config: EventBinderConfig): void {
    const { dom, onOpenCourtRecord, onPresentFromModal } = config;
    dom.btnCourtRecord.addEventListener('click', /*onOpenRecordClick*/ (e) => {
      e.stopPropagation();
      onOpenCourtRecord(/*isTrialPresent=*/ false);
    });
    dom.btnCloseRecord.addEventListener('click', /*onCloseRecordClick*/ (e) => {
      e.stopPropagation();
      ModalManager.closeCourtRecord(dom);
    });
    dom.presentBtnEl.addEventListener('click', /*onPresentClick*/ (e) => {
      e.stopPropagation();
      onPresentFromModal();
    });
  }

  // @Section(Investigation Bindings)
  private static bindInvestigation(config: EventBinderConfig): void {
    const { dom, investigation } = config;
    dom.btnInvExamine.addEventListener('click', /*onExamineClick*/ (e) => {
      e.stopPropagation();
      investigation.startExamineMode();
    });
    dom.btnExamineBack.addEventListener('click', /*onExamineBackClick*/ (e) => {
      e.stopPropagation();
      investigation.exitExamineMode();
    });
    dom.btnInvTalk.addEventListener('click', /*onTalkClick*/ (e) => {
      e.stopPropagation();
      investigation.openTalkMenu();
    });
    dom.btnInvMove.addEventListener('click', /*onMoveClick*/ (e) => {
      e.stopPropagation();
      investigation.openMoveMenu();
    });
    dom.btnCloseTalk.addEventListener('click', /*onCloseTalkClick*/ (e) => {
      e.stopPropagation();
      ModalManager.closeTalkModal(dom);
    });
    dom.btnCloseMove?.addEventListener('click', /*onCloseMoveClick*/ (e) => {
      e.stopPropagation();
      ModalManager.closeMoveModal(dom);
    });
  }

  // @Section(Trial Bindings)
  private static bindTrial(config: EventBinderConfig): void {
    const { dom, trial, onOpenCourtRecord } = config;
    dom.btnInvTrial.addEventListener('click', /*onStartTrialClick*/ (e) => {
      e.stopPropagation();
      trial.startTrial();
    });
    dom.btnPress.addEventListener('click', /*onPressClick*/ (e) => {
      e.stopPropagation();
      trial.handlePressStatement();
    });
    dom.btnTrialPresent.addEventListener('click', /*onTrialPresentClick*/ (e) => {
      e.stopPropagation();
      onOpenCourtRecord(/*isTrialPresent=*/ true);
    });
    dom.btnPrevStatement.addEventListener('click', /*onPrevStatementClick*/ (e) => {
      e.stopPropagation();
      trial.prevStatement();
    });
    dom.btnNextStatement.addEventListener('click', /*onNextStatementClick*/ (e) => {
      e.stopPropagation();
      trial.nextStatement();
    });
  }
}
