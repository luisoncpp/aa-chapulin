// @Architecture(descriptionShort="Case 5 court record items in Spanish", type="catalog", icon="database")
/**
 * Spanish Case 5 evidence catalog — merged when getEvidenceCatalog(lang, 'case5').
 * Spec docs/specs/case-5-el-tomo-trece.md §5: observations only in initial desc.
 */

import type { EvidenceItem } from '../../types/index.js';
import { CASE5_EVIDENCE_ES_A } from './EvidenceCatalogCase5EsA.js';
import { CASE5_EVIDENCE_ES_B } from './EvidenceCatalogCase5EsB.js';

export const CASE5_EVIDENCE_ES: Record<string, EvidenceItem> = {
  ...CASE5_EVIDENCE_ES_A,
  ...CASE5_EVIDENCE_ES_B
};
