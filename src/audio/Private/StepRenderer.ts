import type { ChannelName, NoteEntry, TrackDefinition } from '../../types/index.js';
import { playDrumHit, playInstrumentNote, resolvePatch } from './Instruments/index.js';
import type { VoiceTarget } from './Instruments/index.js';
import type { MusicBus, StripName } from './Mixer/index.js';
import { HOLD } from './tracks/Notation.js';

const CHANNELS: ChannelName[] = ['bass', 'lead', 'chords', 'counter'];

export interface RenderStep {
  track: TrackDefinition;
  idx: number;
  when: number;
  ctx: AudioContext;
  bus: MusicBus;
}

export function renderStep(step: RenderStep): void {
  for (const channel of CHANNELS) playChannel(step, channel);
  const drums = step.track.drums?.[step.idx];
  if (drums) playDrumHit(voiceTarget(step, 'drums'), drums, step.when);
}

// fallow-ignore-next-line complexity
function playChannel(step: RenderStep, channel: ChannelName): void {
  const entry = step.track[channel]?.[step.idx];
  if (!isSounding(entry) || !step.bus.admits(channel)) return;
  const patch = resolvePatch(step.track, channel);
  step.bus.setPan(channel, patch.pan);
  playInstrumentNote(voiceTarget(step, channel), patch, {
    midi: entry,
    when: step.when,
    durationSec: noteLength({
      track: step.track,
      channel,
      idx: step.idx,
      legacyBeats: patch.legacyLengthBeats,
      legato: patch.legato
    }),
    gain: step.track.accents?.[channel]?.[step.idx] ?? 1
  });
}

function isSounding(entry: NoteEntry | undefined): entry is NoteEntry {
  if (entry === undefined || entry === 0 || entry === HOLD) return false;
  return true;
}

function noteLength(spec: {
  track: TrackDefinition;
  channel: ChannelName;
  idx: number;
  legacyBeats?: number;
  legato?: boolean;
}): number {
  const stepSec = 60 / Math.max(spec.track.bpm, 1) / 4;
  const holds = followingHolds(spec.track[spec.channel], spec.idx);
  if (holds > 0) return (holds + 1) * stepSec * (spec.legato ? 1 : 0.9);
  if (spec.legacyBeats) return (spec.legacyBeats * 60) / Math.max(spec.track.bpm, 1);
  return stepSec;
}

// fallow-ignore-next-line complexity
function followingHolds(notes: NoteEntry[] | undefined, idx: number): number {
  if (!notes || notes.length === 0) return 0;
  let count = 0;
  for (let step = 1; step < notes.length; step++) {
    if (notes[(idx + step) % notes.length] !== HOLD) break;
    count++;
  }
  return count;
}

function voiceTarget(step: RenderStep, strip: StripName): VoiceTarget {
  return {
    ctx: step.ctx,
    dry: step.bus.strip(strip),
    reverb: step.bus.reverbInput(),
    watch: (node) => step.bus.watch(node)
  };
}
