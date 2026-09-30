import { releaseOnEnd } from './VoiceTypes.js';

interface NoiseRequest {
  ctx: BaseAudioContext;
  dest: AudioNode;
  when: number;
  sec: number;
  filterFreq: number;
  filterType?: BiquadFilterType;
  gain: number;
  watch?: (node: AudioScheduledSourceNode, endAt: number) => void;
}

const noise = new WeakMap<BaseAudioContext, AudioBuffer>();

export function playNoise(req: NoiseRequest): void {
  const buffer = sharedNoise(req.ctx);
  const source = req.ctx.createBufferSource();
  source.buffer = buffer;
  const filter = req.ctx.createBiquadFilter();
  filter.type = req.filterType ?? 'bandpass';
  filter.frequency.setValueAtTime(req.filterFreq, req.when);
  const gain = req.ctx.createGain();
  gain.gain.setValueAtTime(req.gain, req.when);
  gain.gain.linearRampToValueAtTime(0.001, req.when + req.sec);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(req.dest);
  const duration = buffer.length / buffer.sampleRate;
  const offset = Math.random() * Math.max(0, duration - req.sec);
  source.start(req.when, offset, req.sec);
  source.stop(req.when + req.sec + 0.01);
  req.watch?.(source, req.when + req.sec + 0.01);
  releaseOnEnd(source, [filter, gain]);
}

function sharedNoise(ctx: BaseAudioContext): AudioBuffer {
  const cached = noise.get(ctx);
  if (cached) return cached;
  const length = ctx.sampleRate;
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
  noise.set(ctx, buffer);
  return buffer;
}
