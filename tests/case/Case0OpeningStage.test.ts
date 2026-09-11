// @Architecture(descriptionShort="Guards Case 0 opening judge-stage asset pairing", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';

describe('Case 0 opening stage', () => {
  it('uses the judge plate without a courtroom furniture overlay', () => {
    for (const language of ['es', 'en'] as const) {
      const judgeOpening = getCaseScript(language, 'case0').trial.intro.find((line) =>
        line.bg === 'assets/bg_judge.webp'
      );
      expect(judgeOpening).toMatchObject({
        speaker: 'JUEZ',
        pose: 'judge_gavel',
        bg: 'assets/bg_judge.webp',
        furniture: 'none'
      });
    }
  });
});
