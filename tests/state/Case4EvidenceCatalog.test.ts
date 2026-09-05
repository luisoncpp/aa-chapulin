// @Architecture(descriptionShort="Unit tests for isolated Case 4 evidence catalog", type="test", icon="database")
import { describe, expect, it } from 'vitest';
import { getEvidenceCatalog } from '../../src/state/index.js';

const EXAMINE_IDS = [
  'foto_crimen',
  'candado_cadena',
  'plano_hotel',
  'botella_vino',
  'nota_amenaza'
] as const;

const UPDATE_LENGTHS: Record<string, number> = {
  informe_policial: 2,
  foto_crimen: 1,
  plano_hotel: 1,
  residuos_manos: 1,
  billetera_cuajinais: 1
};

describe('Case4EvidenceCatalog', () => {
  it('returns only case4 items for es and en', () => {
    const es = getEvidenceCatalog('es', 'case4');
    const en = getEvidenceCatalog('en', 'case4');
    const ids = Object.keys(es).sort();

    expect(ids).toHaveLength(16);
    expect(ids).toContain('insignia_abogado');
    expect(ids).toContain('nota_amenaza');
    expect(es.informe_medico).toBeUndefined();
    expect(es.chipote_chillon).toBeUndefined();
    expect(en.informe_medico).toBeUndefined();
    expect(Object.keys(en).sort()).toEqual(ids);
  });

  it('does not leak case1 foto_crimen mirror description', () => {
    const catalog = getEvidenceCatalog('es', 'case4');
    const foto = catalog.foto_crimen;
    expect(foto?.name).toContain('Suite 304');
    expect(foto?.desc).toContain('cubeta de hielo');
    expect(foto?.icon).toBe('assets/foto_suite304.webp');
    expect(foto?.desc).not.toContain('HC');
    expect(foto?.desc).not.toMatch(/espejo/i);
    expect(getEvidenceCatalog('es', 'case1').foto_crimen?.icon).toBe('assets/foto_crimen.webp');
  });

  it('attaches detailedView to the five examine items', () => {
    const catalog = getEvidenceCatalog('es', 'case4');
    for (const id of EXAMINE_IDS) {
      const item = catalog[id];
      expect(item?.detailedView?.imageAsset, id).toMatch(/^assets\/examine_/);
      expect(item?.detailedView?.caption, id).toBeTruthy();
    }
    expect(catalog.foto_crimen?.detailedView?.imageAsset).toBe('assets/examine_foto.webp');
    expect(catalog.nota_amenaza?.detailedView?.clickableZones).toHaveLength(3);
  });

  it('defines expected updates array lengths', () => {
    const catalog = getEvidenceCatalog('es', 'case4');
    for (const [id, length] of Object.entries(UPDATE_LENGTHS)) {
      expect(catalog[id as keyof typeof catalog]?.updates).toHaveLength(length);
    }
    expect(catalog.informe_forense?.updates).toBeUndefined();
  });
});
