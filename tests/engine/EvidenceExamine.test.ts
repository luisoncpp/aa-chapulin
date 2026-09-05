// @Architecture(descriptionShort="Tests Acta examine button visibility and zone tooltips", type="test", icon="dialog")
import { describe, expect, it, beforeEach } from 'vitest';
import { bindEvidenceExamine } from '../../src/engine/Private/EvidenceExamine.js';
import type { DomElements } from '../../src/engine/Private/DomElements.js';
import { ModalManager } from '../../src/engine/Private/ModalManager.js';
import { GameStateManager } from '../../src/state/index.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('EvidenceExamine', () => {
  let dom: DomElements;
  let state: GameStateManager;

  beforeEach(() => {
    dom = setupDomHarness();
    state = new GameStateManager();
    bindEvidenceExamine(dom);
    state.addEvidence('chipote_chillon');
    state.allEvidence.chipote_chillon.detailedView = {
      imageAsset: 'assets/examine_chipote.webp',
      caption: 'Martillo de vinil hueco.',
      clickableZones: [
        { id: 'head', x: 40, y: 20, width: 20, height: 15, tooltip: 'La cabeza es blanda.' }
      ]
    };
  });

  it('shows the examine button only when the selected item has detailedView', () => {
    ModalManager.openCourtRecord({
      dom,
      state,
      isTrialPresent: /*isTrialPresent=*/ false,
      onSelect: () => {}
    });
    expect(dom.btnEvidenceExamine?.style.display).toBe('none');

    const chipoteCard = dom.evidenceListEl.children[1] as HTMLElement;
    chipoteCard.click();
    expect(dom.btnEvidenceExamine?.style.display).toBe('block');

    const badgeCard = dom.evidenceListEl.children[0] as HTMLElement;
    badgeCard.click();
    expect(dom.btnEvidenceExamine?.style.display).toBe('none');
  });

  it('opens the examine modal with caption, image, and clickable zones', () => {
    ModalManager.openCourtRecord({
      dom,
      state,
      isTrialPresent: /*isTrialPresent=*/ false,
      onSelect: () => {}
    });
    (dom.evidenceListEl.children[1] as HTMLElement).click();
    dom.btnEvidenceExamine!.click();
    expect(dom.evidenceExamineModalEl?.classList.contains('hidden')).toBe(false);
    expect(dom.evidenceExamineCaptionEl?.textContent).toContain('vinil');
    expect(dom.evidenceExamineImageEl?.src).toContain('examine_chipote.webp');
    expect(dom.evidenceExamineZonesEl?.children).toHaveLength(1);
    const zone = dom.evidenceExamineZonesEl!.children[0] as HTMLElement;
    expect(zone.style.left).toBe('40%');
    zone.click();
    expect(dom.gameNotificationEl.textContent).toContain('blanda');
    expect(dom.evidenceExamineCaptionEl?.textContent).toContain('blanda');
    dom.btnCloseExamine!.click();
    expect(dom.evidenceExamineModalEl?.classList.contains('hidden')).toBe(true);
  });
});
