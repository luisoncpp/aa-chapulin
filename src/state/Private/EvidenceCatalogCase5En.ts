// @Architecture(descriptionShort="Case 5 court record items in English", type="catalog", icon="database")
/**
 * English Case 5 evidence catalog — merged when getEvidenceCatalog(lang, 'case5').
 * Adaptation, not literal translation; times use AM/PM.
 */

import type { EvidenceItem } from '../../types/index.js';
import { CASE5_EVIDENCE_EN_A } from './EvidenceCatalogCase5EnA.js';
import { CASE5_EVIDENCE_EN_B } from './EvidenceCatalogCase5EnB.js';

export const CASE5_EVIDENCE_EN: Record<string, EvidenceItem> = {
  ...CASE5_EVIDENCE_EN_A,
  ...CASE5_EVIDENCE_EN_B
};
