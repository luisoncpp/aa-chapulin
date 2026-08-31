// @Architecture(descriptionShort="Case 3 courtroom Barriga stays on the wheelchair bust", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import type {
  CaseScript, ClimaxDefinition, DialogueLine, Testimony, TrialDayScript
} from '../../src/types/index.js';

const INJURED = new Set(['barriga_vendado', 'barriga_shock', 'barriga_enojado']);

function testimonyLines(testimony: Testimony): DialogueLine[] {
  return testimony.statements.flatMap((s) => [
    { speaker: s.speaker, pose: s.pose, text: s.text },
    ...(s.pressText ?? []),
    ...(s.contradiction?.successDialogue ?? [])
  ]);
}

function dayLines(day: TrialDayScript): DialogueLine[] {
  return [...day.intro, ...testimonyLines(day.testimony1), ...testimonyLines(day.testimony2)];
}

function climaxLines(climax: ClimaxDefinition): DialogueLine[] {
  return [
    ...climax.dialogue,
    ...climax.verdict,
    ...(climax.epilogue?.dialogue ?? []),
    ...(climax.stages ?? []).flatMap((s) => s.successDialogue),
    ...(climax.choices ?? []).flatMap((c) => [...c.successDialogue, ...c.failDialogue])
  ];
}

function barrigaPoses(script: CaseScript): Array<string | undefined> {
  const day3 = script.adjournment!.next!.trial;
  const lines = [...dayLines(day3), ...climaxLines(script.trial.climax)];
  return lines.filter((l) => l.speaker === 'BARRIGA').map((l) => l.pose);
}

describe('Case 3 injured Barriga on the stand', () => {
  it('never stages the standing hat-and-briefcase poses after he wakes', () => {
    for (const lang of ['es', 'en'] as const) {
      const poses = barrigaPoses(getCaseScript(lang, 'case3') as CaseScript);
      expect(poses.length).toBeGreaterThan(0);
      expect(poses.every((p) => p !== undefined && INJURED.has(p)), `${lang}: ${poses.join(',')}`).toBe(true);
    }
  });
});
