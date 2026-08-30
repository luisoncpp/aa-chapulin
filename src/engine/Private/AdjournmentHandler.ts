// @Architecture(descriptionShort="Returns investigation after a trial-day adjournment", type="util", icon="share")
/**
 * Adjournment handoff from trial back to investigation.
 * Used by [[./GameEngine.ts]] after [[./TrialDayRouter.ts]] applies day-2 state.
 */

import type { LocationId } from '../../types/index.js';
import type { InvestigationController } from './InvestigationController.js';

export function handleAdjournment(
  investigation: InvestigationController,
  location: LocationId
): void {
  investigation.resetTrialLaunchButton();
  investigation.startInvestigation(location);
}
