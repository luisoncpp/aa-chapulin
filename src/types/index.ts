// @Architecture(descriptionShort="Public facade exporting domain type definitions", type="facade", icon="cube")
/**
 * Domain Types Public Interface
 * Re-exports type schemas from private modules for the whole application.
 */

// @Section(Audio Subsystem Types)
export type {
  SFXName,
  TrackName,
  InstrumentWaveType,
  DrumHitType,
  NoteEntry,
  TrackDefinition,
  TrackCatalogMap,
  SoundtrackEntry
} from './Private/audio.js';

// @Section(Evidence Subsystem Types)
export type {
  EvidenceId,
  EvidenceItem,
  EvidenceCatalogMap,
  EvidenceDetailedView,
  EvidenceExamineZone
} from './Private/evidence.js';

// @Section(Character Record Types)
export type { ProfileId, ProfileCatalogMap } from './Private/profile.js';
// fallow-ignore-next-line unused-type
export type { ProfileItem } from './Private/profile.js';

// @Section(Game State Types)
export type {
  Language,
  GameMode,
  CaseId,
  TrialDay,
  LocationId,
  GameFlags
} from './Private/state.js';

// @Section(Narrative & Script Types)
export type {
  SpeakerName,
  PoseName,
  CutinName,
  FurnitureType,
  DialogueLine,
  Hotspot,
  TalkOption,
  SceneIntro,
  InvestigationScene,
  Statement,
  Testimony,
  ClimaxEpilogue,
  ClimaxStage,
  ChoicePrompt,
  ClimaxDefinition,
  TrialDayScript,
  AdjournmentDefinition,
  CaseScript,
  PointZone,
  PointTargetContradiction,
  ContradictionFollowUp,
  ContradictionRule,
  OpeningPresent,
  EvidenceDeflect
} from './Private/script.js';
// fallow-ignore-next-line unused-type
export type { ChoiceOption } from './Private/script.js';

