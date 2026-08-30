// @Architecture(descriptionShort="Unit tests for Case 3 scenes, unlocks, and bilingual parity", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { getEvidenceCatalog } from '../../src/state/index.js';

function allStatements(script: ReturnType<typeof getCaseScript>) {
  const days = [
    script.trial.testimony1,
    script.trial.testimony2,
    script.adjournment!.trial.testimony1,
    script.adjournment!.trial.testimony2,
    script.adjournment!.next!.trial.testimony1,
    script.adjournment!.next!.trial.testimony2
  ];
  return days.flatMap((t) => t.statements);
}

describe('Case 3 La Noche del Grito', () => {
  const es = getCaseScript('es', 'case3');
  const en = getCaseScript('en', 'case3');
  const catalog = getEvidenceCatalog('es', 'case3');

  it('starts at detention with nine investigation locations', () => {
    expect(es.id).toBe('case3');
    expect(es.startLocation).toBe('centro_detencion');
    expect(Object.keys(es.investigation)).toEqual(Object.keys(en.investigation));
    expect(es.investigation.cabina_radio).toBeDefined();
    expect(es.investigation.delegacion_d3).toBeDefined();
    expect(es.investigation.centro_detencion_d3).toBeDefined();
  });

  it('requires day-1 evidence and catalogs every court-record item', () => {
    expect(es.requiredEvidence).toEqual([
      'lentes_barriga', 'informe_medico', 'marcas_carrito',
      'microfono_cabina', 'microfono_oro', 'cinta_salud'
    ]);
    es.debugEvidence.forEach((id) => {
      expect(catalog[id]).toBeDefined();
    });
  });

  it('chains two adjournments into a third trial day', () => {
    expect(es.adjournment?.nextLocation).toBe('despacho_barriga');
    expect(es.adjournment?.next?.nextLocation).toBe('bodega_radio');
    expect(es.adjournment?.next?.requiredEvidence).toContain('cartucho_corte');
    expect(es.adjournment?.next?.trial.testimony2.bgm).toBe('cross_exam_presto');
  });

  it('maps contradictions and press-gated statements', () => {
    const hidden = allStatements(es).filter((s) => s.unlockedBy);
    expect(hidden.length).toBeGreaterThanOrEqual(5);
    hidden.forEach((s) => {
      const ids = allStatements(es).map((row) => row.id);
      expect(ids).toContain(s.unlockedBy);
    });
    const t1 = es.trial.testimony1.statements.find((s) => s.id === 'stmt1_3');
    expect(t1?.contradiction?.evidence).toEqual(['lentes_barriga', 'informe_medico']);
    const t2b = es.trial.testimony2.statements.find((s) => s.id === 'stmt2_3b');
    expect(t2b?.unlockedBy).toBe('stmt2_3');
    expect(t2b?.contradiction?.evidence).toEqual(['marcas_carrito']);
  });

  it('defines four climax stages and matching bilingual choice ids', () => {
    expect(es.trial.climax.stages?.map((s) => s.presentTarget)).toEqual([
      ['programa_kermes'],
      ['cinta_salud'],
      ['cinta_sketch'],
      ['boleta_empeno', 'libro_verde', 'microfono_oro']
    ]);
    expect(es.trial.climax.stages?.[3].minUpdateStage).toEqual({ microfono_oro: 2 });
    expect(es.trial.climax.choices?.map((c) => c.id)).toEqual(['prove_voice', 'proverb_trap']);
    expect(en.trial.climax.choices?.map((c) => c.correctId)).toEqual(
      es.trial.climax.choices?.map((c) => c.correctId)
    );
    expect(es.trial.climax.epilogue?.bg).toBe('assets/bg_waiting_room.jpg');
  });

  it('keeps English hotspot geometry and statement counts in lockstep', () => {
    expect(en.trial.testimony1.statements.length).toBe(es.trial.testimony1.statements.length);
    for (const loc of Object.keys(es.investigation)) {
      const geom = (h: { id: string; x: number; y: number; w: number; h: number }) => (
        { id: h.id, x: h.x, y: h.y, w: h.w, h: h.h }
      );
      expect(en.investigation[loc].hotspots.map(geom)).toEqual(
        es.investigation[loc].hotspots.map(geom)
      );
    }
  });
});
