// @Architecture(descriptionShort="Filters talk options unlocked by previous dialogues or hotspots", type="util", icon="panel")
/**
 * Talk option visibility for conditionally unlocked investigation topics.
 * Used by [[./InvestigationController.ts]].
 */

import type { SoundEngine } from '../../audio/index.js';
import { i18n } from '../../i18n/index.js';
import type { GameStateManager } from '../../state/index.js';
import type { TalkOption } from '../../types/index.js';
import type { DomElements } from './DomElements.js';
import { VisualEffects } from './VisualEffects.js';

export interface UnlockNotifierDeps {
  dom: DomElements;
  state: GameStateManager;
  soundEngine: SoundEngine;
}

// fallow-ignore-next-line unused-export, complexity
export function isTalkOptionUnlocked(opt: TalkOption, state: GameStateManager): boolean {
  if (opt.unlockedByTalk && opt.unlockedByHotspot) {
    if (!state.isTalkCompleted(opt.unlockedByTalk) && !state.isHotspotExamined(opt.unlockedByHotspot)) {
      return false;
    }
  } else {
    if (opt.unlockedByTalk && !state.isTalkCompleted(opt.unlockedByTalk)) return false;
    if (opt.unlockedByHotspot && !state.isHotspotExamined(opt.unlockedByHotspot)) return false;
  }
  if (opt.condition && !opt.condition(state.flags)) return false;
  return true;
}

export function visibleTalkOptions(options: TalkOption[], state: GameStateManager): TalkOption[] {
  return options.filter((opt) => isTalkOptionUnlocked(opt, state));
}

// fallow-ignore-next-line complexity
function shouldNotifyOption(opt: TalkOption, state: GameStateManager): boolean {
  const isConditional = Boolean(opt.unlockedByTalk || opt.unlockedByHotspot || opt.condition);
  if (!isConditional) return false;
  const flagKey = `notified_unlocked_talk_${opt.id}`;
  if (state.flags[flagKey]) return false;
  return isTalkOptionUnlocked(opt, state);
}

// fallow-ignore-next-line unused-export
export function findNewlyUnlockedTalkOptions(
  options: TalkOption[],
  state: GameStateManager
): TalkOption[] {
  const newlyUnlocked: TalkOption[] = [];
  options.forEach((opt) => {
    if (!shouldNotifyOption(opt, state)) return;
    state.flags[`notified_unlocked_talk_${opt.id}`] = true;
    newlyUnlocked.push(opt);
  });
  return newlyUnlocked;
}

export function notifyNewlyUnlocked(
  options: TalkOption[] | undefined,
  deps: UnlockNotifierDeps
): void {
  if (!options) return;
  const newlyUnlocked = findNewlyUnlockedTalkOptions(options, deps.state);
  newlyUnlocked.forEach((opt) => {
    deps.soundEngine.playRealization();
    VisualEffects.showNotification(
      deps.dom.gameNotificationEl,
      i18n.t.notifDialogueUnlocked(opt.label)
    );
  });
}
