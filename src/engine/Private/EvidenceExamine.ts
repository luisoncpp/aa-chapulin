// @Architecture(descriptionShort="Opens court-record deep-examine modal with hotspot zones", type="view", icon="dialog")
/**
 * Acta deep-examine overlay for evidence with `detailedView`.
 */

import { i18n } from '../../i18n/index.js';
import type { EvidenceDetailedView, EvidenceExamineZone, EvidenceItem } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { VisualEffects } from './VisualEffects.js';

let activeView: EvidenceDetailedView | null = null;

export function bindEvidenceExamine(dom: DomElements): void {
  dom.btnEvidenceExamine?.addEventListener('click', /*openExamine*/ (e) => {
    e.stopPropagation();
    if (activeView) openExamineModal(dom, activeView);
  });
  dom.btnCloseExamine?.addEventListener('click', /*closeExamine*/ (e) => {
    e.stopPropagation();
    closeExamineModal(dom);
  });
}

export function syncExamineButton(dom: DomElements, item: EvidenceItem | null): void {
  activeView = item?.detailedView ?? null;
  const btn = dom.btnEvidenceExamine;
  if (!btn) return;
  btn.style.display = activeView ? 'block' : 'none';
  btn.textContent = i18n.t.btnEvidenceExamine;
}

function closeExamineModal(dom: DomElements): void {
  dom.evidenceExamineModalEl?.classList.add('hidden');
}

function openExamineModal(dom: DomElements, view: EvidenceDetailedView): void {
  if (dom.evidenceExamineTitleEl) {
    dom.evidenceExamineTitleEl.textContent = i18n.t.btnEvidenceExamine;
  }
  if (dom.evidenceExamineCaptionEl) dom.evidenceExamineCaptionEl.textContent = view.caption;
  if (dom.evidenceExamineImageEl) dom.evidenceExamineImageEl.src = view.imageAsset;
  renderExamineZones(dom, view.clickableZones ?? []);
  dom.evidenceExamineModalEl?.classList.remove('hidden');
}

function renderExamineZones(dom: DomElements, zones: EvidenceExamineZone[]): void {
  const container = dom.evidenceExamineZonesEl;
  if (!container) return;
  container.innerHTML = '';
  for (const zone of zones) {
    container.appendChild(buildExamineZone(dom, zone));
  }
}

function buildExamineZone(dom: DomElements, zone: EvidenceExamineZone): HTMLButtonElement {
  const el = document.createElement('button');
  el.type = 'button';
  el.className = 'examine-zone';
  el.style.left = `${zone.x}%`;
  el.style.top = `${zone.y}%`;
  el.style.width = `${zone.width}%`;
  el.style.height = `${zone.height}%`;
  el.addEventListener('click', /*showZoneTooltip*/ (e) => {
    e.stopPropagation();
    showZoneTooltip(dom, zone.tooltip);
  });
  return el;
}

function showZoneTooltip(dom: DomElements, tooltip: string): void {
  VisualEffects.showNotification(dom.gameNotificationEl, tooltip);
  if (dom.evidenceExamineCaptionEl) dom.evidenceExamineCaptionEl.textContent = tooltip;
}
