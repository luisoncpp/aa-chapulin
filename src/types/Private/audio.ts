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
  | 'bell'
  | 'click'
  | 'text';

// @Section(Track & Sequencer Types)
export type TrackName =
  | 'trial'
  | 'cross_exam_moderato'
  | 'cross_exam_allegro'
  | 'objection'
  | 'pursuit'
  | 'truth'
  | 'deduccion_final'
  | 'deduccion_anticipacion'
  | 'investigation'
  | 'investigation_core'
  | 'restaurante'
  | 'terraza_bar'
  | 'callejon_postal'
  | 'casa_clotilde'
  | 'suspense'
  | 'victory'
  | 'epilogue'
  | 'detention_center'
  | 'game_over'
  | 'kermes'
  | 'cross_exam_presto'
  | 'archivo'
  | 'cross_exam_grave'
  | 'cross_exam_final'
  | 'cross_exam_careo';

/** A dialogue line's music cue: a track, or `silence` to stop the sequencer until the next cue. */
export type BgmCue = TrackName | 'silence';

export type InstrumentWaveType = 'sine' | 'square' | 'sawtooth' | 'triangle';

export type ChannelName = 'bass' | 'lead' | 'chords' | 'counter';

/** Synthesized timbre. `chip_*` are the original tracker voices. */
export type InstrumentId =
  | 'chip_bass'
  | 'chip_lead'
  | 'chip_pad'
  | 'pulse_lead_12'
  | 'pulse_lead_25'
  | 'piano'
  | 'epiano'
  | 'marimba'
  | 'nylon_guitar'
  | 'upright_bass'
  | 'brass'
  | 'mariachi_trumpet'
  | 'flute'
  | 'accordion'
  | 'organ'
  | 'string_pad'
  | 'orchestra_hit';

export type DrumHitType = 'K' | 'S' | 'H' | 'C' | 'O' | 'P' | '0' | string;
/**
 * `0` rests. `-1` (`HOLD` from `tracks/Notation.ts`) extends the previous note.
 * A positive number is a MIDI note. An array is a chord.
 */
export type NoteEntry = number | number[];

export interface TrackDefinition {
  bpm: number;
  length: number;
  bass?: NoteEntry[];
  lead?: NoteEntry[];
  chords?: NoteEntry[];
  counter?: NoteEntry[];
  drums?: string[];
  instruments?: Partial<Record<ChannelName, InstrumentId>>;
  /** Per-step gain multipliers, `0..1`, aligned with that channel's note array. */
  accents?: Partial<Record<ChannelName, number[]>>;
  /** 0..1 share of the whole mix sent to the reverb, added to each patch's own send. */
  reverb?: number;
}

export type TrackCatalogMap = Record<TrackName, TrackDefinition>;

export interface SoundtrackEntry {
  id: TrackName;
  bpm: number;
  length: number;
  durationMs: number;
}

