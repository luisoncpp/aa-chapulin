const TAIL_SEC = 1.8;
const DECAY_SEC = 0.45;
const FADE_IN_SEC = 0.001;

const cache = new WeakMap<BaseAudioContext, AudioBuffer>();

export function reverbImpulse(ctx: BaseAudioContext): AudioBuffer {
  const cached = cache.get(ctx);
  if (cached) return cached;
  const length = Math.floor(ctx.sampleRate * TAIL_SEC);
  const buffer = ctx.createBuffer(2, length, ctx.sampleRate);
  for (let channel = 0; channel < 2; channel++) fillChannel(buffer, channel, ctx.sampleRate);
  cache.set(ctx, buffer);
  return buffer;
}

function fillChannel(buffer: AudioBuffer, channel: number, sampleRate: number): void {
  const data = buffer.getChannelData(channel);
  const fadeSamples = Math.max(1, Math.floor(sampleRate * FADE_IN_SEC));
  for (let i = 0; i < data.length; i++) {
    const fade = Math.min(1, i / fadeSamples);
    const decay = Math.exp(-(i / sampleRate) / DECAY_SEC);
    data[i] = (Math.random() * 2 - 1) * decay * fade;
  }
}
