import type { ChannelName } from '../../../../types/index.js';
import { reverbImpulse } from './ReverbImpulse.js';

export type StripName = ChannelName | 'drums';

const STRIPS: StripName[] = ['bass', 'lead', 'chords', 'counter', 'drums'];
const VOICE_CAP = 48;
const SESSION_FADE_SEC = 0.03;

interface Strip {
  output: AudioNode;
  pan: AudioParam | null;
}

interface Session {
  gain: GainNode;
  strips: Map<StripName, Strip>;
}

/**
 * Channel strips, one fading session, and a generated reverb.
 * Voices connect to the session that is current when they start.
 */
export class MusicBus {
  private static readonly buses = new WeakMap<BaseAudioContext, MusicBus>();
  private session: Session | null = null;
  private reverb: GainNode | null = null;
  private voices = 0;

  private constructor(
    private readonly ctx: AudioContext,
    private readonly bgm: AudioNode
  ) {}

  public static for(ctx: AudioContext, bgm: AudioNode): MusicBus {
    const existing = MusicBus.buses.get(ctx);
    if (existing) return existing;
    const bus = new MusicBus(ctx, bgm);
    MusicBus.buses.set(ctx, bus);
    return bus;
  }

  /** `fresh` fades the previous session. A paused resume keeps the current one. */
  public open(fresh: boolean): void {
    if (fresh || !this.session) this.beginSession();
  }

  public beginSession(): void {
    this.endSession();
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(1, this.ctx.currentTime);
    // Dry only: each voice feeds the reverb itself, scaled by its patch's reverbSend.
    gain.connect(this.bgm);
    const strips = new Map<StripName, Strip>();
    for (const name of STRIPS) strips.set(name, this.createStrip(gain));
    this.session = { gain, strips };
  }

  public endSession(): void {
    const dying = this.session;
    if (!dying) return;
    this.fadeOut(dying.gain);
    this.session = null;
  }

  public strip(name: StripName): AudioNode {
    this.ensureSession();
    return this.session!.strips.get(name)!.output;
  }

  public setPan(name: StripName, pan: number): void {
    const strip = this.session?.strips.get(name);
    strip?.pan?.setValueAtTime(pan, this.ctx.currentTime);
  }

  public reverbInput(): AudioNode {
    return this.reverbSend();
  }

  public admits(name: StripName): boolean {
    if (name === 'bass' || name === 'drums') return true;
    return this.voices < VOICE_CAP;
  }

  public watch(node: AudioScheduledSourceNode): void {
    this.voices++;
    node.onended = () => {
      this.voices = Math.max(0, this.voices - 1);
    };
  }

  public voiceCount(): number {
    return this.voices;
  }

  private ensureSession(): void {
    if (!this.session) this.beginSession();
  }

  private fadeOut(gain: GainNode): void {
    const now = this.ctx.currentTime;
    gain.gain.cancelScheduledValues(now);
    gain.gain.setValueAtTime(gain.gain.value, now);
    gain.gain.linearRampToValueAtTime(0.0001, now + SESSION_FADE_SEC);
    const hold = gain;
    setTimeout(/*disconnectFadedSession*/ () => {
      hold.disconnect();
    }, /*delayInMs=*/ SESSION_FADE_SEC * 1000 + 10);
  }

  private createStrip(session: AudioNode): Strip {
    const gain = this.ctx.createGain();
    const panner = createPanner(this.ctx);
    gain.connect(panner);
    panner.connect(session);
    const pan = 'pan' in panner ? (panner as StereoPannerNode).pan : null;
    return { output: gain, pan };
  }

  private reverbSend(): GainNode {
    if (this.reverb) return this.reverb;
    const send = this.ctx.createGain();
    send.gain.setValueAtTime(1, this.ctx.currentTime);
    const convolver = this.ctx.createConvolver();
    convolver.normalize = true;
    convolver.buffer = reverbImpulse(this.ctx);
    send.connect(convolver);
    convolver.connect(this.bgm);
    this.reverb = send;
    return send;
  }
}

function createPanner(ctx: AudioContext): AudioNode {
  if (typeof ctx.createStereoPanner !== 'function') return ctx.createGain();
  return ctx.createStereoPanner();
}
