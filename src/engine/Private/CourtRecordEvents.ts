// @Architecture(descriptionShort="Binds Court Record controls and restores paused point targets", type="binder", icon="plug")
import type { DomElements } from './DomElements.js';
import { ModalManager } from './ModalManager.js';
import {
  resumePresentPointAfterCourtRecord, suspendPresentPointForCourtRecord
} from './PresentPoint.js';

export interface CourtRecordEventConfig {
  dom: DomElements;
  onOpenCourtRecord: (isTrialPresent: boolean) => void;
  onPresentFromModal: () => void;
  onPresentProfileFromModal: () => void;
}

export function bindCourtRecordEvents(config: CourtRecordEventConfig): void {
  const { dom, onOpenCourtRecord, onPresentFromModal, onPresentProfileFromModal } = config;
  dom.btnCourtRecord.addEventListener('click', /*onOpenRecordClick*/ (event) => {
    event.stopPropagation();
    suspendPresentPointForCourtRecord(dom);
    onOpenCourtRecord(/*isTrialPresent=*/ false);
  });
  dom.btnCloseRecord.addEventListener('click', /*onCloseRecordClick*/ (event) => {
    event.stopPropagation();
    closeRecordAndResumePoint(dom);
  });
  dom.presentBtnEl.addEventListener('click', /*onPresentClick*/ (event) => {
    event.stopPropagation();
    onPresentFromModal();
  });
  dom.presentProfileBtnEl.addEventListener('click', /*onPresentProfileClick*/ (event) => {
    event.stopPropagation();
    onPresentProfileFromModal();
  });
  document.addEventListener('keydown', /*onCloseRecordKeyDown*/ (event) => {
    handleCloseRecordKeyDown(dom, event);
  });
}

function handleCloseRecordKeyDown(dom: DomElements, event: KeyboardEvent): void {
  if (!canCloseCourtRecord(dom, event)) return;
  closeRecordAndResumePoint(dom);
}

function canCloseCourtRecord(dom: DomElements, event: KeyboardEvent): boolean {
  const isRecordOpen = !dom.courtRecordModalEl.classList.contains('hidden');
  const isExamineOpen = dom.evidenceExamineModalEl && !dom.evidenceExamineModalEl.classList.contains('hidden');
  return event.code === 'Escape' && isRecordOpen && !isExamineOpen;
}

function closeRecordAndResumePoint(dom: DomElements): void {
  ModalManager.closeCourtRecord(dom);
  resumePresentPointAfterCourtRecord(dom);
}
