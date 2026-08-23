// @Architecture(descriptionShort="Unit tests validating case narrative scripts and contradictions", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { CASE_SCRIPT } from '../../src/case/index.js';
import { EVIDENCE_CATALOG } from '../../src/state/index.js';

describe('Case Scripts Narrative Integrity', () => {
  it('validates investigation scenes and hotspot references', () => {
    expect(CASE_SCRIPT.investigation.museum).toBeDefined();
    expect(CASE_SCRIPT.investigation.detention).toBeDefined();

    const museum = CASE_SCRIPT.investigation.museum;
    expect(museum.hotspots.length).toBeGreaterThan(0);
    expect(museum.talkOptions?.length).toBeGreaterThan(0);

    museum.hotspots.forEach((h) => {
      expect(h.id).toBeDefined();
      expect(h.label).toBeDefined();
      expect(h.x).toBeGreaterThanOrEqual(0);
      expect(h.y).toBeGreaterThanOrEqual(0);
      expect(h.w).toBeGreaterThan(0);
      expect(h.h).toBeGreaterThan(0);
      h.dialogue.forEach((line) => {
        if (line.addEvidence) {
          expect(EVIDENCE_CATALOG[line.addEvidence]).toBeDefined();
        }
      });
    });
  });

  it('validates trial testimony 1 statements and contradictions', () => {
    const t1 = CASE_SCRIPT.trial.testimony1;
    expect(t1.title).toBeDefined();
    expect(t1.witness).toBe('El Tripaseca');
    expect(t1.statements.length).toBe(3);

    const contradictionStmt = t1.statements.find((s) => s.contradiction);
    expect(contradictionStmt).toBeDefined();
    expect(contradictionStmt?.contradiction?.evidence).toContain('chipote_chillon');
    expect(contradictionStmt?.contradiction?.evidence).toContain('informe_medico');
    expect(contradictionStmt?.contradiction?.successDialogue.length).toBeGreaterThan(0);
  });

  it('validates trial testimony 2 statements and contradictions', () => {
    const t2 = CASE_SCRIPT.trial.testimony2;
    expect(t2.statements.length).toBe(2);

    expect(t2.statements[0].contradiction?.evidence).toContain('pastillas_chiquitolina');
    expect(t2.statements[1].contradiction?.evidence).toContain('foto_crimen');
  });

  it('validates climax confrontation and verdict sequence', () => {
    const climax = CASE_SCRIPT.trial.climax;
    expect(climax.dialogue.length).toBeGreaterThan(0);
    expect(climax.presentTarget).toContain('antenitas_vinil');
    expect(climax.presentTarget).toContain('bolsa_dolares');
    expect(climax.verdict.length).toBeGreaterThan(0);

    const innocentLine = climax.verdict.find((l) => l.text.includes('¡INOCENTE!'));
    expect(innocentLine).toBeDefined();
  });
});
