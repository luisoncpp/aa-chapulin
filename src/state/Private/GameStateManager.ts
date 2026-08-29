// @Architecture(descriptionShort="Tracks game modes, player inventory, health, and progress", type="service", icon="database")
/**
 * Game State and Inventory Management
 * Operates on [[./EvidenceCatalog.ts|EVIDENCE_CATALOG]] and progression flags.
 */

import type { EvidenceCatalogMap, EvidenceId, GameFlags, GameMode, Language, LocationId } from '../../types/index.js';
import { getEvidenceCatalog } from './EvidenceCatalog.js';
import { CURRENT_SAVE_VERSION, type SaveData, type TrialStateSnapshot } from './SaveManager.js';

export class GameStateManager {
  public mode: GameMode = 'INVESTIGATION';
  public currentLocation: LocationId = 'museum';
  public unlockedLocations: LocationId[] = ['museum'];
  public language: Language = 'es';
  public health = 5;
  public readonly maxHealth = 5;
  public gameOver = false;
  public allEvidence: EvidenceCatalogMap = getEvidenceCatalog('es');
  public inventory: EvidenceId[] = ['insignia_abogado'];
  public flags: GameFlags = {
    examined_pedestal: false,
    examined_armor: false,
    examined_vent: false,
    examined_security_cam: false,
    examined_treasure_chest: false,
    examined_chapulin_spot: false,
    examined_phone_spot: false,
    examined_table_spot: false,
    talked_florinda_crime: false,
    talked_florinda_suspect: false,
    presented_chiquitolina_florinda: false,
    visited_detention: false,
    talked_chapulin_reason: false,
    talked_chapulin_antenitas: false,
    ready_for_trial: false
  };

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

  // @Section(Investigation Readiness)
  // fallow-ignore-next-line complexity
  public checkTrialReadiness(): boolean {
    const hasRequiredClues =
      this.hasEvidence('chipote_chillon') &&
      this.hasEvidence('pastillas_chiquitolina') &&
      this.hasEvidence('antenitas_vinil') &&
      this.hasEvidence('informe_medico') &&
      this.hasEvidence('foto_crimen');

    if (hasRequiredClues) {
      this.flags.ready_for_trial = true;
    }
    return this.flags.ready_for_trial;
  }

  // @Section(Trial Debug Setup)
  public populateTrialEvidence(): void {
    const trialEvidence: EvidenceId[] = [
      'chipote_chillon',
      'pastillas_chiquitolina',
      'antenitas_vinil',
      'informe_medico',
      'foto_crimen',
      'bolsa_dolares'
    ];
    trialEvidence.forEach(/*addEachItem*/ (item) => {
      this.addEvidence(item);
    });
    this.unlockLocation('detention');
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
      trial: trialSnapshot
    };
  }

  public restoreState(data: SaveData): void {
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
