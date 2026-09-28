// @Architecture(descriptionShort="Guards Case 5 fiscalia and testimony no-bag Super Sam staging", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { CASE_SCRIPT_CASE5_EN, CASE_SCRIPT_CASE5_ES } from '../../src/case/case5/index.js';
import type { CaseScript, DialogueLine, InvestigationScene } from '../../src/types/index.js';

const FISCALIA = 'fiscalia_c5';
const NO_BAG_IDLE = 'supersam_case1_idle';
const BAG_POSES = new Set(['supersam_idle', 'supersam_slam']);

function sceneLines(scene: InvestigationScene): DialogueLine[] {
  return [
    ...scene.intro,
    ...scene.hotspots.flatMap((hotspot) => hotspot.dialogue),
    ...scene.talkOptions.flatMap((option) => option.dialogue)
  ];
}

describe('Case 5 fiscalia Super Sam staging', () => {
  it('keeps the bag on the chair instead of on Super Sam', () => {
    const scripts = { es: CASE_SCRIPT_CASE5_ES, en: CASE_SCRIPT_CASE5_EN };
    for (const [language, script] of Object.entries(scripts)) {
      const scene = script.investigation[FISCALIA];

      expect(scene.idlePose, language).toBe(NO_BAG_IDLE);
      sceneLines(scene)
        .filter((line) => line.speaker === 'SUPER SAM')
        .forEach((line) => {
          expect(BAG_POSES.has(line.pose as string), `${language}:${line.text} (pose: ${line.pose})`).toBe(false);
        });
    }
  });

  it('ensures Super Sam does not carry bag in any pose during his witness testimony', () => {
    const scripts = { es: CASE_SCRIPT_CASE5_ES, en: CASE_SCRIPT_CASE5_EN };
    for (const [language, script] of Object.entries(scripts)) {
      const day3Trial = script.adjournment?.next?.trial;
      expect(day3Trial).toBeDefined();
      const t7 = day3Trial?.testimonies?.[1];
      expect(t7).toBeDefined();

      const testimonyLines: DialogueLine[] = [
        ...(t7?.introDialogue ?? []),
        ...(t7?.statements?.flatMap((s) => [
          s,
          ...(s.pressDialogue ?? []),
          ...(s.contradiction?.followUp?.dialogue ?? []),
          ...(s.deflectDialogue ?? [])
        ]) ?? []),
        ...(t7?.successDialogue ?? [])
      ];

      testimonyLines
        .filter((line) => line.speaker === 'SUPER SAM')
        .forEach((line) => {
          expect(BAG_POSES.has(line.pose as string), `T7 ${language}:${line.text} (pose: ${line.pose})`).toBe(false);
        });
    }
  });
});

