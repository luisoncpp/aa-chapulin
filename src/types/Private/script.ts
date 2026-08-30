// @Architecture(descriptionShort="Type schemas for dialogue lines, scenes, and testimonies", type="types", icon="cube")
/**
 * Narrative & Case Scripting Type Definitions
 * Used by [[src/case/index.ts]], [[src/engine/Private/GameEngine.ts]], and [[src/engine/Private/TrialController.ts]].
 */

import type { SFXName, TrackName } from './audio.js';
import type { EvidenceId } from './evidence.js';
import type { CaseId, LocationId } from './state.js';

// @Section(Dialogue & Visual Tags)
export type SpeakerName =
  | 'DEFENSA'
  | 'DON RAMON'
  | 'DON RAMÓN'
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
  | 'donramon_idle'
  | 'donramon_slam'
  | 'donramon_point'
  | 'donramon_sweat'
  | 'donramon_panic'
  | 'supersam_idle'
  | 'supersam_slam'
  | 'supersam_point'
  | 'supersam_sweat'
  | 'supersam_breakdown'
  | 'tripaseca_smug'
  | 'tripaseca_sweat'
  | 'tripaseca_panic'
  | 'tripaseca_breakdown'
  | 'judge_neutral'
  | 'judge_gavel'
  | 'judge_thinking'
  | 'judge_shock'
  | 'chompiras_idle'
  | 'chompiras_nervous'
  | 'chompiras_crying'
  | 'chompiras_relieved'
  | 'peterete_smug'
  | 'peterete_thinking'
  | 'peterete_sweat'
  | 'peterete_panic'
  | 'peterete_breakdown'
  | 'jirafales_idle'
  | 'jirafales_smoking'
  | 'jirafales_angry'
  | 'jirafales_shock'
  | 'jaimito_idle'
  | 'jaimito_tired'
  | 'jaimito_proud'
  | 'clotilde_idle'
  | 'clotilde_flustered'
  | 'clotilde_mysterious'
  | null;

export type CutinName =
  | 'objection_protesto'
  | 'objection_un_momento'
  | 'objection_toma_eso'
  | 'objection_culpable';

export type FurnitureType = 'podium' | 'bench' | 'none';

export interface DialogueLine {
  speaker?: SpeakerName;
  text: string;
  pose?: PoseName;
  bg?: string;
  bgm?: TrackName;
  sfx?: SFXName;
  cutin?: CutinName;
  addEvidence?: EvidenceId;
  updateEvidence?: EvidenceId;
  unlockLocation?: LocationId;
  furniture?: FurnitureType;
}

// @Section(Investigation Schema)
export interface Hotspot {
  id: string;
  label: string;
  /** Percent of the 960×540 stage after background-size:cover. */
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
  name?: string;
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

export interface ClimaxEpilogue {
  bg: string;
  dialogue: DialogueLine[];
}

export interface ClimaxStage {
  presentTarget: EvidenceId[];
  successDialogue: DialogueLine[];
}

export interface ChoiceOption {
  id: string;
  label: string;
}

export interface ChoicePrompt {
  id: string;
  question: string;
  options: ChoiceOption[];
  correctId: string;
  successDialogue: DialogueLine[];
  failDialogue: DialogueLine[];
}

export interface ClimaxDefinition {
  dialogue: DialogueLine[];
  presentTarget: EvidenceId[];
  verdict: DialogueLine[];
  stages?: ClimaxStage[];
  choices?: ChoicePrompt[];
  epilogue?: ClimaxEpilogue;
}

export interface TrialScript {
  intro: DialogueLine[];
  testimony1: Testimony;
  testimony2: Testimony;
  climax: ClimaxDefinition;
}

export interface TrialDayScript {
  intro: DialogueLine[];
  testimony1: Testimony;
  testimony2: Testimony;
}

export interface AdjournmentDefinition {
  nextLocation: LocationId;
  unlockLocations: LocationId[];
  requiredEvidence: EvidenceId[];
  trial: TrialDayScript;
}

export interface CaseScript {
  id: CaseId;
  startLocation: LocationId;
  requiredEvidence: EvidenceId[];
  debugEvidence: EvidenceId[];
  debugUnlockLocations: LocationId[];
  investigation: Record<string, InvestigationScene>;
  trial: TrialScript;
  adjournment?: AdjournmentDefinition;
}
