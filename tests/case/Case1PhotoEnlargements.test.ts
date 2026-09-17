// @Architecture(descriptionShort="Case 1 photo reveals use full-screen evidence enlargements", type="test", icon="layers")
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';

const EMBLEM_ENLARGEMENT = 'assets/ampliacion_foto_crimen_emblema.webp';
const HANDS_ENLARGEMENT = 'assets/ampliacion_foto_crimen_manos.webp';

describe('Case 1 crime-photo enlargements', () => {
  it('ships both full-screen enlargement assets', () => {
    for (const asset of [EMBLEM_ENLARGEMENT, HANDS_ENLARGEMENT]) {
      const assetPath = path.resolve(__dirname, '../..', asset);

      expect(fs.existsSync(assetPath), `${asset} is missing`).toBe(true);
      expect(fs.statSync(assetPath).size, `${asset} is empty`).toBeGreaterThan(1000);
    }
  });

  it('shows the emblem and empty hands instead of narrating their appearance', () => {
    for (const lang of ['es', 'en'] as const) {
      const script = getCaseScript(lang, 'case1');
      const contradiction = script.adjournment!.trial.testimonies[2]
        .statements[2].contradiction!;
      const success = [
        ...(contradiction.pointTarget?.successDialogue ?? []),
        ...contradiction.successDialogue
      ];
      const visualLines = success.filter((line) => line.bg);

      expect(visualLines).toEqual([
        expect.objectContaining({ bg: EMBLEM_ENLARGEMENT, furniture: 'none' }),
        expect.objectContaining({ bg: HANDS_ENLARGEMENT, furniture: 'none' })
      ]);
      expect(success.map((line) => line.text).join(' ')).not.toMatch(
        /(?:ampliación|enlargement).*(?:emblema|emblem|manos|hands)/i
      );
    }
  });
});
