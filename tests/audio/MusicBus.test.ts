import { describe, expect, it } from 'vitest';
import { MusicBus } from '../../src/audio/Private/Mixer/index.js';
import { renderStep } from '../../src/audio/Private/StepRenderer.js';
import { FakeAudioContext, FakeAudioNode, FakeConvolverNode } from '../fakes/FakeAudioContext.js';
import type { InstrumentId } from '../../src/types/index.js';

function reachesReverb(node: FakeAudioNode, seen = new Set<unknown>()): boolean {
  if (node instanceof FakeConvolverNode) return true;
  if (seen.has(node)) return false;
  seen.add(node);
  return node.connections.some((next) => next instanceof FakeAudioNode && reachesReverb(next, seen));
}

/** Whether a bass note played with `instrument` has a signal path into the reverb. */
function bassNoteReachesReverb(instrument: InstrumentId, trackReverb = 0): boolean {
  const ctx = new FakeAudioContext();
  const bus = MusicBus.for(ctx as unknown as AudioContext, ctx.createGain());
  bus.open(/*fresh=*/ true, trackReverb);
  renderStep({
    track: { bpm: 120, length: 1, bass: [48], instruments: { bass: instrument } },
    idx: 0,
    when: 0,
    ctx: ctx as unknown as AudioContext,
    bus
  });
  return ctx.oscillators.some((osc) => reachesReverb(osc));
}

describe('MusicBus', () => {
  it('sends only patches with a reverb send into the reverb', () => {
    expect(bassNoteReachesReverb('chip_bass')).toBe(false);
    expect(bassNoteReachesReverb('string_pad')).toBe(true);
  });

  it('sends a whole track into the reverb when the track sets its own reverb', () => {
    expect(bassNoteReachesReverb('chip_bass', /*trackReverb=*/ 0.5)).toBe(true);
  });

  it('fades a finished session so notes already scheduled go silent', () => {
    const ctx = new FakeAudioContext();
    const bus = MusicBus.for(ctx as unknown as AudioContext, ctx.createGain());
    bus.open(/*fresh=*/ true);
    bus.endSession();
    const faded = ctx.gains.some((gain) => gain.gain.events.some((event) => event.type === 'linearRamp' && event.value < 0.01));
    expect(faded).toBe(true);
  });

  it('keeps the bass when the voice cap drops chord notes', () => {
    const added = waveformsAfterFillingBus({ endAt: 10, when: 0 });
    expect(added).toContain('triangle');
    expect(added).not.toContain('sawtooth');
  });

  it('renders a piano chord through as many filters as a single note', () => {
    expect(filtersForChordStep([62, 65, 69, 72])).toBe(filtersForChordStep([62]));
  });

  it('frees voices at their scheduled stop time even when onended never arrives', () => {
    const added = waveformsAfterFillingBus({ endAt: 0.5, when: 1 });
    expect(added).toContain('sawtooth');
  });
});

/** Biquad filters created by one chord step on the piano, the heaviest per-note patch. */
function filtersForChordStep(chord: number[]): number {
  const ctx = new FakeAudioContext();
  const bus = MusicBus.for(ctx as unknown as AudioContext, ctx.createGain());
  bus.open(/*fresh=*/ true);
  const before = ctx.filters.length;
  renderStep({ track: { bpm: 164, length: 1, chords: [chord], instruments: { chords: 'piano' } }, idx: 0, when: 0, ctx: ctx as unknown as AudioContext, bus });
  return ctx.filters.length - before;
}

/** Fills the bus with voices stopping at `endAt`, then renders a bass + chord step at `when`. */
function waveformsAfterFillingBus(spec: { endAt: number; when: number }): OscillatorType[] {
  const ctx = new FakeAudioContext();
  const bus = MusicBus.for(ctx as unknown as AudioContext, ctx.createGain());
  bus.open(/*fresh=*/ true);
  for (let i = 0; i < 200; i++) bus.watch(ctx.createOscillator() as unknown as AudioScheduledSourceNode, spec.endAt);
  const before = ctx.oscillators.length;
  renderStep({
    track: { bpm: 120, length: 1, bass: [36], chords: [[60, 64, 67]], instruments: { bass: 'chip_bass', chords: 'chip_pad' } },
    idx: 0,
    when: spec.when,
    ctx: ctx as unknown as AudioContext,
    bus
  });
  return ctx.oscillators.slice(before).map((osc) => osc.type);
}
