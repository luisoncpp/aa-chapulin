// @Architecture(descriptionShort="Unit tests for Case 5 day-3 Spanish trial script", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import type { CaseScript, DialogueLine, Statement, Testimony } from '../../src/types/index.js';

function contradictions(t: Testimony): Statement[] {
  return t.statements.filter((s) => s.contradiction);
}

function day3Trial(script: CaseScript) {
  return script.adjournment!.next!.trial;
}

function trialDialogue(day: ReturnType<typeof day3Trial>): DialogueLine[] {
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

describe('Case 5 day 3 trial (Spanish)', () => {
  const es = getCaseScript('es', 'case5') as CaseScript;
  const en = getCaseScript('en', 'case5') as CaseScript;
  const day3 = day3Trial(es);
  const lines = trialDialogue(day3);

  it('wires adjournment.next.trial openingPresent with efectos_casimiro only', () => {
    expect(day3.openingPresent?.evidence).toContain('efectos_casimiro');
    expect(day3.openingPresent?.profileTarget ?? []).toHaveLength(0);
    expect(day3.openingPresent?.prompt).toBe('¿Qué iba a señalar el occiso en esa diligencia?');
    expect(en.adjournment?.next?.trial.openingPresent).toBeUndefined();
  });

  it('exports T6/T7/T8 with spec titles, witnesses, and T7/T8 grave BGM', () => {
    const [t6, t7, t8] = day3.testimonies;
    expect(t6).toMatchObject({
      title: 'Testimonio: Lo que cargo en ese sótano',
      witness: 'El Chómpiras',
      bgm: 'cross_exam_moderato'
    });
    expect(t7).toMatchObject({
      title: 'Testimonio: Lo que cobré en agosto',
      witness: 'Super Sam',
      bgm: 'cross_exam_grave'
    });
    expect(t8).toMatchObject({
      title: 'Testimonio: Lo que hice el cuatro de diciembre',
      witness: 'Lic. Berrondo (investigado)',
      bgm: 'cross_exam_grave'
    });
  });

  it('maps contradictions per spec §15', () => {
    const [t6, t7, t8] = day3.testimonies;
    expect(contradictions(t6)).toHaveLength(1);
    expect(t6.statements.find((s) => s.id === 'c5_d3t1_3')?.contradiction).toMatchObject({
      evidence: ['inventario_1971'],
      followUp: { evidence: ['huacal_9'] }
    });

    expect(contradictions(t7)).toHaveLength(1);
    expect(t7.statements.find((s) => s.id === 'c5_d3t2_3')?.contradiction).toMatchObject({
      evidence: ['oficio_diligencia'],
      followUp: { evidence: ['expediente_serie'] }
    });

    expect(contradictions(t8)).toHaveLength(1);
    expect(t8.statements.find((s) => s.id === 'c5_d3t3_6')?.contradiction).toMatchObject({
      evidence: ['acuse_notificacion'],
      followUp: { evidence: ['tomo_caido'] }
    });
  });

  it('never uses truth BGM in day-3 trial dialogue', () => {
    lines.forEach((line) => {
      expect(line.bgm).not.toBe('truth');
    });
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
    for (const testimony of day3.testimonies) {
      for (const stmt of contradictions(testimony)) {
        const rule = stmt.contradiction!;
        if (!rule.followUp) continue;
        expect(rule.followUp.successDialogue).not.toBe(rule.successDialogue);
        expect(rule.followUp.successDialogue.map((l) => l.text))
          .not.toEqual(rule.successDialogue.map((l) => l.text));
      }
    }
  });

  it('keeps English day-3 testimonies on placeholder empty statements', () => {
    const enDay3 = day3Trial(en);
    expect(enDay3.intro).toHaveLength(2);
    expect(enDay3.openingPresent).toBeUndefined();
    for (const testimony of enDay3.testimonies) {
      expect(testimony.statements).toHaveLength(0);
      expect(testimony.title).toBe('Placeholder');
    }
  });

  it('calls Chómpiras in openingPresent, Sam in T6 followUp, Berrondo in T7 followUp', () => {
    const opening = day3.openingPresent!.successDialogue.map((l) => l.speaker);
    expect(opening).toContain('CHOMPIRAS');
    expect(opening[opening.length - 1]).toBe('JUEZ');

    const t6Follow = day3.testimonies[0].statements
      .find((s) => s.id === 'c5_d3t1_3')?.contradiction?.followUp?.successDialogue ?? [];
    expect(t6Follow.map((l) => l.speaker)).toContain('SUPER SAM');
    expect(t6Follow[t6Follow.length - 1]?.speaker).toBe('JUEZ');

    const t7Follow = day3.testimonies[1].statements
      .find((s) => s.id === 'c5_d3t2_3')?.contradiction?.followUp?.successDialogue ?? [];
    expect(t7Follow.map((l) => l.speaker)).toContain('BERRONDO');
    expect(t7Follow[t7Follow.length - 1]?.speaker).toBe('JUEZ');
  });

  it('ends GIRO 3 with judge adjournment on T8 followUp', () => {
    const giro = day3.testimonies[2].statements
      .find((s) => s.id === 'c5_d3t3_6')?.contradiction?.followUp?.successDialogue ?? [];
    expect(giro.some((l) => l.text.includes('segunda puerta'))).toBe(true);
    expect(giro[giro.length - 1]?.speaker).toBe('DEFENSA');
    const adjourn = giro.find((l) => l.text === 'Se levanta la sesión.');
    expect(adjourn?.speaker).toBe('JUEZ');
  });
});
