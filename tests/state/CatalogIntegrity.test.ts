// @Architecture(descriptionShort="Cross-case catalog completeness and ES/EN lockstep checks", type="test", icon="database")
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { getEvidenceCatalog, getProfileCatalog } from '../../src/state/index.js';
import type { CaseId, Language } from '../../src/types/index.js';

const CASE_IDS: readonly CaseId[] = ['case0', 'case1', 'case2', 'case3', 'case4', 'case5'];
const LANGUAGES: readonly Language[] = ['es', 'en'];
const ROOT = path.resolve(__dirname, '../../');

function assetExists(ref: string): boolean {
  return fs.existsSync(path.join(ROOT, ref));
}

describe('Evidence catalog integrity', () => {
  for (const caseId of CASE_IDS) {
    for (const language of LANGUAGES) {
      it(`${caseId}/${language}: every item is complete and its icons exist on disk`, () => {
        const catalog = getEvidenceCatalog(language, caseId);
        const ids = Object.keys(catalog);
        expect(ids.length, 'the case must ship evidence').toBeGreaterThan(0);
        const icons = new Set<string>();
        for (const id of ids) {
          const item = catalog[id]!;
          expect(item.id).toBe(id);
          expect(item.name.trim()).not.toBe('');
          expect(item.desc.trim()).not.toBe('');
          expect(item.icon).toMatch(/^assets\/.+\.webp$/);
          expect(assetExists(item.icon), `icon ${item.icon}`).toBe(true);
          icons.add(item.icon);
          for (const update of item.updates ?? []) {
            expect(typeof update).toBe('string');
            expect(update.length).toBeGreaterThan(0);
          }
          const view = item.detailedView;
          if (view) {
            expect(assetExists(view.imageAsset), `examine plate ${view.imageAsset}`).toBe(true);
            expect(view.caption.trim()).not.toBe('');
            for (const zone of view.clickableZones ?? []) {
              expect(zone.tooltip.trim()).not.toBe('');
              expect(zone.width).toBeGreaterThan(0);
              expect(zone.height).toBeGreaterThan(0);
            }
          }
        }
        expect(icons.size, 'icons must not collide within a case').toBe(ids.length);
      });
    }

    it(`${caseId}: ES/EN catalogs stay in lockstep on structural fields`, () => {
      const es = getEvidenceCatalog('es', caseId);
      const en = getEvidenceCatalog('en', caseId);
      expect(Object.keys(en).sort()).toEqual(Object.keys(es).sort());
      for (const id of Object.keys(es)) {
        expect(en[id]!.icon).toBe(es[id]!.icon);
        expect((en[id]!.updates ?? []).length).toBe((es[id]!.updates ?? []).length);
        expect(Boolean(en[id]!.detailedView)).toBe(Boolean(es[id]!.detailedView));
        // English plates may be separate localized images (`*_en.webp`).
        expect(assetExists(en[id]!.detailedView?.imageAsset ?? ''), 'en examine plate').toBe(true);
        expect(en[id]!.detailedView?.clickableZones?.length).toBe(es[id]!.detailedView?.clickableZones?.length);
      }
    });
  }
});

describe('Profile catalog integrity', () => {
  const WITH_PROFILES: readonly CaseId[] = ['case1', 'case5'];
  const WITHOUT_PROFILES: readonly CaseId[] = ['case0', 'case2', 'case3', 'case4'];

  it('declares profiles only for the cases that use the Acta de Personajes', () => {
    for (const caseId of WITHOUT_PROFILES) {
      for (const language of LANGUAGES) {
        expect(getProfileCatalog(language, caseId)).toEqual({});
      }
    }
  });

  for (const caseId of WITH_PROFILES) {
    for (const language of LANGUAGES) {
      it(`${caseId}/${language}: every profile card is complete with an existing portrait`, () => {
        const catalog = getProfileCatalog(language, caseId);
        const ids = Object.keys(catalog);
        expect(ids.length).toBeGreaterThan(0);
        for (const id of ids) {
          const profile = catalog[id]!;
          expect(profile.id).toBe(id);
          expect(profile.name.trim()).not.toBe('');
          expect(profile.role.trim()).not.toBe('');
          expect(profile.desc.trim()).not.toBe('');
          expect(profile.icon).toMatch(/^assets\/.+\.webp$/);
          expect(assetExists(profile.icon), `portrait ${profile.icon}`).toBe(true);
        }
      });
    }

    it(`${caseId}: ES/EN profile cards stay in lockstep on structural fields`, () => {
      const es = getProfileCatalog('es', caseId);
      const en = getProfileCatalog('en', caseId);
      expect(Object.keys(en).sort()).toEqual(Object.keys(es).sort());
      for (const id of Object.keys(es)) {
        expect(en[id]!.icon).toBe(es[id]!.icon);
        expect((en[id]!.updates ?? []).length).toBe((es[id]!.updates ?? []).length);
      }
    });
  }
});
