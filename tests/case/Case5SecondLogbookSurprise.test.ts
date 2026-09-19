// @Architecture(descriptionShort="Regression: day 1 investigation never reveals the second logbook", type="test", icon="layers")
import { describe, expect, it } from 'vitest';

import { CASE5_VESTIBULO_HOTSPOTS } from '../../src/case/case5/Private/archivo_vestibulo_hotspots.js';
import { CASE5_VESTIBULO_HOTSPOTS_EN } from '../../src/case/case5/Private/archivo_vestibulo_hotspots_en.js';
import { CASE5_VESTIBULO_TALKS } from '../../src/case/case5/Private/archivo_vestibulo_talks.js';
import { CASE5_VESTIBULO_TALKS_EN } from '../../src/case/case5/Private/archivo_vestibulo_talks_en.js';
import { CASE5_PASILLO7_HOTSPOTS } from '../../src/case/case5/Private/archivo_pasillo7_hotspots.js';
import { CASE5_PASILLO7_HOTSPOTS_EN } from '../../src/case/case5/Private/archivo_pasillo7_hotspots_en.js';
import { CASE5_ARCHIVO_VESTIBULO } from '../../src/case/case5/Private/archivo_vestibulo.js';
import { CASE5_ARCHIVO_PASILLO7 } from '../../src/case/case5/Private/archivo_pasillo7.js';

/**
 * GIRO 1 (spec §11.5) is the courtroom discovery that the Archive keeps a SECOND
 * register. Day 1 investigation may establish that only visitors sign the visitors
 * book — it must never say a second book exists.
 */
const SECOND_BOOK = [
  /dos libros/i,
  /otro libro/i,
  /su libro\.? el de ellos/i,
  /libro de peritos/i,
  /cada quien su libro/i,
  /libros hasta para apuntar/i,
  /two logbooks/i,
  /other logbook/i,
  /expert log/i,
  /their logbook/i,
  /own logbook/i,
  /logbooks to log/i
];

function day1Texts(): string[] {
  const scenes = [CASE5_ARCHIVO_VESTIBULO, CASE5_ARCHIVO_PASILLO7];
  const hotspots = [
    ...CASE5_VESTIBULO_HOTSPOTS, ...CASE5_VESTIBULO_HOTSPOTS_EN,
    ...CASE5_PASILLO7_HOTSPOTS, ...CASE5_PASILLO7_HOTSPOTS_EN
  ];
  const talks = [...CASE5_VESTIBULO_TALKS, ...CASE5_VESTIBULO_TALKS_EN];
  return [
    ...scenes.flatMap((s) => s.intro ?? []),
    ...hotspots.flatMap((h) => h.dialogue),
    ...talks.flatMap((t) => t.dialogue)
  ].map((l) => l.text);
}

describe('Case 5 — second logbook stays a trial surprise', () => {
  const texts = day1Texts();

  it('never mentions a second register during the day 1 investigation', () => {
    const offenders = texts.filter((t) => SECOND_BOOK.some((re) => re.test(t)));
    expect(offenders).toEqual([]);
  });

  it('still establishes that only visitors sign the visitors book', () => {
    const joined = texts.join('\n');
    expect(joined).toContain('Este libro es para las visitas');
    expect(joined).toContain('no viene de visita');
    expect(joined).toContain('This book is for visitors');
    expect(joined).toContain('not to visit');
  });

  it('never phrases the register question as "who was public"', () => {
    expect(texts.filter((t) => /qui[eé]n era p[uú]blico|who was public/i.test(t))).toEqual([]);
  });
});
