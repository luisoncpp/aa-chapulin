/**
 * Engine DOM & Keyboard Event Binder
 */

import { soundEngine } from '../../audio/index.js';
import type { DomElements } from './DomElements.js';
import type { InvestigationController } from './InvestigationController.js';
import { ModalManager } from './ModalManager.js';
import type { TrialController } from './TrialController.js';

export interface EventBinderConfig {
  dom: DomElements;
  investigation: InvestigationController;
  trial: TrialController;
  onStartGame: () => void;
  onAdvance: () => void;
  onOpenCourtRecord: (isTrialPresent: boolean) => void;
  onPresentFromModal: () => void;
}

export class EngineEventBinder {
  public static bind(config: EventBinderConfig): void {
    EngineEventBinder.bindStartAndAudio(config);
    EngineEventBinder.bindDialogueAdvance(config);
    EngineEventBinder.bindCourtRecord(config);
    EngineEventBinder.bindInvestigation(config);
    EngineEventBinder.bindTrial(config);
  }

  private static bindStartAndAudio(config: EventBinderConfig): void {
    const { dom, onStartGame } = config;
    document.getElementById('btn-start-game')?.addEventListener('click', () => onStartGame());
    dom.btnAudioToggleEl.addEventListener('click', (e) => {
      e.stopPropagation();
      const isMuted = soundEngine.toggleMute();
      dom.btnAudioToggleEl.textContent = isMuted ? '🔇' : '🔊';
    });
    document.addEventListener('click', () => soundEngine.ensureActive(), { once: false });
  }

  private static bindDialogueAdvance(config: EventBinderConfig): void {
    const { dom, onAdvance } = config;
    dom.dialogueBoxEl.addEventListener('click', (e) => {
      e.stopPropagation();
      onAdvance();
    });
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space' || e.code === 'Enter') onAdvance();
    });
  }

  private static bindCourtRecord(config: EventBinderConfig): void {
    const { dom, onOpenCourtRecord, onPresentFromModal } = config;
    document.getElementById('btn-court-record')?.addEventListener('click', (e) => {
      e.stopPropagation();
      onOpenCourtRecord(/*isTrialPresent=*/ false);
    });
    document.getElementById('btn-close-record')?.addEventListener('click', (e) => {
      e.stopPropagation();
      ModalManager.closeCourtRecord(dom);
    });
    dom.presentBtnEl.addEventListener('click', (e) => {
      e.stopPropagation();
      onPresentFromModal();
    });
  }

  private static bindInvestigation(config: EventBinderConfig): void {
    const { dom, investigation } = config;
    document.getElementById('btn-inv-examine')?.addEventListener('click', (e) => {
      e.stopPropagation();
      investigation.startExamineMode();
    });
    document.getElementById('btn-examine-back')?.addEventListener('click', (e) => {
      e.stopPropagation();
      investigation.exitExamineMode();
    });
    document.getElementById('btn-inv-talk')?.addEventListener('click', (e) => {
      e.stopPropagation();
      investigation.openTalkMenu();
    });
    document.getElementById('btn-inv-move')?.addEventListener('click', (e) => {
      e.stopPropagation();
      investigation.toggleLocation();
    });
    document.getElementById('btn-close-talk')?.addEventListener('click', (e) => {
      e.stopPropagation();
      ModalManager.closeTalkModal(dom);
    });
  }

  private static bindTrial(config: EventBinderConfig): void {
    const { trial, onOpenCourtRecord } = config;
    document.getElementById('btn-inv-trial')?.addEventListener('click', (e) => {
      e.stopPropagation();
      trial.startTrial();
    });
    document.getElementById('btn-press')?.addEventListener('click', (e) => {
      e.stopPropagation();
      trial.handlePressStatement();
    });
    document.getElementById('btn-trial-present')?.addEventListener('click', (e) => {
      e.stopPropagation();
      onOpenCourtRecord(/*isTrialPresent=*/ true);
    });
    document.getElementById('btn-prev-statement')?.addEventListener('click', (e) => {
      e.stopPropagation();
      trial.prevStatement();
    });
    document.getElementById('btn-next-statement')?.addEventListener('click', (e) => {
      e.stopPropagation();
      trial.nextStatement();
    });
  }
}
