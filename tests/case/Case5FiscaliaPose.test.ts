// @Architecture(descriptionShort="Guards Case 5 fiscalia no-bag Super Sam staging", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import type { CaseScript, DialogueLine, InvestigationScene } from '../../src/types/index.js';

const FISCALIA = 'fiscalia_c5';
const NO_BAG_POSE = 'supersam_sweat';

function sceneLines(scene: InvestigationScene): DialogueLine[] {
  return [
    ...scene.intro,
    ...scene.hotspots.flatMap((hotspot) => hotspot.dialogue),
    ...scene.talkOptions.flatMap((option) => option.dialogue)
  ];
}

describe('Case 5 fiscalia Super Sam staging', () => {
  it('keeps the bag on the chair instead of on Super Sam', () => {
    for (const language of ['es', 'en'] as const) {
      const script = getCaseScript(language, 'case5') as CaseScript;
      const scene = script.investigation[FISCALIA];

      expect(scene.idlePose, language).toBe(NO_BAG_POSE);
      sceneLines(scene)
        .filter((line) => line.speaker === 'SUPER SAM')
        .forEach((line) => expect(line.pose, `${language}:${line.text}`).not.toBe('supersam_idle'));
    }
  });
});
