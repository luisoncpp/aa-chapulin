// @Architecture(descriptionShort="Regression tests for court record grid cell size and overflow", type="test", icon="layout")
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

function cssRule(css: string, selector: string): string {
  const escaped = selector.replace(/[.#]/g, '\\$&');
  const match = css.match(new RegExp(`${escaped}\\s*\\{([^}]+)\\}`));
  return match?.[1] ?? '';
}

function cssProp(rule: string, name: string): string {
  const match = rule.match(new RegExp(`${name}:\\s*([^;]+)`));
  return match?.[1]?.trim() ?? '';
}

describe('court record evidence grid layout', () => {
  const css = fs.readFileSync(path.resolve(__dirname, '../../style.css'), 'utf-8');
  const grid = cssRule(css, '#evidence-grid');
  const card = cssRule(css, '.evidence-card');
  const label = cssRule(css, '.evidence-card p');

  it('uses equal shrinking columns so long labels cannot widen a track', () => {
    const columns = cssProp(grid, 'grid-template-columns');
    expect(columns).toMatch(/repeat\(\s*3\s*,\s*minmax\(\s*0\s*,\s*1fr\s*\)\s*\)/);
    expect(cssProp(grid, 'min-width')).toBe('0');
    expect(cssProp(card, 'min-width')).toBe('0');
  });

  it('scrolls only vertically so a horizontal bar cannot appear', () => {
    expect(cssProp(grid, 'overflow-x')).toBe('clip');
    expect(cssProp(grid, 'overflow-y')).toBe('auto');
  });

  it('wraps evidence names on two lines instead of a single ellipsis', () => {
    expect(cssProp(label, 'white-space')).not.toBe('nowrap');
    expect(cssProp(label, '-webkit-line-clamp')).toBe('2');
    expect(cssProp(label, 'line-clamp')).toBe('2');
  });
});
