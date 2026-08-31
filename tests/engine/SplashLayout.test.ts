// @Architecture(descriptionShort="Regression tests for splash layout fitting the 540px stage", type="test", icon="layout")
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const STAGE_H = 540;
const BUTTON_COUNT = 4;
const TITLE_SHADOW_PX = 3;
const SUBTITLE_LINES = 1;

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
  if (!match) {
    throw new Error(`${label} must be px, got "${value}"`);
  }
  return Number(match[1]);
}

function verticalPadding(value: string, label: string): number {
  const parts = value.split(/\s+/).map((part) => px(part, label));
  return parts[0] + (parts.length >= 3 ? parts[2] : parts[0]);
}

function buttonHeight(rule: string): number {
  const font = px(cssProp(rule, 'font-size'), 'button font-size');
  const padY = verticalPadding(cssProp(rule, 'padding'), 'button padding');
  const border = px(cssProp(rule, 'border').split(' ')[0] ?? '', 'button border');
  return font + padY + border * 2;
}

function splashStackHeight(css: string): number {
  const overlay = cssRule(css, '#start-splash-overlay');
  const header = cssRule(css, '.splash-header');
  const title = cssRule(css, '.splash-title');
  const subtitle = cssRule(css, '.splash-subtitle');
  const character = cssRule(css, '.splash-character img');
  const menu = cssRule(css, '.splash-menu');
  const btn = cssRule(css, '.splash-btn');

  const overlayPad = px(cssProp(overlay, 'padding') || '0px', 'overlay padding');
  const overlayGap = px(cssProp(overlay, 'gap') || '0px', 'overlay gap');
  const headerGap = px(cssProp(header, 'gap') || '0px', 'header gap');
  const menuGap = px(cssProp(menu, 'gap') || '0px', 'menu gap');

  const headerH = px(cssProp(title, 'font-size'), 'title') + TITLE_SHADOW_PX + headerGap + px(cssProp(subtitle, 'font-size'), 'subtitle') * SUBTITLE_LINES;
  const characterH = px(cssProp(character, 'height'), 'character');
  const menuH = buttonHeight(btn) * BUTTON_COUNT + menuGap * (BUTTON_COUNT - 1);

  return overlayPad * 2 + overlayGap * 2 + headerH + characterH + menuH;
}

describe('splash layout fits the 960x540 stage', () => {
  const css = fs.readFileSync(path.resolve(__dirname, '../../style.css'), 'utf-8');
  const overlay = cssRule(css, '#start-splash-overlay');
  const langCorner = cssRule(css, '.splash-lang-corner');

  it('positions the language toggle in the corner', () => {
    expect(cssProp(langCorner, 'position')).toBe('absolute');
    expect(cssProp(langCorner, 'right')).toBe('18px');
  });

  it('keeps the overlay inside 960x540 viewport without overflow clipping', () => {
    expect(cssProp(overlay, 'overflow')).toBe('hidden');
  });

  it('sizes the stacked splash content to fit 540px with Continue visible', () => {
    expect(splashStackHeight(css)).toBeLessThanOrEqual(STAGE_H);
  });
});
