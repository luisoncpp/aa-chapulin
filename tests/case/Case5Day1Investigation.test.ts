// @Architecture(descriptionShort="Unit tests for Case 5 day 1 Spanish investigation scenes", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { CASE5_DAY1_EVIDENCE } from '../../src/case/case5/Private/progress.js';
import type { CaseScript, DialogueLine, EvidenceId } from '../../src/types/index.js';
import { assertInvestigationParity } from './case5Parity.js';

const DAY1_LOCATIONS = ['celda_c5', 'archivo_vestibulo', 'archivo_pasillo7'] as const;

type Script = ReturnType<typeof getCaseScript>;

function sceneLines(script: Script, locationId: string): DialogueLine[] {
  const scene = script.investigation[locationId];
  return [
    ...scene.intro,
    ...scene.hotspots.flatMap((h) => h.dialogue),
    ...scene.talkOptions.flatMap((o) => o.dialogue)
  ];
}

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

function allDay1Lines(script: CaseScript): DialogueLine[] {
  return DAY1_LOCATIONS.flatMap((loc) => sceneLines(script, loc));
}

describe('Case 5 day 1 investigation (Spanish)', () => {
  const es = getCaseScript('es', 'case5') as CaseScript;
  const en = getCaseScript('en', 'case5') as CaseScript;

  it('starts at celda_c5 with day-1 locations present in investigation map', () => {
    expect(es.startLocation).toBe('celda_c5');
    ['celda_c5', 'archivo_vestibulo', 'archivo_pasillo7'].forEach((id) => {
      expect(es.investigation[id]).toBeDefined();
    });
  });

  it('walks unlockLocation from celda to pasillo 7', () => {
    expect(lastLocationOfDay(es, 'celda_c5')).toBe('archivo_pasillo7');
  });

  it('grants every CASE5_DAY1_EVIDENCE id across the three scenes', () => {
    const granted = new Set(evidenceFrom(allDay1Lines(es)));
    CASE5_DAY1_EVIDENCE.forEach((id) => {
      expect(granted.has(id), `${id} missing from day-1 investigation`).toBe(true);
    });
  });

  it('anchors trial readiness on pasillo 7 with evidence not granted earlier', () => {
    const celda = new Set(evidenceFrom(sceneLines(es, 'celda_c5')));
    const vestibulo = new Set(evidenceFrom(sceneLines(es, 'archivo_vestibulo')));
    const pasillo = evidenceFrom(sceneLines(es, 'archivo_pasillo7'));
    const earlier = new Set([...celda, ...vestibulo]);
    const sealing = pasillo.filter((id) => CASE5_DAY1_EVIDENCE.includes(id) && !earlier.has(id));
    expect(sealing.length).toBeGreaterThan(0);
  });

  it('never uses truth BGM in day-1 investigation', () => {
    allDay1Lines(es).forEach((line) => {
      expect(line.bgm).not.toBe('truth');
    });
  });

  it('keeps DEFENSA on chapulin poses and bans slam poses in investigation', () => {
    allDay1Lines(es).forEach((line) => {
      if (line.speaker === 'DEFENSA' && line.pose) {
        expect(line.pose.startsWith('chapulin_'), `${line.pose} on DEFENSA`).toBe(true);
        expect(line.pose).not.toBe('chapulin_slam');
      }
      expect(line.pose).not.toBe('donramon_slam');
    });
  });

  it('files insignia_abogado and three profiles in celda intro', () => {
    const intro = es.investigation.celda_c5.intro;
    const lines = Array.isArray(intro) ? intro : intro.flatMap((block) => block.dialogue);
    const evidence = evidenceFrom(lines);
    const profiles = lines.flatMap((l) => [l.addProfile].filter(Boolean));
    expect(evidence).toContain('insignia_abogado');
    expect(profiles).toEqual(
      expect.arrayContaining(['perfil_donramon', 'perfil_chapulin', 'perfil_casimiro'])
    );
  });

  it('mirrors Spanish day-1 investigation structure in English without Spanish leakage', () => {
    assertInvestigationParity(en, es, DAY1_LOCATIONS, allDay1Lines(en));
  });

  it('uses detention_center in celda and archivo in vestibulo and pasillo 7', () => {
    expect(es.investigation.celda_c5.bgm).toBe('detention_center');
    expect(es.investigation.archivo_vestibulo.bgm).toBe('archivo');
    expect(es.investigation.archivo_pasillo7.bgm).toBe('archivo');
  });
});
