// @Architecture(descriptionShort="Type schemas for game modes, locations, and progression flags", type="types", icon="cube")
/**
 * Game State & Progression Type Definitions
 * Consumed by [[src/state/Private/GameStateManager.ts]].
 */

// @Section(Mode & Location Enums)
export type GameMode = 'INVESTIGATION' | 'TRIAL';

export type LocationId = 'museum' | 'detention';

// @Section(Progression Flags)
export interface GameFlags {
  examined_pedestal: boolean;
  examined_armor: boolean;
  examined_vent: boolean;
  talked_florinda_crime: boolean;
  talked_florinda_suspect: boolean;
  presented_chiquitolina_florinda: boolean;
  visited_detention: boolean;
  talked_chapulin_reason: boolean;
  talked_chapulin_antenitas: boolean;
  ready_for_trial: boolean;
}
