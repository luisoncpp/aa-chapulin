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
  | 'investigation_core'
  | 'restaurante'
  | 'callejon_postal'
  | 'casa_clotilde'
  | 'suspense'
  | 'victory'
  | 'detention_center'
  | 'kermes'
  | 'cross_exam_presto';

export type InstrumentWaveType = 'sine' | 'square' | 'sawtooth' | 'triangle';

export type DrumHitType = 'K' | 'S' | 'H' | 'C' | 'O' | 'P' | '0' | string;
export type NoteEntry = number | number[];

export interface TrackDefinition {
  bpm: number;
  length: number;
  bass?: NoteEntry[];
  lead?: NoteEntry[];
  chords?: NoteEntry[];
  drums?: string[];
}

export type TrackCatalogMap = Record<TrackName, TrackDefinition>;

