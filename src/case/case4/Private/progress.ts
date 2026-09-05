// @Architecture(descriptionShort="Case 4 required evidence lists and location keys", type="data", icon="layers")
/**
 * Progression IDs shared by Spanish and English Case 4 scripts.
 * Day lists follow spec §6.4: the LAST location of each day must hand over
 * at least one required item because `checkTrialReadiness` is inventory-only.
 */

import type { EvidenceId, LocationId } from '../../../types/index.js';

/** `candado_cadena` closes the day at the terrace bar. */
export const CASE4_DAY1_EVIDENCE: EvidenceId[] = [
  'informe_policial', 'foto_crimen', 'plano_hotel',
  'billetera_cuajinais', 'candado_cadena'
];

/** `informe_forense` closes the day at the precinct. */
export const CASE4_DAY2_EVIDENCE: EvidenceId[] = [
  'residuos_manos', 'casquillo_fogueo',
  'registro_montacargas', 'informe_forense'
];

/** `nota_amenaza` closes the day at detention on day 3. */
export const CASE4_DAY3_EVIDENCE: EvidenceId[] = [
  'copa_vino', 'botella_vino', 'boleta_baccarat',
  'baul_etiquetas', 'sello_lacre', 'nota_amenaza'
];

export const CASE4_DEBUG_EVIDENCE: EvidenceId[] = [
  ...CASE4_DAY1_EVIDENCE,
  ...CASE4_DAY2_EVIDENCE,
  ...CASE4_DAY3_EVIDENCE,
  'insignia_abogado'
];

export const CASE4_DAY1_UNLOCK: LocationId[] = [
  'detention', 'hotel_lobby', 'hotel_suite', 'hotel_terraza'
];
