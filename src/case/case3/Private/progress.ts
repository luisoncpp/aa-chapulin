// @Architecture(descriptionShort="Case 3 required evidence lists and location keys", type="data", icon="layers")
/**
 * Progression IDs shared by Spanish and English Case 3 scripts.
 * Day lists follow the spec §6.4 gating table: the LAST location of each day
 * must hand over at least one required item, because `checkTrialReadiness`
 * only inspects the inventory ([[src/state/Private/GameStateManager.ts]]).
 */

import type { EvidenceId, LocationId } from '../../../types/index.js';

/** Cabina B gives seven; `programa_kermes` closes the day in the plaza. */
export const CASE3_DAY1_EVIDENCE: EvidenceId[] = [
  'lentes_barriga', 'informe_barriga', 'marcas_carrito',
  'microfono_cabina', 'microfono_oro', 'cinta_salud',
  'ventana_cabina', 'programa_kermes'
];

/** `bitacora_transmision` closes the day at the precinct. */
export const CASE3_DAY2_EVIDENCE: EvidenceId[] = [
  'bitacora_transmision', 'receta_nono', 'libro_verde'
];

/** `cartucho_corte` and `boleta_empeno` close the day at the precinct. */
export const CASE3_DAY3_EVIDENCE: EvidenceId[] = [
  'ataduras_bodega', 'cinta_sketch', 'cartucho_corte', 'boleta_empeno'
];

export const CASE3_DEBUG_EVIDENCE: EvidenceId[] = [
  ...CASE3_DAY1_EVIDENCE,
  ...CASE3_DAY2_EVIDENCE,
  ...CASE3_DAY3_EVIDENCE,
  'bolsa_papel'
];

export const CASE3_DAY1_UNLOCK: LocationId[] = [
  'detention', 'cabina_radio', 'plaza_kermes'
];
