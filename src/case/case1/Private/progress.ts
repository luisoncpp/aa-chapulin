// @Architecture(descriptionShort="Case 1 required evidence, profiles and location keys", type="data", icon="layers")
/**
 * Progression IDs shared by the Spanish and English Case 1 scripts.
 * Spec §8.1: `checkTrialReadiness` is inventory-only, so the LAST location of
 * each day must hand over a required item.
 */

import type { EvidenceId, LocationId, ProfileId } from '../../../types/index.js';

/** `informe_medico` closes day 1 at the clinic. */
export const CASE1_DAY1_EVIDENCE: EvidenceId[] = [
  'parte_detencion', 'chipote_chillon', 'pastillas_chiquitolina', 'antenitas_vinil',
  'chicharra_oro', 'vitrina_rota', 'rejilla_ducto', 'informe_medico'
];

/** `bitacora_ronda` closes day 2 at the clinic's second visit. */
export const CASE1_DAY2_EVIDENCE: EvidenceId[] = [
  'bolsa_dolares', 'ficha_museo', 'foto_crimen', 'bitacora_ronda'
];

export const CASE1_DEBUG_EVIDENCE: EvidenceId[] = [
  'insignia_abogado',
  ...CASE1_DAY1_EVIDENCE,
  ...CASE1_DAY2_EVIDENCE,
  'plano_pasillo'
];

export const CASE1_DEBUG_PROFILES: ProfileId[] = [
  'perfil_chapulin', 'perfil_donramon', 'perfil_supersam', 'perfil_tripaseca',
  'perfil_florinda', 'perfil_jirafales', 'perfil_almanegra'
];

export const CASE1_DAY1_UNLOCK: LocationId[] = ['detention', 'museo_sala2', 'clinica'];

/**
 * Day 2 opens only the loading yard: `cuarto_camaras` and `clinica_d2` are
 * unlocked by the day's own chain (spec §8.1).
 */
export const CASE1_DAY2_UNLOCK: LocationId[] = ['patio_carga'];
