import type { ChannelName, InstrumentId } from '../../../../types/index.js';
import type { FilterEnvelope, InstrumentPatch } from './InstrumentPatch.js';
import { KEY_PATCHES } from './PatchLibraryKeys.js';
import { WIND_PATCHES } from './PatchLibraryWinds.js';

const legacy = { kind: 'legacy' as const };

function lowpass(base: number, peak = base, attack = 0, decay = 0): FilterEnvelope {
  return { type: 'lowpass', base, peak, attack, decay, q: 0.7 };
}

const CHIP: Record<'chip_bass' | 'chip_lead' | 'chip_pad' | 'pulse_lead_12' | 'pulse_lead_25', InstrumentPatch> = {
  chip_bass: {
    layers: [{ wave: 'triangle', gain: 1 }],
    amp: legacy,
    filter: lowpass(900),
    gain: 0.35,
    pan: 0,
    reverbSend: 0,
    legacyLengthBeats: 0.675
  },
  chip_lead: {
    layers: [{ wave: 'square', gain: 1 }],
    amp: legacy,
    filter: lowpass(3600),
    vibrato: { rateHz: 5.5, depthCents: 0, delaySec: 0.08, frequencyHz: 6 },
    gain: 0.22,
    pan: 0,
    reverbSend: 0,
    legacyLengthBeats: 0.81
  },
  chip_pad: {
    layers: [{ wave: 'sawtooth', gain: 1 }],
    amp: legacy,
    filter: lowpass(2200),
    gain: 0.16,
    pan: 0,
    reverbSend: 0,
    legacyLengthBeats: 0.54
  },
  pulse_lead_12: pulse('pulse12'),
  pulse_lead_25: pulse('pulse25')
};

function pulse(wave: 'pulse12' | 'pulse25'): InstrumentPatch {
  return {
    layers: [{ wave, gain: 1 }],
    amp: legacy,
    filter: lowpass(3200),
    vibrato: { rateHz: 5.5, depthCents: 8, delaySec: 0.06 },
    gain: 0.2,
    pan: 0.12,
    reverbSend: 0.05,
    legacyLengthBeats: 0.81
  };
}

export const DEFAULT_INSTRUMENTS: Record<ChannelName, InstrumentId> = {
  bass: 'chip_bass',
  lead: 'chip_lead',
  chords: 'chip_pad',
  counter: 'chip_lead'
};

export const PATCHES: Record<InstrumentId, InstrumentPatch> = {
  ...CHIP,
  ...KEY_PATCHES,
  ...WIND_PATCHES
};
