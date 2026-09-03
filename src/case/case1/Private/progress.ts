// @Architecture(descriptionShort="Case 1 required evidence, debug inventory, and unlock locations", type="data", icon="layers")
/**
 * Case 1 progression constants.
 */

import type { EvidenceId, LocationId } from '../../../types/index.js';

export const CASE1_REQUIRED: EvidenceId[] = [
  'chipote_chillon', 'pastillas_chiquitolina', 'antenitas_vinil',
  'informe_medico', 'foto_crimen'
];
export const CASE1_DEBUG: EvidenceId[] = [...CASE1_REQUIRED, 'bolsa_dolares'];
export const CASE1_UNLOCK: LocationId[] = ['detention'];
