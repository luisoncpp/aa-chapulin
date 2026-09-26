// @Architecture(descriptionShort="Guards Case 4 poses, plates, and pipeline wiring", type="test", icon="layers")
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const ROOT = path.resolve(__dirname, '../..');
const ASSETS = path.join(ROOT, 'assets');

const POSES = [
  'botija_idle', 'botija_nervioso', 'botija_llorando', 'botija_aliviado',
  'cecilio_idle', 'cecilio_ciego', 'cecilio_escandalo', 'cecilio_shock',
  'maruja_idle', 'maruja_coqueta', 'maruja_abanico', 'maruja_nerviosa',
  'maruja_shock',
  'rufino_smug', 'rufino_monocle', 'rufino_sweat', 'rufino_panic',
  'rufino_breakdown',
];

const BACKGROUNDS = [
  'bg_hotel_lobby', 'bg_hotel_suite', 'bg_hotel_bar', 'bg_hotel_sotano',
  'bg_hotel_suite204', 'bg_hotel_cava', 'bg_hotel_azotea',
  'bg_hotel_azotea_day',
];

const EXAMINE = [
  'examine_foto', 'examine_cadena', 'examine_plano', 'examine_botella',
  'examine_nota', 'examine_orden', 'examine_registro', 'examine_sello',
];

const ICONS = [
  'informe_policial', 'foto_suite304', 'candado_cadena', 'plano_hotel',
  'residuos_manos', 'billetera_cuajinais', 'informe_forense', 'casquillo_fogueo',
  'registro_montacargas', 'copa_vino', 'botella_vino', 'boleta_baccarat',
  'baul_etiquetas', 'sello_lacre', 'nota_amenaza', 'orden_servicios',
  'toxicologia_vino',
];

function expectWebp(stem: string): void {
  const filePath = path.join(ASSETS, `${stem}.webp`);
  expect(fs.existsSync(filePath), stem).toBe(true);
  expect(fs.statSync(filePath).size, stem).toBeGreaterThan(1000);
}

describe('Case 4 visual assets', () => {
  it('keeps Botija, Cecilio, Maruja, and Rufino pose files on disk', () => {
    POSES.forEach(expectWebp);
  });

  it('keeps hotel investigation plates and deep-examine views', () => {
    BACKGROUNDS.forEach(expectWebp);
    EXAMINE.forEach(expectWebp);
  });

  it('keeps Case 4 court-record icon webps', () => {
    ICONS.forEach(expectWebp);
  });
});
