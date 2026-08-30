// @Architecture(descriptionShort="Caches and strongly types DOM element handles", type="util", icon="panel")
/**
 * Strongly-Typed Cached DOM Element References
 * Lookup helper for [[./GameEngine.ts]].
 */

export interface DomElements {
  gameScreen: HTMLElement;
  bgEl: HTMLElement;
  speakerBoxEl: HTMLElement;
  dialogueTextEl: HTMLElement;
  charSpriteEl: HTMLImageElement;
  courtFurnitureContainerEl: HTMLElement;
  courtFurnitureSpriteEl: HTMLImageElement;
  cutinOverlayEl: HTMLElement;
  cutinImgEl: HTMLImageElement;
  flashEl: HTMLElement;
  confettiContainerEl: HTMLElement;
  courtRecordModalEl: HTMLElement;
  evidenceListEl: HTMLElement;
  evidenceDescEl: HTMLElement;
  evidenceTitleEl: HTMLElement;
  evidenceIconPreviewEl: HTMLImageElement;
  presentBtnEl: HTMLButtonElement;
  healthBarEl: HTMLElement;
  investigationNavEl: HTMLElement;
  examineNavEl: HTMLElement;
  trialNavEl: HTMLElement;
  hotspotsContainerEl: HTMLElement;
  examineTooltipEl: HTMLElement;
  locationBannerEl: HTMLElement;
  dialogueBoxEl: HTMLElement;
  talkOptionsModalEl: HTMLElement;
  talkListEl: HTMLElement;
  moveLocationsModalEl: HTMLElement;
  moveLocationsListEl: HTMLElement;
  choicePromptModalEl: HTMLElement;
  choicePromptQuestionEl: HTMLElement;
  choicePromptListEl: HTMLElement;
  startSplashOverlayEl: HTMLElement;
  btnAudioToggleEl: HTMLButtonElement;
  btnLangToggleEl: HTMLButtonElement;
  btnLangSplashEl?: HTMLButtonElement;
  btnSaveGame?: HTMLButtonElement;
  btnLoadGame?: HTMLButtonElement;
  btnContinueGame?: HTMLButtonElement;
  gameNotificationEl: HTMLElement;
  btnStartGame: HTMLButtonElement;
  btnStartCase2?: HTMLButtonElement;
  btnStartTrialDebug: HTMLButtonElement;
  btnCourtRecord: HTMLButtonElement;
  btnCloseRecord: HTMLButtonElement;
  btnInvExamine: HTMLButtonElement;
  btnExamineBack: HTMLButtonElement;
  btnInvTalk: HTMLButtonElement;
  btnInvMove: HTMLButtonElement;
  btnCloseTalk: HTMLButtonElement;
  btnCloseMove: HTMLButtonElement;
  btnInvTrial: HTMLButtonElement;
  btnPress: HTMLButtonElement;
  btnTrialPresent: HTMLButtonElement;
  btnPrevStatement: HTMLButtonElement;
  btnNextStatement: HTMLButtonElement;
}

// @Section(DOM Element Cache)
export function getDomElements(): DomElements {
  return {
    gameScreen: document.getElementById('game-screen')!,
    bgEl: document.getElementById('scene-bg')!,
    speakerBoxEl: document.getElementById('speaker-name')!,
    dialogueTextEl: document.getElementById('dialogue-text')!,
    charSpriteEl: document.getElementById('character-sprite') as HTMLImageElement,
    courtFurnitureContainerEl: document.getElementById('court-furniture-container')!,
    courtFurnitureSpriteEl: document.getElementById('court-furniture-sprite') as HTMLImageElement,
    cutinOverlayEl: document.getElementById('cutin-overlay')!,
    cutinImgEl: document.getElementById('cutin-img') as HTMLImageElement,
    flashEl: document.getElementById('screen-flash')!,
    confettiContainerEl: document.getElementById('confetti-container')!,
    courtRecordModalEl: document.getElementById('court-record-modal')!,
    evidenceListEl: document.getElementById('evidence-grid')!,
    evidenceDescEl: document.getElementById('evidence-description')!,
    evidenceTitleEl: document.getElementById('evidence-title')!,
    evidenceIconPreviewEl: document.getElementById('evidence-icon-preview') as HTMLImageElement,
    presentBtnEl: document.getElementById('btn-modal-present') as HTMLButtonElement,
    healthBarEl: document.getElementById('health-bar')!,
    investigationNavEl: document.getElementById('investigation-controls')!,
    examineNavEl: document.getElementById('examine-controls')!,
    trialNavEl: document.getElementById('trial-controls')!,
    hotspotsContainerEl: document.getElementById('hotspots-container')!,
    examineTooltipEl: document.getElementById('examine-tooltip')!,
    locationBannerEl: document.getElementById('location-banner')!,
    dialogueBoxEl: document.getElementById('dialogue-box')!,
    talkOptionsModalEl: document.getElementById('talk-options-modal')!,
    talkListEl: document.getElementById('talk-options-list')!,
    moveLocationsModalEl: document.getElementById('move-locations-modal')!,
    moveLocationsListEl: document.getElementById('move-locations-list')!,
    choicePromptModalEl: document.getElementById('choice-prompt-modal')!,
    choicePromptQuestionEl: document.getElementById('choice-prompt-question')!,
    choicePromptListEl: document.getElementById('choice-prompt-list')!,
    startSplashOverlayEl: document.getElementById('start-splash-overlay')!,
    btnAudioToggleEl: document.getElementById('btn-audio-toggle') as HTMLButtonElement,
    btnLangToggleEl: document.getElementById('btn-lang-toggle') as HTMLButtonElement,
    btnLangSplashEl: document.getElementById('btn-lang-splash') as HTMLButtonElement,
    btnSaveGame: document.getElementById('btn-save-game') as HTMLButtonElement,
    btnLoadGame: document.getElementById('btn-load-game') as HTMLButtonElement,
    btnContinueGame: document.getElementById('btn-continue-game') as HTMLButtonElement,
    gameNotificationEl: document.getElementById('game-notification')!,
    btnStartGame: document.getElementById('btn-start-game') as HTMLButtonElement,
    btnStartCase2: document.getElementById('btn-start-case2') as HTMLButtonElement,
    btnStartTrialDebug: document.getElementById('btn-start-trial-debug') as HTMLButtonElement,
    btnCourtRecord: document.getElementById('btn-court-record') as HTMLButtonElement,
    btnCloseRecord: document.getElementById('btn-close-record') as HTMLButtonElement,
    btnInvExamine: document.getElementById('btn-inv-examine') as HTMLButtonElement,
    btnExamineBack: document.getElementById('btn-examine-back') as HTMLButtonElement,
    btnInvTalk: document.getElementById('btn-inv-talk') as HTMLButtonElement,
    btnInvMove: document.getElementById('btn-inv-move') as HTMLButtonElement,
    btnCloseTalk: document.getElementById('btn-close-talk') as HTMLButtonElement,
    btnCloseMove: document.getElementById('btn-close-move') as HTMLButtonElement,
    btnInvTrial: document.getElementById('btn-inv-trial') as HTMLButtonElement,
    btnPress: document.getElementById('btn-press') as HTMLButtonElement,
    btnTrialPresent: document.getElementById('btn-trial-present') as HTMLButtonElement,
    btnPrevStatement: document.getElementById('btn-prev-statement') as HTMLButtonElement,
    btnNextStatement: document.getElementById('btn-next-statement') as HTMLButtonElement
  };
}
