export type WaveName = OscillatorType | 'pulse12' | 'pulse25' | 'organ';

export interface OscLayer {
  wave: WaveName;
  gain: number;
  detuneCents?: number;
  octave?: number;
}

export interface AdsrSpec {
  a: number;
  d: number;
  s: number;
  r: number;
}

export type AmpEnvelope = { kind: 'legacy' } | ({ kind: 'adsr' } & AdsrSpec);

export interface FilterEnvelope {
  type: BiquadFilterType;
  base: number;
  peak: number;
  attack: number;
  decay: number;
  q: number;
}

export interface FmSpec {
  ratio: number;
  index: number;
  indexDecaySec: number;
  tineRatio?: number;
  tineIndex?: number;
  tineDecaySec?: number;
}

export interface InstrumentPatch {
  layers: OscLayer[];
  amp: AmpEnvelope;
  filter?: FilterEnvelope;
  pitch?: { scoopCents: number; scoopSec: number };
  /** `frequencyHz` is the legacy lead: depth in Hz on `frequency`, not cents. */
  vibrato?: { rateHz: number; depthCents: number; delaySec: number; frequencyHz?: number };
  tremolo?: { rateHz: number; depth: number };
  transient?: { gain: number; filterFreq: number; sec: number };
  synthesis?: 'subtractive' | 'fm' | 'plucked';
  fm?: FmSpec;
  /** Karplus-Strong loop gain. */
  pluckDecay?: number;
  /** Held notes use no gap when set. */
  legato?: boolean;
  gain: number;
  pan: number;
  reverbSend: number;
  /** Fixed length in beats when the next step is not HOLD. */
  legacyLengthBeats?: number;
}
