// @Architecture(descriptionShort="Case 5 dock camera and defense idle pose remap", type="util", icon="layers")
/**
 * Staging case id for [[./VisualEffects.ts]]. Case 5 puts Don Ramón on the dock.
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
 * Don Ramón answers from the dock instead of the defense bench. Berrondo is the
 * prosecution's *coadyuvante* ("no tomo la palabra salvo que se me conceda"),
 * so on day 1 he speaks from the prosecution table; from day 2 on he is sworn
 * in (day-2 T2, day-3 T3, the day-4 climax) and the witness plate is right.
 */
export function case5CameraOverride(speaker: string, caseId?: CaseId): string | null {
  if (!isDonRamonDockCase(caseId)) return null;
  if (isDockSpeaker(speaker)) return 'assets/bg_witness.webp';
  if (speaker === 'BERRONDO' && stagingTrialDay <= 1) return 'assets/bg_courtroom.webp';
  return null;
}

function isDonRamonDockCase(caseId: CaseId = stagingCaseId): boolean {
  return caseId === 'case5';
}

export function defenseIdlePose(caseId: CaseId = stagingCaseId): PoseName {
  return caseId === 'case5' ? 'chapulin_idle' : 'donramon_idle';
}

function isDockSpeaker(speaker: string): boolean {
  return speaker === 'DON RAMON' || speaker === 'DON RAMÓN';
}
