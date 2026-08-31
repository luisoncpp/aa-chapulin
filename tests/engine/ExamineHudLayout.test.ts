// @Architecture(descriptionShort="Pins examine HUD so it cannot steal hotspot hits", type="test", icon="layout")
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

function px(value: string, label: string): number {
  const match = value.match(/^([\d.]+)px$/);
  if (!match) throw new Error(`${label} must be px, got "${value}"`);
  return Number(match[1]);
}

describe('examine HUD does not occlude hotspot hit-testing', () => {
  const css = fs.readFileSync(path.resolve(__dirname, '../../style.css'), 'utf-8');
  const bar = cssRule(css, '#controls-bar');
  const btn = cssRule(css, '.menu-btn');
  const examineBar = cssRule(css, '#game-screen.examine-mode #controls-bar');
  const examineBox = cssRule(css, '#dialogue-box.examine-mode');

  it('lets clicks pass through empty controls-bar space onto hotspots', () => {
    expect(cssProp(bar, 'pointer-events')).toBe('none');
    expect(cssProp(btn, 'pointer-events')).toBe('auto');
  });

  it('drops the examine back button onto the shrunk dialogue stack', () => {
    const idleBottom = px(cssProp(bar, 'bottom'), 'controls-bar bottom');
    const examineBottom = px(cssProp(examineBar, 'bottom'), 'examine controls-bar bottom');
    const examineBoxH = px(cssProp(examineBox, 'height'), 'examine dialogue height');
    expect(idleBottom).toBe(138);
    expect(examineBottom).toBeLessThan(idleBottom);
    expect(examineBottom).toBeGreaterThan(examineBoxH);
  });
});
