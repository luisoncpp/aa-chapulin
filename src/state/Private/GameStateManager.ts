// @Architecture(descriptionShort="Tracks game modes, player inventory, health, and progress", type="service", icon="database")
/**
 * Game State and Inventory Management
 * Operates on [[./EvidenceCatalog.ts|EVIDENCE_CATALOG]] and progression flags.
 */

import type {
  AdjournmentDefinition,
  CaseScript,
  EvidenceId,
  GameFlags,
  GameMode,
  Language,
  LocationId,
  TrialDay
} from '../../types/index.js';
import { getEvidenceCatalog } from './EvidenceCatalog.js';
import {
  advanceEvidenceStage,
  getEvidenceUpdateStage,
  resolveEvidenceDescription,
  type EvidenceStageMap
} from './EvidenceProgress.js';
import { applyCaseProgressionRules, beginNextTrialDayState } from './GameStateCaseRules.js';
import { exportGameState, restoreGameState } from './GameStatePersistence.js';
import { type SaveData, type TrialStateSnapshot } from './SaveManager.js';

const CASE1_REQUIRED: EvidenceId[] = [
  'chipote_chillon', 'pastillas_chiquitolina', 'antenitas_vinil', 'informe_medico', 'foto_crimen'
];

export class GameStateManager {
  public caseId: import('../../types/index.js').CaseId = 'case1';
  public trialDay: TrialDay = 1;
  public requiredEvidence: EvidenceId[] = [...CASE1_REQUIRED];
  public debugEvidence: EvidenceId[] = [...CASE1_REQUIRED, 'bolsa_dolares'];
  public debugUnlockLocations: LocationId[] = ['detention'];
  public mode: GameMode = 'INVESTIGATION';
  public currentLocation: LocationId = 'museum';
  public unlockedLocations: LocationId[] = ['museum'];
  public language: Language = 'es';
  public health = 5;
  public readonly maxHealth = 5;
  public gameOver = false;
  public allEvidence = getEvidenceCatalog('es');
  public inventory: EvidenceId[] = ['insignia_abogado'];
  public flags: GameFlags = { ready_for_trial: false };
  public evidenceUpdateStage: EvidenceStageMap = {};

  // @Section(Hotspot & Progress Tracking)
  public isHotspotExamined(hotspotId: string): boolean {
    return Boolean(this.flags[`examined_${hotspotId}`] || this.flags[hotspotId]);
  }

  public markHotspotExamined(hotspotId: string): void {
    this.flags[`examined_${hotspotId}`] = true;
  }

  public isTalkCompleted(talkId: string): boolean {
    return Boolean(this.flags[`talk_${talkId}`]);
  }

  public markTalkCompleted(talkId: string): void {
    this.flags[`talk_${talkId}`] = true;
  }

  public isIntroPlayed(introId: string): boolean {
    return Boolean(this.flags[`intro_${introId}`]);
  }

  public markIntroPlayed(introId: string): void {
    this.flags[`intro_${introId}`] = true;
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

  public getEvidenceUpdateStage(evidenceId: EvidenceId): number {
    return getEvidenceUpdateStage(this.evidenceUpdateStage, evidenceId);
  }

  public isEvidenceUpdated(evidenceId: EvidenceId): boolean {
    return this.getEvidenceUpdateStage(evidenceId) > 0;
  }

  // fallow-ignore-next-line complexity
  public updateEvidence(evidenceId: EvidenceId): boolean {
    const item = this.allEvidence[evidenceId];
    if (!item) return false;
    if (!this.hasEvidence(evidenceId)) this.addEvidence(evidenceId);
    const advanced = advanceEvidenceStage(this.evidenceUpdateStage, item);
    if (advanced && this.getEvidenceUpdateStage(evidenceId) > 0) {
      this.flags[`updated_${evidenceId}`] = true;
    }
    return advanced;
  }

  public getEvidenceDesc(evidenceId: EvidenceId): string {
    return resolveEvidenceDescription(
      this.allEvidence[evidenceId],
      this.getEvidenceUpdateStage(evidenceId)
    );
  }

  // @Section(Language Setting)
  public setLanguage(lang: Language): void {
    this.language = lang;
    this.allEvidence = getEvidenceCatalog(lang, this.caseId);
  }

  // @Section(Penalty & Health)
  public takePenalty(): boolean {
    if (this.health <= 0) return false;
    this.health--;
    if (this.health <= 0) this.gameOver = true;
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
    this.evidenceUpdateStage = {};
    this.allEvidence = getEvidenceCatalog(this.language, script.id);
    this.resetHealth();
    this.applyProgressionRules(script);
  }

  public applyProgressionRules(script: CaseScript): void { applyCaseProgressionRules(this, script); }
  public beginNextTrialDay(adjournment: AdjournmentDefinition): void { beginNextTrialDayState(this, adjournment); }
  public beginTrialDay2(adjournment: AdjournmentDefinition): void { this.beginNextTrialDay(adjournment); }

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
      while (this.updateEvidence(item)) { /*advanceStages*/ }
    });
    this.debugUnlockLocations.forEach(/*unlockEach*/ (loc) => {
      this.unlockLocation(loc);
    });
    this.flags.ready_for_trial = true;
    this.mode = 'TRIAL';
  }

  // @Section(State Persistence)
  public exportState(trialSnapshot?: TrialStateSnapshot): SaveData {
    return exportGameState(this, trialSnapshot);
  }

  public restoreState(data: SaveData): void {
    restoreGameState(this, data);
  }
}
