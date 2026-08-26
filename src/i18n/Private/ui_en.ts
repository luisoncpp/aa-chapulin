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

  hudAudioToggleTitle: 'Toggle Audio Mute',
  hudCourtRecordTitle: 'Court Record (Evidence)',
  hudCourtRecordText: 'Record',

  splashTitle: 'EL CHAPULÍN COLORADO',
  splashSubtitle: 'ACE ATTORNEY: THE CASE OF THE COLORADO SQUAD',
  splashTip: 'Click below to activate procedural MIDI audio and start playing!',
  btnStartGame: '🔍 START INVESTIGATION (PLAY)',
  btnStartTrialDebug: '⚖️ DEBUG MODE: START IN TRIAL',
  langToggleLabel: '🌐 Language: English',

  locationMuseum: 'Museum of Antiques & Curiosities - Crime Scene',
  locationDetention: 'Detention Center - Visitor Room',
  locationCourtroom: 'High Court - Courtroom No. 1',

  notifEvidenceAdded: (name: string) => `Added to Court Record: ${name}!`,
  notifTrialReady: 'All clues collected! You can now proceed to Trial!',
  notifIncorrectClue: 'Incorrect evidence! Review your clues.',

  gameOverJudgeText: 'The defense has exhausted all chances! I declare the defendant... GUILTY!',
  gameOverDefenseText: 'Oh no! I will have to start over from the beginning of the trial!',
  penaltyProsecutionText: 'Time is money, and you are wasting mine! That evidence does not contradict the testimony at all.',
  penaltyJudgeText: 'The prosecution is correct! I shall penalize the defense for presenting irrelevant evidence.'
};
