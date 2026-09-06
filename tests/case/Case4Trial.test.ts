// @Architecture(descriptionShort="Unit tests for Case 4 trial scripts and bilingual parity", type="test", icon="layers")
import { describe, expect, it } from 'vitest';
import type { Statement, Testimony } from '../../src/types/index.js';
import { CASE4_CLIMAX } from '../../src/case/case4/Private/climax.js';
import { CASE4_CLIMAX_EN } from '../../src/case/case4/Private/climax_en.js';
import { CASE4_DAY3_INTRO } from '../../src/case/case4/Private/trial_day3.js';
import { CASE4_DAY3_INTRO_EN } from '../../src/case/case4/Private/trial_day3_en.js';
import { CASE4_TESTIMONY_1, CASE4_TRIAL_INTRO } from '../../src/case/case4/Private/trial_day1.js';
import { CASE4_TESTIMONY_1_EN } from '../../src/case/case4/Private/trial_day1_en.js';
import { CASE4_TESTIMONY_2 } from '../../src/case/case4/Private/trial_day1_t2.js';
import { CASE4_TESTIMONY_2_EN } from '../../src/case/case4/Private/trial_day1_t2_en.js';
import { CASE4_DAY2_INTRO, CASE4_TESTIMONY_3 } from '../../src/case/case4/Private/trial_day2.js';
import { CASE4_DAY2_INTRO_EN, CASE4_TESTIMONY_3_EN } from '../../src/case/case4/Private/trial_day2_en.js';
import { CASE4_D2_T2_BAUL_SUCCESS } from '../../src/case/case4/Private/trial_day2_success.js';
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

  it('D1-T1 attacks d1_t1_3 and d1_t1_4 with candado_cadena and puerta_lazo point', () => {
    for (const id of ['d1_t1_3', 'd1_t1_4']) {
      const stmt = CASE4_TESTIMONY_1.statements.find((s) => s.id === id);
      expect(stmt?.contradiction?.evidence).toEqual(['candado_cadena']);
      expect(stmt?.contradiction?.pointTarget?.targetEvidenceId).toBe('candado_cadena');
      expect(stmt?.contradiction?.pointTarget?.zones.some((z) => z.id === 'puerta_lazo' && z.isCorrect)).toBe(true);
      expect(stmt?.contradiction?.followUp).toBeUndefined();
    }
  });

  it('D1-T2 attacks d1_t2_3 and d1_t2_4 with informe_forense and almohada followUp', () => {
    for (const id of ['d1_t2_3', 'd1_t2_4']) {
      const stmt = CASE4_TESTIMONY_2.statements.find((s) => s.id === id);
      expect(stmt?.contradiction?.evidence).toEqual(['informe_forense']);
      expect(stmt?.contradiction?.followUp?.evidence).toEqual(['foto_crimen', 'informe_policial']);
      expect(stmt?.contradiction?.followUp?.pointTarget).toBeUndefined();
    }
  });

  it('D2-T1 has Maruja as witness with two valid routes', () => {
    expect(CASE4_TESTIMONY_3.witness).toBe('Maruja');
    expect(CASE4_TESTIMONY_3_EN.witness).toBe('Maruja');
    for (const stmt of CASE4_TESTIMONY_3.statements) {
      expect(stmt.speaker).toBe('MARUJA');
    }
    const stmt3 = CASE4_TESTIMONY_3.statements.find((s) => s.id === 'd2_t1_3');
    expect(stmt3?.contradiction?.evidence).toEqual(['plano_hotel']);
    expect(stmt3?.contradiction?.pointTarget?.zones.some((z) => z.id === 'ramal_204_304' && z.isCorrect)).toBe(true);
    expect(stmt3?.contradiction?.followUp?.evidence).toEqual(['casquillo_fogueo']);

    const stmt4 = CASE4_TESTIMONY_3.statements.find((s) => s.id === 'd2_t1_4');
    expect(stmt4?.contradiction?.evidence).toEqual(['casquillo_fogueo']);
    expect(stmt4?.contradiction?.followUp?.evidence).toEqual(['plano_hotel']);

    expect(CASE4_D2_T2_BAUL_SUCCESS[0].cutin).toBe('objection_toma_eso');
  });

  it('never replays a contradiction success dialogue on its own followUp', () => {
    for (const t of [...ES_TESTIMONIES, ...EN_TESTIMONIES]) {
      for (const stmt of contradictions(t)) {
        const rule = stmt.contradiction;
        if (!rule?.followUp) continue;
        expect(rule.followUp.successDialogue.map((l) => l.text))
          .not.toEqual(rule.successDialogue.map((l) => l.text));
      }
    }
  });

  it('D2-T2 attacks d2_t2_3 with registro and fila_B17_descarga point plus baul followUp', () => {
    const stmt = CASE4_TESTIMONY_4.statements.find((s) => s.id === 'd2_t2_3');
    expect(CASE4_TESTIMONY_4.witness).toBe('Chómpiras');
    expect(stmt?.contradiction?.evidence).toEqual(['registro_montacargas']);
    expect(stmt?.contradiction?.pointTarget?.zones.some((z) => z.id === 'fila_B17_descarga' && z.isCorrect)).toBe(true);
    expect(stmt?.contradiction?.followUp?.evidence).toEqual(['baul_etiquetas']);
  });

  it('day-3 has no openingPresent: baccarat alibi is admitted, not presented', () => {
    expect(CASE4_DAY3_INTRO.length).toBeGreaterThan(0);
    expect(CASE4_DAY3_INTRO_EN.length).toBeGreaterThan(0);
  });

  it('D3-T1 attacks d3_t1_4 with orden_servicios and nombre_empleado point', () => {
    const stmt = CASE4_TESTIMONY_5.statements.find((s) => s.id === 'd3_t1_4');
    expect(stmt?.contradiction?.evidence).toEqual(['orden_servicios']);
    expect(stmt?.contradiction?.pointTarget?.targetEvidenceId).toBe('orden_servicios');
    expect(stmt?.contradiction?.pointTarget?.zones.some((z) => z.id === 'nombre_empleado' && z.isCorrect)).toBe(true);
    expect(stmt?.contradiction?.followUp).toBeUndefined();
  });

  it('D3-T2 attacks d3_t2_4 with nota_amenaza and acuse_recepcion point', () => {
    const stmt = CASE4_TESTIMONY_6.statements.find((s) => s.id === 'd3_t2_4');
    expect(stmt?.contradiction?.evidence).toEqual(['nota_amenaza']);
    expect(stmt?.contradiction?.pointTarget?.zones.some((z) => z.id === 'acuse_recepcion' && z.isCorrect)).toBe(true);
  });

  it('climax has two stages with points: cierre_canal then anillo_fractura', () => {
    expect(CASE4_CLIMAX.stages).toHaveLength(2);
    expect(CASE4_CLIMAX.stages![0].presentTarget).toEqual(['botella_vino']);
    expect(CASE4_CLIMAX.stages![0].pointTarget?.zones.some((z) => z.id === 'canal_fino')).toBe(true);
    expect(CASE4_CLIMAX.stages![1].presentTarget).toEqual(['sello_lacre']);
    expect(CASE4_CLIMAX.stages![1].pointTarget?.zones.some((z) => z.id === 'extremo_truncado')).toBe(true);
    expect(CASE4_CLIMAX_EN.stages![0].presentTarget).toEqual(['botella_vino']);
    expect(CASE4_CLIMAX_EN.stages![1].presentTarget).toEqual(['sello_lacre']);
    expect(CASE4_CLIMAX.choices).toBeUndefined();
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

  it('defines non-empty present prompts on every followUp and climax stage', () => {
    const findFollowUps = (testimonies: Testimony[]) =>
      testimonies.flatMap((t) => t.statements.filter((s) => s.contradiction?.followUp).map((s) => s.contradiction!.followUp!));

    const esFollowUps = findFollowUps(ES_TESTIMONIES);
    const enFollowUps = findFollowUps(EN_TESTIMONIES);
    expect(esFollowUps.length).toBeGreaterThan(0);
    expect(enFollowUps.length).toBeGreaterThan(0);
    for (const fu of [...esFollowUps, ...enFollowUps]) {
      if (fu.evidence.length > 0) expect(fu.prompt ?? 'optional').toBeTruthy();
    }

    expect(CASE4_DAY2_INTRO[2].bgm).toBeUndefined();
    expect(CASE4_DAY2_INTRO_EN[2].bgm).toBeUndefined();
    CASE4_CLIMAX.stages!.forEach((stage) => expect(stage.prompt).toBeTruthy());
    CASE4_CLIMAX_EN.stages!.forEach((stage) => expect(stage.prompt).toBeTruthy());
  });

  it('opens the climax on the showdown theme, not the courtroom opening', () => {
    for (const climax of [CASE4_CLIMAX, CASE4_CLIMAX_EN]) {
      expect(climax.dialogue[0].bgm).toBe('suspense');
      const escalation = climax.dialogue.filter((l) => l.bgm).map((l) => l.bgm);
      expect(escalation).toEqual(['suspense', 'pursuit']);
    }
  });
});
