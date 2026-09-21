// @Architecture(descriptionShort="Resolves scripted defense and prosecution penalty roles", type="util", icon="gear")
/**
 * Court-role defaults for [[./TrialPenalty.ts]]. Cases 0–4 omit the fields.
 */

import type { CaseScript, PoseName, SpeakerName, Testimony, TrialDay } from '../../types/index.js';
import { getActiveTrial } from './TrialDayRouter.js';

export interface CourtPenaltyRoles {
  defensePointPose: PoseName;
  defensePanicPose: PoseName;
  prosecutionSpeaker: SpeakerName;
  prosecutionPose?: PoseName;
}

export function resolveCourtPenaltyRoles(
  script: CaseScript | undefined,
  testimony: Testimony | null | undefined,
  trialDay: TrialDay
): CourtPenaltyRoles {
  const trial = script ? getActiveTrial(script, trialDay) : undefined;
  const speakerOverride = testimony?.penaltyProsecutionSpeaker ?? trial?.penaltyProsecutionSpeaker;
  const poseOverride = testimony?.penaltyProsecutionPose ?? trial?.penaltyProsecutionPose;
  const prosecutionSpeaker = speakerOverride ?? 'SUPER SAM';
  return {
    defensePointPose: script?.defensePointPose ?? 'donramon_point',
    defensePanicPose: script?.defensePanicPose ?? 'donramon_panic',
    prosecutionSpeaker,
    prosecutionPose: poseOverride ?? defaultProsecutionPose(prosecutionSpeaker)
  };
}

function defaultProsecutionPose(speaker: SpeakerName): PoseName | undefined {
  if (speaker === 'SUPER SAM') return 'supersam_point';
  return undefined;
}
