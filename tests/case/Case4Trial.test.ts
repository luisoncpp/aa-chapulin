// @Architecture(descriptionShort="Unit tests for Case 4 trial scripts and bilingual parity", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import type { Statement, Testimony } from '../../src/types/index.js';
import { CASE4_CLIMAX } from '../../src/case/case4/Private/climax.js';
import { CASE4_CLIMAX_EN } from '../../src/case/case4/Private/climax_en.js';
import { CASE4_DAY3_OPENING_PRESENT } from '../../src/case/case4/Private/trial_day3.js';
import { CASE4_DAY3_OPENING_PRESENT_EN } from '../../src/case/case4/Private/trial_day3_en.js';
import { CASE4_TESTIMONY_1, CASE4_TRIAL_INTRO } from '../../src/case/case4/Private/trial_day1.js';
import { CASE4_TESTIMONY_1_EN } from '../../src/case/case4/Private/trial_day1_en.js';
import { CASE4_TESTIMONY_2 } from '../../src/case/case4/Private/trial_day1_t2.js';
import { CASE4_TESTIMONY_2_EN } from '../../src/case/case4/Private/trial_day1_t2_en.js';
import { CASE4_TESTIMONY_3 } from '../../src/case/case4/Private/trial_day2.js';
import { CASE4_TESTIMONY_3_EN } from '../../src/case/case4/Private/trial_day2_en.js';
import { CASE4_TESTIMONY_4 } from '../../src/case/case4/Private/trial_day2_t2.js';
import { CASE4_TESTIMONY_4_EN } from '../../src/case/case4/Private/trial_day2_t2_en.js';
import { CASE4_TESTIMONY_5 } from '../../src/case/case4/Private/trial_day3.js';
import { CASE4_TESTIMONY_5_EN } from '../../src/case/case4/Private/trial_day3_en.js';
import { CASE4_TESTIMONY_6 } from '../../src/case/case4/Private/trial_day3_t2.js';
import { CASE4_TESTIMONY_6_EN } from '../../src/case/case4/Private/trial_day3_t2_en.js';

function contradictions(t: Testimony): Statement[] {
  return t.statements.filter((s) => s.contradiction);
}

function statementIds(t: Testimony): string[] {
  return t.statements.map((s) => s.id);
}

const ES_TESTIMONIES = [
  CASE4_TESTIMONY_1, CASE4_TESTIMONY_2, CASE4_TESTIMONY_3,
  CASE4_TESTIMONY_4, CASE4_TESTIMONY_5, CASE4_TESTIMONY_6
];

const EN_TESTIMONIES = [
  CASE4_TESTIMONY_1_EN, CASE4_TESTIMONY_2_EN, CASE4_TESTIMONY_3_EN,
  CASE4_TESTIMONY_4_EN, CASE4_TESTIMONY_5_EN, CASE4_TESTIMONY_6_EN
];

describe('Case 4 Hotel Buena Vista trial scripts', () => {
  it('exports day-1 intro and six testimonies', () => {
    expect(CASE4_TRIAL_INTRO.length).toBeGreaterThan(0);
    expect(ES_TESTIMONIES).toHaveLength(6);
    expect(EN_TESTIMONIES).toHaveLength(6);
  });

  it('gives each testimony at least one contradiction', () => {
    for (const t of ES_TESTIMONIES) {
      expect(contradictions(t).length).toBeGreaterThanOrEqual(1);
    }
  });

  it('D1-T1 d1_t1_3b has pointTarget and informe_policial followUp', () => {
    const stmt = CASE4_TESTIMONY_1.statements.find((s) => s.id === 'd1_t1_3b');
    expect(stmt?.unlockedBy).toBe('d1_t1_3');
    expect(stmt?.contradiction?.pointTarget?.targetEvidenceId).toBe('foto_crimen');
    expect(stmt?.contradiction?.pointTarget?.zones.some((z) => z.id === 'cubeta_hielo_derretido' && z.isCorrect)).toBe(true);
    expect(stmt?.contradiction?.followUp?.evidence).toEqual(['informe_policial']);
  });

  it('day-3 openingPresent requires nota_amenaza in ES and EN', () => {
    expect(CASE4_DAY3_OPENING_PRESENT.evidence).toEqual(['nota_amenaza']);
    expect(CASE4_DAY3_OPENING_PRESENT_EN.evidence).toEqual(['nota_amenaza']);
  });

  it('climax has two stages: botella_vino with point then sello_lacre', () => {
    expect(CASE4_CLIMAX.stages).toHaveLength(2);
    expect(CASE4_CLIMAX.stages![0].presentTarget).toEqual(['botella_vino']);
    expect(CASE4_CLIMAX.stages![0].pointTarget?.zones.some((z) => z.id === 'cupula_sello_lacre')).toBe(true);
    expect(CASE4_CLIMAX.stages![1].presentTarget).toEqual(['sello_lacre']);
    expect(CASE4_CLIMAX_EN.stages![0].presentTarget).toEqual(['botella_vino']);
    expect(CASE4_CLIMAX_EN.stages![1].presentTarget).toEqual(['sello_lacre']);
  });

  it('epilogue stamps bg waiting room and furniture none on every line', () => {
    const ep = CASE4_CLIMAX.epilogue!;
    expect(ep.bg).toBe('assets/bg_waiting_room.webp');
    for (const line of ep.dialogue) {
      expect(line.bg).toBe('assets/bg_waiting_room.webp');
      expect(line.furniture).toBe('none');
    }
    for (const line of CASE4_CLIMAX_EN.epilogue!.dialogue) {
      expect(line.bg).toBe('assets/bg_waiting_room.webp');
      expect(line.furniture).toBe('none');
    }
  });

  it('keeps ES/EN statement id parity across all testimonies', () => {
    ES_TESTIMONIES.forEach((es, i) => {
      expect(statementIds(es)).toEqual(statementIds(EN_TESTIMONIES[i]));
    });
  });
});
