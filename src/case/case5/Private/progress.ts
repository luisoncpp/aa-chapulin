// @Architecture(descriptionShort="Case 5 required evidence lists and location keys", type="data", icon="layers")
/**
 * Progression IDs shared by Spanish and English Case 5 scripts.
 * Last location of each day hands over a required item (inventory-only gating).
 */

import type { EvidenceId, LocationId, ProfileId } from '../../../types/index.js';

export const CASE5_DAY1_EVIDENCE: EvidenceId[] = [
  'parte_detencion', 'esquina_tarjeta', 'libro_visitas', 'plano_archivo',
  'informe_forense_c5', 'tomo_caido', 'estante_consulta', 'expediente_casimiro'
];

export const CASE5_DAY2_EVIDENCE: EvidenceId[] = [
  'recibo_renta', 'nota_mecanografiada', 'acuse_notificacion',
  'credencial_sindico', 'inventario_1971', 'expediente_serie'
];

export const CASE5_DAY3_EVIDENCE: EvidenceId[] = [
  'huacal_9', 'fichero_cedulario', 'maquina_escribir',
  'oficio_diligencia', 'efectos_casimiro'
];

export const CASE5_DAY4_EVIDENCE: EvidenceId[] = ['bitacora_caldera'];

export const CASE5_DEBUG_EVIDENCE: EvidenceId[] = [
  ...CASE5_DAY1_EVIDENCE,
  ...CASE5_DAY2_EVIDENCE,
  ...CASE5_DAY3_EVIDENCE,
  ...CASE5_DAY4_EVIDENCE,
  'insignia_abogado', 'libro_peritos', 'ficha_domicilio'
];

export const CASE5_DEBUG_PROFILES: ProfileId[] = [
  'perfil_donramon', 'perfil_chapulin', 'perfil_casimiro', 'perfil_supersam',
  'perfil_berrondo', 'perfil_nicanor', 'perfil_genoveva', 'perfil_sargento',
  'perfil_barriga', 'perfil_chompiras'
];

export const CASE5_DAY1_UNLOCK: LocationId[] = [
  'celda_c5', 'archivo_vestibulo', 'archivo_pasillo7'
];
