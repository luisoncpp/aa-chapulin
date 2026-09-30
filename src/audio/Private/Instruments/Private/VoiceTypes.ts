export interface NoteEvent {
  midi: number | number[];
  when: number;
  durationSec: number;
  gain: number;
}

export interface VoiceTarget {
  ctx: AudioContext;
  dry: AudioNode;
  reverb: AudioNode | null;
  watch: (node: AudioScheduledSourceNode, endAt: number) => void;
}

export function midiToFreq(midi: number): number {
  if (!midi || midi <= 0) return 0;
  return 440 * Math.pow(2, (midi - 69) / 12);
}

export function soundingNotes(midi: number | number[]): number[] {
  const list = Array.isArray(midi) ? midi : [midi];
  return list.filter((note) => note > 0);
}

/** One callback per sounding note, gain shared by sqrt(count). */
export function eachNote(event: NoteEvent, play: (note: NoteEvent & { midi: number }) => void): void {
  const notes = soundingNotes(event.midi);
  if (notes.length === 0) return;
  const share = event.gain / Math.sqrt(notes.length);
  for (const midi of notes) play({ ...event, midi, gain: share });
}

/**
 * Chrome keeps an automated BiquadFilter processing for its maximum tail time after its
 * input stops; at ~100 notes/s that piles up thousands of live filters. Cut them loose.
 */
export function releaseOnEnd(source: AudioScheduledSourceNode, chain: AudioNode[]): void {
  source.addEventListener('ended', /*disconnectChain*/ () => {
    for (const node of chain) node.disconnect();
  });
}

export function connectOut(target: VoiceTarget, node: AudioNode, send: number, when: number): void {
  node.connect(target.dry);
  if (send <= 0 || !target.reverb) return;
  const gain = target.ctx.createGain();
  gain.gain.setValueAtTime(send, when);
  node.connect(gain);
  gain.connect(target.reverb);
}
