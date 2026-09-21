// @Architecture(descriptionShort="Maps trial speakers to cameras and idle poses", type="util", icon="layers")
/**
 * Courtroom camera and default-pose inference for [[./VisualEffects.ts]].
 */

import type { DialogueLine, PoseName } from '../../types/index.js';
import { trialBackgroundFor } from './TrialSpeakerCameras.js';
import { defenseIdlePose, getStagingCaseId, isCase5Secretary } from './TrialCaseStaging.js';

function isDefenseSpeaker(speaker: string): boolean {
  return speaker === 'DEFENSA' || speaker === 'DON RAMON' || speaker === 'DON RAMÓN';
}

function isChapulinSpeaker(speaker: string): boolean {
  return speaker === 'CHAPULIN' || speaker === 'CHAPULÍN';
}

export function inferTrialBackground(speaker?: string): string | null {
  return trialBackgroundFor(speaker, getStagingCaseId());
}

export function resolveEffectivePose(line: DialogueLine, isTrialMode: boolean): PoseName | null {
  if (line.pose) {
    if (!isTrialMode && line.pose === 'donramon_slam') return 'donramon_shock';
    if (!isTrialMode && line.pose === 'chapulin_slam') return 'chapulin_panic';
    return line.pose;
  }
  if (line.furniture === 'none') return null;
  if (!isTrialMode || !line.speaker) return null;
  if (isDefenseSpeaker(line.speaker)) return defenseIdlePose();
  if (isChapulinSpeaker(line.speaker)) return 'chapulin_idle';
  if (line.speaker === 'SUPER SAM') return 'supersam_idle';
  if (line.speaker === 'SECRETARIO' && isCase5Secretary()) return 'secretario_leyendo';
  if (line.speaker === 'BERRONDO') return 'berrondo_idle';
  return null;
}
