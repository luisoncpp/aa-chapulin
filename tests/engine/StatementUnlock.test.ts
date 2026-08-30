// @Architecture(descriptionShort="Unit tests for pressure-unlocked testimony visibility", type="test", icon="panel")
import { describe, expect, it } from 'vitest';
import {
  findUnlockedByPress,
  testimonyHasHiddenStatements,
  visibleStatements
} from '../../src/engine/Private/StatementUnlock.js';
import type { Testimony } from '../../src/types/index.js';

const testimony: Testimony = {
  title: 'Test',
  witness: 'WITNESS',
  bgm: 'cross_exam_moderato',
  statements: [
    { id: 'a', speaker: 'WITNESS', text: 'First' },
    { id: 'b', speaker: 'WITNESS', text: 'Hidden', unlockedBy: 'a' },
    { id: 'c', speaker: 'WITNESS', text: 'Always visible' }
  ]
};

describe('StatementUnlock', () => {
  it('filters statements until the unlocking press occurs', () => {
    const pressed = new Set<string>();
    expect(visibleStatements(testimony, pressed).map((s) => s.id)).toEqual(['a', 'c']);
    pressed.add('a');
    expect(visibleStatements(testimony, pressed).map((s) => s.id)).toEqual(['a', 'b', 'c']);
  });

  it('finds the statement unlocked by a press id', () => {
    expect(findUnlockedByPress(testimony, 'a')?.id).toBe('b');
    expect(findUnlockedByPress(testimony, 'c')).toBeNull();
  });

  it('detects hidden statements in a testimony', () => {
    expect(testimonyHasHiddenStatements(testimony)).toBe(true);
    expect(testimonyHasHiddenStatements({
      title: 'Open',
      witness: 'WITNESS',
      bgm: 'cross_exam_moderato',
      statements: [{ id: 'x', speaker: 'WITNESS', text: 'Only one' }]
    })).toBe(false);
  });
});
