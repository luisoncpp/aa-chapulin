// @Architecture(descriptionShort="Unit tests validating case narrative scripts and contradictions", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { CASE_SCRIPT, getCaseScript } from '../../src/case/index.js';
import { gameState } from '../../src/state/index.js';

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
          expect(gameState.allEvidence[line.addEvidence]).toBeDefined();
        }
        if (line.updateEvidence) {
          expect(gameState.allEvidence[line.updateEvidence]).toBeDefined();
          expect(gameState.allEvidence[line.updateEvidence].updatedDesc).toBeDefined();
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

  it('wires court-record description updates to catalog variants', () => {
    const detentionTalk = CASE_SCRIPT.investigation.detention.talkOptions;
    const story = detentionTalk.find((t) => t.id === 'chapulin_story');
    const weapon = detentionTalk.find((t) => t.id === 'chapulin_weapon');
    expect(story?.dialogue.some((l) => l.updateEvidence === 'antenitas_vinil')).toBe(true);
    expect(weapon?.dialogue.some((l) => l.updateEvidence === 'chipote_chillon')).toBe(true);

    const case2 = getCaseScript('es', 'case2');
    const generator = case2.investigation.restaurante.hotspots.find((h) => h.id === 'hotspot_generador');
    expect(generator?.dialogue.some((l) => l.updateEvidence === 'palanca_rota')).toBe(true);
    expect(gameState.allEvidence.palanca_rota.updatedDesc).toBeDefined();
  });

  it('keeps Case 2 thanks-you dialogue in the waiting-room epilogue', () => {
    const case2 = getCaseScript('es', 'case2');
    const climax = case2.trial.climax;
    expect(climax.epilogue?.bg).toBe('assets/bg_waiting_room.jpg');
    expect(climax.epilogue?.dialogue[0]?.speaker).toBe('NARRADOR');
    expect(climax.epilogue?.dialogue.some((l) => l.speaker === 'CHOMPIRAS')).toBe(true);
    expect(climax.verdict.some((l) => l.speaker === 'CHOMPIRAS')).toBe(false);
    const en = getCaseScript('en', 'case2').trial.climax;
    expect(en.epilogue?.dialogue.length).toBe(climax.epilogue?.dialogue.length);
  });
});
