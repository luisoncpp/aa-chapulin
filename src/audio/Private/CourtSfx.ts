// @Architecture(descriptionShort="Synthesizes gavel strikes, desk slams, and whoosh sounds", type="synthesizer", icon="bolt")
/**
 * Procedural Courtroom Sound Effects Synthesizer
 * Generates courtroom audio waveforms for [[./SoundEngine.ts]].
 */

export class CourtSfx {
  // @Section(Gavel Synthesis)
  public static playGavel(ctx: AudioContext, dest: GainNode): void {
    const t = ctx.currentTime;
    CourtSfx.playGavelThud(ctx, dest, t);
    CourtSfx.playGavelCrack(ctx, dest, t);
  }

  private static playGavelThud(ctx: AudioContext, dest: GainNode, t: number): void {
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, t);
    osc.frequency.linearRampToValueAtTime(30, t + 0.35);

    oscGain.gain.setValueAtTime(0.95, t);
    oscGain.gain.linearRampToValueAtTime(0.001, t + 0.35);

    osc.connect(oscGain);
    oscGain.connect(dest);
    osc.start(t);
    osc.stop(t + 0.36);
  }

  private static playGavelCrack(ctx: AudioContext, dest: GainNode, t: number): void {
    const bufferSize = Math.floor(ctx.sampleRate * 0.1);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(950, t);
    filter.Q.setValueAtTime(3, t);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.85, t);
    gain.gain.linearRampToValueAtTime(0.001, t + 0.1);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(dest);
    noise.start(t);
  }

  // @Section(Desk Slam Synthesis)
  public static playDeskSlam(ctx: AudioContext, dest: GainNode): void {
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, t);
    osc.frequency.linearRampToValueAtTime(25, t + 0.3);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(500, t);

    gain.gain.setValueAtTime(0.95, t);
    gain.gain.linearRampToValueAtTime(0.001, t + 0.3);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(dest);

    osc.start(t);
    osc.stop(t + 0.32);
  }

  // @Section(Objection Whoosh Synthesis)
  public static playObjectionWhoosh(
    ctx: AudioContext,
    dest: GainNode,
    onClimaxHit: () => void
  ): void {
    const t = ctx.currentTime;
    const bufferSize = Math.floor(ctx.sampleRate * 0.25);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(350, t);
    filter.frequency.linearRampToValueAtTime(4500, t + 0.18);
    filter.Q.setValueAtTime(4, t);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.05, t);
    gain.gain.linearRampToValueAtTime(0.9, t + 0.1);
    gain.gain.linearRampToValueAtTime(0.001, t + 0.25);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(dest);
    noise.start(t);

    setTimeout(/*triggerChord*/ () => {
      onClimaxHit();
    }, /*delayInMs=*/ 110);
  }

  // @Section(Damage Synthesis)
  public static playDamage(ctx: AudioContext, dest: GainNode): void {
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(300, t);
    osc.frequency.linearRampToValueAtTime(60, t + 0.4);

    gain.gain.setValueAtTime(0.95, t);
    gain.gain.linearRampToValueAtTime(0.001, t + 0.4);

    osc.connect(gain);
    gain.connect(dest);
    osc.start(t);
    osc.stop(t + 0.42);
  }
}
