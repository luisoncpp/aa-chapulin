// @Architecture(descriptionShort="Maps Case 2 pose keys onto existing character sprite files", type="util", icon="layers")
/**
 * Pose asset aliases for characters without dedicated sprite sheets yet.
 * Consumed by [[./VisualEffects.ts]].
 */

import type { PoseName } from '../../types/index.js';

const POSE_ALIASES: Partial<Record<Exclude<PoseName, null>, string>> = {
  chompiras_idle: 'chapulin_idle',
  chompiras_nervous: 'chapulin_panic',
  chompiras_crying: 'chapulin_panic',
  chompiras_relieved: 'chapulin_idle',
  peterete_smug: 'tripaseca_smug',
  peterete_thinking: 'tripaseca_smug',
  peterete_sweat: 'tripaseca_sweat',
  supersam_sweat: 'supersam_slam',
  peterete_panic: 'tripaseca_panic',
  peterete_breakdown: 'tripaseca_breakdown',
  jirafales_idle: 'judge_neutral',
  jirafales_smoking: 'judge_thinking',
  jirafales_angry: 'judge_shock',
  jirafales_shock: 'judge_shock',
  jaimito_idle: 'donramon_idle',
  jaimito_tired: 'donramon_sweat',
  jaimito_proud: 'donramon_point',
  clotilde_idle: 'florinda_idle',
  clotilde_flustered: 'florinda_fanning',
  clotilde_mysterious: 'florinda_shock'
};

export function resolvePoseAsset(poseName: PoseName): string | null {
  if (!poseName) return null;
  return POSE_ALIASES[poseName] ?? poseName;
}
