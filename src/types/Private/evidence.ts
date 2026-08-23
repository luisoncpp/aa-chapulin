/**
 * Evidence & Court Record Type Definitions
 */

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
