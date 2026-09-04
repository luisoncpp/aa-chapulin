// @Architecture(descriptionShort="Type schemas for game modes, locations, and progression flags", type="types", icon="cube")
/**
 * Game State & Progression Type Definitions
 * Consumed by [[src/state/Private/GameStateManager.ts]].
 */

// @Section(Mode & Location Enums)
export type Language = 'es' | 'en';

export type GameMode = 'INVESTIGATION' | 'TRIAL';

export type CaseId = 'case1' | 'case2' | 'case3' | 'case4';

export type TrialDay = 1 | 2 | 3;

export type LocationId = 'museum' | 'detention' | (string & {});

// @Section(Progression Flags)
export interface GameFlags {
  examined_pedestal?: boolean;
  examined_armor?: boolean;
  examined_vent?: boolean;
  examined_security_cam?: boolean;
  examined_treasure_chest?: boolean;
  examined_chapulin_spot?: boolean;
  examined_phone_spot?: boolean;
  examined_table_spot?: boolean;
  talked_florinda_crime?: boolean;
  talked_florinda_suspect?: boolean;
  presented_chiquitolina_florinda?: boolean;
  visited_detention?: boolean;
  talked_chapulin_reason?: boolean;
  talked_chapulin_antenitas?: boolean;
  ready_for_trial: boolean;
  completed_trial_day1?: boolean;
  [key: string]: boolean | undefined;
}

