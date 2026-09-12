// @Architecture(descriptionShort="Keeps downscaled busts on smooth filtering", type="test", icon="layout")
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

function cssRule(css: string, selector: string): string {
  const escaped = selector.replace(/[.#]/g, '\\$&');
  const match = css.match(new RegExp(`${escaped}\\s*\\{([^}]+)\\}`));
  return match?.[1] ?? '';
}

describe('character sprite downscaling', () => {
  const css = fs.readFileSync(path.resolve(__dirname, '../../style.css'), 'utf-8');

  it('filters busts smoothly instead of dropping rows with nearest-neighbour', () => {
    // Busts are 512px paintings staged at non-integer ratios (Chapatín lands near 285px on
    // a 540px stage). `pixelated` discards over half the rows and columns, breaking up
    // glasses wire and hair strands.
    expect(cssRule(css, '#character-sprite')).toMatch(/image-rendering:\s*auto/);
  });

  it('lets the stage box own sprite size so intrinsic pixels cannot pop the layout', () => {
    expect(cssRule(css, '#character-sprite')).toMatch(/width:\s*100%/);
    expect(cssRule(css, '#character-sprite')).toMatch(/height:\s*100%/);
  });

  it('keeps the rest of the pixel-art UI on nearest-neighbour', () => {
    // Court-record art is displayed at or near its native size, so it must stay crisp.
    expect(cssRule(css, '#evidence-icon-preview')).toMatch(/image-rendering:\s*pixelated/);
  });
});

describe('idle breathing float against the dialogue plate', () => {
  const css = fs.readFileSync(path.resolve(__dirname, '../../style.css'), 'utf-8');
  const offsets = /@keyframes characterBreathe \{((?:[^{}]*\{[^{}]*\})*)[^{}]*\}/.exec(css)![1]
    .matchAll(/translateY\((-?\d+(?:\.\d+)?)(?:px)?\)/g);
  const travel = [...offsets].map(match => Number(match[1]));

  // Downward is positive. The contact offset is measured against the rendered plate, not
  // derived from the baseline percentage: `plain` rounds to a whole pixel and lands short
  // of the gold trim.
  const CONTACT_OFFSET_PX = 2;

  it('touches the dialogue box at the top of the cycle instead of only at rest', () => {
    // The peak (50%) is the contact offset, so no keyframe lifts the sprite off the trim.
    expect(Math.min(...travel)).toBe(CONTACT_OFFSET_PX);
  });

  it('never dips past the solid border into the translucent interior', () => {
    const border = Number(/border:\s*(\d+)px solid/.exec(cssRule(css, '#dialogue-box'))![1]);
    expect(Math.max(...travel) - Math.min(...travel)).toBeLessThanOrEqual(border);
  });
});
