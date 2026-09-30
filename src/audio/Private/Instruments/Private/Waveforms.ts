const waves = new WeakMap<BaseAudioContext, Map<string, PeriodicWave>>();

export function periodicWave(ctx: BaseAudioContext, name: 'pulse12' | 'pulse25' | 'organ'): PeriodicWave {
  const table = waveTable(ctx);
  const cached = table.get(name);
  if (cached) return cached;
  const wave = name === 'organ' ? organWave(ctx) : pulseWave(ctx, name === 'pulse12' ? 0.125 : 0.25);
  table.set(name, wave);
  return wave;
}

function waveTable(ctx: BaseAudioContext): Map<string, PeriodicWave> {
  const existing = waves.get(ctx);
  if (existing) return existing;
  const created = new Map<string, PeriodicWave>();
  waves.set(ctx, created);
  return created;
}

function pulseWave(ctx: BaseAudioContext, duty: number): PeriodicWave {
  const real = new Float32Array(65);
  const imag = new Float32Array(65);
  // A ±1 pulse, like the built-in square; the textbook 0-to-1 pulse is half the swing.
  for (let n = 1; n <= 64; n++) real[n] = (4 / (n * Math.PI)) * Math.sin(n * Math.PI * duty);
  return ctx.createPeriodicWave(real, imag, { disableNormalization: true });
}

function organWave(ctx: BaseAudioContext): PeriodicWave {
  const real = new Float32Array(9);
  const imag = new Float32Array(9);
  const drawbars = [0, 1, 0.75, 0.55, 0.4, 0, 0.35, 0, 0.22];
  for (let n = 1; n < drawbars.length; n++) real[n] = drawbars[n];
  return ctx.createPeriodicWave(real, imag, { disableNormalization: true });
}
