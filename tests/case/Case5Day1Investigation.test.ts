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

  it('uses detention_center in celda, archivo in vestibulo and suspense in pasillo 7', () => {
    expect(es.investigation.celda_c5.bgm).toBe('detention_center');
    expect(es.investigation.archivo_vestibulo.bgm).toBe('archivo');
    expect(es.investigation.archivo_pasillo7.bgm).toBe('suspense');
  });

  it('distinguishes the vestibule and hallway 7 in the move menu labels', () => {
    expect(es.investigation.archivo_vestibulo.name).toBe('Archivo Judicial - Vestíbulo');
    expect(es.investigation.archivo_pasillo7.name).toBe('Archivo Judicial - Pasillo 7');
    expect(en.investigation.archivo_vestibulo.name).toBe('Judicial Archive - Vestibule');
    expect(en.investigation.archivo_pasillo7.name).toBe('Judicial Archive - Hallway 7');
  });

  it('hides the pasillo 7 consultation table until the other three hotspots are examined', () => {
    for (const script of [es, en]) {
      const mesa = script.investigation.archivo_pasillo7.hotspots.find((h) => h.id === 'hotspot_mesa');
      expect(mesa?.condition).toBeTypeOf('function');
      const all = {
        examined_hotspot_cuerpo: true,
        examined_hotspot_tomo: true,
        examined_hotspot_estante: true
      };
      expect(mesa!.condition!(all)).toBe(true);
      expect(mesa!.condition!({})).toBe(false);
      Object.keys(all).forEach((missing) => {
        const partial = { ...all, [missing]: false };
        expect(mesa!.condition!(partial), `mesa visible without ${missing}`).toBe(false);
      });
    }
  });

  it('keeps the other pasillo 7 hotspots ungated so the scene is never soft-locked', () => {
    for (const script of [es, en]) {
      const open = script.investigation.archivo_pasillo7.hotspots.filter((h) => !h.condition);
      expect(open.map((h) => h.id)).toEqual(['hotspot_cuerpo', 'hotspot_tomo', 'hotspot_estante']);
    }
  });

  it('aligns pasillo 7 hotspots with the regenerated cover-cropped background', () => {
    const expected = {
      hotspot_cuerpo: [38, 67, 39, 33],
      hotspot_tomo: [57, 81, 17, 15],
      hotspot_estante: [60, 35, 40, 37],
      hotspot_mesa: [0, 28, 35, 38]
    } as const;
    for (const script of [es, en]) {
      const hotspots = script.investigation.archivo_pasillo7.hotspots;
      for (const [id, bounds] of Object.entries(expected)) {
        const hotspot = hotspots.find((candidate) => candidate.id === id);
        expect(hotspot, `${id} is missing`).toBeDefined();
        expect([hotspot!.x, hotspot!.y, hotspot!.w, hotspot!.h]).toEqual(bounds);
      }
    }
  });

  it('seals day 1 on the consultation table: it closes the day and grants required evidence', () => {
    const mesa = es.investigation.archivo_pasillo7.hotspots.find((h) => h.id === 'hotspot_mesa')!;
    expect(evidenceFrom(mesa.dialogue)).toContain('expediente_casimiro');
    expect(CASE5_DAY1_EVIDENCE).toContain('expediente_casimiro');
    // The exit to the courtroom is the day-closing beat. The courthouse bell is
    // no longer narrated here: it rings when the trial button unlocks.
    expect(mesa.dialogue.some((l) => l.text.includes('Síganme los buenos'))).toBe(true);
    es.investigation.archivo_pasillo7.hotspots.forEach((h) => {
      expect(h.dialogue.some((l) => l.sfx === 'bell'), `${h.id} narrates the bell`).toBe(false);
    });
  });

  it('locks the El Saber Universal shelf arithmetic: 24 slots, 23 volumes, slot 13 empty', () => {
    const estante = es.investigation.archivo_pasillo7.hotspots.find((h) => h.id === 'hotspot_estante')!;
    const text = estante.dialogue.map((l) => l.text).join(' ');
    expect(text).toContain('del 1 al 24');
    expect(text).toContain('Veintitrés tomos');
    expect(text).toContain('ranura trece está vacía');
    // 23 on the shelf + the one on the floor = 24 volumes for 24 slots, one still empty.
    expect(text).toContain('Veinticuatro tomos para veinticuatro ranuras');
  });

  it('changes the track when moving from the archive vestibule into hallway 7', () => {
    for (const script of [es, en]) {
      const vestibulo = script.investigation.archivo_vestibulo;
      const pasillo = script.investigation.archivo_pasillo7;
      expect(pasillo.bgm).not.toBe(vestibulo.bgm);
      expect(pasillo.intro[0].bgm).toBe(pasillo.bgm);
      expect(vestibulo.intro[0].bgm).toBe(vestibulo.bgm);
    }
  });
});
