// @Architecture(descriptionShort="Unit tests for HUD and modal labels on language change", type="test", icon="panel")
import { describe, expect, it } from 'vitest';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { UiLanguageUpdater } from '../../src/engine/Private/UiLanguageUpdater.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

function addModalHeaders(dom: DomElements): void {
  const record = document.createElement('div');
  record.className = 'modal-header';
  record.innerHTML = '<h2>ACTA</h2>';
  dom.courtRecordModalEl.prepend(record);
  const talk = document.createElement('div');
  talk.className = 'modal-header';
  talk.innerHTML = '<h2>HABLAR</h2>';
  dom.talkOptionsModalEl.prepend(talk);
}

describe('UiLanguageUpdater', () => {
  it('rewrites nav, HUD, splash, and modal copy for English and Spanish', () => {
    const dom = setupDomHarness();
    addModalHeaders(dom);

    UiLanguageUpdater.updateUi(dom, 'en');
    expect(dom.btnInvExamine.textContent).toBe('🔍 Examine');
    expect(dom.btnLangToggleEl.textContent).toBe('🌐 EN');
    expect(dom.btnLangSplashEl?.textContent).toBe('🇺🇸 EN');
    expect(dom.btnAudioToggleEl.title).toBe('Toggle Audio Mute');
    expect(dom.btnSaveGame?.title).toBe('Save Game');
    expect(dom.btnLoadGame?.title).toBe('Load Game');
    expect(dom.btnContinueGame?.textContent).toContain('CONTINUE GAME');
    expect(dom.btnStartGame.textContent).toContain('CASE 1');
    expect(dom.btnStartCase2?.textContent).toContain('CASE 2');
    if (dom.btnStartTrialDebug) expect(dom.btnStartTrialDebug.textContent).toContain('DEBUG MODE');
    expect(dom.btnCourtRecord.title).toContain('Court Record');
    expect(dom.btnCourtRecord.querySelector('span')?.textContent).toBe('Record');
    expect(dom.courtRecordModalEl.querySelector('.modal-header h2')?.textContent).toContain('COURT RECORD');
    expect(dom.talkOptionsModalEl.querySelector('.modal-header h2')?.textContent).toBe('TALK');
    expect(dom.moveLocationsModalEl.querySelector('.modal-header h2')?.textContent).toBe('MOVE');
    expect(dom.presentBtnEl.textContent).toBe('Present Evidence!');
    expect(dom.caseCompleteTitleEl.textContent).toBe('Case complete');

    UiLanguageUpdater.updateUi(dom, 'es');
    expect(dom.btnInvExamine.textContent).toContain('Examinar');
    expect(dom.btnLangToggleEl.textContent).toBe('🌐 ES');
    expect(dom.btnLangSplashEl?.textContent).toBe('🇲🇽 ES');
    expect(dom.btnCourtRecord.querySelector('span')?.textContent).toBe('Acta');
  });

  it('skips missing optional buttons, headers, and court-record span', () => {
    const dom = setupDomHarness();
    const sparse = {
      ...dom,
      btnInvExamine: undefined,
      btnInvTalk: undefined,
      btnInvMove: undefined,
      btnInvTrial: undefined,
      btnExamineBack: undefined,
      btnPrevStatement: undefined,
      btnPress: undefined,
      btnTrialPresent: undefined,
      btnNextStatement: undefined,
      btnLangToggleEl: undefined,
      btnLangSplashEl: undefined,
      btnAudioToggleEl: undefined,
      btnSaveGame: undefined,
      btnLoadGame: undefined,
      btnContinueGame: undefined,
      btnStartGame: undefined,
      btnStartCase2: undefined,
      btnStartTrialDebug: undefined,
      btnCourtRecord: undefined,
      courtRecordModalEl: undefined,
      talkOptionsModalEl: undefined,
      moveLocationsModalEl: undefined,
      presentBtnEl: undefined
    } as unknown as DomElements;

    expect(() => UiLanguageUpdater.updateUi(sparse, 'en')).not.toThrow();

    const noSpan = setupDomHarness();
    noSpan.btnCourtRecord.innerHTML = '';
    UiLanguageUpdater.updateUi(noSpan, 'en');
    expect(noSpan.btnCourtRecord.querySelector('span')).toBeNull();
  });
});
