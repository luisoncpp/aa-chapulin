// @Architecture(descriptionShort="Unit tests for Case 4 scenes, unlocks, and bilingual parity", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { getEvidenceCatalog } from '../../src/state/index.js';
import type { CaseScript, DialogueLine, EvidenceId } from '../../src/types/index.js';

type Script = ReturnType<typeof getCaseScript>;

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

describe('Case 4 El Caso del Hotel Buena Vista', () => {
  const es = getCaseScript('es', 'case4') as CaseScript;
  const en = getCaseScript('en', 'case4') as CaseScript;

  it('starts at detention with thirteen investigation scenes', () => {
    expect(es.id).toBe('case4');
    expect(es.startLocation).toBe('detention');
    expect(Object.keys(es.investigation)).toEqual(Object.keys(en.investigation));
    expect(Object.keys(es.investigation)).toHaveLength(13);
    expect(es.investigation.hotel_terraza_d2).toBeDefined();
    expect(es.investigation.detention_d3).toBeDefined();
    expect(es.investigation.hotel_lobby_d3).toBeDefined();
    expect(es.investigation.delegacion_d3).toBeDefined();
  });

  it('requires six day-1, six day-2, and four day-3 clues', () => {
    expect(es.requiredEvidence).toEqual([
      'informe_policial', 'foto_crimen', 'billetera_cuajinais',
      'orden_servicios', 'plano_hotel', 'candado_cadena'
    ]);
    expect(es.adjournment?.requiredEvidence).toEqual([
      'residuos_manos', 'casquillo_fogueo', 'registro_montacargas',
      'baul_etiquetas', 'copa_vino', 'toxicologia_vino'
    ]);
    expect(es.adjournment?.next?.requiredEvidence).toEqual([
      'botella_vino', 'boleta_baccarat', 'nota_amenaza', 'sello_lacre'
    ]);
    expect(es.debugUnlockLocations).toEqual([
      'detention', 'hotel_lobby', 'hotel_suite', 'hotel_terraza'
    ]);
  });

  it('chains two adjournments into a third trial day', () => {
    expect(es.adjournment?.nextLocation).toBe('hotel_sotano');
    expect(es.adjournment?.unlockLocations).toEqual(['hotel_sotano']);
    expect(es.adjournment?.next?.nextLocation).toBe('hotel_cava');
    expect(es.adjournment?.next?.unlockLocations).toEqual(['hotel_cava']);
    expect(es.trial.climax.stages?.length).toBe(2);
  });

  it('closes every investigation day on a location that yields a required clue', () => {
    const expectedLast = ['hotel_terraza', 'delegacion', 'delegacion_d3'];
    days(es).forEach((day, idx) => {
      const last = lastLocationOfDay(es, day.entry);
      expect(last).toBe(expectedLast[idx]);
      const yielded = evidenceFrom(sceneLines(es, last));
      expect(day.required.some((id) => yielded.includes(id))).toBe(true);
    });
  });

  it('chains day-3 scenes cava to delegacion_d3', () => {
    expect(lastLocationOfDay(es, 'hotel_cava')).toBe('delegacion_d3');
  });

  it('never delivers a required clue in a scene intro', () => {
    const required = new Set([
      ...es.requiredEvidence,
      ...es.adjournment!.requiredEvidence,
      ...es.adjournment!.next!.requiredEvidence
    ]);
    for (const [loc, scene] of Object.entries(es.investigation)) {
      for (const line of scene.intro as DialogueLine[]) {
        if (line.addEvidence) expect(required.has(line.addEvidence), `${loc} intro`).toBe(false);
      }
    }
  });

  it('keeps English hotspot geometry in lockstep', () => {
    for (const loc of Object.keys(es.investigation)) {
      const geom = (h: { id: string; x: number; y: number; w: number; h: number }) => (
        { id: h.id, x: h.x, y: h.y, w: h.w, h: h.h }
      );
      expect(en.investigation[loc].hotspots.map(geom)).toEqual(
        es.investigation[loc].hotspots.map(geom)
      );
    }
  });

  it('never names the ring in a climax present prompt', () => {
    // The ring is the stage-2 reveal ("...Un anillo."); the HUD present question
    // must not hand it to the player. The pointTarget question fires after the
    // present lands, so it may name it.
    ([['es', es], ['en', en]] as const).forEach(([lang, script]) => {
      script.trial.climax.stages?.forEach((stage, idx) => {
        expect(/anillo|ring/i.test(stage.prompt ?? ''), `${lang} stage ${idx} prompt`).toBe(false);
      });
    });
    expect(/anillo/i.test(es.trial.climax.stages![1].pointTarget!.promptQuestion)).toBe(true);
  });

  it('catalogs every debug evidence id when case4 catalog exists', () => {
    const catalog = getEvidenceCatalog('es', 'case4');
    const hasCase4Catalog = es.debugEvidence.some((id) => catalog[id]?.id === id);
    if (!hasCase4Catalog) return;
    es.debugEvidence.forEach((id) => {
      expect(catalog[id], `${id} missing from case4 catalog`).toBeDefined();
    });
  });
});
