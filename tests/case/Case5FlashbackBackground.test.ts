import { describe, expect, it } from 'vitest';
import { CASE5_CELDA_TALKS } from '../../src/case/case5/Private/celda_talks.js';
import { CASE5_CELDA_TALKS_EN } from '../../src/case/case5/Private/celda_talks_en.js';

const PRE_CRIME_BG = 'assets/bg_archivo_pasillo7_d4.webp';
const POST_CRIME_BG = 'assets/bg_archivo_pasillo7.webp';
const DETENTION_BG = 'assets/bg_detention.webp';

describe('Case 5 December 4 flashback background', () => {
  it.each([
    ['Spanish', CASE5_CELDA_TALKS],
    ['English', CASE5_CELDA_TALKS_EN]
  ])('uses the pre-crime hallway plate for the %s flashback', (_language, talks) => {
    const flashback = talks.find((talk) => talk.id === 'que_paso_4_dic');
    const start = flashback?.dialogue.findIndex((line) => line.text.startsWith('4 de diciembre') || line.text.startsWith('December 4'));
    const firstDetentionLine = flashback?.dialogue.findIndex((line, index) => index > (start ?? -1) && line.bg === DETENTION_BG);
    const flashbackLines = flashback?.dialogue
      .slice(start, firstDetentionLine)
      .filter((line) => line.bg);

    expect(flashbackLines?.length).toBeGreaterThan(0);
    expect(flashbackLines?.every((line) => line.bg === PRE_CRIME_BG)).toBe(true);
    expect(flashbackLines?.some((line) => line.bg === POST_CRIME_BG)).toBe(false);
  });
});
