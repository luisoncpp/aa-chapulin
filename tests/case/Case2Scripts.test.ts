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
    expect(es.trial.climax.stages?.map((s) => s.presentTarget)).toEqual([
      ['lata_grasa', 'antenitas_vinil'],
      ['frasco_valeriana', 'aroma_dulce'],
      ['molde_cera']
    ]);
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

  it('places investigation hotspots on the 16:9 cover crop of each background', () => {
    const geom = (h: { id: string; x: number; y: number; w: number; h: number }) => (
      { id: h.id, x: h.x, y: h.y, w: h.w, h: h.h }
    );
    expect(es.investigation.detention.hotspots.map(geom)).toEqual([
      { id: 'chompiras_spot', x: 22, y: 16, w: 36, h: 50 },
      { id: 'phone_spot', x: 86, y: 16, w: 13, h: 40 }
    ]);
    expect(es.investigation.boveda.hotspots.map(geom)).toEqual([
      { id: 'hotspot_caja', x: 16, y: 16, w: 36, h: 58 },
      { id: 'hotspot_reloj', x: 54, y: 8, w: 12, h: 44 },
      { id: 'hotspot_rejilla', x: 70, y: 30, w: 16, h: 28 }
    ]);
    expect(es.investigation.restaurante.hotspots.map(geom)).toEqual([
      { id: 'hotspot_plano', x: 36, y: 48, w: 22, h: 22 },
      { id: 'hotspot_generador', x: 69, y: 30, w: 13, h: 28 }
    ]);
    expect(es.investigation.oficina_postal.hotspots.map(geom)).toEqual([
      { id: 'hotspot_multa', x: 2, y: 40, w: 11, h: 22 },
      { id: 'hotspot_registro', x: 13, y: 30, w: 16, h: 28 },
      { id: 'hotspot_saca_postal', x: 28, y: 55, w: 22, h: 20 }
    ]);
    expect(es.investigation.casa_clotilde.hotspots.map(geom)).toEqual([
      { id: 'hotspot_frasco', x: 32, y: 14, w: 24, h: 32 },
      { id: 'hotspot_basura', x: 30, y: 74, w: 22, h: 24 }
    ]);
    for (const loc of Object.keys(es.investigation)) {
      expect(en.investigation[loc].hotspots.map(geom)).toEqual(
        es.investigation[loc].hotspots.map(geom)
      );
    }
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


