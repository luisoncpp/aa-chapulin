// @Architecture(descriptionShort="Filters testimony statements unlocked by pressing", type="util", icon="panel")
/**
 * Statement visibility for pressure-unlocked testimony lines.
 * Used by [[./TrialController.ts]].
 */

import type { Statement, Testimony } from '../../types/index.js';

export function visibleStatements(testimony: Testimony, pressedIds: Set<string>): Statement[] {
  return testimony.statements.filter(
    (stmt) => !stmt.unlockedBy || pressedIds.has(stmt.unlockedBy)
  );
}

export function findUnlockedByPress(testimony: Testimony, pressedId: string): Statement | null {
  return testimony.statements.find((stmt) => stmt.unlockedBy === pressedId) ?? null;
}

export function testimonyHasHiddenStatements(testimony: Testimony): boolean {
  return testimony.statements.some((stmt) => Boolean(stmt.unlockedBy));
}
