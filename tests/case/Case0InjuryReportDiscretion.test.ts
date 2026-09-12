// @Architecture(descriptionShort="Case 0 injury report must not identify the weapon", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { getEvidenceCatalog } from '../../src/state/index.js';

// The injury report is in the Acta from the opening, with `detailedView` live.
// Climax stage 1 asks the player which object in house 4 explains the injury, so
// the report may describe the impression (flat base, straight edge, ~6 kg) but
// must never name the charcoal iron that answers it.
const WEAPON_WORDS = { es: ['plancha'], en: ['iron'] };
const IMPRESSION_WORDS = { es: ['base plana'], en: ['flat base'] };

describe('Case 0 — injury report discretion', () => {
  it('never names the charcoal iron in the injury report text or caption', () => {
    for (const lang of ['es', 'en'] as const) {
      const item = getEvidenceCatalog(lang, 'case0').informe_lesiones;
      const surfaces = [
        item.name,
        item.desc,
        ...(item.updates ?? []),
        item.detailedView?.caption ?? ''
      ].map((text) => text.toLowerCase());
      const offenders = surfaces.filter((text) =>
        WEAPON_WORDS[lang].some((word) => text.includes(word))
      );

      expect(offenders).toEqual([]);
    }
  });

  it('still gives the player the impression traits needed to reach the iron', () => {
    for (const lang of ['es', 'en'] as const) {
      const item = getEvidenceCatalog(lang, 'case0').informe_lesiones;
      const all = [item.desc, ...(item.updates ?? []), item.detailedView?.caption ?? '']
        .join(' ')
        .toLowerCase();

      expect(IMPRESSION_WORDS[lang].every((word) => all.includes(word))).toBe(true);
      expect(all).toContain(lang === 'es' ? 'seis kilos' : 'six kilos');
    }
  });

  it('reveals the iron only in the climax stage that asks for it', () => {
    for (const lang of ['es', 'en'] as const) {
      const climax = getCaseScript(lang, 'case0').trial.climax;
      const stage = climax.stages![0];
      const reveal = stage.successDialogue.map((line) => line.text.toLowerCase()).join(' ');

      expect(stage.presentTarget).toEqual(['plancha_carbon']);
      expect(stage.prompt?.toLowerCase()).not.toContain(WEAPON_WORDS[lang][0]);
      expect(reveal).toContain(WEAPON_WORDS[lang][0]);
    }
  });
});
