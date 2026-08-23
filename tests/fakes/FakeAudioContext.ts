// @Architecture(descriptionShort="In-memory fake Web Audio API context and node tree", type="fake", icon="bolt")
/**
 * Stateful Fake AudioContext implementation for unit testing audio synthesis without hardware.
 */

export class FakeAudioParam {
  public value: number;
  public events: Array<{ type: 'set' | 'linearRamp'; value: number; time: number }> = [];

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
}

export class FakeAudioNode {
  public connections: any[] = [];

  public connect(dest: any): any {
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
  public frequency = new FakeAudioParam(440);
  public started = false;
  public stopped = false;
  public startTime = 0;
  public stopTime = 0;

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
  public started = false;
  public stopped = false;

  public start(_when = 0): void {
    this.started = true;
  }

  public stop(_when = 0): void {
    this.stopped = true;
  }
}

export class FakeAudioContext {
  public currentTime = 0;
  public sampleRate = 44100;
  public state: AudioContextState = 'suspended';
  public destination = new FakeGainNode();

  public createGain(): FakeGainNode {
    return new FakeGainNode();
  }

  public createOscillator(): FakeOscillatorNode {
    return new FakeOscillatorNode();
  }

  public createBiquadFilter(): FakeBiquadFilterNode {
    return new FakeBiquadFilterNode();
  }

  public createBuffer(channels: number, length: number, sampleRate: number): FakeAudioBuffer {
    return new FakeAudioBuffer(channels, length, sampleRate);
  }

  public createBufferSource(): FakeAudioBufferSourceNode {
    return new FakeAudioBufferSourceNode();
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
