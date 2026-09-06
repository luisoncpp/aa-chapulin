// @Architecture(descriptionShort="Case 4 required evidence lists and location keys", type="data", icon="layers")
/**
 * Progression IDs shared by Spanish and English Case 4 scripts.
 * Day lists follow spec §6.4: the LAST location of each day must hand over
 * at least one required item because `checkTrialReadiness` is inventory-only.
 */

import type { EvidenceId, LocationId } from '../../../types/index.js';

/** `candado_cadena` closes day 1 at the terrace. */
export const CASE4_DAY1_EVIDENCE: EvidenceId[] = [
  'informe_policial', 'foto_crimen', 'billetera_cuajinais',
  'orden_servicios', 'plano_hotel', 'candado_cadena'
];

/** `toxicologia_vino` closes day 2 at the precinct. */
export const CASE4_DAY2_EVIDENCE: EvidenceId[] = [
  'residuos_manos', 'casquillo_fogueo', 'registro_montacargas',
  'baul_etiquetas', 'copa_vino', 'toxicologia_vino'
];

/** `sello_lacre` closes day 3 at delegacion_d3. */
export const CASE4_DAY3_EVIDENCE: EvidenceId[] = [
  'botella_vino', 'boleta_baccarat', 'nota_amenaza', 'sello_lacre'
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
