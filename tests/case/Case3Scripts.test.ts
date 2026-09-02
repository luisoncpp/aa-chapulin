// @Architecture(descriptionShort="Unit tests for Case 3 scenes, unlocks, and bilingual parity", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { getEvidenceCatalog } from '../../src/state/index.js';
import type { CaseScript, DialogueLine, EvidenceId, Statement } from '../../src/types/index.js';

type Script = ReturnType<typeof getCaseScript>;

function testimonies(script: Script) {
  return [
    script.trial.testimony1,
    script.trial.testimony2,
    script.adjournment!.trial.testimony1,
    script.adjournment!.trial.testimony2,
    script.adjournment!.next!.trial.testimony1,
    script.adjournment!.next!.trial.testimony2
  ];
}

function allStatements(script: Script): Statement[] {
  return testimonies(script).flatMap((t) => t.statements);
}

function sceneLines(script: Script, locationId: string): DialogueLine[] {
  const scene = script.investigation[locationId];
  return [
    ...scene.intro,
    ...scene.hotspots.flatMap((h) => h.dialogue),
    ...scene.talkOptions.flatMap((o) => o.dialogue)
  ];
}

/** Walks `unlockLocation` from the day's entry scene to the scene that closes it. */
function lastLocationOfDay(script: Script, entry: string): string {
  let current = entry;
  const seen = new Set<string>([current]);
  for (;;) {
    const next = sceneLines(script, current).find((l) => l.unlockLocation)?.unlockLocation;
    if (!next || seen.has(next)) return current;
    seen.add(next);
    current = next;
  }
}

function evidenceFrom(lines: DialogueLine[]): EvidenceId[] {
  return lines.flatMap((l) => [l.addEvidence, l.updateEvidence].filter(Boolean) as EvidenceId[]);
}

/** Day entry point plus the `requiredEvidence` that gates leaving it. */
function days(script: Script): Array<{ entry: string; required: EvidenceId[] }> {
  const day2 = script.adjournment!;
  const day3 = day2.next!;
  return [
    { entry: script.startLocation, required: script.requiredEvidence },
    { entry: day2.nextLocation, required: day2.requiredEvidence },
    { entry: day3.nextLocation, required: day3.requiredEvidence }
  ];
}

describe('Case 3 La Noche del Grito', () => {
  const es = getCaseScript('es', 'case3') as CaseScript;
  const en = getCaseScript('en', 'case3') as CaseScript;
  const catalog = getEvidenceCatalog('es', 'case3');

  it('starts at the reused detention location with nine investigation scenes', () => {
    expect(es.id).toBe('case3');
    expect(es.startLocation).toBe('detention');
    expect(Object.keys(es.investigation)).toEqual(Object.keys(en.investigation));
    expect(Object.keys(es.investigation)).toHaveLength(9);
    expect(es.investigation.cabina_radio).toBeDefined();
    expect(es.investigation.detention_d3).toBeDefined();
    expect(es.investigation.delegacion_d3).toBeDefined();
  });

  it('requires the eight day-1 clues and catalogs every court-record item', () => {
    expect(es.requiredEvidence).toEqual([
      'lentes_barriga', 'informe_barriga', 'marcas_carrito',
      'microfono_cabina', 'microfono_oro', 'cinta_salud',
      'ventana_cabina', 'programa_kermes'
    ]);
    expect(es.adjournment?.requiredEvidence).toEqual([
      'bitacora_transmision', 'receta_nono', 'libro_verde'
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

  // Spec Sec.6.4: `checkTrialReadiness` only reads the inventory, so the last
  // location of a day must hand over a required clue or the trial button lights
  // up early and the player can skip scenes the trial script assumes were seen.
  it('closes every investigation day on a location that yields a required clue', () => {
    const expectedLast = ['plaza_kermes', 'delegacion', 'delegacion_d3'];
    days(es).forEach((day, idx) => {
      const last = lastLocationOfDay(es, day.entry);
      expect(last).toBe(expectedLast[idx]);
      const yielded = evidenceFrom(sceneLines(es, last));
      expect(day.required.some((id) => yielded.includes(id))).toBe(true);
    });
  });

  it('gives every unlocked statement cycle text and a pressable parent', () => {
    testimonies(es).forEach((testimony) => {
      const byId = new Map(testimony.statements.map((s) => [s.id, s]));
      testimony.statements
        .filter((s) => s.unlockedBy)
        .forEach((s) => {
          const parent = byId.get(s.unlockedBy!);
          expect(parent, `${s.id} unlockedBy ${s.unlockedBy}`).toBeDefined();
          expect(parent!.pressText?.length ?? 0).toBeGreaterThan(0);
          expect(s.text.length).toBeGreaterThan(0);
        });
    });
    expect(allStatements(es).filter((s) => s.unlockedBy)).toHaveLength(6);
  });

  it('gives every presentable clue at least one presentation slot', () => {
    const slots = new Set<EvidenceId>([
      ...allStatements(es).flatMap((s) => s.contradiction?.evidence ?? []),
      ...(es.trial.climax.stages ?? []).flatMap((s) => s.presentTarget)
    ]);
    Object.keys(catalog)
      .filter((id) => id !== 'insignia_abogado')
      .forEach((id) => {
        expect(slots.has(id as EvidenceId), `${id} is never presentable`).toBe(true);
      });
  });

  it('maps the day-1 contradictions onto the corrected statements', () => {
    const t1 = es.trial.testimony1.statements.find((s) => s.id === 'stmt1_3');
    expect(t1?.text).toContain('en esa cabina');
    expect(t1?.contradiction?.evidence).toEqual(['lentes_barriga', 'informe_barriga']);
    const t2b = es.trial.testimony2.statements.find((s) => s.id === 'stmt2_3b');
    expect(t2b?.unlockedBy).toBe('stmt2_3');
    expect(t2b?.text).toContain('diez cincuenta');
    expect(t2b?.contradiction?.evidence).toEqual(['marcas_carrito']);
  });

  // Spec Sec.3 + Sec.8: the cart at 10:50 is the only thing that crossed the
  // carpeted hallway, so `stmt2_3` must stay literally true.
  it('keeps the hallway testimony true by never routing anyone but the cart', () => {
    const hallway = es.trial.testimony2.statements.find((s) => s.id === 'stmt2_3');
    expect(hallway?.text).toContain('10:40');
    const day2Recap = es.adjournment!.trial.testimony2.statements
      .find((s) => s.id === 'stmt4_3')!.contradiction!.successDialogue
      .map((l) => l.text).join(' ');
    expect(day2Recap).toContain('escalera de servicio');
    expect(day2Recap).toContain('carrito a las 10:50');
    expect(day2Recap).not.toContain('carrito a las 10:45');
  });

  it('defines four climax stages and matching bilingual choice ids', () => {
    expect(es.trial.climax.stages?.map((s) => s.presentTarget)).toEqual([
      ['programa_kermes'],
      ['cinta_salud'],
      ['cinta_sketch'],
      ['boleta_empeno', 'libro_verde', 'microfono_oro']
    ]);
    expect(es.trial.climax.stages?.[3].requiredUpdateStage).toEqual({ microfono_oro: 2 });
    expect(es.trial.climax.stages?.map((s) => s.prompt)).toEqual([
      '¿CUÁNDO se grabó el grito?',
      '¿DÓNDE se grabó? (y por qué no pudo ser el acusado)',
      '¿QUIÉN podía hacer esa voz?',
      '¿POR QUÉ?'
    ]);
    expect(en.trial.climax.stages?.map((s) => s.prompt)).toEqual([
      'WHEN was the scream recorded?',
      'WHERE was it recorded? (and why it could not be the defendant)',
      'WHO could make that voice?',
      'WHY?'
    ]);
    expect(es.trial.climax.choices?.map((c) => c.id)).toEqual(['prove_voice', 'proverb_trap']);
    expect(en.trial.climax.choices?.map((c) => c.correctId)).toEqual(
      es.trial.climax.choices?.map((c) => c.correctId)
    );
    expect(es.trial.climax.epilogue?.bg).toBe('assets/bg_waiting_room.webp');
  });

  it('keeps English hotspot geometry and statement counts in lockstep', () => {
    testimonies(en).forEach((testimony, idx) => {
      expect(testimony.statements.length).toBe(testimonies(es)[idx].statements.length);
    });
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
