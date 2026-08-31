// @Architecture(descriptionShort="Returns investigation after a trial-day adjournment", type="util", icon="share")
/**
 * Adjournment handoff from trial back to investigation.
 * Used by [[./GameEngine.ts]] after [[./TrialDayRouter.ts]] applies day-2 state.
 */

import type { LocationId } from '../../types/index.js';
import type { InvestigationController } from './InvestigationController.js';
import { fadeThroughBlack } from './SceneFade.js';

export function handleAdjournment(
  investigation: InvestigationController,
  location: LocationId,
  flashEl: HTMLElement
): void {
  fadeThroughBlack(
    flashEl,
    /*onCovered*/ () => enterAdjournedLocation(investigation, location),
    /*onRevealed*/ () => investigation.queueCurrentIntro()
  );
}

function enterAdjournedLocation(
  investigation: InvestigationController,
  location: LocationId
): void {
  investigation.resetTrialLaunchButton();
  investigation.startInvestigation(location, /*deferIntro=*/ true);
}
