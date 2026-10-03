"""Small deterministic stereo synthesizer for the standalone composition demo."""
import numpy as np
from scipy.signal import butter, sosfilt
from score import BPM, VOICES

RATE = 44100
STEP_SEC = 60 / BPM / 4
RNG = np.random.default_rng(1282026)


def release_envelope(t, spec):
    gate, attack, release = spec
    env = np.minimum(t / attack, 1.0)
    env *= np.exp(-np.maximum(t - gate, 0) / release)
    env[t > gate + release * 8] = 0
    return env


def harmonic_wave(phase, style):
    wave = np.zeros_like(phase)
    if style == 'triangle':
        for k in range(1, 14, 2):
            wave += (-1) ** ((k - 1) // 2) * np.sin(k * phase) / k ** 2
        return wave * 0.81
    if style == 'pulse':
        for k in range(1, 15):
            wave += np.sin(k * np.pi * 0.25) * np.cos(k * phase) / k
        return wave * 0.58
    for k in range(1, 10):
        wave += np.sin(k * phase) * np.exp(-0.44 * k) / k
    return wave


def piano(t, spec):
    freq, gate = spec
    phase = 2 * np.pi * freq * t
    tone = np.zeros_like(t)
    for partial, gain, decay in [(1, 1, 1.05), (2, .46, .52), (3, .23, .29),
                                  (4, .12, .16), (6, .055, .075)]:
        bend = 1 + .00014 * partial * partial
        tone += gain * np.sin(partial * phase * bend) * np.exp(-t / decay)
    tone *= release_envelope(t, (gate, .004, .075))
    return tone * .69


def epiano(t, spec):
    freq, gate = spec
    phase = 2 * np.pi * freq * t
    index = 1.2 * np.exp(-t / .17)
    tone = np.sin(phase + index * np.sin(phase))
    tone += .13 * np.sin(14 * phase) * np.exp(-t / .028)
    return tone * np.exp(-t / .65) * release_envelope(t, (gate, .004, .095))


def pitched_voice(event):
    voice = event['voice']
    gate = event['duration'] * STEP_SEC
    tail = .85 if voice == 'pad' else .65
    t = np.arange(round((gate + tail) * RATE)) / RATE
    freq = 440 * 2 ** ((event['note'] - 69) / 12)
    phase = 2 * np.pi * freq * t
    if voice == 'piano':
        return piano(t, (freq, gate))
    if voice == 'epiano':
        return epiano(t, (freq, gate))
    if voice == 'bass':
        tone = .82 * np.sin(phase) + .22 * harmonic_wave(phase, 'triangle')
        return tone * (.72 + .28 * np.exp(-t / .065)) * release_envelope(t, (gate, .006, .025))
    if voice == 'pulse':
        phase += .018 * np.sin(2 * np.pi * 5.2 * t) * np.minimum(t / .15, 1)
        tone = harmonic_wave(phase, 'pulse')
        return tone * release_envelope(t, (gate, .012, .09))
    tone = .58 * harmonic_wave(phase, 'saw')
    tone += .36 * harmonic_wave(phase * 1.0008, 'triangle')
    return tone * release_envelope(t, (gate, .07, .12))


def noise(t, spec):
    cutoff, kind = spec
    sos = butter(2, cutoff, btype=kind, fs=RATE, output='sos')
    return sosfilt(sos, RNG.normal(0, .55, len(t)))


def drum_voice(note):
    duration = {36: .23, 38: .19, 42: .067, 49: 1.1}[note]
    t = np.arange(round(duration * RATE)) / RATE
    if note == 36:
        phase = 2 * np.pi * (46 * t + 95 * .022 * (1 - np.exp(-t / .022)))
        return np.sin(phase) * np.exp(-t / .063) * np.minimum(t / .001, 1)
    if note == 38:
        body = .28 * np.sin(2 * np.pi * 185 * t) * np.exp(-t / .035)
        return body + noise(t, (1500, 'highpass')) * np.exp(-t / .037) * .63
    if note == 42:
        return noise(t, (6800, 'highpass')) * np.exp(-t / .013) * .42
    shimmer = sum(np.sin(2 * np.pi * f * t) for f in [3311, 4679, 6013, 7817]) / 4
    return (noise(t, (4700, 'highpass')) * .33 + shimmer * .08) * np.exp(-t / .29)


def add_signal(buffer, signal, spec):
    start, pan, gain = spec
    begin = round(start * RATE)
    count = min(len(signal), len(buffer) - begin)
    if count <= 0:
        return
    angle = (pan + 1) * np.pi / 4
    buffer[begin:begin + count, 0] += signal[:count] * np.cos(angle) * gain
    buffer[begin:begin + count, 1] += signal[:count] * np.sin(angle) * gain


def render_stems(events, steps):
    count = round((steps * STEP_SEC + 2) * RATE)
    stems = {voice: np.zeros((count, 2), dtype=np.float64) for voice in VOICES}
    for event in events:
        voice = event['voice']
        settings = VOICES[voice]
        tone = drum_voice(event['note']) if voice == 'drums' else pitched_voice(event)
        velocity = (event['velocity'] / 100) ** 1.3
        add_signal(stems[voice], tone,
                   (event['step'] * STEP_SEC, settings['pan'], settings['gain'] * velocity))
    return stems


def space(stem, cyclic):
    wet = np.zeros_like(stem)
    for delay, gain in [(0.041, .065), (.089, .043), (.137, .029), (.211, .018)]:
        shift = round(delay * RATE)
        if cyclic:
            wet += np.roll(stem[:, ::-1], shift, axis=0) * gain
        else:
            wet[shift:] += stem[:-shift, ::-1] * gain
    return stem + wet


def mix_stems(stems, steps):
    length = round(steps * STEP_SEC * RATE)
    cyclic = {}
    for voice, stem in stems.items():
        wrapped = stem[:length].copy()
        wrapped[:len(stem) - length] += stem[length:]
        cyclic[voice] = wrapped if voice in ('bass', 'drums') else space(wrapped, cyclic=True)
    return sum(cyclic.values()), cyclic


def mix_linear(stems):
    return sum(stem if voice in ('bass', 'drums') else space(stem, cyclic=False)
               for voice, stem in stems.items())
