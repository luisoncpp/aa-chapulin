import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ThoughtEntrance } from '../../src/deduction/Private/ThoughtEntrance.js';

describe('court-to-thought entrance', () => {
  let stage: HTMLElement;
  let entrance: ThoughtEntrance;
  let animations: { pause: ReturnType<typeof vi.fn>; play: ReturnType<typeof vi.fn>;
    cancel: ReturnType<typeof vi.fn>; onfinish: (() => void) | null }[];
  beforeEach(() => {
    stage = document.createElement('div');
    stage.innerHTML = '<div class="court"><img class="defender"></div><div class="thought-space"></div>';
    animations = [];
    const animate = vi.fn(() => {
      const animation = { pause: vi.fn(), play: vi.fn(), cancel: vi.fn(), onfinish: null as (() => void) | null };
      animations.push(animation); return animation as unknown as Animation;
    });
    stage.querySelector<HTMLElement>('.court')!.animate = animate;
    stage.querySelector<HTMLElement>('.thought-space')!.animate = animate;
    entrance = new ThoughtEntrance(stage, 'donramon');
  });

  it('waits for the entrance to finish before beginning the first premise', () => {
    const complete = vi.fn(); entrance.play(/*reduced=*/false, complete);
    expect(entrance.active).toBe(true); expect(stage.dataset.entering).toBe('true');
    expect(complete).not.toHaveBeenCalled();
    animations.at(-1)!.onfinish!();
    expect(entrance.active).toBe(false); expect(stage.dataset.entering).toBeUndefined();
    expect(complete).toHaveBeenCalledTimes(1);
    entrance.cancel(); expect(complete).toHaveBeenCalledTimes(1);
  });

  it('pauses both camera and dissolve together under consultations', () => {
    entrance.play(/*reduced=*/false, vi.fn()); entrance.pause(/*paused=*/true);
    expect(animations.every(animation => animation.pause.mock.calls.length === 1)).toBe(true);
    entrance.pause(/*paused=*/false);
    expect(animations.every(animation => animation.play.mock.calls.length === 1)).toBe(true);
    entrance.cancel();
  });

  it('drops a late completion after cancel, load or teardown', () => {
    const complete = vi.fn(); entrance.play(/*reduced=*/false, complete);
    const lateFinish = animations.at(-1)!.onfinish!; entrance.cancel(); lateFinish();
    expect(complete).not.toHaveBeenCalled(); expect(entrance.active).toBe(false);
    expect(animations.every(animation => animation.cancel.mock.calls.length === 1)).toBe(true);
    const next = vi.fn(); entrance.play(/*reduced=*/false, next); lateFinish();
    expect(next).not.toHaveBeenCalled(); expect(entrance.active).toBe(true); entrance.cancel();
  });

  it('omits camera motion when reduced or animations are unavailable', () => {
    const complete = vi.fn(); entrance.play(/*reduced=*/true, complete);
    expect(animations).toHaveLength(0); expect(complete).toHaveBeenCalledTimes(1);
    Reflect.deleteProperty(stage.querySelector('.court')!, 'animate');
    entrance.play(/*reduced=*/false, complete);
    expect(animations).toHaveLength(0); expect(complete).toHaveBeenCalledTimes(2);
  });

  it('finishes once when reduced motion is enabled during zoom', () => {
    const complete = vi.fn(); entrance.play(/*reduced=*/false, complete); entrance.reduce(); entrance.reduce();
    expect(complete).toHaveBeenCalledTimes(1); expect(entrance.active).toBe(false);
  });
});
