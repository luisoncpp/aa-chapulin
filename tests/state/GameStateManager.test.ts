// @Architecture(descriptionShort="Unit tests for game state manager, inventory, and health", type="test", icon="database")
import { describe, expect, it, beforeEach } from 'vitest';
import { GameStateManager, gameState } from '../../src/state/index.js';
import type { EvidenceId } from '../../src/types/index.js';

describe('GameStateManager', () => {
  let state: GameStateManager;

  beforeEach(() => {
    state = new GameStateManager();
  });

  it('initializes with default values', () => {
    expect(state.mode).toBe('INVESTIGATION');
    expect(state.currentLocation).toBe('museum');
    expect(state.health).toBe(5);
    expect(state.maxHealth).toBe(5);
    expect(state.gameOver).toBe(false);
    expect(state.inventory).toEqual(['insignia_abogado']);
    expect(state.flags.ready_for_trial).toBe(false);
  });

  it('adds valid evidence to inventory', () => {
    const added = state.addEvidence('chipote_chillon');
    expect(added).toBe(true);
    expect(state.hasEvidence('chipote_chillon')).toBe(true);
    expect(state.inventory).toContain('chipote_chillon');
  });

  it('rejects duplicate evidence addition', () => {
    const firstAdd = state.addEvidence('chipote_chillon');
    const secondAdd = state.addEvidence('chipote_chillon');
    expect(firstAdd).toBe(true);
    expect(secondAdd).toBe(false);
    expect(state.inventory.filter((id) => id === 'chipote_chillon')).toHaveLength(1);
  });

  it('rejects non-existent evidence', () => {
    const added = state.addEvidence('non_existent_item' as EvidenceId);
    expect(added).toBe(false);
    expect(state.hasEvidence('non_existent_item' as EvidenceId)).toBe(false);
  });

  it('reduces health on penalty and triggers gameOver at 0', () => {
    expect(state.takePenalty()).toBe(true);
    expect(state.health).toBe(4);
    expect(state.gameOver).toBe(false);

    state.takePenalty();
    state.takePenalty();
    state.takePenalty();
    expect(state.health).toBe(1);

    expect(state.takePenalty()).toBe(true);
    expect(state.health).toBe(0);
    expect(state.gameOver).toBe(true);

    expect(state.takePenalty()).toBe(false);
  });

  it('resets health to maximum and clears game over state', () => {
    state.health = 0;
    state.gameOver = true;

    state.resetHealth();
    expect(state.health).toBe(5);
    expect(state.gameOver).toBe(false);
  });

  it('sets ready_for_trial flag only when all 5 clues are present', () => {
    expect(state.checkTrialReadiness()).toBe(false);
    expect(state.flags.ready_for_trial).toBe(false);

    state.addEvidence('chipote_chillon');
    state.addEvidence('pastillas_chiquitolina');
    state.addEvidence('antenitas_vinil');
    state.addEvidence('informe_medico');
    expect(state.checkTrialReadiness()).toBe(false);

    state.addEvidence('foto_crimen');
    expect(state.checkTrialReadiness()).toBe(true);
    expect(state.flags.ready_for_trial).toBe(true);
  });

  it('exports singleton gameState with evidence catalog correctly', () => {
    expect(gameState).toBeInstanceOf(GameStateManager);
    expect(gameState.allEvidence.insignia_abogado.name).toBe('Insignia de Abogado CH');
    expect(Object.keys(gameState.allEvidence)).toHaveLength(8);
  });
});
