// @Architecture(descriptionShort="Regression tests for splash card fitting the 540px stage", type="test", icon="layout")
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const STAGE_H = 540;
const SPLASH_CHILD_COUNT = 9;
const BUTTON_COUNT = 5;
const TITLE_SHADOW_PX = 3;
const SUBTITLE_LINES = 2;
const TIP_LINES = 2;

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
  const card = cssRule(css, '.splash-card');
  const title = cssRule(css, '.splash-title');
  const subtitle = cssRule(css, '.splash-subtitle');
  const character = cssRule(css, '.splash-character img');
  const tip = cssRule(css, '.splash-tip');
  const btn = cssRule(css, '.splash-btn');
  const overlayPad = px(cssProp(overlay, 'padding') || '0px', 'overlay padding');
  const cardPadY = verticalPadding(cssProp(card, 'padding'), 'card padding');
  const gap = px(cssProp(card, 'gap'), 'card gap');
  return (
    overlayPad * 2 +
    cardPadY +
    gap * (SPLASH_CHILD_COUNT - 1) +
    px(cssProp(title, 'font-size'), 'title') +
    TITLE_SHADOW_PX +
    px(cssProp(subtitle, 'font-size'), 'subtitle') * SUBTITLE_LINES +
    px(cssProp(character, 'height'), 'character') +
    px(cssProp(tip, 'font-size'), 'tip') * TIP_LINES +
    buttonHeight(btn) * BUTTON_COUNT
  );
}

describe('splash layout fits the 960x540 stage', () => {
  const css = fs.readFileSync(path.resolve(__dirname, '../../style.css'), 'utf-8');
  const card = cssRule(css, '.splash-card');

  it('keeps the splash card inside the overlay instead of clipping through #game-screen', () => {
    expect(cssProp(card, 'max-height')).toBe('100%');
    expect(cssProp(card, 'overflow-y') || cssProp(card, 'overflow')).toMatch(/auto|scroll/);
  });

  it('sizes the stacked splash content to fit 540px with Continue visible', () => {
    expect(splashStackHeight(css)).toBeLessThanOrEqual(STAGE_H);
  });
});
