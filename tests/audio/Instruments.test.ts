import { describe, expect, it } from 'vitest';
import { DRUM_SYMBOLS, patchById, playDrumHit, playInstrumentNote } from '../../src/audio/Private/Instruments/index.js';
import { renderStep } from '../../src/audio/Private/StepRenderer.js';
import { MusicBus } from '../../src/audio/Private/Mixer/index.js';
import type { InstrumentId, TrackDefinition } from '../../src/types/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';

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
});

function voiceTypes(track: TrackDefinition): string[] {
  const ctx = new FakeAudioContext();
  const bus = MusicBus.for(ctx as unknown as AudioContext, ctx.createGain());
  bus.open(/*fresh=*/ true);
  renderStep({ track, idx: 0, when: 0, ctx: ctx as unknown as AudioContext, bus });
  return ctx.oscillators.map((osc) => osc.type);
}
