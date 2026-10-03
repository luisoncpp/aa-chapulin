import { beforeEach, describe, it, expect, vi } from 'vitest';
import { DeductionSession } from '../../src/deduction/index.js';
import { DeductionSaves } from '../../src/deduction/Private/Saves.js';
import { demoSequence } from '../../src/demos/DeductionStory.js';

describe('isolated demo saves', () => {
  beforeEach(() => { localStorage.clear(); vi.restoreAllMocks(); });
  it('round-trips occupied slots without modifying game saves', () => {
    localStorage.setItem('ace_attorney_save_slots', 'original game saves');
    const saves = new DeductionSaves(demoSequence), session = new DeductionSession(demoSequence);
    session.advance(); expect(saves.write(3, session.snapshot())).toBe(true);
    expect(saves.read()[3]!.snapshot).toEqual(session.snapshot());
    expect(saves.read().filter(Boolean)).toHaveLength(1);
    expect(localStorage.getItem('ace_attorney_save_slots')).toBe('original game saves');
  });
  it('handles unavailable storage and damaged individual slots', () => {
    const saves = new DeductionSaves(demoSequence), session = new DeductionSession(demoSequence);
    saves.write(0, session.snapshot()); saves.write(1, session.snapshot());
    const key = localStorage.key(0)!; const slots = JSON.parse(localStorage.getItem(key)!);
    slots[0].snapshot.step = -1; localStorage.setItem(key, JSON.stringify(slots));
    expect(saves.read()[0]).toBeNull(); expect(saves.read()[1]).not.toBeNull();
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw Error('disabled'); });
    expect(saves.write(2, session.snapshot())).toBe(false);
  });
});
