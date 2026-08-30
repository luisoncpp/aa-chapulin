// @Architecture(descriptionShort="English language UI translations dictionary", type="data", icon="layers")
/**
 * English UI Translation Dictionary
 * Consumed by [[./I18nService.ts]].
 */

import type { UiTranslations } from './types.js';

export const UI_EN: UiTranslations = {
  btnExamine: '🔍 Examine',
  btnTalk: '💬 Talk',
  btnMove: '🏃 Move',
  btnTrial: '⚖️ To Trial',
  btnBack: '◀ Back',
  btnPrev: '◀ Previous',
  btnPress: '💥 Press',
  btnPresent: '📜 Present',
  btnNext: 'Next ▶',

  examineTitle: 'EXAMINE MODE',
  examineTooltip: '🔍 Inspect',
  examinePrompt: '🔍 Move your cursor and click on objects to investigate.',

  courtRecordTitle: 'COURT RECORD (EVIDENCE)',
  evidencePlaceholderTitle: 'Select an item of evidence',
  evidencePlaceholderDesc: 'Click on any item to view its details and contradictions.',
  modalPresentBtn: 'Present Evidence!',
  talkModalTitle: 'TALK',
  moveModalTitle: 'MOVE',
  currentLocationBadge: 'Current',

  hudAudioToggleTitle: 'Toggle Audio Mute',
  hudSaveTitle: 'Save Game',
  hudLoadTitle: 'Load Game',
  hudCourtRecordTitle: 'Court Record (Evidence)',
  hudCourtRecordText: 'Record',

  splashTitle: 'EL CHAPULÍN COLORADO',
  splashSubtitle: 'ACE ATTORNEY: THE CASE OF THE COLORADO SQUAD',
  splashTip: 'Click below to activate procedural MIDI audio and start playing!',
  btnStartGame: '🔍 CASE 1: THE COLORADO SQUAD',
  btnStartCase2: '🔍 CASE 2: TURNABOUT OF THE TWO-FACED THIEF',
  btnStartCase3: '🔍 CASE 3: TURNABOUT OF THE GOLDEN VOICE',
  btnStartTrialDebug: '⚖️ DEBUG MODE: START IN TRIAL',
  btnContinue: '📂 CONTINUE GAME',
  langToggleLabel: '🌐 Language: English',

  locationMuseum: 'Museum of Antiques & Curiosities - Crime Scene',
  locationDetention: 'Detention Center - Visitor Room',
  locationCourtroom: 'High Court - Courtroom No. 1',
  locationWaitingRoom: 'High Court - Waiting Room',

  notifEvidenceAdded: (name: string) => `Added to Court Record: ${name}!`,
  notifEvidenceUpdated: (name: string) => `Court Record updated: ${name}!`,
  notifLocationUnlocked: (name: string) => `New location unlocked: ${name}!`,
  notifTrialReady: 'All clues collected! You can now proceed to Trial!',
  notifWitnessAddedStatement: 'The witness has added a statement',
  pressHint: 'Monchito! We need to squeeze this witness, not just listen!',
  notifIncorrectClue: 'Incorrect evidence! Review your clues.',
  notifGameSaved: 'Game saved successfully!',
  notifGameLoaded: 'Game loaded!',
  notifNoSaveFound: 'No saved game found.',
  caseCompleteTitle: 'Case complete',
  caseCompleteBody: 'You have solved the case.',

  gameOverJudgeText: 'The defense has exhausted all chances! I declare the defendant... GUILTY!',
  gameOverDefenseText: 'Oh no! I will have to start over from the beginning of the trial!',
  penaltyProsecutionText: 'Time is money, and you are wasting mine! That evidence does not contradict the testimony at all.',
  penaltyJudgeText: 'The prosecution is correct! I shall penalize the defense for presenting irrelevant evidence.'
};
