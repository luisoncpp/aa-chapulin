// @Architecture(descriptionShort="Type schemas for evidence items and court record catalog", type="types", icon="cube")
/**
 * Evidence & Court Record Type Definitions
 * Used by [[src/state/Private/EvidenceCatalog.ts]] and [[src/engine/Private/ModalManager.ts]].
 */

// @Section(Evidence Identifiers & Items)
export type EvidenceId =
  | 'insignia_abogado'
  | 'chipote_chillon'
  | 'pastillas_chiquitolina'
  | 'antenitas_vinil'
  | 'informe_medico'
  | 'foto_crimen'
  | 'chicharra_oro'
  | 'bolsa_dolares';

export interface EvidenceItem {
  id: EvidenceId;
  name: string;
  icon: string;
  desc: string;
}

export type EvidenceCatalogMap = Record<EvidenceId, EvidenceItem>;
