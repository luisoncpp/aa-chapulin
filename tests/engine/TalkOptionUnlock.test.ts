// @Architecture(descriptionShort="Unit tests for unlockable talk options and notification", type="test", icon="panel")
import { describe, expect, it, vi } from 'vitest';
import {
  findNewlyUnlockedTalkOptions,
  isTalkOptionUnlocked,
  notifyNewlyUnlocked,
  visibleTalkOptions
} from '../../src/engine/Private/TalkOptionUnlock.js';
import { GameStateManager } from '../../src/state/index.js';
import type { TalkOption } from '../../src/types/index.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('TalkOptionUnlock', () => {
  const options: TalkOption[] = [
    { id: 'opt_intro', label: 'Intro Topic', dialogue: [] },
    { id: 'opt_sub', label: 'Unlocked by Talk', unlockedByTalk: 'opt_intro', dialogue: [] },
    { id: 'opt_clue', label: 'Unlocked by Hotspot', unlockedByHotspot: 'desk_hotspot', dialogue: [] },
    {
      id: 'opt_cond',
      label: 'Unlocked by Condition',
      condition: (flags) => Boolean(flags.custom_flag),
      dialogue: []
    }
  ];

  it('unconditionally unlocks options without requirements', () => {
    const state = new GameStateManager();
    expect(isTalkOptionUnlocked(options[0], state)).toBe(true);
  });

  it('unlocks option only after required talk dialogue is completed', () => {
    const state = new GameStateManager();
    expect(isTalkOptionUnlocked(options[1], state)).toBe(false);
    state.markTalkCompleted('opt_intro');
    expect(isTalkOptionUnlocked(options[1], state)).toBe(true);
  });

  it('unlocks option only after required hotspot is examined', () => {
    const state = new GameStateManager();
    expect(isTalkOptionUnlocked(options[2], state)).toBe(false);
    state.markHotspotExamined('desk_hotspot');
    expect(isTalkOptionUnlocked(options[2], state)).toBe(true);
  });

  it('unlocks option when custom condition evaluates to true', () => {
    const state = new GameStateManager();
    expect(isTalkOptionUnlocked(options[3], state)).toBe(false);
    state.flags.custom_flag = true;
    expect(isTalkOptionUnlocked(options[3], state)).toBe(true);
  });

  it('filters talk options to only those currently visible', () => {
    const state = new GameStateManager();
    expect(visibleTalkOptions(options, state).map((o) => o.id)).toEqual(['opt_intro']);

    state.markTalkCompleted('opt_intro');
    state.markHotspotExamined('desk_hotspot');
    expect(visibleTalkOptions(options, state).map((o) => o.id)).toEqual([
      'opt_intro',
      'opt_sub',
      'opt_clue'
    ]);
  });

  it('detects newly unlocked options and suppresses repeat notifications', () => {
    const state = new GameStateManager();

    // Before unlock: no newly unlocked
    expect(findNewlyUnlockedTalkOptions(options, state)).toEqual([]);

    // Complete opt_intro -> opt_sub should be newly unlocked
    state.markTalkCompleted('opt_intro');
    const newly = findNewlyUnlockedTalkOptions(options, state);
    expect(newly.map((o) => o.id)).toEqual(['opt_sub']);
    expect(state.flags.notified_unlocked_talk_opt_sub).toBe(true);

    // Calling again does not re-return already notified option
    expect(findNewlyUnlockedTalkOptions(options, state)).toEqual([]);
  });

  it('triggers sound and notification element when newly unlocked', () => {
    const dom = setupDomHarness();
    const state = new GameStateManager();
    const soundEngine = { playRealization: vi.fn() } as any;

    state.markTalkCompleted('opt_intro');
    notifyNewlyUnlocked(options, { dom, state, soundEngine });

    expect(soundEngine.playRealization).toHaveBeenCalledTimes(1);
    expect(dom.gameNotificationEl.textContent).toContain('Unlocked by Talk');
    expect(dom.gameNotificationEl.classList.contains('notif-slide')).toBe(true);
    expect(dom.gameNotificationEl.classList.contains('hidden')).toBe(false);
  });

  it('unlocks option if either talk OR hotspot is completed when both are configured', () => {
    const dualOption: TalkOption = {
      id: 'dual',
      label: 'Dual Unlock',
      unlockedByTalk: 'talk_a',
      unlockedByHotspot: 'hotspot_b',
      dialogue: []
    };
    const state = new GameStateManager();
    expect(isTalkOptionUnlocked(dualOption, state)).toBe(false);

    // Unlocking via talk satisfies requirement
    state.markTalkCompleted('talk_a');
    expect(isTalkOptionUnlocked(dualOption, state)).toBe(true);

    // Unlocking via hotspot also satisfies requirement
    const state2 = new GameStateManager();
    expect(isTalkOptionUnlocked(dualOption, state2)).toBe(false);
    state2.markHotspotExamined('hotspot_b');
    expect(isTalkOptionUnlocked(dualOption, state2)).toBe(true);
  });
});
