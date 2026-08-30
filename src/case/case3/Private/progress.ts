// @Architecture(descriptionShort="Case 3 required evidence lists and location keys", type="data", icon="layers")
/**
 * Progression IDs shared by Spanish and English Case 3 scripts.
 */

import type { EvidenceId, LocationId } from '../../../types/index.js';

export const CASE3_DAY1_EVIDENCE: EvidenceId[] = [
  'lentes_barriga', 'informe_medico', 'marcas_carrito',
  'microfono_cabina', 'microfono_oro', 'cinta_salud'
];

export const CASE3_DAY2_EVIDENCE: EvidenceId[] = [
  'bitacora_transmision', 'receta_nono', 'libro_verde', 'programa_kermes'
];

export const CASE3_DAY3_EVIDENCE: EvidenceId[] = [
  'ataduras_bodega', 'cartucho_corte', 'cinta_sketch', 'boleta_empeno'
];

export const CASE3_DEBUG_EVIDENCE: EvidenceId[] = [
  ...CASE3_DAY1_EVIDENCE,
  ...CASE3_DAY2_EVIDENCE,
  ...CASE3_DAY3_EVIDENCE,
  'bolsa_papel', 'ventana_cabina'
];

export const CASE3_DAY1_UNLOCK: LocationId[] = [
  'centro_detencion', 'cabina_radio', 'plaza_kermes'
];
