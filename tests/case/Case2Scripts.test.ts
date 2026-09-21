// @Architecture(descriptionShort="Unit tests for Case 2 scenes, contradictions, and bilingual parity", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { GameStateManager, getEvidenceCatalog } from '../../src/state/index.js';

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
    es.requiredEvidence.forEach((id) => {
      expect(catalog[id]).toBeDefined();
    });
  });

  it('maps day-1 contradictions to the pendulum clock and vault report', () => {
    const t1 = es.trial.testimony1.statements.find((s) => s.id === 'stmt1_4');
    expect(t1?.contradiction).toBeDefined();
    const t2Contra = es.trial.testimony2.statements.filter((s) => s.contradiction);
    expect(t2Contra.length).toBe(3);
  });

  it('adjourns to day-2 investigation then a second trial and climax', () => {
    expect(es.adjournment?.nextLocation).toBe('oficina_postal');
    expect(es.adjournment?.requiredEvidence.length).toBeGreaterThan(0);
    expect(es.adjournment?.trial.testimony1.statements.some((s) => s.contradiction)).toBe(true);
    expect(es.adjournment?.trial.testimony2.statements.some((s) => s.contradiction)).toBe(true);
  });

  it('keeps English scripts in lockstep with Spanish contradictions', () => {
    expect(en.trial.testimony1.statements.length).toBe(es.trial.testimony1.statements.length);
    expect(en.trial.climax.presentTarget).toEqual(es.trial.climax.presentTarget);
    expect(en.trial.climax.stages?.map((s) => s.presentTarget)).toEqual(
      es.trial.climax.stages?.map((s) => s.presentTarget)
    );
    const esT1 = es.trial.testimony1.statements.find((s) => s.contradiction);
    const enT1 = en.trial.testimony1.statements.find((s) => s.contradiction);
    expect(enT1?.contradiction?.evidence).toEqual(esT1?.contradiction?.evidence);
  });

  it('names Peterete as suspect one at detention without naming him at Clotilde', () => {
    const petereteTalk = es.investigation.detention.talkOptions.find((o) => o.id === 'about_peterete');
    expect(petereteTalk?.dialogue.some((l) => l.text.includes('sospechoso número uno'))).toBe(true);
    expect(en.investigation.detention.talkOptions.find((o) => o.id === 'about_peterete')?.dialogue.length)
      .toBe(petereteTalk?.dialogue.length);
    const clotildeIntro = es.investigation.casa_clotilde.intro.map((l) => l.text).join(' ');
    expect(clotildeIntro).toContain('hombre muy elegante');
    expect(clotildeIntro).not.toContain('Peterete');
    expect(catalog.frasco_valeriana.desc).toContain('misterioso');
    expect(catalog.molde_cera.desc).toContain('misterioso');
  });

  it('defines two climax choices with matching ids in ES and EN', () => {
    const esChoices = es.trial.climax.choices!;
    const enChoices = en.trial.climax.choices!;
    expect(esChoices).toHaveLength(2);
    expect(enChoices).toHaveLength(2);
    expect(esChoices.map((c) => c.id)).toEqual(enChoices.map((c) => c.id));
    expect(esChoices.map((c) => c.correctId)).toEqual(enChoices.map((c) => c.correctId));
    expect(esChoices[0].correctId).toBe('purchase_time');
    expect(esChoices[1].correctId).toBe('security_chief');
  });

  it('delivers molde_cera via the talk option about_peterete_visit rather than hotspot_basura', () => {
    const esHotspotBasura = es.investigation.casa_clotilde.hotspots.find((h) => h.id === 'hotspot_basura');
    const enHotspotBasura = en.investigation.casa_clotilde.hotspots.find((h) => h.id === 'hotspot_basura');
    expect(esHotspotBasura?.dialogue.some((d) => d.addEvidence === 'molde_cera')).toBe(false);
    expect(enHotspotBasura?.dialogue.some((d) => d.addEvidence === 'molde_cera')).toBe(false);

    const esTalk = es.investigation.casa_clotilde.talkOptions.find((o) => o.id === 'about_peterete_visit');
    const enTalk = en.investigation.casa_clotilde.talkOptions.find((o) => o.id === 'about_peterete_visit');
    expect(esTalk?.dialogue.some((d) => d.addEvidence === 'molde_cera')).toBe(true);
    expect(enTalk?.dialogue.some((d) => d.addEvidence === 'molde_cera')).toBe(true);
  });

  it('gates Case 2 Day 2 trial readiness strictly behind about_peterete_visit talk topic', () => {
    const state = new GameStateManager();
    state.beginNewCase(es);
    state.beginNextTrialDay(es.adjournment!);

    state.addEvidence('multa_transito');
    state.addEvidence('registro_postal');
    state.addEvidence('lata_grasa');
    state.addEvidence('antenitas_vinil');
    state.addEvidence('frasco_valeriana');

    const basuraDialogue = es.investigation.casa_clotilde.hotspots
      .find((h) => h.id === 'hotspot_basura')?.dialogue || [];
    basuraDialogue.forEach((l) => {
      if (l.addEvidence) state.addEvidence(l.addEvidence);
    });

    expect(state.hasEvidence('molde_cera')).toBe(false);
    expect(state.checkTrialReadiness()).toBe(false);

    const talkDialogue = es.investigation.casa_clotilde.talkOptions
      .find((o) => o.id === 'about_peterete_visit')?.dialogue || [];
    talkDialogue.forEach((l) => {
      if (l.addEvidence) state.addEvidence(l.addEvidence);
    });

    expect(state.hasEvidence('molde_cera')).toBe(true);
    expect(state.checkTrialReadiness()).toBe(true);
  });
});


