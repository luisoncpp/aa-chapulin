// @Architecture(descriptionShort="Catalog of 8 procedural multitrack 16-bit MIDI compositions", type="catalog", icon="music")
/**
 * Procedural MIDI Soundtrack Definitions
 * Compositions for [[./MidiMusicComposer.ts]] aggregated from [[./tracks/]].
 */

import type { TrackCatalogMap } from '../../types/index.js';
import { crossExamAllegroTrack, crossExamModeratoTrack, trialTrack } from './tracks/CourtroomTracks.js';
import { objectionTrack, pursuitTrack } from './tracks/TurnaroundTracks.js';
import { investigationTrack, suspenseTrack, victoryTrack, detentionCenterTrack } from './tracks/AtmosphereTracks.js';

export const TRACK_CATALOG: TrackCatalogMap = {
  // @Section(Courtroom & Cross-Examination Tracks)
  trial: trialTrack,
  cross_exam_moderato: crossExamModeratoTrack,
  cross_exam_allegro: crossExamAllegroTrack,

  // @Section(Objection & Pursuit Turnaround Tracks)
  objection: objectionTrack,
  pursuit: pursuitTrack,

  // @Section(Atmosphere & Celebration Tracks)
  investigation: investigationTrack,
  suspense: suspenseTrack,
  victory: victoryTrack,
  detention_center: detentionCenterTrack
};
