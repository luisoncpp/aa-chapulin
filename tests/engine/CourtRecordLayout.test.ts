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

describe('court record evidence detail pane', () => {
  const css = fs.readFileSync(path.resolve(__dirname, '../../style.css'), 'utf-8');
  const details = cssRule(css, '#evidence-details');
  const description = cssRule(css, '#evidence-description');
  const present = cssRule(css, '#btn-modal-present');

  it('lets the details column shrink inside the overflow-hidden modal body', () => {
    expect(cssProp(details, 'min-height')).toBe('0');
    expect(cssProp(details, 'overflow')).toBe('hidden');
  });

  it('caps the description at six lines and scrolls the rest', () => {
    expect(cssProp(description, 'min-height')).toBe('0');
    expect(cssProp(description, 'overflow-y')).toBe('auto');
    expect(cssProp(description, 'max-height')).toBe('calc(1.3em * 6)');
    expect(cssProp(description, 'line-height')).toBe('1.3');
  });

  it('keeps Presentar from shrinking when the description is long', () => {
    expect(cssProp(present, 'flex-shrink')).toBe('0');
  });
});

describe('climax present prompt layout', () => {
  const css = fs.readFileSync(path.resolve(__dirname, '../../style.css'), 'utf-8');
  const hud = cssRule(css, '#climax-present-prompt');
  const modal = cssRule(css, '#court-record-present-prompt');

  it('does not steal clicks on the courtroom HUD', () => {
    expect(cssProp(hud, 'pointer-events')).toBe('none');
  });

  it('does not grow the court record body when the question wraps', () => {
    expect(cssProp(modal, 'flex-shrink')).toBe('0');
  });
});
