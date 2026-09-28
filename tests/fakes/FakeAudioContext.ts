// @Architecture(descriptionShort="In-memory fake Web Audio API context and node tree", type="fake", icon="bolt")
/**
 * Stateful Fake AudioContext implementation for unit testing audio synthesis without hardware.
 * `currentTime` follows faked `Date.now()` unless a test assigns it directly.
 */

type ParamEventType = 'set' | 'linearRamp' | 'exponentialRamp' | 'setTarget' | 'cancel';

export class FakeAudioParam {
  public value: number;
  public events: Array<{ type: ParamEventType; value: number; time: number }> = [];

  constructor(defaultValue = 1) {
    this.value = defaultValue;
  }

  public setValueAtTime(value: number, time: number): void {
    this.value = value;
    this.events.push({ type: 'set', value, time });
  }

  public linearRampToValueAtTime(value: number, time: number): void {
    this.value = value;
    this.events.push({ type: 'linearRamp', value, time });
  }

  public exponentialRampToValueAtTime(value: number, time: number): void {
    this.value = value;
    this.events.push({ type: 'exponentialRamp', value, time });
  }

  public setTargetAtTime(value: number, time: number, _timeConstant: number): void {
    this.value = value;
    this.events.push({ type: 'setTarget', value, time });
  }

  public cancelScheduledValues(time: number): void {
    this.events.push({ type: 'cancel', value: this.value, time });
  }
}

export class FakeAudioNode {
  public connections: unknown[] = [];

  public connect(dest: unknown): unknown {
    this.connections.push(dest);
    return dest;
  }

  public disconnect(): void {
    this.connections = [];
  }
}

export class FakeGainNode extends FakeAudioNode {
  public gain = new FakeAudioParam(1);
}

export class FakeOscillatorNode extends FakeAudioNode {
  public type: OscillatorType = 'sine';
  public onended: (() => void) | null = null;
  public periodicWave: FakePeriodicWave | null = null;
  private readonly _frequency = new FakeAudioParam(440);
  private readonly _detune = new FakeAudioParam(0);
  public started = false;
  public stopped = false;
  public startTime = 0;
  public stopTime = 0;

  public get frequency(): FakeAudioParam {
    return this._frequency;
  }

  public get detune(): FakeAudioParam {
    return this._detune;
  }

  public setPeriodicWave(wave: FakePeriodicWave): void {
    this.periodicWave = wave;
  }

  public start(when = 0): void {
    this.started = true;
    this.startTime = when;
  }

  public stop(when = 0): void {
    this.stopped = true;
    this.stopTime = when;
  }
}

export class FakeBiquadFilterNode extends FakeAudioNode {
  public type: BiquadFilterType = 'lowpass';
  public frequency = new FakeAudioParam(350);
  public Q = new FakeAudioParam(1);
}

export class FakeStereoPannerNode extends FakeAudioNode {
  public pan = new FakeAudioParam(0);
}

export class FakeConvolverNode extends FakeAudioNode {
  public buffer: FakeAudioBuffer | null = null;
  public normalize = true;
}

export class FakePeriodicWave {
  constructor(
    public readonly real: Float32Array,
    public readonly imag: Float32Array
  ) {}
}

export class FakeAudioBuffer {
  private readonly channelData: Float32Array[];

  constructor(
    public readonly numberOfChannels: number,
    public readonly length: number,
    public readonly sampleRate: number
  ) {
    this.channelData = Array.from({ length: numberOfChannels }, () => new Float32Array(length));
  }

  public getChannelData(channel: number): Float32Array {
    return this.channelData[channel] || new Float32Array(this.length);
  }
}

export class FakeAudioBufferSourceNode extends FakeAudioNode {
  public buffer: FakeAudioBuffer | null = null;
  public onended: (() => void) | null = null;
  public started = false;
  public stopped = false;
  public startTime = 0;
  public offset = 0;
  public duration = 0;

  public stopTime = 0;

  public start(when = 0, offset = 0, duration = 0): void {
    this.started = true;
    this.startTime = when;
    this.offset = offset;
    this.duration = duration;
  }

  public stop(when = 0): void {
    this.stopped = true;
    this.stopTime = when;
  }
}

export class FakeAudioContext {
  public sampleRate = 44100;
  public state: AudioContextState = 'suspended';
  public destination = new FakeGainNode();
  public readonly oscillators: FakeOscillatorNode[] = [];
  public readonly gains: FakeGainNode[] = [];
  public readonly filters: FakeBiquadFilterNode[] = [];
  public readonly sources: FakeAudioBufferSourceNode[] = [];
  private readonly originMs = Date.now();
  private timeOverride: number | null = null;

  public get currentTime(): number {
    if (this.timeOverride !== null) return this.timeOverride;
    return Math.max(0, (Date.now() - this.originMs) / 1000);
  }

  public set currentTime(seconds: number) {
    this.timeOverride = seconds;
  }

  public createGain(): FakeGainNode {
    const node = new FakeGainNode();
    this.gains.push(node);
    return node;
  }

  public createOscillator(): FakeOscillatorNode {
    const node = new FakeOscillatorNode();
    this.oscillators.push(node);
    return node;
  }

  public createBiquadFilter(): FakeBiquadFilterNode {
    const node = new FakeBiquadFilterNode();
    this.filters.push(node);
    return node;
  }

  public createStereoPanner(): FakeStereoPannerNode {
    return new FakeStereoPannerNode();
  }

  public createConvolver(): FakeConvolverNode {
    return new FakeConvolverNode();
  }

  public createPeriodicWave(real: Float32Array, imag: Float32Array): FakePeriodicWave {
    return new FakePeriodicWave(real, imag);
  }

  public createBuffer(channels: number, length: number, sampleRate: number): FakeAudioBuffer {
    return new FakeAudioBuffer(channels, length, sampleRate);
  }

  public createBufferSource(): FakeAudioBufferSourceNode {
    const node = new FakeAudioBufferSourceNode();
    this.sources.push(node);
    return node;
  }

  public async resume(): Promise<void> {
    this.state = 'running';
  }

  public async suspend(): Promise<void> {
    this.state = 'suspended';
  }

  public async close(): Promise<void> {
    this.state = 'closed';
  }
}
