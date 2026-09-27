// @Architecture(descriptionShort="Per-case character record registry accessor", type="catalog", icon="database")
/**
 * Character Record (Acta de Personajes) registry.
 * Cases 0–5 declare profiles; unregistered cases return an empty map so the
 * Acta renders exactly as it did before the tab bar existed (spec §6.1).
 */

import type { CaseId, Language, ProfileCatalogMap, ProfileId } from '../../types/index.js';
import { CASE1_PROFILES_EN } from './ProfileCatalogCase1En.js';
import { CASE1_PROFILES_ES } from './ProfileCatalogCase1Es.js';
import { CASE2_PROFILES_EN } from './ProfileCatalogCase2En.js';
import { CASE2_PROFILES_ES } from './ProfileCatalogCase2Es.js';
import { CASE3_PROFILES_EN } from './ProfileCatalogCase3En.js';
import { CASE3_PROFILES_ES } from './ProfileCatalogCase3Es.js';
import { CASE4_PROFILES_EN } from './ProfileCatalogCase4En.js';
import { CASE4_PROFILES_ES } from './ProfileCatalogCase4Es.js';
import { CASE0_PROFILES_EN } from './ProfileCatalogCase0En.js';
import { CASE0_PROFILES_ES } from './ProfileCatalogCase0Es.js';
import { CASE5_PROFILES_EN } from './ProfileCatalogCase5En.js';
import { CASE5_PROFILES_ES } from './ProfileCatalogCase5Es.js';

const EMPTY: ProfileCatalogMap = {};

const PROFILE_CATALOGS: Partial<Record<CaseId, Record<Language, ProfileCatalogMap>>> = {
  case0: { es: CASE0_PROFILES_ES, en: CASE0_PROFILES_EN },
  case1: { es: CASE1_PROFILES_ES, en: CASE1_PROFILES_EN },
  case2: { es: CASE2_PROFILES_ES, en: CASE2_PROFILES_EN },
  case3: { es: CASE3_PROFILES_ES, en: CASE3_PROFILES_EN },
  case4: { es: CASE4_PROFILES_ES, en: CASE4_PROFILES_EN },
  case5: { es: CASE5_PROFILES_ES, en: CASE5_PROFILES_EN }
};

const CASES_IN_ACT_ORDER: readonly CaseId[] = ['case0', 'case2', 'case1', 'case3', 'case4', 'case5'];

export function getProfileCatalog(lang: Language = 'es', caseId?: CaseId): ProfileCatalogMap {
  const catalog = caseId ? PROFILE_CATALOGS[caseId] : undefined;
  if (!catalog) return EMPTY;
  return catalog[lang];
}

export function getPreviouslyKnownProfileIds(caseId: CaseId): ProfileId[] {
  const activeIndex = CASES_IN_ACT_ORDER.indexOf(caseId);
  if (activeIndex <= 0) return [];

  const currentCatalog = getProfileCatalog('es', caseId);
  const knownIds = new Set<ProfileId>();
  CASES_IN_ACT_ORDER.slice(0, activeIndex).forEach((earlierCaseId) => {
    Object.keys(getProfileCatalog('es', earlierCaseId)).forEach((profileId) => {
      if (profileId in currentCatalog) knownIds.add(profileId as ProfileId);
    });
  });
  return [...knownIds];
}
