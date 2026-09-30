import { describe, expect, it } from 'vitest';
import { DRUM_SYMBOLS, midiToFreq, patchById, playDrumHit, playInstrumentNote } from '../../src/audio/Private/Instruments/index.js';
import { renderStep } from '../../src/audio/Private/StepRenderer.js';
import { MusicBus } from '../../src/audio/Private/Mixer/index.js';
import type { InstrumentId, TrackDefinition } from '../../src/types/index.js';
import { FakeAudioContext, type FakeOscillatorNode, type FakePeriodicWave } from '../fakes/FakeAudioContext.js';

const QUARTER_TONE_CENTS = 50;
const BUILT_IN_SQUARE_SWING = 2;

const IDS: InstrumentId[] = [
  'chip_bass', 'chip_lead', 'chip_pad', 'pulse_lead_12', 'pulse_lead_25',
  'piano', 'epiano', 'marimba', 'nylon_guitar', 'upright_bass', 'brass',
  'mariachi_trumpet', 'flute', 'accordion', 'organ', 'string_pad', 'orchestra_hit'
];

function targetOf(ctx: FakeAudioContext) {
  return {
    ctx: ctx as unknown as AudioContext,
    dry: ctx.createGain(),
    reverb: null,
    watch: () => undefined
  };
}

describe('Instruments', () => {
  it('renders every patch and drum symbol', () => {
    const ctx = new FakeAudioContext();
    const target = targetOf(ctx);
    for (const id of IDS) {
      const event = { midi: 60, when: 0, durationSec: 0.2, gain: 1 };
      expect(() => playInstrumentNote(target, patchById(id), event)).not.toThrow();
      expect(() => playInstrumentNote(target, patchById(id), { ...event, midi: [60, 64, 67] })).not.toThrow();
    }
    for (const symbol of DRUM_SYMBOLS) {
      if (symbol === '0') continue;
      expect(() => playDrumHit(target, symbol, 0)).not.toThrow();
    }
  });

  it('builds the same lead voice when defaults are named and when they are omitted', () => {
    const unnamed = voiceTypes({ bpm: 120, length: 1, lead: [72] });
    const named = voiceTypes({
      bpm: 120,
      length: 1,
      lead: [72],
      instruments: { lead: 'chip_lead' }
    });
    expect(named).toEqual(unnamed);
    expect(unnamed).toContain('square');
  });

  it('stacks one oscillator per unison layer', () => {
    const ctx = new FakeAudioContext();
    const before = ctx.oscillators.length;
    playInstrumentNote(targetOf(ctx), patchById('string_pad'), { midi: 60, when: 0, durationSec: 0.3, gain: 1 });
    expect(ctx.oscillators.length - before).toBe(patchById('string_pad').layers.length);
  });

  it('never bends into a note by a quarter tone or more', () => {
    for (const id of IDS) {
      const ctx = playNote(id, 60);
      for (const osc of ctx.oscillators) {
        const cents = osc.detune.events.map((event) => event.value);
        if (cents.length === 0) continue;
        expect(Math.max(...cents) - Math.min(...cents), id).toBeLessThan(QUARTER_TONE_CENTS);
      }
    }
  });

  it('keeps held brass brighter than the cutoff it starts from', () => {
    for (const id of ['brass', 'mariachi_trumpet'] as InstrumentId[]) {
      const cutoff = playNote(id, 60).filters[0].frequency.events.map((event) => event.value);
      expect(cutoff[cutoff.length - 1], id).toBeGreaterThan(cutoff[0]);
    }
  });

  it('keeps vibrato under a quarter tone on low notes', () => {
    const low = 43;
    for (const id of IDS.filter((patch) => patchById(patch).vibrato)) {
      const ctx = playNote(id, low);
      expect(vibratoCents(ctx, midiToFreq(low)), id).toBeLessThan(QUARTER_TONE_CENTS);
    }
  });

  it('swings the pulse leads as wide as the built-in square', () => {
    for (const id of ['pulse_lead_12', 'pulse_lead_25'] as InstrumentId[]) {
      const wave = playNote(id, 60).oscillators.find((osc) => osc.periodicWave)!.periodicWave!;
      expect(peakToPeak(wave), id).toBeGreaterThan(BUILT_IN_SQUARE_SWING * 0.9);
    }
  });
});

function playNote(id: InstrumentId, midi: number): FakeAudioContext {
  const ctx = new FakeAudioContext();
  playInstrumentNote(targetOf(ctx), patchById(id), { midi, when: 0, durationSec: 0.6, gain: 1 });
  return ctx;
}

function vibratoCents(ctx: FakeAudioContext, freq: number): number {
  const voices = ctx.oscillators.filter((osc) => osc.frequency.events[0]?.value >= freq);
  const worst = voices.map((osc) => Math.max(detuneDepth(ctx, osc), hertzDepthCents(ctx, osc, freq)));
  return Math.max(...worst);
}

function detuneDepth(ctx: FakeAudioContext, osc: FakeOscillatorNode): number {
  return maxDepth(ctx, osc.detune);
}

function hertzDepthCents(ctx: FakeAudioContext, osc: FakeOscillatorNode, freq: number): number {
  return 1200 * Math.log2((freq + maxDepth(ctx, osc.frequency)) / freq);
}

function maxDepth(ctx: FakeAudioContext, param: unknown): number {
  const depths = ctx.gains.filter((gain) => gain.connections.includes(param));
  return Math.max(0, ...depths.flatMap((gain) => gain.gain.events.map((event) => Math.abs(event.value))));
}

function peakToPeak(wave: FakePeriodicWave): number {
  const samples = Array.from({ length: 1024 }, (_, i) => waveAt(wave, (2 * Math.PI * i) / 1024));
  return Math.max(...samples) - Math.min(...samples);
}

function waveAt(wave: FakePeriodicWave, phase: number): number {
  let sum = 0;
  for (let n = 1; n < wave.real.length; n++) sum += wave.real[n] * Math.cos(n * phase) + wave.imag[n] * Math.sin(n * phase);
  return sum;
}

function voiceTypes(track: TrackDefinition): string[] {
  const ctx = new FakeAudioContext();
  const bus = MusicBus.for(ctx as unknown as AudioContext, ctx.createGain());
  bus.open(/*fresh=*/ true);
  renderStep({ track, idx: 0, when: 0, ctx: ctx as unknown as AudioContext, bus });
  return ctx.oscillators.map((osc) => osc.type);
}
