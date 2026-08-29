// @Architecture(descriptionShort="Tracks game modes, player inventory, health, and progress", type="service", icon="database")
/**
 * Game State and Inventory Management
 * Operates on [[./EvidenceCatalog.ts|EVIDENCE_CATALOG]] and progression flags.
 */

import type {
  AdjournmentDefinition,
  CaseId,
  CaseScript,
  EvidenceCatalogMap,
  EvidenceId,
  GameFlags,
  GameMode,
  Language,
  LocationId,
  TrialDay
} from '../../types/index.js';
import { getEvidenceCatalog } from './EvidenceCatalog.js';
import { CURRENT_SAVE_VERSION, type SaveData, type TrialStateSnapshot } from './SaveManager.js';

const CASE1_REQUIRED: EvidenceId[] = [
  'chipote_chillon', 'pastillas_chiquitolina', 'antenitas_vinil',
  'informe_medico', 'foto_crimen'
];
const CASE1_DEBUG: EvidenceId[] = [...CASE1_REQUIRED, 'bolsa_dolares'];

export class GameStateManager {
  public caseId: CaseId = 'case1';
  public trialDay: TrialDay = 1;
  public requiredEvidence: EvidenceId[] = [...CASE1_REQUIRED];
  public debugEvidence: EvidenceId[] = [...CASE1_DEBUG];
  public debugUnlockLocations: LocationId[] = ['detention'];
  public mode: GameMode = 'INVESTIGATION';
  public currentLocation: LocationId = 'museum';
  public unlockedLocations: LocationId[] = ['museum'];
  public language: Language = 'es';
  public health = 5;
  public readonly maxHealth = 5;
  public gameOver = false;
  public allEvidence: EvidenceCatalogMap = getEvidenceCatalog('es');
  public inventory: EvidenceId[] = ['insignia_abogado'];
  public flags: GameFlags = { ready_for_trial: false };

  // @Section(Hotspot & Progress Tracking)
  public isHotspotExamined(hotspotId: string): boolean {
    return Boolean(this.flags[`examined_${hotspotId}`] || this.flags[hotspotId]);
  }

  public markHotspotExamined(hotspotId: string): void {
    this.flags[`examined_${hotspotId}`] = true;
  }

  // @Section(Location Operations)
  public unlockLocation(locationId: LocationId): boolean {
    if (this.unlockedLocations.includes(locationId)) return false;
    this.unlockedLocations.push(locationId);
    return true;
  }

  public isLocationUnlocked(locationId: LocationId): boolean {
    return this.unlockedLocations.includes(locationId);
  }

  // @Section(Inventory Operations)
  public addEvidence(evidenceId: EvidenceId): boolean {
    if (this.inventory.includes(evidenceId)) return false;
    if (!this.allEvidence[evidenceId]) return false;
    this.inventory.push(evidenceId);
    return true;
  }

  public hasEvidence(evidenceId: EvidenceId): boolean {
    return this.inventory.includes(evidenceId);
  }

  // @Section(Language Setting)
  public setLanguage(lang: Language): void {
    this.language = lang;
    this.allEvidence = getEvidenceCatalog(lang);
  }

  // @Section(Penalty & Health)
  public takePenalty(): boolean {
    if (this.health <= 0) return false;
    this.health--;
    if (this.health <= 0) {
      this.gameOver = true;
    }
    return true;
  }

  public resetHealth(): void {
    this.health = this.maxHealth;
    this.gameOver = false;
  }

  // @Section(Case Progression)
  public beginNewCase(script: CaseScript): void {
    this.caseId = script.id;
    this.trialDay = 1;
    this.mode = 'INVESTIGATION';
    this.currentLocation = script.startLocation;
    this.unlockedLocations = [script.startLocation];
    this.inventory = ['insignia_abogado'];
    this.flags = { ready_for_trial: false };
    this.resetHealth();
    this.applyProgressionRules(script);
  }

  public applyProgressionRules(script: CaseScript): void {
    this.debugEvidence = [...script.debugEvidence];
    this.debugUnlockLocations = [...script.debugUnlockLocations];
    if (this.trialDay === 2 && script.adjournment) {
      this.requiredEvidence = [...script.adjournment.requiredEvidence];
      return;
    }
    this.requiredEvidence = [...script.requiredEvidence];
  }

  public beginTrialDay2(adjournment: AdjournmentDefinition): void {
    this.trialDay = 2;
    this.flags.completed_trial_day1 = true;
    this.flags.ready_for_trial = false;
    this.requiredEvidence = [...adjournment.requiredEvidence];
    this.mode = 'INVESTIGATION';
    adjournment.unlockLocations.forEach(/*unlockEach*/ (loc) => {
      this.unlockLocation(loc);
    });
  }

  // @Section(Investigation Readiness)
  public checkTrialReadiness(): boolean {
    const hasRequiredClues = this.requiredEvidence.every(/*owned*/ (id) => this.hasEvidence(id));
    if (hasRequiredClues) {
      this.flags.ready_for_trial = true;
    }
    return this.flags.ready_for_trial;
  }

  // @Section(Trial Debug Setup)
  public populateTrialEvidence(): void {
    this.debugEvidence.forEach(/*addEachItem*/ (item) => {
      this.addEvidence(item);
    });
    this.debugUnlockLocations.forEach(/*unlockEach*/ (loc) => {
      this.unlockLocation(loc);
    });
    this.flags.ready_for_trial = true;
    this.mode = 'TRIAL';
  }

  // @Section(State Persistence)
  public exportState(trialSnapshot?: TrialStateSnapshot): SaveData {
    return {
      version: CURRENT_SAVE_VERSION,
      timestamp: Date.now(),
      mode: this.mode,
      currentLocation: this.currentLocation,
      unlockedLocations: [...this.unlockedLocations],
      language: this.language,
      health: this.health,
      gameOver: this.gameOver,
      inventory: [...this.inventory],
      flags: { ...this.flags },
      trial: trialSnapshot,
      caseId: this.caseId,
      trialDay: this.trialDay
    };
  }

  public restoreState(data: SaveData): void {
    this.caseId = data.caseId ?? 'case1';
    this.trialDay = data.trialDay ?? 1;
    this.mode = data.mode;
    this.currentLocation = data.currentLocation;
    this.unlockedLocations = data.unlockedLocations
      ? [...data.unlockedLocations]
      : ['museum', 'detention'];
    this.health = data.health;
    this.gameOver = data.gameOver;
    this.inventory = [...data.inventory];
    this.flags = { ...data.flags };
    this.setLanguage(data.language);
  }
}
