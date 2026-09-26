// @Architecture(descriptionShort="Guards visible case text against markdown syntax", type="test", icon="layers")
/**
 * The dialogue box prints raw text: markdown markers reach the player literally.
 * Emphasis must be carried by the words themselves (« » in Spanish, " " in English).
 */
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { getEvidenceCatalog, getProfileCatalog } from '../../src/state/index.js';
import type { CaseId, Language } from '../../src/types/index.js';

const CASE_IDS: readonly CaseId[] = ['case0', 'case1', 'case2', 'case3', 'case4', 'case5'];
const LANGUAGES: readonly Language[] = ['es', 'en'];

/** Keys whose string values are rendered verbatim to the player. */
const VISIBLE_KEYS = new Set([
  'text', 'label', 'title', 'witness', 'prompt',
  'question', 'name', 'desc', 'updatedDesc', 'caption'
]);

const MARKDOWN_PATTERNS: ReadonlyArray<{ name: string; re: RegExp }> = [
  { name: 'asterisk emphasis', re: /\*/ },
  { name: 'backtick code span', re: /`/ },
  { name: 'strikethrough', re: /~~/ },
  { name: 'underscore emphasis', re: /(^|\s)_[^_]+_(\s|$|[.,;:!?])/ },
  { name: 'markdown link', re: /\[[^\]]+\]\([^)]+\)/ },
  { name: 'atx heading', re: /^#{1,6}\s/ }
];

function markdownHit(value: string): string | null {
  const hit = MARKDOWN_PATTERNS.find((pattern) => pattern.re.test(value));
  return hit ? hit.name : null;
}

function collectOffenders(node: unknown, path: string, out: string[]): void {
  if (Array.isArray(node)) {
    node.forEach(/*visit=*/(child, i) => collectOffenders(child, `${path}[${i}]`, out));
    return;
  }
  if (!node || typeof node !== 'object') return;
  for (const [key, value] of Object.entries(node as Record<string, unknown>)) {
    if (typeof value !== 'string') {
      collectOffenders(value, `${path}.${key}`, out);
      continue;
    }
    if (!VISIBLE_KEYS.has(key)) continue;
    const hit = markdownHit(value);
    if (hit) out.push(`${path}.${key} [${hit}]: ${value}`);
  }
}

function offendersFor(caseId: CaseId, language: Language): string[] {
  const out: string[] = [];
  collectOffenders(getCaseScript(language, caseId), `${caseId}.${language}.script`, out);
  collectOffenders(getEvidenceCatalog(language, caseId), `${caseId}.${language}.evidence`, out);
  collectOffenders(getProfileCatalog(language, caseId), `${caseId}.${language}.profiles`, out);
  return out;
}

describe('Visible case text carries no markdown syntax', () => {
  for (const caseId of CASE_IDS) {
    for (const language of LANGUAGES) {
      it(`${caseId} (${language}) is markdown-free`, () => {
        expect(offendersFor(caseId, language)).toEqual([]);
      });
    }
  }

  it('detects the markdown markers it is meant to guard against', () => {
    const samples = ['*cursiva*', '**negrita**', 'un _guion_ bajo', '`codigo`', '~~tachado~~'];
    samples.forEach(/*assertDetected=*/(sample) => {
      expect(markdownHit(sample), sample).not.toBeNull();
    });
    expect(markdownHit('El Saber Universal, tomo XI')).toBeNull();
    expect(markdownHit('archivo_pasillo7 no es enfasis')).toBeNull();
  });
});
