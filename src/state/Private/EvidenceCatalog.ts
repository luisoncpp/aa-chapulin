// @Architecture(descriptionShort="Master database of bilingual case evidence items", type="catalog", icon="database")
/**
 * Master Evidence Catalog Database (Spanish & English)
 * Registry for [[./GameStateManager.ts]] and [[src/engine/Private/ModalManager.ts]].
 */

import type { CaseId, EvidenceCatalogMap, Language } from '../../types/index.js';
import { CASE2_EVIDENCE_EN, CASE2_EVIDENCE_ES } from './EvidenceCatalogCase2.js';
import { CASE3_EVIDENCE_EN, CASE3_EVIDENCE_ES } from './EvidenceCatalogCase3.js';
import { CASE4_EVIDENCE_EN, CASE4_EVIDENCE_ES } from './EvidenceCatalogCase4.js';
import { CASE5_EVIDENCE_EN, CASE5_EVIDENCE_ES } from './EvidenceCatalogCase5.js';
import { CASE0_EVIDENCE_EN } from './EvidenceCatalogCase0En.js';
import { CASE0_EVIDENCE_ES } from './EvidenceCatalogCase0Es.js';
import { CASE1_EVIDENCE_EN } from './EvidenceCatalogCase1En.js';
import { CASE1_EVIDENCE_ES } from './EvidenceCatalogCase1Es.js';

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
    desc: 'Arma supuestamente letal. El mazo del acusado.',
    updatedDesc: 'Arma supuestamente letal. Al apretarlo emite un cómico chillido. Imposible fracturar un cráneo.'
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
    desc: 'Pueden vibrar cerca de un enemigo o de una pista importante. No identifican qué las activó.',
    updatedDesc: 'Pueden vibrar cerca de un enemigo o de una pista importante. Registraron actividad sospechosa a las 8:45 PM, sin identificar la causa.'
  },
  informe_medico: {
    id: 'informe_medico',
    name: 'Informe Médico de Alma Negra',
    icon: 'assets/informe_medico.webp',
    desc: 'El guardia fue noqueado por un saco pesado con monedas metálicas, no por el chipote.'
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
    desc: 'Supposedly lethal assault weapon.',
    updatedDesc: 'Supposedly lethal assault weapon. Squeezing it emits a silly squeak. Impossible to fracture a skull.'
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
    desc: 'May vibrate near an enemy or an important clue. They do not identify what triggered them.',
    updatedDesc: 'May vibrate near an enemy or an important clue. They recorded suspicious activity at 8:45 PM without identifying the cause.'
  },
  informe_medico: {
    id: 'informe_medico',
    name: "Alma Negra's Medical Report",
    icon: 'assets/informe_medico.webp',
    desc: 'The guard was knocked out by a heavy sack with metal coins, not by the chipote.'
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

const ISOLATED_CATALOGS: Partial<Record<CaseId, Record<Language, EvidenceCatalogMap>>> = {
  case0: { es: CASE0_EVIDENCE_ES as EvidenceCatalogMap, en: CASE0_EVIDENCE_EN as EvidenceCatalogMap },
  case1: { es: CASE1_EVIDENCE_ES, en: CASE1_EVIDENCE_EN },
  case3: { es: CASE3_EVIDENCE_ES as EvidenceCatalogMap, en: CASE3_EVIDENCE_EN as EvidenceCatalogMap },
  case4: { es: CASE4_EVIDENCE_ES as EvidenceCatalogMap, en: CASE4_EVIDENCE_EN as EvidenceCatalogMap },
  case5: { es: CASE5_EVIDENCE_ES as EvidenceCatalogMap, en: CASE5_EVIDENCE_EN as EvidenceCatalogMap }
};

export function getEvidenceCatalog(lang: Language = 'es', caseId?: CaseId): EvidenceCatalogMap {
  const isolated = caseId ? ISOLATED_CATALOGS[caseId] : undefined;
  if (isolated) return isolated[lang];
  return lang === 'en' ? EVIDENCE_CATALOG_EN : EVIDENCE_CATALOG_ES;
}
