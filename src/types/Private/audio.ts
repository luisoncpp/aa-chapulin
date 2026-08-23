// @Architecture(descriptionShort="Type schemas for sound effects and MIDI track definitions", type="types", icon="cube")
/**
 * Audio Subsystem Type Definitions
 * Declares sound effect names and procedural MIDI tracker schemas for [[src/audio/index.ts]].
 */

// @Section(SFX Names)
export type SFXName =
  | 'gavel'
  | 'desk_slam'
  | 'whoosh'
  | 'realization'
  | 'damage'
  | 'chipote'
  | 'chicharra'
  | 'text';

// @Section(Track & Sequencer Types)
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
