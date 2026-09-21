// @Architecture(descriptionShort="Regression: Don Ramón's vecindad address stays house 72 in Case 5", type="test", icon="layers")
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const CASE5_DIR = path.resolve(__dirname, '../../src/case/case5/Private');

function case5Sources(): Array<{ file: string; text: string }> {
  return fs
    .readdirSync(CASE5_DIR)
    .filter(/*only script modules*/ (f) => f.endsWith('.ts'))
    .map((f) => ({ file: f, text: fs.readFileSync(path.join(CASE5_DIR, f), 'utf8') }));
}

/** Canon: Don Ramón lives in house 72 of the vecindad. Case 0's "vivienda 4" is another tenant. */
const WRONG_ADDRESS = /viv\. 4\.|vivienda 4\b|vivienda cuatro|apt\. 4\.|apartment four|dwelling 4\b/i;

describe('Case 5 — Don Ramón address canon', () => {
  const sources = case5Sources();

  it('never writes the dwelling number as 4', () => {
    const offenders = sources.filter((s) => WRONG_ADDRESS.test(s.text)).map((s) => s.file);
    expect(offenders).toEqual([]);
  });
});
