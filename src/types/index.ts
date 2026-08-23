// @Architecture(descriptionShort="Public facade exporting all domain type definitions", type="facade", icon="cube")
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
  TrackDefinition,
  TrackCatalogMap
} from './Private/audio.js';

// @Section(Evidence Subsystem Types)
export type {
  EvidenceId,
  EvidenceItem,
  EvidenceCatalogMap
} from './Private/evidence.js';

// @Section(Game State Types)
export type {
  GameMode,
  LocationId,
  TrialPhase,
  GameFlags
} from './Private/state.js';

// @Section(Narrative & Script Types)
export type {
  SpeakerName,
  PoseName,
  CutinName,
  DialogueLine,
  Hotspot,
  TalkOption,
  InvestigationScene,
  ContradictionRule,
  Statement,
  Testimony,
  ClimaxDefinition,
  TrialScript,
  CaseScript
} from './Private/script.js';
