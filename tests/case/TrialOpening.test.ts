// @Architecture(descriptionShort="Guards bilingual trial lobby openings and timestamps", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import type { CaseId, CaseScript, DialogueLine, TrialDayScript } from '../../src/types/index.js';

const expectedOpenings: Record<CaseId, { es: string[]; en: string[] }> = {
  case1: {
    es: ['22 de agosto, 9:00 AM. Tribunal Superior - Sala de Espera.'],
    en: ['August 22, 9:00 AM. High Court - Waiting Room.']
  },
  case2: {
    es: [
      '29 de agosto, 3:00 PM. Tribunal Superior - Sala de Espera.',
      '30 de agosto, 3:00 PM. Tribunal Superior - Sala de Espera.'
    ],
    en: [
      'August 29, 3:00 PM. High Court - Waiting Room.',
      'August 30, 3:00 PM. High Court - Waiting Room.'
    ]
  },
  case3: {
    es: [
      '16 de septiembre, 6:00 PM. Tribunal Superior - Sala de Espera.',
      '17 de septiembre, 6:00 PM. Tribunal Superior - Sala de Espera.',
      '18 de septiembre, 6:00 PM. Tribunal Superior - Sala de Espera.'
    ],
    en: [
      'September 16, 6:00 PM. High Court - Waiting Room.',
      'September 17, 6:00 PM. High Court - Waiting Room.',
      'September 18, 6:00 PM. High Court - Waiting Room.'
    ]
  },
  case4: {
    es: [
      '25 de octubre, 3:00 PM. Tribunal Superior - Sala de Espera.',
      '26 de octubre, 4:00 PM. Tribunal Superior - Sala de Espera.',
      '27 de octubre, 4:00 PM. Tribunal Superior - Sala de Espera.'
    ],
    en: [
      'October 25, 3:00 PM. High Court - Waiting Room.',
      'October 26, 4:00 PM. High Court - Waiting Room.',
      'October 27, 4:00 PM. High Court - Waiting Room.'
    ]
  }
};

function trialDays(script: CaseScript): TrialDayScript[] {
  const days = [script.trial];
  if (script.adjournment) days.push(script.adjournment.trial);
  if (script.adjournment?.next) days.push(script.adjournment.next.trial);
  return days;
}

function expectLobbyOpening(line: DialogueLine, text: string): void {
  expect(line).toMatchObject({
    bg: 'assets/bg_waiting_room.webp',
    furniture: 'none',
    speaker: 'NARRADOR',
    bgm: 'trial',
    text
  });
}

describe('trial lobby openings', () => {
  it('opens every trial day with a dated bilingual waiting-room shot', () => {
    (Object.keys(expectedOpenings) as CaseId[]).forEach((caseId) => {
      (['es', 'en'] as const).forEach((language) => {
        const script = getCaseScript(language, caseId) as CaseScript;
        const intros = trialDays(script).map((day) => day.intro);
        const expected = expectedOpenings[caseId][language];

        expect(intros).toHaveLength(expected.length);
        intros.forEach((intro, index) => {
          expectLobbyOpening(intro[0], expected[index]);
          expect(intro[1]).toMatchObject({
            bg: 'assets/bg_judge.webp',
            speaker: 'JUEZ'
          });
        });
      });
    });
  });
});
