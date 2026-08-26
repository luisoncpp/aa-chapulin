// @Architecture(descriptionShort="Unit tests for internationalization service and dictionaries", type="test", icon="globe")
import { describe, expect, it, beforeEach } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
import { I18nService, UI_EN, UI_ES } from '../../src/i18n/index.js';
import { getEvidenceCatalog } from '../../src/state/index.js';

describe('I18nService Subsystem', () => {
  let service: I18nService;

  beforeEach(() => {
    service = new I18nService();
  });

  it('defaults to Spanish and allows switching to English and back', () => {
    expect(service.getLanguage()).toBe('es');
    expect(service.t.btnExamine).toBe(UI_ES.btnExamine);

    service.setLanguage('en');
    expect(service.getLanguage()).toBe('en');
    expect(service.t.btnExamine).toBe(UI_EN.btnExamine);

    service.setLanguage('es');
    expect(service.getLanguage()).toBe('es');
  });

  it('toggles language between Spanish and English', () => {
    expect(service.getLanguage()).toBe('es');

    const next1 = service.toggleLanguage();
    expect(next1).toBe('en');
    expect(service.getLanguage()).toBe('en');

    const next2 = service.toggleLanguage();
    expect(next2).toBe('es');
    expect(service.getLanguage()).toBe('es');
  });

  it('notifies subscribers on language change and allows unsubscription', () => {
    const changes: string[] = [];
    const unsubscribe = service.subscribe((lang) => {
      changes.push(lang);
    });

    service.setLanguage('en');
    expect(changes).toEqual(['en']);

    service.setLanguage('en'); // No change -> no duplicate notification
    expect(changes).toEqual(['en']);

    unsubscribe();
    service.setLanguage('es');
    expect(changes).toEqual(['en']); // No new notification after unsub
  });

  it('ignores unsupported languages', () => {
    service.setLanguage('fr' as any);
    expect(service.getLanguage()).toBe('es');
  });

  it('verifies that all UI dictionary fields are populated for ES and EN', () => {
    const keys = Object.keys(UI_ES) as (keyof typeof UI_ES)[];
    keys.forEach((k) => {
      expect(UI_ES[k]).toBeDefined();
      expect(UI_EN[k]).toBeDefined();
    });

    expect(UI_ES.notifEvidenceAdded('Insignia')).toContain('Insignia');
    expect(UI_EN.notifEvidenceAdded('Badge')).toContain('Badge');
  });

  it('verifies bilingual evidence catalogs have matching keys and contents', () => {
    const esCatalog = getEvidenceCatalog('es');
    const enCatalog = getEvidenceCatalog('en');

    const expectedEvidenceIds = [
      'insignia_abogado',
      'chipote_chillon',
      'pastillas_chiquitolina',
      'antenitas_vinil',
      'informe_medico',
      'foto_crimen',
      'chicharra_oro',
      'bolsa_dolares'
    ];

    expectedEvidenceIds.forEach((id) => {
      const esItem = (esCatalog as any)[id];
      const enItem = (enCatalog as any)[id];

      expect(esItem).toBeDefined();
      expect(enItem).toBeDefined();
      expect(esItem.id).toBe(id);
      expect(enItem.id).toBe(id);
      expect(esItem.name.length).toBeGreaterThan(0);
      expect(enItem.name.length).toBeGreaterThan(0);
      expect(esItem.desc.length).toBeGreaterThan(0);
      expect(enItem.desc.length).toBeGreaterThan(0);
      expect(esItem.icon).toBe(enItem.icon);
    });
  });

  it('verifies bilingual case scripts have matching structure and contradictions', () => {
    const esScript = getCaseScript('es');
    const enScript = getCaseScript('en');

    // Investigation scenes
    expect(Object.keys(esScript.investigation)).toEqual(Object.keys(enScript.investigation));
    expect(esScript.investigation.museum.hotspots.length).toBe(enScript.investigation.museum.hotspots.length);
    expect(esScript.investigation.detention.hotspots.length).toBe(enScript.investigation.detention.hotspots.length);

    // Testimonies and contradiction evidence
    expect(esScript.trial.testimony1.statements.length).toBe(enScript.trial.testimony1.statements.length);
    expect(esScript.trial.testimony2.statements.length).toBe(enScript.trial.testimony2.statements.length);

    const esT1Contra = esScript.trial.testimony1.statements.find((s) => s.contradiction);
    const enT1Contra = enScript.trial.testimony1.statements.find((s) => s.contradiction);
    expect(esT1Contra?.contradiction?.evidence).toEqual(enT1Contra?.contradiction?.evidence);

    const esT2Contra1 = esScript.trial.testimony2.statements[0].contradiction;
    const enT2Contra1 = enScript.trial.testimony2.statements[0].contradiction;
    expect(esT2Contra1?.evidence).toEqual(enT2Contra1?.evidence);

    expect(esScript.trial.climax.presentTarget).toEqual(enScript.trial.climax.presentTarget);
  });
});
