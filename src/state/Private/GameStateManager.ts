// @Architecture(descriptionShort="Tracks game modes, player inventory, health, and progress", type="service", icon="database")
/**
 * Game State and Inventory Management
 * Operates on [[./EvidenceCatalog.ts|EVIDENCE_CATALOG]] and progression flags.
 */

import type { EvidenceCatalogMap, EvidenceId, GameFlags, GameMode, Language, LocationId } from '../../types/index.js';
import { getEvidenceCatalog } from './EvidenceCatalog.js';

export class GameStateManager {
  public mode: GameMode = 'INVESTIGATION';
  public currentLocation: LocationId = 'museum';
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
    talked_florinda_crime: false,
    talked_florinda_suspect: false,
    presented_chiquitolina_florinda: false,
    visited_detention: false,
    talked_chapulin_reason: false,
    talked_chapulin_antenitas: false,
    ready_for_trial: false
  };

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
    this.flags.ready_for_trial = true;
    this.mode = 'TRIAL';
  }
}
