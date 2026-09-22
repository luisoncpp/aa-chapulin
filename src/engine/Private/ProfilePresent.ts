// @Architecture(descriptionShort="Routes person-shaped present slots in the Acta de Personajes", type="controller", icon="panel")
/**
 * Person present slots (spec §6.5): the day-2 `openingPresent` and climax
 * stage 1. Lives beside [[./TrialPresent.ts]] so neither file grows past the
 * 200-line budget.
 */

import type { ProfileId } from '../../types/index.js';
import { isAwaitingClimaxEvidence } from './TrialClimax.js';
import { currentClimaxStage, presentClimaxProfile } from './TrialClimaxPresent.js';
import {
  getPendingOpening, getPendingTrialProfile, openingPenalty, resolveOpeningPresent,
  resolveTrialProfile
} from './TrialPresent.js';
import type { TrialController } from './TrialController.js';

function openingWantsProfile(ctrl: TrialController): ProfileId[] | undefined {
  return getPendingOpening(ctrl)?.profileTarget;
}

function climaxWantsProfile(ctrl: TrialController): ProfileId[] | undefined {
  if (ctrl.phase !== 'CLIMAX' || !isAwaitingClimaxEvidence(ctrl)) return undefined;
  return currentClimaxStage(ctrl).profileTarget;
}

/** True while the court is asking for a person rather than an exhibit. */
export function isAwaitingProfile(ctrl: TrialController): boolean {
  return Boolean(openingWantsProfile(ctrl) ?? getPendingTrialProfile(ctrl) ?? climaxWantsProfile(ctrl));
}

export function handleProfilePresent(ctrl: TrialController, profileId: ProfileId): void {
  const openingTarget = openingWantsProfile(ctrl);
  if (openingTarget) {
    if (!openingTarget.includes(profileId)) {
      openingPenalty(ctrl);
      return;
    }
    resolveOpeningPresent(ctrl, getPendingOpening(ctrl)!);
    return;
  }
  if (getPendingTrialProfile(ctrl)) {
    resolveTrialProfile(ctrl, profileId);
    return;
  }
  if (!climaxWantsProfile(ctrl)) return;
  presentClimaxProfile(ctrl, profileId);
}
