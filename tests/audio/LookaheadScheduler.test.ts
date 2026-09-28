import { describe, expect, it, vi } from 'vitest';
import { LookaheadScheduler } from '../../src/audio/Private/Scheduler/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';

describe('LookaheadScheduler', () => {
  it('lands steps on exact multiples of the step when the timer advances unevenly', () => {
    vi.useFakeTimers();
    const ctx = new FakeAudioContext();
    const whens: number[] = [];
    const scheduler = new LookaheadScheduler((_step, when) => {
      whens.push(when);
    });
    scheduler.start({ ctx, bpm: 180, fromStep: 0 });
    vi.advanceTimersByTime(50);
    vi.advanceTimersByTime(13);
    vi.advanceTimersByTime(120);
    vi.advanceTimersByTime(7);
    const stepSec = 60 / 180 / 4;
    expect(whens.length).toBeGreaterThan(2);
    for (let i = 1; i < whens.length; i++) expect(whens[i] - whens[i - 1]).toBeCloseTo(stepSec, 5);
    scheduler.stop();
  });

  it('skips the gap instead of bursting notes that are already late', () => {
    vi.useFakeTimers();
    const ctx = new FakeAudioContext();
    const whens: number[] = [];
    const scheduler = new LookaheadScheduler((_step, when) => {
      whens.push(when);
    });
    scheduler.start({ ctx, bpm: 120, fromStep: 0 });
    whens.length = 0;
    ctx.currentTime = 5;
    vi.advanceTimersByTime(25);
    expect(whens.every((when) => when >= 5 - 0.05)).toBe(true);
    expect(whens.length).toBeLessThan(4);
    scheduler.stop();
  });
});
