// @Architecture(descriptionShort="Regression tests for Case 5 dramatic BGM cue hand-back", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import type {
  CaseScript, DialogueLine, Testimony, TrialDayScript
} from '../../src/types/index.js';

const DRAMATIC_CUES = ['objection', 'pursuit'];

function trialDays(script: CaseScript): TrialDayScript[] {
  const out: TrialDayScript[] = [script.trial];
  let adj = script.adjournment;
  while (adj) {
    if (adj.trial) out.push(adj.trial);
    adj = adj.next;
  }
  return out;
}

/** The dialogue blocks the engine plays, in order, for one contradiction chain. */
function chainBlocks(testimony: Testimony): DialogueLine[][][] {
  return testimony.statements
    .filter((s) => s.contradiction)
    .map((s) => {
      const rule = s.contradiction!;
      const blocks: DialogueLine[][] = [rule.successDialogue];
      if (rule.pointTarget) blocks.push(rule.pointTarget.successDialogue);
      if (rule.followUp) {
        blocks.push(rule.followUp.successDialogue);
        if (rule.followUp.pointTarget) blocks.push(rule.followUp.pointTarget.successDialogue);
      }
      return blocks;
    });
}

/** The cue still playing once every line of `blocks` has been shown. */
function effectiveCue(blocks: DialogueLine[][], inherited: string): string {
  let cue = inherited;
  for (const block of blocks) {
    for (const line of block) {
      if (line.bgm) cue = line.bgm;
    }
  }
  return cue;
}

/**
 * The last chain of the last day hands control to the climax, which declares its own
 * opening cue, so its dramatic cue is continuous rather than an overhang.
 */
function isClimaxHandover(days: TrialDayScript[], dayIdx: number, tIdx: number, chainIdx: number): boolean {
  if (dayIdx !== days.length - 1) return false;
  const testimonies = days[dayIdx].testimonies;
  if (tIdx !== testimonies.length - 1) return false;
  return chainIdx === chainBlocks(testimonies[tIdx]).length - 1;
}

function assertNoDramaticOverhang(script: CaseScript, label: string): void {
  const days = trialDays(script);
  expect(script.trial.climax.dialogue[0]?.bgm, `${label} climax must open its own cue`).toBeTruthy();
  days.forEach((day, dayIdx) => {
    day.testimonies.forEach((testimony, tIdx) => {
      chainBlocks(testimony).forEach((blocks, chainIdx) => {
        if (isClimaxHandover(days, dayIdx, tIdx, chainIdx)) return;
        const cue = effectiveCue(blocks, testimony.bgm);
        expect(
          DRAMATIC_CUES,
          `${label} day ${dayIdx + 1} testimony ${tIdx + 1} chain ${chainIdx + 1} ends on "${cue}"`
        ).not.toContain(cue);
      });
    });
  });
}

describe('Case 5 dramatic cue hand-back', () => {
  const es = getCaseScript('es', 'case5') as CaseScript;
  const en = getCaseScript('en', 'case5') as CaseScript;

  it('never leaves objection/pursuit playing after a contradiction chain resolves (ES)', () => {
    assertNoDramaticOverhang(es, 'ES');
  });

  it('never leaves objection/pursuit playing after a contradiction chain resolves (EN)', () => {
    assertNoDramaticOverhang(en, 'EN');
  });

  it('hands the testimony loop back when the judge dismisses Nicanor on day 1', () => {
    const followUp = es.trial.testimonies[0].statements
      .find((s) => s.id === 'c5_d1t1_3')?.contradiction?.followUp;
    const dismissal = followUp?.successDialogue.find((l) => l.text?.startsWith('Testigo, puede retirarse'));
    expect(dismissal?.bgm).toBe('cross_exam_moderato');
    const afterDismissal = followUp!.successDialogue
      .slice(followUp!.successDialogue.indexOf(dismissal!) + 1)
      .filter((l) => l.bgm);
    expect(afterDismissal, 'the Sargento call must not raise a new cue').toHaveLength(0);
  });

  it('keeps the ES and EN hand-back cues aligned line for line', () => {
    trialDays(es).forEach((esDay, dayIdx) => {
      const enDay = trialDays(en)[dayIdx];
      esDay.testimonies.forEach((esT, tIdx) => {
        const enT = enDay.testimonies[tIdx];
        chainBlocks(esT).forEach((esBlocks, chainIdx) => {
          const enBlocks = chainBlocks(enT)[chainIdx];
          expect(esBlocks.map((b) => b.map((l) => l.bgm ?? null)))
            .toEqual(enBlocks.map((b) => b.map((l) => l.bgm ?? null)));
        });
      });
    });
  });
});
