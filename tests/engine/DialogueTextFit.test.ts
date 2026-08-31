import { describe, it, expect } from 'vitest';
import { JSDOM } from 'jsdom';
import { fitDialogueFontSize } from '../../src/engine/Private/DialogueTextFit.js';

const BOX_HEIGHT_PX = 84;
const CHARS_PER_LINE_AT_24PX = 84;

/** Fakes layout: wider glyphs wrap more, so a smaller font means fewer lines. */
function makeMeasuredEl(): HTMLElement {
  const dom = new JSDOM('<div id="dialogue-text"></div>');
  const el = dom.window.document.getElementById('dialogue-text')!;
  Object.defineProperty(el, 'clientHeight', { get: () => BOX_HEIGHT_PX });
  Object.defineProperty(el, 'scrollHeight', {
    get: () => {
      const raw = el.style.getPropertyValue('--dialogue-font-size');
      const size = parseFloat(raw) || 24;
      const charsPerLine = (CHARS_PER_LINE_AT_24PX * 24) / size;
      const lines = Math.ceil((el.textContent?.length ?? 0) / charsPerLine);
      return Math.ceil(lines * size * 1.35);
    },
  });
  return el;
}

describe('fitDialogueFontSize', () => {
  it('keeps the base size for short lines', () => {
    const el = makeMeasuredEl();
    expect(fitDialogueFontSize(el, 'Oí el grito por las bocinas de la plaza.')).toBe(24);
  });

  it('shrinks long Case 3 lines until they fit the fixed box', () => {
    const el = makeMeasuredEl();
    const longLine =
      'Oí el grito por las bocinas de la plaza. Subí corriendo - bueno, corriendo lo que uno ' +
      'corre a mi edad, que no es de su incumbencia - y me lo encontré tirado. Le busqué el ' +
      'pulso y le empecé a dar primeros auxilios. Entonces entró el gendarme ese y me esposó ' +
      'por salvarle la vida a un hombre.';
    const size = fitDialogueFontSize(el, longLine);
    expect(size).toBeLessThan(24);
    el.textContent = longLine;
    expect(el.scrollHeight).toBeLessThanOrEqual(BOX_HEIGHT_PX);
  });

  it('leaves the element text untouched', () => {
    const el = makeMeasuredEl();
    el.textContent = '';
    fitDialogueFontSize(el, 'algo muy largo '.repeat(30));
    expect(el.textContent).toBe('');
  });
});
