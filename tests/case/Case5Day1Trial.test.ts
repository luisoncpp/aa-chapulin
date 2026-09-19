// @Architecture(descriptionShort="Unit tests for Case 5 day-1 Spanish trial script", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import type { CaseScript, DialogueLine, Statement, Testimony } from '../../src/types/index.js';
import { assertEnglishTrialParity } from './case5Parity.js';

function contradictions(t: Testimony): Statement[] {
  return t.statements.filter((s) => s.contradiction);
}

function trialDialogue(script: CaseScript): DialogueLine[] {
  const day = script.trial;
  const lines: DialogueLine[] = [...day.intro, ...(day.openingPresent?.successDialogue ?? [])];
  for (const testimony of day.testimonies) {
    for (const stmt of testimony.statements) {
      lines.push(stmt);
      lines.push(...(stmt.pressText ?? []));
      const rule = stmt.contradiction;
      if (!rule) continue;
      lines.push(...rule.successDialogue);
      if (rule.followUp) lines.push(...rule.followUp.successDialogue);
    }
  }
  return lines;
}

function defensaPoses(lines: DialogueLine[]): string[] {
  return lines.filter((l) => l.speaker === 'DEFENSA' && l.pose).map((l) => l.pose as string);
}

describe('Case 5 day 1 trial (Spanish)', () => {
  const es = getCaseScript('es', 'case5') as CaseScript;
  const en = getCaseScript('en', 'case5') as CaseScript;
  const lines = trialDialogue(es);

  it('wires openingPresent with insignia_abogado', () => {
    expect(es.trial.openingPresent?.evidence).toContain('insignia_abogado');
    expect(es.trial.openingPresent?.prompt).toBe('¿Qué acredita a la defensa ante esta corte?');
    expect(en.trial.openingPresent?.evidence).toContain('insignia_abogado');
  });

  it('exports three testimonies with spec titles and witnesses', () => {
    const [t1, t2, t3] = es.trial.testimonies;
    expect(t1).toMatchObject({
      title: 'Testimonio: Nadie más entró esa tarde',
      witness: 'Nicanor Tolentino',
      bgm: 'cross_exam_moderato'
    });
    expect(t2).toMatchObject({
      title: 'Testimonio: La secuencia que asenté',
      witness: 'El Sargento',
      bgm: 'cross_exam_moderato'
    });
    expect(t3).toMatchObject({
      title: 'Testimonio: Lo que sí vi al subir',
      witness: 'Nicanor Tolentino',
      bgm: 'cross_exam_allegro'
    });
  });

  it('never uses truth BGM in day-1 trial dialogue', () => {
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

  it('maps contradictions and follow-ups per spec §11', () => {
    const [t1, t2, t3] = es.trial.testimonies;
    expect(contradictions(t1).map((s) => s.id)).toEqual(['c5_d1t1_3', 'c5_d1t1_4']);
    for (const id of ['c5_d1t1_3', 'c5_d1t1_4']) {
      expect(t1.statements.find((s) => s.id === id)?.contradiction, id).toMatchObject({
        evidence: ['informe_forense_c5'],
        followUp: { evidence: ['libro_visitas'] }
      });
    }
    const [enT1] = en.trial.testimonies;
    expect(contradictions(enT1).map((s) => s.id)).toEqual(['c5_d1t1_3', 'c5_d1t1_4']);

    expect(contradictions(t2)).toHaveLength(1);
    expect(t2.statements.find((s) => s.id === 'c5_d1t2_6')?.contradiction).toMatchObject({
      evidence: ['hoja_relevo'],
      followUp: { evidence: ['esquina_tarjeta'] }
    });
    expect(t2.statements.find((s) => s.id === 'c5_d1t2_6')?.unlockedBy).toBe('c5_d1t2_5');

    expect(contradictions(t3)).toHaveLength(1);
    expect(t3.statements.find((s) => s.id === 'c5_d1t3_4')?.contradiction).toMatchObject({
      evidence: ['plano_archivo'],
      followUp: { evidence: ['expediente_casimiro'] }
    });
  });

  it('resolves the fifteen-minute gap with the relay sheet, not the arrest report', () => {
    for (const script of [es, en]) {
      const [, t2] = script.trial.testimonies;
      const rule = t2.statements.find((s) => s.id === 'c5_d1t2_6')?.contradiction;
      expect(rule?.evidence).toEqual(['hoja_relevo']);
      expect(rule?.evidence).not.toContain('parte_detencion');
    }
  });

  it('drops the "nobody passes my door without signing" statement from day-1 testimony 1', () => {
    for (const script of [es, en]) {
      const [t1] = script.trial.testimonies;
      expect(t1.statements.map((s) => s.id)).toEqual(['c5_d1t1_1', 'c5_d1t1_2', 'c5_d1t1_3', 'c5_d1t1_4']);
    }
    const allText = [...trialDialogue(es), ...trialDialogue(en)].map((l) => l.text).join('\n');
    expect(allText).not.toMatch(/Por mi puerta no pasa nadie sin firmar/);
    expect(allText).not.toMatch(/Nobody passes my door without signing/);
  });

  it('never aliases contradiction successDialogue to followUp.successDialogue', () => {
    for (const testimony of es.trial.testimonies) {
      for (const stmt of contradictions(testimony)) {
        const rule = stmt.contradiction!;
        if (!rule.followUp) continue;
        expect(rule.followUp.successDialogue).not.toBe(rule.successDialogue);
        expect(rule.followUp.successDialogue.map((l) => l.text))
          .not.toEqual(rule.successDialogue.map((l) => l.text));
      }
    }
  });

  it('leaves day-1 Berrondo lines without an explicit bg so the prosecution-table camera applies', () => {
    for (const script of [es, en]) {
      const berrondo = trialDialogue(script).filter((l) => l.speaker === 'BERRONDO');
      expect(berrondo.length).toBeGreaterThan(0);
      for (const line of berrondo) expect(line.bg).toBeUndefined();
    }
  });

  it('mirrors Spanish day-1 trial structure in English without Spanish leakage', () => {
    assertEnglishTrialParity(en.trial, es.trial, trialDialogue(en));
  });
});
