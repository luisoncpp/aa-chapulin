// @Architecture(descriptionShort="Unit tests validating case narrative scripts and contradictions", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { CASE_SCRIPT, getCaseScript } from '../../src/case/index.js';
import { gameState, getEvidenceCatalog } from '../../src/state/index.js';

describe('Case Scripts Narrative Integrity', () => {
  const case1Catalog = getEvidenceCatalog('es', 'case1');

  it('validates investigation scenes and hotspot references', () => {
    expect(CASE_SCRIPT.investigation.museo_sala2).toBeDefined();
    expect(CASE_SCRIPT.investigation.detention).toBeDefined();

    const museum = CASE_SCRIPT.investigation.museo_sala2;
    expect(museum.hotspots.length).toBeGreaterThan(0);
    expect(CASE_SCRIPT.investigation.detention.talkOptions?.length).toBeGreaterThan(0);

    museum.hotspots.forEach((h) => {
      expect(h.id).toBeDefined();
      expect(h.label).toBeDefined();
      expect(h.x).toBeGreaterThanOrEqual(0);
      expect(h.y).toBeGreaterThanOrEqual(0);
      expect(h.w).toBeGreaterThan(0);
      expect(h.h).toBeGreaterThan(0);
      h.dialogue.forEach((line) => {
        if (line.addEvidence) expect(case1Catalog[line.addEvidence]).toBeDefined();
        if (line.updateEvidence) {
          expect(case1Catalog[line.updateEvidence].updates?.length).toBeGreaterThan(0);
        }
      });
    });
  });

  it('validates trial testimony 1 statements and contradictions', () => {
    const t1 = CASE_SCRIPT.trial.testimony1!;
    expect(t1.title).toBeDefined();
    expect(t1.witness).toBe('Doña Florinda');

    const contradictionStmt = t1.statements.find((s) => s.contradiction);
    expect(contradictionStmt?.contradiction?.evidence).toContain('parte_detencion');
    expect(contradictionStmt?.contradiction?.followUp).toBeUndefined();
    expect(contradictionStmt?.contradiction?.successDialogue.length).toBeGreaterThan(0);
  });

  it('validates trial testimony 2 statements and contradictions', () => {
    const t2 = CASE_SCRIPT.trial.testimony2!;

    const unlocked = t2.statements.find((s) => s.unlockedBy);
    expect(unlocked?.contradiction?.evidence).toContain('informe_medico');
  });

  it('validates climax confrontation and verdict sequence', () => {
    const climax = CASE_SCRIPT.trial.climax;
    expect(climax.dialogue.length).toBeGreaterThan(0);
    expect(climax.verdict.length).toBeGreaterThan(0);

    const innocentLine = climax.verdict.find((l) => l.text.includes('¡INOCENTE!'));
    expect(innocentLine).toBeDefined();
  });

  it('has Don Ramón read the museum card in both languages', () => {
    for (const language of ['es', 'en'] as const) {
      const climax = getCaseScript(language, 'case1').trial.climax;
      const cardLines = climax.stages?.at(-1)?.successDialogue.filter((line) => (
        line.bg?.includes('examine_ficha_museo')
      ));

      expect(cardLines?.length).toBeGreaterThan(0);
      expect(cardLines?.every((line) => line.speaker === 'DEFENSA')).toBe(true);
    }
  });

  it('wires court-record description updates to catalog variants', () => {
    const camaras = CASE_SCRIPT.investigation.cuarto_camaras.hotspots;
    const rollLog = camaras.find((h) => h.id === 'hotspot_bitacora_rollo');
    expect(rollLog?.dialogue.some((l) => l.updateEvidence === 'foto_crimen')).toBe(true);
    expect(case1Catalog.informe_medico.updates?.length).toBe(2);

    const case2 = getCaseScript('es', 'case2');
    const generator = case2.investigation.restaurante.hotspots.find((h) => h.id === 'hotspot_generador');
    expect(generator?.dialogue.some((l) => l.updateEvidence === 'palanca_rota')).toBe(true);
    expect(gameState.allEvidence.palanca_rota.updatedDesc).toBeDefined();
  });

  it('keeps Case 2 thanks-you dialogue in the waiting-room epilogue', () => {
    const case2 = getCaseScript('es', 'case2');
    const climax = case2.trial.climax;
    expect(climax.epilogue?.bg).toBe('assets/bg_waiting_room.webp');
    expect(climax.epilogue?.dialogue[0]?.speaker).toBe('NARRADOR');
    expect(climax.epilogue?.dialogue.some((l) => l.speaker === 'CHOMPIRAS')).toBe(true);
    expect(climax.verdict.some((l) => l.speaker === 'CHOMPIRAS')).toBe(false);
    const en = getCaseScript('en', 'case2').trial.climax;
    expect(en.epilogue?.dialogue.length).toBe(climax.epilogue?.dialogue.length);
  });
});
