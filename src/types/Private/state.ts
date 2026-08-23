/**
 * Game State & Progression Type Definitions
 */

import type { EvidenceId } from './evidence.js';

export type GameMode = 'INVESTIGATION' | 'TRIAL';

export type LocationId = 'museum' | 'detention';

export type TrialPhase = 'INTRO' | 'TESTIMONY_1' | 'TESTIMONY_2' | 'CLIMAX' | 'VERDICT';

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
