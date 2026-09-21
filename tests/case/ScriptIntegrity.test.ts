// @Architecture(descriptionShort="Referential integrity of every case script across all cases", type="test", icon="layers")
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { TRACK_CATALOG } from '../../src/audio/Private/TrackCatalog.js';
import { getEvidenceCatalog, getProfileCatalog } from '../../src/state/index.js';
import type { CaseId, CaseScript, DialogueLine } from '../../src/types/index.js';
import { adjournmentDays, pointTargets, scriptLines, statementIds } from './ScriptWalk.js';

const CASE_IDS: readonly CaseId[] = ['case0', 'case1', 'case2', 'case3', 'case4', 'case5'];
const LANGUAGES = ['es', 'en'] as const;
const ROOT = path.resolve(__dirname, '../../');

function assetExists(ref: string | undefined): boolean {
  if (!ref) return false;
  return fs.existsSync(path.join(ROOT, ref));
}

describe('Case script referential integrity', () => {
  for (const caseId of CASE_IDS) {
    describe(caseId, () => {
      const es = getCaseScript('es', caseId) as CaseScript;
      const catalog = getEvidenceCatalog('es', caseId);
      const profiles = getProfileCatalog('es', caseId);

      it('investigation scenes reference existing backgrounds and catalogued music', () => {
        for (const scene of Object.values(es.investigation)) {
          expect(assetExists(scene.bg), `scene bg ${scene.bg}`).toBe(true);
          expect(TRACK_CATALOG[scene.bgm], `scene bgm ${scene.bgm}`).toBeDefined();
        }
      });

      it('keeps every hotspot inside the 960x540 stage and scenes non-empty', () => {
        for (const scene of Object.values(es.investigation)) {
          const targets = scene.hotspots.length > 0 ? scene.hotspots : scene.talkOptions;
          expect(targets.length, `${scene.title} must have content`).toBeGreaterThan(0);
          for (const hotspot of scene.hotspots) {
            expect(hotspot.x).toBeGreaterThanOrEqual(0);
            expect(hotspot.y).toBeGreaterThanOrEqual(0);
            expect(hotspot.w).toBeGreaterThan(0);
            expect(hotspot.h).toBeGreaterThan(0);
            expect(hotspot.x + hotspot.w).toBeLessThanOrEqual(100);
            expect(hotspot.y + hotspot.h).toBeLessThanOrEqual(100);
          }
        }
      });

      it('resolves every evidence and profile reference to a catalogued item', () => {
        const collect = (line: DialogueLine) => {
          if (line.addEvidence) expect(catalog[line.addEvidence], line.addEvidence).toBeDefined();
          if (line.updateEvidence) expect(catalog[line.updateEvidence], line.updateEvidence).toBeDefined();
          if (line.addProfile) expect(profiles[line.addProfile], line.addProfile).toBeDefined();
          if (line.updateProfile) expect(profiles[line.updateProfile], line.updateProfile).toBeDefined();
        };
        for (const line of scriptLines(es)) collect(line);
        for (const id of [...es.requiredEvidence, ...es.debugEvidence]) {
          expect(catalog[id], id).toBeDefined();
        }
        // Case 0 opens directly in trial (`courtroom`), so the start location
        // may be either an investigation scene or a trial-only start.
        expect(es.investigation[es.startLocation] || es.trial, es.startLocation).toBeTruthy();
      });


      it('resolves unlock chains: statements, hotspots, and talk topics', () => {
        const days = [es.trial, ...adjournmentDays(es)];
        for (const day of days) {
          const seen = statementIds(day);
          for (const testimony of day.testimonies) {
            for (const statement of testimony.statements) {
              if (statement.unlockedBy) {
                expect(seen.has(statement.unlockedBy), statement.unlockedBy).toBe(true);
              }
            }
          }
        }
        for (const scene of Object.values(es.investigation)) {
          const hotspotIds = new Set(scene.hotspots.map((h) => h.id));
          const talkIds = new Set((scene.talkOptions ?? []).map((t) => t.id));
          for (const talk of scene.talkOptions ?? []) {
            if (talk.unlockedByHotspot) {
              expect(hotspotIds.has(talk.unlockedByHotspot), talk.unlockedByHotspot).toBe(true);
            }
            if (talk.unlockedByTalk) {
              expect(talkIds.has(talk.unlockedByTalk), talk.unlockedByTalk).toBe(true);
            }
          }
        }
      });

      it('keeps ES/EN investigation scenes in lockstep on hotspot geometry', () => {
        const enScript = getCaseScript('en', caseId) as CaseScript;
        for (const [location, scene] of Object.entries(es.investigation)) {
          const enScene = enScript.investigation[location];
          expect(enScene, location).toBeDefined();
          expect(enScene.hotspots.map((h) => [h.id, h.x, h.y, h.w, h.h])).toEqual(
            scene.hotspots.map((h) => [h.id, h.x, h.y, h.w, h.h])
          );
        }
      });

      it('resolves the adjournment chain to real locations and a reachable verdict', () => {
        let day = es.adjournment;
        while (day) {
          expect(es.investigation[day.nextLocation], day.nextLocation).toBeDefined();
          for (const location of day.unlockLocations) {
            expect(es.investigation[location], location).toBeDefined();
          }
          expect(day.trial.testimonies.length).toBeGreaterThan(0);
          day = day.next;
        }
        expect(es.trial.climax.verdict.length).toBeGreaterThan(0);
      });

      it('keeps point-zone geometry valid, ES/EN identical, and plates on disk', () => {
        const enScript = getCaseScript('en', caseId) as CaseScript;
        const esTargets = [...pointTargets(es)];
        const enTargets = [...pointTargets(enScript)];
        expect(enTargets.length).toBe(esTargets.length);
        for (const [index, target] of esTargets.entries()) {
          expect(assetExists(target.imageAsset), `point plate ${target.imageAsset}`).toBe(true);
          expect(enTargets[index]?.zones.map((zone) => zone.bounds)).toEqual(
            target.zones.map((zone) => zone.bounds)
          );
          for (const zone of target.zones) {
            expect(zone.bounds[2]).toBeGreaterThan(zone.bounds[0], zone.id);
            expect(zone.bounds[3]).toBeGreaterThan(zone.bounds[1], zone.id);
            expect(zone.bounds.every((value) => value >= 0 && value <= 100), zone.id).toBe(true);
          }
          // Some targets legitimately accept more than one zone (e.g. two
          // symmetric tape marks); every target must accept at least one.
          expect(
            target.zones.filter((zone) => zone.isCorrect).length,
            target.id ?? `target ${index}`
          ).toBeGreaterThanOrEqual(1);
        }
      });
    });

    it(`${caseId}: every line references existing assets and catalogued tracks (both languages)`, () => {
      for (const language of LANGUAGES) {
        const script = getCaseScript(language, caseId) as CaseScript;
        for (const line of scriptLines(script)) {
          if (line.bg) expect(assetExists(line.bg), `bg ${line.bg}`).toBe(true);
          if (line.pose) expect(assetExists(`assets/${line.pose}.webp`), `pose ${line.pose}`).toBe(true);
          if (line.cutin) expect(assetExists(`assets/${line.cutin}.webp`), `cutin ${line.cutin}`).toBe(true);
          if (line.bgm) expect(TRACK_CATALOG[line.bgm], `bgm ${line.bgm}`).toBeDefined();
        }
        for (const scene of Object.values(script.investigation)) {
          expect(assetExists(scene.bg), `scene bg ${scene.bg}`).toBe(true);
          for (const hotspot of scene.hotspots) {
            for (const line of hotspot.dialogue) {
              if (line.bg) expect(assetExists(line.bg), `bg ${line.bg}`).toBe(true);
            }
          }
        }
        for (const testimony of script.trial.testimonies) {
          for (const statement of testimony.statements) {
            if (statement.pose) expect(assetExists(`assets/${statement.pose}.webp`), statement.pose).toBe(true);
            const target = statement.contradiction?.pointTarget ?? statement.contradiction?.followUp?.pointTarget;
            if (target?.imageAsset) expect(assetExists(target.imageAsset), target.imageAsset).toBe(true);
          }
        }
      }
    });
  }
});

