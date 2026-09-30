import { describe, expect, it } from 'vitest';
import { MusicBus } from '../../src/audio/Private/Mixer/index.js';
import { renderStep } from '../../src/audio/Private/StepRenderer.js';
import { HOLD } from '../../src/audio/Private/tracks/Notation.js';
import type { InstrumentId, NoteEntry, TrackDefinition } from '../../src/types/index.js';
import { FakeAudioContext } from '../fakes/FakeAudioContext.js';

const BPM = 120;
const BEAT_SEC = 60 / BPM;

describe('StepRenderer', () => {
  it('holds a note longer than the same note with no hold, including across the loop point', () => {
    const plain = durationOf('orchestra_hit', [72, 0, 0, 0], 0);
    const held = durationOf('orchestra_hit', [72, HOLD, 0, 0], 0);
    const wrapped = durationOf('orchestra_hit', [HOLD, 0, 0, 72], 3);
    expect(held).toBeGreaterThan(plain);
    expect(wrapped).toBeGreaterThan(plain);
  });

  it('lets a lone piano note ring through the rests after it', () => {
    expect(durationOf('piano', [48, 0, 0, 0, 0, 0, 0, 0], 0)).toBeGreaterThan(BEAT_SEC);
  });

  it('cuts a ringing piano note when the channel plays its next note', () => {
    const lone = durationOf('piano', [48, 0, 0, 0, 0, 0, 0, 0], 0);
    const followed = durationOf('piano', [48, 0, 50, 0, 0, 0, 0, 0], 0);
    expect(followed).toBeLessThan(lone);
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

function durationOf(instrument: InstrumentId, lead: NoteEntry[], idx: number): number {
  const ctx = new FakeAudioContext();
  renderLead(ctx, { bpm: BPM, length: lead.length, lead, instruments: { lead: instrument } }, idx);
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
