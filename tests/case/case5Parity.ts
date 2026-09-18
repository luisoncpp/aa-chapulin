// @Architecture(descriptionShort="Shared ES/EN parity helpers for Case 5 day tests", type="test", icon="layers")
import { expect } from 'vitest';
import type { DialogueLine, Statement, Testimony } from '../../src/types/index.js';

export const SPANISH_LEAK = /[áéíóúñ¡¿]/;

export function hotspotGeom(h: { id: string; x: number; y: number; w: number; h: number }) {
  return { id: h.id, x: h.x, y: h.y, w: h.w, h: h.h };
}

export function statementParityFields(s: Statement) {
  return {
    id: s.id,
    evidence: s.contradiction?.evidence,
    profileTarget: s.contradiction?.profileTarget,
    requiresExamine: s.contradiction?.requiresExamine,
    followUpEvidence: s.contradiction?.followUp?.evidence,
    followUpProfileTarget: s.contradiction?.followUp?.profileTarget,
    unlockedBy: s.unlockedBy
  };
}

export function assertInvestigationParity(
  en: { investigation: Record<string, { hotspots: Array<{ id: string; x: number; y: number; w: number; h: number }> }> },
  es: { investigation: Record<string, { hotspots: Array<{ id: string; x: number; y: number; w: number; h: number }> }> },
  locationIds: readonly string[],
  enLines: DialogueLine[]
): void {
  expect(Object.keys(en.investigation).sort()).toEqual(Object.keys(es.investigation).sort());
  locationIds.forEach((id) => {
    expect(en.investigation[id].hotspots.map(hotspotGeom)).toEqual(
      es.investigation[id].hotspots.map(hotspotGeom)
    );
  });
  enLines.forEach((line) => expect(line.bgm).not.toBe('truth'));
  assertNoSpanishLeak(enLines);
}

export function assertNoSpanishLeak(lines: DialogueLine[]): void {
  for (const line of lines) {
    if (line.text) {
      expect(line.text, line.text).not.toMatch(SPANISH_LEAK);
    }
  }
}

export function assertEnglishTrialParity(
  enDay: { intro: DialogueLine[]; testimonies: Testimony[] },
  esDay: { intro: DialogueLine[]; testimonies: Testimony[] },
  enLines: DialogueLine[]
): void {
  expect(enDay.intro).toHaveLength(esDay.intro.length);
  expect(enDay.testimonies.map((t) => t.statements.length)).toEqual(
    esDay.testimonies.map((t) => t.statements.length)
  );
  enDay.testimonies.forEach((enT, i) => {
    expect(enT.statements.map(statementParityFields)).toEqual(
      esDay.testimonies[i].statements.map(statementParityFields)
    );
  });
  for (const testimony of enDay.testimonies) {
    for (const stmt of testimony.statements.filter((s) => s.contradiction)) {
      const rule = stmt.contradiction!;
      if (!rule.followUp) continue;
      expect(rule.followUp.successDialogue).not.toBe(rule.successDialogue);
      expect(rule.followUp.successDialogue.map((l) => l.text))
        .not.toEqual(rule.successDialogue.map((l) => l.text));
    }
  }
  enLines.forEach((line) => {
    expect(line.bgm).not.toBe('truth');
    expect(line.pose).not.toBe('donramon_slam');
    if (line.speaker === 'DEFENSA' && line.pose) {
      expect(line.pose.startsWith('chapulin_'), `${line.pose} on DEFENSA`).toBe(true);
    }
  });
  assertNoSpanishLeak(enLines);
}
