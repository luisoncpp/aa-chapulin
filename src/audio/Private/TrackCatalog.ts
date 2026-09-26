// @Architecture(descriptionShort="Catalog of procedural multitrack 16-bit MIDI compositions", type="catalog", icon="music")
/**
 * Procedural MIDI Soundtrack Definitions
 * Compositions for [[./MidiMusicComposer.ts]] aggregated from [[./tracks/]].
 */

import type { TrackCatalogMap } from '../../types/index.js';
import { crossExamAllegroTrack, crossExamModeratoTrack, trialTrack } from './tracks/CourtroomTracks.js';
import { objectionTrack, pursuitTrack } from './tracks/TurnaroundTracks.js';
import { truthTrack } from './tracks/TruthTracks.js';
import { investigationTrack, suspenseTrack, victoryTrack, detentionCenterTrack } from './tracks/AtmosphereTracks.js';
import {
  callejonPostalTrack,
  casaClotildeTrack,
  investigationCoreTrack,
  restauranteTrack
} from './tracks/InvestigationTracks.js';
import { crossExamPrestoTrack, kermesTrack } from './tracks/Case3Tracks.js';
import { archivoTrack, crossExamGraveTrack } from './tracks/Case5Tracks.js';
import { terrazaBarTrack } from './tracks/TerrazaBarTrack.js';
import { crossExamFinalTrack } from './tracks/FinalConfrontationTrack.js';
import { crossExamCareoTrack } from './tracks/CareoTrack.js';

export const TRACK_CATALOG: TrackCatalogMap = {
  // @Section(Courtroom & Cross-Examination Tracks)
  trial: trialTrack,
  cross_exam_moderato: crossExamModeratoTrack,
  cross_exam_allegro: crossExamAllegroTrack,
  cross_exam_presto: crossExamPrestoTrack,
  cross_exam_grave: crossExamGraveTrack,
  cross_exam_final: crossExamFinalTrack,
  cross_exam_careo: crossExamCareoTrack,

  // @Section(Objection & Pursuit Turnaround Tracks)
  objection: objectionTrack,
  pursuit: pursuitTrack,
  truth: truthTrack,

  // @Section(Atmosphere & Celebration Tracks)
  investigation: investigationTrack,
  investigation_core: investigationCoreTrack,
  restaurante: restauranteTrack,
  terraza_bar: terrazaBarTrack,
  callejon_postal: callejonPostalTrack,
  casa_clotilde: casaClotildeTrack,
  suspense: suspenseTrack,
  victory: victoryTrack,
  epilogue: victoryTrack,
  detention_center: detentionCenterTrack,
  game_over: detentionCenterTrack,
  kermes: kermesTrack,
  archivo: archivoTrack
};
