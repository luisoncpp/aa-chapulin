// @Architecture(descriptionShort="Unit tests for game state manager, inventory, and health", type="test", icon="database")
import { describe, expect, it, beforeEach } from 'vitest';
import { getCaseScript } from '../../src/case/index.js';
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
    expect(state.unlockedLocations).toEqual(['museum']);
    expect(state.health).toBe(5);
    expect(state.maxHealth).toBe(5);
    expect(state.gameOver).toBe(false);
    expect(state.inventory).toEqual(['insignia_abogado']);
    expect(state.flags.ready_for_trial).toBe(false);
  });

  it('manages unlocked locations and rejects duplicates', () => {
    expect(state.isLocationUnlocked('museum')).toBe(true);
    expect(state.isLocationUnlocked('detention')).toBe(false);

    const firstUnlock = state.unlockLocation('detention');
    expect(firstUnlock).toBe(true);
    expect(state.isLocationUnlocked('detention')).toBe(true);
    expect(state.unlockedLocations).toEqual(['museum', 'detention']);

    const duplicateUnlock = state.unlockLocation('detention');
    expect(duplicateUnlock).toBe(false);
    expect(state.unlockedLocations).toEqual(['museum', 'detention']);
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

  it('populates all required trial evidence and marks readiness for debug trial', () => {
    state.populateTrialEvidence();
    expect(state.mode).toBe('TRIAL');
    expect(state.flags.ready_for_trial).toBe(true);
    expect(state.hasEvidence('chipote_chillon')).toBe(true);
    expect(state.hasEvidence('pastillas_chiquitolina')).toBe(true);
    expect(state.hasEvidence('antenitas_vinil')).toBe(true);
    expect(state.hasEvidence('informe_medico')).toBe(true);
    expect(state.hasEvidence('foto_crimen')).toBe(true);
    expect(state.hasEvidence('bolsa_dolares')).toBe(true);
    expect(state.hasEvidence('insignia_abogado')).toBe(true);
    expect(state.isEvidenceUpdated('chipote_chillon')).toBe(true);
  });

  it('updates evidence descriptions with stages and persists the flag', () => {
    expect(state.getEvidenceDesc('chipote_chillon')).toContain('vinil suave y goma');
    expect(state.updateEvidence('chipote_chillon')).toBe(true);
    expect(state.hasEvidence('chipote_chillon')).toBe(true);
    expect(state.isEvidenceUpdated('chipote_chillon')).toBe(true);
    expect(state.getEvidenceDesc('chipote_chillon')).toContain('chillido');
    expect(state.updateEvidence('chipote_chillon')).toBe(false);
    expect(state.getEvidenceDesc('missing' as EvidenceId)).toBe('');

    const snapshot = state.exportState();
    const restored = new GameStateManager();
    restored.restoreState(snapshot);
    expect(restored.isEvidenceUpdated('chipote_chillon')).toBe(true);
    expect(restored.getEvidenceDesc('chipote_chillon')).toContain('chillido');
    expect(restored.getEvidenceUpdateStage('chipote_chillon')).toBe(1);
  });

  it('exports and restores state snapshot accurately', () => {
    state.health = 3;
    state.currentLocation = 'detention';
    state.unlockLocation('detention');
    state.language = 'en';
    state.addEvidence('chipote_chillon');
    state.flags.talked_chapulin_reason = true;

    const snapshot = state.exportState({ phase: 'TESTIMONY', testimonyKey: 'testimony1', statementIdx: 2 });
    expect(snapshot.health).toBe(3);
    expect(snapshot.currentLocation).toBe('detention');
    expect(snapshot.unlockedLocations).toEqual(['museum', 'detention']);
    expect(snapshot.language).toBe('en');
    expect(snapshot.inventory).toContain('chipote_chillon');
    expect(snapshot.flags.talked_chapulin_reason).toBe(true);
    expect(snapshot.trial?.statementIdx).toBe(2);

    const newState = new GameStateManager();
    newState.restoreState(snapshot);
    expect(newState.health).toBe(3);
    expect(newState.currentLocation).toBe('detention');
    expect(newState.unlockedLocations).toEqual(['museum', 'detention']);
    expect(newState.language).toBe('en');
    expect(newState.hasEvidence('chipote_chillon')).toBe(true);
    expect(newState.flags.talked_chapulin_reason).toBe(true);
  });

  it('tracks examined hotspots using isHotspotExamined and markHotspotExamined', () => {
    expect(state.isHotspotExamined('pedestal')).toBe(false);
    expect(state.isHotspotExamined('armor')).toBe(false);

    state.markHotspotExamined('pedestal');
    expect(state.isHotspotExamined('pedestal')).toBe(true);
    expect(state.isHotspotExamined('armor')).toBe(false);
    expect(state.flags.examined_pedestal).toBe(true);
  });

  it('tracks played intros using isIntroPlayed and markIntroPlayed in flags', () => {
    expect(state.isIntroPlayed('case1_d1_museum')).toBe(false);

    state.markIntroPlayed('case1_d1_museum');
    expect(state.isIntroPlayed('case1_d1_museum')).toBe(true);
    expect(state.flags.intro_case1_d1_museum).toBe(true);
  });

  it('configures Case 2 progression and day-2 evidence gates', () => {
    const script = getCaseScript('es', 'case2');
    state.beginNewCase(script);
    expect(state.caseId).toBe('case2');
    expect(state.currentLocation).toBe('detention');
    expect(state.unlockedLocations).toEqual(['detention']);
    expect(state.checkTrialReadiness()).toBe(false);
    script.requiredEvidence.forEach((id) => state.addEvidence(id));
    expect(state.checkTrialReadiness()).toBe(true);
    state.beginTrialDay2(script.adjournment!);
    state.applyProgressionRules(script);
    expect(state.trialDay).toBe(2);
    expect(state.currentLocation).toBe('oficina_postal');
    expect(state.unlockedLocations).toEqual(['oficina_postal']);
    expect(state.requiredEvidence).toEqual(script.adjournment?.requiredEvidence);
  });

  it('exports singleton gameState with evidence catalog correctly', () => {
    expect(gameState).toBeInstanceOf(GameStateManager);
    expect(gameState.allEvidence.insignia_abogado.name).toBe('Insignia de Abogado CH');
    expect(Object.keys(gameState.allEvidence).length).toBeGreaterThanOrEqual(20);
  });
});


