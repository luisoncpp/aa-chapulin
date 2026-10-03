// @Architecture(descriptionShort="Unit tests for Case 5 day-4 Spanish trial script", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import type { CaseScript, DialogueLine, Statement, Testimony } from '../../src/types/index.js';
import { assertEnglishTrialParity } from './case5Parity.js';
import { DeductionSession, validateSequence } from '../../src/deduction/index.js';

function contradictions(t: Testimony): Statement[] {
  return t.statements.filter((s) => s.contradiction);
}

function day4Trial(script: CaseScript) {
  return script.adjournment!.next!.next!.trial;
}

function trialDialogue(day: ReturnType<typeof day4Trial>): DialogueLine[] {
  const lines: DialogueLine[] = [...day.intro, ...(day.openingPresent?.successDialogue ?? [])];
  for (const testimony of day.testimonies) {
    for (const stmt of testimony.statements) {
      lines.push(stmt);
      lines.push(...(stmt.pressText ?? []));
      const rule = stmt.contradiction;
      if (!rule) continue;
      lines.push(...rule.successDialogue);
      if (rule.followUp) {
        lines.push(...rule.followUp.successDialogue);
        if (rule.followUp.pointTarget?.successDialogue) {
          lines.push(...rule.followUp.pointTarget.successDialogue);
        }
      }
    }
  }
  return lines;
}

function defensaPoses(lines: DialogueLine[]): string[] {
  return lines.filter((l) => l.speaker === 'DEFENSA' && l.pose).map((l) => l.pose as string);
}

function hasUpdateEvidence(lines: DialogueLine[], id: string): boolean {
  return lines.some((l) => l.updateEvidence === id);
}

describe('Case 5 day 4 trial (Spanish)', () => {
  const es = getCaseScript('es', 'case5') as CaseScript;
  const en = getCaseScript('en', 'case5') as CaseScript;
  const day4 = day4Trial(es);
  const lines = trialDialogue(day4);

  it('wires adjournment.next.next.trial openingPresent with bitacora_caldera only', () => {
    expect(day4.openingPresent?.evidence).toContain('bitacora_caldera');
    expect(day4.openingPresent?.profileTarget ?? []).toHaveLength(0);
    expect(day4.openingPresent?.prompt).toBe('¿Con qué temperatura trabajó el forense?');
    expect(en.adjournment?.next?.next?.trial.openingPresent?.evidence).toEqual(['bitacora_caldera']);
  });

  it('updates informe_forense_c5 in intro or opening success', () => {
    const openingLines = [
      ...day4.intro,
      ...(day4.openingPresent?.successDialogue ?? [])
    ];
    expect(hasUpdateEvidence(openingLines, 'informe_forense_c5')).toBe(true);
  });


  it('keeps DEFENSA on chapulin poses only and bans donramon_slam', () => {
    defensaPoses(lines).forEach((pose) => {
      expect(pose.startsWith('chapulin_'), pose).toBe(true);
    });
    lines.forEach((line) => {
      expect(line.pose).not.toBe('donramon_slam');
    });
  });

  it('never aliases contradiction successDialogue to followUp.successDialogue', () => {
    for (const testimony of day4.testimonies) {
      for (const stmt of contradictions(testimony)) {
        const rule = stmt.contradiction!;
        if (!rule.followUp) continue;
        expect(rule.followUp.successDialogue).not.toBe(rule.successDialogue);
        expect(rule.followUp.successDialogue.map((l) => l.text))
          .not.toEqual(rule.successDialogue.map((l) => l.text));
      }
    }
  });

  it('mirrors Spanish day-4 trial structure in English without Spanish leakage', () => {
    const enDay4 = day4Trial(en);
    const esDay4 = day4Trial(es);
    assertEnglishTrialParity(enDay4, esDay4, trialDialogue(enDay4));
  });

  it('calls Genoveva and reaches the public proof after a solvable deduction', () => {
    const opening = day4.openingPresent!.successDialogue.map((l) => l.speaker);
    expect(opening).toContain('GENOVEVA');
    expect(opening[opening.length - 1]).toBe('JUEZ');

    const follow = day4.testimonies[0].statements
      .find((s) => s.id === 'c5_d4t1_2')?.contradiction?.followUp;
    const sequence = follow!.deduction!;
    expect(() => validateSequence(sequence)).not.toThrow();
    const session = new DeductionSession(sequence);
    for (let guard = 0; session.phase !== 'returned' && guard < 40; guard++) {
      if (session.phase === 'question') {
        session.focus(session.step.correctId);
        expect(session.choose()).toBe(true);
      } else expect(session.advance()).toBe(true);
    }
    expect(session.phase).toBe('returned');
    expect(follow!.successDialogue.some(line => line.speaker === 'GENOVEVA')).toBe(true);
    expect(follow!.successDialogue.some(line => line.speaker === 'SECRETARIO')).toBe(true);
  });
});
