// @Architecture(descriptionShort="Loads one case module on demand and caches both languages", type="service", icon="layers")
/**
 * Browser-facing case loader. Does not import [[./index.ts]], so the splash
 * graph never pulls Cases 0–5 until a start or a chosen save slot needs them.
 */

import type { CaseId, CaseScript, Language } from '../types/index.js';

type LangPair = Record<Language, CaseScript>;

export type ScriptResolver = (lang: Language, caseId: CaseId) => CaseScript;

export const EMPTY_CASE_SCRIPT: CaseScript = {
  id: 'case1',
  startLocation: 'detention',
  requiredEvidence: [],
  debugEvidence: [],
  debugUnlockLocations: [],
  investigation: {},
  trial: {
    intro: [],
    testimonies: [],
    climax: { dialogue: [], presentTarget: [], verdict: [] }
  }
};

const cache = new Map<CaseId, LangPair>();
const inflight = new Map<CaseId, Promise<LangPair>>();

const LOADERS: Record<CaseId, () => Promise<LangPair>> = {
  case0: loadCase0,
  case1: loadCase1,
  case2: loadCase2,
  case3: loadCase3,
  case4: loadCase4,
  case5: loadCase5
};

export function peekCaseScript(lang: Language, caseId: CaseId): CaseScript | null {
  return cache.get(caseId)?.[lang] ?? null;
}

export function rememberCasePair(caseId: CaseId, pair: LangPair): void {
  cache.set(caseId, pair);
}

export function lookupBoundScript(
  lang: Language,
  caseId: CaseId,
  resolve?: ScriptResolver
): CaseScript | null {
  if (resolve) {
    void ensureCasePair(caseId, resolve);
    return resolve(lang, caseId);
  }
  return peekCaseScript(lang, caseId);
}

export async function loadCaseScript(lang: Language, caseId: CaseId): Promise<CaseScript> {
  const pair = await pairFor(caseId);
  return pair[lang] ?? pair.es;
}

export async function ensureCasePair(caseId: CaseId, resolve?: ScriptResolver): Promise<void> {
  if (cache.has(caseId)) return;
  if (resolve) {
    rememberCasePair(caseId, { es: resolve('es', caseId), en: resolve('en', caseId) });
    return;
  }
  await pairFor(caseId);
}

async function pairFor(caseId: CaseId): Promise<LangPair> {
  const cached = cache.get(caseId);
  if (cached) return cached;
  const pending = inflight.get(caseId);
  if (pending) return pending;
  const next = LOADERS[caseId]().then(/*storePair*/ (pair) => {
    cache.set(caseId, pair);
    inflight.delete(caseId);
    return pair;
  });
  inflight.set(caseId, next);
  return next;
}

async function loadCase0(): Promise<LangPair> {
  const m = await import('./case0/index.js');
  return { es: m.CASE_SCRIPT_CASE0_ES, en: m.CASE_SCRIPT_CASE0_EN };
}

async function loadCase1(): Promise<LangPair> {
  const m = await import('./case1/index.js');
  return { es: m.CASE_SCRIPT_CASE1_ES, en: m.CASE_SCRIPT_CASE1_EN };
}

async function loadCase2(): Promise<LangPair> {
  const m = await import('./case2/index.js');
  return { es: m.CASE_SCRIPT_CASE2_ES, en: m.CASE_SCRIPT_CASE2_EN };
}

async function loadCase3(): Promise<LangPair> {
  const m = await import('./case3/index.js');
  return { es: m.CASE_SCRIPT_CASE3_ES, en: m.CASE_SCRIPT_CASE3_EN };
}

async function loadCase4(): Promise<LangPair> {
  const m = await import('./case4/index.js');
  return { es: m.CASE_SCRIPT_CASE4_ES, en: m.CASE_SCRIPT_CASE4_EN };
}

async function loadCase5(): Promise<LangPair> {
  const m = await import('./case5/index.js');
  return { es: m.CASE_SCRIPT_CASE5_ES, en: m.CASE_SCRIPT_CASE5_EN };
}
