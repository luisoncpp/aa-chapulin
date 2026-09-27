// @Architecture(descriptionShort="Opens the Court Record and submits a presented card", type="util", icon="dialog")
/**
 * Acta present handlers for [[./GameEngine.ts]].
 */

import type { EvidenceId, ProfileId } from '../../types/index.js';
import { applyClimaxPresentPrompt } from './ClimaxPresentPrompt.js';
import type { DomElements } from './DomElements.js';
import { ModalManager } from './ModalManager.js';
import type { TrialController } from './TrialController.js';
import type { GameStateManager } from '../../state/index.js';

export interface PresentModalHost {
  dom: DomElements;
  state: GameStateManager;
  trial: TrialController;
  selectedEvidenceId: EvidenceId | null;
  selectedProfileId: ProfileId | null;
  setEvidenceId: (id: EvidenceId | null) => void;
  setProfileId: (id: ProfileId | null) => void;
}

export function openEngineCourtRecord(host: PresentModalHost, isTrialPresent: boolean): void {
  const shouldPresent = isTrialPresent || host.trial.isAwaitingEvidence();
  const isProfilePresent = shouldPresent && host.trial.isAwaitingProfile();
  applyClimaxPresentPrompt(host.dom, shouldPresent ? host.trial.getPresentPrompt() : null);
  ModalManager.openCourtRecord({
    dom: host.dom, state: host.state, isTrialPresent: shouldPresent, isProfilePresent,
    onSelect: (id) => { host.setEvidenceId(id); },
    onSelectProfile: (id) => { host.setProfileId(id); }
  });
}

export function presentEvidenceFromModal(host: PresentModalHost): void {
  if (!host.selectedEvidenceId) return;
  const evId = host.selectedEvidenceId;
  ModalManager.closeCourtRecord(host.dom);
  applyClimaxPresentPrompt(host.dom, null);
  host.trial.handlePresentEvidence(evId);
}

export function presentProfileFromModal(host: PresentModalHost): void {
  if (!host.selectedProfileId) return;
  const profileId = host.selectedProfileId;
  ModalManager.closeCourtRecord(host.dom);
  applyClimaxPresentPrompt(host.dom, null);
  host.trial.handlePresentProfile(profileId);
}
