// @Architecture(descriptionShort="Case 5 dock camera and defense idle pose remap", type="util", icon="layers")
/**
 * Staging case id for [[./VisualEffects.ts]]. Case 5 puts Don Ramón on the dock.
 */

import type { CaseId, PoseName } from '../../types/index.js';

let stagingCaseId: CaseId = 'case1';

export function setStagingCaseId(caseId: CaseId): void {
  stagingCaseId = caseId;
}

export function getStagingCaseId(): CaseId {
  return stagingCaseId;
}

export function isDonRamonDockCase(caseId: CaseId = stagingCaseId): boolean {
  return caseId === 'case5';
}

export function defenseIdlePose(caseId: CaseId = stagingCaseId): PoseName {
  return caseId === 'case5' ? 'chapulin_idle' : 'donramon_idle';
}

export function isDockSpeaker(speaker: string): boolean {
  return speaker === 'DON RAMON' || speaker === 'DON RAMÓN';
}
