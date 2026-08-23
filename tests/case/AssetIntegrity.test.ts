// @Architecture(descriptionShort="Unit tests verifying physical existence of all game assets", type="test", icon="layers")
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

describe('Asset Integrity & Existence', () => {
  const assetsDir = path.resolve(__dirname, '../../assets');

  it('verifies all Florinda character sprites exist and have content', () => {
    const florindaPoses = [
      'florinda_idle.png',
      'florinda_angry.png',
      'florinda_crying.png',
      'florinda_shock.png',
      'florinda_fanning.png',
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
      'chapulin_idle.png',
      'chapulin_slam.png',
      'chapulin_point.png',
      'chapulin_panic.png',
      'supersam_idle.png',
      'supersam_slam.png',
      'supersam_point.png',
      'supersam_breakdown.png',
      'tripaseca_smug.png',
      'tripaseca_sweat.png',
      'tripaseca_panic.png',
      'tripaseca_breakdown.png',
      'judge_neutral.png',
      'judge_gavel.png',
      'judge_shock.png',
      'judge_thinking.png',
    ];

    expectedSprites.forEach((file) => {
      const filePath = path.join(assetsDir, file);
      expect(fs.existsSync(filePath)).toBe(true);
    });
  });

  it('verifies all cut-in overlays exist', () => {
    const cutins = [
      'objection_protesto.png',
      'objection_un_momento.png',
      'objection_toma_eso.png',
      'objection_culpable.png',
    ];

    cutins.forEach((file) => {
      const filePath = path.join(assetsDir, file);
      expect(fs.existsSync(filePath)).toBe(true);
    });
  });

  it('verifies all evidence icons exist', () => {
    const evidenceIcons = [
      'chipote_chillon.png',
      'pastillas_chiquitolina.png',
      'antenitas_vinil.png',
      'chicharra_oro.png',
      'informe_medico.png',
      'foto_crimen.png',
      'bolsa_dolares.png',
      'insignia_abogado.png',
    ];

    evidenceIcons.forEach((file) => {
      const filePath = path.join(assetsDir, file);
      expect(fs.existsSync(filePath)).toBe(true);
    });
  });
});
