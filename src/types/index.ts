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
  TrackCatalogMap
} from './Private/audio.js';

// @Section(Evidence Subsystem Types)
export type {
  EvidenceId,
  EvidenceCatalogMap
} from './Private/evidence.js';

// @Section(Game State Types)
export type {
  GameMode,
  LocationId,
  GameFlags
} from './Private/state.js';

// @Section(Narrative & Script Types)
export type {
  PoseName,
  CutinName,
  FurnitureType,
  DialogueLine,
  Hotspot,
  TalkOption,
  InvestigationScene,
  Testimony,
  ClimaxDefinition,
  CaseScript
} from './Private/script.js';

