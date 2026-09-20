// @Architecture(descriptionShort="Manages investigation trial launch button state and notification", type="view", icon="panel")
/**
 * Trial Launch Button State & Notification
 * Helper functions for [[./InvestigationController.ts]].
 */

import { i18n } from '../../i18n/index.js';
import type { SoundEngine } from '../../audio/index.js';
import { VisualEffects } from './VisualEffects.js';

interface TrialButtonDeps {
  notificationEl: HTMLElement;
  soundEngine?: SoundEngine;
}

export function updateTrialButtonProgress(
  trialBtn: HTMLButtonElement | null | undefined,
  isReady: boolean,
  deps: TrialButtonDeps
): void {
  if (!trialBtn) return;
  // The courthouse bell announces the day is over. It rings on the transition
  // into readiness, never on the repeated progress checks that follow.
  const justUnlocked = isReady && trialBtn.disabled;
  trialBtn.classList.toggle('disabled', !isReady);
  trialBtn.classList.toggle('pulse-glow', isReady);
  trialBtn.disabled = !isReady;
  if (!isReady) return;
  if (justUnlocked) deps.soundEngine?.playSFX('bell');
  VisualEffects.showNotification(deps.notificationEl, i18n.t.notifTrialReady);
}

export function resetTrialButton(trialBtn?: HTMLButtonElement | null): void {
  if (!trialBtn) return;
  trialBtn.classList.add('disabled');
  trialBtn.classList.remove('pulse-glow');
  trialBtn.disabled = true;
}
