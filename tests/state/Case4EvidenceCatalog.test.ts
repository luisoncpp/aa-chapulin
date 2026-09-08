// @Architecture(descriptionShort="Unit tests for isolated Case 4 evidence catalog", type="test", icon="database")
import { describe, expect, it } from 'vitest';
import { getEvidenceCatalog } from '../../src/state/index.js';

const EXAMINE_IDS = [
  'candado_cadena',
  'plano_hotel',
  'botella_vino',
  'nota_amenaza',
  'orden_servicios',
  'registro_montacargas',
  'sello_lacre'
] as const;

const UPDATE_LENGTHS: Record<string, number> = {
  informe_policial: 3,
  orden_servicios: 3,
  toxicologia_vino: 1,
  nota_amenaza: 1
};

describe('Case4EvidenceCatalog', () => {
  it('returns only case4 items for es and en', () => {
    const es = getEvidenceCatalog('es', 'case4');
    const en = getEvidenceCatalog('en', 'case4');
    const ids = Object.keys(es).sort();

    expect(ids).toHaveLength(18);
    expect(ids).toContain('insignia_abogado');
    expect(ids).toContain('nota_amenaza');
    expect(ids).toContain('orden_servicios');
    expect(ids).toContain('toxicologia_vino');
    expect(es.informe_medico).toBeUndefined();
    expect(es.chipote_chillon).toBeUndefined();
    expect(en.informe_medico).toBeUndefined();
    expect(Object.keys(en).sort()).toEqual(ids);
  });

  it('does not leak case1 foto_crimen mirror description', () => {
    const catalog = getEvidenceCatalog('es', 'case4');
    const foto = catalog.foto_crimen;
    expect(foto?.name).toContain('Crimen');
    expect(foto?.icon).toBe('assets/foto_suite304.webp');
    expect(foto?.desc).not.toContain('HC');
    expect(foto?.desc).not.toMatch(/espejo/i);
    expect(getEvidenceCatalog('es', 'case1').foto_crimen?.icon).toBe('assets/foto_crimen.webp');
  });

  it('attaches detailedView to the examine items', () => {
    const catalog = getEvidenceCatalog('es', 'case4');
    for (const id of EXAMINE_IDS) {
      const item = catalog[id];
      expect(item?.detailedView?.imageAsset, id).toMatch(/^assets\/examine_/);
      expect(item?.detailedView?.caption, id).toBeTruthy();
    }
    expect(catalog.foto_crimen?.detailedView).toBeUndefined();
    expect(catalog.nota_amenaza?.detailedView?.clickableZones).toHaveLength(4);
  });

  it('defines expected updates array lengths', () => {
    const catalog = getEvidenceCatalog('es', 'case4');
    for (const [id, length] of Object.entries(UPDATE_LENGTHS)) {
      expect(catalog[id as keyof typeof catalog]?.updates).toHaveLength(length);
    }
    expect(catalog.informe_forense?.updates).toBeUndefined();
    expect(catalog.foto_crimen?.updates).toBeUndefined();
    expect(catalog.plano_hotel?.updates).toBeUndefined();
    expect(catalog.residuos_manos?.updates).toBeUndefined();
    expect(catalog.billetera_cuajinais?.updates).toBeUndefined();
  });

  it('keeps freight-log times aligned with the Case 4 timeline', () => {
    const es = getEvidenceCatalog('es', 'case4').registro_montacargas;
    const en = getEvidenceCatalog('en', 'case4').registro_montacargas;

    expect(es?.desc).toContain('22:20');
    expect(es?.desc).toContain('22:40');
    expect(en?.desc).toContain('10:20 PM');
    expect(en?.desc).toContain('10:40 PM');
  });
});
