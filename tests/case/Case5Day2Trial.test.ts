// @Architecture(descriptionShort="Unit tests for Case 5 day-2 Spanish trial script", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import type { CaseScript, DialogueLine, Statement, Testimony } from '../../src/types/index.js';

function contradictions(t: Testimony): Statement[] {
  return t.statements.filter((s) => s.contradiction);
}

function day2Trial(script: CaseScript) {
  return script.adjournment!.trial;
}

function trialDialogue(day: ReturnType<typeof day2Trial>): DialogueLine[] {
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

describe('Case 5 day 2 trial (Spanish)', () => {
  const es = getCaseScript('es', 'case5') as CaseScript;
  const en = getCaseScript('en', 'case5') as CaseScript;
  const day2 = day2Trial(es);
  const lines = trialDialogue(day2);

  it('wires adjournment openingPresent with perfil_casimiro only', () => {
    expect(day2.openingPresent?.profileTarget).toContain('perfil_casimiro');
    expect(day2.openingPresent?.evidence ?? []).toHaveLength(0);
    expect(day2.openingPresent?.prompt).toBe('¿Quién era el hombre que murió en el pasillo 7?');
    expect(en.adjournment?.trial.openingPresent?.profileTarget).toEqual(['perfil_casimiro']);
  });

  it('exports T4/T5 with spec titles, witnesses, and T5 grave BGM', () => {
    const [t4, t5] = day2.testimonies;
    expect(t4).toMatchObject({
      title: 'Testimonio: El sobre del veintinueve',
      witness: 'Señor Barriga',
      bgm: 'cross_exam_moderato'
    });
    expect(t5).toMatchObject({
      title: 'Testimonio: Lo que administro y lo que vendo',
      witness: 'Lic. Berrondo',
      bgm: 'cross_exam_grave'
    });
  });

  it('maps contradictions per spec §13', () => {
    const [t4, t5] = day2.testimonies;
    expect(contradictions(t4)).toHaveLength(1);
    expect(t4.statements.find((s) => s.id === 'c5_d2t1_5')?.contradiction).toMatchObject({
      evidence: ['nota_mecanografiada'],
      followUp: { evidence: ['recibo_renta'] }
    });

    expect(contradictions(t5)).toHaveLength(1);
    const t5Rule = t5.statements.find((s) => s.id === 'c5_d2t2_5')?.contradiction;
    expect(t5Rule).toMatchObject({
      evidence: ['libro_peritos'],
      followUp: { evidence: ['expediente_serie'] }
    });
    expect(t5Rule?.followUp?.pointTarget?.targetEvidenceId).toBe('expediente_serie');
  });

  it('configures Señalamiento 1 with panel_b correct and four coached fail zones', () => {
    const point = day2.testimonies[1].statements.find((s) => s.id === 'c5_d2t2_5')
      ?.contradiction?.followUp?.pointTarget;
    expect(point?.zones.find((z) => z.id === 'panel_b')?.isCorrect).toBe(true);
    const fails = point?.zones.filter((z) => !z.isCorrect) ?? [];
    expect(fails).toHaveLength(4);
    fails.forEach((zone) => {
      expect(zone.failureDialogue.length).toBeGreaterThan(0);
    });
    expect(point?.promptQuestion).toBe(
      'Señala el papel que ya describe el producto que este testigo admite vender.'
    );
  });

  it('never uses truth BGM in day-2 trial dialogue', () => {
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
    for (const testimony of day2.testimonies) {
      for (const stmt of contradictions(testimony)) {
        const rule = stmt.contradiction!;
        if (!rule.followUp) continue;
        expect(rule.followUp.successDialogue).not.toBe(rule.successDialogue);
        expect(rule.followUp.successDialogue.map((l) => l.text))
          .not.toEqual(rule.successDialogue.map((l) => l.text));
      }
    }
  });

  it('matches Spanish day-2 testimony structure in English without a truth BGM cue', () => {
    const enDay2 = day2Trial(en);
    const esDay2 = day2Trial(es);
    expect(enDay2.openingPresent).toBeDefined();
    expect(enDay2.testimonies).toHaveLength(esDay2.testimonies.length);
    enDay2.testimonies.forEach((testimony, i) => {
      expect(testimony.statements).toHaveLength(esDay2.testimonies[i].statements.length);
      expect(testimony.bgm).not.toBe('truth');
    });
    trialDialogue(enDay2).forEach((line) => expect(line.bgm).not.toBe('truth'));
  });

  it('calls Barriga in openingPresent and Berrondo before T5 via T4 followUp', () => {
    const opening = day2.openingPresent!.successDialogue.map((l) => l.speaker);
    expect(opening).toContain('BARRIGA');
    expect(opening[opening.length - 1]).toBe('JUEZ');

    const t4Follow = day2.testimonies[0].statements
      .find((s) => s.id === 'c5_d2t1_5')?.contradiction?.followUp?.successDialogue ?? [];
    expect(t4Follow.map((l) => l.speaker)).toContain('BERRONDO');
    expect(t4Follow[t4Follow.length - 1]?.speaker).toBe('JUEZ');
  });
});
