// @Architecture(descriptionShort="Resolves scripted defense and prosecution penalty roles", type="util", icon="gear")
/**
 * Court-role defaults for [[./TrialPenalty.ts]]. Super Sam announces the
 * irrelevant-evidence finding until a trial script replaces him.
 */

import type { CaseScript, PoseName, SpeakerName, Testimony, TrialDay } from '../../types/index.js';
import { getActiveTrial } from './TrialDayRouter.js';

export interface CourtPenaltyRoles {
  defensePointPose: PoseName;
  defensePanicPose: PoseName;
  prosecutionSpeaker: SpeakerName;
  prosecutionPose?: PoseName;
}

export function resolveCourtPenaltyRoles(context: {
  script: CaseScript | undefined;
  testimony: Testimony | null | undefined;
  trialDay: TrialDay;
  samRecused: boolean;
}): CourtPenaltyRoles {
  const { script, testimony, trialDay, samRecused } = context;
  const trial = script ? getActiveTrial(script, trialDay) : undefined;
  const prosecutionSpeaker = firstDefined([
    testimony?.penaltyProsecutionSpeaker,
    trial?.penaltyProsecutionSpeaker,
    getDefaultProsecutionSpeaker(script, samRecused)
  ]) ?? 'SUPER SAM';
  return {
    defensePointPose: script?.defensePointPose ?? 'donramon_point',
    defensePanicPose: script?.defensePanicPose ?? 'donramon_panic',
    prosecutionSpeaker,
    prosecutionPose: firstDefined([
      testimony?.penaltyProsecutionPose,
      trial?.penaltyProsecutionPose,
      defaultProsecutionPose(prosecutionSpeaker)
    ])
  };
}

function firstDefined<T>(values: Array<T | undefined>): T | undefined {
  return values.find((value): value is T => value !== undefined);
}

function getDefaultProsecutionSpeaker(script: CaseScript | undefined, samRecused: boolean): SpeakerName {
  if (script?.id !== 'case5' || !samRecused) return 'SUPER SAM';
  return 'SECRETARIO';
}

function defaultProsecutionPose(speaker: SpeakerName): PoseName | undefined {
  if (speaker === 'SUPER SAM') return 'supersam_point';
  if (speaker === 'SECRETARIO') return 'secretario_leyendo';
  return undefined;
}
