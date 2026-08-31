// @Architecture(descriptionShort="Catalog of 8 procedural multitrack 16-bit MIDI compositions", type="catalog", icon="music")
/**
 * Procedural MIDI Soundtrack Definitions
 * Compositions for [[./MidiMusicComposer.ts]] aggregated from [[./tracks/]].
 */

import type { TrackCatalogMap } from '../../types/index.js';
import { crossExamAllegroTrack, crossExamModeratoTrack, trialTrack } from './tracks/CourtroomTracks.js';
import { objectionTrack, pursuitTrack } from './tracks/TurnaroundTracks.js';
import { investigationTrack, suspenseTrack, victoryTrack, detentionCenterTrack } from './tracks/AtmosphereTracks.js';
import {
  callejonPostalTrack,
  casaClotildeTrack,
  investigationCoreTrack,
  restauranteTrack
} from './tracks/InvestigationTracks.js';
import { crossExamPrestoTrack, kermesTrack } from './tracks/Case3Tracks.js';

export const TRACK_CATALOG: TrackCatalogMap = {
  // @Section(Courtroom & Cross-Examination Tracks)
  trial: trialTrack,
  cross_exam_moderato: crossExamModeratoTrack,
  cross_exam_allegro: crossExamAllegroTrack,
  cross_exam_presto: crossExamPrestoTrack,

  // @Section(Objection & Pursuit Turnaround Tracks)
  objection: objectionTrack,
  pursuit: pursuitTrack,

  // @Section(Atmosphere & Celebration Tracks)
  investigation: investigationTrack,
  investigation_core: investigationCoreTrack,
  restaurante: restauranteTrack,
  callejon_postal: callejonPostalTrack,
  casa_clotilde: casaClotildeTrack,
  suspense: suspenseTrack,
  victory: victoryTrack,
  detention_center: detentionCenterTrack,
  kermes: kermesTrack
};
