// @Architecture(descriptionShort="Type schemas for dialogue lines, scenes, and testimonies", type="types", icon="cube")
/**
 * Narrative & Case Scripting Type Definitions
 * Used by [[src/case/index.ts]], [[src/engine/Private/GameEngine.ts]], and [[src/engine/Private/TrialController.ts]].
 */

import type { SFXName, TrackName } from './audio.js';
import type { EvidenceId } from './evidence.js';
import type { ProfileId } from './profile.js';
import type { CaseId, GameFlags, LocationId } from './state.js';

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
  | 'ALMA NEGRA'
  | 'JIRAFALES'
  | 'NARRADOR'
  | 'MODO EXAMINAR'
  | 'BERRONDO'
  | 'SECRETARIO'
  | 'ALGUACIL'
  | 'CUSTODIO'
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
  | 'chapulin_idle'
  | 'donramon_idle'
  | 'donramon_slam'
  | 'donramon_shock'
  | 'donramon_point'
  | 'donramon_sweat'
  | 'donramon_panic'
  | 'supersam_idle'
  | 'supersam_slam'
  | 'supersam_case1_slam'
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
  | 'chapatin_idle'
  | 'chapatin_enojado'
  | 'chapatin_bolsa'
  | 'chapatin_sweat'
  | 'chapatin_conmovido'
  | 'pazguato_idle'
  | 'pazguato_saludo'
  | 'pazguato_sweat'
  | 'pazguato_decidido'
  | 'aniceto_idle'
  | 'aniceto_thinking'
  | 'aniceto_sweat'
  | 'aniceto_panic'
  | 'aniceto_breakdown'
  | 'barriga_idle'
  | 'barriga_vendado'
  | 'barriga_shock'
  | 'barriga_enojado'
  | 'barriga_sorpresa'
  | 'barriga_reclamo'
  | 'barriga_confundido'
  | 'barriga_aliviado'
  | 'nono_idle'
  | 'nono_nervioso'
  | 'nono_llorando'
  | 'chimoltrufia_idle'
  | 'chimoltrufia_confundida'
  | 'chimoltrufia_shock'
  | 'botija_idle'
  | 'botija_nervioso'
  | 'botija_llorando'
  | 'botija_aliviado'
  | 'cecilio_idle'
  | 'cecilio_ciego'
  | 'cecilio_escandalo'
  | 'cecilio_shock'
  | 'maruja_idle'
  | 'maruja_coqueta'
  | 'maruja_abanico'
  | 'maruja_nerviosa'
  | 'maruja_shock'
  | 'toribio_idle'
  | 'toribio_nervioso'
  | 'toribio_llorando'
  | 'toribio_aliviado'
  | 'casimiro_amable'
  | 'casimiro_catalogo'
  | 'casimiro_sweat'
  | 'casimiro_panic'
  | 'casimiro_breakdown'
  | 'berrondo_idle'
  | 'berrondo_definicion'
  | 'berrondo_sweat'
  | 'berrondo_catalogo'
  | 'berrondo_panic'
  | 'berrondo_breakdown'
  | 'rufino_smug'
  | 'rufino_monocle'
  | 'rufino_sweat'
  | 'rufino_panic'
  | 'rufino_breakdown'
  | 'almanegra_vendado'
  | 'almanegra_shock'
  | 'almanegra_sweat'
  | 'almanegra_inconsciente'
  | 'berrondo_idle'
  | 'berrondo_definicion'
  | 'berrondo_sweat'
  | 'berrondo_panic'
  | 'berrondo_breakdown'
  | 'nicanor_idle'
  | 'nicanor_escoba'
  | 'nicanor_sweat'
  | 'genoveva_idle'
  | 'genoveva_reglamento'
  | 'genoveva_sweat'
  | 'genoveva_shock'
  | 'secretario_leyendo'
  | 'secretario_leyendo_senala'
  | 'secretario_leyendo_pagina'
  | 'secretario_leyendo_mira'
  | null;

export type CutinName =
  | 'objection_protesto'
  | 'objection_un_momento'
  | 'objection_toma_eso'
  | 'objection_culpable'
  | 'objection_inocente';

export type FurnitureType = 'podium' | 'bench' | 'none';

export interface DialogueLine {
  speaker?: SpeakerName;
  text: string;
  /** Render this UI instruction immediately without typewriter audio. */
  instant?: boolean;
  /** Trigger the celebration effect when this line is displayed. */
  confetti?: boolean;
  pose?: PoseName;
  bg?: string;
  bgm?: TrackName;
  sfx?: SFXName;
  cutin?: CutinName;
  addEvidence?: EvidenceId;
  updateEvidence?: EvidenceId;
  addProfile?: ProfileId;
  updateProfile?: ProfileId;
  unlockLocation?: LocationId;
  furniture?: FurnitureType;
}

// @Section(Investigation Schema)
export interface Hotspot {
  id: string;
  label: string;
  /** Hidden until this predicate passes; used to chain scene progression. */
  condition?: (flags: GameFlags) => boolean;
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
  /** Talk topic id that must be played before this option is visible. */
  unlockedByTalk?: string;
  /** Hotspot id that must be examined before this option is visible. */
  unlockedByHotspot?: string;
  /** Optional custom condition predicate. */
  condition?: (flags: GameFlags) => boolean;
}

export interface SceneIntro {
  id: string;
  condition?: (flags: GameFlags) => boolean;
  dialogue: DialogueLine[];
  idlePose?: PoseName | null;
}

export type SceneIntroDefinition = DialogueLine[] | SceneIntro[];

export interface InvestigationScene {
  title: string;
  name?: string;
  bg: string;
  bgm: TrackName;
  speaker: SpeakerName;
  idlePose?: PoseName | null;
  intro: SceneIntroDefinition;
  hotspots: Hotspot[];
  talkOptions: TalkOption[];
}

// @Section(Trial & Testimony Schema)
export interface PointZone {
  id: string;
  bounds: [number, number, number, number];
  isCorrect: boolean;
  failureDialogue: DialogueLine[];
}

export interface PointTargetContradiction {
  id?: string;
  targetEvidenceId: EvidenceId;
  promptQuestion: string;
  imageAsset?: string;
  zones: PointZone[];
  successDialogue?: DialogueLine[];
  next?: PointTargetContradiction;
}

export interface ContradictionFollowUp {
  evidence?: EvidenceId[];
  /** Replaces `evidence` when the court demands a person instead of an exhibit. */
  profileTarget?: ProfileId[];
  successDialogue: DialogueLine[];
  pointTarget?: PointTargetContradiction;
  prompt?: string;
}

export interface ContradictionRule {
  evidence?: EvidenceId[];
  /** Replaces `evidence` when the court demands a person instead of an exhibit. */
  profileTarget?: ProfileId[];
  successDialogue: DialogueLine[];
  pointTarget?: PointTargetContradiction;
  /** Evidence that must be opened in the Acta before it can be presented. */
  requiresExamine?: EvidenceId;
  followUp?: ContradictionFollowUp;
}

export interface OpeningPresent {
  evidence?: EvidenceId[];
  /** Replaces `evidence` when the court demands a person instead of an exhibit. */
  profileTarget?: ProfileId[];
  successDialogue: DialogueLine[];
  prompt?: string;
}

/**
 * A plausible but premature present: the evidence really does bear on the
 * statement, just not yet. The court answers and the player keeps their health.
 * Hangs off the statement, not off `ContradictionRule`: a statement with no
 * contradiction of its own can still deflect.
 */
export interface DeflectRule {
  evidence: EvidenceId[];
  dialogue: DialogueLine[];
}

export interface EvidenceDeflect {
  evidence: EvidenceId[];
  dialogue: DialogueLine[];
}

export interface Statement {
  id: string;
  speaker: SpeakerName;
  pose?: PoseName;
  text: string;
  pressText?: DialogueLine[];
  contradiction?: ContradictionRule;
  /** Presents answered by the court instead of a penalty. */
  deflect?: DeflectRule;
  /** Visible only after the statement with this id has been pressed. */
  unlockedBy?: string;
  /** Witness denial for these exhibits when they are not the resolving contradiction. */
  deflects?: EvidenceDeflect[];
}

export interface Testimony {
  title: string;
  witness: string;
  bgm: TrackName;
  statements: Statement[];
  /** Overrides the day's penalty prosecutor (Case 5 day 3 after recusal). */
  penaltyProsecutionSpeaker?: SpeakerName;
  penaltyProsecutionPose?: PoseName;
  /** Fallback deflects when the current statement has no matching entry. */
  deflects?: EvidenceDeflect[];
}

export interface ClimaxEpilogue {
  bg: string;
  dialogue: DialogueLine[];
}

export interface ClimaxStage {
  presentTarget?: EvidenceId[];
  /** Replaces `presentTarget` when the court demands a person instead of an exhibit. */
  profileTarget?: ProfileId[];
  /** Optional dialogue played upon presenting the correct exhibit, before pointing begins. */
  introDialogue?: DialogueLine[];
  /** Played when the player points at the wrong person or exhibit. */
  failDialogue?: DialogueLine[];
  successDialogue: DialogueLine[];
  /** Question shown on the HUD and Court Record while this stage awaits a present. */
  prompt?: string;
  /** Minimum evidence update stage required before an id is accepted at this stage. */
  requiredUpdateStage?: Partial<Record<EvidenceId, number>>;
  pointTarget?: PointTargetContradiction;
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
  /** Opens the shared choices after this zero-based stage instead of after the final stage. */
  choicesAfterStage?: number;
  epilogue?: ClimaxEpilogue;
  /** Health-0 guilty lines. When set, replaces the generic i18n game-over pair. */
  guiltyDialogue?: DialogueLine[];
}

export interface TrialScript {
  intro: DialogueLine[];
  testimonies: Testimony[];
  /** Legacy aliases retained for existing integrations and v1 saves. */
  testimony1?: Testimony;
  testimony2?: Testimony;
  climax: ClimaxDefinition;
  openingPresent?: OpeningPresent;
  /** Default Super Sam; Case 5 day 3 uses SECRETARIO after recusal. */
  penaltyProsecutionSpeaker?: SpeakerName;
  penaltyProsecutionPose?: PoseName;
}

export interface TrialDayScript {
  intro: DialogueLine[];
  testimonies: Testimony[];
  /** Legacy aliases retained for existing integrations and v1 saves. */
  testimony1?: Testimony;
  testimony2?: Testimony;
  openingPresent?: OpeningPresent;
  penaltyProsecutionSpeaker?: SpeakerName;
  penaltyProsecutionPose?: PoseName;
}

export interface AdjournmentDefinition {
  nextLocation: LocationId;
  unlockLocations: LocationId[];
  requiredEvidence: EvidenceId[];
  trial: TrialDayScript;
  next?: AdjournmentDefinition;
}

export interface CaseScript {
  id: CaseId;
  startLocation: LocationId;
  requiredEvidence: EvidenceId[];
  debugEvidence: EvidenceId[];
  debugProfiles?: ProfileId[];
  debugUnlockLocations: LocationId[];
  investigation: Record<string, InvestigationScene>;
  trial: TrialScript;
  adjournment?: AdjournmentDefinition;
  /** Penalty protesto pose; Cases 0–4 keep Don Ramón. */
  defensePointPose?: PoseName;
  defensePanicPose?: PoseName;
  /** Idle when DEFENSA/DON RAMON omit pose; VisualEffects still defaults Don Ramón. */
  defenseIdlePose?: PoseName;
  /** After two wrong presents with hidden lines; omit for Chapulín → Don Ramón. */
  pressHint?: DialogueLine[];
}
