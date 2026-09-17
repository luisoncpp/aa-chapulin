import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { CASE1_TESTIMONY_4 } from '../../src/case/case1/Private/trial_day2_t2.js';
import { CASE1_REJILLA_POINT_TARGET } from '../../src/case/case1/Private/climax_stage3_points.js';
import { CASE1_TESTIMONY_5 } from '../../src/case/case1/Private/trial_day2_t3.js';
import { CASE1_TESTIMONY_5_EN } from '../../src/case/case1/Private/trial_day2_t3_en.js';
import { CASE1_EVIDENCE_ES } from '../../src/state/Private/EvidenceCatalogCase1Es.js';
import { CASE1_EVIDENCE_EN } from '../../src/state/Private/EvidenceCatalogCase1En.js';

const SPEC_PATH = path.resolve(process.cwd(), 'docs/specs/case-1-turnabout-red-grasshopper.md');

function readSpec(): string {
  return fs.readFileSync(SPEC_PATH, 'utf8');
}

describe('Case 1 spec relationships', () => {
  it('documents the current Day 2 Trial 2 statement and point-target coverage', () => {
    const spec = readSpec();
    const statement = CASE1_TESTIMONY_4.statements.find((item) => item.id === 'c1_d2t2_3');
    const target = statement?.contradiction?.pointTarget;

    expect(statement?.text).toBeDefined();
    expect(spec).toContain(`c1_d2t2_3 TRIPASECA: ${statement!.text}`);
    expect(target?.zones.map((zone) => zone.id)).toEqual([
      'cristal_afuera', 'pedestal', 'rejilla', 'jaula_perico', 'regla_testigo', 'vitrina_resto'
    ]);
    for (const zone of target!.zones) {
      expect(spec).toContain(`| \`${zone.id}\` |`);
    }
  });

  it('documents the three climax grate targets in runtime order', () => {
    const spec = readSpec();
    const targets = [
      CASE1_REJILLA_POINT_TARGET,
      CASE1_REJILLA_POINT_TARGET.next!,
      CASE1_REJILLA_POINT_TARGET.next!.next!
    ];
    const positions = targets.map((target) => spec.indexOf(`\`${target.id}\``));

    expect(targets.map((target) => target.id)).toEqual([
      'rejilla_esquina_abierta', 'rejilla_marcas_cinta', 'rejilla_hilo_traje'
    ]);
    expect(positions.every((position) => position >= 0)).toBe(true);
    expect(positions[0]).toBeLessThan(positions[1]);
    expect(positions[1]).toBeLessThan(positions[2]);

    const cornerSuccess = CASE1_REJILLA_POINT_TARGET.successDialogue.find((line) => line.speaker === 'DEFENSA' && line.text.includes('alambre no está roto'));
    expect(cornerSuccess?.text).toBe('El alambre no está roto por viejo. Está cortado, doblado hacia arriba y vuelto a acomodar.');
    expect(spec).toContain('DEFENSA: El alambre no está roto por viejo. Está cortado, doblado hacia arriba y vuelto a acomodar.');
  });

  it('documents the Trial 3 enlargement and evidence update on their runtime lines', () => {
    const spec = readSpec();
    const rule = CASE1_TESTIMONY_5.statements[2].contradiction!;
    const handLine = rule.successDialogue.find((line) => line.bg?.includes('ampliacion_foto_crimen_manos'));
    const updateLine = rule.followUp!.successDialogue.find((line) => line.updateEvidence === 'informe_medico');

    expect(handLine).toBeDefined();
    expect(updateLine).toBeDefined();
    expect(spec).toContain('NARRADOR: ... [bg: assets/ampliacion_foto_crimen_manos.webp; furniture: none]');
    expect(spec).toContain('ACTUALIZAR informe_medico');
  });

  it('does not anchor Tripaseca seeing the corridor photo to his escape', () => {
    const spec = readSpec();
    const spanishStatement = CASE1_TESTIMONY_5.statements[0];
    const englishStatement = CASE1_TESTIMONY_5_EN.statements[0];

    expect(spanishStatement.text).toBe('Vi la foto que tomó la cámara del pasillo.');
    expect(englishStatement.text).toBe('I saw the photo taken by the corridor camera.');
    expect(spec).toContain(`c1_d2t3_1 TRIPASECA: ${spanishStatement.text}`);
  });

  it('leaves the gallery uproar to the visible gavel exchange', () => {
    const spec = readSpec();
    const spanishSuccess = CASE1_TESTIMONY_5.statements[2].contradiction!.successDialogue;
    const englishSuccess = CASE1_TESTIMONY_5_EN.statements[2].contradiction!.successDialogue;
    const spanishUproar = spanishSuccess.find((line) => line.speaker === 'NARRADOR' && line.sfx === 'gavel');
    const englishUproar = englishSuccess.find((line) => line.speaker === 'NARRADOR' && line.sfx === 'gavel');

    expect(spanishUproar?.text).toBe('Escándalo en la galería');
    expect(englishUproar?.text).toBe('Uproar in the gallery.');
    expect(spec).toContain('NARRADOR: Escándalo en la galería [sfx: gavel]');
  });

  it('records that the shattered display case had no glass left inside', () => {
    const spec = readSpec();

    expect(CASE1_EVIDENCE_ES.vitrina_rota.desc).toContain('No quedaron vidrios dentro de la vitrina.');
    expect(CASE1_EVIDENCE_EN.vitrina_rota.desc).toContain('No glass remained inside the display case.');
    expect(spec).toContain('No quedaron vidrios dentro de la vitrina.');
  });
});
