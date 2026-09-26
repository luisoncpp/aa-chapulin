// @Architecture(descriptionShort="Shared helpers for Case 5 evidence catalogs", type="catalog", icon="database")
/**
 * ev() builder shared by Case 5 ES/EN catalog blocks.
 */

import type { EvidenceId, EvidenceItem } from '../../types/index.js';

export function evCase5(
  id: EvidenceId,
  text: { name: string; desc: string; updates?: string[]; icon?: string },
  detailedView?: EvidenceItem['detailedView']
): EvidenceItem {
  return {
    id,
    name: text.name,
    icon: text.icon ?? `assets/${id}.webp`,
    desc: text.desc,
    updates: text.updates,
    detailedView
  };
}
