// @Architecture(descriptionShort="Character record inventory with linear saturating stages", type="service", icon="database")
/**
 * Acta de Personajes inventory owned by [[./GameStateManager.ts]].
 * Stage counter is linear and saturates, exactly like evidence updates
 * ([[docs/lessons-learned/investigation-gating-and-evidence-stages.md]]).
 */

import type { CaseId, Language, ProfileCatalogMap, ProfileId } from '../../types/index.js';
import { getProfileCatalog } from './ProfileCatalog.js';

export type ProfileStageMap = Record<string, number>;

export class ProfileInventory {
  public owned: ProfileId[] = [];
  public updateStage: ProfileStageMap = {};
  public catalog: ProfileCatalogMap = {};

  public setCatalog(lang: Language, caseId?: CaseId): void {
    this.catalog = getProfileCatalog(lang, caseId);
  }

  public clear(): void {
    this.owned = [];
    this.updateStage = {};
  }

  public has(id: ProfileId): boolean {
    return this.owned.includes(id);
  }

  public add(id: ProfileId): boolean {
    if (!this.catalog[id]) return false;
    if (this.owned.includes(id)) return false;
    this.owned.push(id);
    return true;
  }

  public getStage(id: ProfileId): number {
    return this.updateStage[id] ?? 0;
  }

  /** Advances one stage; returns false once the last stage is already shown. */
  public update(id: ProfileId): boolean {
    const item = this.catalog[id];
    if (!item) return false;
    if (!this.has(id)) this.add(id);
    const max = item.updates?.length ?? 0;
    const current = this.getStage(id);
    if (current >= max) return false;
    this.updateStage[id] = current + 1;
    return true;
  }

  public getDesc(id: ProfileId): string {
    const item = this.catalog[id];
    if (!item) return '';
    const stage = this.getStage(id);
    if (!item.updates?.length || stage <= 0) return item.desc;
    return item.updates[Math.min(stage - 1, item.updates.length - 1)] ?? item.desc;
  }

  public saturate(ids: ProfileId[]): void {
    ids.forEach(/*addAndMaxOut*/ (id) => {
      this.add(id);
      while (this.update(id)) { /*advanceStages*/ }
    });
  }
}
