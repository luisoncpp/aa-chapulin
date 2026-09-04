// @Architecture(descriptionShort="Manages investigation trial launch button state and notification", type="view", icon="panel")
/**
 * Trial Launch Button State & Notification
 * Helper functions for [[./InvestigationController.ts]].
 */

import { i18n } from '../../i18n/index.js';
import { VisualEffects } from './VisualEffects.js';

export function updateTrialButtonProgress(
  trialBtn: HTMLButtonElement | null | undefined,
  isReady: boolean,
  notificationEl: HTMLElement
): void {
  if (!trialBtn) return;
  trialBtn.classList.toggle('disabled', !isReady);
  trialBtn.classList.toggle('pulse-glow', isReady);
  trialBtn.disabled = !isReady;
  if (isReady) {
    VisualEffects.showNotification(notificationEl, i18n.t.notifTrialReady);
  }
}

export function resetTrialButton(trialBtn?: HTMLButtonElement | null): void {
  if (!trialBtn) return;
  trialBtn.classList.add('disabled');
  trialBtn.classList.remove('pulse-glow');
  trialBtn.disabled = true;
}
