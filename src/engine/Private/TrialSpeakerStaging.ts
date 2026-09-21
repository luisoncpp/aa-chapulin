// @Architecture(descriptionShort="Maps trial speakers to cameras and idle poses", type="util", icon="layers")
/**
 * Courtroom camera and default-pose inference for [[./VisualEffects.ts]].
 */

import type { DialogueLine, PoseName } from '../../types/index.js';

const TRIAL_SPEAKER_BACKGROUNDS: Record<string, string> = {
  DEFENSA: 'assets/bg_defense.webp',
  'DON RAMON': 'assets/bg_defense.webp',
  'DON RAMÓN': 'assets/bg_defense.webp',
  CHAPULIN: 'assets/bg_defense.webp',
  'CHAPULÍN': 'assets/bg_defense.webp',
  'SUPER SAM': 'assets/bg_courtroom.webp',
  SECRETARIO: 'assets/bg_courtroom.webp',
  JUEZ: 'assets/bg_judge.webp',
  TRIPASECA: 'assets/bg_witness.webp',
  FLORINDA: 'assets/bg_witness.webp',
  PETERETE: 'assets/bg_witness.webp',
  CHOMPIRAS: 'assets/bg_witness.webp',
  JIRAFALES: 'assets/bg_witness.webp',
  JAIMITO: 'assets/bg_witness.webp',
  CLOTILDE: 'assets/bg_witness.webp',
  CHAPATIN: 'assets/bg_witness.webp',
  ANICETO: 'assets/bg_witness.webp',
  BARRIGA: 'assets/bg_witness.webp',
  NONO: 'assets/bg_witness.webp',
  CHIMOLTRUFIA: 'assets/bg_witness.webp',
  SARGENTO: 'assets/bg_witness.webp',
  BOTIJA: 'assets/bg_witness.webp',
  CECILIO: 'assets/bg_witness.webp',
  MARUJA: 'assets/bg_witness.webp',
  RUFINO: 'assets/bg_witness.webp',
  BERRONDO: 'assets/bg_witness.webp'
};

const VOICE_ONLY_SPEAKERS = new Set([
  'NARRADOR',
  'MODO EXAMINAR',
  'EXAMINE MODE',
  'ALGUACIL',
  'CUSTODIO'
]);

function isDefenseSpeaker(speaker: string): boolean {
  return speaker === 'DEFENSA' || speaker === 'DON RAMON' || speaker === 'DON RAMÓN';
}

function isChapulinSpeaker(speaker: string): boolean {
  return speaker === 'CHAPULIN' || speaker === 'CHAPULÍN';
}

export function inferTrialBackground(speaker?: string): string | null {
  if (!speaker || VOICE_ONLY_SPEAKERS.has(speaker)) return null;
  return TRIAL_SPEAKER_BACKGROUNDS[speaker] ?? 'assets/bg_witness.webp';
}

export function resolveEffectivePose(line: DialogueLine, isTrialMode: boolean): PoseName | null {
  if (line.pose) {
    if (!isTrialMode && line.pose === 'donramon_slam') return 'donramon_shock';
    return line.pose;
  }
  if (line.furniture === 'none') return null;
  if (!isTrialMode || !line.speaker) return null;
  if (isDefenseSpeaker(line.speaker)) return 'donramon_idle';
  if (isChapulinSpeaker(line.speaker)) return 'chapulin_idle';
  if (line.speaker === 'SUPER SAM') return 'supersam_idle';
  if (line.speaker === 'BERRONDO') return 'berrondo_idle';
  return null;
}
