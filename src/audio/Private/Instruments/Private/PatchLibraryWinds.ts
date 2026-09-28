import type { InstrumentId } from '../../../../types/index.js';
import type { InstrumentPatch } from './InstrumentPatch.js';

const adsr = { kind: 'adsr' as const };
const unison = 1 / Math.sqrt(2);
const pad = 1 / Math.sqrt(3);

type WindId = Extract<InstrumentId, 'brass' | 'mariachi_trumpet' | 'flute' | 'accordion' | 'string_pad' | 'orchestra_hit'>;

export const WIND_PATCHES: Record<WindId, InstrumentPatch> = {
  brass: {
    layers: [
      { wave: 'sawtooth', gain: unison, detuneCents: -8 },
      { wave: 'sawtooth', gain: unison, detuneCents: 8 }
    ],
    amp: { ...adsr, a: 0.04, d: 0.08, s: 0.7, r: 0.08 },
    filter: { type: 'lowpass', base: 400, peak: 2200, attack: 0.06, decay: 0.15, q: 0.8 },
    pitch: { scoopCents: 180, scoopSec: 0.07 },
    gain: 0.13,
    pan: 0.15,
    reverbSend: 0.08,
    legacyLengthBeats: 0.81
  },
  mariachi_trumpet: {
    layers: [{ wave: 'square', gain: 1 }],
    amp: { ...adsr, a: 0.03, d: 0.07, s: 0.65, r: 0.07 },
    filter: { type: 'lowpass', base: 700, peak: 3200, attack: 0.05, decay: 0.12, q: 0.9 },
    pitch: { scoopCents: 280, scoopSec: 0.06 },
    vibrato: { rateHz: 5.2, depthCents: 18, delaySec: 0.12 },
    gain: 0.16,
    pan: 0.22,
    reverbSend: 0.06,
    legacyLengthBeats: 0.81
  },
  flute: {
    layers: [{ wave: 'sine', gain: 1 }, { wave: 'triangle', gain: 0.15, octave: 1 }],
    amp: { ...adsr, a: 0.06, d: 0.08, s: 0.75, r: 0.1 },
    vibrato: { rateHz: 4.8, depthCents: 12, delaySec: 0.1 },
    transient: { gain: 0.06, filterFreq: 3200, sec: 0.04 },
    gain: 0.18,
    pan: 0.1,
    reverbSend: 0.16,
    legacyLengthBeats: 0.81
  },
  accordion: {
    layers: [
      { wave: 'pulse25', gain: unison, detuneCents: -12 },
      { wave: 'pulse25', gain: unison, detuneCents: 12 }
    ],
    amp: { ...adsr, a: 0.03, d: 0.06, s: 0.8, r: 0.08 },
    tremolo: { rateHz: 4.5, depth: 0.15 },
    filter: { type: 'lowpass', base: 1800, peak: 1800, attack: 0, decay: 0, q: 0.6 },
    gain: 0.12,
    pan: -0.1,
    reverbSend: 0.08,
    legacyLengthBeats: 0.81
  },
  string_pad: {
    layers: [
      { wave: 'sawtooth', gain: pad, detuneCents: -10 },
      { wave: 'sawtooth', gain: pad, detuneCents: 0 },
      { wave: 'sawtooth', gain: pad, detuneCents: 10 }
    ],
    amp: { ...adsr, a: 0.08, d: 0.12, s: 0.8, r: 0.2 },
    filter: { type: 'lowpass', base: 1600, peak: 1600, attack: 0, decay: 0, q: 0.5 },
    legato: true,
    gain: 0.1,
    pan: -0.2,
    reverbSend: 0.18,
    legacyLengthBeats: 1.2
  },
  orchestra_hit: {
    layers: [
      { wave: 'sawtooth', gain: 0.7 },
      { wave: 'square', gain: 0.3, octave: 1 }
    ],
    amp: { ...adsr, a: 0.005, d: 0.12, s: 0, r: 0.08 },
    filter: { type: 'lowpass', base: 600, peak: 3500, attack: 0.01, decay: 0.15, q: 1 },
    transient: { gain: 0.35, filterFreq: 1500, sec: 0.05 },
    gain: 0.22,
    pan: 0,
    reverbSend: 0.15
  }
};
