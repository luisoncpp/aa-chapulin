// @Architecture(descriptionShort="Unit tests for Case 5 day 4 Spanish investigation scenes", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { CASE5_DAY4_EVIDENCE } from '../../src/case/case5/Private/progress.js';
import type { CaseScript, DialogueLine, EvidenceId } from '../../src/types/index.js';

type Script = ReturnType<typeof getCaseScript>;

const DAY4_LOCATIONS = [
  'celda_c5_d4',
  'archivo_caldera'
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

function allDay4Lines(es: CaseScript): DialogueLine[] {
  return DAY4_LOCATIONS.flatMap((loc) => sceneLines(es, loc));
}

describe('Case 5 day 4 investigation (Spanish)', () => {
  const es = getCaseScript('es', 'case5') as CaseScript;
  const en = getCaseScript('en', 'case5') as CaseScript;

  it('includes day-4 locations in the Spanish investigation map', () => {
    expect(Object.keys(es.investigation)).toEqual(
      expect.arrayContaining([...DAY4_LOCATIONS])
    );
  });

  it('walks unlockLocation from celda_c5_d4 to archivo_caldera', () => {
    expect(lastLocationOfDay(es, 'celda_c5_d4')).toBe('archivo_caldera');
  });

  it('grants every CASE5_DAY4_EVIDENCE id across the two scenes', () => {
    const granted = new Set(evidenceFrom(allDay4Lines(es)));
    CASE5_DAY4_EVIDENCE.forEach((id) => {
      expect(granted.has(id), `${id} missing from day-4 investigation`).toBe(true);
    });
  });

  it('anchors bitacora_caldera on archivo_caldera only', () => {
    const celda = evidenceFrom(sceneLines(es, 'celda_c5_d4'));
    const caldera = evidenceFrom(sceneLines(es, 'archivo_caldera'));
    expect(celda).not.toContain('bitacora_caldera');
    expect(caldera).toContain('bitacora_caldera');
  });

  it('never uses truth BGM in day-4 investigation', () => {
    allDay4Lines(es).forEach((line) => {
      expect(line.bgm).not.toBe('truth');
    });
  });

  it('keeps DEFENSA on chapulin poses and bans slam poses in investigation', () => {
    allDay4Lines(es).forEach((line) => {
      if (line.speaker === 'DEFENSA' && line.pose) {
        expect(line.pose.startsWith('chapulin_'), `${line.pose} on DEFENSA`).toBe(true);
        expect(line.pose).not.toBe('chapulin_slam');
      }
      expect(line.pose).not.toBe('donramon_slam');
    });
  });

  it('mirrors Spanish day-4 locations in English without a truth BGM cue', () => {
    DAY4_LOCATIONS.forEach((id) => {
      expect(en.investigation[id]).toBeDefined();
      expect(en.investigation[id].bgm).not.toBe('truth');
    });
    allDay4Lines(en).forEach((line) => {
      expect(line.bgm).not.toBe('truth');
      expect(line.text).not.toMatch(/[¡¿]/);
    });
  });
});
