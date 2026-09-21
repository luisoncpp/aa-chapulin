// @Architecture(descriptionShort="Guards Case 5 player-facing vocabulary against archaic legalese", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { getEvidenceCatalog, getProfileCatalog } from '../../src/state/index.js';
import type { CaseScript, TrialDayScript, TrialScript } from '../../src/types/index.js';

/**
 * Words that read as archaic or opaque to the player. They are tolerated as a
 * character trait inside spoken dialogue (see ALLOWED_SPEAKER_LINES), but never
 * in text the game uses to *ask* the player something, nor in Court Record copy.
 */
const BANNED = [/occis[oa]s?/i, /\bfojas?\b/i, /\blegistas?\b/i, /\bha lugar\b/i];
const BANNED_EN = [/\bdeceased\b/i, /\bfolios?\b/i];

/** Wording flagged as unfaithful to the art or plainly unnatural in Spanish. */
const BANNED_ANYWHERE = [/canto del lomo/i, /escalera[^.]*\bnace\b/i, /años de muerta/i];
const BANNED_ANYWHERE_EN = [/spine edge/i, /dead eleven years/i];

function trialDays(script: CaseScript): (TrialScript | TrialDayScript)[] {
  const days: (TrialScript | TrialDayScript)[] = [script.trial];
  let next = script.adjournment;
  while (next) {
    days.push(next.trial);
    next = next.next;
  }
  return days;
}

/** Every string the game shows while it is waiting for a player decision. */
function questionText(script: CaseScript): string[] {
  const out: string[] = [];
  for (const day of trialDays(script)) {
    if (day.openingPresent?.prompt) out.push(day.openingPresent.prompt);
    for (const testimony of day.testimonies) {
      for (const stmt of testimony.statements) {
        const rule = stmt.contradiction;
        if (!rule) continue;
        if (rule.pointTarget?.promptQuestion) out.push(rule.pointTarget.promptQuestion);
        if (rule.followUp?.prompt) out.push(rule.followUp.prompt);
        if (rule.followUp?.pointTarget?.promptQuestion) {
          out.push(rule.followUp.pointTarget.promptQuestion);
        }
      }
    }
  }
  const climax = script.trial.climax;
  for (const stage of climax.stages ?? []) {
    if (stage.prompt) out.push(stage.prompt);
    if (stage.pointTarget?.promptQuestion) out.push(stage.pointTarget.promptQuestion);
  }
  for (const choice of climax.choices ?? []) {
    out.push(choice.question, ...choice.options.map((option) => option.label));
  }
  return out;
}

/** Court Record copy: evidence names, descriptions, update stages, profile cards. */
function courtRecordText(lang: 'es' | 'en'): string[] {
  const evidence = Object.values(getEvidenceCatalog(lang, 'case5')).flatMap((item) => [
    item?.name ?? '',
    item?.desc ?? '',
    ...(item?.updates ?? []),
    item?.detailedView?.caption ?? ''
  ]);
  const profiles = Object.values(getProfileCatalog(lang, 'case5')).flatMap((profile) => [
    profile?.name ?? '',
    profile?.role ?? '',
    profile?.desc ?? '',
    ...(profile?.updates ?? [])
  ]);
  return [...evidence, ...profiles];
}

function offenders(texts: string[], patterns: RegExp[]): string[] {
  return texts.filter((text) => patterns.some((pattern) => pattern.test(text)));
}

describe('Case 5 player-facing vocabulary', () => {
  const es = getCaseScript('es', 'case5') as CaseScript;
  const en = getCaseScript('en', 'case5') as CaseScript;

  it('never asks the player a question in archaic legalese (ES)', () => {
    expect(offenders(questionText(es), BANNED)).toEqual([]);
  });

  it('never asks the player a question in archaic legalese (EN)', () => {
    expect(offenders(questionText(en), BANNED_EN)).toEqual([]);
  });

  it('keeps the Court Record free of archaic legalese (ES)', () => {
    expect(offenders(courtRecordText('es'), BANNED)).toEqual([]);
  });

  it('keeps the Court Record free of archaic legalese (EN)', () => {
    expect(offenders(courtRecordText('en'), BANNED_EN)).toEqual([]);
  });

  it('drops wording the artwork does not support, in both languages', () => {
    const esText = [...questionText(es), ...courtRecordText('es')];
    const enText = [...questionText(en), ...courtRecordText('en')];
    expect(offenders(esText, BANNED_ANYWHERE)).toEqual([]);
    expect(offenders(enText, BANNED_ANYWHERE_EN)).toEqual([]);
  });
});

