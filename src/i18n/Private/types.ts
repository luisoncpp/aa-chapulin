// @Architecture(descriptionShort="Defines translation schema interfaces for UI strings", type="types", icon="cube")
/**
 * Localization & UI Translation Types
 * Consumed by [[./I18nService.ts]], [[./ui_es.ts]], and [[./ui_en.ts]].
 */

import type { Language } from '../../types/index.js';

export interface UiTranslations {
  // Navigation Buttons
  btnExamine: string;
  btnTalk: string;
  btnMove: string;
  btnTrial: string;
  btnBack: string;
  btnPrev: string;
  btnPress: string;
  btnPresent: string;
  btnNext: string;

  // Examine Mode
  examineTitle: string;
  examineTooltip: string;
  examinePrompt: string;

  // Modals
  courtRecordTitle: string;
  evidencePlaceholderTitle: string;
  evidencePlaceholderDesc: string;
  modalPresentBtn: string;
  talkModalTitle: string;
  moveModalTitle: string;
  currentLocationBadge: string;

  // HUD Elements
  hudAudioToggleTitle: string;
  hudSaveTitle: string;
  hudLoadTitle: string;
  hudCourtRecordTitle: string;
  hudCourtRecordText: string;

  // Splash Screen
  splashTitle: string;
  splashSubtitle: string;
  splashTip: string;
  btnStartGame: string;
  btnStartCase2: string;
  btnStartTrialDebug: string;
  btnContinue: string;
  langToggleLabel: string;

  // Location Names
  locationMuseum: string;
  locationDetention: string;
  locationCourtroom: string;

  // Notifications
  notifEvidenceAdded: (name: string) => string;
  notifLocationUnlocked: (name: string) => string;
  notifTrialReady: string;
  notifIncorrectClue: string;
  notifGameSaved: string;
  notifGameLoaded: string;
  notifNoSaveFound: string;

  // Game Over Dialogues
  gameOverJudgeText: string;
  gameOverDefenseText: string;
  penaltyProsecutionText: string;
  penaltyJudgeText: string;
}

export type LanguageChangeListener = (lang: Language) => void;
