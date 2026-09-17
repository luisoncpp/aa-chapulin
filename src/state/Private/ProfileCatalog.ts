// @Architecture(descriptionShort="Per-case character record registry accessor", type="catalog", icon="database")
/**
 * Character Record (Acta de Personajes) registry.
 * Only Case 1 declares profiles; every other case returns an empty map so the
 * Acta renders exactly as it did before the tab bar existed (spec §6.1).
 */

import type { CaseId, Language, ProfileCatalogMap } from '../../types/index.js';
import { CASE1_PROFILES_EN } from './ProfileCatalogCase1En.js';
import { CASE1_PROFILES_ES } from './ProfileCatalogCase1Es.js';

const EMPTY: ProfileCatalogMap = {};

export function getProfileCatalog(lang: Language = 'es', caseId?: CaseId): ProfileCatalogMap {
  if (caseId !== 'case1') return EMPTY;
  return lang === 'en' ? CASE1_PROFILES_EN : CASE1_PROFILES_ES;
}
