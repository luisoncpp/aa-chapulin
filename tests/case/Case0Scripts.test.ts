// @Architecture(descriptionShort="Case 0 narrative and bilingual parity checks", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { getEvidenceCatalog } from '../../src/state/index.js';
import type { CaseScript, DialogueLine, PointTargetContradiction } from '../../src/types/index.js';

function collectCase0Lines(script: CaseScript): DialogueLine[] {
  const lines: DialogueLine[] = [
    ...script.trial.intro,
    ...(script.trial.openingPresent?.successDialogue ?? []),
    ...script.trial.climax.dialogue,
    ...script.trial.climax.verdict,
    ...(script.trial.climax.epilogue?.dialogue ?? [])
  ];
  for (const testimony of script.trial.testimonies) {
    for (const statement of testimony.statements) {
      lines.push({ speaker: statement.speaker, pose: statement.pose, text: statement.text });
      lines.push(...(statement.pressText ?? []));
      lines.push(...(statement.contradiction?.successDialogue ?? []));
      lines.push(...(statement.contradiction?.followUp?.successDialogue ?? []));
      collectPointFailureLines(lines, statement.contradiction?.pointTarget);
      collectPointFailureLines(lines, statement.contradiction?.followUp?.pointTarget);
    }
  }
  for (const stage of script.trial.climax.stages ?? []) {
    lines.push(...stage.successDialogue);
    collectPointFailureLines(lines, stage.pointTarget);
  }
  for (const choice of script.trial.climax.choices ?? []) {
    lines.push(...choice.successDialogue, ...choice.failDialogue);
  }
  return lines;
}

function collectPointFailureLines(lines: DialogueLine[], target?: PointTargetContradiction): void {
  for (const zone of target?.zones ?? []) lines.push(...zone.failureDialogue);
}

describe('Case 0 — El Primer Juicio de Monchito', () => {
  it('is a courtroom-only script with three testimony rounds', () => {
    const script = getCaseScript('es', 'case0');
    expect(script.startLocation).toBe('courtroom');
    expect(script.investigation).toEqual({});
    expect(script.adjournment).toBeUndefined();
    expect(script.trial.testimonies).toHaveLength(3);
    expect(script.trial.testimonies.map((testimony) =>
      testimony.statements.filter((statement) => statement.contradiction).length
    )).toEqual([1, 2, 1]);
  });

  it('keeps the evidence progression and climax gates exact', () => {
    const script = getCaseScript('es', 'case0');
    const [t1, t2, t3] = script.trial.testimonies;
    expect(t1.statements[2].contradiction?.evidence).toEqual(['parte_detencion']);
    expect(t1.statements[2].contradiction?.followUp?.evidence).toEqual(['recibo_hielo']);
    expect(t2.statements.slice(1, 3).map((statement) => statement.contradiction?.evidence)).toEqual([
      ['foto_patio'], ['foto_patio']
    ]);
    expect(t3.statements[1].contradiction?.evidence).toEqual(['parte_detencion']);
    expect(t3.statements[1].contradiction?.followUp?.evidence).toEqual(['tarjeta_enciclopedias']);
    expect(script.trial.climax.stages?.map((stage) => stage.presentTarget)).toEqual([
      ['plancha_carbon'], ['lata_ahorros']
    ]);
    expect(script.trial.climax.stages?.[0].requiredUpdateStage).toEqual({ informe_lesiones: 2 });
    expect(script.trial.climax.stages?.[1].requiredUpdateStage).toEqual({ lata_ahorros: 1 });
    expect(script.trial.climax.choicesAfterStage).toBe(0);
    expect(script.trial.climax.choices?.map((choice) => choice.id)).toEqual(['arma']);
    expect(script.trial.climax.choices?.[0].correctId).toBe('calma');
  });

  it('keeps Spanish and English testimony/climax structure aligned', () => {
    const es = getCaseScript('es', 'case0');
    const en = getCaseScript('en', 'case0');
    expect(en.trial.testimonies.map((t) => t.statements.length)).toEqual(es.trial.testimonies.map((t) => t.statements.length));
    expect(en.trial.testimonies.flatMap((t) => t.statements.map((s) => s.id))).toEqual(es.trial.testimonies.flatMap((t) => t.statements.map((s) => s.id)));
    expect(en.trial.testimonies[1].statements.slice(1, 3).map((s) => s.contradiction?.evidence)).toEqual(es.trial.testimonies[1].statements.slice(1, 3).map((s) => s.contradiction?.evidence));
    expect(en.trial.climax.stages?.map((stage) => stage.presentTarget)).toEqual(es.trial.climax.stages?.map((stage) => stage.presentTarget));
    expect(en.trial.climax.choices?.map((choice) => choice.correctId)).toEqual(es.trial.climax.choices?.map((choice) => choice.correctId));
    expect(getEvidenceCatalog('en', 'case0')).toHaveProperty('tarjeta_enciclopedias');
  });

  it('stages the pre-trial and recess scenes in the waiting room', () => {
    for (const lang of ['es', 'en'] as const) {
      const script = getCaseScript(lang, 'case0');
      const introLobby = script.trial.intro.filter((line) =>
        line.bg === 'assets/bg_waiting_room.webp'
      );
      const recessLobby = script.trial.testimonies[1].statements[1]
        .contradiction!.successDialogue.filter((line) => line.bg === 'assets/bg_waiting_room.webp');

      expect(introLobby).not.toHaveLength(0);
      expect(recessLobby).not.toHaveLength(0);
      expect([...introLobby, ...recessLobby].every((line) => line.furniture === 'none')).toBe(true);
      expect([...introLobby, ...recessLobby].filter((line) =>
        line.speaker === 'MODO TUTORIAL' || line.speaker === 'TUTORIAL MODE'
      ).every((line) => line.instant)).toBe(true);
    }
  });

  it('does not repeat the dialogue advance instruction after the player has advanced', () => {
    for (const lang of ['es', 'en'] as const) {
      const introTutorialLines = getCaseScript(lang, 'case0').trial.intro.filter((line) =>
        line.speaker === 'MODO TUTORIAL' || line.speaker === 'TUTORIAL MODE'
      );

      expect(introTutorialLines).toEqual([]);
    }
  });

  it('returns from recess on the judge plate before speaker staging resumes', () => {
    for (const lang of ['es', 'en'] as const) {
      const success = getCaseScript(lang, 'case0').trial.testimonies[1]
        .statements[1].contradiction!.successDialogue;
      const recessStart = success.findIndex((line) => line.bg === 'assets/bg_waiting_room.webp');
      const courtReturn = success.findIndex((line, index) =>
        index > recessStart && line.bg !== 'assets/bg_waiting_room.webp'
      );
      const briefcase = success.findIndex((line) => line.addEvidence === 'maletin_cobranza');
      const card = success.findIndex((line) => line.addEvidence === 'tarjeta_enciclopedias');

      expect(recessStart).toBeGreaterThan(0);
      expect(courtReturn).toBeGreaterThan(recessStart);
      expect(briefcase).toBeGreaterThan(recessStart);
      expect(card).toBeGreaterThan(briefcase);
      expect(success[courtReturn]).toMatchObject({
        bg: 'assets/bg_judge.webp',
        furniture: 'none'
      });
      expect(success.slice(courtReturn).some((line) =>
        line.bg === 'assets/bg_courtroom.webp' || line.furniture === 'bench'
      )).toBe(false);
    }
  });

  it('keeps the complete opening tutorial and witness introduction reachable', () => {
    const introText = getCaseScript('es', 'case0').trial.intro.map((line) => line.text);
    const lines = getCaseScript('es', 'case0').trial.openingPresent!.successDialogue;
    const text = lines.map((line) => line.text);
    expect(introText).toContain('En esta apertura, el ACTA DEL JUICIO se abrirá sola. Cuando se abra, selecciona la insignia y pulsa el botón ¡Presentar Prueba!');
    expect(text).toContain('Durante el interrogatorio, pulsa 📜 PRESENTAR para abrir el Acta. Allí elige una prueba y pulsa el botón ¡Presentar Prueba!');
    expect(text).toContain('El corazón amarillo del botón ACTA DEL JUICIO abre el Acta.');
    expect(text).toContain('Una prueba equivocada apaga uno de los cinco signos de exclamación verdes de la barra de arriba.');
    expect(text).not.toContain('¡Muy bien! Así se presenta una prueba: se abre el Acta, se escoge y se aprieta PRESENTAR.');
    expect(text).not.toContain('Nomás una cosita: presentar la prueba equivocada cuesta credibilidad. Ese corazoncito de arriba es lo que te queda.');
    expect(text.some((line) => line.includes('Amnesia'))).toBe(true);
    expect(text.some((line) => line.includes('nombre y su ocupación'))).toBe(true);
    expect(text.at(-1)).toBe('Su testimonio, por favor. Únicamente lo que percibió.');
    expect(lines.at(-2)).toMatchObject({ speaker: 'CASIMIRO', pose: 'casimiro_catalogo' });
  });

  it('gives every incorrect Case 0 point zone the full coaching response', () => {
    for (const lang of ['es', 'en'] as const) {
      const targets = [
        getCaseScript(lang, 'case0').trial.testimonies[1].statements[2].contradiction!.pointTarget!,
        ...(getCaseScript(lang, 'case0').trial.climax.stages ?? [])
          .map((stage) => stage.pointTarget!).filter(Boolean)
      ];
      for (const target of targets) {
        const wrongZones = target.zones.filter((zone) => !zone.isCorrect);
        expect(wrongZones.every((zone) => zone.failureDialogue)).toBe(true);
        expect(wrongZones.every((zone) => zone.failureDialogue).valueOf()).toBe(true);
        expect(wrongZones[0].failureDialogue.map((line) => line.speaker)).toEqual([
          'JUEZ', 'SUPER SAM', 'CHAPULÍN'
        ]);
        expect(wrongZones[0].failureDialogue.every((line) => line.pose)).toBe(true);
      }
    }
  });

  it('requires examining the courtyard photo before its point contradiction', () => {
    expect(getCaseScript('es', 'case0').trial.testimonies[1].statements[2].contradiction)
      .toMatchObject({ requiresExamine: 'foto_patio' });
  });

  it('teaches detail examination before the required evidence action', () => {
    const cases = [
      {
        lang: 'es' as const,
        evidenceName: 'foto del patio',
        action: 'Señala en la imagen',
        staleOptionalEvidence: 'recibo'
      },
      {
        lang: 'en' as const,
        evidenceName: 'courtyard photo',
        action: 'Point to the image',
        staleOptionalEvidence: 'receipt'
      }
    ];

    for (const { lang, evidenceName, action, staleOptionalEvidence } of cases) {
      const script = getCaseScript(lang, 'case0');
      const openingText = script.trial.openingPresent!.successDialogue.map((line) => line.text).join(' ');
      const pointTargets = [
        script.trial.testimonies[1].statements[2].contradiction!.pointTarget!,
        script.trial.climax.stages![0].pointTarget!
      ];
      const pointText = [
        ...script.trial.testimonies[1].statements[2].contradiction!.successDialogue,
        ...script.trial.climax.stages![0].successDialogue
      ].map((line) => line.text);
      const pointInstructionSpeakers = new Set(lang === 'en'
        ? ['EXAMINE MODE']
        : ['MODO EXAMINAR']);
      const pointSuccessLines = [
        ...script.trial.testimonies[1].statements[2].contradiction!.successDialogue,
        ...script.trial.climax.stages![0].successDialogue
      ];

      expect(openingText.toLowerCase()).toContain(evidenceName);
      expect(openingText.toLowerCase()).not.toContain(staleOptionalEvidence);
      expect(pointTargets.every((target) => target.promptQuestion.includes(action))).toBe(true);
      expect(pointText.every((text) => !text.includes(action))).toBe(true);
      expect(pointSuccessLines.some((line) => pointInstructionSpeakers.has(line.speaker ?? ''))).toBe(false);
    }
  });

  it('uses the Case 0 newspaper waiting-room variant for both epilogues', () => {
    for (const lang of ['es', 'en'] as const) {
      const epilogue = getCaseScript(lang, 'case0').trial.climax.epilogue;
      expect(epilogue?.bg).toBe('assets/bg_waiting_room_case0.webp');
      expect(epilogue?.dialogue.every((line) => line.bg === epilogue.bg)).toBe(true);
    }
  });

  it('gives every visible dialogue line a Case 0 pose in both languages', () => {
    for (const lang of ['es', 'en'] as const) {
      const metaSpeakers = new Set(lang === 'en'
        ? ['NARRADOR', 'EXAMINE MODE', 'TUTORIAL MODE', 'BAILIFF']
        : ['NARRADOR', 'MODO EXAMINAR', 'MODO TUTORIAL', 'ALGUACIL']);
      const missing = collectCase0Lines(getCaseScript(lang, 'case0'))
        .filter((line) => line.speaker && !metaSpeakers.has(line.speaker) && !line.pose)
        .map((line) => `${line.speaker}: ${line.text}`);

      expect(missing).toEqual([]);
    }
  });

  it('starts every press response with the Hold It cut-in in both languages', () => {
    for (const lang of ['es', 'en'] as const) {
      const missingCutins = getCaseScript(lang, 'case0').trial.testimonies
        .flatMap((testimony) => testimony.statements)
        .map((statement) => statement.pressText?.[0])
        .filter((line) => line?.cutin !== 'objection_un_momento');

      expect(missingCutins).toEqual([]);
    }
  });

  it('ensures dialogues and prompts are clearly phrased without awkward idioms', () => {
    const es = getCaseScript('es', 'case0');
    const en = getCaseScript('en', 'case0');

    // Judge should not call defendant "mi cliente" / "my client"
    const judgeLinesEs = collectCase0Lines(es).filter((line) => line.speaker === 'JUEZ');
    const judgeLinesEn = collectCase0Lines(en).filter((line) => line.speaker === 'JUEZ');
    expect(judgeLinesEs.some((l) => l.text.includes('mi cliente'))).toBe(false);
    expect(judgeLinesEn.some((l) => l.text.includes('my client'))).toBe(false);

    // No awkward "formado por hielo"
    expect(judgeLinesEs.some((l) => l.text.includes('formado por hielo'))).toBe(false);

    // Clear T3 prompt
    const t3FollowUpEs = es.trial.testimonies[2].statements[1].contradiction?.followUp;
    const t3FollowUpEn = en.trial.testimonies[2].statements[1].contradiction?.followUp;
    expect(t3FollowUpEs?.prompt).toBe('¿Qué dice el oficio del testigo sobre su presencia en la vecindad?');
    expect(t3FollowUpEn?.prompt).toBe('What does the witness\'s occupation say about his presence in the neighborhood?');
  });

  it('escalates cross-examination tempos and provides dynamic BGM cues on contradictions and climax', () => {
    for (const lang of ['es', 'en'] as const) {
      const script = getCaseScript(lang, 'case0');
      const [t1, t2, t3] = script.trial.testimonies;
      expect(t1.bgm).toBe('cross_exam_moderato');
      expect(t2.bgm).toBe('cross_exam_allegro');
      expect(t3.bgm).toBe('cross_exam_presto');

      // Contradictions trigger objection or pursuit
      expect(t1.statements[2].contradiction?.successDialogue[0].bgm).toBe('objection');
      expect(t2.statements[1].contradiction?.successDialogue[0].bgm).toBe('objection');
      expect(t3.statements[1].contradiction?.successDialogue[0].bgm).toBe('objection');
      expect(t3.statements[1].contradiction?.followUp?.successDialogue[0].bgm).toBe('pursuit');

      // Climax stages trigger pursuit
      expect(script.trial.climax.stages?.[0].successDialogue[0].bgm).toBe('pursuit');
      expect(script.trial.climax.stages?.[1].successDialogue[0].bgm).toBe('pursuit');
    }
  });
});
