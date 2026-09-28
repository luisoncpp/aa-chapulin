import type { InstrumentId } from '../../../../types/index.js';
import type { InstrumentPatch } from './InstrumentPatch.js';

const adsr = { kind: 'adsr' as const };

type KeyId = Extract<InstrumentId, 'piano' | 'epiano' | 'marimba' | 'organ' | 'nylon_guitar' | 'upright_bass'>;

export const KEY_PATCHES: Record<KeyId, InstrumentPatch> = {
  piano: {
    layers: [
      { wave: 'triangle', gain: 0.8 },
      { wave: 'sine', gain: 0.35, octave: 1 }
    ],
    amp: { ...adsr, a: 0.004, d: 0.18, s: 0.2, r: 0.12 },
    filter: { type: 'lowpass', base: 900, peak: 2800, attack: 0.004, decay: 0.2, q: 0.8 },
    transient: { gain: 0.2, filterFreq: 1800, sec: 0.03 },
    gain: 0.22,
    pan: 0.08,
    reverbSend: 0.12
  },
  epiano: {
    layers: [{ wave: 'sine', gain: 1 }],
    synthesis: 'fm',
    fm: { ratio: 1, index: 1.4, indexDecaySec: 0.35, tineRatio: 14, tineIndex: 2.2, tineDecaySec: 0.06 },
    amp: { ...adsr, a: 0.005, d: 0.25, s: 0.15, r: 0.18 },
    filter: { type: 'lowpass', base: 1400, peak: 1400, attack: 0, decay: 0, q: 0.6 },
    gain: 0.16,
    pan: 0.05,
    reverbSend: 0.1
  },
  marimba: {
    layers: [{ wave: 'sine', gain: 1 }],
    synthesis: 'fm',
    fm: { ratio: 4, index: 2.8, indexDecaySec: 0.09 },
    amp: { ...adsr, a: 0.002, d: 0.12, s: 0.05, r: 0.08 },
    gain: 0.2,
    pan: -0.08,
    reverbSend: 0.14
  },
  organ: {
    layers: [{ wave: 'organ', gain: 1 }],
    amp: { ...adsr, a: 0.02, d: 0.05, s: 0.85, r: 0.08 },
    filter: { type: 'lowpass', base: 2400, peak: 2400, attack: 0, decay: 0, q: 0.5 },
    legato: true,
    gain: 0.14,
    pan: -0.05,
    reverbSend: 0.12,
    legacyLengthBeats: 1.2
  },
  nylon_guitar: {
    layers: [{ wave: 'sine', gain: 1 }],
    synthesis: 'plucked',
    pluckDecay: 0.996,
    amp: { ...adsr, a: 0.002, d: 0.2, s: 0.25, r: 0.12 },
    transient: { gain: 0.08, filterFreq: 2500, sec: 0.015 },
    gain: 0.28,
    pan: 0.18,
    reverbSend: 0.1
  },
  upright_bass: {
    layers: [{ wave: 'sine', gain: 1 }],
    synthesis: 'plucked',
    pluckDecay: 0.984,
    amp: { ...adsr, a: 0.004, d: 0.12, s: 0.35, r: 0.06 },
    gain: 0.34,
    pan: -0.12,
    reverbSend: 0,
    legacyLengthBeats: 0.675
  }
};
