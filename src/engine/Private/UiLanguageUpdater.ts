// @Architecture(descriptionShort="Updates DOM button labels and headers on language change", type="util", icon="panel")
/**
 * UI Language DOM Updater
 * Updates static HTML elements when language changes for [[./GameEngine.ts]].
 */

import { i18n } from '../../i18n/index.js';
import type { Language } from '../../types/index.js';
import { fillCaseCompleteCopy } from './CaseComplete.js';
import type { DomElements } from './DomElements.js';

export class UiLanguageUpdater {
  public static updateUi(dom: DomElements, lang: Language): void {
    const t = i18n.getUI(lang);
    UiLanguageUpdater.updateNavButtons(dom, t);
    UiLanguageUpdater.updateHudAndSplash(dom, lang);
    UiLanguageUpdater.updateModalHeaders(dom, t);
  }

  private static updateNavButtons(dom: DomElements, t: ReturnType<typeof i18n.getUI>): void {
    const mappings: [HTMLButtonElement | undefined, string][] = [
      [dom.btnInvExamine, t.btnExamine],
      [dom.btnInvTalk, t.btnTalk],
      [dom.btnInvMove, t.btnMove],
      [dom.btnInvTrial, t.btnTrial],
      [dom.btnExamineBack, t.btnBack],
      [dom.btnPrevStatement, t.btnPrev],
      [dom.btnPress, t.btnPress],
      [dom.btnTrialPresent, t.btnPresent],
      [dom.btnNextStatement, t.btnNext],
      [dom.btnEvidenceExamine, t.btnEvidenceExamine]
    ];
    for (const [btn, label] of mappings) {
      if (btn) btn.textContent = label;
    }
  }

  // fallow-ignore-next-line complexity
  private static updateHudAndSplash(dom: DomElements, lang: Language): void {
    const t = i18n.getUI(lang);
    if (dom.btnLangToggleEl) {
      dom.btnLangToggleEl.textContent = lang === 'es' ? '🌐 ES' : '🌐 EN';
    }
    if (dom.btnLangSplashEl) {
      dom.btnLangSplashEl.textContent = lang === 'es' ? '🇲🇽 ES' : '🇺🇸 EN';
    }
    if (dom.btnAudioToggleEl) dom.btnAudioToggleEl.title = t.hudAudioToggleTitle;
    if (dom.btnSaveGame) dom.btnSaveGame.title = t.hudSaveTitle;
    if (dom.btnLoadGame) dom.btnLoadGame.title = t.hudLoadTitle;
    if (dom.btnHistory) dom.btnHistory.title = t.hudHistoryTitle;
    if (dom.btnContinueGame) dom.btnContinueGame.textContent = t.btnContinue;
    if (dom.btnStartGame) dom.btnStartGame.textContent = t.btnStartGame;
    if (dom.btnStartCase2) dom.btnStartCase2.textContent = t.btnStartCase2;
    if (dom.btnStartCase3) dom.btnStartCase3.textContent = t.btnStartCase3;
    if (dom.btnStartCase4) dom.btnStartCase4.textContent = t.btnStartCase4;
    if (dom.btnStartTrialDebug) dom.btnStartTrialDebug.textContent = t.btnStartTrialDebug;
    fillCaseCompleteCopy(dom, lang);
    if (dom.btnCourtRecord) {
      dom.btnCourtRecord.title = t.hudCourtRecordTitle;
      const span = dom.btnCourtRecord.querySelector('span');
      if (span) span.textContent = t.hudCourtRecordText;
    }
  }

  // fallow-ignore-next-line complexity
  private static updateModalHeaders(dom: DomElements, t: ReturnType<typeof i18n.getUI>): void {
    const recordHeader = dom.courtRecordModalEl?.querySelector('.modal-header h2');
    if (recordHeader) recordHeader.textContent = t.courtRecordTitle;
    const talkHeader = dom.talkOptionsModalEl?.querySelector('.modal-header h2');
    if (talkHeader) talkHeader.textContent = t.talkModalTitle;
    const moveHeader = dom.moveLocationsModalEl?.querySelector('.modal-header h2');
    if (moveHeader) moveHeader.textContent = t.moveModalTitle;
    const historyHeader = dom.historyModalEl?.querySelector('.modal-header h2');
    if (historyHeader) historyHeader.textContent = t.historyModalTitle;
    if (dom.presentBtnEl) dom.presentBtnEl.textContent = t.modalPresentBtn;
  }
}
