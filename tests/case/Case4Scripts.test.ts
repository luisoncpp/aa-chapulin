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

  it('starts at detention with twelve investigation scenes', () => {
    expect(es.id).toBe('case4');
    expect(es.startLocation).toBe('detention');
    expect(Object.keys(es.investigation)).toEqual(Object.keys(en.investigation));
    expect(Object.keys(es.investigation)).toHaveLength(12);
    expect(es.investigation.hotel_terraza_d2).toBeDefined();
    expect(es.investigation.detention_d3).toBeDefined();
    expect(es.investigation.hotel_lobby_d3).toBeDefined();
  });

  it('requires the five day-1, four day-2, and six day-3 clues', () => {
    expect(es.requiredEvidence).toEqual([
      'informe_policial', 'foto_crimen', 'plano_hotel',
      'billetera_cuajinais', 'candado_cadena'
    ]);
    expect(es.adjournment?.requiredEvidence).toEqual([
      'residuos_manos', 'casquillo_fogueo',
      'registro_montacargas', 'informe_forense'
    ]);
    expect(es.adjournment?.next?.requiredEvidence).toEqual([
      'copa_vino', 'botella_vino', 'boleta_baccarat',
      'baul_etiquetas', 'sello_lacre', 'nota_amenaza'
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
    expect(es.trial.climax.stages?.length).toBeGreaterThan(0);
  });

  it('closes every investigation day on a location that yields a required clue', () => {
    const expectedLast = ['hotel_terraza', 'delegacion', 'detention_d3'];
    days(es).forEach((day, idx) => {
      const last = lastLocationOfDay(es, day.entry);
      expect(last).toBe(expectedLast[idx]);
      const yielded = evidenceFrom(sceneLines(es, last));
      expect(day.required.some((id) => yielded.includes(id))).toBe(true);
    });
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

  it('catalogs every debug evidence id when case4 catalog exists', () => {
    const catalog = getEvidenceCatalog('es', 'case4');
    const hasCase4Catalog = es.debugEvidence.some((id) => catalog[id]?.id === id);
    if (!hasCase4Catalog) return;
    es.debugEvidence.forEach((id) => {
      expect(catalog[id], `${id} missing from case4 catalog`).toBeDefined();
    });
  });
});
