// @Architecture(descriptionShort="Guards the call-to-the-stand beat before every testimony", type="test", icon="layers")
/**
 * Every cross-examination must be preceded by the witness being called to the stand:
 * the witness speaks (name and occupation, or a recall exchange) and the judge orders
 * the testimony to begin. Without this the cross-examination starts mid-air.
 */

import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import type { CaseId, CaseScript, DialogueLine, Testimony, TrialDayScript } from '../../src/types/index.js';

const CASE_IDS: CaseId[] = ['case0', 'case1', 'case2', 'case3', 'case4', 'case5'];
const LANGUAGES = ['es', 'en'] as const;

function trialDays(script: CaseScript): TrialDayScript[] {
  const days: TrialDayScript[] = [script.trial];
  let adj = script.adjournment;
  while (adj) {
    days.push(adj.trial);
    adj = adj.next;
  }
  return days;
}

/**
 * The dialogue block the engine plays immediately before a testimony: the day opening
 * (or its opening present success), otherwise the previous testimony's resolving success.
 */
function precedingBlock(day: TrialDayScript, index: number): DialogueLine[] {
  if (index === 0) return day.openingPresent?.successDialogue ?? day.intro;
  const previous = day.testimonies[index - 1];
  const resolving = [...previous.statements].reverse().find((stmt) => stmt.contradiction)?.contradiction;
  return resolving?.followUp?.successDialogue ?? resolving?.successDialogue ?? [];
}

function expectCallToStand(block: DialogueLine[], testimony: Testimony, label: string): void {
  const witness = testimony.statements[0].speaker;
  expect(block.length, `${label}: no dialogue leads into this testimony`).toBeGreaterThan(0);
  expect(
    block.map((line) => line.speaker),
    `${label}: ${witness} must take the stand and speak before testifying`
  ).toContain(witness);
  expect(
    block[block.length - 1].speaker,
    `${label}: the judge must order the testimony on the last line`
  ).toBe('JUEZ');
}

describe('witness call to the stand', () => {
  it('introduces the witness and lets the judge open every cross-examination', () => {
    CASE_IDS.forEach((caseId) => {
      LANGUAGES.forEach((language) => {
        const script = getCaseScript(language, caseId) as CaseScript;
        trialDays(script).forEach((day, dayIndex) => {
          day.testimonies.forEach((testimony, index) => {
            if (testimony.statements.length === 0) return;
            expectCallToStand(
              precedingBlock(day, index),
              testimony,
              `${caseId}/${language} day ${dayIndex + 1} testimony ${index + 1}`
            );
          });
        });
      });
    });
  });
});
