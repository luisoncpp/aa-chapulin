// @Architecture(descriptionShort="Unit tests for Case 5 day 3 Spanish investigation scenes", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { CASE5_DAY3_EVIDENCE } from '../../src/case/case5/Private/progress.js';
import type { CaseScript, DialogueLine, EvidenceId } from '../../src/types/index.js';

type Script = ReturnType<typeof getCaseScript>;

const DAY3_LOCATIONS = [
  'bodega_masa',
  'fiscalia_c5',
  'penal_efectos'
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

function allDay3Lines(es: CaseScript): DialogueLine[] {
  return DAY3_LOCATIONS.flatMap((loc) => sceneLines(es, loc));
}

describe('Case 5 day 3 investigation (Spanish)', () => {
  const es = getCaseScript('es', 'case5') as CaseScript;
  const en = getCaseScript('en', 'case5') as CaseScript;

  it('includes day-3 locations in the Spanish investigation map', () => {
    expect(Object.keys(es.investigation)).toEqual(
      expect.arrayContaining([...DAY3_LOCATIONS])
    );
  });

  it('walks unlockLocation from bodega_masa to penal_efectos', () => {
    expect(lastLocationOfDay(es, 'bodega_masa')).toBe('penal_efectos');
  });

  it('grants every CASE5_DAY3_EVIDENCE id across the three scenes', () => {
    const granted = new Set(evidenceFrom(allDay3Lines(es)));
    CASE5_DAY3_EVIDENCE.forEach((id) => {
      expect(granted.has(id), `${id} missing from day-3 investigation`).toBe(true);
    });
  });

  it('anchors efectos_casimiro on penal_efectos only', () => {
    const earlier = new Set(
      ['bodega_masa', 'fiscalia_c5'].flatMap((loc) => evidenceFrom(sceneLines(es, loc)))
    );
    const penal = evidenceFrom(sceneLines(es, 'penal_efectos'));
    expect(earlier.has('efectos_casimiro')).toBe(false);
    expect(penal).toContain('efectos_casimiro');
  });

  it('never uses truth BGM in day-3 investigation', () => {
    allDay3Lines(es).forEach((line) => {
      expect(line.bgm).not.toBe('truth');
    });
  });

  it('keeps DEFENSA on chapulin poses and bans slam poses in investigation', () => {
    allDay3Lines(es).forEach((line) => {
      if (line.speaker === 'DEFENSA' && line.pose) {
        expect(line.pose.startsWith('chapulin_'), `${line.pose} on DEFENSA`).toBe(true);
        expect(line.pose).not.toBe('chapulin_slam');
      }
      expect(line.pose).not.toBe('donramon_slam');
    });
  });

  it('adds perfil_chompiras at bodega per spec', () => {
    const profiles = sceneLines(es, 'bodega_masa').flatMap((l) => [l.addProfile].filter(Boolean));
    expect(profiles).toContain('perfil_chompiras');
  });

  it('keeps English investigation empty while Spanish scenes are populated', () => {
    expect(Object.keys(en.investigation)).toEqual([]);
    expect(en.investigation).toEqual({});
  });
});
