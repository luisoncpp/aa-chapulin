/**
 * Domain Types Public Interface
 */

export type {
  SFXName,
  TrackName,
  InstrumentWaveType,
  DrumHitType,
  TrackDefinition,
  TrackCatalogMap
} from './Private/audio.js';

export type {
  EvidenceId,
  EvidenceItem,
  EvidenceCatalogMap
} from './Private/evidence.js';

export type {
  GameMode,
  LocationId,
  TrialPhase,
  GameFlags
} from './Private/state.js';

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
