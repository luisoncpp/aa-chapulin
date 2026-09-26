// @Architecture(descriptionShort="Unit tests for Case 5 day-3 Spanish trial script", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import type { CaseScript, DialogueLine, Statement, Testimony } from '../../src/types/index.js';
import { assertEnglishTrialParity } from './case5Parity.js';

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
      lines.push(...(stmt.deflect?.dialogue ?? []));
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
    expect(day3.openingPresent?.prompt).toBe('¿Qué iba a señalar la víctima en esa diligencia?');
    expect(en.adjournment?.next?.trial.openingPresent?.evidence).toEqual(['efectos_casimiro']);
  });



  it('lets Don Ramón advise Chapulín through the Case 5 press hint', () => {
    expect(es.pressHint).toMatchObject([{
      speaker: 'DON RAMÓN',
      pose: 'donramon_point'
    }]);
    expect(es.pressHint?.[0].text).toContain('Chapulín');
    expect(en.pressHint).toMatchObject([{
      speaker: 'DON RAMÓN',
      pose: 'donramon_point'
    }]);
    expect(en.pressHint?.[0].text).toContain('Chapulin');
    expect(es.pressHint?.[0].text).not.toContain('Don Ramón');
    expect(en.pressHint?.[0].text).not.toContain('Don Ramón');
  });



  it('deflects premature presents instead of penalizing them', () => {
    const [t6] = day3.testimonies;
    const t7 = day3.testimonies[1];
    const t8 = day3.testimonies[2];
    const enT6 = day3Trial(en).testimonies[0];
    const enT8 = day3Trial(en).testimonies[2];

    expect(t6.statements.find((s) => s.id === 'c5_d3t1_2')?.deflect?.evidence).toEqual(['huacal_9']);
    expect(t6.statements.find((s) => s.id === 'c5_d3t1_3')?.deflect?.evidence)
      .toEqual(['maquina_escribir']);
    expect(enT6.statements.find((s) => s.id === 'c5_d3t1_2')?.deflect?.dialogue)
      .not.toBe(t6.statements.find((s) => s.id === 'c5_d3t1_2')?.deflect?.dialogue);
    expect(t7.statements.find((s) => s.id === 'c5_d3t2_3')?.deflect?.evidence)
      .toEqual(['huacal_9']);
    expect(t8.statements.find((s) => s.id === 'c5_d3t3_5')?.deflect?.evidence)
      .toEqual(['oficio_diligencia']);
    expect(t8.statements.find((s) => s.id === 'c5_d3t3_6')?.deflect?.evidence)
      .toEqual(['oficio_diligencia']);
    expect(enT8.statements.find((s) => s.id === 'c5_d3t3_5')?.deflect?.dialogue)
      .not.toBe(t8.statements.find((s) => s.id === 'c5_d3t3_5')?.deflect?.dialogue);
  });

  it('keeps the deflections out of the dramatic cue and on the court voice', () => {
    const deflections = day3.testimonies
      .flatMap((t) => t.statements)
      .flatMap((s) => s.deflect?.dialogue ?? []);

    expect(deflections.length).toBeGreaterThan(0);
    deflections.forEach((line) => {
      expect(line.bgm, line.text).toBeUndefined();
      expect(line.cutin, line.text).toBeUndefined();
    });
    expect(deflections.filter((line) => line.speaker !== 'JUEZ')
      .every((line) => line.speaker === 'DEFENSA')).toBe(true);
  });

  it('never uses truth BGM in day-3 trial dialogue', () => {
    lines.forEach((line) => {
      expect(line.bgm).not.toBe('truth');
    });
  });

  it('keeps Super Sam press responses on the testimony music in both languages', () => {
    [day3.testimonies[1], (day3Trial(en).testimonies[1])].forEach((superSam) => {
      const pressedLines = superSam.statements.flatMap((statement) => statement.pressText ?? []);

      expect(pressedLines.some((line) => line.bgm)).toBe(false);
    });
  });

  it('keeps the secretary visible while the narrator describes his written entry', () => {
    const spanishLine = lines.find((line) => line.text === 'El secretario levanta la pluma.');
    const englishLines = trialDialogue(day3Trial(en));
    const englishLine = englishLines.find((line) => line.text === 'The clerk lifts his pen.');

    expect(spanishLine).toMatchObject({ speaker: 'NARRADOR', pose: 'secretario_leyendo' });
    expect(englishLine).toMatchObject({ speaker: 'NARRADOR', pose: 'secretario_leyendo' });
  });

  it('does not add a redundant sweat caption after Berrondo already reacts', () => {
    const englishLines = trialDialogue(day3Trial(en));

    expect(lines.some((line) => line.text === 'Primera gota de sudor en tres jornadas.')).toBe(false);
    expect(englishLines.some((line) => line.text === 'First drop of sweat in three days.')).toBe(false);
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

  it('mirrors Spanish day-3 trial structure in English without Spanish leakage', () => {
    const enDay3 = day3Trial(en);
    const esDay3 = day3Trial(es);
    assertEnglishTrialParity(enDay3, esDay3, trialDialogue(enDay3));
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
