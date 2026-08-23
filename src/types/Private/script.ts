// @Architecture(descriptionShort="Type schemas for dialogue lines, scenes, and testimonies", type="types", icon="cube")
/**
 * Narrative & Case Scripting Type Definitions
 * Used by [[src/case/index.ts]], [[src/engine/Private/GameEngine.ts]], and [[src/engine/Private/TrialController.ts]].
 */

import type { SFXName, TrackName } from './audio.js';
import type { EvidenceId } from './evidence.js';
import type { LocationId } from './state.js';

// @Section(Dialogue & Visual Tags)
export type SpeakerName =
  | 'DEFENSA'
  | 'CHAPULÍN'
  | 'CHAPULIN'
  | 'SUPER SAM'
  | 'JUEZ'
  | 'TRIPASECA'
  | 'FLORINDA'
  | 'NARRADOR'
  | 'MODO EXAMINAR'
  | string;

export type PoseName =
  | 'florinda_angry'
  | 'florinda_idle'
  | 'florinda_shock'
  | 'florinda_crying'
  | 'florinda_fanning'
  | 'chapulin_idle'
  | 'chapulin_panic'
  | 'chapulin_point'
  | 'chapulin_slam'
  | 'supersam_idle'
  | 'supersam_slam'
  | 'supersam_point'
  | 'supersam_breakdown'
  | 'tripaseca_smug'
  | 'tripaseca_sweat'
  | 'tripaseca_panic'
  | 'tripaseca_breakdown'
  | 'judge_neutral'
  | 'judge_gavel'
  | 'judge_thinking'
  | 'judge_shock'
  | null;

export type CutinName =
  | 'objection_protesto'
  | 'objection_un_momento'
  | 'objection_toma_eso'
  | 'objection_culpable';

export interface DialogueLine {
  speaker?: SpeakerName;
  text: string;
  pose?: PoseName;
  bg?: string;
  bgm?: TrackName;
  sfx?: SFXName;
  cutin?: CutinName;
  addEvidence?: EvidenceId;
}

// @Section(Investigation Schema)
export interface Hotspot {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  dialogue: DialogueLine[];
}

export interface TalkOption {
  id: string;
  label: string;
  dialogue: DialogueLine[];
}

export interface InvestigationScene {
  title: string;
  bg: string;
  bgm: TrackName;
  speaker: SpeakerName;
  intro: DialogueLine[];
  hotspots: Hotspot[];
  talkOptions: TalkOption[];
}

// @Section(Trial & Testimony Schema)
export interface ContradictionRule {
  evidence: EvidenceId[];
  successDialogue: DialogueLine[];
}

export interface Statement {
  id: string;
  speaker: SpeakerName;
  pose?: PoseName;
  text: string;
  pressText?: DialogueLine[];
  contradiction?: ContradictionRule;
}

export interface Testimony {
  title: string;
  witness: string;
  bgm: TrackName;
  statements: Statement[];
}

export interface ClimaxDefinition {
  dialogue: DialogueLine[];
  presentTarget: EvidenceId[];
  verdict: DialogueLine[];
}

export interface TrialScript {
  intro: DialogueLine[];
  testimony1: Testimony;
  testimony2: Testimony;
  climax: ClimaxDefinition;
}

export interface CaseScript {
  investigation: Record<LocationId, InvestigationScene>;
  trial: TrialScript;
}
