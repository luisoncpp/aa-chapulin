// @Architecture(descriptionShort="Validates and migrates the save payload schema", type="service", icon="database")
/**
 * Save payload schema.
 * Versioning and field checks for [[./SaveSlots.ts]].
 */

import type {
  CaseId, EvidenceId, GameFlags, GameMode, Language, LocationId, ProfileId, TrialDay
} from '../../types/index.js';

export interface TrialStateSnapshot {
  phase: 'IDLE' | 'TESTIMONY' | 'CLIMAX';
  testimonyIndex?: number | null;
  /** Legacy v1 field retained so existing browser saves can be restored. */
  testimonyKey?: 'testimony1' | 'testimony2' | null;
  statementIdx: number;
  trialDay?: TrialDay;
  climaxStageIdx?: number;
  climaxChoiceIdx?: number;
  climaxResolved?: boolean;
  pressedStatementIds?: string[];
}

export interface SaveData {
  version: number;
  timestamp: number;
  mode: GameMode;
  currentLocation: LocationId;
  unlockedLocations?: LocationId[];
  language: Language;
  health: number;
  gameOver: boolean;
  inventory: EvidenceId[];
  flags: GameFlags;
  evidenceUpdateStage?: Record<string, number>;
  profiles?: ProfileId[];
  profileUpdateStage?: Record<string, number>;
  trial?: TrialStateSnapshot;
  caseId?: CaseId;
  trialDay?: TrialDay;
}

export const CURRENT_SAVE_VERSION = 2;

/**
 * Brings a v1 payload up to the current schema. v1 predates the Acta de
 * Personajes, so it simply gains the two empty character-record fields.
 * Without this, bumping the version would erase every published case's saves.
 */
export function migrateSave(data: SaveData): SaveData {
  if (data.version >= CURRENT_SAVE_VERSION) return data;
  return {
    ...data,
    profiles: data.profiles ?? [],
    profileUpdateStage: data.profileUpdateStage ?? {},
    version: CURRENT_SAVE_VERSION
  };
}

// fallow-ignore-next-line complexity
export function isValidSaveData(data: unknown): data is SaveData {
  if (!data || typeof data !== 'object') return false;
  const d = data as Partial<SaveData>;
  if (typeof d.version !== 'number') return false;
  if (d.version < 1 || d.version > CURRENT_SAVE_VERSION) return false;
  if (typeof d.timestamp !== 'number') return false;
  if (d.mode !== 'INVESTIGATION' && d.mode !== 'TRIAL') return false;
  if (typeof d.health !== 'number' || d.health < 0) return false;
  if (!Array.isArray(d.inventory)) return false;
  if (!d.flags || typeof d.flags !== 'object') return false;
  if (d.unlockedLocations !== undefined && !Array.isArray(d.unlockedLocations)) return false;
  if (d.language !== 'es' && d.language !== 'en') return false;
  if (!validTestimonyIndex(d.trial?.testimonyIndex)) return false;
  return true;
}

function validTestimonyIndex(index: number | null | undefined): boolean {
  if (index === undefined || index === null) return true;
  return Number.isInteger(index) && index >= 0;
}
