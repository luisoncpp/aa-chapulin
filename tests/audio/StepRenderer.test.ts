import { describe, expect, it } from 'vitest';
import { MusicBus } from '../../src/audio/Private/Mixer/index.js';
import { renderStep } from '../../src/audio/Private/StepRenderer.js';
import { HOLD } from '../../src/audio/Private/tracks/Notation.js';
import type { NoteEntry, TrackDefinition } from '../../src/types/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';

describe('StepRenderer', () => {
  it('holds a note longer than the same note with no hold, including across the loop point', () => {
    const plain = durationOf([72, 0, 0, 0], 0);
    const held = durationOf([72, HOLD, 0, 0], 0);
    const wrapped = durationOf([HOLD, 0, 0, 72], 3);
    expect(held).toBeGreaterThan(plain);
    expect(wrapped).toBeGreaterThan(plain);
  });

  it('plays an accented step quieter than an unaccented one', () => {
    const full = peakGain({ bpm: 120, length: 1, lead: [72], instruments: { lead: 'piano' } });
    const accented = peakGain({
      bpm: 120,
      length: 1,
      lead: [72],
      instruments: { lead: 'piano' },
      accents: { lead: [0.4] }
    });
    expect(accented).toBeLessThan(full);
  });
});

function durationOf(lead: NoteEntry[], idx: number): number {
  const ctx = new FakeAudioContext();
  renderLead(ctx, { bpm: 120, length: lead.length, lead, instruments: { lead: 'piano' } }, idx);
  const osc = ctx.oscillators[0];
  return osc.stopTime - osc.startTime;
}

function peakGain(track: TrackDefinition): number {
  const ctx = new FakeAudioContext();
  renderLead(ctx, track, 0);
  const peaks = ctx.gains.flatMap((gain) => gain.gain.events.filter((event) => event.type === 'linearRamp').map((event) => event.value));
  return Math.max(...peaks);
}

function renderLead(ctx: FakeAudioContext, track: TrackDefinition, idx: number): void {
  const bus = MusicBus.for(ctx as unknown as AudioContext, ctx.createGain());
  bus.open(/*fresh=*/ true);
  renderStep({ track, idx, when: 0, ctx: ctx as unknown as AudioContext, bus });
}
