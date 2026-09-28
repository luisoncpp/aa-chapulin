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
function bassNoteReachesReverb(instrument: InstrumentId): boolean {
  const ctx = new FakeAudioContext();
  const bus = MusicBus.for(ctx as unknown as AudioContext, ctx.createGain());
  bus.open(/*fresh=*/ true);
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

  it('fades a finished session so notes already scheduled go silent', () => {
    const ctx = new FakeAudioContext();
    const bus = MusicBus.for(ctx as unknown as AudioContext, ctx.createGain());
    bus.open(/*fresh=*/ true);
    bus.endSession();
    const faded = ctx.gains.some((gain) => gain.gain.events.some((event) => event.type === 'linearRamp' && event.value < 0.01));
    expect(faded).toBe(true);
  });

  it('keeps the bass when the voice cap drops chord notes', () => {
    const ctx = new FakeAudioContext();
    const bus = MusicBus.for(ctx as unknown as AudioContext, ctx.createGain());
    bus.open(/*fresh=*/ true);
    for (let i = 0; i < 48; i++) bus.watch(ctx.createOscillator() as unknown as AudioScheduledSourceNode);
    const before = ctx.oscillators.length;
    renderStep({
      track: {
        bpm: 120,
        length: 1,
        bass: [36],
        chords: [[60, 64, 67]],
        instruments: { bass: 'chip_bass', chords: 'chip_pad' }
      },
      idx: 0,
      when: 0,
      ctx: ctx as unknown as AudioContext,
      bus
    });
    const added = ctx.oscillators.slice(before).map((osc) => osc.type);
    expect(added).toContain('triangle');
    expect(added).not.toContain('sawtooth');
  });
});
