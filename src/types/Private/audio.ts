/**
 * Audio Subsystem Type Definitions
 */

export type SFXName =
  | 'gavel'
  | 'desk_slam'
  | 'whoosh'
  | 'realization'
  | 'damage'
  | 'chipote'
  | 'chicharra'
  | 'text';

export type TrackName =
  | 'trial'
  | 'cross_exam_moderato'
  | 'cross_exam_allegro'
  | 'objection'
  | 'pursuit'
  | 'investigation'
  | 'suspense'
  | 'victory';

export type InstrumentWaveType = 'sine' | 'square' | 'sawtooth' | 'triangle';

export type DrumHitType = 'K' | 'S' | 'H' | '0';

export interface TrackDefinition {
  bpm: number;
  length: number;
  bass?: number[];
  lead?: number[];
  chords?: number[];
  drums?: DrumHitType[];
}

export type TrackCatalogMap = Record<TrackName, TrackDefinition>;
