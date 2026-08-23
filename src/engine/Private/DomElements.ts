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
  startSplashOverlayEl: HTMLElement;
  btnAudioToggleEl: HTMLButtonElement;
  gameNotificationEl: HTMLElement;
  btnStartGame: HTMLButtonElement;
  btnCourtRecord: HTMLButtonElement;
  btnCloseRecord: HTMLButtonElement;
  btnInvExamine: HTMLButtonElement;
  btnExamineBack: HTMLButtonElement;
  btnInvTalk: HTMLButtonElement;
  btnInvMove: HTMLButtonElement;
  btnCloseTalk: HTMLButtonElement;
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
    startSplashOverlayEl: document.getElementById('start-splash-overlay')!,
    btnAudioToggleEl: document.getElementById('btn-audio-toggle') as HTMLButtonElement,
    gameNotificationEl: document.getElementById('game-notification')!,
    btnStartGame: document.getElementById('btn-start-game') as HTMLButtonElement,
    btnCourtRecord: document.getElementById('btn-court-record') as HTMLButtonElement,
    btnCloseRecord: document.getElementById('btn-close-record') as HTMLButtonElement,
    btnInvExamine: document.getElementById('btn-inv-examine') as HTMLButtonElement,
    btnExamineBack: document.getElementById('btn-examine-back') as HTMLButtonElement,
    btnInvTalk: document.getElementById('btn-inv-talk') as HTMLButtonElement,
    btnInvMove: document.getElementById('btn-inv-move') as HTMLButtonElement,
    btnCloseTalk: document.getElementById('btn-close-talk') as HTMLButtonElement,
    btnInvTrial: document.getElementById('btn-inv-trial') as HTMLButtonElement,
    btnPress: document.getElementById('btn-press') as HTMLButtonElement,
    btnTrialPresent: document.getElementById('btn-trial-present') as HTMLButtonElement,
    btnPrevStatement: document.getElementById('btn-prev-statement') as HTMLButtonElement,
    btnNextStatement: document.getElementById('btn-next-statement') as HTMLButtonElement
  };
}
