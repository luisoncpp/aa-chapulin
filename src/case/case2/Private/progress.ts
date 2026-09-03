// @Architecture(descriptionShort="Case 2 required evidence, day lists, and unlock locations", type="data", icon="layers")
/**
 * Case 2 progression constants.
 */

import type { EvidenceId, LocationId } from '../../../types/index.js';

export const CASE2_DAY1_EVIDENCE: EvidenceId[] = [
  'palanca_rota', 'informe_boveda', 'reloj_pendulo',
  'aroma_dulce', 'plano_hacienda', 'caja_generador'
];

export const CASE2_DAY2_EVIDENCE: EvidenceId[] = [
  'multa_transito', 'registro_postal', 'lata_grasa',
  'antenitas_vinil', 'frasco_valeriana', 'molde_cera'
];

export const CASE2_UNLOCK: LocationId[] = ['boveda', 'restaurante'];
