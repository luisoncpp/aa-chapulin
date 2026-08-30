// @Architecture(descriptionShort="Resolves pose keys to sprite filenames for VisualEffects", type="util", icon="layers")
/**
 * Pose filename resolver consumed by [[./VisualEffects.ts]].
 * Unknown and Case 2 poses map to themselves; missing art is a pipeline concern.
 */

import type { PoseName } from '../../types/index.js';

export function resolvePoseAsset(poseName: PoseName): string | null {
  if (!poseName) return null;
  if (poseName === 'chapulin_thinking') return 'chapulin_idle';
  return poseName;
}
