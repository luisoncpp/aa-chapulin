// @Architecture(descriptionShort="Post-press unlock notifications and press hints", type="util", icon="panel")
/**
 * Pressure testimony unlock side effects for [[./TrialController.ts]].
 */

import { i18n } from '../../i18n/index.js';
import type { SoundEngine } from '../../audio/index.js';
import type { DialogueLine, Statement, Testimony } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import {
  findUnlockedByPress,
  testimonyHasHiddenStatements,
  visibleStatements
} from './StatementUnlock.js';
import { VisualEffects } from './VisualEffects.js';

export function registerPress(
  testimony: Testimony,
  pressedIds: Set<string>,
  statementId: string
): Statement | null {
  pressedIds.add(statementId);
  return findUnlockedByPress(testimony, statementId);
}

export function notifyWitnessAddedStatement(
  dom: DomElements,
  soundEngine: SoundEngine
): void {
  VisualEffects.showNotification(dom.gameNotificationEl, i18n.t.notifWitnessAddedStatement);
  soundEngine.playRealization();
}

export function maybeQueuePressHint(
  testimony: Testimony | null,
  failedPresentCount: number,
  onQueueDialogue: (lines: DialogueLine[], onComplete?: () => void) => void,
  onResume: () => void
): boolean {
  if (!testimony || failedPresentCount < 2 || !testimonyHasHiddenStatements(testimony)) return false;
  onQueueDialogue(
    [{ speaker: 'CHAPULIN', text: i18n.t.pressHint, pose: 'chapulin_point' }],
  /*onComplete*/ onResume
  );
  return true;
}

export function indexInVisible(testimony: Testimony, pressedIds: Set<string>, statementId: string): number {
  return visibleStatements(testimony, pressedIds).findIndex((s) => s.id === statementId);
}
