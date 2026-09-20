// @Architecture(descriptionShort="Case 5 courtroom role and defense pose remap", type="util", icon="layers")
/**
 * Staging case id for [[./VisualEffects.ts]]. Case 5 keeps Don Ramón at the defense bench.
 */

import type { CaseId, PoseName, TrialDay } from '../../types/index.js';

let stagingCaseId: CaseId = 'case1';
let stagingTrialDay: TrialDay = 1;

export function setStagingCaseId(caseId: CaseId, trialDay: TrialDay = 1): void {
  stagingCaseId = caseId;
  stagingTrialDay = trialDay;
}

export function getStagingCaseId(): CaseId {
  return stagingCaseId;
}

/**
 * Case 5 camera exceptions, or `null` to use the shared speaker table.
 * Don Ramón is the accused and stays on the defense bench; Berrondo is the
 * prosecution's *coadyuvante* ("no tomo la palabra salvo que se me conceda"),
 * so on day 1 he speaks from the prosecution table; from day 2 on the shared
 * default is the witness plate, while pre-testimony/table interventions stamp
 * `bg_courtroom` explicitly in their dialogue data.
 */
export function case5CameraOverride(speaker: string, caseId?: CaseId): string | null {
  const activeCaseId = caseId ?? stagingCaseId;
  if (activeCaseId !== 'case5') return null;
  if (speaker === 'SECRETARIO') return 'assets/bg_courtroom.webp';
  if (speaker === 'BERRONDO' && stagingTrialDay <= 1) return 'assets/bg_courtroom.webp';
  return null;
}

export function defenseIdlePose(caseId: CaseId = stagingCaseId): PoseName {
  return caseId === 'case5' ? 'chapulin_idle' : 'donramon_idle';
}

export function isCase5Secretary(caseId: CaseId = stagingCaseId): boolean {
  return caseId === 'case5';
}
