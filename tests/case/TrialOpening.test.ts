// @Architecture(descriptionShort="Guards bilingual trial lobby openings and timestamps", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import type { CaseId, CaseScript, DialogueLine, TrialDayScript } from '../../src/types/index.js';

const expectedOpenings: Record<CaseId, { es: string[]; en: string[] }> = {
  case0: {
    es: ['13 de julio, 09:45. Sala de espera del tribunal.'],
    en: ['July 13, 9:45 AM. High Court - Waiting Room.']
  },
  case1: {
    es: [
      '22 de agosto, 2:00 PM. Tribunal Superior - Sala de Espera.',
      '23 de agosto, 2:00 PM. Tribunal Superior - Sala de Espera.'
    ],
    en: [
      'August 22, 2:00 PM. High Court - Waiting Room.',
      'August 23, 2:00 PM. High Court - Waiting Room.'
    ]
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
  },
  case5: {
    es: [
      '6 de diciembre, 2:00 PM. Tribunal Superior - Sala de Espera.',
      '7 de diciembre, 4:00 PM. Tribunal Superior - Sala de Espera.',
      '8 de diciembre, 4:00 PM. Tribunal Superior - Sala de Espera.',
      '9 de diciembre, 4:00 PM. Tribunal Superior - Sala de Espera.'
    ],
    en: [
      'December 6, 2:00 PM. High Court - Waiting Room.',
      'December 7, 4:00 PM. High Court - Waiting Room.',
      'December 8, 4:00 PM. High Court - Waiting Room.',
      'December 9, 4:00 PM. High Court - Waiting Room.'
    ]
  }
};

function trialDays(script: CaseScript): TrialDayScript[] {
  const days = [script.trial];
  let adj = script.adjournment;
  while (adj) {
    days.push(adj.trial);
    adj = adj.next;
  }
  return days;
}

function expectLobbyOpening(line: DialogueLine, text: string, bgm: 'suspense' | 'trial'): void {
  expect(line).toMatchObject({
    bg: 'assets/bg_waiting_room.webp',
    furniture: 'none',
    speaker: 'NARRADOR',
    bgm,
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
          expectLobbyOpening(intro[0], expected[index], caseId === 'case0' ? 'suspense' : 'trial');
          const firstCourtroomJudge = intro.find((line) => line.bg === 'assets/bg_judge.webp');
          expect(firstCourtroomJudge).toMatchObject({ speaker: 'JUEZ' });
        });
      });
    });
  });
});
