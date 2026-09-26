// @Architecture(descriptionShort="Per-case character record registry accessor", type="catalog", icon="database")
/**
 * Character Record (Acta de Personajes) registry.
 * Cases 1 and 5 declare profiles; every other case returns an empty map so the
 * Acta renders exactly as it did before the tab bar existed (spec §6.1).
 */

import type { CaseId, Language, ProfileCatalogMap } from '../../types/index.js';
import { CASE1_PROFILES_EN } from './ProfileCatalogCase1En.js';
import { CASE1_PROFILES_ES } from './ProfileCatalogCase1Es.js';
import { CASE5_PROFILES_EN } from './ProfileCatalogCase5En.js';
import { CASE5_PROFILES_ES } from './ProfileCatalogCase5Es.js';

const EMPTY: ProfileCatalogMap = {};

const PROFILE_CATALOGS: Partial<Record<CaseId, Record<Language, ProfileCatalogMap>>> = {
  case1: { es: CASE1_PROFILES_ES, en: CASE1_PROFILES_EN },
  case5: { es: CASE5_PROFILES_ES, en: CASE5_PROFILES_EN }
};

export function getProfileCatalog(lang: Language = 'es', caseId?: CaseId): ProfileCatalogMap {
  const catalog = caseId ? PROFILE_CATALOGS[caseId] : undefined;
  if (!catalog) return EMPTY;
  return catalog[lang];
}
