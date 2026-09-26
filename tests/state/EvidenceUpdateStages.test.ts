// @Architecture(descriptionShort="Unit tests for multi-stage evidence descriptions", type="test", icon="database")
import { describe, expect, it } from 'vitest';
import { GameStateManager } from '../../src/state/index.js';
import { getCaseScript } from '../../src/case/index.js';

describe('EvidenceUpdateStages', () => {
  it('advances staged updates and saturates at the last stage', () => {
    const state = new GameStateManager();
    state.beginNewCase(getCaseScript('es', 'case3'));
    state.addEvidence('microfono_oro');

    expect(state.getEvidenceDesc('microfono_oro')).toContain('Trofeo de bronce');
    expect(state.updateEvidence('microfono_oro')).toBe(true);
    expect(state.getEvidenceUpdateStage('microfono_oro')).toBe(1);
    expect(state.getEvidenceDesc('microfono_oro')).toContain('pedestal de terciopelo');

    expect(state.updateEvidence('microfono_oro')).toBe(true);
    expect(state.getEvidenceUpdateStage('microfono_oro')).toBe(2);
    expect(state.getEvidenceDesc('microfono_oro')).toContain('empeñado');

    expect(state.updateEvidence('microfono_oro')).toBe(false);
    expect(state.getEvidenceUpdateStage('microfono_oro')).toBe(2);
  });

  it('keeps the original description visible after every update stage', () => {
    for (const lang of ['es', 'en'] as const) {
      const state = new GameStateManager();
      state.beginNewCase(getCaseScript(lang, 'case5'));
      state.addEvidence('informe_forense_c5');
      const original = state.getEvidenceDesc('informe_forense_c5');

      state.updateEvidence('informe_forense_c5');
      expect(state.getEvidenceDesc('informe_forense_c5')).toContain(original);

      state.updateEvidence('informe_forense_c5');
      const full = state.getEvidenceDesc('informe_forense_c5');
      expect(full).toContain(original);
      const item = state.allEvidence.informe_forense_c5!;
      for (const update of item.updates ?? []) expect(full).toContain(update);
    }
  });

  it('keeps legacy updatedDesc as a full replacement', () => {
    const state = new GameStateManager();
    state.beginNewCase(getCaseScript('es', 'case2'));
    state.addEvidence('palanca_rota');
    state.updateEvidence('palanca_rota');
    const desc = state.getEvidenceDesc('palanca_rota');
    expect(desc).toBe(state.allEvidence.palanca_rota?.updatedDesc);
  });

  it('adds evidence when updateEvidence runs before ownership', () => {
    const state = new GameStateManager();
    state.beginNewCase(getCaseScript('es', 'case3'));
    expect(state.hasEvidence('lentes_barriga')).toBe(false);
    expect(state.updateEvidence('lentes_barriga')).toBe(true);
    expect(state.hasEvidence('lentes_barriga')).toBe(true);
    expect(state.getEvidenceDesc('lentes_barriga')).toContain('cristal apareció');
  });

  it('gives case3 its own informe_barriga instead of reusing case1 informe_medico', () => {
    const defaultState = new GameStateManager();
    expect(defaultState.allEvidence.informe_medico?.name).toContain('Alma Negra');

    const case3State = new GameStateManager();
    case3State.beginNewCase(getCaseScript('es', 'case3'));
    expect(case3State.allEvidence.informe_barriga?.name).toContain('Barriga');
    expect(case3State.allEvidence.informe_medico).toBeUndefined();
  });

  it('persists evidenceUpdateStage in save data', () => {
    const state = new GameStateManager();
    state.beginNewCase(getCaseScript('es', 'case3'));
    state.addEvidence('cartucho_corte');
    state.updateEvidence('cartucho_corte');
    const saved = state.exportState();
    expect(saved.evidenceUpdateStage?.cartucho_corte).toBe(1);

    const restored = new GameStateManager();
    restored.restoreState(saved);
    expect(restored.getEvidenceUpdateStage('cartucho_corte')).toBe(1);
  });
});
