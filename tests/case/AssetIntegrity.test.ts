// @Architecture(descriptionShort="Unit tests verifying physical existence of all game assets", type="test", icon="layers")
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

describe('Asset Integrity & Existence', () => {
  const assetsDir = path.resolve(__dirname, '../../assets');

  it('verifies all Florinda character sprites exist and have content', () => {
    const florindaPoses = [
      'florinda_idle.webp',
      'florinda_angry.webp',
      'florinda_crying.webp',
      'florinda_shock.webp',
      'florinda_fanning.webp',
    ];

    florindaPoses.forEach((file) => {
      const filePath = path.join(assetsDir, file);
      expect(fs.existsSync(filePath)).toBe(true);
      const stats = fs.statSync(filePath);
      expect(stats.size).toBeGreaterThan(1000);
    });
  });

  it('verifies all case characters have required poses', () => {
    const expectedSprites = [
      'chapulin_idle.webp',
      'chapulin_slam.webp',
      'chapulin_point.webp',
      'chapulin_panic.webp',
      'donramon_idle.webp',
      'donramon_slam.webp',
      'donramon_shock.webp',
      'donramon_point.webp',
      'donramon_sweat.webp',
      'donramon_panic.webp',
      'supersam_idle.webp',
      'supersam_slam.webp',
      'supersam_point.webp',
      'supersam_breakdown.webp',
      'supersam_sweat.webp',
      'tripaseca_smug.webp',
      'tripaseca_sweat.webp',
      'tripaseca_panic.webp',
      'tripaseca_breakdown.webp',
      'judge_neutral.webp',
      'judge_gavel.webp',
      'judge_shock.webp',
      'judge_thinking.webp',
    ];

    expectedSprites.forEach((file) => {
      const filePath = path.join(assetsDir, file);
      expect(fs.existsSync(filePath)).toBe(true);
    });
  });

  it('verifies all cut-in overlays exist', () => {
    const cutins = [
      'objection_protesto.webp',
      'objection_un_momento.webp',
      'objection_toma_eso.webp',
      'objection_culpable.webp',
      'objection_inocente.webp',
    ];

    cutins.forEach((file) => {
      const filePath = path.join(assetsDir, file);
      expect(fs.existsSync(filePath)).toBe(true);
    });
  });

  it('verifies all evidence icons exist', () => {
    const evidenceIcons = [
      'chipote_chillon.webp',
      'pastillas_chiquitolina.webp',
      'antenitas_vinil.webp',
      'chicharra_oro.webp',
      'informe_medico.webp',
      'foto_crimen.webp',
      'bolsa_dolares.webp',
      'insignia_abogado.webp',
    ];

    evidenceIcons.forEach((file) => {
      const filePath = path.join(assetsDir, file);
      expect(fs.existsSync(filePath)).toBe(true);
    });
  });

  it('verifies all courtroom furniture overlay sprites exist and have content', () => {
    const furnitureSprites = ['court_podium.webp', 'court_bench.webp'];
    furnitureSprites.forEach((file) => {
      const filePath = path.join(assetsDir, file);
      expect(fs.existsSync(filePath)).toBe(true);
      const stats = fs.statSync(filePath);
      expect(stats.size).toBeGreaterThan(1000);
    });
  });

  it('verifies all scene background assets exist and have content', () => {
    const backgrounds = [
      'bg_defense.webp',
      'bg_courtroom.webp',
      'bg_witness.webp',
      'bg_judge.webp',
      'bg_museum.webp',
      'bg_detention.webp',
      'bg_waiting_room.webp'
    ];
    backgrounds.forEach((file) => {
      const filePath = path.join(assetsDir, file);
      expect(fs.existsSync(filePath)).toBe(true);
      const stats = fs.statSync(filePath);
      expect(stats.size).toBeGreaterThan(1000);
    });
  });
});
