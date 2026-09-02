// @Architecture(descriptionShort="Master database of bilingual case evidence items", type="catalog", icon="database")
/**
 * Master Evidence Catalog Database (Spanish & English)
 * Registry for [[./GameStateManager.ts]] and [[src/engine/Private/ModalManager.ts]].
 */

import type { CaseId, EvidenceCatalogMap, Language } from '../../types/index.js';
import { CASE2_EVIDENCE_EN, CASE2_EVIDENCE_ES } from './EvidenceCatalogCase2.js';
import { CASE3_EVIDENCE_EN, CASE3_EVIDENCE_ES } from './EvidenceCatalogCase3.js';

// @Section(Spanish Evidence Catalog)
// fallow-ignore-next-line unused-export
export const EVIDENCE_CATALOG_ES: EvidenceCatalogMap = {
  insignia_abogado: {
    id: 'insignia_abogado',
    name: 'Insignia de Abogado CH',
    icon: 'assets/insignia_abogado.webp',
    desc: 'Insignia del Abogado Defensor. Don Ramón la porta con orgullo para defender al Chapulín (¡y pagar la renta!).'
  },
  chipote_chillon: {
    id: 'chipote_chillon',
    name: 'Chipote Chillón',
    icon: 'assets/chipote_chillon.webp',
    desc: 'Arma supuestamente letal. Hecho de vinil suave y goma hueca.',
    updatedDesc: 'Arma supuestamente letal. Vinil suave y hueco; al apretarlo emite un cómico chillido. Imposible fracturar un cráneo.'
  },
  pastillas_chiquitolina: {
    id: 'pastillas_chiquitolina',
    name: 'Pastillas de Chiquitolina',
    icon: 'assets/pastillas_chiquitolina.webp',
    desc: 'Píldoras que reducen el tamaño de quien las toma al de un ratón durante 15 minutos.'
  },
  antenitas_vinil: {
    id: 'antenitas_vinil',
    name: 'Antenitas de Vinil',
    icon: 'assets/antenitas_vinil.webp',
    desc: 'Detectan la presencia del enemigo.',
    updatedDesc: 'Detectan la presencia del enemigo. Registraron actividad sospechosa a las 8:45 PM.'
  },
  informe_medico: {
    id: 'informe_medico',
    name: 'Informe Médico de Alma Negra',
    icon: 'assets/informe_medico.webp',
    desc: 'El guardia fue noqueado por un saco pesado con monedas metálicas, no por goma/vinil.'
  },
  foto_crimen: {
    id: 'foto_crimen',
    name: 'Foto del Sospechoso',
    icon: 'assets/foto_crimen.webp',
    desc: 'Foto de seguridad a las 9:00 PM. El logo del pecho dice "HC" (¡está invertido en un espejo!).'
  },
  chicharra_oro: {
    id: 'chicharra_oro',
    name: 'Chicharra Paralizadora de Oro',
    icon: 'assets/chicharra_oro.webp',
    desc: 'La reliquia invaluable robada. Quien la hace sonar una vez paraliza todo a su alrededor.'
  },
  bolsa_dolares: {
    id: 'bolsa_dolares',
    name: 'Bolsa de Dólares de Super Sam',
    icon: 'assets/bolsa_dolares.webp',
    desc: 'Saco pesado con monedas de plata y billetes con el lema "Time is Money".'
  },
  ...CASE2_EVIDENCE_ES
} as EvidenceCatalogMap;

// @Section(English Evidence Catalog)
// fallow-ignore-next-line unused-export
export const EVIDENCE_CATALOG_EN: EvidenceCatalogMap = {
  insignia_abogado: {
    id: 'insignia_abogado',
    name: "Attorney's Badge CH",
    icon: 'assets/insignia_abogado.webp',
    desc: 'Defense Attorney Badge. Don Ramón wears it proudly to defend El Chapulín (and pay his 14 months of rent!).'
  },
  chipote_chillon: {
    id: 'chipote_chillon',
    name: 'Chipote Chillón (Squeaky Mallet)',
    icon: 'assets/chipote_chillon.webp',
    desc: 'Supposedly lethal assault weapon. Made of soft vinyl and hollow rubber.',
    updatedDesc: 'Supposedly lethal assault weapon. Soft hollow vinyl; squeezing it emits a silly squeak. Impossible to fracture a skull.'
  },
  pastillas_chiquitolina: {
    id: 'pastillas_chiquitolina',
    name: 'Pastillas de Chiquitolina (Shrinking Pills)',
    icon: 'assets/pastillas_chiquitolina.webp',
    desc: 'Pills that reduce the taker to mouse size for 15 minutes.'
  },
  antenitas_vinil: {
    id: 'antenitas_vinil',
    name: 'Antenitas de Vinil (Vinyl Antennae)',
    icon: 'assets/antenitas_vinil.webp',
    desc: 'Detect enemy presence.',
    updatedDesc: 'Detect enemy presence. Recorded suspicious activity at 8:45 PM.'
  },
  informe_medico: {
    id: 'informe_medico',
    name: "Alma Negra's Medical Report",
    icon: 'assets/informe_medico.webp',
    desc: 'The guard was knocked out by a heavy sack with metal coins, not rubber/vinyl.'
  },
  foto_crimen: {
    id: 'foto_crimen',
    name: 'Suspect Photograph',
    icon: 'assets/foto_crimen.webp',
    desc: 'Security photo at 9:00 PM. Chest emblem says "HC" (it is reversed in a mirror!).'
  },
  chicharra_oro: {
    id: 'chicharra_oro',
    name: 'Golden Paralyzing Chicharra',
    icon: 'assets/chicharra_oro.webp',
    desc: 'The stolen priceless relic. Sounding it once immobilizes everyone nearby.'
  },
  bolsa_dolares: {
    id: 'bolsa_dolares',
    name: "Super Sam's Dollar Bag",
    icon: 'assets/bolsa_dolares.webp',
    desc: 'Heavy sack with silver coins and bills carrying the motto "Time is Money".'
  },
  ...CASE2_EVIDENCE_EN
} as EvidenceCatalogMap;

// @Section(Evidence Registry Accessor)
// fallow-ignore-next-line unused-export
export const EVIDENCE_CATALOG: EvidenceCatalogMap = EVIDENCE_CATALOG_ES;

export function getEvidenceCatalog(lang: Language = 'es', caseId?: CaseId): EvidenceCatalogMap {
  if (caseId === 'case3') {
    return (lang === 'en' ? CASE3_EVIDENCE_EN : CASE3_EVIDENCE_ES) as EvidenceCatalogMap;
  }
  return lang === 'en' ? EVIDENCE_CATALOG_EN : EVIDENCE_CATALOG_ES;
}
