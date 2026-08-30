// @Architecture(descriptionShort="Tests black cover fades between scenes", type="test", icon="layers")
import { describe, expect, it, beforeEach, vi } from 'vitest';
import { fadeToBlack, fadeThroughBlack, SCENE_FADE_MS } from '../../src/engine/Private/SceneFade.js';
import { setupDomHarness } from '../fakes/DomHarness.js';

describe('SceneFade', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('swaps while covered then reveals', () => {
    const dom = setupDomHarness();
    const covered = vi.fn();
    const revealed = vi.fn();
    fadeThroughBlack(dom.flashEl, covered, revealed);
    expect(dom.flashEl.classList.contains('hidden')).toBe(false);
    expect(covered).not.toHaveBeenCalled();
    vi.advanceTimersByTime(SCENE_FADE_MS);
    expect(covered).toHaveBeenCalledTimes(1);
    expect(revealed).not.toHaveBeenCalled();
    vi.advanceTimersByTime(SCENE_FADE_MS);
    expect(revealed).toHaveBeenCalledTimes(1);
    expect(dom.flashEl.classList.contains('hidden')).toBe(true);
  });

  it('stays black after fadeToBlack', () => {
    const dom = setupDomHarness();
    const covered = vi.fn();
    fadeToBlack(dom.flashEl, covered);
    vi.advanceTimersByTime(SCENE_FADE_MS);
    expect(covered).toHaveBeenCalledTimes(1);
    expect(dom.flashEl.classList.contains('hidden')).toBe(false);
    expect(dom.flashEl.style.opacity).toBe('1');
  });
});
