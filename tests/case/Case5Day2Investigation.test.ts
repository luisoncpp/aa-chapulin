// @Architecture(descriptionShort="Unit tests for Case 5 day 2 Spanish investigation scenes", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { CASE5_DAY2_EVIDENCE } from '../../src/case/case5/Private/progress.js';
import type { CaseScript, DialogueLine, EvidenceId } from '../../src/types/index.js';

type Script = ReturnType<typeof getCaseScript>;

const DAY2_LOCATIONS = [
  'vecindad_c5',
  'correspondencia',
  'despacho_berrondo',
  'delegacion_c5'
] as const;

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

function allDay2Lines(es: CaseScript): DialogueLine[] {
  return DAY2_LOCATIONS.flatMap((loc) => sceneLines(es, loc));
}

describe('Case 5 day 2 investigation (Spanish)', () => {
  const es = getCaseScript('es', 'case5') as CaseScript;
  const en = getCaseScript('en', 'case5') as CaseScript;

  it('includes four day-2 locations plus three day-1 locations', () => {
    expect(Object.keys(es.investigation).sort()).toEqual([
      'archivo_pasillo7',
      'archivo_vestibulo',
      'celda_c5',
      'correspondencia',
      'delegacion_c5',
      'despacho_berrondo',
      'vecindad_c5'
    ]);
  });

  it('walks unlockLocation from vecindad_c5 to delegacion_c5', () => {
    expect(lastLocationOfDay(es, 'vecindad_c5')).toBe('delegacion_c5');
  });

  it('grants every CASE5_DAY2_EVIDENCE id across the four scenes', () => {
    const granted = new Set(evidenceFrom(allDay2Lines(es)));
    CASE5_DAY2_EVIDENCE.forEach((id) => {
      expect(granted.has(id), `${id} missing from day-2 investigation`).toBe(true);
    });
  });

  it('anchors expediente_serie on delegacion_c5 only', () => {
    const earlier = new Set(
      ['vecindad_c5', 'correspondencia', 'despacho_berrondo'].flatMap((loc) => evidenceFrom(sceneLines(es, loc)))
    );
    const delegacion = evidenceFrom(sceneLines(es, 'delegacion_c5'));
    expect(earlier.has('expediente_serie')).toBe(false);
    expect(delegacion).toContain('expediente_serie');
  });

  it('never uses truth BGM in day-2 investigation', () => {
    allDay2Lines(es).forEach((line) => {
      expect(line.bgm).not.toBe('truth');
    });
  });

  it('keeps DEFENSA on chapulin poses and bans slam poses in investigation', () => {
    allDay2Lines(es).forEach((line) => {
      if (line.speaker === 'DEFENSA' && line.pose) {
        expect(line.pose.startsWith('chapulin_'), `${line.pose} on DEFENSA`).toBe(true);
        expect(line.pose).not.toBe('chapulin_slam');
      }
      expect(line.pose).not.toBe('donramon_slam');
    });
  });

  it('adds perfil_barriga at vecindad per spec', () => {
    const profiles = sceneLines(es, 'vecindad_c5').flatMap((l) => [l.addProfile].filter(Boolean));
    expect(profiles).toContain('perfil_barriga');
  });

  it('keeps English investigation empty while Spanish scenes are populated', () => {
    expect(Object.keys(en.investigation)).toEqual([]);
    expect(en.investigation).toEqual({});
  });
});
