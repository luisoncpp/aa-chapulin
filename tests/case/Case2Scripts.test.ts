// @Architecture(descriptionShort="Unit tests for Case 2 scenes, contradictions, and bilingual parity", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { getEvidenceCatalog } from '../../src/state/index.js';

describe('Case 2 El Juicio del Chómpiras', () => {
  const es = getCaseScript('es', 'case2');
  const en = getCaseScript('en', 'case2');
  const catalog = getEvidenceCatalog('es');

  it('defines five investigation locations starting at detention', () => {
    expect(es.id).toBe('case2');
    expect(es.startLocation).toBe('detention');
    expect(Object.keys(es.investigation)).toEqual(Object.keys(en.investigation));
    expect(es.investigation.detention).toBeDefined();
    expect(es.investigation.boveda).toBeDefined();
    expect(es.investigation.restaurante).toBeDefined();
    expect(es.investigation.oficina_postal).toBeDefined();
    expect(es.investigation.casa_clotilde).toBeDefined();
  });

  it('requires day-1 evidence before the first trial', () => {
    expect(es.requiredEvidence).toEqual([
      'palanca_rota', 'informe_boveda', 'reloj_pendulo',
      'aroma_dulce', 'plano_hacienda', 'caja_generador'
    ]);
    es.requiredEvidence.forEach((id) => {
      expect(catalog[id]).toBeDefined();
    });
  });

  it('maps day-1 contradictions to the pendulum clock and vault report', () => {
    const t1 = es.trial.testimony1.statements.find((s) => s.id === 'stmt1_4');
    expect(t1?.contradiction?.evidence).toEqual(['reloj_pendulo', 'caja_generador']);
    const t2Contra = es.trial.testimony2.statements.filter((s) => s.contradiction);
    expect(t2Contra.length).toBe(3);
    expect(t2Contra[0].contradiction?.evidence).toContain('informe_boveda');
  });

  it('adjourns to day-2 investigation then a second trial and climax', () => {
    expect(es.adjournment?.nextLocation).toBe('oficina_postal');
    expect(es.adjournment?.requiredEvidence).toContain('lata_grasa');
    expect(es.adjournment?.trial.testimony1.statements.some((s) => s.contradiction)).toBe(true);
    expect(es.adjournment?.trial.testimony2.statements.some((s) => s.contradiction?.evidence.includes('plano_hacienda'))).toBe(true);
    expect(es.trial.climax.presentTarget).toEqual(['lata_grasa', 'antenitas_vinil']);
  });

  it('keeps English scripts in lockstep with Spanish contradictions', () => {
    expect(en.trial.testimony1.statements.length).toBe(es.trial.testimony1.statements.length);
    expect(en.trial.climax.presentTarget).toEqual(es.trial.climax.presentTarget);
    const esT1 = es.trial.testimony1.statements.find((s) => s.contradiction);
    const enT1 = en.trial.testimony1.statements.find((s) => s.contradiction);
    expect(enT1?.contradiction?.evidence).toEqual(esT1?.contradiction?.evidence);
  });
});
